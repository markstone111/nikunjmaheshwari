import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Code2, FolderGit2, Mail } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "Skills", href: "#about", icon: <Code2 className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

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

          {/* navigatcions */}
          <nav className="flex justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>

          {/* text */}
          <div className="text-center text-gray-500 text-sm space-y-2">
            <p>
              Made with <span className="text-pink-500">❤️</span> by{" "}
              <a
                href="https://github.com/markstone111/side_end.dev.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                side_end.dev
              </a>
            </p>
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
