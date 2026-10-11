import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import './ResumeCinema.css';

const resumes = [
  { label: 'Data Analyst Resume', url: '/assets/Resume/Gowtham_data.pdf', description: 'Analytics, dashboards, SQL and Python' },
  { label: 'General Resume', url: '/assets/Resume/GOWTHAMC_CV.pdf', description: 'Complete professional profile' }
];

export default function ResumeCinema() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = e => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKeyDown); };
  }, [open]);
  return <>
    <section className="resume-cinema-section" id="resume" aria-labelledby="resume-cinema-heading">
      <div className="resume-cinema-copy">
        <span className="resume-cinema-eyebrow">THE STORY SO FAR · SPECIAL FEATURE</span>
        <h2 id="resume-cinema-heading">Behind the <em>Insights.</em></h2>
        <p>From raw information to meaningful decisions. Explore my professional journey, technical expertise and credentials.</p>
        <div className="resume-cinema-actions">
          <button type="button" onClick={() => setOpen(true)} className="resume-cinema-primary"><FileText size={18}/> View resume <ExternalLink size={17}/></button>
          <a className="resume-cinema-secondary" href={resumes[0].url} download><Download size={17}/> Download PDF</a>
        </div>
      </div>
      <div className="resume-cinema-art" aria-hidden="true"><span>G</span><small>THE DATA SERIES</small><strong>THE STORY<br/>SO FAR</strong><span className="resume-cinema-line"/></div>
    </section>
    <AnimatePresence>
      {open && <motion.div className="resume-cinema-overlay" role="dialog" aria-modal="true" aria-label="Resume viewer"
        initial={reducedMotion ? false : {opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reducedMotion?0:.2}}>
        <div className="resume-cinema-window">
          <header className="resume-cinema-toolbar">
            <div><strong>Resume Collection</strong><span>Gowtham C · The Data Series</span></div>
            <button type="button" className="resume-cinema-close" onClick={() => setOpen(false)} aria-label="Close resume viewer"><X size={22}/></button>
          </header>
          <div className="resume-cinema-tabs" role="group" aria-label="Choose resume">
            {resumes.map((resume, index) => <button type="button" key={resume.url} aria-pressed={active===index} className={active===index?'selected':''} onClick={()=>setActive(index)}>{resume.label}</button>)}
          </div>
          <p className="resume-cinema-details">{resumes[active].description}</p>
          <iframe key={resumes[active].url} title={resumes[active].label} src={resumes[active].url+'#view=FitH'} className="resume-cinema-frame"/>
          <footer className="resume-cinema-footer"><a href={resumes[active].url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16}/> Open full PDF</a><a href={resumes[active].url} download><Download size={16}/> Download resume</a></footer>
        </div>
      </motion.div>}
    </AnimatePresence>
  </>;
}
