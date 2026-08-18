import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SectionHeader from './SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Eye, 
  X, 
  Target, 
  Wrench, 
  Lightbulb, 
  ArrowUpRight,
  Zap,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Original Past Projects restored with exact names & descriptions
const caseStudies = [
  {
    id: 'upi-dashboard',
    title: 'UPI Transaction Dashboard',
    category: 'Data Analytics & BI',
    image: '/assets/images/dashboard.png',
    desc: 'Built an interactive Excel dashboard to visualize UPI transaction data using Pivot Tables, Charts, Slicers, and KPIs for tracking transaction trends and performance.',
    tags: ['Microsoft Excel', 'Pivot Tables', 'Pivot Charts', 'Slicers', 'Data Visualization', 'Dashboard'],
    star: {
      problem: 'Tracking and analyzing high-volume digital UPI transactions across multi-regional channels to identify peak failure rates and payment trends.',
      tools: ['Microsoft Excel', 'Pivot Tables', 'Pivot Charts', 'Slicers', 'KPI Dashboards'],
      insight: 'Visualized transaction trends using Pivot Charts & Slicers, enabling instant tracking of payment bottlenecks and peak volume windows.',
      result: 'Interactive KPI Tracking & Payment Bottleneck Visibility'
    },
    links: {
      github: 'https://github.com/Gowthamchinnan/UPI-Transaction-Dashboard'
    }
  },
  {
    id: 'hr-dashboard',
    title: 'HR Data Dashboard',
    category: 'Data Analytics & BI',
    image: '/assets/images/hr_dashboard.png',
    desc: 'Designed an interactive Tableau HR analytics dashboard to visualize workforce demographics, monitor attrition rates, and evaluate department performance with calculated fields and dynamic filters.',
    tags: ['Tableau', 'HR Analytics', 'Data Visualization', 'Calculated Fields', 'Interactive Dashboard', 'Workforce Analytics'],
    star: {
      problem: 'HR leadership lacked centralized visibility into employee attrition patterns, department-wise turnover, and key workforce demographics.',
      tools: ['Tableau Desktop', 'Data Modeling', 'Calculated Fields', 'Interactive Filters', 'KPI Scorecards'],
      insight: 'Developed comprehensive visual analytics with dynamic drill-downs and attrition KPI trackers, uncovering core turnover trends across salary and tenure bands.',
      result: 'Data-Driven Workforce Intelligence & Retention Trend Visibility'
    },
    links: {}
  },
  {
    id: 'esp32-auth',
    title: 'Tamper-Resistant Cryptographic Authentication System',
    category: 'IoT & Security',
    image: '/assets/images/esp32_project.png',
    status: 'Ongoing',
    desc: 'Developing a high-security authentication system using ESP32 with hardware-level protection to prevent physical and digital tampering.',
    tags: ['ESP32', 'Embedded Systems', 'IoT Security', 'Cryptography'],
    star: {
      problem: 'Embedded IoT nodes are vulnerable to physical side-channel tampering and unauthorized data injection in remote industrial deployments.',
      tools: ['ESP32', 'Embedded Systems', 'IoT Security', 'Cryptography', 'Hardware Protection'],
      insight: 'Engineered hardware-level cryptographic key store with anti-tamper challenge-response verification for secure real-time sensor telemetries.',
      result: 'Hardware-Level Anti-Tamper Security'
    },
    links: {}
  },
  {
    id: 'cloud-cost',
    title: 'Cloud Cost Monitoring and Optimization Tool',
    category: 'Cloud & Web Platforms',
    image: '/assets/images/cloud_cost.png',
    desc: 'A Flask and AWS-Based Cost Monitoring System. Developed using Python (Boto3) to track real-time resource usage, identify idle instances, and utilize AWS APIs for accurate spending forecasts.',
    tags: ['Python', 'Flask', 'AWS', 'Boto3'],
    star: {
      problem: 'Cloud infrastructure spending was untracked, causing unexpected AWS bill spikes from idle instances and unutilized cloud resources.',
      tools: ['Python', 'Flask', 'AWS Boto3', 'AWS APIs', 'Cloud Analytics'],
      insight: 'Automated real-time EC2/S3 resource tracking using Boto3 SDK, identifying idle instances and predicting monthly cloud cost forecasts.',
      result: 'Real-Time AWS Idle Resource & Cost Optimization'
    },
    links: {
      github: 'https://github.com/Gowthamchinnan/Cloud-Cost-Optimization-Tool'
    }
  },
  {
    id: 'event-planner',
    title: 'Conventional Planner Festive Frolics',
    category: 'Cloud & Web Platforms',
    image: '/assets/images/event_planner.png',
    desc: 'A web-based platform designed for hassle-free event management, utilizing SQL Server for robust data management. It provides a centralized booking system for Marriage Halls, Decorations, Catering, Photography, and more.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL Server', 'Web Platform'],
    star: {
      problem: 'Event booking processes suffered from fragmented vendor data, double-booking conflicts, and manual reservation tracking.',
      tools: ['SQL Server', 'HTML', 'CSS', 'JavaScript', 'Relational DB'],
      insight: 'Built a centralized web booking engine backed by SQL Server relational schemas for Marriage Halls, Catering, and Photography management.',
      result: 'Centralized Event Booking & SQL Data Management'
    },
    links: {
      github: 'https://github.com/Gowthamchinnan/Conventional-Planner-Festive-Froclis.git'
    }
  }
];

const Projects = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [previewImage, setPreviewImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const categories = ['All', 'Data Analytics & BI', 'Cloud & Web Platforms', 'IoT & Security'];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (previewImage) {
          setPreviewImage(null);
          setZoomLevel(1);
        } else if (selectedStudy) {
          setSelectedStudy(null);
        }
      }
    };

    if (selectedStudy || previewImage) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStudy, previewImage]);

  return (
    <section id="projects" className="section animate-in" style={{ animationDelay: '0.3s' }}>
      <div className="projects-bento-container">
        <SectionHeader 
          badge="📊 Projects"
          title="Featured Projects" 
          subtitle="Explore data analytics dashboards, cloud cost tools, IoT security, and web platforms." 
        />

        {/* Filter Pills */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Bento Grid */}
        <div className="bento-projects-grid">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              className="bento-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedStudy(study)}
            >
              {/* Card Image Banner */}
              <div className="project-card-image-box">
                <img src={study.image} alt={study.title} />
                <div className="project-image-overlay" />
                <span className="project-category-badge">{study.category}</span>
                {study.status === 'Ongoing' && (
                  <span className="project-status-badge">Ongoing</span>
                )}
                <button
                  type="button"
                  className="project-image-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewImage({ src: study.image, title: study.title, category: study.category });
                    setZoomLevel(1);
                  }}
                  title="View Full High-Res Dashboard"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> <span>Full Image</span>
                </button>
              </div>

              {/* Card Content & STAR Format Preview */}
              <div className="project-card-body">
                <div className="project-header-row">
                  <h3 className="project-card-title">{study.title}</h3>
                  <button 
                    className="open-icon-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStudy(study);
                    }}
                    title="View Project Details"
                    aria-label="View Project Details"
                  >
                    <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>

                <p className="project-card-desc-text">{study.desc}</p>

                <div className="star-preview-block">
                  <div className="star-item">
                    <Target className="w-4 h-4 star-icon text-cyan-400" />
                    <div>
                      <strong className="star-label">Core Problem:</strong>
                      <p className="star-text">{study.star.problem}</p>
                    </div>
                  </div>

                  <div className="star-item">
                    <Wrench className="w-4 h-4 star-icon text-cyan-400" />
                    <div>
                      <strong className="star-label">Tools Used:</strong>
                      <div className="project-tool-tags">
                        {study.tags.map((t) => (
                          <span key={t} className="tool-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="star-item star-insight">
                    <Lightbulb className="w-4 h-4 star-icon text-emerald-400" />
                    <div>
                      <strong className="star-label text-emerald-400">Key Finding & Impact:</strong>
                      <p className="star-text">{study.star.insight}</p>
                    </div>
                  </div>
                </div>

                <div className="project-card-footer">
                  <div className="impact-pill">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{study.star.result}</span>
                  </div>
                  <button 
                    className="view-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStudy(study);
                    }}
                  >
                    <Eye className="w-4 h-4" /> View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal Deep-Dive Window using React Portal */}
      {typeof document !== 'undefined' && ReactDOM.createPortal(
        <AnimatePresence>
          {selectedStudy && (
            <div 
              key="project-modal-backdrop"
              className="project-modal-backdrop" 
              onClick={() => setSelectedStudy(null)}
            >
              <motion.div
                key="project-modal-card"
                className="project-modal-card"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedStudy(null)}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div 
                  className="modal-top-image"
                  onClick={() => {
                    setPreviewImage({ src: selectedStudy.image, title: selectedStudy.title, category: selectedStudy.category });
                    setZoomLevel(1);
                  }}
                  title="Click to view full high-resolution dashboard"
                >
                  <img src={selectedStudy.image} alt={selectedStudy.title} />
                  <span className="modal-category">{selectedStudy.category}</span>
                  {selectedStudy.status === 'Ongoing' && (
                    <span className="project-status-badge" style={{ top: '20px', right: '70px' }}>Ongoing</span>
                  )}
                  <div className="modal-image-hint">
                    <Maximize2 className="w-3.5 h-3.5" /> Full Image View
                  </div>
                </div>

                <div className="modal-content-body">
                  <h2 className="modal-title">{selectedStudy.title}</h2>
                  <p className="modal-main-desc">{selectedStudy.desc}</p>

                  {/* STAR Structured Grid */}
                  <div className="star-detailed-grid">
                    <div className="star-detail-card">
                      <div className="star-detail-header">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <h4>Business Problem & Objective</h4>
                      </div>
                      <p>{selectedStudy.star.problem}</p>
                    </div>

                    <div className="star-detail-card">
                      <div className="star-detail-header">
                        <Wrench className="w-5 h-5 text-cyan-400" />
                        <h4>Technologies & Data Stack</h4>
                      </div>
                      <div className="project-tool-tags" style={{ marginTop: '0.5rem' }}>
                        {selectedStudy.tags.map((t) => (
                          <span key={t} className="tool-tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="star-detail-card full-width">
                      <div className="star-detail-header">
                        <Lightbulb className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-emerald-400">Key Finding & Outcome</h4>
                      </div>
                      <p>{selectedStudy.star.insight}</p>
                      <div className="impact-highlight-box">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span><strong>Key Result:</strong> {selectedStudy.star.result}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="modal-actions-row">
                    <button
                      type="button"
                      className="btn-glow-primary"
                      onClick={() => {
                        setPreviewImage({ src: selectedStudy.image, title: selectedStudy.title, category: selectedStudy.category });
                        setZoomLevel(1);
                      }}
                    >
                      <Maximize2 className="w-4 h-4" /> View Full Image
                    </button>

                    {selectedStudy.links?.github && (
                      <a
                        href={selectedStudy.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow-primary"
                      >
                        <GithubIcon size={18} /> View on GitHub
                      </a>
                    )}

                    <button
                      className="btn-glass-outline"
                      onClick={() => setSelectedStudy(null)}
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Fullscreen High-Resolution Dashboard Lightbox Viewer Portal */}
      {typeof document !== 'undefined' && ReactDOM.createPortal(
        <AnimatePresence>
          {previewImage && (
            <motion.div 
              key="lightbox-backdrop"
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setPreviewImage(null);
                setZoomLevel(1);
              }}
            >
              <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
                <div className="lightbox-title-wrap">
                  <span className="lightbox-badge">{previewImage.category || 'Dashboard'}</span>
                  <h3>{previewImage.title} — Full Resolution View</h3>
                </div>
                <div className="lightbox-controls">
                  <button
                    type="button"
                    className="lightbox-btn"
                    onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" /> Zoom In
                  </button>
                  <button
                    type="button"
                    className="lightbox-btn"
                    onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" /> Zoom Out
                  </button>
                  <button
                    type="button"
                    className="lightbox-btn"
                    onClick={() => setZoomLevel(1)}
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" /> {Math.round(zoomLevel * 100)}%
                  </button>
                  <a
                    href={previewImage.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lightbox-btn"
                    title="Open Original Image in New Tab"
                  >
                    <ExternalLink className="w-4 h-4" /> Open Original
                  </a>
                  <button
                    type="button"
                    className="lightbox-close-btn"
                    onClick={() => {
                      setPreviewImage(null);
                      setZoomLevel(1);
                    }}
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div 
                className="lightbox-image-container"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={previewImage.src} 
                  alt={previewImage.title} 
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center'
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;


