import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
const projects = [
  {
    title: 'Should_I_Bunk',
    description: 'Decide smartly whether to attend or skip class with AI-backed predictions.',
    techStack: ['React Native', 'Python', 'Typescript', 'Logistic Regression'],
    github: 'https://github.com/markstone111/Should_I_Bunk',
    demo: 'https://drive.google.com/file/d/1OmRz84W2W23bQBrnfx1Ubk9teXq3lh22/view?usp=drivesdk'
  },
  {
    title: 'ChatSphere',
    description: 'An AI chatbot that chats, understands, and learns — built with NLP & ML.',
    techStack: ['Python', 'TensorFlow', 'Streamlit', 'GTTS', 'Scikit-learn'],
    github: 'https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)',
    demo: 'https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)'
  },
  {
    title: 'Satya (in progress)',
    description: 'Fact-checking platform with a browser extension to detect fake news & fraud, auto-reporting suspicious cases.',
    techStack: ['JavaScript', 'Django', 'HTML','Tailwind CSS'],
    github: null,
    demo: null
  },
  {
    title: 'Will_They_Hire_Me (in progress)',
    description: 'An AI-driven mock interview platform with voice support for realistic practice.',
    techStack: ['TypeScript','Next.js', 'Firebase', 'Vapi','Firebase Auth'],
    github: "https://github.com/markstone111/will_they_hire_me",
    demo: null
  },
  {
    title: 'ByteCanvas (in progress)',
    description: 'A next-gen online IDE with live previews and built-in AI coding assistance.',
    techStack: ['TypeScript', 'Next.js', 'Firebase','Next Auth','Web Sockets','Web Container'],
    github: "https://github.com/markstone111/ByteCanvas",
    demo: null
  },
    
  {
    title: 'IncogniChat (in progress)',
    description: 'Anonymous chatrooms with AI support, moderation, and safe community features.',
    techStack: ['TypeScript', 'Next.js', 'Firebase','Firebase Auth'],
    github: null,
    demo: null
  },

  {
    title: 'ShopSwift',
    description: 'A modern eCommerce app with sleek UI, secure payments & powerful admin tools.',
    techStack: ['Dart', 'Flutter', 'Firebase','Node.js','APIs handling', 'Payment Gateway'],
    github: null,
    demo: null
  },
  {
    title: 'PoseVision',
    description: 'AI-powered pose detection using OpenCV & MediaPipe, live and accurate.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
    github: 'https://github.com/markstone111/side_end.dev/tree/main/human-pose-estimation',
    demo: 'https://human-pose.streamlit.app/'
  },
  {
    title: 'TimeTeller',
    description: 'Auto-alarms your tasks — enter a task & time, the alarm sets itself.',
    techStack: ['Kotlin','Coroutine','Jetpack DataStore'],
    github: null,
    demo: null
  },
  {
    title: 'Athletica (in progress)',
    description: 'Connecting athletes & coaches on one platform — for networking & growth.',
    techStack: ['Dart', 'Flutter', 'Firebase','Node.js'],
    github: null,
    demo: null
  },
  {
    title: 'TaskHive',
    description: 'A smart task manager with quotes, search, and reminders to keep you focused.',
    techStack: ['Kotlin', 'Jetpack', 'Room Database'],
    github: null,
    demo: null
  },
  {
    title: 'PortFolio+',
    description: 'A sleek, interactive portfolio with dark mode & smooth animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: "https://github.com/markstone111/nikunjmaheshwari",
    demo: 'https://nikunjmaheshwari.vercel.app/'
  },
  {
    title: 'Convertly',
    description: 'All-in-one unit converter with API integration, designed with Jetpack Compose.',
    techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose'],
    github: null,
    demo: null
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
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 rounded-full"
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
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
