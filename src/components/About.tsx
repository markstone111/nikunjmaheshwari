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
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "Kotlin", logo: "/logos/kotlin.svg" },
      { name: "Dart", logo: "/logos/dart.svg" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", logo: "/logos/html5.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
      { name: "React", logo: "/logos/react.svg" },
      { name: "React Router", logo: "/logos/reactrouter.svg" },
      { name: "Next.js", logo: "/logos/nextdotjs.svg" },
      { name: "Node.js", logo: "/logos/nodedotjs.svg" },
      { name: "Django", logo: "/logos/django.svg" },
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* photo + bio*/}
            <div className="space-y-6 text-center">
              <img
                src="https://i.ibb.co/jvP55fXF/profile-picture2.jpg"
                alt="Nikunj Maheshwari"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Third-year B.Tech. student passionate about building impactful
                solutions through technology. Focused on app development, AI,
                and full-stack projects. Curious learner who loves exploring
                new tools and staying ahead in the fast-changing tech world.
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
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
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
