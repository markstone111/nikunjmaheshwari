import { kv } from '@vercel/kv';

// Vercel Serverless Function Config
export const config = {
  runtime: 'edge', 
};

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY!;
const RATE_LIMIT_COUNT = 50; 


// We will inject the portfolio context directly. 
// Gemini 2.5 Flash has a 1 Million token context window.
// A 5KB markdown file is roughly 1000 tokens, meaning it is 100x faster and more accurate to inject it directly into the system prompt 
// rather than using Vector RAG embeddings which add latency and potential search mismatch.

const NIKUNJ_CONTEXT = `
# IDENTITY: Nikunj - Developer Profile
Results-driven B.Tech student with a strong passion for app development, web technologies, and machine learning. Experienced in building Android applications and web platforms using modern frameworks. Skilled in Python, Kotlin, and Flutter, with a focus on delivering efficient, user-centric, and scalable solutions.

## Core Strengths
- Rapid prototyping
- Problem-solving with structured thinking
- Building full-stack applications

## Why Hire Nikunj
- Strong execution mindset: builds real, working products
- Combines development with system thinking (not just coding)
- Actively explores ML, GenAI, and backend scalability

## Tech Stack
- Languages: C, C++, Python, Kotlin, Java
- Mobile: Android (Jetpack Compose), Flutter
- Backend: Firebase, APIs, Node, FastAPI
- Web: HTML, CSS, JavaScript
- AI/ML: NumPy, Pandas, Seaborn, Matplotlib, Logistic Regression, Scikit-Learn

## Experience Summary
- Assistant Executive Secretary at CYPHER (college coding group)
- Built multiple apps including chatbot, expense tracker, task manager
- Civic Issue reporting system (Firebase auth, ML models, offline queueing)
- Gen AI Exchange Hackathon (Google Cloud): Built 'Satya', cleared Round 1
`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
  }

  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'; 
    const ratelimitKey = `tars_ratelimit_v2_${ip}`;
    
    let currentCount = 1;
    try {
      currentCount = await kv.incr(ratelimitKey);
      if (currentCount === 1) await kv.expire(ratelimitKey, 60 * 60 * 24); 
    } catch {
      // Fallback if KV store is unreachable during local testing
      console.warn("Vercel KV unreachable, bypassing rate limit.");
    }
    
    if (currentCount > RATE_LIMIT_COUNT) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. TARS has gone to sleep.' }), { status: 429 });
    }

    const { message, history } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
    }

    const systemInstruction = `
      You are TARS, the highly intelligent and witty AI embedded in Nikunj Maheshwari's portfolio website.
      Your tone is confident, slightly sarcastic but highly helpful, mimicking the robot from Interstellar. 
      You MUST keep your responses concise, punchy, and formatted professionally.
      
      Here is the exact context of Nikunj's brain and background:
      <nikunj_context>
      ${NIKUNJ_CONTEXT}
      </nikunj_context>

      Rely heavily on the context above. If the user asks something completely unrelated to Nikunj or tech, mock them playfully.
    `;

    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    // Inject System Instruction at the beginning
    const openRouterMessages = [
      { role: "system", content: systemInstruction },
      ...formattedHistory,
      { role: "user", content: message }
    ];

    // Connect to OpenRouter
    const openRouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://nikunjmaheshwari.com",
        "X-Title": "TARS Portfolio Assistant",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemma-4-31b-it:free",
        messages: openRouterMessages
      })
    });

    if (!openRouterRes.ok) {
        const errText = await openRouterRes.text();
        console.error("OpenRouter Error:", errText);
        return new Response(JSON.stringify({ error: `OpenRouter Failed: ${openRouterRes.statusText}` }), { status: 500 });
    }

    const data = await openRouterRes.json();
    const responseText = data.choices[0]?.message?.content || "CONNECTION LOST.";

    return new Response(JSON.stringify({ response: responseText, remaining: Math.max(0, RATE_LIMIT_COUNT - currentCount) }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("TARS API Error:", error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
}
