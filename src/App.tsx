import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideNavbar from './components/SideNavbar';
import ThemeToggle from './components/ThemeToggle';
import CommandPalette from './components/CommandPalette';
import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-brutal-bg dark:bg-tars-board flex">
      {/* Global Components */}
      <ThemeToggle />
      <SideNavbar />
      <CommandPalette />
      
      {/* Main content area */}
      <main className="flex-1 w-full min-h-screen transition-all duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* We will build out /terminal and /projects completely in Phase 3/4 */}
          <Route path="/terminal" element={<div className="p-20 text-white">Terminal Route (Coming Soon)</div>} />
          <Route path="/projects" element={<div className="p-20 text-black dark:text-white">All Projects Route (Coming Soon)</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;