import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const CustomCursor = () => {
  const { theme } = useTheme();
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const speed = 0.99;

  useEffect(() => {
    document.body.style.cursor = themes[theme].cursor;
  }, [theme]);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      if (e.target.matches('a, button')) {
        cursorFollowerRef.current.classList.add('hovering');
      }
    };

    const onMouseOut = (e) => {
      if (e.target.matches('a, button')) {
        cursorFollowerRef.current.classList.remove('hovering');
      }
    };

    const animate = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * speed;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * speed;
      
      if (cursorDotRef.current && cursorFollowerRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
        
        // THIS IS THE CORRECTED LINE
        cursorFollowerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };
    
    animate();

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorFollowerRef} className="custom-cursor-follower"></div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
    </>
  );
};

export default CustomCursor;