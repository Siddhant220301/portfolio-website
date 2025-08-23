import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';

import Bootloader from './components/Bootloader';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import Squares from './components/Squares';
import CustomCursor from './components/CustomCursor';


const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // The unnecessary useEffect timer has been removed from here.
  // The Bootloader's onBootComplete now solely controls the loading state.

  const handleBootComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <CustomCursor />
        <Squares />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <Bootloader key="bootloader" onBootComplete={handleBootComplete} />
          ) : (
            <MainContent />
          )}
        </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;