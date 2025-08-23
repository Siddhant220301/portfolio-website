import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const toggleTheme = () => {
    const themeNames = Object.keys(themes);
    const currentThemeIndex = themeNames.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themeNames.length;
    setTheme(themeNames[nextThemeIndex]);
  };

  useEffect(() => {
    const currentTheme = themes[theme];
    for (const key in currentTheme) {
      document.documentElement.style.setProperty(key, currentTheme[key]);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
