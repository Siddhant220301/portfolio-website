import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';

const contactDetails = [
  { icon: <FiPhone />, text: "+91 6377909873", href: "tel:+916377909873" },
  { icon: <FiMail />, text: "sidsharma220301@gmail.com", href: "mailto:sidsharma220301@gmail.com" },
  { icon: <FiLinkedin />, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/siddhant-sharma-911932192/" },
  { icon: <FiMapPin />, text: "Jaipur, Rajasthan", href: "#" },
];

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is a demo)");
  };

  return (
    <div className="contact-container">
      <GlitchText text="Get In Touch" />
      <p className="contact-intro">Have a question or want to work together? Leave your details and I'll get back to you.</p>
      
      <motion.div 
        className="contact-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Left Column for Direct Contact */}
        <div className="contact-details-column">
          <h3>Direct Contact</h3>
          <div className="contact-info-grid">
            {contactDetails.map((item, index) => (
              <motion.a 
                key={index} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">{item.icon}</div>
                <div className="details">{item.text}</div>
              </motion.a>
            ))}
          </div>
          <div className="resume-download">
            <a href="/Resume - Siddhant Sharma.pdf" download className="download-button">
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Right Column for the Form */}
        <div className="contact-form-column">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        
      </motion.div>
    </div>
  );
}

export default Contact;