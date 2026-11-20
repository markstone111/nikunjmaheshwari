import { useState, useEffect, MouseEvent } from 'react';
import { 
  Home, 
  FolderGit2, 
  User, 
  Mail, 
  BrainCircuit, 
  Terminal, 
  Menu, 
  X, 
  Bot, 
  BookOpen, 
  Award,
  Search,
  Briefcase
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export const navLinks = [
  { label: 'About', path: '/#about', isHash: true },
  { label: 'Experience', path: '/#experience', isHash: true },
  { label: 'Projects', path: '/projects' },
  { label: 'Obsessions', path: '/obsessions' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'T.A.R.S', path: '/tars' },
  { label: 'Contact', path: '/#contact', isHash: true },
];

export const dockItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'About', path: '/#about', isHash: true },
  { icon: Briefcase, label: 'Experience', path: '/#experience', isHash: true },
  { icon: FolderGit2, label: 'Projects', path: '/projects' },
  { icon: BrainCircuit, label: 'Obsessions', path: '/obsessions' },
  { icon: BookOpen, label: 'Blogs', path: '/blogs' },
  { icon: Award, label: 'Certifications', path: '/certifications' },
  { icon: Bot, label: 'T.A.R.S', path: '/tars' },
  { icon: Terminal, label: 'Terminal', path: '/terminal' },
  { icon: Mail, label: 'Contact', path: '/#contact', isHash: true },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll offset to transition from top navbar to side dock
  useEffect(() => {
    const handleScroll = () => {
      // Shift to side navbar once scrolled past 80px
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, path: string, isHash?: boolean) => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    if (isHash) {
      e.preventDefault();
      const id = path.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  const isLinkActive = (path: string, isHash?: boolean) => {
    if (isHash) return false;
    return location.pathname === path;
  };

  return (
    <>
      {/* ============================================================== */}
      {/* 1. TOP NAVBAR (Visible at top of page, self-expressing with text) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            key="top-navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#f4f4f0]/95 dark:bg-[#171717]/95 backdrop-blur-md border-b-3 border-black transition-colors duration-300"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
              
              {/* Brand Logo */}
              <Link 
                to="/" 
                onClick={handleLogoClick}
                className="group flex items-center gap-2"
                title="Nikunj Maheshwari - Home"
              >
                <span className="font-mono font-black text-sm sm:text-base tracking-tighter bg-black text-white dark:bg-brutal-green dark:text-black px-3 py-1.5 border-2 border-black shadow-brutal-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                  [ &gt;_ NIKUNJ.DEV ]
                </span>
                <span className="hidden lg:inline-block px-2 py-0.5 bg-brutal-yellow text-black border-2 border-black text-[11px] font-mono font-bold uppercase shadow-brutal-sm">
                  PORTFOLIO
                </span>
              </Link>

              {/* Desktop Nav Items: Self-expressing labeled links */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {navLinks.map((item) => {
                  const active = isLinkActive(item.path, item.isHash);
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item.path, item.isHash)}
                      className={cn(
                        "px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm font-black uppercase tracking-wider transition-all duration-200 border-2",
                        active
                          ? "bg-black text-white dark:bg-brutal-green dark:text-black border-black shadow-brutal-sm -translate-y-0.5"
                          : "border-transparent text-gray-800 dark:text-gray-200 hover:border-black hover:bg-white dark:hover:bg-tars-gray hover:shadow-brutal-sm hover:-translate-y-0.5"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Action Icons & Utilities */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Command Palette Trigger */}
                <button
                  onClick={openCommandPalette}
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-bold bg-white dark:bg-tars-dark text-black dark:text-white border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  title="Search & Commands (Ctrl+K)"
                  aria-label="Open Command Menu"
                >
                  <Search size={14} />
                  <span className="text-[10px] bg-black/10 dark:bg-white/20 px-1 py-0.5 rounded font-mono">⌘K</span>
                </button>

                {/* Terminal Quick Link */}
                <Link
                  to="/terminal"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-bold uppercase bg-black text-brutal-green dark:bg-brutal-green dark:text-black border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  title="Interactive Terminal"
                >
                  <Terminal size={14} />
                  <span className="hidden xl:inline">CLI</span>
                </Link>

                {/* Theme Toggle Button */}
                <ThemeToggle size={16} />

                {/* Mobile Menu Hamburger */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 bg-black text-white dark:bg-brutal-green dark:text-black border-2 border-black shadow-brutal-sm hover:translate-y-0.5 transition-transform"
                  aria-label="Toggle Navigation Menu"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* 2. DOCKED SIDE CAPSULE NAVBAR (Appears when scrolled down) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            key="side-dock-navbar"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="hidden md:flex fixed left-6 bottom-8 z-50 flex-col items-center py-3.5 px-2.5 space-y-3 rounded-full bg-[#1e1e24] border-2 border-black shadow-brutal-lg"
          >
            {dockItems.map((item) => {
              const active = isLinkActive(item.path, item.isHash);
              const Icon = item.icon;
              return (
                <Link
                  to={item.path}
                  key={item.label}
                  onClick={(e) => handleNavClick(e, item.path, item.isHash)}
                  className={cn(
                    "group relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300",
                    active
                      ? "bg-brutal-green border-2 border-black text-black shadow-brutal-sm"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  )}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                  {/* Tooltip */}
                  <div className="absolute left-14 px-3 py-1 bg-black border-2 border-white text-white text-xs font-bold whitespace-nowrap rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none z-50 transition-all duration-200 shadow-brutal-sm">
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* 3. FLOATING THEME TOGGLE (Visible when top bar is hidden) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="floating-theme-toggle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <ThemeToggle isFloating size={18} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* 4. MOBILE FULL-SCREEN NAVIGATION OVERLAY */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-brutal-yellow dark:bg-tars-dark flex flex-col items-center justify-center p-6"
          >
            {/* Close Button Header */}
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <ThemeToggle size={20} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-black text-white dark:bg-brutal-green dark:text-black border-2 border-black shadow-brutal hover:translate-y-0.5 transition-transform"
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col w-full max-w-sm space-y-3 text-center pt-8">
              {dockItems.map((item) => {
                const active = isLinkActive(item.path, item.isHash);
                const Icon = item.icon;
                return (
                  <Link
                    to={item.path}
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.path, item.isHash)}
                    className={cn(
                      "flex items-center justify-center gap-3 py-3 text-lg font-black uppercase tracking-tight border-2 border-black shadow-brutal-sm transition-transform active:translate-y-1",
                      active
                        ? "bg-black text-white dark:bg-brutal-green dark:text-black"
                        : "bg-white text-black dark:bg-tars-gray dark:text-white hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
