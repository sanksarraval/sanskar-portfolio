import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a Computer Science graduate from the University of Manitoba (Class of 2025), driven by a passion for building impactful software solutions that make a real difference in people's lives.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With hands-on experience in full-stack development and data analysis, I've worked with technologies like Python, C#, .NET Core, Java, React Native, and SQL. I believe in creating inclusive and accessible technology that supports diverse communities and user needs.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            When I’m not coding, you’ll likely find me exploring the outdoors—hiking, fishing, or just enjoying nature. I’m always excited to learn and take on challenges that push the boundaries of what’s possible in software development.
            </motion.p>

            {/* Key Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-primary-50 dark:bg-dark-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-neon-cyan">2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Graduation</div>
              </div>
              <div className="text-center p-4 bg-secondary-50 dark:bg-dark-700 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600 dark:text-neon-cyan">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-2">University of Manitoba</h3>
              <p className="text-lg opacity-90">Computer Science</p>
              <p className="text-sm opacity-75"> May 2025</p>
              
              <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Focus Areas</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• AI/ML</li>
                    <li>• Full-Stack Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Data Analysis</li>
                    <li>• Software Engineering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Python</li>
                    <li>• C# & .NET Core</li>
                    <li>• Java & React Native</li>
                    <li>• SQL & Database Design</li>
                    <li>• Modern Web Technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 