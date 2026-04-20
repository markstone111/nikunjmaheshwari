import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';

export default function Blogs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="blogs" className="py-20 bg-white dark:bg-tars-board font-sans border-t-4 border-black overflow-hidden relative">
      
      {/* 1. Header Strip Segment */}
      <div className="w-full flex-col flex lg:flex-row items-center justify-between border-b-4 border-black pb-8 px-4 lg:px-12 mb-16 relative">
        <div className="flex flex-col relative w-full lg:w-3/4">
          <h2 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] text-transparent" style={{ WebkitTextStroke: '2px black' }}>
            BUILD LOGS
          </h2>
          <h2 className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.9] text-black dark:text-brutal-green -mt-4 drop-shadow-[5px_5px_0_rgba(187,143,206,1)] dark:drop-shadow-[5px_5px_0_rgba(255,255,255,1)] relative z-10">
            NIKUNJ'S LAB
          </h2>
          
          {/* Animated SVG Star / Crosshair embedded near header */}
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -right-10 top-1/2 w-20 h-20 text-black hidden md:block opacity-50"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="4" />
          </motion.svg>
        </div>

        <div className="w-full lg:w-auto mt-8 lg:mt-0 flex justify-end relative z-20">
          <Link to="/blogs" className="brutal-btn bg-black text-white hover:bg-brutal-yellow hover:text-black hover:translate-y-2 px-8 py-5 text-xl md:text-2xl font-black uppercase tracking-widest border-4 border-black transition-all">
            VIEW ALL DOCUMENTATION
          </Link>
        </div>
      </div>

      {/* 2. Grid Cards Segment */}
      <div className="container mx-auto px-4">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="max-w-7xl mx-auto"
        >
          {/* The Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {blogsData.map((blog, index) => (
              <div key={blog.id} className="flex flex-col group h-full">
                {/* Image & Hover container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[4/3] cursor-pointer mb-8">
                  {/* Brutalist Shadow Box */}
                  <div className={`absolute inset-0 border-4 border-black ${blog.shadowColor} translate-x-4 translate-y-4`} />
                  
                  {/* Actual Image Block */}
                  <div className="relative w-full h-full border-4 border-black bg-white overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition-all duration-500"
                    />
                    
                    {/* Pills Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {blog.pills.map((pill, i) => (
                        <span key={i} className={`px-4 py-1 border-2 border-black font-black text-sm uppercase ${i === 0 ? 'bg-white text-black' : 'text-white'}`} style={{ WebkitTextStroke: i !== 0 ? '1px black' : '0px' }}>
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Typography & Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase leading-tight mb-4 group-hover:underline decoration-4 underline-offset-4 decoration-brutal-green transition-all">
                    {blog.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 flex-grow">
                    {blog.description}
                  </p>
                  
                  {/* Read Manifesto Action */}
                  <a href={blog.link} className="inline-block self-start px-8 py-4 bg-black text-white dark:bg-tars-dark dark:text-white border-2 border-black font-black text-xl uppercase shadow-[4px_4px_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    GET GUIDE
                  </a>
                </div>
              </div>
            ))}
            
          </div>
        </motion.div>
      </div>

    </section>
  );
}
