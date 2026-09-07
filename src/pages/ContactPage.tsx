import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brutal-text dark:text-gray-200 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-brutal-border dark:border-gray-700 pb-4 inline-block">
        Contact Nikunj Maheshwari
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 text-lg font-medium border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
          <p>
            I am currently open for new opportunities, freelance projects, and exciting collaborations in the realms of Android, Flutter, and web development. 
            Whether you are a startup looking to build your first mobile application, an established enterprise needing to scale your existing infrastructure, or an open-source maintainer seeking contributors, I would love to connect.
          </p>
          <p>
            My ideal projects involve tackling complex challenges, optimizing performance, and building intuitive user interfaces. I value clear communication, agile methodologies, and test-driven development. 
            If you have an idea that requires a dedicated software developer with a robust understanding of mobile ecosystems and modern AI integrations, please do not hesitate to reach out!
          </p>
          
          <div className="mt-8 space-y-4">
            <a href="mailto:nikunjmaheshwari@example.com" className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span>Contact via Email</span>
            </a>
            <a href="https://github.com/markstone111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
              <span>GitHub Profile</span>
            </a>
            <a href="https://www.linkedin.com/in/nikunjmaheshwari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Based in Shillong, India</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-6 border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full border-4 border-brutal-border dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-700 outline-none focus:ring-4 focus:ring-blue-500/50" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
            <input type="email" id="email" className="w-full border-4 border-brutal-border dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-700 outline-none focus:ring-4 focus:ring-blue-500/50" placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full border-4 border-brutal-border dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-700 outline-none focus:ring-4 focus:ring-blue-500/50" placeholder="How can we collaborate?"></textarea>
          </div>
          <button type="button" className="w-full bg-brutal-primary text-white font-bold text-lg py-3 px-6 border-4 border-brutal-border dark:border-gray-600 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none active:translate-y-2 active:shadow-none">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
