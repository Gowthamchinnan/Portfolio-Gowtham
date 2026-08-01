import React from 'react';
import SectionHeader from './SectionHeader';
import { 
  FileSpreadsheet, 
  Database, 
  BarChart3, 
  Code2, 
  TrendingUp, 
  PieChart, 
  LayoutDashboard, 
  Filter, 
  Table, 
  Calculator,
  Presentation
} from 'lucide-react';

const skills = [
  { name: 'Microsoft Excel', icon: <FileSpreadsheet size={20} /> },
  { name: 'SQL', icon: <Database size={20} /> },
  { name: 'Power BI', icon: <BarChart3 size={20} /> },
  { name: 'Tableau', icon: <Presentation size={20} /> },
  { name: 'Python', icon: <Code2 size={20} /> },
  { name: 'Data Analysis', icon: <TrendingUp size={20} /> },
  { name: 'Data Visualization', icon: <PieChart size={20} /> },
  { name: 'Dashboard Development', icon: <LayoutDashboard size={20} /> },
  { name: 'Power Query', icon: <Filter size={20} /> },
  { name: 'Pivot Tables', icon: <Table size={20} /> },
  { name: 'Statistics', icon: <Calculator size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section animate-in" style={{ animationDelay: '0.6s' }}>
      <div style={{ width: '100%' }}>
        <SectionHeader 
          badge="🛠️ Skills & Tools" 
          title="Technical Expertise" 
          subtitle="Core data analysis tools, SQL querying, Business Intelligence platforms, and visual analytics" 
        />
        <div className="skills-container">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-tag">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
