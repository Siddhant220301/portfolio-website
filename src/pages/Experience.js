import React, { useState } from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../components/CardSwap';
import GlitchText from '../components/GlitchText';
import DecryptedText from '../components/DecryptedText';

const experienceData = [
  { title: "Digital Marketing Intern", company: "Shiva Enterprises", date: "Apr 2025 - Jul 2025", achievements: ["Developed and executed multichannel digital marketing campaigns to increase brand visibility and drive targeted traffic.", "Created engaging posts using Canva and Photoshop."]},
  { title: "Data Analyst Intern", company: "BitAce Technologies", date: "Mar 2024 - Jun 2024", achievements: ["Conducted initial data entry and quality assurance tasks, identifying and correcting errors to maintain data integrity.", "Transitioned to web scraping and email marketing, managing a dataset of 8 million potential clients.", "Analyzed competitors' products and market positioning to inform strategic business decisions.", "Advanced to pure data analysis, leveraging tools to extract actionable insights."]},
  { title: "Data Analyst Intern", company: "Agrigravity Technology", date: "Jun 2024 - Mar 2025", achievements: ["Conducted commodity research and identified trends to support market analysis.", "Built dashboards and streamlined lead generation processes.", "Conducted competitor research to identify market opportunities and threats.", "Progressed to advanced data analysis to drive strategy.", "Assisted in recruitment and conducted interviews for data analysis roles.", "Developed leadership skills through employee training and development.", "Started working as a Product Manager, using Jira to coordinate tasks and test the product."]}
];

const listVariants = {
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -20 },
};

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experienceData[activeIndex];

  return (
    <motion.div
      className="experience-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="details-column">
        <GlitchText text="Experience" />
        {activeExperience && (
          <motion.div 
            key={activeIndex} 
            className="experience-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DecryptedText text={activeExperience.title} sequential parentClassName="experience-title" />
            <p className="company">{activeExperience.company}</p>
            <p className="date">{activeExperience.date}</p>
            <motion.ul variants={listVariants} initial="hidden" animate="visible">
              {activeExperience.achievements.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>{item}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
      <div className="cards-column">
        <CardSwap 
          onSwap={setActiveIndex} 
          onCardClick={setActiveIndex}
          activeIndex={activeIndex}
          width={600}
          height={330}
        >
          {experienceData.map((exp, index) => (
            <Card key={index}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
            </Card>
          ))}
        </CardSwap>
      </div>
    </motion.div>
  );
}

export default Experience;