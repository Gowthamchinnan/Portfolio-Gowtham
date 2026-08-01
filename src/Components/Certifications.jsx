import React from 'react';
import SectionHeader from './SectionHeader';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const certs = [
  {
    title: 'Data Analyst with Python',
    issuer: 'Elysium Academy',
    icon: <GraduationCap size={24} />,
    link: '#'
  },
  {
    title: 'C and C++ Programming',
    issuer: 'Certified by SSI Technology',
    icon: <Award size={24} />,
    link: '#'
  },
  {
    title: 'Hardware Security',
    issuer: 'IEEE Certification',
    icon: <BookOpen size={24} />,
    link: '/assets/certificates/Gowtham_C_Certificate.pdf'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section animate-in" style={{ animationDelay: '0.7s', minHeight: 'auto', paddingBottom: '3rem' }}>
      <div style={{ width: '100%' }}>
        <SectionHeader 
          badge="📜 Credentials" 
          title="Certifications & Achievements" 
          subtitle="Verified technical training, professional certifications, and honors" 
        />
        <div className="cert-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon">
                {cert.icon}
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.link && cert.link !== '#' && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-cert-link"
                    style={{ fontSize: '0.85rem', color: 'var(--accent)', marginTop: '0.5rem', display: 'inline-block', fontWeight: '500' }}
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
