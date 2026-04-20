export interface Project {
  id: string;
  name: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  backgroundColor: string; // Tailwind class like 'bg-brutal-blue'
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    name: "Legendary Neo-Brutalist Portfolio",
    description: "A highly interactive, visually striking personal portfolio designed with a neo-brutalist aesthetic, parallax scroll mechanics, and an integrated AI terminal.",
    bulletPoints: [
      "Built a fully custom terminal interface with interactive commands",
      "Engineered scroll-linked parallax animations using Framer Motion",
      "Designed a responsive layout with stark contrast and heavy drop shadows"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    backgroundColor: "bg-brutal-green",
    imageUrl: "/hero_section_pic_2_copy.png", // Placeholder image
    liveLink: "https://nikunjmaheshwari.vercel.app/",
    githubLink: "https://github.com/markstone111/nikunjmaheshwari"
  },
  {
    id: "should-i-bunk",
    name: "Should I Bunk",
    description: "A mobile application utilizing logistic regression to help students statistically decide whether attending a specific class is optimal.",
    bulletPoints: [
      "Implemented a backend machine learning model directly serving predictions",
      "Designed a sleek and intuitive mobile UI for rapid data entry"
    ],
    techStack: ["Flutter", "Python", "Machine Learning"],
    backgroundColor: "bg-brutal-blue",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/markstone111"
  },
  {
    id: "ecommerce-app",
    name: "Full-Stack eCommerce App",
    description: "A comprehensive digital marketplace mobile app boasting secure payment gateways and real-time inventory syncing.",
    bulletPoints: [
      "Integrated secure a payment gateway for seamless transactions",
      "Utilized Firebase for real-time order tracking and auth"
    ],
    techStack: ["Flutter", "Firebase", "Stripe API"],
    backgroundColor: "bg-brutal-pink",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",    
    githubLink: "https://github.com/markstone111"
  },
  {
    id: "human-pose-estimation",
    name: "Human Pose Estimation",
    description: "Real-time AI web app that detects human poses and joint tracking via the webcam using deep learning models.",
    bulletPoints: [
      "Achieved 30+ FPS real-time tracking in the browser",
      "Visualized skeletal nodes natively on an HTML canvas overlay"
    ],
    techStack: ["Python", "OpenCV", "MediaPipe"],
    backgroundColor: "bg-brutal-yellow",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/markstone111"
  }
];
