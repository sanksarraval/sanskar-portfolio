import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer (Co-op)",
      company: "Johnston Group",
      period: "Jan 2025 – April 2025",
      location: "Winnipeg, MB",
      description: "Owned data pipeline development using Python and Apache Airflow, creating robust data workflows that reduced manual processing time by 60% and improved operational efficiency.",
      skills: ["Python", "Apache Airflow", "Data Engineering", "Automation", "Operational Efficiency"],
      emoji: "💼",
      type: "Software Development"
    },
    {
      id: 2,
      title: "Application Developer (Co-op)",
      company: "Province of Manitoba",
      period: "Jan 2024 – Dec 2024",
      location: "Winnipeg, MB",
      description: "Created powerful visualizations by implementing SSRS reports and dashboards, providing actionable insights to department leadership.",
      skills: ["SSRS", "Dashboards", "Data Visualization", "C#", ".NET"],
      emoji: "🖥️",
      type: "Software Development"
    },
    {
      id: 3,
      title: "Web Developer (Co-op)",
      company: "Province of Manitoba",
      period: "Sep 2023 – Dec 2023",
      location: "Winnipeg, MB",
      description: "Built integrated multi-platform tools by creating accessible web applications using .NET frameworks, serving thousands of users and improving service delivery.",
      skills: [".NET", "Web Development", "Accessibility", "Multi-platform"],
      emoji: "🌐",
      type: "Web Development"
    },
    {
      id: 4,
      title: "Research Assistant",
      company: "University of Manitoba",
      period: "May 2022 - September 2022",
      description: "Conducted data analysis and algorithm optimization research. Worked on improving computational efficiency and developing innovative solutions for complex problems.",
      skills: ["Data Analysis", "Algorithm Optimization", "Research", "Problem Solving"],
      emoji: "🔬",
      type: "Research"
    },
    {
      id: 5,
      title: "Customer Service Representative",
      company: "Walmart",
      period: "2020 - 2024",
      description: "Provided exceptional customer service and support. Developed strong communication skills and learned to handle diverse customer needs efficiently.",
      skills: ["Customer Service", "Communication", "Problem Resolution", "Teamwork"],
      emoji: "🛒",
      type: "Customer Service"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey has been diverse, combining technical research with customer service experience 
            to develop a well-rounded skill set.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card p-6 group"
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-3xl">{experience.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-neon-cyan transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary-500 dark:text-neon-cyan font-medium">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {experience.period}
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-secondary-100 dark:bg-dark-700 text-secondary-700 dark:text-neon-cyan rounded-full">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I'm actively seeking opportunities to apply my technical skills and passion for innovation 
              in a professional software development role. I'm particularly interested in full-stack development, 
              mobile app development, and emerging technologies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-6 bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 