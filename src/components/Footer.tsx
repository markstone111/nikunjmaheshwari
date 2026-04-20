import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MoveRight } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tickerText = " // LET'S HEAR ABOUT YOUR PROJECT // OPEN FOR OPPORTUNITIES // BUILDING COOL SHIT // ALWAYS LEARNING ";

  return (
    <footer className="bg-brutal-bg dark:bg-tars-dark text-black dark:text-white border-t-4 border-black overflow-hidden font-sans">
      
      {/* 1. Scrolling Ticker Tape Banner */}
      <div className="w-full bg-brutal-yellow border-b-4 border-black py-4 flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex font-black text-2xl md:text-3xl uppercase tracking-widest text-black"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {tickerText}
          {tickerText}
          {tickerText}
          {tickerText}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        >
          
          {/* Left Side: Heavy Title */}
          <div className="md:w-1/2 flex flex-col items-start">
            <h4 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white dark:drop-shadow-[4px_4px_0_rgba(74,222,128,1)] pb-4">
              HIT ME UP.
            </h4>
            <p className="text-xl md:text-2xl font-bold bg-black text-white dark:bg-brutal-green dark:text-black px-4 py-2 mt-2 w-auto border-2 border-black">
              Still here? You're either hiring or curious.
            </p>
          </div>

          {/* Right Side: Contact Box */}
          <div className="md:w-1/2 w-full flex justify-end">
            <div className="w-full md:w-auto bg-white dark:bg-tars-gray border-4 border-black shadow-brutal p-8 flex flex-col hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300">
              <h5 className="text-2xl font-bold mb-4 uppercase inline-flex items-center gap-2">
                Start a Conversation <MoveRight className="text-brutal-green" size={28} />
              </h5>
              <a
                href="mailto:nikunjnehu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-4 bg-brutal-green text-black border-2 border-black font-black text-xl hover:bg-black hover:text-brutal-green transition-colors"
               >
                NIKUNJNEHU@GMAIL.COM
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
      
      {/* 3. Bottom Minimal Bar */}
      <div className="w-full border-t-4 border-black bg-white dark:bg-tars-board py-6 flex justify-center items-center">
        <span className="font-bold text-lg uppercase tracking-wider text-black dark:text-white">
          © {new Date().getFullYear()} Nikunj Maheshwari. Built with Brutalism.
        </span>
      </div>
    </footer>
  );
}
