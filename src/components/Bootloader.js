// src/components/Bootloader.js
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Bootloader.css';

const bootMessages = [
  "INITIALIZING INTERFACE V2.3...",
  "CONNECTING TO NEURAL-LINK...",
  "CALIBRATING GRID...",
  "ACCESSING DOSSIER: S. SHARMA...",
  "SYSTEM ONLINE",
];

const Bootloader = ({ onBootComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prevIndex => {
        if (prevIndex < bootMessages.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(messageInterval);
        setTimeout(onBootComplete, 500); // Wait a bit after the last message
        return prevIndex;
      });
    }, 700); // Time each message is displayed

    return () => clearInterval(messageInterval);
  }, [onBootComplete]);

  return (
    <motion.div 
      className="bootloader-container"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="bootloader-content">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {bootMessages[currentMessageIndex]}<span className="cursor">_</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Bootloader;