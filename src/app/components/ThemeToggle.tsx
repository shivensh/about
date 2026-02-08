import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 left-32 z-50 w-12 h-6 rounded-full border border-[#00ff66]/30 relative"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-0.5 w-5 h-5 rounded-full"
        style={{
          backgroundColor: '#00ff66',
          boxShadow: '0 0 10px rgba(0, 255, 102, 0.6)',
        }}
        animate={{
          x: theme === 'dark' ? 2 : 22,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.button>
  );
}
