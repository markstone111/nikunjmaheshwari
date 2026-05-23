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
    id: "civic-resolve",
    name: "CivicResolve",
    description: "A large-scale civic issue reporting system that includes multilingual support, real-time notifications using FCM, and a dedicated admin dashboard. The system integrates a custom machine learning model to estimate issue severity and includes offline capabilities for disaster scenarios.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: [
      "React Native", 
      "Expo Router", 
      "Node.js", 
      "React-Native-Maps", 
      "Firestore", 
      "Supabase WebSockets", 
      "Firebase Auth", 
      "Firebase Cloud Messaging"
    ],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "https://drive.google.com/file/d/1OmRz84W2W23bQBrnfx1Ubk9teXq3lh22/view?usp=drivesdk",
    githubLink: "https://github.com/markstone111/Civic_Resolve"
  },
  {
    id: "portfolio-website",
    name: "Neo-Brutalist Portfolio",
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
    description: "Stop guessing and start optimizing. Should I Bunk? bridges the gap between machine learning and daily student survival. By feeding real-world constraints—like professor strictness, test proximity, and current attendance thresholds—into a Python-based logistic regression model, this app delivers real-time, AI-backed verdicts on whether you can safely skip a lecture.",
    bulletPoints: [
      "Implemented a backend machine learning model directly serving predictions",
      "Designed a sleek and intuitive mobile UI for rapid data entry",
      "Implemented CSV file export for data analysis"
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
  },
  
  {
    id: "chatsphere",
    name: "ChatSphere",
    description: "An AI chatbot that chats, understands, and learns — built with NLP & ML.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: ["Python", "TensorFlow", "Streamlit", "GTTS", "Scikit-learn"],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)",
    githubLink: "https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)"
  },
  {
    id: "satya",
    name: "Satya",
    description: "Fact-checking platform with a browser extension to detect fake news & fraud, auto-reporting suspicious cases.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: ["JavaScript", "Django", "HTML", "Tailwind CSS"],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "https://satya-one.vercel.app/",
    githubLink: "https://github.com/markstone111/Satya"
  },
  {
    id: "will-they-hire-me",
    name: "Will_They_Hire_Me (In Progress)",
    description: "An AI-driven mock interview platform with voice support for realistic practice.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: ["TypeScript", "Next.js", "Firebase", "Vapi", "Firebase Auth"],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "",
    githubLink: "https://github.com/markstone111/will_they_hire_me"
  },
  {
    id: "bytecanvas",
    name: "ByteCanvas (In Progress)",
    description: "A next-gen online IDE with live previews and built-in AI coding assistance.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: ["TypeScript", "Next.js", "Firebase", "Next Auth", "Web Sockets", "Web Container"],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "",
    githubLink: "https://github.com/markstone111/ByteCanvas"
  },
  {
    id: "athletica",
    name: "Athletica (In Progress)",
    description: "Connecting athletes & coaches on one platform — for networking & growth.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: ["Dart", "Flutter", "Firebase", "Node.js"],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "",
    githubLink: ""
  },
  {
    id: "taskhive",
    name: "TaskHive",
    description: "A smart task manager with quotes, search, and reminders to keep you focused.",
    bulletPoints: [
      "",
      ""
    ],
    techStack: ["Kotlin", "Jetpack", "Room Database"],
    backgroundColor: "",
    imageUrl: "",
    liveLink: "",
    githubLink: ""
  }
];
