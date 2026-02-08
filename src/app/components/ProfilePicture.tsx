import { motion, useScroll, useTransform } from 'motion/react';
import profileImg from 'figma:asset/170e5e93bd0c24ea2f006bfe6b4db37ebc15f071.png';

export function ProfilePicture() {
  const { scrollY } = useScroll();
  const glowIntensity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <div className="relative w-48 h-48 mx-auto mb-12">
      {/* Animated glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px solid #00ff66',
          opacity: glowIntensity,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '1px solid #00ff66',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Glass frame container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: 'rgba(0, 255, 102, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '2px solid #00ff66',
          boxShadow: '0 0 30px rgba(0, 255, 102, 0.3), inset 0 0 20px rgba(0, 255, 102, 0.1)',
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <img
          src={profileImg}
          alt="shivansh"
          className="w-full h-full object-cover"
        />

        {/* Glass overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 102, 0.1) 0%, transparent 50%, rgba(0, 255, 102, 0.05) 100%)',
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>

      {/* Orbiting particle */}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          backgroundColor: '#00ff66',
          boxShadow: '0 0 10px rgba(0, 255, 102, 0.8)',
          top: '50%',
          left: '50%',
          marginTop: '-4px',
          marginLeft: '-4px',
        }}
        animate={{
          x: [0, 80, 0, -80, 0],
          y: [80, 0, -80, 0, 80],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
