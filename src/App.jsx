import React, { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import CursorGlow from './Components/CursorGlow';
import './Components/Portfolio.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          setIsMobileMenuOpen(false); // Close mobile menu on click
        }
      });
    });
  }, []);

  return (
    <>
      <CursorGlow />
      <header className="header">
        <div className="portfolio-container header-nav">
          <a href="/assets/Resume/GOWTHAMC_CV.pdf" target="_blank" rel="noopener noreferrer" className="logo">
            Gowtham <FileText size={20} />
          </a>
          
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Work</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Navigation">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#projects" className="mobile-nav-link">Work</a>
            <a href="#skills" className="mobile-nav-link">Skills</a>
            <a href="#education" className="mobile-nav-link">Education</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="portfolio-container" style={{ paddingTop: '70px' }}>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <p>© {new Date().getFullYear()} Gowtham Chinnan. Crafted with Precision & Code.</p>
      </footer>
    </>
  );
}

export default App;
