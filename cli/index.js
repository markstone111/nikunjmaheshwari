#!/usr/bin/env node

const https = require('https');

const args = process.argv.slice(2);
const command = args[0];

if (!command) {
  console.log("Nikunj CLI");
  console.log("Usage: nikunj <command>");
  console.log("");
  console.log("Commands:");
  console.log("  projects   List all featured projects");
  console.log("  about      Get information about Nikunj Maheshwari");
  process.exit(1);
}

if (command === 'projects') {
  const url = 'https://nikunjmaheshwari.xyz/api/projects';
  
  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const parsedData = JSON.parse(data);
        if (parsedData.status === 'success') {
          console.log("\\n=== Nikunj's Projects ===\\n");
          parsedData.data.forEach(project => {
            console.log(`> ${project.name}`);
            console.log(`  ${project.description}`);
            console.log(`  Tech: ${project.technologies.join(', ')}`);
            console.log(`  URL: ${project.url}\\n`);
          });
        } else {
          console.error("Error fetching projects.");
        }
      } catch (e) {
        console.error("Error parsing response.");
      }
    });

  }).on('error', (err) => {
    console.error("Error: " + err.message);
  });
} else if (command === 'about') {
  console.log("Nikunj Maheshwari is an Android and Flutter developer based in Shillong, India.");
  console.log("Visit https://nikunjmaheshwari.xyz for more details.");
} else {
  console.error(`Unknown command: ${command}`);
}
