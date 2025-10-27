import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Eye, TrendingUp } from 'lucide-react';

interface Differentiator {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: 'primary' | 'secondary' | 'success';
}

const differentiatorsData: Differentiator[] = [
  {
    id: 'swiss-quality',
    icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Swiss Quality',
    subtitle: 'Excellence & Précision',
    description: 'Infrastructure 100% suisse, conformité RGPD stricte, support local réactif. Vos données restent en Suisse, votre business reste confidentiel.',
    features: [
      'Hébergement Suisse certifié',
      'Support en français <4h',
      'Conformité RGPD + LPD',
      'Code source auditable'
    ],
    color: 'primary'
  },
  {
    id: 'transparent',
    icon: <Eye className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Transparence Totale',
    subtitle: 'Zéro Frais Cachés',
    description: 'Prix clairs dès le départ. Timeline réaliste. Démos fonctionnelles chaque sprint. Vous savez exactement où va votre budget.',
    features: [
      'Pricing public détaillé',
      'Roadmap partagée temps réel',
      'Démos hebdomadaires',
      'Facturation au réel'
    ],
    color: 'secondary'
  },
  {
    id: 'roi-focus',
    icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Focus ROI',
    subtitle: 'Résultats Mesurables',
    description: 'Chaque projet commence par une analyse ROI. Quick wins en 2-4 semaines. Dashboard de métriques business inclus. Pas de tech pour la tech.',
    features: [
      'ROI calculé avant projet',
      'Métriques business trackées',
      'Quick wins prioritaires',
      'Garantie satisfaction'
    ],
    color: 'success'
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return {
        iconBg: 'bg-dainamics-primary/20',
        iconText: 'text-dainamics-primary',
        border: 'border-dainamics-primary/30',
        hoverBorder: 'hover:border-dainamics-primary',
        badgeBg: 'bg-dainamics-primary/10',
        badgeText: 'text-dainamics-primary'
      };
    case 'secondary':
      return {
        iconBg: 'bg-dainamics-secondary/20',
        iconText: 'text-dainamics-secondary',
        border: 'border-dainamics-secondary/30',
        hoverBorder: 'hover:border-dainamics-secondary',
        badgeBg: 'bg-dainamics-secondary/10',
        badgeText: 'text-dainamics-secondary'
      };
    case 'success':
      return {
        iconBg: 'bg-dainamics-success/20',
        iconText: 'text-dainamics-success',
        border: 'border-dainamics-success/30',
        hoverBorder: 'hover:border-dainamics-success',
        badgeBg: 'bg-dainamics-success/10',
        badgeText: 'text-dainamics-success'
      };
    default:
      return {
        iconBg: 'bg-dainamics-primary/20',
        iconText: 'text-dainamics-primary',
        border: 'border-dainamics-primary/30',
        hoverBorder: 'hover:border-dainamics-primary',
        badgeBg: 'bg-dainamics-primary/10',
        badgeText: 'text-dainamics-primary'
      };
  }
};

const SwissDifferentiatorsReveal: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-dainamics-card-alt overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/3 w-60 h-60 bg-dainamics-success/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-dainamics-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gradient-secondary">
              Pourquoi DAINAMICS
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dainamics-light/80 max-w-2xl mx-auto">
            3 différenciateurs qui font la différence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {differentiatorsData.map((diff, index) => (
            <DifferentiatorCard
              key={diff.id}
              data={diff}
              index={index}
              isExpanded={expandedId === diff.id}
              onToggle={() => setExpandedId(expandedId === diff.id ? null : diff.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DifferentiatorCardProps {
  data: Differentiator;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const DifferentiatorCard: React.FC<DifferentiatorCardProps> = ({
  data,
  index,
  isExpanded,
  onToggle
}) => {
  const colors = getColorClasses(data.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative"
    >
      <motion.div
        layout
        className={`relative p-6 md:p-8 rounded-2xl bg-dainamics-card border ${colors.border} ${colors.hoverBorder} shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
        onClick={onToggle}
      >
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${colors.iconBg} flex items-center justify-center mb-6 ${colors.iconText}`}>
          {data.icon}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-dainamics-light mb-2">
          {data.title}
        </h3>

        <p className={`text-sm font-semibold ${colors.iconText} mb-4 uppercase tracking-wider`}>
          {data.subtitle}
        </p>

        <p className="text-sm md:text-base text-dainamics-light/70 mb-6 leading-relaxed">
          {data.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-dainamics-border/50 mb-6">
                <ul className="space-y-3">
                  {data.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <svg className={`w-5 h-5 ${colors.iconText} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-dainamics-light/70">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.badgeBg} ${colors.badgeText} text-sm font-medium`}>
          <span>{isExpanded ? 'Voir moins' : 'Voir détails'}</span>
          <motion.svg
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SwissDifferentiatorsReveal;
