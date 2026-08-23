import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brutal-text dark:text-gray-200 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-brutal-border dark:border-gray-700 pb-4 inline-block">
        Privacy Policy
      </h1>
      
      <div className="space-y-6 text-lg font-medium border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
        <p><strong>Last Updated: August 24, 2026</strong></p>
        
        <p>
          Welcome to the privacy policy of Nikunj Maheshwari's portfolio and associated API services ("Service"). 
          I respect your privacy and am deeply committed to protecting any personal data you share with me while exploring my portfolio, interacting with my AI agent tools, or using my developer API. 
          This policy details exactly what data is collected, how it is utilized, and your rights concerning your personal information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection</h2>
        <p>
          When you visit this website, we may automatically log standard diagnostic data provided by your web browser, such as your IP address, browser type and version, pages you visit, and timestamps. 
          If you use our contact form or send an email, we collect your name, email address, and the contents of your message. 
          For developers accessing our API, we may log request metadata including user-agent strings (to identify AI agents or browsers) and API endpoints accessed for rate-limiting and performance analytics.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Information</h2>
        <p>
          The information we collect is strictly used to maintain and improve the portfolio and API services. 
          Specifically, your contact information is solely used to reply to your inquiries, freelance requests, or collaboration proposals. 
          Diagnostic and API usage data helps us optimize server performance, identify errors in real-time, and tailor our content (such as markdown responses for AI agents via content negotiation). 
          We do not sell, rent, or illegally distribute your personal information to any third parties or marketing agencies under any circumstances.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Data Security and Cookies</h2>
        <p>
          We employ industry-standard security measures, including HTTPS encryption and secure hosting providers (like Vercel), to protect against unauthorized access, alteration, or destruction of your personal data. 
          This website may use essential cookies to maintain user preferences (like your choice of Dark/Light theme) and minimal analytics cookies (via Google Analytics) to understand generic visitor traffic patterns. 
          You can disable cookies at any time through your browser settings without losing core access to the portfolio content.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Contacting Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal data is being handled, please feel free to reach out via the Contact page or email directly. 
          We are committed to resolving any privacy-related issues promptly and transparently.
        </p>
      </div>
    </div>
  );
}
