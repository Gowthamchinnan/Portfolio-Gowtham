import React from 'react';
import SectionHeader from './SectionHeader';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications',
    institute: 'Rathinam Technical Campus Coimbatore',
    year: '2024 - 2026',
    status: 'Completed'
  },
  {
    degree: 'Bachelor of Computer Applications',
    institute: 'The American College Madurai',
    year: '2021 - 2024',
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section id="education" className="section animate-in" style={{ animationDelay: '0.5s' }}>
      <div style={{ width: '100%' }}>
        <SectionHeader 
          badge="🎓 Academics" 
          title="Education Journey" 
          subtitle="My academic foundation in computer applications and software engineering" 
        />
        <div className="timeline-container">
          {education.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <h3 className="timeline-title">{item.degree}</h3>
                      {item.status === 'Completed' && (
                        <span className="tag" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="timeline-subtitle">{item.institute}</p>
                  </div>
                  <span className="timeline-date">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
