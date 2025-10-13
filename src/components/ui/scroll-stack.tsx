// src/components/ui/scroll-stack.tsx
// ScrollStack Component - Cards qui se "stackent" en scrollant
// Source: https://reactbits.dev/r/ScrollStack-TS-TW
// Adapté pour DAINAMICS Design System
// Référence: DESIGN-SYSTEM-MANDATORY.md
// FIX: Corrected stacking animation for proper card layering effect

'use client';

import React, {
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { cn } from '@/lib/utils';
import Lenis from 'lenis';

// Types
interface ScrollStackProps extends HTMLAttributes<HTMLDivElement> {
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  children: ReactNode;
}

interface ScrollStackItemProps extends HTMLAttributes<HTMLDivElement> {
  itemClassName?: string;
  children: ReactNode;
}

// ScrollStack Component
function ScrollStack({
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  className,
  children,
  ...props
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize Lenis
  useEffect(() => {
    if (!useWindowScroll && containerRef.current) {
      const lenisInstance = new Lenis({
        wrapper: containerRef.current,
        content: contentRef.current!,
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
  }, [useWindowScroll]);

  // Apply scroll animations
  useLayoutEffect(() => {
    const items = contentRef.current?.querySelectorAll(
      '[data-scroll-stack-item]'
    );
    if (!items || items.length === 0) return;

    let ticking = false;

    function updateItems() {
      if (!contentRef.current) return;

      const containerRect = containerRef.current!.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const stackOffset = (parseFloat(stackPosition) / 100) * containerHeight;

      items.forEach((item, index) => {
        const element = item as HTMLElement;
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top - containerRect.top;

        // Calculate progress
        let progress =
          (stackOffset - offsetTop) /
          (itemDistance + index * itemStackDistance);
        progress = Math.max(0, Math.min(1, progress));

        // Scale: cards get smaller as they go down the stack
        const scale = baseScale + (1 - baseScale) * (1 - progress);

        // Y offset - CORRECTED STACKING LOGIC:
        // Cards should be stacked on top of each other with visible offset
        // When progress = 0 (inactive), card is at baseOffset position
        // When progress = 1 (active), card moves to yOffset = 0
        // This creates the "peeling off from stack" effect
        const baseOffset = index * itemStackDistance;
        const yOffset = baseOffset * (1 - progress);

        // Rotation
        const rotation = rotationAmount * (1 - progress);

        // Blur
        const blur = blurAmount * progress;

        // Z-index: higher cards should be on top
        const zIndex = items.length - index;

        // Apply transforms
        element.style.transform = `translateY(${yOffset}px) scale(${scale}) rotateX(${rotation}deg)`;
        element.style.filter = blur > 0 ? `blur(${blur}px)` : '';
        element.style.zIndex = `${zIndex}`;
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateItems);
        ticking = true;
      }
    }

    if (useWindowScroll) {
      window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onScroll);
      onScroll(); // Initial update
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    } else if (lenis) {
      lenis.on('scroll', onScroll);
      onScroll(); // Initial update
      return () => {
        lenis.off('scroll', onScroll);
      };
    }
  }, [
    lenis,
    useWindowScroll,
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    rotationAmount,
    blurAmount,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      <div ref={contentRef} className="relative w-full">
        {children}
      </div>
    </div>
  );
}

// ScrollStackItem Component
function ScrollStackItem({
  className,
  itemClassName,
  children,
  ...props
}: ScrollStackItemProps) {
  return (
    <div
      data-scroll-stack-item
      className={cn('relative mb-4 w-full', className)}
      style={{ transformOrigin: 'center top' }}
      {...props}
    >
      <div
        className={cn(
          'w-full rounded-2xl p-8 shadow-lg transition-all duration-300',
          itemClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

// Export
export default ScrollStack;
export { ScrollStackItem };
export type { ScrollStackProps, ScrollStackItemProps };
