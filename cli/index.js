#!/usr/bin/env node

const https = require('https');

const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : '';

const defaultProjects = [
  {
    name: "T.A.R.S AI Assistant",
    description: "A generative AI assistant built with LLMs and modern web tech.",
    technologies: ["React", "TypeScript", "LLMs"],
    url: "https://nikunjmaheshwari.in/tars"
  },
  {
    name: "Should_I_Bunk",
    description: "Mobile app that helps students decide whether to attend a class based on predictive factors.",
    technologies: ["React Native", "Python", "TypeScript"],
    url: "https://github.com/markstone111/Should_I_Bunk"
  },
  {
    name: "Human Pose Estimation",
    description: "Real-time human pose estimation web application using OpenCV and MediaPipe.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
    url: "https://human-pose.streamlit.app/"
  },
  {
    name: "NLP-Powered ChatBot",
    description: "An intent-based chatbot built with Natural Language Processing.",
    technologies: ["Python", "TensorFlow", "Streamlit"],
    url: "https://github.com/markstone111/side_end.dev"
  },
  {
    name: "Developer Portfolio",
    description: "Neo-brutalist interactive developer portfolio with terminal experience.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    url: "https://nikunjmaheshwari.in"
  }
];

function printProjects(projects) {
  console.log("\n=== Nikunj's Featured Projects ===\n");
  projects.forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name}`);
    console.log(`   ${p.description}`);
    const tech = Array.isArray(p.technologies) ? p.technologies.join(', ') : (p.technologies || '');
    if (tech) console.log(`   Tech: ${tech}`);
    console.log(`   URL:  ${p.url}\n`);
  });
}

if (!command || command === 'help' || command === '--help' || command === '-h') {
  console.log("\nNikunj CLI");
  console.log("Usage:");
  console.log("  npx nikunj <command>");
  console.log("  nikunj <command>         (if installed globally: npm i -g nikunj)\n");
  console.log("Commands:");
  console.log("  projects   List all featured projects");
  console.log("  about      Get information about Nikunj Maheshwari");
  console.log("  resume     Get link to Nikunj's resume");
  console.log("  contact    Get contact and social links\n");
  process.exit(0);
}

if (command === 'projects') {
  const url = 'https://www.nikunjmaheshwari.in/api/projects.json';
  
  let handled = false;
  const finish = (projects) => {
    if (handled) return;
    handled = true;
    printProjects(projects);
  };

  const req = https.get(url, { timeout: 2500 }, (res) => {
    if (res.statusCode !== 200) {
      finish(defaultProjects);
      return;
    }

    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.status === 'success' && Array.isArray(parsed.data) && parsed.data.length > 0) {
          finish(parsed.data);
          return;
        }
      } catch (e) {
        // Parse error fallback
      }
      finish(defaultProjects);
    });
  });

  req.on('error', () => {
    finish(defaultProjects);
  });

  req.on('timeout', () => {
    req.destroy();
    finish(defaultProjects);
  });
} else if (command === 'about') {
  console.log("\nNikunj Maheshwari - Software Engineer");
  console.log("ML Enthusiast | Building Innovative Mobile & Web Apps");
  console.log("Open to collaborations in AI x Full Stack Development.");
  console.log("\nWebsite: https://nikunjmaheshwari.in");
  console.log("GitHub:  https://github.com/markstone111\n");
} else if (command === 'resume') {
  console.log("\nNikunj's Resume:");
  console.log("https://drive.google.com/file/d/1D--DFjIA2_KUhsAAtP9jfRqZZqohmiJT/view\n");
} else if (command === 'contact') {
  console.log("\nConnect with Nikunj:");
  console.log("Email:    contact@nikunjmaheshwari.xyz");
  console.log("GitHub:   https://github.com/markstone111");
  console.log("LinkedIn: https://www.linkedin.com/in/nikunjm111/");
  console.log("Website:  https://nikunjmaheshwari.in\n");
} else {
  console.error(`\nUnknown command: "${command}". Run "npx nikunj" to see available commands.\n`);
  process.exit(1);
}
