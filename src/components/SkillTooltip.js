import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for Portals
import { motion } from 'framer-motion';
import './SkillTooltip.css';

const SkillTooltip = ({ details, position }) => {
  if (!details) return null;

  // The JSX for the tooltip
  const tooltipContent = (
    <motion.div
      className="skill-tooltip"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{
        top: position.y,
        left: position.x,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      <p>{details}</p>
    </motion.div>
  );

  // Use a Portal to render the tooltip content into the 'tooltip-root' div
  return ReactDOM.createPortal(tooltipContent, document.getElementById('tooltip-root'));
};

export default SkillTooltip;