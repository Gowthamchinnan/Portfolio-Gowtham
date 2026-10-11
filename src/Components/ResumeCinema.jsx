import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import './ResumeCinema.css';

const resumes = [
  { label: 'Data Analyst Resume', url: '/assets/Resume/Gowtham_data.pdf', description: 'Analytics, dashboards, SQL and Python' },
  { label: 'General Resume', url: '/assets/Resume/GOWTHAMC_CV.pdf', description: 'Complete professional profile' }
];

export default function ResumeCinema() {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(false);
  const dialogRef = useRef(null);
  const resume = resumes[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    // Native modal dialogs make the rest of the page inert and contain focus.
    let previousOverflow;
    let previousFocus;
    const restore = () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
    const open = () => {
      if (dialog.open) return;
      previousFocus = document.activeElement;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    };
    const containFocus = event => {
      if (event.key !== 'Tab') return;
      const controls = [...dialog.querySelectorAll('button:not(:disabled), a[href], iframe')];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    dialog.addEventListener('keydown', containFocus);
    dialog.addEventListener('close', restore);
    window.addEventListener('gowtham:open-resume', open);
    return () => {
      if (dialog.open) { dialog.close(); restore(); }
      dialog.removeEventListener('close', restore);
      dialog.removeEventListener('keydown', containFocus);
      window.removeEventListener('gowtham:open-resume', open);
    };
  }, []);

  const openViewer = () => window.dispatchEvent(new Event('gowtham:open-resume'));
  const chooseResume = index => { setActive(index); setPreview(false); };

  return <>
    <section className="resume-cinema-section" id="resume" aria-labelledby="resume-cinema-heading">
      <div className="resume-cinema-copy">
        <span className="resume-cinema-eyebrow">THE STORY SO FAR · SPECIAL FEATURE</span>
        <h2 id="resume-cinema-heading">Behind the <em>Insights.</em></h2>
        <p>From raw information to meaningful decisions. Explore my professional journey, technical expertise and credentials.</p>
        <div className="resume-cinema-actions">
          <button type="button" onClick={openViewer} className="resume-cinema-primary" aria-haspopup="dialog"><FileText size={18}/> View resume</button>
          <a className="resume-cinema-secondary" href={resumes[0].url} download><Download size={17}/> Download PDF</a>
        </div>
      </div>
      <div className="resume-cinema-art" aria-hidden="true"><span>G</span><small>THE DATA SERIES</small><strong>THE STORY<br/>SO FAR</strong><span className="resume-cinema-line"/></div>
    </section>
    <dialog ref={dialogRef} className="resume-cinema-dialog" aria-labelledby="resume-viewer-title" aria-describedby="resume-viewer-help" onClose={() => setPreview(false)}>
      <div className="resume-cinema-window">
        <header className="resume-cinema-toolbar">
          <div><h2 id="resume-viewer-title">Resume Collection</h2><span>Gowtham C · The Data Series</span></div>
          <button type="button" className="resume-cinema-close" onClick={() => dialogRef.current.close()} aria-label="Close resume viewer" autoFocus><X size={22}/></button>
        </header>
        <div className="resume-cinema-tabs" role="group" aria-label="Choose resume">
          {resumes.map((item, index) => <button type="button" key={item.url} aria-pressed={active === index} onClick={() => chooseResume(index)}>{item.label}</button>)}
        </div>
        <p className="resume-cinema-details" aria-live="polite">{resume.description}</p>
        <div className="resume-cinema-preview">
          {preview ? <iframe key={resume.url} title={resume.label} src={resume.url + '#view=FitH'} className="resume-cinema-frame"/> : <div className="resume-cinema-cover">
            <FileText size={44} aria-hidden="true"/>
            <h3>{resume.label}</h3>
            <p>Read the original document, right here.</p>
            <button type="button" className="resume-cinema-primary" onClick={() => setPreview(true)}>Load PDF preview</button>
          </div>}
        </div>
        <p id="resume-viewer-help" className="resume-cinema-help">Preview unavailable? Open the PDF in a new tab or download it. Press Escape outside the PDF to close.</p>
        <footer className="resume-cinema-footer"><a href={resume.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16}/> Open PDF in new tab</a><a href={resume.url} download><Download size={16}/> Download resume</a></footer>
      </div>
    </dialog>
  </>;
}
