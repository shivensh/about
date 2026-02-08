import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

const capabilities = [
  'react',
  'typescript',
  'next.js',
  'node.js',
  'tailwind',
  'python',
  'figma',
  'ui/ux',
  'webgl',
  'three.js',
  'gsap',
  'motion',
];

export function CapabilitiesSection() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-5xl w-full">
        <motion.h2
          className="font-mono text-3xl md:text-4xl mb-20 text-center"
          style={{
            color: '#00ff66',
            textShadow: theme === 'dark'
              ? '0 0 20px rgba(0, 255, 102, 0.4)'
              : '0 0 10px rgba(0, 255, 102, 0.3)',
            letterSpacing: '0.2em',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          capabilities
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {capabilities.map((skill, index) => (
            <motion.div
              key={index}
              className="font-mono px-6 py-3 rounded-full relative overflow-hidden"
              style={{
                border: '1px solid #00ff66',
                color: '#00ff66',
                backgroundColor: theme === 'dark'
                  ? 'rgba(0, 255, 102, 0.05)'
                  : 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                fontSize: '14px',
                letterSpacing: '0.1em',
                boxShadow: theme === 'dark'
                  ? '0 0 15px rgba(0, 255, 102, 0.2)'
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                },
              }}
              whileHover={{
                scale: 0.92,
                backgroundColor: theme === 'dark'
                  ? 'rgba(0, 255, 102, 0.1)'
                  : 'rgba(0, 255, 102, 0.15)',
                boxShadow: theme === 'dark'
                  ? '0 0 25px rgba(0, 255, 102, 0.4)'
                  : '0 8px 20px rgba(0, 255, 102, 0.3)',
              }}
              whileTap={{ scale: 0.88 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#00ff66',
                  opacity: 0,
                }}
                whileHover={{ opacity: 0.1 }}
              />
              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
