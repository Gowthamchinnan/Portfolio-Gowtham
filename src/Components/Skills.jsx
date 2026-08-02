import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { 
  Database, 
  Terminal, 
  FileSpreadsheet, 
  BarChart3, 
  PieChart, 
  Workflow, 
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  Table
} from 'lucide-react';

const skillCategories = [
  {
    id: 'querying-scripting',
    title: 'Data Querying & Scripting',
    subtitle: 'Extracting, querying & manipulating complex relational datasets',
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    badgeText: 'Core Engine',
    color: '#00f2fe',
    skills: [
      { name: 'SQL', level: 'Advanced', desc: 'Complex Joins, Window Functions, CTEs, Aggregations' },
      { name: 'PostgreSQL', level: 'Proficient', desc: 'Subqueries, Indexing & Query Optimization' },
      { name: 'Python', level: 'Advanced', desc: 'Pandas DataFrames, NumPy Vectorization' },
      { name: 'Data Wrangling', level: 'Expert', desc: 'Cleaning nulls, regex transformations, formatting' }
    ]
  },
  {
    id: 'visualization-bi',
    title: 'Visualization & BI',
    subtitle: 'Creating interactive executive dashboards & visual stories',
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    badgeText: 'Business Impact',
    color: '#38ef7d',
    skills: [
      { name: 'Power BI', level: 'Advanced', desc: 'DAX formulas, Data Modeling, Slicers, RLS' },
      { name: 'Tableau', level: 'Proficient', desc: 'Interactive Workbooks, Calculated Fields' },
      { name: 'Advanced Excel', level: 'Expert', desc: 'XLOOKUP, Pivot Tables, Dynamic Charts, VBA' },
      { name: 'Data Storytelling', level: 'Advanced', desc: 'Executive KPIs, Trend Analysis & Drill-downs' }
    ]
  },
  {
    id: 'workflow-methods',
    title: 'Workflow & Methods',
    subtitle: 'Statistical methodologies, data modeling & automated ETL',
    icon: <Workflow className="w-6 h-6 text-cyan-400" />,
    badgeText: 'Methodology',
    color: '#3b82f6',
    skills: [
      { name: 'Exploratory Data Analysis (EDA)', level: 'Expert', desc: 'Outlier detection, correlation matrix, distributions' },
      { name: 'ETL Pipelines', level: 'Proficient', desc: 'Data extraction, transformation & automated loading' },
      { name: 'A/B Testing', level: 'Proficient', desc: 'Hypothesis testing, p-values & statistical significance' },
      { name: 'Statistical Modeling', level: 'Advanced', desc: 'Regression analysis, hypothesis validation, forecasts' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section animate-in" style={{ animationDelay: '0.2s' }}>
      <div className="skills-bento-wrapper">
        <SectionHeader 
          badge="🛠️ Technical Stack" 
          title="Core Skills & Toolstack" 
          subtitle="A comprehensive toolkit engineered for end-to-end data analysis, pipeline design, and business intelligence." 
        />

        {/* 3-Card Bento Grid */}
        <div className="bento-skills-grid">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              className="bento-skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Top Card Banner */}
              <div className="bento-card-header">
                <div className="bento-icon-badge">
                  {cat.icon}
                </div>
                <div>
                  <span className="bento-category-tag">{cat.badgeText}</span>
                  <h3 className="bento-card-title">{cat.title}</h3>
                </div>
              </div>

              <p className="bento-card-subtitle">{cat.subtitle}</p>

              {/* Skills List Badges */}
              <div className="bento-skill-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill-item">
                    <div className="skill-pill-top">
                      <span className="skill-pill-name">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="skill-pill-level">{skill.level}</span>
                    </div>
                    <p className="skill-pill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

