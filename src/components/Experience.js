import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Manitoba Agricultural Services Corporation',
      period: 'Sep 2025 – Present',
      location: 'Headingley, MB · Hybrid',
      current: true,
      description:
        'Building the Underwriting Modernization Project, replacing a legacy AS/400 calculation system with a modern .NET and Azure solution — data pipelines, calculation logic, and the business rules that automate underwriting.',
      highlights: [
        'Developing a .NET 8/10 calculation engine set to fully replace the AS/400 system.',
        'Integrating multiple data sources through EF Core: DB2 on AS/400, Azure Data Warehouse, and Dynamics 365.',
        'Building event-driven workflows with Azure Functions, Logic Apps, and Service Bus across the Azure stack.',
        'Implementing crop-specific business rules to calculate net yields accurately at scale.',
        'Working directly with product owners and stakeholders to translate policy into requirements.',
      ],
      skills: [
        '.NET 8/10',
        'C#',
        'EF Core',
        'Azure Functions',
        'Logic Apps',
        'Service Bus',
        'DB2 / AS400',
        'Dynamics 365',
      ],
    },
    {
      id: 2,
      title: 'Full Stack Developer (Co-op)',
      company: 'Johnston Group',
      period: 'Jan 2025 – Apr 2025',
      location: 'Winnipeg, MB',
      description:
        'Owned data pipeline development using Python and Apache Airflow, creating robust data workflows that reduced manual processing time by 60% and improved operational efficiency.',
      skills: ['Python', 'Apache Airflow', 'Data Engineering', 'Automation'],
    },
    {
      id: 3,
      title: 'Application Developer (Co-op)',
      company: 'Province of Manitoba',
      period: 'Jan 2024 – Dec 2024',
      location: 'Winnipeg, MB',
      description:
        'Created powerful visualizations by implementing SSRS reports and dashboards, providing actionable insights to department leadership.',
      skills: ['SSRS', 'Dashboards', 'C#', '.NET'],
    },
    {
      id: 4,
      title: 'Web Developer (Co-op)',
      company: 'Province of Manitoba',
      period: 'Sep 2023 – Dec 2023',
      location: 'Winnipeg, MB',
      description:
        'Built integrated multi-platform tools by creating accessible web applications using .NET frameworks, serving thousands of users and improving service delivery.',
      skills: ['.NET', 'Web Development', 'Accessibility'],
    },
    {
      id: 5,
      title: 'Research Assistant',
      company: 'University of Manitoba',
      period: 'May 2022 – Sep 2022',
      location: 'Winnipeg, MB',
      description:
        'Conducted data analysis and algorithm optimization research. Worked on improving computational efficiency and developing innovative solutions for complex problems.',
      skills: ['Data Analysis', 'Algorithm Optimization', 'Research'],
    },
    {
      id: 6,
      title: 'Customer Service Representative',
      company: 'Walmart',
      period: '2020 – 2024',
      location: 'Winnipeg, MB',
      description:
        'Provided exceptional customer service and support. Developed strong communication skills and learned to handle diverse customer needs efficiently.',
      skills: ['Customer Service', 'Communication', 'Problem Resolution'],
    },
  ];

  return (
    <section id="experience" className="section-padding border-t border-canvas-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="section-label mb-3">01 — Experience</p>
          <h2 className="section-title">Work history</h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-canvas-border border-y border-canvas-border">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="grid md:grid-cols-[11rem_1fr] gap-4 md:gap-8 py-8"
            >
              <div className="font-mono text-xs text-ink-faint pt-1">
                <p className={experience.current ? 'text-accent font-medium' : undefined}>
                  {experience.period}
                </p>
                <p className="mt-1 text-ink-muted">{experience.location}</p>
              </div>

              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink">
                  {experience.title}
                </h3>
                <p className="font-mono text-sm text-spruce mt-1">{experience.company}</p>
                <p className="text-ink-muted mt-3 leading-relaxed max-w-2xl">
                  {experience.description}
                </p>
                {experience.highlights && (
                  <ul className="mt-4 space-y-2 max-w-2xl">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                        <span className="text-accent select-none" aria-hidden="true">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
