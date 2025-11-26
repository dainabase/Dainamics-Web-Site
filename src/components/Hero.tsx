import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero3DBackground = lazy(() => import('./Hero3DBackground'));

export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen py-20 sm:py-24 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="hero-section">
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={isMobile ? undefined : fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-8 tracking-tight leading-[1.1] md:leading-[0.95]"
            >
              <span className="text-dainamics-light">Vous Perdez</span>
              <br />
              <span className="text-gradient-primary glow text-5xl sm:text-6xl md:text-8xl lg:text-9xl">15 Heures</span>
              <br />
              <span className="text-dainamics-light">Par Semaine</span>
            </motion.h1>

            <motion.p
              variants={isMobile ? undefined : fadeInUp}
              className="text-dainamics-light/70 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 font-light tracking-wide"
            >
              Facturation. Emails. Saisie.
              <br />
              <span className="text-dainamics-secondary font-medium">On automatise tout ça.</span>
            </motion.p>

            <motion.div
              variants={isMobile ? undefined : fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Button
                asChild
                size="lg"
                className="bg-dainamics-cta text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(123,47,255,0.6)] active:scale-95 w-full sm:w-auto"
              >
                <a href="#diagnostic" className="flex items-center justify-center">
                  <span className="whitespace-nowrap">Parler à un expert</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-dainamics-secondary text-dainamics-secondary hover:bg-dainamics-secondary/10 font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <a href="#diagnostic" className="flex items-center justify-center">
                  <span className="whitespace-nowrap">Calculer mes économies</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {isMobile ? (
            <div className="brain-animation-wrapper-mobile">
              <div className="mobile-placeholder">
                <div className="mobile-glow"></div>
              </div>
            </div>
          ) : (
            <Suspense fallback={
              <div className="brain-animation-wrapper">
                <div className="loading-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              </div>
            }>
              <Hero3DBackground />
            </Suspense>
          )}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="32"
            height="48"
            viewBox="0 0 32 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="46"
              rx="15"
              stroke="url(#scroll-gradient)"
              strokeWidth="2"
            />
            <motion.circle
              cx="16"
              cy="12"
              r="4"
              fill="url(#scroll-gradient)"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="scroll-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10E4FF" />
                <stop offset="100%" stopColor="#0AFF9D" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      <style>
        {`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0 60px;
          max-width: 1400px;
          margin: 0 auto;
          gap: 40px;
          min-height: 70vh;
        }

        .hero-content {
          flex: 1;
          max-width: 650px;
          padding-top: 0;
          margin-top: -20px;
          width: 100%;
        }

        .loading-placeholder,
        .mobile-placeholder {
          width: 700px;
          height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16,228,255,0.05) 0%, rgba(16,228,255,0) 70%);
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 3px solid rgba(16,228,255,0.1);
          border-top-color: rgba(16,228,255,0.8);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .mobile-glow {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16,228,255,0.15) 0%, rgba(16,228,255,0) 70%);
          animation: pulse-mobile 3s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-mobile {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .brain-animation-wrapper-mobile {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }

        @media (max-width: 1200px) {
          .loading-placeholder,
          .mobile-placeholder {
            width: 600px;
            height: 600px;
          }

          .hero-content {
            margin-top: -5px;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column;
            padding: 20px 0 40px;
            min-height: auto;
            gap: 20px;
          }

          .hero-content {
            padding-right: 0;
            margin-bottom: 20px;
            text-align: center;
            padding-top: 0;
            margin-top: 0;
          }

          .loading-placeholder,
          .mobile-placeholder,
          .brain-animation-wrapper-mobile {
            width: 100%;
            max-width: 400px;
            height: 300px;
            display: none;
          }

          .mobile-glow {
            width: 100%;
            max-width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 10px 0 30px;
            min-height: auto;
          }

          .hero-content {
            margin-top: 0;
            padding: 0;
            margin-bottom: 0;
          }

          .loading-placeholder,
          .mobile-placeholder,
          .brain-animation-wrapper-mobile {
            display: none;
          }

          .mobile-glow {
            display: none;
          }
        }
        `}
      </style>
    </section>
  );
}
