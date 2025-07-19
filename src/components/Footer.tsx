import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-2">
              Tech Portfolio
            </h4>
          </div>
          
          <nav className="flex justify-center gap-8 mb-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              Made with ❤️ by Nikunj_Maheshwari @{currentYear}
            </p>
            <a
              href="https://github.com/markstone111/side_end.dev.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              side_end.dev
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}