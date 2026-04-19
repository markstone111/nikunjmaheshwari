import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Code2, FolderGit2, Mail } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "Skills", href: "#about", icon: <Code2 className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-brutal-bg dark:bg-tars-dark text-black dark:text-white py-12 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h4 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tighter drop-shadow-[2px_2px_0_rgba(74,222,128,1)]">
              Tech Portfolio
            </h4>
          </div>


          {/* Navigation */}
          <nav className="flex justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-black dark:text-gray-300 hover:text-brutal-green transition-colors font-bold uppercase"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Footer Text */}
          <div className="text-center text-black dark:text-gray-400 font-bold space-y-4 p-6 border-4 border-black bg-white dark:bg-tars-gray shadow-brutal mx-auto max-w-xl">
            <p className="text-lg">Still here? You're either hiring or curious.<br></br> Either way, let's talk.</p>
            <p>Got an idea worth building? Drop a line at: {" "}</p>
            <a
                href="mailto:nikunjnehu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-brutal-green text-black border-2 border-black hover:-translate-y-1 hover:shadow-brutal transition-transform"
              >
                nikunjnehu@gmail.com
            </a>
            {/* <p>© {currentYear} All rights reserved.</p> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
