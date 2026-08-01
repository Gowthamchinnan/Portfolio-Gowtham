import React, { useEffect, useState } from 'react';
import { Folder, Menu, X } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for floating header & active link detection
  useEffect(() => {
    const handleScroll = () => {
      // Toggle floating pill navbar state
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine current visible section
      const sections = ['home', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          setActiveSection(targetId);
          setIsMobileMenuOpen(false);
        }
      });
    });
  }, []);

  return (
    <>
      <CursorGlow />
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="portfolio-container header-nav">
          <a href="/assets/Resume/GOWTHAMC_CV.pdf" target="_blank" rel="noopener noreferrer" className="logo">
            Gowtham <Folder size={20} />
          </a>
          
          <nav className="nav-links">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Work</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Navigation">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <a href="#home" className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#projects" className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Work</a>
            <a href="#skills" className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#education" className={`mobile-nav-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
            <a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>
        </div>
      </header>

      <main className="portfolio-container" style={{ paddingTop: '80px' }}>
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
