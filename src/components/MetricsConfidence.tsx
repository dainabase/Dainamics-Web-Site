import React, { useRef, useEffect, useState } from 'react';
import { Clock, Zap, Star, TrendingUp } from 'lucide-react';
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const AnimatedCounter: React.FC<{
  value: number;
  duration: number;
  inView: boolean;
  prefix?: string;
  suffix?: string;
}> = ({ value, duration, inView, prefix = '', suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <>
      {prefix}{displayValue}{suffix}
    </>
  );
};

const MetricsConfidence: React.FC = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const metrics = [
    {
      icon: Clock,
      value: 15,
      suffix: '',
      label: 'Heures Économisées',
      sublabel: 'Par Semaine',
      duration: 1.5,
      color: {
        primary: '#0AFF9D',
        secondary: '#06D989',
        glow: 'rgba(10, 255, 157, 0.6)',
        glowHover: 'rgba(10, 255, 157, 0.9)',
      },
      parallaxRange: [50, -50],
    },
    {
      icon: Zap,
      value: 2,
      suffix: '',
      label: 'Semaines',
      sublabel: 'Livraison Moyenne',
      duration: 1.2,
      color: {
        primary: '#10E4FF',
        secondary: '#0CB4D4',
        glow: 'rgba(16, 228, 255, 0.6)',
        glowHover: 'rgba(16, 228, 255, 0.9)',
      },
      parallaxRange: [30, -30],
    },
    {
      icon: Star,
      value: 99,
      suffix: '%',
      label: 'Satisfaction',
      sublabel: 'Clients',
      duration: 1.8,
      color: {
        primary: '#7B2FFF',
        secondary: '#5E24BF',
        glow: 'rgba(123, 47, 255, 0.6)',
        glowHover: 'rgba(123, 47, 255, 0.9)',
      },
      parallaxRange: [40, -40],
    },
    {
      icon: TrendingUp,
      value: 5,
      prefix: 'x',
      suffix: '',
      label: 'ROI Moyen',
      sublabel: 'En 6 Mois',
      duration: 1.3,
      color: {
        primary: '#FF5A00',
        secondary: '#D94A00',
        glow: 'rgba(255, 90, 0, 0.6)',
        glowHover: 'rgba(255, 90, 0, 0.9)',
      },
      parallaxRange: [60, -60],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="metrics-confidence-section py-24 relative overflow-hidden"
    >

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Les Résultats{' '}
            <span className="bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent">
              Parlent
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Des chiffres concrets, pas de promesses vides
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="metrics-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            const [isMobile, setIsMobile] = React.useState(false);

            React.useEffect(() => {
              const checkMobile = () => {
                setIsMobile(window.innerWidth < 768);
              };

              checkMobile();
              window.addEventListener('resize', checkMobile);

              return () => window.removeEventListener('resize', checkMobile);
            }, []);

            const iconY = useTransform(
              scrollYProgress,
              [0, 1],
              isMobile ? [0, 0] : metric.parallaxRange
            );

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="metric-card text-center group"
                style={
                  {
                    '--metric-color-primary': metric.color.primary,
                    '--metric-color-secondary': metric.color.secondary,
                    '--metric-glow': metric.color.glow,
                    '--metric-glow-hover': metric.color.glowHover,
                  } as React.CSSProperties
                }
              >
                <motion.div
                  style={{ y: iconY }}
                  className="icon-wrapper mb-6 mx-auto w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500"
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </motion.div>

                <div className="metric-value mb-4">
                  <motion.h3
                    className="text-7xl md:text-8xl font-bold leading-tight metric-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  >
                    <AnimatedCounter
                      value={metric.value}
                      duration={metric.duration}
                      inView={inView}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </motion.h3>
                </div>

                <div className="metric-labels">
                  <p className="text-xl font-semibold text-white mb-1">
                    {metric.label}
                  </p>
                  <p className="text-base text-gray-400">{metric.sublabel}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsConfidence;
