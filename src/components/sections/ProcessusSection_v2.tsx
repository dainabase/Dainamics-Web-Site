import { motion } from 'framer-motion';
import { Search, Zap, Rocket, Shield, Clock, TrendingUp, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

const COLORS = {
  etape1: '#7B2FFF',
  etape2: '#10E4FF',
  etape3: '#0AFF9D',
  cta: '#FF5A00',
  background: '#050510',
  cardBg: '#0A0A1A'
};

interface ProcessStep {
  id: string;
  number: number;
  icon: LucideIcon;
  color: string;
  title: string;
  duration: string;
  pricing: string;
  bullets: string[];
  ctaText: string;
  ctaLink: string;
  ctaType: 'primary' | 'secondary';
}

const processSteps: ProcessStep[] = [
  {
    id: 'evaluation',
    number: 1,
    icon: Search,
    color: COLORS.etape1,
    title: 'Analyse Gratuite',
    duration: '45 min',
    pricing: '0 CHF',
    bullets: [
      'Rapport opportunités avec ROI estimé',
      '3-5 cas d\'usage identifiés et chiffrés',
      'Priorisation impact/effort validée'
    ],
    ctaText: 'Réserver Évaluation Gratuite',
    ctaLink: '#contact',
    ctaType: 'primary'
  },
  {
    id: 'prototype',
    number: 2,
    icon: Zap,
    color: COLORS.etape2,
    title: 'Prototype Rapide',
    duration: '1-3 sem',
    pricing: '5K-12K CHF',
    bullets: [
      'Prototype fonctionnel avec données réelles',
      'Tests utilisateurs validés (3-5 collaborateurs)',
      'Ajustements inclus (jusqu\'à 2 itérations)'
    ],
    ctaText: 'Voir Exemples Prototypes',
    ctaLink: '/projets#prototypes',
    ctaType: 'secondary'
  },
  {
    id: 'livraison',
    number: 3,
    icon: Rocket,
    color: COLORS.etape3,
    title: 'Livraison + Support',
    duration: '2-12 sem',
    pricing: '15K-75K CHF',
    bullets: [
      'Solution production-ready déployée',
      'Formation équipe complète + documentation',
      'Support prioritaire 3 mois inclus'
    ],
    ctaText: 'Voir Projets Livrés',
    ctaLink: '/projets#cas-clients',
    ctaType: 'secondary'
  }
];

interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: Clock,
    value: '8 Semaines',
    label: 'Temps Moyen Livraison',
    color: COLORS.etape1
  },
  {
    icon: TrendingUp,
    value: '250-400%',
    label: 'ROI Première Année',
    color: COLORS.etape2
  },
  {
    icon: DollarSign,
    value: '0 CHF',
    label: 'Évaluation Gratuite',
    color: COLORS.etape3
  }
];

const ProcessusSection_v2 = () => {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-semibold text-white/90">Processus Transparent</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">De l'Idée au ROI Mesurable en 8 Semaines</span>
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Méthode validée par 50+ PME suisses. Résultats garantis, engagement transparent, zéro surprise.
          </p>
        </motion.div>

        {/* MÉTRIQUES CLÉS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A1A] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors"
              >
                <IconComponent
                  className="w-8 h-8 mx-auto mb-4"
                  style={{ color: metric.color }}
                />
                <div className="text-3xl font-bold mb-2" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="text-sm text-white/70">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TIMELINE PROGRESS BAR (Desktop only) */}
        <div className="hidden lg:block relative mb-12 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 origin-left"
            style={{
              background: `linear-gradient(90deg, ${COLORS.etape1} 0%, ${COLORS.etape2} 50%, ${COLORS.etape3} 100%)`
            }}
          />

          <div className="relative flex justify-between items-center">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: step.number * 0.2 }}
                className="w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-xl"
                style={{
                  backgroundColor: step.color,
                  borderColor: COLORS.background,
                  color: '#FFFFFF'
                }}
              >
                {step.number}
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROCESS STEPS CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isPrimary = step.ctaType === 'primary';

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Arrow between cards (Desktop only) */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20"
                  >
                    <ArrowRight className="w-8 h-8 text-white/30" />
                  </motion.div>
                )}

                <div className="relative h-full bg-[#0A0A1A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors flex flex-col">

                  {/* Number Badge */}
                  <div
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-xl"
                    style={{
                      backgroundColor: step.color,
                      borderColor: COLORS.background,
                      color: '#FFFFFF'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${step.color}20`
                      }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {step.title}
                  </h3>

                  {/* Duration */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{step.duration}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: step.color }}
                        />
                        <span className="text-sm text-white/90 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full group/btn transition-all duration-300"
                    style={{
                      backgroundColor: isPrimary ? step.color : 'transparent',
                      borderColor: step.color,
                      borderWidth: isPrimary ? '0' : '2px',
                      color: isPrimary ? '#FFFFFF' : step.color
                    }}
                  >
                    <a href={step.ctaLink} className="flex items-center justify-center gap-2">
                      {step.ctaText}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-white">Prêt à Démarrer Votre Transformation ?</span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 group/btn transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${COLORS.etape1}, ${COLORS.etape2}, ${COLORS.etape3})`,
                color: '#FFFFFF'
              }}
            >
              <a href="#contact" className="flex items-center gap-2">
                Réserver Évaluation Gratuite
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 hover:bg-white/5"
              style={{
                borderColor: COLORS.etape2,
                color: COLORS.etape2
              }}
            >
              <a href="/projets" className="flex items-center gap-2">
                Voir Projets Réalisés
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessusSection_v2;
