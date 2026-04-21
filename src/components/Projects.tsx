import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// const projects = [
//   {
//     title: 'Should_I_Bunk',
//     description: 'Mobile app that helps students decide whether to attend a class based on many factors implemented with logistic regresions, built with react native and python.',
//     techStack: ['React Native', 'Python', 'Typescript', 'Logistic Regression'],
//     github: 'https://github.com/markstone111/Should_I_Bunk',
//     demo: 'https://drive.google.com/file/d/1OmRz84W2W23bQBrnfx1Ubk9teXq3lh22/view?usp=drivesdk'
//   },
//   {
//     title: 'NLP-Powered ChatBot',
//     description: 'An intent-based chatbot created using Natural Language Processing, capable of understanding and responding to user queries intelligently.',
//     techStack: ['Python', 'TensorFlow', 'Streamlit', 'GTTS', 'Scikit-learn'],
//     github: 'https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)',
//     demo: 'https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)'
//   },
//   {
//     title: 'Ecommerce App',
//     description: 'An Ecom app built with Flutter and Firebase, featuring a user-friendly interface, a fascinating and optimisable Admin Panel and secure payment integration.',
//     techStack: ['Dart', 'Flutter', 'Firebase','Node.js','APIs handling', 'Payment Gateway'],
//     github: null,
//     demo: null
//   },
//   {
//     title: 'Task-Alarm App',
//     description: 'Android app which automatically sets alarm when user enters the task and time, built with Kotlin and Jetpack DataStore.',
//     techStack: ['Kotlin','Coroutine','Jetpack DataStore'],
//     github: null,
//     demo: null
//   },
//   {
//     title: 'Human pose estimation',
//     description: 'A web app that detects human poses in real-time using OpenCV and MediaPipe, built with Python and Streamlit.',
//     techStack: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
//     github: 'https://github.com/markstone111/side_end.dev/tree/main/human-pose-estimation',
//     demo: 'https://human-pose.streamlit.app/'
//   },
//   {
//     title: 'Task-list App',
//     description: 'Android app built with Kotlin and Room Database, Widget feature, Search functionality, with quote of the day to keep you motivated.',
//     techStack: ['Kotlin', 'Jetpack', 'Room Database'],
//     github: null,
//     demo: null
//   },
//   {
//     title: 'Multi-Unit Converter',
//     description: 'Android app built with Kotlin and Jetpack Compose. Features comprehensive unit conversion capabilities with API integration in progress.',
//     techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose'],
//     github: null,
//     demo: null
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'Personal portfolio website built with Next.js and Tailwind CSS, featuring a dark mode toggle and smooth animations.',
//     techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
//     github: null,
//     demo: 'https://nikunjmaheshwari.netlify.app/'
//   },
//   {
//     title: 'Athlete Connection App (in progress)',
//     description: 'A Multi-Platform app that connects athletes with coaches, built with Flutter. Currently in progress.',
//     techStack: ['Dart', 'Flutter', 'Firebase','Node.js'],
//     github: null,
//     demo: null
//   }
  
//   ];





const projects = [
  
  {
    title: 'Should_I_Bunk',
    description: 'Stop guessing and start optimizing. Should I Bunk? bridges the gap between machine learning and daily student survival. By feeding real-world constraints—like professor strictness, test proximity, and current attendance thresholds—into a Python-based logistic regression model, this app delivers real-time, AI-backed verdicts on whether you can safely skip a lecture.',
    techStack: ['React Native', 'Python', 'Typescript', 'Logistic Regression'],
    github: 'https://github.com/markstone111/Should_I_Bunk',
    demo: 'https://drive.google.com/file/d/1OmRz84W2W23bQBrnfx1Ubk9teXq3lh22/view?usp=drivesdk'
  },
  {
    title: 'CivicResolve',
    description: 'A large-scale civic issue reporting system that includes multilingual support, real-time notifications using FCM, and a dedicated admin dashboard. The system integrates a custom machine learning model to estimate issue severity and includes offline capabilities for disaster scenarios. ',
    techStack: ['React Native', 'Expo Router', 'Node.js', 'React-Native-Maps', 'Firestore', 'Supabase WebSockets', 'Firebase Auth', 'Firebase Cloud Messaging'],
    github: "https://github.com/markstone111/Civic_Resolve",
    demo: 'https://drive.google.com/file/d/1OmRz84W2W23bQBrnfx1Ubk9teXq3lh22/view?usp=drivesdk'
  },
  {
    title: 'Will_They_Hire_Me (in progress)',
    description: 'An AI-driven mock interview platform with voice support for realistic practice.',
    techStack: ['TypeScript','Next.js', 'Firebase', 'Vapi','Firebase Auth'],
    github: "https://github.com/markstone111/will_they_hire_me",
    demo: null
  },
  {
    title: 'Satya',
    description: 'Fact-checking platform with a browser extension to detect fake news & fraud, auto-reporting suspicious cases.',
    techStack: ['JavaScript', 'Django', 'HTML','Tailwind CSS'],
    github: "https://github.com/markstone111/Satya",
    demo: "https://satya-one.vercel.app/"
  },
  {
    title: 'PoseVision',
    description: 'AI-powered pose detection using OpenCV & MediaPipe, live and accurate.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
    github: 'https://github.com/markstone111/side_end.dev/tree/main/human-pose-estimation',
    demo: 'https://human-pose.streamlit.app/'
  },
];






const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-tars-dark border-2 border-black rounded-none shadow-brutal hover:shadow-brutal-lg transition-transform duration-300 transform hover:-translate-y-1"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-800 dark:text-gray-300 mb-4 font-medium">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-brutal-yellow font-bold text-black border border-black shadow-brutal-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black dark:text-white hover:text-brutal-green transition-colors font-bold"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black dark:text-white hover:text-brutal-green transition-colors font-bold"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-brutal-bg dark:bg-tars-board font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black dark:text-white uppercase tracking-tighter drop-shadow-[2px_2px_0_rgba(74,222,128,1)]">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-16 pb-8">
            <Link to="/projects" className="brutal-btn bg-black text-white dark:bg-brutal-yellow dark:text-black px-10 py-5 text-xl lg:text-2xl border-4 border-black font-black uppercase tracking-widest shadow-brutal hover:translate-y-1 hover:shadow-brutal-sm transition-all rounded-none">
               View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}