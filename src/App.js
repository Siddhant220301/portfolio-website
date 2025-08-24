// FILE: src/App.js (Updated for Performance)

import React, { useState, Suspense, lazy } from 'react'; // <-- 1. IMPORT lazy and Suspense
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Your components
import Bootloader from './components/Bootloader';
import Layout from './components/Layout';
import Squares from './components/Squares';
import CustomCursor from './components/CustomCursor';

// --- 2. LAZY LOAD YOUR PAGES ---
// This splits your code into smaller chunks that load on demand.
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));
const Certificates = lazy(() => import('./pages/Certificates'));

// A simple fallback for Suspense while pages load
const PageLoader = () => <div style={{ height: '100vh', width: '100%', display: 'grid', placeItems: 'center' }}>{/* You can put a simple spinner here */}</div>;

const MainContent = () => {
  return (
    // 3. WRAP ROUTES IN SUSPENSE
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleBootComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <CustomCursor />
      <Squares />
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Bootloader onBootComplete={handleBootComplete} />
        ) : (
          <MainContent />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;