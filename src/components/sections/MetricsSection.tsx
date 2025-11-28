import React, { useRef, useEffect, useState } from 'react';
import { Clock, Zap, TrendingUp, CalendarCheck, Shield } from 'lucide-react';
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface Metric {
  icon: any;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  proof: string;
  duration: number;
  color: {
    primary: string;
    secondary: string;
    glow: string;
    glowHover: string;
  };
  parallaxRange: [number, number];
}

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

const MetricsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 5 Métriques HONNÊTES avec preuves vérifiables
  const metrics: Metric[] = [
    {
      icon: Clock,
      value: 15,
      suffix: 'h',
      label: 'Économisées',
      sublabel: 'Par Semaine',
      proof: 'Cas ΣNKI REALTY',
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
      suffix: ' sem',
      label: 'Livraison',
      sublabel: 'Quick Wins',
      proof: 'Délai garanti',
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
      icon: TrendingUp,
      value: 280,
      suffix: '%',
      label: 'ROI Moyen',
      sublabel: 'Première Année',
      proof: 'Projets Quick Win',
      duration: 1.3,
      color: {
        primary: '#7B2FFF',
        secondary: '#5E24BF',
        glow: 'rgba(123, 47, 255, 0.6)',
        glowHover: 'rgba(123, 47, 255, 0.9)',
      },
      parallaxRange: [40, -40],
    },
    {
      icon: CalendarCheck,
      value: 3,
      suffix: ' mois',
      label: 'Breakeven',
      sublabel: 'Moyen',
      proof: 'Garanti ou remboursé',
      duration: 1.4,
      color: {
        primary: '#FF5A00',
        secondary: '#D94A00',
        glow: 'rgba(255, 90, 0, 0.6)',
        glowHover: 'rgba(255, 90, 0, 0.9)',
      },
      parallaxRange: [60, -60],
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Datacenter',
      sublabel: 'Suisse',
      proof: 'Conformité RGPD',
      duration: 1.5,
      color: {
        primary: '#EF4444',
        secondary: '#DC2626',
        glow: 'rgba(239, 68, 68, 0.6)',
        glowHover: 'rgba(239, 68, 68, 0.9)',
      },
      parallaxRange: [35, -35],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="metrics-confidence-section py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-adaptive"
      role="region"
      aria-labelledby="credibilite-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header avec preuve */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 id="credibilite-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-adaptive">Résultats Mesurés.</span>
            <br />
            <span className="text-adaptive">Pas Promis.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-adaptive-muted px-4">
            Chiffres issus de nos projets réels, pas de promesses marketing
          </p>
        </motion.div>

        {/* 5 Métriques avec preuves - Grid responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="metrics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
          role="list"
          aria-label="Métriques de performance"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
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
                role="listitem"
                aria-labelledby={`metric-${index}`}
                style={{
                  '--metric-color-primary': metric.color.primary,
                  '--metric-color-secondary': metric.color.secondary,
                  '--metric-glow': metric.color.glow,
                  '--metric-glow-hover': metric.color.glowHover,
                } as React.CSSProperties}
              >
                <div className="metric-value mb-4">
                  <motion.h3
                    id={`metric-${index}`}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight metric-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
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
                  <p className="text-base sm:text-lg font-semibold text-gradient-primary mb-1">
                    {metric.label}
                  </p>
                  <p className="text-sm text-adaptive-muted mb-2">{metric.sublabel}</p>

                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mt-2"
                    style={{
                      backgroundColor: `${metric.color.primary}15`,
                      color: metric.color.primary,
                      border: `1px solid ${metric.color.primary}30`
                    }}
                  >
                    {metric.proof}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
