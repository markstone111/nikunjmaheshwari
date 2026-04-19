// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import Particles from 'react-particles';
// import { loadFull } from "tsparticles";

// const Hero = () => {
//   const particlesInit = async (engine: any) => {
//     await loadFull(engine);
//   };

//   const scrollToProjects = (e: React.MouseEvent) => {
//     e.preventDefault();
//     document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           particles: {
//             number: { value: 80, density: { enable: true, value_area: 800 } },
//             color: { value: "#ffffff" },
//             opacity: { value: 0.5 },
//             size: { value: 3 },
//             move: { enable: true, speed: 2 },
//             links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
//           },
//         }}
//         className="absolute inset-0"
//       />
      
//       <div className="relative z-10 text-center px-4">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold text-white mb-4"
//         >
//           Hi, I'm Nikunj Maheshwari
//         </motion.h1>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl md:text-2xl text-gray-300 mb-8"
//         >
//           A Tech Enthusiast
//         </motion.p>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
//         >
//           Aspiring App & Web Developer | Building Innovative Mobile And Web Apps | Exploring the Future with AI
//         </motion.p>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           <a
//             href="#projects"
//             onClick={scrollToProjects}
//             className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
//           >
//             View Projects
//           </a>
//           <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors">
//             Contact Me
//           </a>
//           <a href="https://drive.google.com/file/d/1OxF6yhaxq9Um5I70qrAXeQU3O-D5CYcv/view?usp=drivesdk" className="px-8 py-3 bg-white text-purple-900 rounded-full hover:bg-gray-200 transition-colors">
//             Download Resume
//           </a>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mt-12 flex justify-center gap-6"
//         >
//           <a href="https://github.com/markstone111" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
//             <Github size={24} />
//           </a>
//           <a href="https://www.linkedin.com/in/nikunjm111/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
//             <Linkedin size={24} />
//           </a>
//           <a href="mailto:nikunjnehu@gmail.com" className="text-white hover:text-purple-400 transition-colors">
//             <Mail size={24} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









// Hero.tsx

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, TerminalSquare } from 'lucide-react';
import TerminalView from './TerminalView';

const Hero = () => {
  const [isTerminalOpen, setTerminalOpen] = useState(false);
  const containerRef = useRef(null);

  // Scroll configurations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform layers
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yFloatingBox1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const yFloatingBox2 = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brutal-bg dark:bg-tars-board font-sans"
    >
      
      <motion.div 
        style={{ 
          y: yBg, 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
      ></motion.div>

      {/* --- Terminal Trigger Button --- */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTerminalOpen(true)}
        className="fixed top-4 right-28 md:top-6 md:right-[unset] md:left-6 md:bottom-[unset] z-50 p-2 md:p-3 rounded-none bg-black dark:bg-brutal-green text-brutal-green dark:text-black border-2 border-black shadow-brutal hover:translate-y-[2px] transition-transform"
        title="Open Interactive Terminal"
      >
        <TerminalSquare size={20} />
      </motion.button>

      {/* Main Container Layering */}
      <div className="relative w-full max-w-7xl mx-auto px-4 mt-24 md:mt-20 flex flex-col md:flex-row items-center justify-between z-10 min-h-[80vh] gap-12 md:gap-0">
        
        {/* LEFT COLUMN: Text Content (Parallax layer) */}
        <motion.div 
          style={{ y: yText, opacity: opacityFade }}
          className="flex-1 text-left w-full md:w-1/2 z-20 space-y-4 md:space-y-6 flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 border-2 border-black bg-brutal-yellow text-black font-bold shadow-brutal-sm text-sm sm:text-base"
          >
            H E L L O - W O R L D - I ' M
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[5.9rem] font-black text-black dark:text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0_rgba(74,222,128,1)] break-words max-w-full"
          >
            Nikunj<br />Maheshwari
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold text-brutal-green mb-4 md:mb-8 stroke-black drop-shadow-md py-1 md:py-2"
          >
            SOFTWARE ENGINEER
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg font-medium text-black dark:text-gray-300 max-w-lg border-l-4 border-brutal-green pl-4"
          >
            ML Enthusiast | Building Innovative Mobile And Web Apps | Open to collaborations in AI x Full Stack Development
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 md:pt-6 w-full sm:w-auto"
          >
            <a href="#projects" onClick={scrollToProjects} className="brutal-btn bg-brutal-green text-black px-8 py-3 text-lg text-center w-full sm:w-auto">
              View Projects
            </a>
            <a href="#contact" className="brutal-btn bg-white dark:bg-tars-gray text-black dark:text-white px-8 py-3 text-lg border-2 border-black text-center w-full sm:w-auto">
              Connect
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Images and Floating Modules (Parallax layer) */}
        <div className="flex-1 w-full md:w-1/2 relative h-[350px] sm:h-[450px] md:h-[700px] mt-8 md:mt-0 z-10 flex items-center justify-center">
          
          {/* Main Avatar holding space */}
          <motion.div 
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 z-10 bg-brutal-green border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)] md:dark:shadow-[15px_15px_0px_0px_rgba(255,255,255,0.2)] rounded-sm overflow-hidden"
          >
            {/* Using the avatar you uploaded */}
            <img 
              src="/hero_section_pic.png" 
              alt="Nikunj Avatar" 
              className="w-full h-full object-cover  mix-blend-normal hover:mix-blend-luminosity transition-all duration-500" 
            />
          </motion.div>

          {/* Floating Parallax Box 1 (Top Right) */}
          <motion.div 
            style={{ y: yFloatingBox1 }}
            className="absolute top-0 right-0 sm:top-10 sm:right-4 md:-right-10 z-20 bg-brutal-pink border-4 border-black p-3 sm:p-4 shadow-brutal transform rotate-3"
          >
            <div className="text-black font-black uppercase text-base sm:text-xl">Full Stack</div>
            <div className="text-black font-bold uppercase text-xs sm:text-sm opacity-80">Developer</div>
          </motion.div>
          
          {/* Floating Parallax Box 2 (Bottom Left) */}
          <motion.div 
            style={{ y: yFloatingBox2 }}
            className="absolute bottom-0 left-0 sm:bottom-10 sm:left-4 md:-left-10 z-20 bg-brutal-blue border-4 border-black p-3 sm:p-4 shadow-brutal transform -rotate-3"
          >
            <div className="text-black font-black uppercase text-base sm:text-xl">AI Integration</div>
            <div className="text-black font-bold uppercase text-xs sm:text-sm opacity-80">Enthusiast</div>
          </motion.div>

        </div>
      </div>

      {/* Floating Bottom Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-6 z-30"
      >
        <a href="https://github.com/markstone111" target="_self" className="p-3 bg-white border-2 border-black shadow-brutal hover:translate-y-[2px] transition-transform text-black hover:bg-brutal-green">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/nikunjm111/" target="_self" className="p-3 bg-white border-2 border-black shadow-brutal hover:translate-y-[2px] transition-transform text-black hover:bg-brutal-blue">
          <Linkedin size={24} />
        </a>
        <a href="mailto:contact@nikunjmaheshwari.xyz" className="p-3 bg-white border-2 border-black shadow-brutal hover:translate-y-[2px] transition-transform text-black hover:bg-brutal-pink">
          <Mail size={24} />
        </a>
      </motion.div>

      {/* --- Terminal Render --- */}
      {isTerminalOpen && <TerminalView onClose={() => setTerminalOpen(false)} />}
    </section>
  );
};

export default Hero;