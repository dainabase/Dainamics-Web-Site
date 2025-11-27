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
      className="relative w-full bg-dainamics-background"
      style={{ zIndex: 1 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 z-0"></div>

      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 sm:py-20 md:py-24 lg:py-32 gap-8 lg:gap-12 min-h-[80vh] md:min-h-[85vh]">

          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={isMobile ? undefined : fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight"
            >
              <span className="text-dainamics-light">Vos Outils Actuels</span>
              <br />
              <span className="text-gradient-primary glow text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Vous Freinent</span>
            </motion.h1>

            <motion.p
              variants={isMobile ? undefined : fadeInUp}
              className="text-dainamics-light/70 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 font-light tracking-wide"
            >
              Processus manuels. Logiciels inadaptés. Données éparpillées.
              <br />
              <span className="text-dainamics-secondary font-medium">On construit les solutions qui vous font gagner.</span>
            </motion.p>

            <motion.div
              variants={isMobile ? undefined : fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-dainamics-cta text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(123,47,255,0.6)] active:scale-95 w-full sm:w-auto"
              >
                <a href="#diagnostic" className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">Parler à un expert</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-dainamics-secondary text-dainamics-secondary hover:bg-dainamics-secondary/10 font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <a href="#diagnostic" className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">Calculer mes économies</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Background (Desktop only) */}
          {!isMobile && (
            <div className="hidden lg:block lg:w-1/2">
              <Suspense fallback={
                <div className="w-full h-[500px] xl:h-[600px] flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-dainamics-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              }>
                <Hero3DBackground />
              </Suspense>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center cursor-pointer"
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
    </section>
  );
}
