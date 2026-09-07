export const config = {
  runtime: 'edge',
};

const projects = [
  {
    id: "tars-ai",
    name: "T.A.R.S AI Assistant",
    description: "A generative AI assistant built with LLMs and modern web tech.",
    technologies: ["React", "TypeScript", "LLMs"],
    url: "https://nikunjmaheshwari.in/tars"
  },
  {
    id: "should-i-bunk",
    name: "Should_I_Bunk",
    description: "Mobile app that helps students decide whether to attend a class based on predictive factors.",
    technologies: ["React Native", "Python", "TypeScript"],
    url: "https://github.com/markstone111/Should_I_Bunk"
  },
  {
    id: "human-pose",
    name: "Human Pose Estimation",
    description: "Real-time human pose estimation web application using OpenCV and MediaPipe.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
    url: "https://human-pose.streamlit.app/"
  },
  {
    id: "chatbot",
    name: "NLP-Powered ChatBot",
    description: "An intent-based chatbot created using Natural Language Processing.",
    technologies: ["Python", "TensorFlow", "Streamlit"],
    url: "https://github.com/markstone111/side_end.dev"
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: "Neo-brutalist interactive developer portfolio.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    url: "https://nikunjmaheshwari.in"
  }
];

export default async function handler(req: Request) {
  const accept = req.headers.get('accept') || '';

  if (accept.includes('text/markdown')) {
    const md = `# Nikunj Maheshwari - Projects API

Here are my featured projects:

${projects.map(p => `## ${p.name}\n**Description:** ${p.description}\n**Tech Stack:** ${p.technologies.join(', ')}\n**URL:** [View Project](${p.url})\n`).join('\n')}
`;
    return new Response(md, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  return new Response(JSON.stringify({
    status: "success",
    data: projects
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Vary': 'Accept',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
