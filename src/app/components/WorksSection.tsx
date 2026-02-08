import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

const works = [
  {
    title: 'neural_interface',
    description: 'ai-powered design system with real-time collaboration',
    tags: ['react', 'tensorflow', 'webgl'],
    image: 'https://images.unsplash.com/photo-1658806264102-2c516eae5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc3MDU0NTA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'cyber_portfolio',
    description: 'immersive 3d portfolio with interactive elements',
    tags: ['three.js', 'gsap', 'next.js'],
    image: 'https://images.unsplash.com/photo-1597006372162-848bbbe84b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmVvbiUyMGNpdHlzY2FwZSUyMG5pZ2h0fGVufDF8fHx8MTc3MDU1MDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'minimal_flow',
    description: 'meditation app with generative audio visualization',
    tags: ['web audio', 'canvas', 'motion'],
    image: 'https://images.unsplash.com/photo-1770522297782-978caa624495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwZ3JlZW58ZW58MXx8fHwxNzcwNTUwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function WorksSection() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl w-full">
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
          works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                border: '1px solid transparent',
                backgroundColor: theme === 'dark'
                  ? 'rgba(0, 255, 102, 0.03)'
                  : 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
                borderColor: '#00ff66',
                boxShadow: theme === 'dark'
                  ? '0 20px 60px rgba(0, 255, 102, 0.3)'
                  : '0 20px 60px rgba(0, 255, 102, 0.2)',
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
                  }}
                />
                
                {/* Neon glow overlay on hover */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'rgba(0, 255, 102, 0.2)',
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3
                  className="font-mono text-xl mb-3"
                  style={{
                    color: '#00ff66',
                    letterSpacing: '0.1em',
                    textShadow: theme === 'dark'
                      ? '0 0 10px rgba(0, 255, 102, 0.4)'
                      : '0 0 5px rgba(0, 255, 102, 0.3)',
                  }}
                >
                  {work.title}
                </h3>
                <p
                  className="font-mono text-sm mb-4"
                  style={{
                    color: theme === 'dark' ? 'rgba(0, 255, 102, 0.6)' : 'rgba(0, 255, 102, 0.8)',
                    lineHeight: '1.6',
                  }}
                >
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs px-3 py-1 rounded-full"
                      style={{
                        border: '1px solid rgba(0, 255, 102, 0.3)',
                        color: '#00ff66',
                        backgroundColor: 'rgba(0, 255, 102, 0.05)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #00ff66 50%)',
                  opacity: 0,
                }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
