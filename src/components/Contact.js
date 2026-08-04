import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/sanksarraval',
      detail: 'github.com/sanksarraval',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sanskar-raval/',
      detail: 'linkedin.com/in/sanskar-raval',
    },
  ];

  return (
    <section id="contact" className="section-padding border-t border-canvas-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="section-label mb-3">05 — Contact</p>
          <h2 className="section-title mb-4">Get in touch</h2>
          <p className="text-ink-muted leading-relaxed mb-8">
            Open to full-stack roles and interesting collaborations. The fastest way to reach me is email.
          </p>

          <a
            href="mailto:sanskarcanada123@gmail.com"
            className="font-display text-xl sm:text-2xl md:text-3xl text-accent hover:text-accent-dim transition-colors break-all"
          >
            sanskarcanada123@gmail.com
          </a>

          <div className="mt-10 space-y-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-4 py-3 border-b border-canvas-border group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-ink-faint group-hover:text-accent transition-colors">
                  {link.label}
                </span>
                <span className="font-mono text-sm text-ink-muted group-hover:text-ink transition-colors">
                  {link.detail} →
                </span>
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-ink-faint mt-10">
            Currently available · Winnipeg, CA
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
