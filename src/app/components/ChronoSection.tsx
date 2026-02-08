import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

const timeline = [
  { year: '2024', event: 'launched neural_interface', description: 'ai-powered design collaboration' },
  { year: '2023', event: 'joined techcorp', description: 'senior frontend engineer' },
  { year: '2022', event: 'built cyber_portfolio', description: 'immersive 3d experience' },
  { year: '2021', event: 'graduated cs', description: 'honors in computer science' },
  { year: '2020', event: 'first startup', description: 'co-founded dev collective' },
];

export function ChronoSection() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full">
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
          chrono
        </motion.h2>

        <div className="relative">
          {/* Vertical neon line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{
              backgroundColor: '#00ff66',
              opacity: 0.3,
              boxShadow: '0 0 10px rgba(0, 255, 102, 0.5)',
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-24 pb-16 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Circular marker */}
              <motion.div
                className="absolute left-4 rounded-full flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
                  border: '2px solid #00ff66',
                  boxShadow: '0 0 20px rgba(0, 255, 102, 0.5)',
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: '0 0 30px rgba(0, 255, 102, 0.8)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: '#00ff66',
                    boxShadow: '0 0 10px rgba(0, 255, 102, 0.8)',
                  }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: theme === 'dark'
                    ? 'rgba(0, 255, 102, 0.05)'
                    : 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 255, 102, 0.2)',
                  boxShadow: theme === 'dark'
                    ? '0 0 30px rgba(0, 255, 102, 0.1)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: '#00ff66',
                  boxShadow: theme === 'dark'
                    ? '0 0 40px rgba(0, 255, 102, 0.2)'
                    : '0 12px 40px rgba(0, 255, 102, 0.2)',
                }}
              >
                <div
                  className="font-mono text-sm mb-2"
                  style={{
                    color: '#00ff66',
                    opacity: 0.6,
                    letterSpacing: '0.2em',
                  }}
                >
                  {item.year}
                </div>
                <h3
                  className="font-mono text-xl mb-2"
                  style={{
                    color: '#00ff66',
                    letterSpacing: '0.1em',
                    textShadow: theme === 'dark'
                      ? '0 0 10px rgba(0, 255, 102, 0.3)'
                      : '0 0 5px rgba(0, 255, 102, 0.2)',
                  }}
                >
                  {item.event}
                </h3>
                <p
                  className="font-mono text-sm"
                  style={{
                    color: theme === 'dark' ? 'rgba(0, 255, 102, 0.5)' : 'rgba(0, 255, 102, 0.7)',
                    lineHeight: '1.6',
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
