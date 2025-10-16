import React from 'react';
import { Clock, Zap, Star, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const MetricsConfidence: React.FC = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const metrics = [
    {
      icon: Clock,
      value: 15,
      suffix: '',
      label: 'Heures Économisées',
      sublabel: 'Par Semaine',
      duration: 1.5,
      decimals: 0,
    },
    {
      icon: Zap,
      value: 2,
      suffix: '',
      label: 'Semaines',
      sublabel: 'Livraison Moyenne',
      duration: 1.2,
      decimals: 0,
    },
    {
      icon: Star,
      value: 99,
      suffix: '%',
      label: 'Satisfaction',
      sublabel: 'Clients',
      duration: 1.8,
      decimals: 0,
    },
    {
      icon: TrendingUp,
      value: 5,
      prefix: 'x',
      suffix: '',
      label: 'ROI Moyen',
      sublabel: 'En 6 Mois',
      duration: 1.3,
      decimals: 0,
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
    <section className="metrics-confidence-section py-20 bg-[#050510] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dainamics-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="metrics-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="metric-card text-center"
              >
                {/* Icon */}
                <div className="icon-wrapper mb-6 mx-auto w-16 h-16 rounded-xl bg-gradient-to-br from-dainamics-primary/20 to-dainamics-secondary/20 border border-dainamics-primary/30 flex items-center justify-center">
                  <Icon
                    className="w-8 h-8 text-dainamics-secondary"
                    strokeWidth={2}
                  />
                </div>

                {/* Counter Value */}
                <div className="metric-value mb-4">
                  <motion.h3
                    className="text-7xl font-bold bg-gradient-to-r from-dainamics-primary via-dainamics-secondary to-dainamics-primary bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {metric.prefix}{metric.value}{metric.suffix}
                  </motion.h3>
                </div>

                {/* Labels */}
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
