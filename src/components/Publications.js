import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'Transportation Analytic Solution for Predicting Flight Cancellations',
      venue: 'IEEE ICACCS',
      date: 'Aug 2023',
      url: 'https://ieeexplore.ieee.org/document/10229353',
      doi: '10.1109/ICACCS57279.2023.10229353',
    },
    {
      id: 2,
      title: 'Social Network Analysis of Popular YouTube Videos via Vertical Quantitative Mining',
      venue: 'IEEE ICACCS',
      date: 'Nov 2022',
      url: 'https://ieeexplore.ieee.org/document/10068640',
      doi: '10.1109/ICACCS57279.2022.10068640',
    },
  ];

  return (
    <section id="publications" className="section-padding border-t border-canvas-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="section-label mb-3">04 — Publications</p>
          <h2 className="section-title text-2xl md:text-3xl">Research papers</h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-canvas-border border-y border-canvas-border">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="py-6"
            >
              <h3 className="font-display text-base md:text-lg font-medium text-ink leading-snug max-w-3xl">
                {pub.title}
              </h3>
              <p className="font-mono text-xs text-ink-muted mt-2">
                {pub.venue} · {pub.date}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs link-accent"
                >
                  View paper →
                </a>
                <span className="font-mono text-xs text-ink-faint">DOI: {pub.doi}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
