// src/components/HUD.js
import React, { useState, useEffect } from 'react';
import './HUD.css';

const HUD = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="hud-container">
      <div className="hud-item">
        <span className="hud-label">LOCATION:</span>
        <span className="hud-value">JAIPUR, RJ, IND</span>
      </div>
      <div className="hud-item">
        <span className="hud-label">LOCAL TIME:</span>
        <span className="hud-value">{time}</span>
      </div>
      <div className="hud-item">
        <span className="hud-label">SYSTEM STATUS:</span>
        <span className="hud-value status-ok">ONLINE</span>
      </div>
    </footer>
  );
};

export default HUD;