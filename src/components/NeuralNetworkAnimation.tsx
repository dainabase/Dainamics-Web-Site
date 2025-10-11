
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function NeuralNetworkAnimation() {
  // Reference for container element to help with positioning
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Define nodes and connections
  const nodes = [
    { id: 'node1', left: '20%', top: '20%', delay: 0 },
    { id: 'node2', left: '30%', top: '40%', delay: 0.3 },
    { id: 'node3', left: '15%', top: '60%', delay: 0.6 },
    { id: 'node4', left: '50%', top: '50%', delay: 0.9 },
    { id: 'node5', left: '70%', top: '30%', delay: 1.2 },
    { id: 'node6', left: '65%', top: '70%', delay: 1.5 },
    { id: 'node7', left: '85%', top: '50%', delay: 1.8 },
    { id: 'node8', left: '40%', top: '80%', delay: 2.1 },
    { id: 'node9', left: '25%', top: '75%', delay: 2.4 },
    { id: 'node10', left: '75%', top: '15%', delay: 2.7 },
    { id: 'node11', left: '90%', top: '30%', delay: 3.0 },
    { id: 'node12', left: '10%', top: '35%', delay: 3.3 },
  ];

  // Define connections between nodes
  const connections = [
    { id: 'conn1-2', from: 'node1', to: 'node2', delay: 0.2 },
    { id: 'conn1-3', from: 'node1', to: 'node3', delay: 0.4 },
    { id: 'conn2-4', from: 'node2', to: 'node4', delay: 0.6 },
    { id: 'conn3-4', from: 'node3', to: 'node4', delay: 0.8 },
    { id: 'conn4-5', from: 'node4', to: 'node5', delay: 1.0 },
    { id: 'conn4-6', from: 'node4', to: 'node6', delay: 1.2 },
    { id: 'conn5-7', from: 'node5', to: 'node7', delay: 1.4 },
    { id: 'conn6-7', from: 'node6', to: 'node7', delay: 1.6 },
    { id: 'conn3-9', from: 'node3', to: 'node9', delay: 1.8 },
    { id: 'conn4-8', from: 'node4', to: 'node8', delay: 2.0 },
    { id: 'conn5-10', from: 'node5', to: 'node10', delay: 2.2 },
    { id: 'conn7-11', from: 'node7', to: 'node11', delay: 2.4 },
    { id: 'conn1-12', from: 'node1', to: 'node12', delay: 2.6 },
  ];
  
  // Calculate connection positions and rotations
  useEffect(() => {
    if (!containerRef.current) return;
    
    const nodeElements = Array.from(containerRef.current.querySelectorAll('.node')) as HTMLElement[];
    const connectionElements = Array.from(containerRef.current.querySelectorAll('.connection')) as HTMLElement[];
    
    // Position connections between nodes
    connections.forEach((conn, index) => {
      const fromNode = nodeElements.find(n => n.id === conn.from);
      const toNode = nodeElements.find(n => n.id === conn.to);
      const connection = connectionElements[index];
      
      if (fromNode && toNode && connection) {
        // Get node positions
        const fromRect = fromNode.getBoundingClientRect();
        const toRect = toNode.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();
        
        // Calculate relative positions within container
        const fromX = (fromRect.left + fromRect.width/2) - containerRect.left;
        const fromY = (fromRect.top + fromRect.height/2) - containerRect.top;
        const toX = (toRect.left + toRect.width/2) - containerRect.left;
        const toY = (toRect.top + toRect.height/2) - containerRect.top;
        
        // Calculate distance and angle
        const dx = toX - fromX;
        const dy = toY - fromY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        // Apply position and rotation
        connection.style.left = `${fromX}px`;
        connection.style.top = `${fromY}px`;
        connection.style.width = `${distance}px`;
        connection.style.transform = `rotate(${angle}deg)`;
        
        // Add data-pulse attribute for animation timing
        connection.setAttribute('data-pulse', Math.random().toString());
      }
    });
    
    // Randomize pulsation for nodes
    nodeElements.forEach(node => {
      // Random animation delay for a more organic feel
      const randomDelay = Math.random() * 2;
      node.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div ref={containerRef} className="relative w-full h-full">
        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            id={node.id}
            className="node absolute w-4 h-4 rounded-full"
            style={{
              left: node.left,
              top: node.top,
              background: 'radial-gradient(circle, rgba(123,47,255,1) 0%, rgba(16,228,255,1) 100%)',
              boxShadow: '0 0 15px rgba(123,47,255,0.8)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: node.delay * 0.3,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: Math.random() * 3 + 2,
            }}
          />
        ))}
        
        {/* Connections */}
        {connections.map((connection) => (
          <motion.div
            key={connection.id}
            className="connection absolute h-0.5 origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(123,47,255,0.5) 0%, rgba(16,228,255,0.5) 100%)',
              backgroundSize: '100px 100%',
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{ 
              opacity: {
                duration: 3,
                repeat: Infinity,
                delay: connection.delay * 0.3,
              },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: connection.delay * 0.3,
              }
            }}
          />
        ))}
        
        {/* Add some floating particles for enhanced effect */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: 'rgba(16,228,255,0.8)',
              boxShadow: '0 0 5px rgba(16,228,255,0.5)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
              opacity: [0, 1, 1, 0],
              scale: [0.2, 1, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
