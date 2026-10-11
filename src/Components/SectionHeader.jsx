import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SectionHeader = ({ badge, title, subtitle }) => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div className="section-header-wrapper" initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: reducedMotion ? 0 : .55 }}>
      {badge && <div className="section-badge">{badge}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle-text">
          {subtitle}
        </p>
      )}
      <div className="section-title-divider" />
    </motion.div>
  );
};

export default SectionHeader;
