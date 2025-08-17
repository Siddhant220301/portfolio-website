// src/pages/Certificates.js
import React from 'react';
import './Certificates.css';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { FiCheckCircle } from 'react-icons/fi';

const certificateData = [
  "Advanced Certificate Program in Data Science and AI",
  "Microsoft Azure Databricks for Data Engineering",
  "Business Intelligence Master Certificate",
];

function Certificates() {
  return (
    <div className="certificates-container">
      <GlitchText text="Verified Credentials" />
      <p className="certificates-intro">
        A collection of certifications validating my skills in data science, cloud engineering, and business intelligence.
      </p>
      <motion.div 
        className="certificates-list"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {certificateData.map((cert, index) => (
          <motion.div 
            key={index} 
            className="certificate-item"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <FiCheckCircle className="cert-icon" />
            <span className="cert-text">{cert}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Certificates;