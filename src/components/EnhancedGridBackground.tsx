// src/components/EnhancedGridBackground.tsx
// Simplified Enhanced Grid Background - No dots, single grid
// Maximum depth effect with parallax

import { motion, useScroll, useTransform } from 'framer-motion';

export default function EnhancedGridBackground() {
  const { scrollY } = useScroll();
  
  // Parallax effect - Grid moves slower than content
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Radial gradient overlay - Spotlight effect from center */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 30%,
              rgba(99, 102, 241, 0.15) 0%,
              rgba(99, 102, 241, 0.05) 25%,
              transparent 50%
            )
          `
        }}
      />

      {/* Single Grid Layer with Parallax - NO DOTS */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Vignette effect - Darkens edges for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 40%,
              rgba(10, 10, 15, 0.3) 70%,
              rgba(10, 10, 15, 0.6) 100%
            )
          `
        }}
      />

      {/* Top glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(99, 102, 241, 0.1) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(60px)'
        }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[300px]"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(16, 228, 255, 0.08) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(80px)'
        }}
      />
    </div>
  );
}
