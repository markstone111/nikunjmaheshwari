import { useState, MouseEvent } from 'react';
import { Home, FolderGit2, User, Mail, BrainCircuit, Terminal, Menu, X, Bot, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: FolderGit2, label: 'Projects', path: '/projects' },
  { icon: BrainCircuit, label: 'Obsessions', path: '/obsessions' },
  { icon: BookOpen, label: 'Blogs', path: '/blogs' },
  { icon: Bot, label: 'T.A.R.S', path: '/tars' },
  { icon: Terminal, label: 'Terminal', path: '/terminal' },
  { icon: User, label: 'About', path: '/#about', isHash: true },
  { icon: Mail, label: 'Contact', path: '/#contact', isHash: true }
];

export default function SideNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, path: string, isHash?: boolean) => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    if (isHash) {
      e.preventDefault();
      // If we are not on the homepage, navigate there first
      if (location.pathname !== '/') {
        navigate(path);
        // Add a slight delay to allow navigation to finish before scrolling
        setTimeout(() => {
          const id = path.split('#')[1];
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = path.split('#')[1];
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <div className="md:hidden fixed top-4 right-16 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-black text-white dark:bg-brutal-green dark:text-black border-2 border-black shadow-brutal hover:-translate-y-1 transition-transform"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE NAVIGATION OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-brutal-yellow dark:bg-tars-dark flex flex-col items-center justify-center p-8 space-y-8"
          >
            <div className="flex flex-col w-full space-y-6 text-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/#about');
                const Icon = item.icon;
                return (
                  <Link
                    to={item.path}
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.path, item.isHash)}
                    className={cn(
                      "flex items-center justify-center gap-4 py-4 text-2xl font-black uppercase tracking-tighter border-2 border-black shadow-brutal transition-transform hover:-translate-y-1",
                      isActive
                        ? "bg-black text-white dark:bg-brutal-green dark:text-black"
                        : "bg-white text-black dark:bg-tars-gray dark:text-white"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- DESKTOP SIDE NAVBAR (Floating Capsule) --- */}
      <motion.nav 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex fixed left-6 bottom-8 z-50 flex-col items-center py-4 px-3 space-y-4 rounded-full bg-[#1e1e24] border-2 border-black shadow-brutal-lg"
      >
        {/* LINKS */}
        <div className="flex flex-col w-full space-y-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === `/#about`); 
            const Icon = item.icon;
            return (
              <Link 
                to={item.path} 
                key={item.label}
                onClick={(e) => handleNavClick(e, item.path, item.isHash)}
                className={cn(
                  "group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-brutal-green border-2 border-black text-black shadow-brutal-sm" 
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className="w-5 h-5" />
                {/* Tooltip */}
                <div className="absolute left-14 px-3 py-1.5 bg-black border-2 border-white text-white text-xs font-bold whitespace-nowrap rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none z-50 transition-all duration-200 shadow-brutal-sm">
                  {item.label}
                </div>
              </Link>
            )
          })}
        </div>
      </motion.nav>
    </>
  );
}
