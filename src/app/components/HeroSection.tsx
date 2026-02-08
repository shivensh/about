import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export function HeroSection() {
  const [showCursor, setShowCursor] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 
          className="font-mono mb-6"
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            color: '#00ff66',
            textShadow: theme === 'dark'
              ? '0 0 30px rgba(0, 255, 102, 0.5)'
              : '0 0 15px rgba(0, 255, 102, 0.3)',
            letterSpacing: '0.05em',
          }}
        >
          shivansh
          <motion.span
            animate={{ opacity: showCursor ? 1 : 0 }}
            style={{
              color: '#00ff66',
            }}
          >
            _
          </motion.span>
        </h1>

        <motion.p
          className="font-mono text-lg md:text-xl mb-12"
          style={{
            color: theme === 'dark' ? 'rgba(0, 255, 102, 0.6)' : 'rgba(0, 255, 102, 0.8)',
            letterSpacing: '0.1em',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          developer / designer / dreamer
        </motion.p>

        <motion.button
          className="font-mono px-8 py-4 rounded-lg relative overflow-hidden group"
          style={{
            border: '2px solid #00ff66',
            color: '#00ff66',
            backgroundColor: 'transparent',
            boxShadow: '0 0 20px rgba(0, 255, 102, 0.3)',
            fontSize: '14px',
            letterSpacing: '0.15em',
            textTransform: 'lowercase',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(0, 255, 102, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: '#00ff66',
              opacity: 0,
            }}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">explore work</span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div 
          className="w-0.5 h-12"
          style={{
            backgroundColor: '#00ff66',
            opacity: 0.3,
            boxShadow: '0 0 10px rgba(0, 255, 102, 0.5)',
          }}
        />
      </motion.div>
    </section>
  );
}
