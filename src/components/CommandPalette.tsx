import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, FolderGit2, User, Mail, Terminal, Bot } from 'lucide-react';
import '../command-palette.css';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog 
          open={open} 
          onOpenChange={setOpen}
          label="Global Command Menu"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 pt-32 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl bg-brutal-bg dark:bg-tars-dark border-brutal border-black shadow-brutal-lg rounded-none overflow-hidden"
          >
            <Command.Input 
              placeholder="Type a command or search..." 
              className="w-full text-lg p-5 border-b-2 border-black bg-transparent outline-none text-black dark:text-white placeholder:text-gray-500"
            />
            
            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
              <Command.Empty className="p-4 text-center text-gray-500">No results found.</Command.Empty>
              
              <Command.Group heading="Navigation" className="text-xs font-bold text-gray-500 p-2">
                <Command.Item onSelect={() => runCommand(() => navigate('/'))} className="cmdk-item">
                  <Home className="mr-2 w-4 h-4" /> Home
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => navigate('/projects'))} className="cmdk-item">
                  <FolderGit2 className="mr-2 w-4 h-4" /> Projects
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.location.hash = 'about')} className="cmdk-item">
                  <User className="mr-2 w-4 h-4" /> About
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.location.hash = 'contact')} className="cmdk-item">
                  <Mail className="mr-2 w-4 h-4" /> Contact
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Tools & AI" className="text-xs font-bold text-gray-500 p-2">
                <Command.Item onSelect={() => runCommand(() => navigate('/terminal'))} className="cmdk-item text-green-600 dark:text-green-400">
                  <Terminal className="mr-2 w-4 h-4" /> Open Terminal View
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => alert('TARS Chat opened (Phase 3)'))} className="cmdk-item text-purple-600 dark:text-purple-400">
                  <Bot className="mr-2 w-4 h-4" /> Ask TARS (AI Assistant)
                </Command.Item>
              </Command.Group>
            </Command.List>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
