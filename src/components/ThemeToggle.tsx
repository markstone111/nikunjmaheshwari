import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export type Theme = 'system' | 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);

    const handleSync = () => {
      const current = (localStorage.getItem('theme') as Theme) || 'system';
      setTheme(current);
    };

    window.addEventListener('theme-changed', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('theme-changed', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const updateTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    window.dispatchEvent(new Event('theme-changed'));
  };

  const toggleTheme = () => {
    const themeOrder: Theme[] = ['system', 'light', 'dark'];
    const currentIndex = themeOrder.indexOf(theme);
    const newTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    updateTheme(newTheme);
  };

  return { theme, toggleTheme };
}

interface ThemeToggleProps {
  className?: string;
  size?: number;
  isFloating?: boolean;
}

export default function ThemeToggle({ className, size = 18, isFloating = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={size} />;
      case 'dark': return <Moon size={size} />;
      default: return <Monitor size={size} />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'light': return 'Theme: Light (Click to switch to Dark)';
      case 'dark': return 'Theme: Dark (Click to switch to System)';
      default: return 'Theme: System (Click to switch to Light)';
    }
  };

  const defaultClasses = isFloating
    ? "fixed top-4 right-4 z-[60] p-2.5 rounded-none bg-black dark:bg-brutal-green shadow-brutal border-2 border-black text-white dark:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
    : "p-2 rounded-none bg-white dark:bg-tars-gray border-2 border-black text-black dark:text-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={cn(defaultClasses, className)}
      title={getTooltip()}
      aria-label="Toggle theme"
    >
      {getIcon()}
    </motion.button>
  );
}
