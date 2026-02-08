import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

export function OriginSection() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="font-mono text-3xl md:text-4xl mb-16 text-center"
          style={{
            color: '#00ff66',
            textShadow: theme === 'dark'
              ? '0 0 20px rgba(0, 255, 102, 0.4)'
              : '0 0 10px rgba(0, 255, 102, 0.3)',
            letterSpacing: '0.2em',
          }}
        >
          origin
        </motion.h2>

        <motion.div
          className="relative p-12 rounded-3xl"
          style={{
            background: theme === 'dark'
              ? 'rgba(0, 255, 102, 0.03)'
              : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(20px)',
            border: '1px solid #00ff66',
            boxShadow: theme === 'dark'
              ? '0 0 40px rgba(0, 255, 102, 0.2), inset 0 0 30px rgba(0, 255, 102, 0.05)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: theme === 'dark'
              ? '0 0 60px rgba(0, 255, 102, 0.3), inset 0 0 40px rgba(0, 255, 102, 0.08)'
              : '0 12px 48px rgba(0, 0, 0, 0.15)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <p
            className="font-mono text-center text-2xl md:text-3xl"
            style={{
              color: '#00ff66',
              letterSpacing: '0.3em',
              textShadow: theme === 'dark'
                ? '0 0 15px rgba(0, 255, 102, 0.4)'
                : '0 0 8px rgba(0, 255, 102, 0.3)',
            }}
          >
            lazy genius
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
