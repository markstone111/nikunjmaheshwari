import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { blogsData } from '../data/blogs';

export default function BlogsPage() {
  return (
    <section className="min-h-screen bg-brutal-bg dark:bg-tars-board pb-20 pt-32 px-6 md:px-12 lg:px-24 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Segment */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <div className="inline-block px-4 py-1 border-2 border-black bg-brutal-pink text-white font-bold shadow-brutal-sm text-lg sm:text-xl mb-4">
            DOCUMENTATION
          </div>
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-black dark:text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0_rgba(255,105,180,1)]">
            THE LAB
          </h1>
        </motion.div>

        {/* The Grid Array */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {blogsData.map((blog, index) => {
            const ref = useRef(null);
            
            // Subtle fade up on scroll for each individual blog card
            const { scrollYProgress } = useScroll({
              target: ref,
              offset: ["0 1", "1.2 1"]
            });
            const yOffset = useTransform(scrollYProgress, [0, 1], [100, 0]);
            const opacityOffset = useTransform(scrollYProgress, [0, 1], [0, 1]);

            return (
              <motion.div 
                key={blog.id} 
                ref={ref}
                style={{ y: yOffset, opacity: opacityOffset }}
                className="flex flex-col group h-full"
              >
                {/* Image Box */}
                <div className="relative w-full aspect-[16/9] md:aspect-[4/3] cursor-pointer mb-8">
                  <div className={`absolute inset-0 border-4 border-black ${blog.shadowColor} translate-x-4 translate-y-4`} />
                  <div className="relative w-full h-full border-4 border-black bg-white overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {blog.pills.map((pill, i) => (
                        <span key={i} className={`px-4 py-1 border-2 border-black font-black text-sm uppercase shadow-brutal-sm ${i === 0 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex flex-col flex-grow">
                   <div className="flex items-center gap-4 mb-4">
                     <span className="text-brutal-green font-black text-2xl font-mono">0{index + 1} //</span>
                     <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase leading-tight group-hover:underline decoration-4 underline-offset-4 decoration-brutal-pink transition-all">
                       {blog.title}
                     </h3>
                   </div>
                  
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 flex-grow border-l-4 border-black pl-4">
                    {blog.description}
                  </p>
                  
                  <a href={blog.link} className="inline-block self-start px-12 py-5 bg-black text-white dark:bg-tars-dark border-4 border-black font-black text-xl md:text-2xl uppercase tracking-widest shadow-[4px_4px_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-brutal-pink hover:text-black transition-all">
                    START READING
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State warning if there's no data */}
        {blogsData.length === 0 && (
          <div className="w-full p-20 border-4 border-black bg-brutal-yellow text-center shadow-brutal text-2xl font-black uppercase">
            NO RECORDS FOUND IN THE ARCHIVE.
          </div>
        )}

      </div>
    </section>
  );
}
