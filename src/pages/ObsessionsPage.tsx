import { motion } from 'framer-motion';
import { obsessionsData } from '../data/obsessions';
import { Sparkles } from 'lucide-react';

export default function ObsessionsPage() {
  return (
    <section className="min-h-screen bg-brutal-bg dark:bg-tars-board pb-32 pt-24 px-6 md:px-12 lg:px-24 border-t-4 border-black font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* 1. The Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="flex items-center flex-wrap justify-center gap-4 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-black dark:text-white mt-12">
            <Sparkles className="w-12 h-12 text-brutal-pink dark:text-brutal-green hidden sm:block" />
            <span>Current</span>
            <span className="bg-[#B983FF] text-black px-6 py-2 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_rgba(255,255,255,1)]">
              Obsessions
            </span>
          </div>

          <p className="font-mono text-gray-500 dark:text-gray-400 font-bold tracking-widest uppercase">
            // my brain's TODO board
          </p>
        </motion.div>

        {/* 2. The Divider */}
        <motion.div 
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="w-full flex items-center gap-4 my-20"
        >
          <div className="flex-1 h-[2px] bg-gray-400 dark:bg-gray-600"></div>
          <span className="font-mono font-bold text-gray-500 dark:text-gray-400 tracking-wider">LEARNING PIPELINE</span>
          <div className="flex-1 h-[2px] bg-gray-400 dark:bg-gray-600"></div>
        </motion.div>

        {/* 3. The Staggered Grid Array */}
        <div className="w-full relative">
          <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8 w-full">
            {obsessionsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className={`w-full relative p-8 border-4 border-black shadow-brutal-lg hover:shadow-brutal hover:-translate-y-1 hover:translate-x-1 transition-all flex flex-col justify-between min-h-[160px] ${item.colorClass}`}
              >
                {/* Minimalist dot indicator */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-black rounded-none"></div>

                <h3 className="text-2xl md:text-3xl font-black text-black leading-tight max-w-[85%] mt-2">
                  {item.title}
                </h3>

                <p className="font-mono font-bold text-black text-sm uppercase mt-8 opacity-80 decoration-2 underline-offset-4">
                  status: {item.status}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Contact CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full mt-24 border-4 border-black p-10 md:p-16 text-center flex flex-col items-center justify-center gap-8 shadow-brutal-lg transition-transform hover:-translate-y-2 hover:-translate-x-2"
          style={{ background: 'linear-gradient(135deg, #FFD3B6 0%, #FEC8D8 100%)' }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black max-w-2xl leading-snug">
            If you're working on any of this and need someone unreasonably obsessed
          </h2>

          <a 
            href="mailto:nikunjnehu@gmail.com" 
            className="flex items-center gap-3 bg-black text-white px-8 py-4 border-4 border-black font-black text-xl hover:bg-brutal-green hover:text-black hover:scale-105 transition-all shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase tracking-wider"
          >
            <Sparkles className="w-5 h-5" />
            <span>Call Me</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
