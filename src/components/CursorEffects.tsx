import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CursorEffects() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [trails, setTrails] = useState<CursorPosition[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
      
      // Add new position to trails - increase number for more dramatic effect
      setTrails(prev => {
        const newTrails = [...prev, { x: e.clientX, y: e.clientY }];
        // Keep only last 12 positions for more trails
        return newTrails.slice(-12);
      });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-magnetic');
      
      setIsHovering(!!isInteractive);
    };
    
    const handleMouseOut = () => {
      setCursorVisible(false);
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    document.documentElement.addEventListener('mouseout', handleMouseOut);
    
    // Enhanced magnetic effect on interactive elements
    const handleMagneticEffect = () => {
      const buttons = document.querySelectorAll('button, a, .cursor-magnetic');
      
      buttons.forEach(button => {
        button.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = (button as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          // More pronounced magnetic effect (0.2 instead of 0.1)
          (button as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        // Add subtle scaling effect on hover
        button.addEventListener('mouseenter', () => {
          (button as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
          (button as HTMLElement).style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
          (button as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
          (button as HTMLElement).style.transform = 'scale(1) translate(0, 0)';
        });
      });
    };
    
    handleMagneticEffect();
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.documentElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  
  // Hide on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }
  
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main cursor */}
      {cursorVisible && (
        <div 
          className={`absolute rounded-full border-2 transition-all duration-300 ${
            isHovering 
              ? 'w-16 h-16 border-dainamics-secondary opacity-40' // Larger hover effect
              : 'w-8 h-8 border-dainamics-primary' // Slightly larger normal cursor
          }`}
          style={{
            transform: `translate(${cursorPosition.x - (isHovering ? 32 : 16)}px, ${cursorPosition.y - (isHovering ? 32 : 16)}px)`,
            transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s, opacity 0.3s'
          }}
        />
      )}
      
      {/* Inner dot - enhanced */}
      {cursorVisible && (
        <div 
          className={`absolute rounded-full transition-all duration-150 ${
            isHovering 
              ? 'w-4 h-4 bg-dainamics-secondary' // Larger inner dot on hover
              : 'w-3 h-3 bg-dainamics-primary' // Slightly larger inner dot
          }`}
          style={{
            transform: `translate(${cursorPosition.x - (isHovering ? 8 : 6)}px, ${cursorPosition.y - (isHovering ? 8 : 6)}px)`,
            transition: 'transform 0.05s ease-out, width 0.3s, height 0.3s, background-color 0.3s',
            boxShadow: isHovering ? '0 0 10px 2px rgba(144, 85, 253, 0.4)' : '0 0 8px 1px rgba(105, 57, 230, 0.3)'
          }}
        />
      )}
      
      {/* Enhanced luminous trails - more particles and energy effect */}
      {trails.map((trail, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary animate-cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            width: `${8 - index * 0.6}px`, // Larger trails
            height: `${8 - index * 0.6}px`, // Larger trails
            opacity: 0.9 - (index * 0.07), // More opacity for better visibility
            filter: 'blur(1px)', // Add blur for glow effect
            boxShadow: '0 0 8px 2px rgba(124, 58, 237, 0.3)' // Add glow effect
          }}
        />
      ))}
      
      {/* Additional energy particles for more dynamic effect */}
      {cursorVisible && trails.length > 2 && (
        <>
          <div 
            className="absolute w-2 h-2 rounded-full bg-dainamics-secondary animate-pulse"
            style={{
              left: cursorPosition.x + 8 + Math.sin(Date.now() / 500) * 10,
              top: cursorPosition.y + 8 + Math.cos(Date.now() / 500) * 10,
              filter: 'blur(1px)', // Add blur for glow effect
              boxShadow: '0 0 8px 3px rgba(124, 58, 237, 0.4)' // Enhanced glow
            }}
          />
          <div 
            className="absolute w-2 h-2 rounded-full bg-dainamics-primary animate-pulse"
            style={{
              left: cursorPosition.x - 8 + Math.cos(Date.now() / 500) * 10,
              top: cursorPosition.y - 8 + Math.sin(Date.now() / 500) * 10,
              animationDelay: '0.2s',
              filter: 'blur(1px)', // Add blur for glow effect
              boxShadow: '0 0 8px 3px rgba(124, 58, 237, 0.4)' // Enhanced glow
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"
            style={{
              left: cursorPosition.x + Math.sin(Date.now() / 700) * 12,
              top: cursorPosition.y + Math.cos(Date.now() / 600) * 12,
              animationDelay: '0.1s',
              filter: 'blur(1px)', // Add blur for glow effect
              boxShadow: '0 0 6px 2px rgba(96, 165, 250, 0.5)' // Cyan-ish glow
            }}
          />
        </>
      )}

      {/* Sparks for extra effect when moving fast */}
      {trails.length > 0 && trails.length % 5 === 0 && (
        <div
          className="absolute w-4 h-4 rounded-full bg-white animate-ping"
          style={{
            left: cursorPosition.x - 2,
            top: cursorPosition.y - 2,
            opacity: 0.6,
            boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.7)',
            animationDuration: '0.5s'
          }}
        />
      )}
    </div>
  );
}
