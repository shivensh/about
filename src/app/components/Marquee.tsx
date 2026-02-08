import { motion, useScroll, useTransform } from 'motion/react';
import { useTheme } from './ThemeContext';

export function Marquee() {
  const { scrollY } = useScroll();
  const { theme } = useTheme();
  
  // Parallax effect - moves slower than scroll
  const x = useTransform(scrollY, [0, 1000], [0, -200]);

  const text = 'carpe diem';
  const repeatedText = Array(20).fill(text).join(' · ');

  return (
    <div className="w-full overflow-hidden mb-20 relative">
      <motion.div
        className="flex whitespace-nowrap font-mono"
        style={{
          x,
          fontSize: '36px',
          color: '#00ff66',
          textShadow: theme === 'dark' 
            ? '0 0 20px rgba(0, 255, 102, 0.6)' 
            : '0 0 10px rgba(0, 255, 102, 0.3)',
          letterSpacing: '0.1em',
        }}
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedText.split('').map((char, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.03,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.2,
              color: '#66ffaa',
              textShadow: '0 0 30px rgba(102, 255, 170, 0.8)',
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
