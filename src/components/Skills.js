import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C#', 'Python', 'SQL', 'Java', 'JavaScript', 'Dart'],
    },
    {
      category: 'Frameworks',
      skills: ['.NET 8/10', '.NET Core', 'EF Core', 'React', 'Vue.js', 'Flutter', 'React Native'],
    },
    {
      category: 'Azure',
      skills: [
        'Azure Functions',
        'Logic Apps',
        'Service Bus',
        'Azure Data Warehouse',
        'Azure DevOps',
        'Dynamics 365',
      ],
    },
    {
      category: 'Data',
      skills: ['DB2 / AS400', 'MSSQL', 'SQLite', 'Apache Airflow', 'SSRS'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="section-padding border-t border-canvas-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="section-label mb-3">03 — Skills</p>
          <h2 className="section-title">Tech stack</h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="grid md:grid-cols-[10rem_1fr] gap-3 md:gap-8 items-start border-b border-canvas-border pb-8 last:border-0 last:pb-0"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-spruce pt-1">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="font-mono text-sm text-ink-muted">
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
