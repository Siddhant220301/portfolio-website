import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { 
  FiHome, FiUser, FiBriefcase, FiFileText, FiMail, FiAward, FiSun
} from 'react-icons/fi';
import { playHoverSound, playClickSound } from '../utils/sounds';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { to: "/", icon: <FiHome size={24} />, label: "Home" },
  { to: "/about", icon: <FiUser size={24} />, label: "About" },
  { to: "/experience", icon: <FiBriefcase size={24} />, label: "Experience" },
  { to: "/projects", icon: <FiFileText size={24} />, label: "Projects" },
  { to: "/certificates", icon: <FiAward size={24} />, label: "Certificates" },
  { to: "/contact", icon: <FiMail size={24} />, label: "Contact" },
];

function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav className="circular-navbar">
      <ul>
        {navItems.map((item) => (
          <li 
            key={item.label}
            onMouseEnter={playHoverSound} 
            onClick={playClickSound}
          >
            <NavLink 
              to={item.to}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              title={item.label}
            >
              {item.icon}
              <span className="tooltip-text">{item.label}</span>
            </NavLink>
          </li>
        ))}
        <li
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            toggleTheme();
          }}
        >
          <a href="#" className="nav-link" title="Change Theme">
            <FiSun size={24} />
            <span className="tooltip-text">Theme</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;