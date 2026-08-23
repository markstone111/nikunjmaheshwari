export default function handler(req: any, res: any) {
  // Always include Vary: Accept for content negotiation
  res.setHeader('Vary', 'Accept');

  // Hardcode some projects or pull them from data/projects.json if we had it.
  const projects = [
    {
      id: "ai-assistant",
      name: "T.A.R.S AI Assistant",
      description: "A generative AI assistant built with LLMs and modern web tech.",
      technologies: ["React", "TypeScript", "LLMs"],
      url: "https://nikunjmaheshwari.xyz/tars"
    },
    {
      id: "portfolio",
      name: "Developer Portfolio",
      description: "My personal developer portfolio.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      url: "https://nikunjmaheshwari.xyz"
    }
  ];

  const accept = req.headers['accept'] || '';

  if (accept.includes('text/markdown')) {
    const md = `# Nikunj Maheshwari - Projects API

Here are my featured projects:

${projects.map(p => `## ${p.name}\n**Description:** ${p.description}\n**Tech Stack:** ${p.technologies.join(', ')}\n**URL:** [View Project](${p.url})\n`).join('\n')}
    `;
    return res.status(200).setHeader('Content-Type', 'text/markdown; charset=utf-8').send(md);
  }

  // Default to JSON
  return res.status(200).json({
    status: "success",
    data: projects
  });
}
