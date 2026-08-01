import React from 'react';

const SectionHeader = ({ badge, title, subtitle }) => {
  return (
    <div className="section-header-wrapper">
      {badge && <div className="section-badge">{badge}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle-text">
          {subtitle}
        </p>
      )}
      <div className="section-title-divider" />
    </div>
  );
};

export default SectionHeader;
