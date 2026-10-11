import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BarChart3, SkipForward } from 'lucide-react';
import './DataSeriesIntro.css';

const STORAGE_KEY = 'gowtham-data-series-intro-seen';

export default function DataSeriesIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem(STORAGE_KEY); } catch { return true; }
  });
  const close = () => {
    try { sessionStorage.setItem(STORAGE_KEY, 'true'); } catch { /* session storage unavailable */ }
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Enter') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="data-series-intro"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio cinematic introduction"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <div className="data-series-grain" aria-hidden="true" />
          <button className="data-series-skip" onClick={close} type="button">
            Skip intro <SkipForward size={16} />
          </button>
          <motion.div className="data-series-content"
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.25 }}
          >
            <div className="data-series-eyebrow"><BarChart3 size={18} /> AN ANALYST ORIGINAL</div>
            <h1 className="data-series-title">GOWTHAM<span>THE DATA SERIES</span></h1>
            <p className="data-series-description">
              Every dataset tells a story. Explore the dashboards, discoveries and projects behind mine.
            </p>
            <button className="data-series-enter" onClick={close} type="button">
              Explore the series <ArrowRight size={20} />
            </button>
            <p className="data-series-hint">Press Enter to explore or Esc to skip</p>
          </motion.div>
          <div className="data-series-edge" aria-hidden="true" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
