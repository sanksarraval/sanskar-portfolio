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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
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

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="panel p-6 flex flex-col"
            >
              <p className="font-mono text-xs text-ink-faint mb-3">{project.category}</p>
              <h3 className="font-display text-xl font-medium text-ink mb-2">
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs link-accent inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View code
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
