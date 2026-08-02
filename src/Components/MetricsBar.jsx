import React, { useState, useEffect } from 'react';
import { Database, LayoutDashboard, Target, Zap, Sliders, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const MODES = [
  { id: 'raw', name: 'Raw Ingestion', multiplier: 1, label: 'Standard Pipeline Metrics' },
  { id: 'cleaned', name: 'ETL Cleaned', multiplier: 1.25, label: 'Optimized Data Operations' },
  { id: 'predictive', name: 'Predictive Mode', multiplier: 1.5, label: 'Advanced Modeling Scale' }
];

const MetricsBar = () => {
  const [activeMode, setActiveMode] = useState('cleaned');
  const [counts, setCounts] = useState({ rows: 0, dashboards: 0, accuracy: 0 });

  const currentMode = MODES.find((m) => m.id === activeMode) || MODES[1];

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const targetRows = 10 * currentMode.multiplier;
    const targetDashboards = Math.round(15 * currentMode.multiplier);
    const targetAccuracy = 99;

    const animateCounters = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        rows: (targetRows * easeProgress).toFixed(1),
        dashboards: Math.floor(targetDashboards * easeProgress),
        accuracy: Math.floor(targetAccuracy * easeProgress)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [activeMode]);

  return (
    <section className="metrics-section">
      <div className="metrics-glass-banner">
        {/* Glow Header Row */}
        <div className="metrics-header-row">
          <div className="metrics-title-group">
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h3 className="metrics-banner-title">Impact & Performance Metrics</h3>
          </div>

          {/* Interactive Mode Filter Easter Egg */}
          <div className="metrics-mode-selector">
            <span className="mode-label">
              <Filter className="w-3.5 h-3.5" /> Pipeline View:
            </span>
            <div className="mode-pill-group">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  className={`mode-pill ${activeMode === mode.id ? 'active' : ''}`}
                  onClick={() => setActiveMode(mode.id)}
                >
                  {mode.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="metrics-cards-grid">
          {/* Card 1 */}
          <motion.div
            className="metric-card"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="metric-icon-box">
              <Database className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="metric-content">
              <div className="metric-number">
                {counts.rows}M<span className="metric-plus">+</span>
              </div>
              <div className="metric-label">Data Rows Processed</div>
              <div className="metric-sub">Structured & Unstructured SQL/Python Data</div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="metric-card"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="metric-icon-box">
              <LayoutDashboard className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="metric-content">
              <div className="metric-number">
                {counts.dashboards}<span className="metric-plus">+</span>
              </div>
              <div className="metric-label">Interactive Dashboards Built</div>
              <div className="metric-sub">Power BI, Tableau & Excel BI Slicers</div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="metric-card"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="metric-icon-box">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="metric-content">
              <div className="metric-number">
                {counts.accuracy}<span className="metric-plus">%</span>
              </div>
              <div className="metric-label">Data Accuracy & Precision</div>
              <div className="metric-sub">Rigorous EDA & Validation Checks</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
