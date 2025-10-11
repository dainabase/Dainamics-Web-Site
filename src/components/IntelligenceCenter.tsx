
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, BarChart3, Zap, Globe, Activity } from 'lucide-react';

export default function IntelligenceCenter() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Particle system simulation
  useEffect(() => {
    if (!isInView) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    // Create canvas for particles
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 z-0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle settings
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      age: number;
      maxAge: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5; // Faster movement
        this.speedY = Math.random() * 3 - 1.5; // Faster movement
        
        // Enhanced colors: purple, cyan, or white
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
          this.color = 'rgba(123, 47, 255, ';  // purple
        } else if (colorChoice < 0.7) {
          this.color = 'rgba(16, 228, 255, ';  // cyan
        } else {
          this.color = 'rgba(255, 255, 255, ';  // white
        }
        
        this.age = 0;
        this.maxAge = Math.random() * 100 + 50;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.age++;
        
        // Fade out as particle ages
        const opacity = 1 - (this.age / this.maxAge);
        
        if (ctx) {
          ctx.fillStyle = this.color + opacity + ')';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Edge detection and bounce
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1;
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1;
        }
        
        return this.age < this.maxAge;
      }
    }
    
    // Data transmission effect
    class DataTransmission {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
      color: string;
      
      constructor() {
        // Random edge points
        const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        
        switch(edge) {
          case 0: // top
            this.startX = Math.random() * canvas.width;
            this.startY = 0;
            break;
          case 1: // right
            this.startX = canvas.width;
            this.startY = Math.random() * canvas.height;
            break;
          case 2: // bottom
            this.startX = Math.random() * canvas.width;
            this.startY = canvas.height;
            break;
          default: // left
            this.startX = 0;
            this.startY = Math.random() * canvas.height;
            break;
        }
        
        // Random end point (not on the same edge)
        let endEdge = (edge + 2) % 4;
        
        switch(endEdge) {
          case 0: // top
            this.endX = Math.random() * canvas.width;
            this.endY = 0;
            break;
          case 1: // right
            this.endX = canvas.width;
            this.endY = Math.random() * canvas.height;
            break;
          case 2: // bottom
            this.endX = Math.random() * canvas.width;
            this.endY = canvas.height;
            break;
          default: // left
            this.endX = 0;
            this.endY = Math.random() * canvas.height;
            break;
        }
        
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.01;
        
        // Colors with higher saturation
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
          this.color = 'rgba(123, 47, 255, 0.5)';  // purple
        } else if (colorChoice < 0.7) {
          this.color = 'rgba(16, 228, 255, 0.5)';  // cyan
        } else {
          this.color = 'rgba(255, 90, 0, 0.4)';  // orange
        }
      }
      
      update() {
        this.progress += this.speed;
        
        const x = this.startX + (this.endX - this.startX) * this.progress;
        const y = this.startY + (this.endY - this.startY) * this.progress;
        
        if (ctx) {
          // Create pulse effect along the line
          const pulseSize = Math.sin(this.progress * Math.PI) * 3;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw faint line
          ctx.strokeStyle = this.color.replace('0.5', '0.2');
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.startX, this.startY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        
        return this.progress < 1;
      }
    }
    
    // Manage particles and data transmissions
    const particles: Particle[] = [];
    const transmissions: DataTransmission[] = [];
    const maxParticles = 150; // More particles
    const maxTransmissions = 8; // More data transmissions
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new particles occasionally
      if (particles.length < maxParticles && Math.random() > 0.9) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
      
      // Add new data transmissions occasionally
      if (transmissions.length < maxTransmissions && Math.random() > 0.97) {
        transmissions.push(new DataTransmission());
      }
      
      // Update and filter out finished transmissions
      for (let i = transmissions.length - 1; i >= 0; i--) {
        if (!transmissions[i].update()) {
          transmissions.splice(i, 1);
        }
      }
      
      // Update and filter out dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update()) {
          particles.splice(i, 1);
        }
      }
      
      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(123, 47, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = `rgba(123, 47, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [isInView]);
  
  return (
    <section ref={containerRef} className="relative min-h-[70vh] py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/95 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="text-dainamics-primary font-semibold tracking-wider uppercase text-sm md:text-base">
                Command Center
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">Take Command of Your</span> <br />
              <span className="text-gradient-secondary glow">Business Empire</span>
            </h2>
            
            <p className="text-dainamics-light/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              The unified platform where your AI agents collaborate, optimize, and propel your business to unreachable heights. Monitor performance, analyze data, and make strategic decisions all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white btn-glow font-semibold text-base power-pulse"
              >
                <a href="/command-center">
                  ACCESS COMMAND CENTER
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-dainamics-light/20 text-dainamics-light hover:bg-dainamics-light/5 font-semibold text-base"
              >
                <a href="/command-center#demo">
                  REQUEST DEMO
                </a>
              </Button>
            </div>
          </motion.div>
          
          {/* Enhanced Visualization */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              {/* Command Center visualization - more futuristic */}
              <div className="glass-morphism rounded-xl overflow-hidden shadow-2xl border-dainamics-primary/20">
                <div className="bg-dainamics-background/60 py-3 px-4 border-b border-dainamics-primary/20 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-dainamics-cta"></div>
                    <div className="w-3 h-3 rounded-full bg-dainamics-secondary"></div>
                    <div className="w-3 h-3 rounded-full bg-dainamics-primary"></div>
                  </div>
                  <div className="text-dainamics-light/80 text-sm font-medium">Dainamics Command Center</div>
                  <div className="w-6"></div>
                </div>
                
                <div className="p-6">
                  {/* Enhanced Dashboard content - more holographic and futuristic */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-dainamics-background/40 rounded-lg p-4 border border-dainamics-primary/20 hover:border-dainamics-primary/50 transition-colors relative overflow-hidden">
                      <div className="absolute right-2 top-2 text-dainamics-primary opacity-20">
                        <Cpu className="h-10 w-10" />
                      </div>
                      <div className="text-dainamics-light/60 text-xs mb-1">Active Agents</div>
                      <div className="text-dainamics-light text-2xl font-bold">5</div>
                      <div className="text-dainamics-success text-xs mt-1 flex items-center">
                        <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
                        +2 from last week
                      </div>
                    </div>
                    
                    <div className="bg-dainamics-background/40 rounded-lg p-4 border border-dainamics-primary/20 hover:border-dainamics-primary/50 transition-colors relative overflow-hidden">
                      <div className="absolute right-2 top-2 text-dainamics-primary opacity-20">
                        <Activity className="h-10 w-10" />
                      </div>
                      <div className="text-dainamics-light/60 text-xs mb-1">Tasks Completed</div>
                      <div className="text-dainamics-light text-2xl font-bold">1,248</div>
                      <div className="text-dainamics-success text-xs mt-1 flex items-center">
                        <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
                        24% increase
                      </div>
                    </div>
                    
                    <div className="bg-dainamics-background/40 rounded-lg p-4 border border-dainamics-primary/20 hover:border-dainamics-primary/50 transition-colors relative overflow-hidden">
                      <div className="absolute right-2 top-2 text-dainamics-primary opacity-20">
                        <Zap className="h-10 w-10" />
                      </div>
                      <div className="text-dainamics-light/60 text-xs mb-1">Hours Saved</div>
                      <div className="text-dainamics-light text-2xl font-bold">458</div>
                      <div className="text-dainamics-primary text-xs mt-1">This month</div>
                    </div>
                  </div>
                  
                  {/* Enhanced chart visualization */}
                  <div className="bg-dainamics-background/40 rounded-lg p-4 border border-dainamics-primary/20 mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-2 left-2">
                      <div className="flex items-center">
                        <BarChart3 className="h-4 w-4 text-dainamics-primary mr-2" />
                        <span className="text-xs font-medium text-dainamics-light">Performance Metrics</span>
                      </div>
                    </div>
                    
                    {/* Enhanced 3D-like visualization */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,16,0.8)_70%)]"></div>
                    
                    <div className="w-full h-32 relative z-10">
                      {/* Enhanced 3D chart */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-full">
                        <div className="w-1/12 h-[40%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[60%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[45%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[70%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[65%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[85%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[75%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[90%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[80%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                        <div className="w-1/12 h-[95%] bg-gradient-to-t from-dainamics-primary/90 to-dainamics-primary/30 rounded-t"></div>
                      </div>
                      
                      {/* Advanced line overlay with glow effect */}
                      <div className="absolute top-0 left-0 right-0 h-full flex items-center z-20">
                        <svg className="w-full h-20" viewBox="0 0 200 50">
                          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                          <path
                            d="M0,30 Q20,10 40,25 T80,15 T120,25 T160,5 T200,15"
                            fill="none"
                            stroke="#10E4FF"
                            strokeWidth="2"
                            filter="url(#glow)"
                          />
                          <path
                            d="M0,30 Q20,10 40,25 T80,15 T120,25 T160,5 T200,15"
                            fill="none"
                            stroke="#10E4FF"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                      
                      {/* Data points with pulse animation */}
                      <div className="absolute h-full w-full flex items-center">
                        <div className="h-2 w-2 rounded-full bg-dainamics-secondary absolute left-[20%] top-[30%] animate-pulse-glow"></div>
                        <div className="h-2 w-2 rounded-full bg-dainamics-secondary absolute left-[40%] top-[50%] animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                        <div className="h-2 w-2 rounded-full bg-dainamics-secondary absolute left-[60%] top-[30%] animate-pulse-glow" style={{animationDelay: '1s'}}></div>
                        <div className="h-2 w-2 rounded-full bg-dainamics-secondary absolute left-[80%] top-[10%] animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Agent status section */}
                  <div className="bg-dainamics-background/40 rounded-lg p-4 border border-dainamics-primary/20 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <Globe className="h-5 w-5 text-dainamics-primary opacity-30" />
                    </div>
                    
                    <div className="text-dainamics-light font-medium mb-3 flex items-center">
                      <span className="mr-2">Superhuman Agent Status</span>
                      <span className="px-1.5 py-0.5 bg-dainamics-primary/20 rounded text-xs">LIVE</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-dainamics-success animate-pulse mr-2"></div>
                          <span className="text-dainamics-light/80 text-sm">OmniResponse X</span>
                        </div>
                        <div className="text-dainamics-light/60 text-xs">Active - 24 tasks pending</div>
                      </div>
                      
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-dainamics-success animate-pulse mr-2"></div>
                          <span className="text-dainamics-light/80 text-sm">ContentForge Prime</span>
                        </div>
                        <div className="text-dainamics-light/60 text-xs">Active - 7 tasks pending</div>
                      </div>
                      
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-dainamics-cta animate-pulse mr-2"></div>
                          <span className="text-dainamics-light/80 text-sm">AcquisitionNova</span>
                        </div>
                        <div className="text-dainamics-light/60 text-xs">High activity - 42 leads</div>
                      </div>
                      
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-dainamics-success animate-pulse mr-2"></div>
                          <span className="text-dainamics-light/80 text-sm">OperaCore Quantum</span>
                        </div>
                        <div className="text-dainamics-light/60 text-xs">Active - 13 tasks pending</div>
                      </div>
                      
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-dainamics-success animate-pulse mr-2"></div>
                          <span className="text-dainamics-light/80 text-sm">CommandMatrix Elite</span>
                        </div>
                        <div className="text-dainamics-light/60 text-xs">Active - 3 tasks pending</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced glow effects */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-dainamics-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dainamics-secondary/20 rounded-full filter blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
