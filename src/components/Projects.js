import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'BookStore WebApp',
      description:
        'Online bookstore management system with role-based access, inventory, auth, and CRUD — built with .NET Core MVC and MSSQL.',
      tech: ['.NET Core MVC', 'C#', 'MSSQL', 'Entity Framework'],
      github: 'https://github.com/sanksarraval/BookStore-WebApp',
      category: 'Web Application',
    },
    {
      id: 2,
      title: 'MusicLoud',
      description:
        'Android music management app with playlists, genre/artist sorting, listening reports, and Material Design UI.',
      tech: ['Java', 'Android', 'SQLite', 'Gradle'],
      github: 'https://github.com/sanksarraval/MusicLoud',
      category: 'Mobile App',
    },
    {
      id: 3,
      title: 'Decentralized P2P Consensus',
      description:
        'Peer-to-peer network simulation for sync and consensus — gossiping, blockchain validation, and resilient messaging.',
      tech: ['Python', 'Networking', 'Blockchain', 'P2P'],
      github: 'https://github.com/sanksarraval/Decentralized-Peer-to-Peer-Consensus-System',
      category: 'Distributed Systems',
    },
    {
      id: 4,
      title: 'Titanic Dataset Analysis',
      description:
        'ML analysis predicting Titanic survival rates with preprocessing, feature engineering, and model evaluation.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      github: 'https://github.com/sanksarraval/Titanic-Dataset-Analysis-with-Python-and-Kaggle',
      category: 'Data Science',
    },
  ];

  return (
    <section id="projects" className="section-padding border-t border-canvas-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="section-label mb-3">02 — Projects</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <a
            href="https://github.com/sanksarraval"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs link-accent"
          >
            github.com/sanksarraval →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-canvas-border border border-canvas-border">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group bg-canvas-raised/90 p-6 md:p-8 flex flex-col hover:bg-canvas-raised transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
            >
              <p className="font-mono text-xs text-ink-faint mb-3">{project.category}</p>
              <h3 className="font-display text-xl md:text-2xl font-medium text-ink mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-spruce group-hover:text-accent inline-flex items-center gap-2 transition-colors">
                View code →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
