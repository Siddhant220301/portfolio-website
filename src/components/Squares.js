import { useRef, useEffect } from 'react';
import './Squares.css';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const Squares = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const speed = themes[theme].gridSpeed || 0.3;
  const squareSize = 40;
  const borderColor = themes[theme]['--medium-gray'];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = borderColor;
      
      gridOffset.current.x = (gridOffset.current.x - speed) % squareSize;
      gridOffset.current.y = (gridOffset.current.y - speed) % squareSize;

      for (let x = gridOffset.current.x; x < canvas.width; x += squareSize) {
        for (let y = gridOffset.current.y; y < canvas.height; y += squareSize) {
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }
      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="squares-canvas"></canvas>;
};

export default Squares;