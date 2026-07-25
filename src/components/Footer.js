import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-canvas-border">
      <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {currentYear} Sanskar Raval
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sanksarraval"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanskar-raval/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sanskarcanada123@gmail.com"
            className="font-mono text-xs text-ink-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
