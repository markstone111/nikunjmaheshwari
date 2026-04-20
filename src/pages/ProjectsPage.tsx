import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projectsData, Project } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  
  // Parallax fade-in effect based on scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"] // Trigger when top of element hits bottom of viewport
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32 w-full"
    >
      {/* LEFT: Image Container with 3D Hover Offset */}
      <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => project.liveLink && window.open(project.liveLink, '_blank')}>
        {/* Background brutalist shadow block */}
        <div className={`absolute inset-0 ${project.backgroundColor} border-4 border-black rounded-lg shadow-brutal translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4`} />
        
        {/* Foreground Image */}
        <div className="relative border-4 border-black rounded-none shadow-brutal overflow-hidden bg-white z-10 transition-transform duration-300 ease-out group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]">
          <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="w-full h-[300px] sm:h-[400px] object-cover mix-blend-normal group-hover:mix-blend-luminosity transition-all duration-500"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <span className="text-white font-black text-2xl tracking-widest border-2 border-white px-6 py-2 uppercase bg-black/40">
              View Live
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Text Content */}
      <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 flex flex-col justify-center">
        {/* Index Number */}
        <div className="text-brutal-green text-xl font-bold font-mono tracking-tighter">
          0{index + 1} //
        </div>
        
        {/* Title */}
        <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black dark:text-white leading-[1.1]">
          {project.name}
        </h2>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3">
          {project.techStack.map(tech => (
            <span key={tech} className="px-4 py-1.5 bg-brutal-yellow text-black border-2 border-black font-bold text-sm shadow-brutal-sm rounded-none whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
          {project.description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2">
          {project.bulletPoints.map((point, i) => (
            <li key={i} className="flex items-start text-base text-gray-600 dark:text-gray-400">
              <span className="text-brutal-green font-bold mr-2">›</span>
              {point}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-brutal-green text-black border-2 border-black font-bold shadow-brutal hover:translate-y-[2px] hover:shadow-brutal-sm transition-all rounded-none">
               <ExternalLink size={20} /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black font-bold shadow-brutal hover:translate-y-[2px] transition-all rounded-none hover:bg-gray-100">
              <Github size={20} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-brutal-bg dark:bg-tars-board pb-20 pt-32 px-6 md:px-12 lg:px-24 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-24"
        >
          <div className="inline-block px-4 py-1 border-2 border-black bg-brutal-blue text-black font-bold shadow-brutal-sm text-lg sm:text-xl mb-4">
            FEATURED SHIPPED CODE
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0_rgba(74,222,128,1)]">
            ARCHIVE
          </h1>
        </motion.div>

        <div className="flex flex-col">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
