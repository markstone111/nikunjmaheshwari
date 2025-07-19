import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Python', level: 80 },
  { name: 'C', level: 85 },
  { name: 'Kotlin', level: 80 },
  { name: 'Java', level: 70 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'DSA', level: 75 },
  { name: 'Dart', level: 80 },
  { name: 'Flutter', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Next.js', level: 60 },
  { name: 'Node.js', level: 65 },
  { name: 'Express.js', level: 60 },
  { name: 'MongoDB', level: 70 },

  
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src="https://i.ibb.co/jvP55fXF/profile-picture2.jpg" // Replace with your actual image URL
                alt="Nikunj Maheshwari"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
              />
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Third-year B.Tech. student passionate about creating innovative solutions through code.
                Always learning and exploring new technologies to stay at the forefront of tech evolution.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-purple-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
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