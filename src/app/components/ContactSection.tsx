import { motion } from 'motion/react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

export function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl w-full">
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
          contact
        </motion.h2>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name input */}
          <motion.div
            className="relative"
            animate={{
              scale: focused === 'name' ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className="w-full px-6 py-4 rounded-xl font-mono text-sm"
              style={{
                backgroundColor: theme === 'dark'
                  ? 'rgba(0, 255, 102, 0.05)'
                  : 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: focused === 'name' ? '2px solid #00ff66' : '1px solid rgba(0, 255, 102, 0.2)',
                color: '#00ff66',
                outline: 'none',
                boxShadow: focused === 'name'
                  ? '0 0 30px rgba(0, 255, 102, 0.3)'
                  : 'none',
                letterSpacing: '0.05em',
              }}
            />
          </motion.div>

          {/* Email input */}
          <motion.div
            className="relative"
            animate={{
              scale: focused === 'email' ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className="w-full px-6 py-4 rounded-xl font-mono text-sm"
              style={{
                backgroundColor: theme === 'dark'
                  ? 'rgba(0, 255, 102, 0.05)'
                  : 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: focused === 'email' ? '2px solid #00ff66' : '1px solid rgba(0, 255, 102, 0.2)',
                color: '#00ff66',
                outline: 'none',
                boxShadow: focused === 'email'
                  ? '0 0 30px rgba(0, 255, 102, 0.3)'
                  : 'none',
                letterSpacing: '0.05em',
              }}
            />
          </motion.div>

          {/* Message textarea */}
          <motion.div
            className="relative"
            animate={{
              scale: focused === 'message' ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <textarea
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              rows={6}
              className="w-full px-6 py-4 rounded-xl font-mono text-sm resize-none"
              style={{
                backgroundColor: theme === 'dark'
                  ? 'rgba(0, 255, 102, 0.05)'
                  : 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: focused === 'message' ? '2px solid #00ff66' : '1px solid rgba(0, 255, 102, 0.2)',
                color: '#00ff66',
                outline: 'none',
                boxShadow: focused === 'message'
                  ? '0 0 30px rgba(0, 255, 102, 0.3)'
                  : 'none',
                letterSpacing: '0.05em',
                lineHeight: '1.6',
              }}
            />
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="submit"
            className="w-full py-4 rounded-xl font-mono relative overflow-hidden group"
            style={{
              border: '2px solid #00ff66',
              color: '#00ff66',
              backgroundColor: 'transparent',
              boxShadow: '0 0 20px rgba(0, 255, 102, 0.2)',
              fontSize: '14px',
              letterSpacing: '0.15em',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 40px rgba(0, 255, 102, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
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
            <span className="relative z-10">send message</span>
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {['github', 'linkedin', 'twitter'].map((social, index) => (
            <motion.a
              key={social}
              href={`#${social}`}
              className="font-mono text-sm"
              style={{
                color: '#00ff66',
                opacity: 0.6,
                letterSpacing: '0.1em',
              }}
              whileHover={{
                opacity: 1,
                scale: 1.1,
                textShadow: '0 0 15px rgba(0, 255, 102, 0.6)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
