
import { useRef, useEffect } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  glow: number;
}

interface Connection {
  from: number;
  to: number;
  width: number;
  color: string;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

const BrainAnimation2D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Declare variables before functions that use them
    let nodes: Node[] = [];
    let connections: Connection[] = [];
    let pulses: Pulse[] = [];
    let animationFrameId: number;
    
    // Setup canvas
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.offsetWidth * 2;
      canvas.height = container.offsetHeight * 2;
      
      // Re-initialize animation after resize
      initAnimation();
    };
    
    // Initialize the animation
    function initAnimation() {
      // Clear previous state
      nodes = [];
      connections = [];
      pulses = [];
      
      // Create nodes
      const nodeCount = Math.min(window.innerWidth / 15, 60); // Responsive node count
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: canvas.width * (0.25 + Math.random() * 0.5),
          y: canvas.height * (0.2 + Math.random() * 0.6),
          radius: 2 + Math.random() * 3,
          color: i % 3 === 0 ? '#10E4FF' : '#7B2FFF',
          glow: Math.random() * 10
        });
      }
      
      // Create connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        const nodeConnections = 2 + Math.floor(Math.random() * 3);
        for (let j = 0; j < nodeConnections; j++) {
          const targetNode = Math.floor(Math.random() * nodes.length);
          if (i !== targetNode) {
            connections.push({
              from: i,
              to: targetNode,
              width: 0.5 + Math.random() * 1,
              color: Math.random() > 0.5 ? '#10E4FF' : '#7B2FFF'
            });
          }
        }
      }
    }
    
    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections with enhanced glow
      connections.forEach(conn => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        
        // Enhanced connection with glow
        ctx.shadowBlur = 5;
        ctx.shadowColor = conn.color;
        ctx.strokeStyle = conn.color;
        ctx.lineWidth = conn.width;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        
        // Reset shadow for other elements
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });
      
      // Draw nodes with enhanced glow
      nodes.forEach(node => {
        // Pulsating glow effect
        // Ensure glowSize is always positive by using Math.max to set a minimum value
        const glowSize = Math.max(0.1, node.radius + 3 + Math.sin(Date.now() * 0.005) * node.glow);
        
        // Create gradient for glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, Math.max(0.1, node.radius), // Ensure radius is at least 0.1
          node.x, node.y, glowSize
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'rgba(123, 47, 255, 0)');
        
        // Draw enhanced glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = node.color;
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });
      
      // Generate new pulses randomly
      if (Math.random() < 0.1) {
        const fromNode = Math.floor(Math.random() * nodes.length);
        const toNodeConn = connections.find(conn => conn.from === fromNode);
        
        if (toNodeConn) {
          pulses.push({
            from: fromNode,
            to: toNodeConn.to,
            progress: 0,
            speed: 0.01 + Math.random() * 0.02
          });
        }
      }
      
      // Draw and update pulses with enhanced glow
      const remainingPulses: Pulse[] = [];
      pulses.forEach(pulse => {
        const fromNode = nodes[pulse.from];
        const toNode = nodes[pulse.to];
        
        // Calculate position along the connection
        const x = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;
        
        // Draw pulse with enhanced glow
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#10E4FF';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#10E4FF';
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Update progress
        pulse.progress += pulse.speed;
        
        // Keep pulse if not completed
        if (pulse.progress < 1) {
          remainingPulses.push(pulse);
        }
      });
      pulses = remainingPulses;
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="brain-container absolute w-full md:w-[600px] h-[400px] right-0 md:right-[5%] top-[20%] z-0 opacity-75 pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ filter: 'blur(0.5px) drop-shadow(0 0 8px rgba(16,228,255,0.3))' }}
      />
    </div>
  );
};

export default BrainAnimation2D;
