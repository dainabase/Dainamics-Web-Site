// src/components/EnhancedGridBackground.tsx
// Clean Background with lighting effects - NO GRID
// Smooth gradient background with glow effects
// HIDDEN in light mode for clean appearance

import { motion, useScroll, useTransform } from 'framer-motion';

export default function EnhancedGridBackground() {
  const { scrollY } = useScroll();
  
  // Parallax effect - Grid moves slower than content
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    // Hidden in light mode - these effects are designed for dark backgrounds only
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden dark:block hidden">

      {/* Smooth animated gradient - NO GRID */}

      {/* Vignette effect - Darkens edges for depth (dark mode only) */}
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


      {/* Bottom accent glow (dark mode only) */}
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
