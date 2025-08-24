import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa'; // Example icons
import './Education.css';

const educationData = [
  {
    year: '2015 - 2016',
    degree: 'Secondary School',
    institution: 'Kendriya Vidyalaya No. 5, Jaipur',
    icon: <FaSchool />,
    color: '#3498db' // Blue
  },
  {
    year: '2017 - 2018',
    degree: 'Senior Secondary School',
    institution: 'Kendriya Vidyalaya No. 5, Jaipur',
    icon: <FaSchool />,
    color: '#9b59b6' // Purple
  },
  {
    year: '2019 - 2023',
    degree: 'Bachelor of Technology',
    institution: 'Lovely Professional University',
    icon: <FaGraduationCap />,
    color: '#2ecc71' // Green
  },
  {
    year: '2024 - 2026',
    degree: 'MBA - IT & Marketing',
    institution: 'IPS BUSINESS SCHOOL, Jaipur',
    icon: <FaUniversity />,
    color: '#e74c3c' // Red
  },
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="education-container-horizontal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="education-title-horizontal">Educational Trajectory</h1>
      <div className="timeline-wrapper">
        <motion.div 
          className="timeline-horizontal"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item-horizontal"
              variants={itemVariants}
            >
              <div className="timeline-content-horizontal">
                <span className="timeline-year-horizontal" style={{ color: item.color }}>{item.year}</span>
                <h3 className="timeline-degree-horizontal">{item.degree}</h3>
                <p className="timeline-institution-horizontal">{item.institution}</p>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle" style={{ borderColor: item.color, color: item.color }}>
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;