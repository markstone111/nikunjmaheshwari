import { useState } from 'react';
import { Home, FolderGit2, User, Mail, BrainCircuit, Terminal, Menu, X, Bot } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: FolderGit2, label: 'Projects', path: '/projects' },
  { icon: Bot, label: 'T.A.R.S', path: '/tars' },
  { icon: User, label: 'About', path: '/#about' },
  { icon: BrainCircuit, label: 'Obsessions', path: '/#obsessions' },
  { icon: Mail, label: 'Contact', path: '/#contact' },
  { icon: Terminal, label: 'Terminal', path: '/terminal' }
];

export default function SideNavbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    onClick={() => setIsMobileMenuOpen(false)}
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
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center py-6 px-3 space-y-8 rounded-full bg-[#1e1e24] border border-gray-700/50 shadow-2xl"
      >
        {/* LOGO */}
        <div className="w-10 h-10 bg-brutal-green text-black border-2 border-black rounded-full flex items-center justify-center font-bold text-lg shadow-brutal-sm">
          N
        </div>

        {/* LINKS */}
        <div className="flex flex-col w-full space-y-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/#about'); 
            const Icon = item.icon;
            return (
              <Link 
                to={item.path} 
                key={item.label}
                className={cn(
                  "group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-white/10 text-brutal-green shadow-[0_0_15px_rgba(74,222,128,0.2)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className="w-5 h-5" />
                {/* Tooltip */}
                <div className="absolute left-14 px-3 py-1.5 bg-[#1e1e24] border border-gray-700 text-white text-xs font-medium whitespace-nowrap rounded-md opacity-0 group-hover:opacity-100 pointer-events-none z-50 transition-all duration-200 transform translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                  {item.label}
                  {/* Tooltip arrow */}
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#1e1e24] border-l border-b border-gray-700 rotate-45"></div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="pt-4 border-t border-gray-700/50 w-full flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 text-gray-300 font-mono text-[10px] font-bold cursor-default shadow-inner" title="Press Ctrl+K">
            ⌘K
          </div>
        </div>
      </motion.nav>
    </>
  );
}
