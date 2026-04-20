import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { Pinecone } from '@pinecone-database/pinecone';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load variables from .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
// The default Pinecone index name. We will use the Vercel default if specified, else 'portfolio'.
const INDEX_NAME = process.env.PINECONE_INDEX_NAME || 'portfolio'; 

if (!GEMINI_API_KEY || !PINECONE_API_KEY) {
  console.error("CRITICAL ERROR: API Keys missing in .env.local");
  process.exit(1);
}

// Initialize Clients
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const embeddingModel = genAI.getGenerativeModel({ model: "embedding-001" });

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

async function main() {
  console.log("==> Starting TARS Vector Seeding Pipeline...");

  // 1. Read the Markdown File
  const brainPath = path.resolve(__dirname, '../nikunj.md');
  if (!fs.existsSync(brainPath)) {
    console.error(`File not found: ${brainPath}`);
    process.exit(1);
  }
  
  const rawMarkdown = fs.readFileSync(brainPath, 'utf8');

  // 2. Semantic Chunking Strategy
  // We split the document securely by the Level 2 and Level 1 headers to preserve logical grouping.
  console.log("==> Performing Semantic Chunking...");
  
  const rawSections = rawMarkdown.split(/(?=^## |\n## |\n# )/m);
  
  let chunks: { text: string, metadata: { section: string } }[] = [];
  
  let currentMainTopic = "General";

  for (let section of rawSections) {
    const trimmed = section.trim();
    if (!trimmed) continue;

    // Detect if this is an H1, and adjust the main topic context
    if (trimmed.startsWith('# ')) {
      const match = trimmed.match(/^# (.*)/);
      if (match) currentMainTopic = match[1];
      // We don't necessarily chunk the pure H1 if it has no meaty content, 
      // but let's include it anyway just in case the LLM searches for the main topic keyword.
    }

    let sectionName = currentMainTopic;
    if (trimmed.startsWith('## ')) {
      const match = trimmed.match(/^## (.*)/);
      if (match) sectionName = `${currentMainTopic} > ${match[1]}`;
    }

    chunks.push({
      text: trimmed,
      metadata: { section: sectionName }
    });
  }

  console.log(`==> Extracted ${chunks.length} semantically pure chunks.`);

  // 3. Connect to Pinecone Index
  console.log(`==> Connecting to Pinecone Index: ${INDEX_NAME}`);
  
  // NOTE: Pinecone requires the index to exist before upserting.
  // During first time setups, Pinecone indexes need to be created via their Cloud Console.
  // Assuming the user has created an index named "portfolio" with dimension 768 (Gemini standard) returning Cosine similarity.
  const index = pinecone.index(INDEX_NAME);

  // 4. Generate Embeddings & Upsert
  console.log("==> Generating Gemini Embeddings and Upserting to Vector Database...");

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    
    // Fallback protection: if chunk is too tiny, it might lack context
    if (chunk.text.length < 10) continue;

    try {
      const result = await embeddingModel.embedContent(chunk.text);
      const embeddingArray = result.embedding.values;

      // Upsert into Pinecone
      await index.upsert([{
        id: `chunk_v1_${i}`,
        values: embeddingArray, // Vector representation (768 dimensions for text-embedding-004)
        metadata: {
          text: chunk.text, // The raw text to feed back to the Gemini LLM during completion
          section: chunk.metadata.section
        }
      }]);

      console.log(`  -> Upserted chunk ${i + 1}/${chunks.length}: [${chunk.metadata.section}]`);
      
      // Delay slightly to respect free tier API limits on Gemini and Pinecone
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (e) {
      console.error(`  -> Failed to generated embedding for chunk ${i}:`, e);
    }
  }

  console.log("==> TARS Vector Seeding COMPLETE!");
}

main().catch(console.error);
