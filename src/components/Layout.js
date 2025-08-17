import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Squares from './Squares';
import ProfileCard from './ProfileCard';
import HUD from './HUD';
import CustomCursor from './CustomCursor';
import './Layout.css';

const pageVariants = {
  initial: { opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
  in: { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  out: { opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const showProfileCard = ['/', '/about'].includes(location.pathname);

  return (
    <>
      <div className="background-container">
        <Squares />
      </div>
      <div className="scanlines-overlay" />
      {/* The <div className="scanner-line" /> has been removed from here */}
      <CustomCursor />

      <div className="layout-container">
        <Navbar />
        <div className="layout-main-content">
          <AnimatePresence mode="wait">
            {showProfileCard && (
              <motion.aside 
                key="profile-card"
                className="layout-sidebar"
                initial={{ opacity: 0, x: -100, rotateY: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, rotateY: -10, scale: 0.9, transition: { duration: 0.5 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProfileCard
                  name="Siddhant Sharma"
                  title="MBA IT & Marketing"
                  handle="sidsharma"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/avatar.jpg"
                  enableTilt={true}
                  onContactClick={() => navigate('/contact')}
                />
              </motion.aside>
            )}
          </AnimatePresence>
          <main className="content-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
              >
                <Outlet /> 
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        <HUD />
      </div>
    </>
  );
}

export default Layout;