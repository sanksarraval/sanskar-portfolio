import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C#', 'Java', 'JavaScript', 'Dart', 'SQL', 'Python'],
    },
    {
      category: 'Frameworks',
      skills: ['.NET Core', 'React', 'Vue.js', 'Flutter', 'React Native'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'MSSQL', 'SQLite', 'VS Code', 'Apache Airflow'],
    },
  ];

  return (
    <section id="skills" className="section-padding border-t border-canvas-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="section-label mb-3">03 — Skills</p>
          <h2 className="section-title">Tech stack</h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="grid md:grid-cols-[10rem_1fr] gap-3 md:gap-8 items-start"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint pt-1">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
