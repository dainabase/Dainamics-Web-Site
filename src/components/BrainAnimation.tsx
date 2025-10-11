
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useIsMobile } from '@/hooks/use-mobile';

// Particles for the brain effect
function ParticlesBrain({ count = 2000, mousePosition }) {
  const points = useRef<any>();
  const isMobile = useIsMobile();
  
  // Generate random positions for particles
  const particlesPosition = new Float32Array(count * 3);
  const particlesColor = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // Create brain-like shape
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 2.2 + Math.random() * 0.8; // Slightly larger brain shape
    
    particlesPosition[i3] = r * Math.sin(phi) * Math.cos(theta);
    particlesPosition[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlesPosition[i3 + 2] = r * Math.cos(phi);
    
    // Enhanced color spectrum between primary and secondary colors
    // More vibrant purple/blue/cyan gradient
    const colorT = Math.random();
    particlesColor[i3] = 0.5 + 0.3 * Math.sin(colorT * Math.PI); // R: enhanced purple to blue
    particlesColor[i3 + 1] = 0.2 + 0.6 * Math.sin(colorT * Math.PI + Math.PI/3); // G: enhanced purple to cyan
    particlesColor[i3 + 2] = 0.7 + 0.3 * Math.sin(colorT * Math.PI + Math.PI/1.5); // B: enhanced blue to cyan
  }
  
  useFrame((state, delta) => {
    if (points.current) {
      // Enhanced rotation - more dynamic
      points.current.rotation.y += delta * 0.08;
      
      // More pronounced pulse effect
      const t = state.clock.getElapsedTime();
      points.current.material.size = THREE.MathUtils.lerp(
        points.current.material.size,
        0.7 + Math.sin(t * 1.5) * 0.3, // Larger particles with faster pulsation
        0.1
      );
      
      // More responsive mouse interaction
      if (mousePosition.current) {
        const { x, y } = mousePosition.current;
        points.current.rotation.x = THREE.MathUtils.lerp(
          points.current.rotation.x,
          y * 0.6, // More pronounced rotation
          0.1
        );
        points.current.rotation.z = THREE.MathUtils.lerp(
          points.current.rotation.z,
          -x * 0.6, // More pronounced rotation
          0.1
        );
      }
      
      // Random particle flashes to simulate neural activity
      if (Math.random() > 0.95) {
        points.current.material.size = points.current.material.size * 1.2;
        setTimeout(() => {
          if (points.current) {
            points.current.material.size = points.current.material.size / 1.2;
          }
        }, 150);
      }
    }
  });
  
  return (
    <Points ref={points} positions={particlesPosition} colors={particlesColor}>
      <PointMaterial
        transparent
        vertexColors
        size={isMobile ? 6 : 4} // Larger particles for better visibility
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Enhanced glow effect
      />
    </Points>
  );
}

// Neural connections effect - enhanced for more visual impact
function NeuralConnections({ count = 70, mousePosition }) { // Increased connection count
  const lines = useRef<THREE.Line[]>([]);
  const group = useRef<THREE.Group>(null);
  const flashes = useRef<{line: number, duration: number, intensity: number}[]>([]);
  
  // Create neural connections on first render
  useEffect(() => {
    if (!group.current) return;
    
    // Clear any existing lines
    lines.current.forEach(line => group.current?.remove(line));
    lines.current = [];
    
    // Create new connections with improved visuals
    for (let i = 0; i < count; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 4.5, // Expanded network size
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5
      );
      
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5
      );
      
      // More complex curves for connections
      const curve = new THREE.CubicBezierCurve3(
        start,
        new THREE.Vector3(
          (start.x + end.x) / 2 + (Math.random() - 0.5) * 3,
          (start.y + end.y) / 2 + (Math.random() - 0.5) * 3,
          (start.z + end.z) / 2 + (Math.random() - 0.5) * 3
        ),
        new THREE.Vector3(
          (start.x + end.x) / 2 + (Math.random() - 0.5) * 3,
          (start.y + end.y) / 2 + (Math.random() - 0.5) * 3,
          (start.z + end.z) / 2 + (Math.random() - 0.5) * 3
        ),
        end
      );
      
      const points = curve.getPoints(25); // More points for smoother curves
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      // Enhanced color gradient from purple to cyan with more saturation
      const colorT = Math.random();
      const color = new THREE.Color();
      
      // More vibrant colors
      color.r = 0.5 + 0.3 * Math.sin(colorT * Math.PI); // purple to cyan
      color.g = 0.1 + 0.7 * Math.sin(colorT * Math.PI + Math.PI/3); // purple to cyan
      color.b = 0.7 + 0.3 * Math.sin(colorT * Math.PI + Math.PI/1.5); // both are blueish
      
      const material = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.4 + Math.random() * 0.4, // More varied opacity
        blending: THREE.AdditiveBlending,
        linewidth: 1 + Math.random() * 2 // Varied line thickness (note: may not work in all browsers)
      });
      
      const line = new THREE.Line(geometry, material);
      group.current.add(line);
      lines.current.push(line);
      
      // Random initial flash for some connections
      if (Math.random() > 0.7) {
        flashes.current.push({
          line: lines.current.length - 1,
          duration: 0.5 + Math.random() * 1.5,
          intensity: 0.7 + Math.random() * 0.3
        });
      }
      
      // Animate opacity with GSAP - more dynamic animations
      gsap.to(material, {
        opacity: 0.1 + Math.random() * 0.5,
        duration: 0.8 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, [count]);
  
  useFrame((state, delta) => {
    if (group.current) {
      // Enhanced rotation
      group.current.rotation.y += delta * 0.05;
      
      // Enhanced mouse interaction
      if (mousePosition.current) {
        const { x, y } = mousePosition.current;
        group.current.rotation.x = THREE.MathUtils.lerp(
          group.current.rotation.x,
          y * 0.4,
          0.1
        );
        group.current.rotation.z = THREE.MathUtils.lerp(
          group.current.rotation.z,
          -x * 0.4,
          0.1
        );
      }
      
      // Random neural flashes - simulating data transmission
      if (Math.random() > 0.97) {
        const lineIndex = Math.floor(Math.random() * lines.current.length);
        const line = lines.current[lineIndex];
        const originalColor = line.material.color.clone();
        const originalOpacity = line.material.opacity;
        
        // Flash effect
        line.material.color.set(new THREE.Color(0.9, 0.9, 1)); // Bright flash
        line.material.opacity = 0.9;
        
        // Reset after a short time
        setTimeout(() => {
          if (line.material) {
            line.material.color.set(originalColor);
            line.material.opacity = originalOpacity;
          }
        }, 150);
      }
      
      // Process ongoing flashes
      flashes.current.forEach((flash, index) => {
        if (flash.duration <= 0) {
          flashes.current.splice(index, 1);
        } else {
          const line = lines.current[flash.line];
          if (line && line.material) {
            // Pulse the flash
            const pulseIntensity = Math.sin(state.clock.getElapsedTime() * 5) * 0.5 + 0.5;
            line.material.opacity = 0.4 + (pulseIntensity * flash.intensity * 0.6);
            flash.duration -= delta;
          }
        }
      });
      
      // Occasionally add new flashes
      if (Math.random() > 0.99) {
        flashes.current.push({
          line: Math.floor(Math.random() * lines.current.length),
          duration: 1 + Math.random() * 2,
          intensity: 0.6 + Math.random() * 0.4
        });
      }
    }
  });
  
  return <group ref={group} />;
}

// Energy particles for additional visual impact
function EnergyParticles({ count = 100, mousePosition }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const positions = useRef(new Array(count).fill(0).map(() => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6
    ),
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02
    ),
    scale: 0.1 + Math.random() * 0.2,
    color: new THREE.Color(
      0.5 + Math.random() * 0.5,
      0.3 + Math.random() * 0.7,
      0.8 + Math.random() * 0.2
    )
  })));
  
  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    const tempColor = new THREE.Color();
    const tempMatrix = new THREE.Matrix4();
    
    positions.current.forEach((particle, i) => {
      // Update position based on velocity
      particle.position.add(particle.velocity);
      
      // Contain particles within bounds
      if (particle.position.length() > 4) {
        particle.position.normalize().multiplyScalar(4);
        particle.velocity.reflect(particle.position.clone().normalize());
      }
      
      // Set matrix for instanced mesh
      tempMatrix.makeScale(particle.scale, particle.scale, particle.scale);
      tempMatrix.setPosition(particle.position);
      mesh.current!.setMatrixAt(i, tempMatrix);
      
      // Set color for instanced mesh
      const pulseIntensity = 0.7 + 0.3 * Math.sin(state.clock.getElapsedTime() * 2 + i * 0.1);
      tempColor.copy(particle.color).multiplyScalar(pulseIntensity);
      mesh.current!.setColorAt(i, tempColor);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
    
    // Rotate the entire particle system
    mesh.current.rotation.y += delta * 0.05;
    
    if (mousePosition.current) {
      const { x, y } = mousePosition.current;
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        y * 0.3,
        0.05
      );
      mesh.current.rotation.z = THREE.MathUtils.lerp(
        mesh.current.rotation.z,
        -x * 0.3,
        0.05
      );
    }
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial transparent opacity={0.8} vertexColors />
    </instancedMesh>
  );
}

// Main Scene component
function BrainScene({ mousePosition }) {
  const { camera } = useThree();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Position camera - slightly closer for better visibility
    camera.position.z = isMobile ? 7.5 : 5.5;
  }, [camera, isMobile]);
  
  return (
    <>
      <ambientLight intensity={0.6} /> {/* Slightly increased ambient light */}
      <pointLight position={[10, 10, 10]} intensity={1.2} /> {/* Enhanced point light */}
      <ParticlesBrain mousePosition={mousePosition} count={isMobile ? 1200 : 2500} /> {/* More particles */}
      <NeuralConnections mousePosition={mousePosition} count={isMobile ? 30 : 70} /> {/* More connections */}
      <EnergyParticles mousePosition={mousePosition} count={isMobile ? 50 : 100} /> {/* New energy particles */}
    </>
  );
}

export default function BrainAnimation() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mousePosition.current = { x, y };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={canvasRef} className="w-full h-full absolute top-0 left-0 z-0">
      <Canvas>
        <BrainScene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
