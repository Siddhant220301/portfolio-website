import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import GlitchText from '../components/GlitchText'; // We are keeping GlitchText

function Home() {
  return (
    <section className="hero-section">
      <GlitchText text="Siddhant Sharma" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        An MBA candidate with a B.Tech in Computer Science, blending technical
        expertise with business acumen to drive innovation in data-driven leadership roles.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;