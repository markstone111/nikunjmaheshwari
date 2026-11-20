import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, Zap } from 'lucide-react';
import { experiencesData, ExperienceItem } from '../data/experience';

const badgeColorStyles: Record<string, string> = {
  green: 'bg-brutal-green text-black',
  yellow: 'bg-brutal-yellow text-black',
  pink: 'bg-brutal-pink text-black',
  blue: 'bg-brutal-blue text-black',
  purple: 'bg-brutal-purple text-black',
};

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const badgeClass = badgeColorStyles[item.badgeColor] || 'bg-brutal-green text-black';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      animate={cardInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative mb-12 last:mb-0"
    >
      {/* Brutalist Timeline Marker Node */}
      <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[59px] top-6 w-7 h-7 bg-white dark:bg-tars-dark border-3 border-black shadow-brutal-sm flex items-center justify-center font-mono font-black text-xs text-black dark:text-white">
        <span className="w-2.5 h-2.5 bg-brutal-green border border-black animate-pulse" />
      </div>

      {/* Main Experience Card */}
      <div className="border-4 border-black bg-white dark:bg-tars-dark shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all p-6 sm:p-8">
        
        {/* Top Meta Header: Role, Period, Badge */}
        <div className="flex flex-wrap items-start justify-between gap-3 border-b-3 border-black pb-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 border-2 border-black font-mono font-bold text-xs uppercase shadow-brutal-sm ${badgeClass}`}>
                {item.badge}
              </span>
              <span className="font-mono text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Calendar size={12} />
                {item.period}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
              {item.role}
            </h3>
            
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-300 mt-1">
              <span className="text-black dark:text-brutal-green uppercase flex items-center gap-1">
                <Briefcase size={14} />
                {item.organization}
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm">
                <MapPin size={13} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Org External Link (if present) */}
          {item.orgUrl && (
            <a
              href={item.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black bg-gray-100 dark:bg-tars-gray text-black dark:text-white hover:bg-brutal-yellow hover:text-black transition-colors shadow-brutal-sm"
              title="Visit Organization"
              aria-label={`Visit ${item.organization}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Responsibilities List */}
        <div className="space-y-2 mb-6">
          {item.responsibilities.map((resp, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
              <span className="text-black dark:text-brutal-green font-mono font-black text-base shrink-0 select-none">
                ›
              </span>
              <span>{resp}</span>
            </div>
          ))}
        </div>

        {/* Highlight Metric Banner */}
        {item.metric && (
          <div className="inline-flex items-center gap-2 p-2.5 bg-black text-brutal-green dark:bg-tars-board dark:text-brutal-green border-2 border-black font-mono font-bold text-xs sm:text-sm mb-6 w-full shadow-brutal-sm">
            <Zap size={14} className="shrink-0 text-brutal-yellow" />
            <span className="tracking-wide">{item.metric}</span>
          </div>
        )}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-black/10 dark:border-white/10">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-bold bg-brutal-yellow text-black border-2 border-black shadow-brutal-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experience" 
      className="py-20 bg-brutal-bg dark:bg-tars-board font-sans border-t-4 border-black transition-colors duration-300"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3.5 py-1 mb-3 bg-brutal-pink text-black border-2 border-black font-mono font-bold text-xs uppercase shadow-brutal-sm">
              CAREER LOG // CHRONOLOGY
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter drop-shadow-[3px_3px_0_rgba(74,222,128,1)]">
              Experience
            </h2>
            <p className="mt-3 text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest font-mono">
              Organizations, Roles &amp; Responsibilities
            </p>
          </div>

          {/* Vertical Spine Timeline Layout */}
          <div className="relative border-l-4 border-black dark:border-brutal-green ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-12">
            {experiencesData.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
