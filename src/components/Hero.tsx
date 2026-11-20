import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll configurations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth Parallax transform layers
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brutal-bg dark:bg-tars-board font-sans transition-colors duration-300"
    >
      {/* Background dot matrix */}
      <motion.div 
        style={{ 
          y: yBg, 
          backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)', 
          backgroundSize: '36px 36px' 
        }}
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
      />

      {/* Main Hero Container */}
      <div className="relative w-full max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-24 pb-12 sm:pb-16 flex flex-col md:flex-row items-center justify-between z-10 gap-10 md:gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Text Content & Actions */}
        <motion.div 
          style={{ y: yText, opacity: opacityFade }}
          className="flex-1 text-left w-full md:w-1/2 z-20 space-y-4 sm:space-y-5 flex flex-col items-start"
        >
          {/* Status / Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 border-2 border-black bg-brutal-yellow text-black font-mono font-bold shadow-brutal-sm text-xs sm:text-sm tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            HELLO WORLD // I'M
          </motion.div>
          
          {/* Main Name Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white uppercase tracking-tight leading-[0.95] drop-shadow-[3px_3px_0_rgba(0,0,0,1)] dark:drop-shadow-[3px_3px_0_rgba(74,222,128,1)] break-words max-w-full"
          >
            Nikunj<br />Maheshwari
          </motion.h1>
          
          {/* Title / Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black dark:text-brutal-green tracking-tight"
          >
            SOFTWARE ENGINEER
          </motion.p>
          
          {/* Bio statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg font-medium text-gray-800 dark:text-gray-300 max-w-lg border-l-4 border-brutal-green pl-4 leading-relaxed"
          >
            ML Enthusiast | Building Innovative Mobile &amp; Web Apps | Open to collaborations in AI x Full Stack Development
          </motion.p>
          
          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')} 
              className="brutal-btn bg-brutal-green text-black px-6 sm:px-7 py-2.5 sm:py-3 text-base sm:text-lg font-black tracking-wide text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="brutal-btn bg-white dark:bg-tars-gray text-black dark:text-white px-6 sm:px-7 py-2.5 sm:py-3 text-base sm:text-lg border-2 border-black font-black tracking-wide text-center"
            >
              Connect
            </a>
            <a 
              href="https://drive.google.com/file/d/1D--DFjIA2_KUhsAAtP9jfRqZZqohmiJT/view"
              target="_blank" 
              rel="noopener noreferrer" 
              className="brutal-btn bg-brutal-yellow text-black px-6 sm:px-7 py-2.5 sm:py-3 text-base sm:text-lg border-2 border-black font-black tracking-wide text-center"
            >
              Resume
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3 pt-3"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Find me on:
            </span>
            <a 
              href="https://github.com/markstone111" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 sm:p-2.5 bg-white dark:bg-tars-dark border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-brutal-green transition-all text-black dark:text-white"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nikunjm111/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 sm:p-2.5 bg-white dark:bg-tars-dark border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-brutal-blue transition-all text-black dark:text-white"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:contact@nikunjmaheshwari.xyz" 
              className="p-2 sm:p-2.5 bg-white dark:bg-tars-dark border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-brutal-pink transition-all text-black dark:text-white"
              title="Email Contact"
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN: Avatar & Floating Badges */}
        <div className="flex-1 w-full md:w-1/2 relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] z-10 flex items-center justify-center">
          
          {/* Main Avatar Frame */}
          <motion.div 
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 z-10 bg-brutal-green border-4 border-black shadow-brutal md:shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_rgba(74,222,128,0.5)] rounded-sm overflow-hidden"
          >
            <img 
              src="/hero_section_pic.jpeg" 
              alt="Nikunj Maheshwari Avatar" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </motion.div>

          {/* Floating Sticker 1: Top Right */}
          <motion.div 
            initial={{ opacity: 0, y: -20, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-2 -right-2 sm:top-4 sm:-right-2 md:top-4 md:-right-4 lg:right-2 z-20 bg-brutal-pink border-3 border-black p-2.5 sm:p-3 shadow-brutal transform rotate-3"
          >
            <div className="text-black font-black uppercase text-xs sm:text-sm md:text-base">Full Stack</div>
            <div className="text-black font-bold uppercase text-[10px] sm:text-xs opacity-90">Developer</div>
          </motion.div>
          
          {/* Floating Sticker 2: Bottom Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-2 -left-2 sm:bottom-4 sm:-left-2 md:bottom-4 md:-left-4 lg:left-2 z-20 bg-brutal-blue border-3 border-black p-2.5 sm:p-3 shadow-brutal transform -rotate-3"
          >
            <div className="text-black font-black uppercase text-xs sm:text-sm md:text-base">AI Integration</div>
            <div className="text-black font-bold uppercase text-[10px] sm:text-xs opacity-90">Enthusiast</div>
          </motion.div>

        </div>
      </div>

      {/* --- Floating Bottom Scroll Prompt Marker --- */}
      <motion.button
        onClick={(e) => scrollToSection(e, 'about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-white dark:bg-tars-dark text-black dark:text-white border-2 border-black shadow-brutal-sm hover:bg-brutal-yellow hover:text-black transition-colors font-mono font-bold text-xs uppercase tracking-wider cursor-pointer"
        title="Scroll down to Foundation Blocks"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown size={14} className="text-brutal-green dark:text-brutal-green animate-bounce stroke-[3]" />
      </motion.button>
    </section>
  );
};

export default Hero;
