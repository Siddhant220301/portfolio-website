import React, { useState, useEffect } from 'react';
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';
import SkillBar from '../components/SkillBar';
import GlitchText from '../components/GlitchText';
import DecryptedText from '../components/DecryptedText';
import SkillTooltip from '../components/SkillTooltip';

const technicalSkills = [
  { name: "SQL", percentage: 90, details: "Proficient in writing complex queries for data extraction, manipulation, and analysis across various database systems." },
  { name: "Python", percentage: 80, details: "Using Python with libraries like Pandas and NumPy for data analysis, scripting, and automation tasks." },
  { name: "Excel / Google Sheets", percentage: 85, details: "Advanced proficiency in creating complex spreadsheets, pivot tables, and data visualizations." },
  { name: "Power BI / Metabase", percentage: 88, details: "Skilled in developing interactive dashboards and reports to translate data into actionable business insights." },
  { name: "Jira", percentage: 95, details: "Experienced in using Jira for agile project management, task coordination, and product testing cycles." },
];

const softSkills = [
  { name: "Management Skills", percentage: 95, details: "Adept at project planning, resource allocation, and team coordination to meet strategic objectives." },
  { name: "Creativity", percentage: 90, details: "Applying innovative thinking to solve problems and develop unique marketing and business strategies." },
  { name: "Critical Thinking", percentage: 85, details: "Strong ability to analyze complex situations, evaluate information, and make logical, data-driven decisions." },
  { name: "Leadership", percentage: 92, details: "Proven experience in guiding teams, providing mentorship, and leading employee training initiatives." },
  { name: "Team Management", percentage: 90, details: "Fostering a collaborative environment to enhance team growth, productivity, and project success." },
];

function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlitchText text="About Me" />
      <p>
        As an MBA student with a B.Tech (CSE) background, I aim to blend
        technical expertise with business acumen to drive innovation, streamline
        operations, and improve user experiences. My foundation in
        programming and analytical thinking, combined with my MBA education,
        positions me to excel in strategic, data-driven leadership roles.
      </p>

      <div className="skills-grid">
        <div className="skills-column">
          <DecryptedText text="Technical Skills" animateOn="view" sequential parentClassName="section-title" />
          {technicalSkills.map((skill) => (
            <SkillBar 
              key={skill.name} 
              skill={skill.name} 
              percentage={skill.percentage}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            />
          ))}
        </div>
        <div className="skills-column">
          <DecryptedText text="Soft Skills" animateOn="view" sequential parentClassName="section-title" />
          {softSkills.map((skill) => (
            <SkillBar 
              key={skill.name} 
              skill={skill.name} 
              percentage={skill.percentage}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {hoveredSkill && (
          <SkillTooltip 
            details={hoveredSkill.details} 
            position={tooltipPosition}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default About;