import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [imgFailed, setImgFailed] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Open to full-stack roles · Winnipeg, CA
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.1]">
              Sanskar Raval
            </h1>

            <p className="font-mono text-sm text-ink-muted">
              Full-Stack Developer · UManitoba CS &apos;25 · 2+ years experience
            </p>

            <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
              I build accessible, scalable software — from .NET web apps and data pipelines
              to mobile and research tooling. Looking for full-stack roles where clean
              engineering meets real user impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('#experience')}
                className="btn-primary"
              >
                View Experience
              </button>
              <a
                href="https://www.overleaf.com/read/dqdkwhhdvzrd#5d31a2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border border-accent rounded-panel overflow-hidden bg-canvas-raised">
              {!imgFailed ? (
                <img
                  src={process.env.PUBLIC_URL + '/images/profile-photo.jpg'}
                  alt="Sanskar Raval"
                  className="w-full h-full object-cover"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-4xl text-accent tracking-widest">
                  SR
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
