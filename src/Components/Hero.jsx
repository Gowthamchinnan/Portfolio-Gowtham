import React, { useEffect } from 'react';
import { ArrowRight, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import profilePic from '../assets/Portfolioimage.JPG';

const Hero = () => {
  // Mouse tilt animation states
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-12, 12]), { stiffness: 200, damping: 20 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const background = useMotionTemplate`radial-gradient(650px circle at ${dx}px ${dy}px, rgba(0, 242, 254, 0.12), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleCardMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="hero-section relative overflow-hidden group">
      {/* Background Grid Accent */}
      <div className="hero-grid-pattern" />

      {/* Dynamic Mouse Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10"
        style={{ background }}
      />

      <div className="hero-container">
        <div className="hero-flex-layout">
          {/* Left Column - Headline & CTAs */}
          <motion.div
            className="hero-left-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="status-badge">
              <span className="status-dot"></span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for Data Analyst Roles</span>
            </div>

            <h1 className="hero-headline">
              Transforming Complex Data into{' '}
              <span className="gradient-text-cyan">Actionable Business Insights</span>
            </h1>

            <p className="hero-subtext">
              Data Analyst specializing in <strong className="text-white">SQL</strong>, <strong className="text-white">Python</strong>, <strong className="text-white">Advanced BI Dashboards</strong>, and <strong className="text-white">Statistical Modeling</strong>.
            </p>

            <div className="hero-actions-wrapper">
              <a href="#projects" className="btn-glow-primary">
                Explore Case Studies <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/assets/Resume/Gowtham_data.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-outline"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>

            <div className="hero-quick-highlights">
              <div className="highlight-item">
                <CheckCircle2 className="highlight-icon" /> <span>MCA Graduate</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 className="highlight-icon" /> <span>Power BI & Tableau Specialist</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 className="highlight-icon" /> <span>ETL & EDA Pipeline Expert</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Ultra-Clean 3D Tilt Profile Photo Frame */}
          <motion.div
            className="hero-right-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="profile-card-wrapper"
              style={{ rotateX, rotateY }}
            >
              {/* Outer Glowing Aura */}
              <div className="profile-aura" />

              {/* Ultra-Clean Profile Image Box */}
              <div className="profile-image-box">
                <img
                  src={profilePic}
                  alt="Gowtham C - Data Analyst"
                  className="profile-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                
                <div className="profile-overlay-shine" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

