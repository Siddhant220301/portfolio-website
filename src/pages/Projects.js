import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import GlitchText from '../components/GlitchText';
import DecryptedText from '../components/DecryptedText';

const projectData = [
  {
    id: 1,
    label: "Personal Project",
    title: "Flash Note",
    description: "A mobile application that centralizes study materials by offering subject-wise notes and mock tests for aptitude-based interview preparation. It features an AI-powered chatbot to assist students with doubts and content navigation and is available on the Google Play Store."
  },
  {
    id: 2,
    label: "Personal Project",
    title: "Power BI Dashboard",
    description: "An intuitive Power BI dashboard designed to give Amazon vendors an at-a-glance view of their business performance by consolidating crucial metrics from daily revenue and top-selling products to inventory levels and ad campaign effectiveness."
  },
  {
    id: 3,
    label: "Marketing Research",
    title: "Barriers to ERP Adoption",
    description: "This research explores why many pharmacy stores in Jaipur are slow to adopt digital management systems. Surveying 100 local stores, we identified prohibitive costs, a lack of understanding of the software's value, and generational resistance to new technology as major barriers."
  },
  {
    id: 4,
    label: "Capstron Project",
    title: "Property Price Prediction",
    description: "Developed a robust and accurate machine learning model for predicting land and property prices. The model leverages historical sales data, location attributes, property features, and market trends to empower real estate stakeholders with valuable insights."
  },
  {
    id: 5,
    label: "Personal Project",
    title: "Dynamic ERP System",
    description: "Currently developing a dynamic ERP system to help startups overcome initial tech challenges by streamlining operations, enhancing client management, and providing scalable solutions tailored to their growth."
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  return (
    <div className="projects-container">
      <GlitchText text="Projects" />
      <div className="projects-layout">
        <div className="project-list">
          {projectData.map((project) => (
            <motion.button
              key={project.id}
              className={`project-title-button ${selectedProject?.id === project.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DecryptedText 
                text={project.title}
                className="revealed"
                encryptedClassName="encrypted"
              />
            </motion.button>
          ))}
        </div>
        <div className="project-details-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject ? selectedProject.id : 'empty'}
              className="project-details-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {selectedProject && (
                <>
                  <span className="project-label">{selectedProject.label}</span>
                  <h2 className="project-title">{selectedProject.title}</h2>
                  <p className="project-description">{selectedProject.description}</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Projects;