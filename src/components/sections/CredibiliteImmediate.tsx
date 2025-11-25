import React, { useRef, useEffect, useState } from 'react';
import { Clock, Zap, TrendingUp, CalendarCheck } from 'lucide-react';
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

interface Logo {
  name: string;
  filename: string;
  scale?: number;
  type: 'enterprise' | 'pme' | 'project';
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

const CredibiliteImmediate: React.FC = () => {
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

  // Métriques HONNÊTES avec preuves vérifiables
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
  ];

  // Logos MIX : Projets DAINAMICS + Grandes entreprises + PME partenaires
  const logos: Logo[] = [
    // Projets DAINAMICS (showcase)
    { name: 'LEXAIA', filename: 'lexaia.svg', scale: 1.2, type: 'project' },
    { name: 'ΣNKI REALTY', filename: 'enki-realty.svg', scale: 1.2, type: 'project' },
    // Grandes entreprises (crédibilité)
    { name: 'Roche', filename: 'roche.png', type: 'enterprise' },
    { name: 'Novartis', filename: 'novartis.png', scale: 2, type: 'enterprise' },
    { name: 'Tissot', filename: 'tissot.png', scale: 2, type: 'enterprise' },
    { name: 'Coop', filename: 'coop.png', type: 'enterprise' },
    { name: 'InterContinental Hotels Group', filename: 'ihg.png', type: 'enterprise' },
    { name: 'Philip Morris International', filename: 'pmi.png', type: 'enterprise' },
    // PME partenaires
    { name: 'Creative Circle Group', filename: 'creative-circle-group.png', type: 'pme' },
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
      className="metrics-confidence-section py-24 relative overflow-hidden bg-dainamics-background"
      role="region"
      aria-labelledby="credibilite-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dainamics-secondary/3 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header avec preuve */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="credibilite-heading" className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Résultats Mesurés,</span>{' '}
            <span className="text-dainamics-secondary">Pas Promis</span>
          </h2>
          <p className="text-xl text-gray-400">
            Chiffres issus de nos projets réels, pas de promesses marketing
          </p>
        </motion.div>

        {/* Métriques avec preuves */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="metrics-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
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
                <motion.div
                  style={{ y: iconY }}
                  className="metric-icon-wrapper mb-6 mx-auto w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500"
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </motion.div>

                <div className="metric-value mb-4">
                  <motion.h3
                    id={`metric-${index}`}
                    className="text-6xl md:text-7xl font-bold leading-tight metric-number"
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
                  <p className="text-xl font-semibold text-gradient-primary mb-1">
                    {metric.label}
                  </p>
                  <p className="text-base text-gray-400 mb-2">{metric.sublabel}</p>
                  
                  {/* Preuve concrète */}
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

        {/* Séparateur */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-3/4 mx-auto mb-16 bg-gradient-to-r from-transparent via-dainamics-primary/20 to-transparent"
        />

        {/* Section Logos avec message inclusif */}
        <div className="trusted-clients-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">De la PME de 15 personnes</span>
              <br />
              <span className="text-dainamics-secondary">aux leaders mondiaux</span>
            </h3>
          </motion.div>

          {/* Carousel logos */}
          <div className="logo-carousel-wrapper" role="region" aria-label="Carrousel de logos clients" aria-live="off">
            <div className="logo-track">
              {logos.map((logo, index) => (
                <div
                  key={`original-${index}`}
                  className="logo-item"
                  title={logo.name}
                  role="img"
                  aria-label={`Logo ${logo.name}`}
                  tabIndex={0}
                >
                  <img
                    src={`/logos-clients/${logo.filename}`}
                    alt={`Logo ${logo.name}`}
                    loading="lazy"
                    draggable="false"
                    style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                  />
                </div>
              ))}

              {logos.map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="logo-item"
                  title={logo.name}
                  role="img"
                  aria-label={`Logo ${logo.name}`}
                >
                  <img
                    src={`/logos-clients/${logo.filename}`}
                    alt={`Logo ${logo.name}`}
                    loading="lazy"
                    draggable="false"
                    style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Message rassurant pour PME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-dainamics-primary/5 via-dainamics-secondary/5 to-dainamics-primary/5 border border-white/10">
              <p className="text-center text-gray-300 text-lg leading-relaxed">
                Que vous soyez une PME de 15 personnes ou un groupe international,
                notre méthodologie s'adapte à votre réalité.
                {' '}<span className="text-white font-medium">Même rigueur, même résultats.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredibiliteImmediate;
