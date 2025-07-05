import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Transportation Analytic Solution for Predicting Flight Cancellations",
      institution: "University of Manitoba",
      date: "August 2023",
      url: "https://ieeexplore.ieee.org/document/10229353",
      description: "Built predictive models using regression analysis to determine the likelihood of flight cancellations based on weather data, including precipitation and wind speed.",
      doi: "10.1109/ICACCS57279.2023.10229353",
      category: "Transportation Analytics"
    },
    {
      id: 2,
      title: "Social Network Analysis of Popular YouTube Videos via Vertical Quantitative Mining",
      institution: "University of Manitoba",
      date: "November 2022",
      url: "https://ieeexplore.ieee.org/document/10068640",
      description: "Enhanced algorithms for social network analysis, providing insights into patterns behind YouTube video popularity using quantitative mining techniques.",
      doi: "10.1109/ICACCS57279.2022.10068640",
      category: "Social Network Analysis"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="publications" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Research <span className="text-gradient">Publications</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My research contributions in transportation analytics and social network analysis, 
            published in IEEE conferences and journals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card p-8 group"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Publication Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-neon-cyan transition-colors duration-300 mb-2">
                        {publication.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          {publication.institution}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {publication.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {publication.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <motion.a
                          href={publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 text-primary-500 dark:text-neon-cyan hover:text-primary-600 dark:hover:text-neon-cyan font-medium transition-colors duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          <span>View Paper</span>
                        </motion.a>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          DOI: {publication.doi}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="lg:col-span-1 flex lg:justify-end">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-neon-cyan h-fit">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    {publication.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              My research interests span transportation analytics, social network analysis, and machine learning applications. 
              I focus on developing practical solutions that leverage data science to solve real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Machine Learning", "Data Analytics", "Transportation", "Social Networks", "Predictive Modeling", "Quantitative Analysis"].map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 