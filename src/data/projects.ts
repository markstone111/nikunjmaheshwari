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
    id: "kasunwai",
    name: "KaSunwai",
    description: "A large-scale civic issue reporting system that includes multilingual support, real-time notifications using FCM, and a dedicated admin dashboard. The system integrates a custom machine learning model to estimate issue severity and includes offline capabilities for disaster scenarios.",
    bulletPoints: [
      "Build a full-stack Flutter app for iOS and Android, featuring multi-region server deployments for low latency.",
      "Implemented OCR and geo-tagging for automated issue classification and validation.",
      "Utilized Google Gemini AI for advanced issue analysis and predictive routing to the appropriate government agencies.",
      "Developed a custom backend using Go and FastAPI, integrated with Supabase for data management.",
      "Implemented real-time notifications using Firebase Cloud Messaging and Supabase WebSockets."
    ],
    techStack: [
      "Dart", 
      "Go", 
      "FastAPI", 
      "Google Gemini API", 
      "Supabase SQL",
      "Firebase",
      "Websockets",
      "OCR"
    ],
    backgroundColor: "bg-brutal-pink",
    imageUrl: "/assets/project_thumbnail/kasunwai.png",
    githubLink: "https://github.com/markstone111/nehu-reporting"
  },
  {
    id: "civic-resolve",
    name: "CivicResolve",
    description: "A large-scale civic issue reporting system that includes multilingual support, real-time notifications using FCM, and a dedicated admin dashboard. The system integrates a custom machine learning model to estimate issue severity and includes offline capabilities for disaster scenarios.",
    bulletPoints: [
      "Built an AI-driven civic intelligence platform for infrastructure prioritization and disaster response in low-connectivity regions.",
      "Designed Random Forest-based severity scoring using image and text inputs for automated triaging.",
      "Implemented offline-to-SMS fallback and geo-based disaster mode for critical alerts and safe routing.",
      "Shortlisted for technical evaluation by the Government of Meghalaya for potential pilot deployment."
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
    backgroundColor: "bg-brutal-yellow",
    imageUrl: "/assets/project_thumbnail/civicresolve.png",
    githubLink: "https://github.com/markstone111/Civic_Resolve"
  },
  {
    id: "pomniter",
    name: "Pomniter",
    description: "Pomniter is an open-source, local-first, AI-powered screenshot memory search engine. Unlike basic OCR tools or native gallery search, Pomniter uses multimodal vision models and dense vector embeddings to understand the semantic meaning of your screenshots — enabling natural language retrieval using fuzzy human memory.",
    bulletPoints: [
      "Implemented multimodal retrieval across text, image, and PDF screenshots using Google’s Universal Sentence Encoder (USE).",
      "Engineered local-first semantic search using ChromaDB with efficient deduplication and hybrid retrieval (semantic +EXACT).",
      "Developed a cross-platform Flutter UI with automatic screenshot capture and background indexing.",
      "Integrated AI with local LLMs (Ollama) for semantic deduplication, enabling natural-language queries like ‘lecture notes from last semester’.",
      "Implemented automatic file organization using AI-driven content classification and intelligent deduplication using Chroma embeddings and cosine similarity.",
      "Built with Privacy-Preserving Architecture: All embeddings and user data processed locally using Ollama, ensuring zero data leaves the device.",
      "Built with Cross-Platform Portability: Built on Flutter, the app runs seamlessly on Android, iOS, Windows, macOS, and Linux with near-native performance.",
    ],
    techStack: [
      "Dart", 
      "Python",
      "C++", 
      "TypeScript", 
      "Kotlin", 
      "CMake"
    ],
    backgroundColor: "bg-brutal-blue",
    imageUrl: "/assets/project_thumbnail/pomniter.png",
    liveLink: "https://pomniter.nikunjmaheshwari.in/",
    githubLink: "https://github.com/markstone111/pomniter-app"
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
    imageUrl: "/assets/project_thumbnail/portfolio.png",
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
    imageUrl: "/assets/project_thumbnail/should-i-bunk.png",
    liveLink: "https://github.com/markstone111/Should_I_Bunk/releases/tag/Bunk_Predictor_v0.0.1",
    githubLink: "https://github.com/markstone111/Should_I_Bunk"
  },
  {
    id: "ecommerce-app",
    name: "Full-Stack eCommerce App",
    description: "A comprehensive digital marketplace mobile app boasting secure payment gateways and real-time inventory syncing.",
    bulletPoints: [
      "Integrated secure a payment gateway for seamless transactions",
      "Utilized Firebase for real-time order tracking and auth",
      "Custom made seller Admin Panel to manage orders and inventory"
    ],
    techStack: ["Flutter", "Firebase", "Stripe API"],
    backgroundColor: "bg-brutal-pink",
    imageUrl: "/assets/project_thumbnail/kasunwai.png",    
    githubLink: "https://github.com/markstone111"
  },
  {
    id: "human-pose-estimation",
    name: "Human Pose Estimation",
    description: "Real-time AI web app that detects human poses and joint tracking via the webcam using deep learning models.",
    bulletPoints: [
      "Achieved 30+ FPS real-time tracking in the browser",
      "Visualized skeletal nodes natively on an HTML canvas overlay",
      "Adjustable confidence threshold for pose detection.",
      "Detection and visualization of body keypoints and hand landmarks"
    ],
    techStack: ["Python", "OpenCV", "MediaPipe"],
    backgroundColor: "bg-brutal-yellow",
    imageUrl: "/assets/project_thumbnail/humanpose.png",
    liveLink: "https://human-pose.streamlit.app/",
    githubLink: "https://github.com/markstone111/side_end.dev/tree/main/human-pose-estimation"
  },
  
  {
    id: "chatsphere",
    name: "ChatSphere",
    description: "An AI chatbot that chats, understands, and learns — built with NLP & ML.",
    bulletPoints: [
      "Intent Classification: Uses TF-IDF vectorization and Logistic Regression to classify user inputs into predefined intents.",
      "Voice Input: Record voice input using your microphone with sounddevice and speech_recognition.",
      "Text-to-Speech (TTS): The chatbot responds with speech using pyttsx3 (offline TTS) and gTTS for in-browser playback.",
      "Chat History: All interactions are saved to a chat_log.csv file, viewable in the History tab.",
      "Streamlit Interface: Clean UI with tabs for Home, History, and About."
    ],
    techStack: ["Python", "TensorFlow", "Streamlit", "GTTS", "Scikit-learn"],
    backgroundColor: "bg-brutal-yellow",
    imageUrl: "/assets/project_thumbnail/chatsphere.png",
    liveLink: "https://nikunj-chatbot.streamlit.app/",
    githubLink: "https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)"
  },
  {
    id: "satya",
    name: "Satya",
    description: "Fact-checking platform with a browser extension to detect fake news & fraud, auto-reporting suspicious cases.",
    bulletPoints: [
      "AI-Powered Analysis: Utilizes Google's Gemini API to analyze content for authenticity",
      "Multi-Format Support: Verify content from plain text and images",
      "Web Application: An intuitive web interface for direct text input and image uploads.",
      "Browser Extension: A handy Chrome extension to check content directly from any webpage with a simple right-click.",
      "Evidence-Based Reports: Each analysis provides a clear verdict (Scam/Genuine), a confidence score, a detailed explanation, and reference URLs from the web.",
      "Anonymous Reporting: Allows users to report scam content, which is compiled into a daily email digest for administrators."
    ],
    techStack: ["JavaScript", "Django", "HTML", "Tailwind CSS"],
    backgroundColor: "bg-brutal-green",
    imageUrl: "/assets/project_thumbnail/satya.png",
    liveLink: "https://satya-one.vercel.app/",
    githubLink: "https://github.com/markstone111/Satya"
  },
  {
    id: "will-they-hire-me",
    name: "Will_They_Hire_Me (In Progress)",
    description: "An AI-driven mock interview platform with voice support for realistic practice.",
    bulletPoints: [
      "Implemented Firebase Authetication and Cloud Messaging",
      "Integrated Vapi API for voice chat features.",
      "Built a responsive and interactive UI with Framer Motion.",
      "Users can give mock intervies and get the feedback report instantly."
    ],
    techStack: ["TypeScript", "Next.js", "Firebase", "Vapi", "Firebase Auth"],
    backgroundColor: "bg-brutal-yellow",
    imageUrl: "/assets/project_thumbnail/will-they-hire-me.png",
    liveLink: "https://will-they-hire-me.vercel.app/",
    githubLink: "https://github.com/markstone111/will_they_hire_me"
  },
  {
    id: "bytecanvas",
    name: "ByteCanvas",
    description: "Imagine you want to design something using code, like a website's landing page. Usually, you’d need to brush up your skills for the language syntax, set up your editor, import libraries, and create files. ByteCanvas changes this by offering a canvas to draw your idea and afeatured coding environment right in your browser, complete with instant previews and AI assistance.",
    bulletPoints: [
      "A next-gen online IDE with live previews and built-in AI coding assistance",
      "Draw what you want to code.",
      "AI generates boilerplate and suggests UI components using AI.",
      "Modify or refine the generated code to match your vision.",
      "See your design come to life instantly in the live preview panel.",
      "All done without leaving your browser — no setup, no installs, just pure creation."
    ],
    techStack: ["TypeScript", "Next.js", "Firebase", "Next Auth", "Web Sockets", "Web Container"],
    backgroundColor: "bg-brutal-pink",
    imageUrl: "/assets/project_thumbnail/bytecanvas.png",
    liveLink: "",
    githubLink: "https://github.com/markstone111/ByteCanvas"
  },
  {
    id: "taskhive",
    name: "TaskHive",
    description: "A smart task manager with quotes, search, and reminders to keep you focused.",
    bulletPoints: [
      "Users get a new quote every day as a motivation to work on their listed tasks.",
      "It provides reward points for completing tasks and streaks. Users can compete with others.",
      "Features smooth animations, a floating search bar, and haptic feedback for a premium feel.",
      "Built with productivity in mind, it helps users stay focused, motivated, and organized."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room Database"],
    backgroundColor: "bg-brutal-blue",
    imageUrl: "/assets/project_thumbnail/taskhive.png",
    liveLink: "",
    githubLink: ""
  }
];
