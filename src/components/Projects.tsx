import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Should_I_Bunk',
    description: 'Mobile app that helps students decide whether to attend a class based on many factors implemented with logistic regresions, built with react native and pyhon.',
    techStack: ['React Native', 'Python', 'Typescript', 'Logistic Regression'],
    github: 'https://github.com/markstone111/Should_I_Bunk',
    demo: 'https://drive.google.com/file/d/1OmRz84W2W23bQBrnfx1Ubk9teXq3lh22/view?usp=drivesdk'
  },
  {
    title: 'NLP-Powered ChatBot',
    description: 'An intent-based chatbot created using Natural Language Processing, capable of understanding and responding to user queries intelligently.',
    techStack: ['Python', 'TensorFlow', 'Streamlit', 'GTTS', 'Scikit-learn'],
    github: 'https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)',
    demo: 'https://github.com/markstone111/side_end.dev/tree/main/ChatBot(Intent-Based)'
  },
  {
    title: 'Ecommerce App',
    description: 'An Ecom app built with Flutter and Firebase, featuring a user-friendly interface, a fascinating and optimisable Admin Panel and secure payment integration.',
    techStack: ['Dart', 'Flutter', 'Firebase','Node.js','APIs handling', 'Payment Gateway'],
    github: null,
    demo: null
  },
  {
    title: 'Task-Alarm App',
    description: 'Android app which automatically sets alarm when user enters the task and time, built with Kotlin and Jetpack DataStore.',
    techStack: ['Kotlin','Coroutine','Jetpack DataStore'],
    github: null,
    demo: null
  },
  {
    title: 'Human pose estimation',
    description: 'A web app that detects human poses in real-time using OpenCV and MediaPipe, built with Python and Streamlit.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
    github: 'https://github.com/markstone111/side_end.dev/tree/main/human-pose-estimation',
    demo: 'https://human-pose.streamlit.app/'
  },
  {
    title: 'Task-list App',
    description: 'Android app built with Kotlin and Room Database, Widget feature, Search functionality, with quote of the day to keep you motivated.',
    techStack: ['Kotlin', 'Jetpack', 'Room Database'],
    github: null,
    demo: null
  },
  {
    title: 'Multi-Unit Converter',
    description: 'Android app built with Kotlin and Jetpack Compose. Features comprehensive unit conversion capabilities with API integration in progress.',
    techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose'],
    github: null,
    demo: null
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS, featuring a dark mode toggle and smooth animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: null,
    demo: 'https://nikunjmaheshwari.netlify.app/'
  },
  {
    title: 'Athlete Connection App (in progress)',
    description: 'A Multi-Platform app that connects athletes with coaches, built with Flutter. Currently in progress.',
    techStack: ['Dart', 'Flutter', 'Firebase','Node.js'],
    github: null,
    demo: null
  }
  
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