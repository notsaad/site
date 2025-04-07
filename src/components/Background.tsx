import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetMousePosition = useRef({ x: 0, y: 0 });
  const elasticEffect = useRef(0);
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

    // Track mouse position with elastic effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate distance moved
      const dx = x - targetMousePosition.current.x;
      const dy = y - targetMousePosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Apply elastic effect - gradually increases with movement and slowly decays
      elasticEffect.current += (Math.min(distance, 50) - elasticEffect.current) * 0.2;
      
      // Update target position immediately
      targetMousePosition.current = { x, y };
    };

    // Define dots
    const dotSize = 1;
    const dotSpacing = 25;
    const dots: { x: number; y: number; baseX: number; baseY: number }[] = [];

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
            baseX: i * dotSpacing,
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
      
      const time = Date.now() * 0.001;
      
      // Smooth follow for mouse position (elastic effect)
      mousePosition.current.x += (targetMousePosition.current.x - mousePosition.current.x) * 0.1;
      mousePosition.current.y += (targetMousePosition.current.y - mousePosition.current.y) * 0.1;
      
      // Gradually reduce elastic effect when mouse stops
      elasticEffect.current *= 0.95;
      
      // Calculate effective radius based on movement
      const effectRadius = 180 + elasticEffect.current * 2;
      
      // Update and draw dots
      for (const dot of dots) {
        const dx = dot.baseX - mousePosition.current.x;
        const dy = dot.baseY - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = effectRadius;
        
        if (distance < maxDistance) {
          // Enhanced elastic ripple effect based on mouse position and movement
          const strength = elasticEffect.current * 0.1 + 8; // Base strength plus movement boost
          const force = (1 - distance / maxDistance) * strength;
          
          // Push dots away from mouse with elastic effect
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force;
          const pushY = Math.sin(angle) * force;
          
          dot.x = dot.baseX + pushX;
          dot.y = dot.baseY + pushY + Math.sin(time * 3 + dot.baseX * 0.015) * force * 0.5;
        } else {
          // Global wave animation for all dots
          const waveX = Math.sin(time * 0.8 + dot.baseX * 0.02) * 1.2;
          const waveY = Math.cos(time * 0.5 + dot.baseX * 0.01) * 2;
          
          dot.x = dot.baseX + waveX;
          dot.y = dot.baseY + waveY;
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
