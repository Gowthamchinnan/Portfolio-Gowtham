import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BarChart3, BriefcaseBusiness, Code2, X, ArrowUpRight } from 'lucide-react';
import './ViewerProfiles.css';

const KEY = 'gowtham-data-series-viewer';
const viewers = [
  { id: 'recruiter', name: 'Recruiter', label: 'See my story', icon: BriefcaseBusiness, destination: 'home', description: 'Introduction, credentials & resume' },
  { id: 'analyst', name: 'Data Analyst', label: 'Explore insights', icon: BarChart3, destination: 'projects', description: 'Power BI, Tableau & data projects' },
  { id: 'developer', name: 'Developer', label: 'View my stack', icon: Code2, destination: 'skills', description: 'Tools, engineering & cloud work' },
];

export default function ViewerProfiles() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('gowtham:choose-viewer', handler);
    return () => window.removeEventListener('gowtham:choose-viewer', handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  const choose = (viewer) => {
    try { sessionStorage.setItem(KEY, viewer.id); } catch { /* storage optional */ }
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(viewer.destination)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }));
  };

  return (
    <>
      <button className="viewer-switch" type="button" onClick={() => setOpen(true)} aria-label="Choose portfolio viewing mode">
        <BarChart3 size={17} /> Viewing mode
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="viewer-overlay" role="dialog" aria-modal="true" aria-labelledby="viewer-title"
            initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.25 }}>
            <button className="viewer-close" onClick={() => setOpen(false)} aria-label="Close viewer selection" type="button"><X size={20}/></button>
            <div className="viewer-heading"><span>GOWTHAM · THE DATA SERIES</span><h2 id="viewer-title">Who's exploring?</h2><p>Choose how you want to experience the portfolio.</p></div>
            <div className="viewer-grid">
              {viewers.map((viewer, i) => {
                const Icon = viewer.icon;
                return (
                  <motion.button className="viewer-card" type="button" key={viewer.id} onClick={() => choose(viewer)}
                    initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : i * 0.08 }}>
                    <span className="viewer-card-art"><Icon size={48} strokeWidth={1.25}/></span>
                    <strong>{viewer.name}</strong>
                    <small>{viewer.description}</small>
                    <span className="viewer-card-action">{viewer.label} <ArrowUpRight size={15}/></span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
