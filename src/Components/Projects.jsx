import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const EyeIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CloseIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ZoomInIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const projects = [
  {
    title: 'UPI Transaction Dashboard',
    desc: 'Built an interactive Excel dashboard to visualize UPI transaction data using Pivot Tables, Charts, Slicers, and KPIs for tracking transaction trends and performance.',
    tags: [
      'Microsoft Excel',
      'Pivot Tables',
      'Pivot Charts',
      'Slicers',
      'Data Visualization',
      'Dashboard'
    ],
    image: '/assets/images/dashboard.png',
    links: {
      github: 'https://github.com/Gowthamchinnan/UPI-Transaction-Dashboard'
    }
  },
  {
    title: 'Tamper-Resistant Cryptographic Authentication System',
    desc: 'Developing a high-security authentication system using ESP32 with hardware-level protection to prevent physical and digital tampering.',
    tags: ['ESP32', 'Embedded Systems', 'IoT Security', 'Cryptography'],
    image: '/assets/images/esp32_project.png',
    links: {},
    status: 'Ongoing'
  },
  {
    title: 'Cloud Cost Monitoring and Optimization Tool',
    desc: 'A Flask and AWS-Based Cost Monitoring System. Developed using Python (Boto3) to track real-time resource usage, identify idle instances, and utilize AWS APIs for accurate spending forecasts.',
    tags: ['Python', 'Flask', 'AWS', 'Boto3'],
    image: '/assets/images/cloud_cost.png',
    links: { github: 'https://github.com/Gowthamchinnan/Cloud-Cost-Optimization-Tool' }
  },
  {
    title: 'Conventional Planner Festive Frolics',
    desc: 'A web-based platform designed for hassle-free event management, utilizing SQL Server for robust data management. It provides a centralized booking system for Marriage Halls, Decorations, Catering, Photography, and more.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL Server', 'Web Platform'],
    image: '/assets/images/event_planner.png',
    links: { github: 'https://github.com/Gowthamchinnan/Conventional-Planner-Festive-Froclis.git' }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          setSelectedProject(null);
        }
      }
    };
    if (selectedProject || zoomedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, zoomedImage]);

  return (
    <section id="projects" className="section animate-in" style={{ animationDelay: '0.4s' }}>
      <div className="projects-container-wide">
        <SectionHeader 
          title="Projects" 
          subtitle="Explore recent data analysis dashboards, cloud tools, and technical projects" 
        />
        
        {/* Single Row 4-Column Grid */}
        <div className="projects-grid-single-row">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card-interactive"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', gap: '0.5rem' }}>
                  <h3 className="project-title" style={{ fontSize: '1.05rem', marginBottom: 0, lineHeight: 1.3 }}>{project.title}</h3>
                  {project.status === 'Ongoing' && (
                    <span className="tag" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', fontSize: '0.7rem', padding: '0.15rem 0.5rem', flexShrink: 0 }}>
                      Ongoing
                    </span>
                  )}
                </div>
                <div className="tech-tags" style={{ marginBottom: '0.75rem' }}>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', opacity: 0.8 }}>+{project.tags.length - 3}</span>
                  )}
                </div>
                <p className="project-desc" style={{ fontSize: '0.85rem', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
                  {project.desc}
                </p>
                <div className="project-links" style={{ marginTop: 'auto' }}>
                  <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem', justifyContent: 'center' }}>
                    <EyeIcon size={16} /> View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal / Big View */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <CloseIcon size={20} />
            </button>

            <div className="modal-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
                onClick={() => setZoomedImage(selectedProject.image)}
                title="Click to expand full screen"
              />
            </div>

            <div className="modal-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <h3 className="modal-title" style={{ marginBottom: 0 }}>{selectedProject.title}</h3>
                {selectedProject.status === 'Ongoing' && (
                  <span className="tag" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '0.25rem 0.75rem' }}>
                    Ongoing
                  </span>
                )}
              </div>

              <div className="tech-tags" style={{ marginBottom: '1.25rem' }}>
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>{tag}</span>
                ))}
              </div>

              <p className="modal-desc">{selectedProject.desc}</p>

              <div className="project-links" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                {selectedProject.links.github && (
                  <a href={selectedProject.links.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={20} /> View on GitHub
                  </a>
                )}
                <button className="btn btn-outline" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Fullscreen Image Zoom */}
      {zoomedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 8, 18, 0.96)',
            backdropFilter: 'blur(16px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            cursor: 'zoom-out'
          }}
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="modal-close-btn"
            style={{ top: '1.5rem', right: '1.5rem', position: 'fixed' }}
            onClick={() => setZoomedImage(null)}
            aria-label="Close full view"
          >
            <CloseIcon size={24} />
          </button>
          <img
            src={zoomedImage}
            alt="Full size view"
            style={{
              maxWidth: '95vw',
              maxHeight: '92vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
