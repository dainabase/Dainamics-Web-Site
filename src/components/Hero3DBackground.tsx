import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero3DBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const glowContainerRef = useRef<HTMLDivElement>(null);
  const pulseEffectRef = useRef<HTMLDivElement>(null);
  const energyWavesContainerRef = useRef<HTMLDivElement>(null);
  const orbitalRingsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const brainVideo = videoRef.current;
    const glowContainer = glowContainerRef.current;
    const pulseEffect = pulseEffectRef.current;
    const energyWavesContainer = energyWavesContainerRef.current;

    if (!brainVideo || !glowContainer || !pulseEffect || !energyWavesContainer) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return;

    canvas.width = 64;
    canvas.height = 36;

    let lastBrightness = 0;
    let pulseThreshold = 0.08;
    let isPulsing = false;
    let dynamicWaveCount = 0;
    const maxDynamicWaves = 8;

    function analyzeFrame() {
      if (brainVideo.readyState === brainVideo.HAVE_ENOUGH_DATA) {
        context.drawImage(brainVideo, 0, 0, canvas.width, canvas.height);
        const frameData = context.getImageData(0, 0, canvas.width, canvas.height).data;

        let cyanActivity = 0;
        let pixelCount = 0;

        for (let i = 0; i < frameData.length; i += 4) {
          const red = frameData[i];
          const green = frameData[i+1];
          const blue = frameData[i+2];

          if (blue > 180 && green > 140 && red < 150) {
            cyanActivity += ((blue + green) / 2);
            pixelCount++;
          }
        }

        const normalizedActivity = pixelCount > 0 ?
          (cyanActivity / pixelCount) / 255 : 0;

        const brightnessDelta = Math.abs(normalizedActivity - lastBrightness);

        if (brightnessDelta > pulseThreshold && normalizedActivity > lastBrightness && !isPulsing) {
          if (brightnessDelta > pulseThreshold * 1.5) {
            triggerMultipleWaves(normalizedActivity);
          } else {
            triggerEnergyWave(normalizedActivity);
          }

          isPulsing = true;
          setTimeout(() => { isPulsing = false; }, 300);
        }

        applyActivityEffects(normalizedActivity);
        lastBrightness = normalizedActivity;
      }

      requestAnimationFrame(analyzeFrame);
    }

    function triggerEnergyWave(intensity: number) {
      if (dynamicWaveCount >= maxDynamicWaves) return;

      const waveElement = document.createElement('div');
      waveElement.classList.add('dynamic-energy-wave');
      dynamicWaveCount++;

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
        z-index: 1;
      `;

      energyWavesContainer.appendChild(waveElement);

      const keyframes = [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 * intensity },
        { transform: 'translate(-50%, -50%) scale(2.5)', opacity: 0 }
      ];

      const options = {
        duration: 2000 + (1000 * intensity),
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      };

      const animation = waveElement.animate(keyframes, options);

      animation.onfinish = () => {
        waveElement.remove();
        dynamicWaveCount--;
      };

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

    function triggerMultipleWaves(intensity: number) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          if (dynamicWaveCount >= maxDynamicWaves) return;

          const waveElement = document.createElement('div');
          waveElement.classList.add('dynamic-energy-wave');
          dynamicWaveCount++;

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
            z-index: 1;
          `;

          energyWavesContainer.appendChild(waveElement);

          const scale = 3.5 + (i * 0.5);

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
        }, i * 200);
      }

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

    function applyActivityEffects(activity: number) {
      orbitalRingsRef.current.forEach((ring) => {
        if (ring) {
          ring.style.opacity = `${0.3 + (activity * 0.5)}`;
          ring.style.boxShadow = `0 0 ${20 + (activity * 30)}px rgba(16,228,255,${0.1 + (activity * 0.3)})`;
        }
      });

      glowContainer.style.boxShadow = `0 0 ${30 + (activity * 50)}px rgba(16,228,255,${0.1 + (activity * 0.2)})`;
    }

    brainVideo.addEventListener('play', function() {
      analyzeFrame();
    });

    if (brainVideo.readyState >= 3) {
      analyzeFrame();
    }

    return () => {
      brainVideo.removeEventListener('play', analyzeFrame);
    };
  }, []);

  return (
    <motion.div
      className="brain-animation-wrapper"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="energy-waves-container" ref={energyWavesContainerRef}>
        <div className="energy-wave wave-1"></div>
        <div className="energy-wave wave-2"></div>
        <div className="energy-wave wave-3"></div>
        <div className="energy-wave wave-4"></div>
        <div className="energy-wave wave-5"></div>
      </div>

      <div className="glow-container" ref={glowContainerRef}>
        <div
          className="orbital-ring ring-1"
          ref={el => orbitalRingsRef.current[0] = el}
        ></div>
        <div
          className="orbital-ring ring-2"
          ref={el => orbitalRingsRef.current[1] = el}
        ></div>

        <div className="brain-video-container">
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

        <div className="pulse-effect" ref={pulseEffectRef}></div>
      </div>

      <style>
        {`
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
          overflow: visible;
        }

        .energy-waves-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: 50;
          pointer-events: none;
        }

        .energy-wave,
        .dynamic-energy-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
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

        .brain-video-container {
          position: relative;
          width: 500px;
          height: 500px;
          overflow: hidden;
          border-radius: 50%;
          background: transparent;
          box-shadow: 0 0 40px rgba(16,228,255,0.15) inset;
        }

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

          .ring-1 { width: 510px; height: 510px; }
          .ring-2 { width: 480px; height: 480px; }
          .pulse-effect { width: 460px; height: 460px; }
        }

        @media (max-width: 992px) {
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
        }

        @media (max-width: 576px) {
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
        }
        `}
      </style>
    </motion.div>
  );
}
