import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const glowContainerRef = useRef<HTMLDivElement>(null);
  const pulseEffectRef = useRef<HTMLDivElement>(null);
  const energyWavesContainerRef = useRef<HTMLDivElement>(null);
  const orbitalRingsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const isInView = useInView(heroRef, { once: true });

  // Effect for enhanced synchronization
  useEffect(() => {
    const brainVideo = videoRef.current;
    const glowContainer = glowContainerRef.current;
    const pulseEffect = pulseEffectRef.current;
    const energyWavesContainer = energyWavesContainerRef.current;
    
    if (!brainVideo || !glowContainer || !pulseEffect || !energyWavesContainer) return;
    
    // Create a canvas to analyze video content
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    
    canvas.width = 64;  // Small size for performance
    canvas.height = 36;
    
    // Variables to track electrical pulse intensity
    let lastBrightness = 0;
    let pulseThreshold = 0.08; // Slightly lower threshold to detect more pulses
    let isPulsing = false;
    let dynamicWaveCount = 0;
    const maxDynamicWaves = 8; // Limit to prevent performance issues
    
    // Function to analyze video content and detect electrical pulses
    function analyzeFrame() {
      if (brainVideo.readyState === brainVideo.HAVE_ENOUGH_DATA) {
        context.drawImage(brainVideo, 0, 0, canvas.width, canvas.height);
        const frameData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        
        // Analyze specifically for cyan/blue electrical activity
        let cyanActivity = 0;
        let pixelCount = 0;
        
        for (let i = 0; i < frameData.length; i += 4) {
          const red = frameData[i];
          const green = frameData[i+1];
          const blue = frameData[i+2];
          
          // Detect cyan/blue colors (high blue & green, low red)
          if (blue > 180 && green > 140 && red < 150) {
            cyanActivity += ((blue + green) / 2);
            pixelCount++;
          }
        }
        
        // Normalize cyan activity
        const normalizedActivity = pixelCount > 0 ? 
          (cyanActivity / pixelCount) / 255 : 0;
        
        // Detect significant changes in brightness (electrical pulse)
        const brightnessDelta = Math.abs(normalizedActivity - lastBrightness);
        
        // If we detect a significant pulse of electrical activity
        if (brightnessDelta > pulseThreshold && normalizedActivity > lastBrightness && !isPulsing) {
          // Generate multiple waves with varying sizes for major pulses
          if (brightnessDelta > pulseThreshold * 1.5) {
            triggerMultipleWaves(normalizedActivity);
          } else {
            triggerEnergyWave(normalizedActivity);
          }
          
          isPulsing = true;
          
          // Reset pulsing state after a delay
          setTimeout(() => {
            isPulsing = false;
          }, 300);
        }
        
        // Apply continuous effects based on activity level
        applyActivityEffects(normalizedActivity);
        
        // Update last brightness
        lastBrightness = normalizedActivity;
      }
      
      // Call again on next frame
      requestAnimationFrame(analyzeFrame);
    }
    
    // Function to trigger energy wave based on detected pulse
    function triggerEnergyWave(intensity: number) {
      if (dynamicWaveCount >= maxDynamicWaves) return;
      
      // Create a new energy wave element
      const waveElement = document.createElement('div');
      waveElement.classList.add('dynamic-energy-wave');
      dynamicWaveCount++;
      
      // Set size and position
      waveElement.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        width: 520px;
        height: 520px;
        border-radius: 50%;
        border: 2px solid rgba(16,228,255,${0.4 * intensity});
        box-shadow: 0 0 ${15 * intensity}px rgba(16,228,255,${0.5 * intensity});
        opacity: ${0.7 * intensity};
        pointer-events: none;
        z-index: -1;
      `;
      
      // Add to container
      energyWavesContainer.appendChild(waveElement);
      
      // Animate wave expansion
      const keyframes = [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 * intensity },
        { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
      ];
      
      const options = {
        duration: 2000 + (1000 * intensity),
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      };
      
      const animation = waveElement.animate(keyframes, options);
      
      // Remove element when animation completes
      animation.onfinish = () => {
        waveElement.remove();
        dynamicWaveCount--;
      };
      
      // Also trigger pulse effect
      if (pulseEffect) {
        pulseEffect.style.opacity = `${0.5 * intensity}`;
        pulseEffect.style.animation = 'none';
        setTimeout(() => {
          if (pulseEffect) {
            pulseEffect.style.animation = 'pulse 2s ease-out';
          }
        }, 10);
      }
    }
    
    // Generate multiple waves of varying sizes for major pulses
    function triggerMultipleWaves(intensity: number) {
      // Generate 3 waves with different sizes and timing
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          if (dynamicWaveCount >= maxDynamicWaves) return;
          
          // Create wave element
          const waveElement = document.createElement('div');
          waveElement.classList.add('dynamic-energy-wave');
          dynamicWaveCount++;
          
          // Vary the size and opacity based on index
          const sizeVariation = 1 + (i * 0.2);
          const opacityVariation = 1 - (i * 0.2);
          
          waveElement.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            width: ${520 * sizeVariation}px;
            height: ${520 * sizeVariation}px;
            border-radius: 50%;
            border: 2px solid rgba(16,228,255,${0.4 * intensity * opacityVariation});
            box-shadow: 0 0 ${15 * intensity}px rgba(16,228,255,${0.5 * intensity * opacityVariation});
            opacity: ${0.7 * intensity * opacityVariation};
            pointer-events: none;
            z-index: -1;
          `;
          
          energyWavesContainer.appendChild(waveElement);
          
          // Larger reach for major pulses
          const scale = 3 + (i * 0.5);
          
          const keyframes = [
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 * intensity * opacityVariation },
            { transform: `translate(-50%, -50%) scale(${scale})`, opacity: 0 }
          ];
          
          const options = {
            duration: 2500 + (i * 500),
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
          };
          
          const animation = waveElement.animate(keyframes, options);
          
          animation.onfinish = () => {
            waveElement.remove();
            dynamicWaveCount--;
          };
        }, i * 200); // Stagger the wave generation
      }
      
      // Trigger an especially strong pulse effect
      if (pulseEffect) {
        pulseEffect.style.opacity = `${0.7 * intensity}`;
        pulseEffect.style.animation = 'none';
        setTimeout(() => {
          if (pulseEffect) {
            pulseEffect.style.animation = 'pulse 2.5s ease-out';
          }
        }, 10);
      }
    }
    
    // Apply continuous effects based on activity level
    function applyActivityEffects(activity: number) {
      // Adjust orbital rings opacity and glow
      orbitalRingsRef.current.forEach((ring) => {
        if (ring) {
          ring.style.opacity = `${0.3 + (activity * 0.5)}`;
          ring.style.boxShadow = `0 0 ${20 + (activity * 30)}px rgba(16,228,255,${0.1 + (activity * 0.3)})`;
        }
      });
      
      // Adjust glow container
      glowContainer.style.boxShadow = `0 0 ${30 + (activity * 50)}px rgba(16,228,255,${0.1 + (activity * 0.2)})`;
    }
    
    // Start analysis when video is playing
    brainVideo.addEventListener('play', function() {
      analyzeFrame();
    });
    
    // Force playback if video is ready
    if (brainVideo.readyState >= 3) {
      analyzeFrame();
    }
    
    return () => {
      brainVideo.removeEventListener('play', analyzeFrame);
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen py-24 flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="hero-section">
          {/* Content - Final vertical alignment adjustment */}
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-[0.95]"
            >
              <span className="text-dainamics-light">Vous Perdez</span>
              <br />
              <span className="text-gradient-primary glow text-6xl md:text-8xl lg:text-9xl">15 Heures</span>
              <br />
              <span className="text-dainamics-light">Par Semaine</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-dainamics-light/70 text-2xl md:text-3xl mb-10 font-light tracking-wide"
            >
              Facturation. Emails. Saisie.
              <br />
              <span className="text-dainamics-secondary font-medium">On automatise tout ça.</span>
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mt-2"
            >
              <Button 
                asChild
                size="lg"
                className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow font-bold text-lg md:text-xl px-10 py-7 power-pulse shadow-2xl shadow-dainamics-cta/50"
              >
                <a href="#diagnostic">
                  Parler à un expert
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-dainamics-secondary text-dainamics-secondary hover:bg-dainamics-secondary/10 font-semibold text-lg md:text-xl px-10 py-7"
              >
                <a href="#diagnostic">
                  Calculer mes économies
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Brain Animation */}
          <motion.div 
            className="brain-animation-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Energy waves container */}
            <div className="energy-waves-container" ref={energyWavesContainerRef}>
              <div className="energy-wave wave-1"></div>
              <div className="energy-wave wave-2"></div>
              <div className="energy-wave wave-3"></div>
              <div className="energy-wave wave-4"></div>
              <div className="energy-wave wave-5"></div>
            </div>
            
            {/* Enhanced glow container */}
            <div className="glow-container" ref={glowContainerRef}>
              {/* Orbital rings */}
              <div 
                className="orbital-ring ring-1"
                ref={el => orbitalRingsRef.current[0] = el}
              ></div>
              <div 
                className="orbital-ring ring-2"
                ref={el => orbitalRingsRef.current[1] = el}
              ></div>
              
              {/* Brain video with mask */}
              <div className="brain-video-container">
                {/* Brightness filter */}
                <div className="brightness-filter"></div>
                <div className="video-mask-overlay"></div>
                <video 
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="brain-animation"
                >
                  <source src="/assets/videos/AdobeStock_1308604697.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Enhanced pulse effect */}
              <div className="pulse-effect" ref={pulseEffectRef}></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-dainamics-light/50 text-sm mb-2">Découvrez comment</span>
        <div className="h-16 w-1 rounded-full bg-dainamics-light/10 overflow-hidden">
          <div className="h-1/3 w-full bg-dainamics-primary animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        </div>
      </div>

      {/* Add required CSS for the hero layout & new brain effects */}
      <style>
        {`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px 0 80px;
          max-width: 1400px;
          margin: 0 auto;
          gap: 40px;
          min-height: 85vh;
        }

        .hero-content {
          flex: 1;
          max-width: 650px;
          padding-top: 0;
          margin-top: -20px;
        }

        /* Brain Animation Advanced Styling */
        .brain-animation-wrapper {
          position: relative;
          width: 700px;
          height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          margin-right: -50px;
          margin-top: 0;
        }

        /* Energy Waves - NEW ELEMENT */
        .energy-waves-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .energy-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          background: transparent;
          border: 2px solid rgba(16,228,255,0);
          box-shadow: 0 0 10px rgba(16,228,255,0);
          opacity: 1;
          pointer-events: none;
          animation: energy-wave-animation 6s infinite;
        }

        .wave-1 { animation-delay: 0s; width: 520px; height: 520px; }
        .wave-2 { animation-delay: 1.5s; width: 520px; height: 520px; }
        .wave-3 { animation-delay: 3s; width: 520px; height: 520px; }
        .wave-4 { animation-delay: 4.5s; width: 520px; height: 520px; }
        .wave-5 { animation-delay: 6s; width: 520px; height: 520px; animation: extended-wave-animation 10s infinite; }

        @keyframes energy-wave-animation {
          0% {
            transform: translate(-50%, -50%) scale(1);
            border-color: rgba(16,228,255,0.5);
            box-shadow: 0 0 15px rgba(16,228,255,0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            border-color: rgba(16,228,255,0);
            box-shadow: 0 0 5px rgba(16,228,255,0);
            opacity: 0;
          }
        }

        /* Extended wave animation for the largest wave */
        @keyframes extended-wave-animation {
          0% {
            transform: translate(-50%, -50%) scale(1);
            border-color: rgba(16,228,255,0.4);
            box-shadow: 0 0 15px rgba(16,228,255,0.4);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.5);
            border-color: rgba(16,228,255,0);
            box-shadow: 0 0 5px rgba(16,228,255,0);
            opacity: 0;
          }
        }

        .dynamic-energy-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          width: 520px;
          height: 520px;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
        }

        /* Glow Container - Creates the base effect */
        .glow-container {
          position: relative;
          width: 600px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16,228,255,0.08) 0%, rgba(16,228,255,0) 70%);
          box-shadow: 0 0 40px rgba(16,228,255,0.2);
          transition: box-shadow 0.5s ease;
        }

        /* Orbital rings that rotate around the brain */
        .orbital-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(16,228,255,0.25);
          box-shadow: 0 0 25px rgba(16,228,255,0.35);
          opacity: 0.7;
          transition: opacity 0.3s ease, box-shadow 0.3s ease;
        }

        .ring-1 {
          width: 590px;
          height: 590px;
          animation: rotate-ring 20s linear infinite;
        }

        .ring-2 {
          width: 540px;
          height: 540px;
          animation: rotate-ring 15s linear infinite reverse;
        }

        @keyframes rotate-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Brain video container */
        .brain-video-container {
          position: relative;
          width: 500px;
          height: 500px;
          overflow: hidden;
          border-radius: 50%;
          background: transparent;
          box-shadow: 0 0 40px rgba(16,228,255,0.15) inset;
        }

        /* Brightness filter */
        .brightness-filter {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0);
          z-index: 3;
          pointer-events: none;
        }

        /* Video element styling */
        .brain-animation {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: cover;
        }

        /* Video mask overlay to soften the edges */
        .video-mask-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            transparent 70%,
            rgba(5,5,16,0.6) 95%,
            rgba(5,5,16,0.8) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Enhanced pulse effect */
        .pulse-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.95);
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(16,228,255,0.1) 0%,
            rgba(16,228,255,0) 70%
          );
          opacity: 0;
          animation: pulse 2s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0;
          }
        }

        /* Media queries for responsiveness with adjusted vertical alignment */
        @media (max-width: 1200px) {
          .brain-animation-wrapper {
            width: 600px;
            height: 600px;
          }
          
          .glow-container {
            width: 520px;
            height: 520px;
          }
          
          .brain-video-container {
            width: 440px;
            height: 440px;
          }
          
          .hero-content {
            margin-top: -5px;
          }
          
          .ring-1 { width: 510px; height: 510px; }
          .ring-2 { width: 480px; height: 480px; }
          .pulse-effect { width: 460px; height: 460px; }
          .wave-1, .wave-2, .wave-3, .wave-4, .dynamic-energy-wave { 
            width: 460px; 
            height: 460px; 
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 20px 40px;
            min-height: auto;
          }
          
          .hero-content {
            padding-right: 0;
            margin-bottom: 40px;
            text-align: center;
            padding-top: 0;
            margin-top: 0;
          }
          
          .brain-animation-wrapper {
            width: 500px;
            height: 500px;
            justify-content: center;
            margin-right: 0;
            margin-top: 0;
          }
          
          .glow-container {
            width: 420px;
            height: 420px;
          }
          
          .brain-video-container {
            width: 360px;
            height: 360px;
          }
          
          .ring-1 { width: 410px; height: 410px; }
          .ring-2 { width: 380px; height: 380px; }
          .pulse-effect { width: 370px; height: 370px; }
          .wave-1, .wave-2, .wave-3, .wave-4, .wave-5, .dynamic-energy-wave { 
            width: 370px; 
            height: 370px; 
          }
        }

        @media (max-width: 576px) {
          .hero-content {
            margin-top: 0;
          }
          
          .hero-content h1 {
            font-size: 2.5rem !important;
            line-height: 1 !important;
          }
          
          .hero-content h1 span:nth-child(2) {
            font-size: 3.5rem !important;
          }
          
          .hero-content p {
            font-size: 1.125rem !important;
          }
          
          .brain-animation-wrapper {
            width: 340px;
            height: 340px;
          }
          
          .glow-container {
            width: 300px;
            height: 300px;
          }
          
          .brain-video-container {
            width: 260px;
            height: 260px;
          }
          
          .ring-1 { width: 290px; height: 290px; }
          .ring-2 { width: 270px; height: 270px; }
          .pulse-effect { width: 270px; height: 270px; }
          .wave-1, .wave-2, .wave-3, .wave-4, .wave-5, .dynamic-energy-wave { 
            width: 270px; 
            height: 270px; 
          }
        }
        `}
      </style>
    </section>
  );
}