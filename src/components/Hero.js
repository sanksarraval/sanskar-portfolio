import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const [imgFailed, setImgFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUp = (delay) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="home" className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      <motion.div
        {...(reduceMotion
          ? { initial: false, animate: { opacity: 1 } }
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.9, delay: 0.1 },
            })}
        className="absolute inset-0"
        aria-hidden={imgFailed ? undefined : true}
      >
        {!imgFailed ? (
          <img
            src={process.env.PUBLIC_URL + '/images/profile-photo-1.JPEG'}
            alt=""
            className="h-full w-full object-cover object-[50%_20%] md:object-[50%_25%]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="h-full w-full bg-spruce" />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/30 to-transparent md:bg-gradient-to-r md:from-canvas/75 md:via-canvas/25 md:to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      <div className="relative container-custom w-full pt-28 pb-16 md:py-28 z-10">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          <motion.p {...fadeUp(0)} className="font-mono text-xs uppercase tracking-[0.18em] text-spruce">
            Open to full-stack roles · Winnipeg, CA
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold tracking-tight text-ink leading-[0.95]"
          >
            Sanskar Raval
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="font-mono text-sm text-ink-muted">
            Full-Stack Developer · UManitoba CS &apos;25 · 2+ years experience
          </motion.p>

          <motion.p
            {...fadeUp(0.28)}
            className="text-base md:text-lg text-ink-muted leading-relaxed max-w-lg"
          >
            I build accessible, scalable software — from .NET web apps and data pipelines
            to mobile and research tooling. Looking for full-stack roles where clean
            engineering meets real user impact.
          </motion.p>

          <motion.div {...fadeUp(0.38)} className="flex flex-col sm:flex-row gap-3 pt-2">
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
              className="btn-outline bg-canvas/50 backdrop-blur-sm"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
