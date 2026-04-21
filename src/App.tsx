import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import SideNavbar from './components/SideNavbar';
import ThemeToggle from './components/ThemeToggle';
import CommandPalette from './components/CommandPalette';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TerminalPage from './pages/TerminalPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import ObsessionsPage from './pages/ObsessionsPage';
import TarsPage from './pages/TarsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const hideFooterRoutes = ['/terminal', '/tars'];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-brutal-bg dark:bg-tars-board flex">
      <ScrollToTop />
      {/* Global Components */}
      <ThemeToggle />
      <SideNavbar />
      <CommandPalette />
      
      {/* Main content area */}
      <main className="flex-1 w-full min-h-screen transition-all duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/obsessions" element={<ObsessionsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/tars" element={<TarsPage />} />
        </Routes>
        
        {/* Global Footer (Hidden on Terminal and TARS) */}
        {shouldShowFooter && <Footer />}
      </main>
    </div>
  );
}

export default App;