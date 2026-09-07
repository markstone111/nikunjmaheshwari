import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brutal-text dark:text-gray-200 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-brutal-border dark:border-gray-700 pb-4 inline-block">
        About Nikunj Maheshwari
      </h1>
      
      <div className="space-y-6 text-lg md:text-xl font-medium border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
        <p>
          Hello! I am Nikunj Maheshwari, an enthusiastic software developer with a primary focus on Android and Flutter app development. 
          Currently a BTech student based in Shillong, India, I have a passion for transforming complex problems into elegant, user-friendly software solutions. 
          My journey into programming started with curiosity about how mobile applications are built, which quickly blossomed into a full-fledged career path in software engineering.
        </p>
        
        <p>
          I specialize in building high-performance native Android applications using Kotlin, the Android SDK, and modern UI toolkits like Jetpack Compose. 
          In the cross-platform space, I leverage Flutter and Dart to create visually stunning applications that run seamlessly across both iOS and Android from a single codebase. 
          My development philosophy emphasizes clean code architecture, primarily utilizing MVVM, along with robust backend integrations via REST APIs and Firebase.
        </p>
        
        <p>
          Beyond mobile development, I am actively exploring the world of artificial intelligence and machine learning. 
          I love working with tools like Python and integrating intelligent models into everyday software to automate tasks and provide smarter user experiences. 
          I am also proficient in modern web development utilizing React, Vite, and Tailwind CSS, which allows me to craft responsive, fast, and accessible web portfolios and developer portals.
        </p>
        
        <p>
          When I'm not coding or participating in hackathons, I enjoy contributing to open-source projects, writing technical blogs, and staying updated with the latest trends in the tech industry. 
          I believe that technology is a powerful tool to drive positive change, and I am always looking for opportunities to collaborate on projects that make a real-world impact.
        </p>
      </div>
    </div>
  );
}
