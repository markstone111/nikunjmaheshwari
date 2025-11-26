import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
          },
        }}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I'm Nikunj Maheshwari
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          A Tech Enthusiast
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Aspiring App & Web Developer | Building Innovative Mobile And Web Apps | Exploring the Future with AI
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors">
            Contact Me
          </a>
          <a href="https://drive.google.com/file/d/1KNRc-fAXp349g0WeNipx1v3xU1i8ZSYx/view?usp=sharing" className="px-8 py-3 bg-white text-purple-900 rounded-full hover:bg-gray-200 transition-colors">
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a href="https://github.com/markstone111" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nikunjm111/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:nikunjnehu@gmail.com" className="text-white hover:text-purple-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
