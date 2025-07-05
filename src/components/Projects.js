import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BookStore WebApp",
      description: "A comprehensive online bookstore management system built with .NET Core MVC and MSSQL. Features role-based access control, inventory management, user authentication, and a responsive design. Includes CRUD operations for books, search and filter functionality, and secure payment processing.",
      tech: [".NET Core MVC", "C#", "MSSQL", "Entity Framework", "Bootstrap", "JavaScript"],
      github: "https://github.com/sanksarraval/BookStore-WebApp",
      emoji: "📚",
      category: "Web Application"
    },
    {
      id: 2,
      title: "MusicLoud",
      description: "A comprehensive music management system designed to revolutionize how individuals play, manage, and share their music collections. Features personalized playlists, genre/artist sorting, detailed listening reports, and an intuitive Android interface for seamless music library organization.",
      tech: ["Java", "Android", "Gradle", "SQLite", "XML", "Material Design"],
      github: "https://github.com/sanksarraval/MusicLoud",
      emoji: "🎵",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Decentralized P2P Consensus System",
      description: "A peer-to-peer network simulation for achieving synchronization and consensus, developed for COMP 3010 at University of Manitoba. Features peer gossiping, consensus mechanisms, blockchain validation, and resilient execution with retry logic for message exchanges.",
      tech: ["Python", "Networking", "Blockchain", "Consensus Algorithms", "Peer-to-Peer", "Socket Programming"],
      github: "https://github.com/sanksarraval/Decentralized-Peer-to-Peer-Consensus-System",
      emoji: "🔗",
      category: "Distributed Systems"
    },
    {
      id: 4,
      title: "Titanic Dataset Analysis",
      description: "Comprehensive machine learning analysis of the Titanic dataset using Python and Kaggle. Implements various classification techniques and algorithms to predict survival rates, featuring data preprocessing, feature engineering, and model evaluation.",
      tech: ["Python", "Machine Learning", "Jupyter Notebook", "Pandas", "Scikit-learn", "Data Analysis"],
      github: "https://github.com/sanksarraval/Titanic-Dataset-Analysis-with-Python-and-Kaggle",
      emoji: "📊",
      category: "Data Science"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div variants={cardVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></motion.div>
          <motion.p variants={cardVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            mobile app development, and modern web technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="card p-6 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{project.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary-500 dark:text-neon-cyan font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-neon-cyan rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-dark-700">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-primary-500 dark:text-neon-cyan hover:text-primary-600 dark:hover:text-neon-cyan font-medium transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span>View Code</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sanksarraval"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 