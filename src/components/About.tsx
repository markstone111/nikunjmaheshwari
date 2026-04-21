// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const skills = [
//   { name: 'Python', level: 80 },
//   { name: 'C', level: 85 },
//   { name: 'Kotlin', level: 80 },
//   { name: 'Java', level: 70 },
//   { name: 'HTML/CSS', level: 85 },
//   { name: 'DSA', level: 75 },
//   { name: 'Dart', level: 80 },
//   { name: 'Flutter', level: 75 },
//   { name: 'React', level: 70 },
//   { name: 'Next.js', level: 60 },
//   { name: 'Node.js', level: 65 },
//   { name: 'Express.js', level: 60 },
//   { name: 'MongoDB', level: 70 },

  
// ];

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   return (
//     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
//             About Me
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <img
//                 src="https://i.ibb.co/jvP55fXF/profile-picture2.jpg" // Replace with your actual image URL
//                 alt="Nikunj Maheshwari"
//                 className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
//               />
//               <p className="text-gray-600 dark:text-gray-300 text-center">
//                 Third-year B.Tech. student passionate about building impactful
//                 solutions through technology. Enthusiastic about app
//                 development, AI, and full-stack projects. Always eager to
//                 explore, experiment, and stay ahead in the fast-changing world
//                 of tech.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <div className="flex justify-between mb-1">
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {skill.name}
//                     </span>
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {skill.level}%
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//                     <motion.div
//                       className="bg-purple-600 h-2.5 rounded-full"
//                       initial={{ width: 0 }}
//                       animate={inView ? { width: `${skill.level}%` } : {}}
//                       transition={{ duration: 1, delay: index * 0.1 }}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;











// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Skill data grouped by categories (logos now .svg)
// const skillCategories = [
//   {
//     category: "Programming Languages",
//     skills: [
//       { name: "C", level: 85, logo: "/logos/c.svg" },
//       { name: "C++", level: 75, logo: "/logos/cplusplus.svg" },
//       { name: "Python", level: 80, logo: "/logos/python.svg" },
//       { name: "Java", level: 70, logo: "/logos/java.svg" }, // ⚠️ add java.svg in /public/logos if missing
//       { name: "Kotlin", level: 75, logo: "/logos/kotlin.svg" },
//       { name: "Dart", level: 70, logo: "/logos/dart.svg" },
//     ],
//   },
//   {
//     category: "Web Development",
//     skills: [
//       { name: "HTML5", level: 85, logo: "/logos/html5.svg" },
//       { name: "CSS", level: 80, logo: "/logos/css.svg" },
//       { name: "JavaScript", level: 80, logo: "/logos/javascript.svg" },
//       { name: "React", level: 75, logo: "/logos/react.svg" },
//       { name: "React Router", level: 65, logo: "/logos/reactrouter.svg" },
//       { name: "Next.js", level: 70, logo: "/logos/nextdotjs.svg" },
//       { name: "Node.js", level: 70, logo: "/logos/nodedotjs.svg" },
//       { name: "Express.js", level: 65, logo: "/logos/express.svg" },
//     ],
//   },
//   {
//     category: "Mobile Development",
//     skills: [
//       { name: "Flutter", level: 75, logo: "/logos/flutter.svg" },
//       { name: "Jetpack Compose", level: 65, logo: "/logos/jetpackcompose.svg" },
//       { name: "Android", level: 70, logo: "/logos/android.svg" },
//     ],
//   },
//   {
//     category: "Databases & Cloud",
//     skills: [
//       { name: "MongoDB", level: 70, logo: "/logos/mongodb.svg" },
//       { name: "Firebase", level: 65, logo: "/logos/firebase.svg" },
//     ],
//   },
//   {
//     category: "Other Tools & Platforms",
//     skills: [
//       { name: "GitHub", level: 80, logo: "/logos/github.svg" },
//       { name: "OpenCV", level: 70, logo: "/logos/opencv.svg" },
//       { name: "Mediapipe", level: 60, logo: "/logos/mediapipe.svg" },
//       { name: "Streamlit", level: 65, logo: "/logos/streamlit.svg" },
//       { name: "DSA (LeetCode)", level: 75, logo: "/logos/leetcode.svg" },
//     ],
//   },
// ];

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
//             About Me
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             {/* Left: Profile + Bio */}
//             <div className="space-y-6">
//               <img
//                 src="https://i.ibb.co/jvP55fXF/profile-picture2.jpg"
//                 alt="Nikunj Maheshwari"
//                 className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
//               />
//               <p className="text-gray-600 dark:text-gray-300 text-center">
//                 Third-year B.Tech. student passionate about building impactful
//                 solutions through technology. Focused on app development, AI,
//                 and full-stack projects. Curious learner who loves exploring
//                 new tools and staying ahead in the fast-changing tech world.
//               </p>
//             </div>

//             {/* Right: Skills grouped by category */}
//             <div className="space-y-10">
//               {skillCategories.map((category, catIndex) => (
//                 <div key={category.category}>
//                   <h3 className="text-xl font-semibold mb-4 dark:text-white">
//                     {category.category}
//                   </h3>
//                   <div className="space-y-4">
//                     {category.skills.map((skill, index) => (
//                       <motion.div
//                         key={skill.name}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{
//                           duration: 0.5,
//                           delay: index * 0.1 + catIndex * 0.2,
//                         }}
//                       >
//                         <div className="flex items-center justify-between mb-1">
//                           <div className="flex items-center gap-2">
//                             {/* using regular <img/> so this works on Vite/react too */}
//                             <img
//                               src={skill.logo}
//                               alt={skill.name}
//                               className="w-5 h-5"
//                             />
//                             <span className="text-gray-700 dark:text-gray-300">
//                               {skill.name}
//                             </span>
//                           </div>
//                           <span className="text-gray-700 dark:text-gray-300">
//                             {skill.level}%
//                           </span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//                           <motion.div
//                             className="bg-purple-600 h-2.5 rounded-full"
//                             initial={{ width: 0 }}
//                             animate={inView ? { width: `${skill.level}%` } : {}}
//                             transition={{
//                               duration: 1,
//                               delay: index * 0.1 + catIndex * 0.2,
//                             }}
//                           />
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const allSkills = [
  { name: "C", logo: "/logos/c.svg" },
  { name: "C++", logo: "/logos/cplusplus.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Kotlin", logo: "/logos/kotlin.svg" },
  { name: "Dart", logo: "/logos/dart.svg" },
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "React Router", logo: "/logos/reactrouter.svg" },
  { name: "Next.js", logo: "/logos/nextdotjs.svg" },
  { name: "Node.js", logo: "/logos/nodedotjs.svg" },
  { name: "Express.js", logo: "/logos/express.svg" },
  { name: "Flutter", logo: "/logos/flutter.svg" },
  { name: "Jetpack Compose", logo: "/logos/jetpackcompose.svg" },
  { name: "Android", logo: "/logos/android.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "OpenCV", logo: "/logos/opencv.svg" },
  { name: "Mediapipe", logo: "/logos/mediapipe.svg" },
  { name: "Streamlit", logo: "/logos/streamlit.svg" },
  { name: "DSA", logo: "/logos/leetcode.svg" }
];

const tarsQuestions = [
  'Is he open to remote work?', 
  'Why should I hire him?', 
  'What is his strongest project?', 
  'What tech stack does he use?', 
  'Tell me about his experience', 
  'What makes him different?'
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-brutal-bg dark:bg-tars-board font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="max-w-6xl mx-auto flex flex-col gap-8"
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-black dark:text-white uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(74,222,128,1)]">
            Foundation Blocks
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
             {/* Left: Core Module */}
             <motion.div 
               whileHover={{ translateY: -5 }}
               className="md:w-1/3 flex border-4 border-black bg-brutal-yellow shadow-brutal p-8 flex-col items-center justify-center gap-6"
             >
                <div className="w-full flex justify-between uppercase font-black text-xs md:text-sm tracking-widest border-b-4 border-black pb-2 mb-2 text-black">
                   <span>Core Module</span>
                   <span>UID: 001</span>
                </div>
                <img
                  src="/hero_section_pic_2_copy.png"
                  alt="Nikunj Maheshwari"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                />
             </motion.div>

             {/* Right: Primary Structure + Input/Output */}
             <div className="md:w-2/3 flex flex-col gap-8 flex-grow">
                 {/* Top: Bio */}
                 <motion.div 
                   whileHover={{ translateY: -5 }}
                   className="flex-1 border-4 border-black bg-white dark:bg-tars-dark shadow-brutal p-6 md:p-8 flex flex-col gap-4"
                 >
                    <div className="w-full flex justify-between uppercase font-black text-xs md:text-sm tracking-widest border-b-2 border-dashed border-gray-400 dark:border-gray-600 pb-2 text-gray-500">
                       <span>Primary Structure</span>
                       <span>STATUS: ACTIVE</span>
                    </div>
                    <p className="text-black dark:text-white font-bold text-lg md:text-xl leading-relaxed mt-2">
                      I am an execution-driven B.Tech student prioritizing full-stack web applications, AI integration, and cross-platform mobile development. Beyond writing code, I focus on logical system architecture, rapid prototyping, and delivering highly scalable, user-centric products. I thrive under pressure and am actively seeking internship challenges to push the boundaries of modern technology.
                    </p>
                 </motion.div>

                 {/* Bottom: Skills */}
                 <motion.div 
                   whileHover={{ translateY: -5 }}
                   className="border-4 border-black bg-white dark:bg-tars-dark shadow-brutal p-6 md:p-8 flex flex-col gap-4"
                 >
                    <div className="w-full flex justify-between uppercase font-black text-xs md:text-sm tracking-widest border-b-2 border-dashed border-gray-400 dark:border-gray-600 pb-2 text-gray-500">
                       <span>Input & Output</span>
                       <span>LANGUAGES / TOOLS</span>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                       {allSkills.map(s => (
                           <div key={s.name} title={s.name} className="flex items-center justify-center p-3 border-2 border-black bg-gray-100 dark:bg-gray-800 shadow-[2px_2px_0_rgba(0,0,0,1)] hover:bg-brutal-green transition-colors cursor-pointer hover:-translate-y-1">
                              <img src={s.logo} alt={s.name} className="w-8 h-8" />
                           </div>
                       ))}
                    </div>
                 </motion.div>
             </div>
          </div>

          {/* Sub-System Support: Auto-Scrolling TARS Prompts */}
          <motion.div 
             whileHover={{ translateY: -5 }}
             className="w-full border-4 border-black bg-brutal-green p-6 shadow-brutal flex flex-col gap-4 overflow-hidden relative"
          >
             <div className="w-full flex justify-between uppercase font-black text-xs md:text-sm tracking-widest border-b-4 border-black pb-2 text-black">
                 <span>Sub-System Support</span>
                 <span>GOT QUESTIONS? ASK TARS</span>
             </div>
             
             {/* Auto-scrolling Marquee Container */}
             <div className="flex relative overflow-hidden py-4 w-full group">
                 <motion.div 
                   className="flex whitespace-nowrap gap-6 pl-6"
                   animate={{ x: ["0%", "-50%"] }}
                   transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                 >
                    {/* Duplicate the array twice to create a seamless infinite loop */}
                    {[...tarsQuestions, ...tarsQuestions, ...tarsQuestions, ...tarsQuestions].map((q, i) => (
                      <Link 
                        key={i}
                        to="/tars" 
                        state={{ query: q }} 
                        className="inline-block bg-white dark:bg-gray-800 border-2 border-black px-6 py-3 font-black text-sm md:text-base tracking-tighter text-black dark:text-white hover:bg-brutal-pink hover:text-black transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)] whitespace-nowrap"
                      >
                        {q}
                      </Link>
                    ))}
                 </motion.div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
