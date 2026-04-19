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


const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", logo: "/logos/c.svg" },
      { name: "C++", logo: "/logos/cplusplus.svg" },
      { name: "Python", logo: "/logos/python.svg" },
      { name: "Java", logo: "/logos/java.svg" },
      { name: "Kotlin", logo: "/logos/kotlin.svg" },
      { name: "Dart", logo: "/logos/dart.svg" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", logo: "/logos/html5.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "React", logo: "/logos/react.svg" },
      { name: "React Router", logo: "/logos/reactrouter.svg" },
      { name: "Next.js", logo: "/logos/nextdotjs.svg" },
      { name: "Node.js", logo: "/logos/nodedotjs.svg" },
      { name: "Express.js", logo: "/logos/express.svg" },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", logo: "/logos/flutter.svg" },
      { name: "Jetpack Compose", logo: "/logos/jetpackcompose.svg" },
      { name: "Android", logo: "/logos/android.svg" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "Firebase", logo: "/logos/firebase.svg" },
    ],
  },
  {
    category: "Other Tools & Platforms",
    skills: [
      { name: "GitHub", logo: "/logos/github.svg" },
      { name: "OpenCV", logo: "/logos/opencv.svg" },
      { name: "Mediapipe", logo: "/logos/mediapipe.svg" },
      { name: "Streamlit", logo: "/logos/streamlit.svg" },
      { name: "DSA", logo: "/logos/leetcode.svg" },
    ],
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-brutal-bg dark:bg-tars-board font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black dark:text-white uppercase tracking-tighter drop-shadow-[2px_2px_0_rgba(74,222,128,1)]">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* photo + bio*/}
            <div className="space-y-6 text-center border-4 border-black bg-brutal-yellow p-8 shadow-brutal-lg">
              <img
                src="/hero_section_pic_2_copy.png"
                alt="Nikunj Maheshwari"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-black shadow-brutal"
              />
              <p className="text-black font-semibold text-lg">
                I’m a B.Tech student specializing in app development, AI tools, and full-stack web applications. I love building practical, impactful solutions and continuously learning new technologies. Seeking internship opportunities to contribute and grow in a fast-paced tech environment.
              </p>
            </div>

            {/* skills */}
            <div className="grid sm:grid-cols-2 gap-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: catIndex * 0.2,
                  }}
                  className="bg-white dark:bg-tars-dark border-2 border-black rounded-none shadow-brutal p-6 hover:-translate-y-1 hover:shadow-brutal-lg transition-transform"
                >
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + catIndex * 0.2,
                        }}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-10 h-10 mb-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
