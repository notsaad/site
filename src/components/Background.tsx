import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    resizeCanvas();

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Define dots
    const dotSize = 1;
    const dotSpacing = 25;
    const dots: { x: number; y: number; baseY: number }[] = [];

    // Create dot grid
    const createDots = () => {
      dots.length = 0;
      const cols = Math.floor(canvas.width / dotSpacing) + 1;
      const rows = Math.floor(canvas.height / dotSpacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * dotSpacing,
            y: j * dotSpacing,
            baseY: j * dotSpacing
          });
        }
      }
    };

    createDots();

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)';
      
      // Update and draw dots
      for (const dot of dots) {
        const dx = dot.x - mousePosition.current.x;
        const dy = dot.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          // Create ripple effect based on mouse position
          const force = (1 - distance / maxDistance) * 5;
          dot.y = dot.baseY + Math.sin(Date.now() * 0.003 + dot.x * 0.01) * force;
        } else {
          // Gentle wave animation for distant dots
          dot.y = dot.baseY + Math.sin(Date.now() * 0.002 + dot.x * 0.01) * 1;
        }
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    
    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      createDots();
    });
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        backgroundColor: isDarkMode ? '#111' : '#fff'
      }}
    />
  );
};

export default Background;
