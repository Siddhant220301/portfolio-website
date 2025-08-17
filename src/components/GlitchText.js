// src/components/GlitchText.js
import React from 'react';
import './GlitchText.css';

const GlitchText = ({ text }) => {
  return (
    <h1 className="glitch-text" data-text={text}>
      {text}
    </h1>
  );
};

export default GlitchText;