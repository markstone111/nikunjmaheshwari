import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import ScrollIndicators from './components/ScrollIndicators';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TerminalPage from './pages/TerminalPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import ObsessionsPage from './pages/ObsessionsPage';
import TarsPage from './pages/TarsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DevelopersPage from './pages/DevelopersPage';
import CertificationsPage from './pages/CertificationsPage';

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
      <ScrollIndicators />
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
    <div className="min-h-screen bg-brutal-bg dark:bg-tars-board flex flex-col selection:bg-brutal-green selection:text-black">
      <ScrollToTop />
      {/* Global Navigation (Top Navbar at top, docked capsule when scrolled) */}
      <Navbar />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/docs" element={<DevelopersPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
        
        {/* Global Footer (Hidden on Terminal and TARS) */}
        {shouldShowFooter && <Footer />}
      </main>
    </div>
  );
}

export default App;
