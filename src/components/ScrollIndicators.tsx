import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const sections = [
  { id: 'home', label: '01 // HOME' },
  { id: 'about', label: '02 // ABOUT' },
  { id: 'projects', label: '03 // PROJECTS' },
  { id: 'blogs', label: '04 // LOGS' },
  { id: 'contact', label: '05 // CONTACT' },
];

export default function ScrollIndicators() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  // Only show on home page where these section anchors live
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  if (!isHomePage) return null;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getNextSectionId = () => {
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    return sections[nextIndex].id;
  };

  return (
    <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 select-none">
      {/* Neo-brutalist Section Dots Track */}
      <div className="flex flex-col items-center bg-white dark:bg-tars-dark border-2 border-black p-1.5 shadow-brutal-sm gap-2.5">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center p-0.5 cursor-pointer"
              aria-label={`Jump to ${section.label}`}
              title={section.label}
            >
              {/* Marker Element */}
              <div
                className={`w-2.5 h-2.5 border-2 border-black transition-all duration-200 ${
                  isActive
                    ? 'bg-brutal-green scale-125 shadow-brutal-sm rotate-45'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-black dark:hover:bg-white hover:scale-110'
                }`}
              />

              {/* Tooltip on Hover */}
              <div className="absolute right-7 px-2 py-0.5 bg-black text-white text-[10px] font-mono font-bold whitespace-nowrap border border-white shadow-brutal-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {section.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Bouncing Scroll Down Marker */}
      <motion.button
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        onClick={() => scrollToSection(getNextSectionId())}
        className="cursor-pointer p-1.5 bg-brutal-yellow text-black border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        title="Scroll to next section"
        aria-label="Scroll down"
      >
        <ChevronDown size={14} className="stroke-[3]" />
      </motion.button>
    </div>
  );
}
