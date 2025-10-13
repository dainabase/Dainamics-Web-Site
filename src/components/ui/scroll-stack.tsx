// src/components/ui/scroll-stack.tsx
// ScrollStack Component - Cards qui s'empilent avec sticky positioning
// Effet: Les cartes s'empilent les unes sur les autres avec un décalage visible
// Référence: DESIGN-SYSTEM-MANDATORY.md

'use client';

import React, {
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import { cn } from '@/lib/utils';
import Lenis from 'lenis';

// Types
interface ScrollStackProps extends HTMLAttributes<HTMLDivElement> {
  stackGap?: number; // Décalage vertical entre les cartes empilées (en px)
  stickyTop?: number; // Position top du sticky (en px)
  scaleEffect?: boolean; // Active l'effet de scale
  children: ReactNode;
}

interface ScrollStackItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ScrollStack Component
function ScrollStack({
  stackGap = 40,
  stickyTop = 100,
  scaleEffect = true,
  className,
  children,
  ...props
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize Lenis for smooth scroll
  useEffect(() => {
    if (containerRef.current) {
      const lenisInstance = new Lenis({
        wrapper: containerRef.current,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      setLenis(lenisInstance);

      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenisInstance.destroy();
      };
    }
  }, []);

  // Apply scale effect on scroll if enabled
  useEffect(() => {
    if (!scaleEffect || !lenis) return;

    const items = containerRef.current?.querySelectorAll('[data-scroll-stack-item]');
    if (!items || items.length === 0) return;

    function updateScale() {
      const scrollY = containerRef.current?.scrollTop || 0;
      
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        const itemTop = index * stackGap;
        
        // Calculate scale based on scroll position
        const progress = Math.max(0, Math.min(1, (scrollY - itemTop) / 200));
        const scale = 1 - progress * 0.05; // Scale from 1 to 0.95
        
        element.style.transform = `scale(${scale})`;
      });
    }

    lenis.on('scroll', updateScale);
    updateScale();

    return () => {
      lenis.off('scroll', updateScale);
    };
  }, [lenis, scaleEffect, stackGap]);

  const childrenArray = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full overflow-y-auto', className)}
      style={{ height: '100%' }}
      {...props}
    >
      <div className="relative" style={{ paddingBottom: '100vh' }}>
        {childrenArray.map((child, index) => (
          <div
            key={index}
            data-scroll-stack-item
            className="sticky w-full"
            style={{
              top: `${stickyTop + index * stackGap}px`,
              zIndex: childrenArray.length - index,
              transformOrigin: 'center top',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

// ScrollStackItem Component - Simplifié
function ScrollStackItem({
  className,
  children,
  ...props
}: ScrollStackItemProps) {
  return (
    <div
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Export
export default ScrollStack;
export { ScrollStackItem };
export type { ScrollStackProps, ScrollStackItemProps };
