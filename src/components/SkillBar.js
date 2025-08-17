import React from 'react';
import { motion } from 'framer-motion';
import './SkillBar.css';

const SkillBar = ({ skill, percentage, onMouseEnter, onMouseLeave }) => {
  const barVariants = {
    initial: { width: 0 },
    animate: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div 
      className="skill-bar-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          variants={barVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;