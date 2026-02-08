import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTheme } from './ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  layer: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const { theme } = useTheme();
  
  // Create parallax layers
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -50]);
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -100]);
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Generate stars
    const stars: Star[] = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        layer: Math.floor(Math.random() * 3),
      });
    }

    // Animation
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = theme === 'dark';
      const starColor = isDark ? '#00ff66' : '#333333';
      const baseOpacity = isDark ? 0.3 : 0.1;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.globalAlpha = star.opacity * baseOpacity;
        ctx.fill();

        // Subtle twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.2, Math.min(0.7, star.opacity));
      });

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />
    </div>
  );
}
