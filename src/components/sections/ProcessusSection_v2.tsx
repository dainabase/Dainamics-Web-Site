import { motion } from 'framer-motion';
import { Search, Zap, Rocket, Clock, TrendingUp, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

const COLORS = {
  etape1: '#7B2FFF',
  etape2: '#10E4FF',
  etape3: '#0AFF9D',
  cardBg: '#0A0A1A'
};

interface ProcessStep {
  id: string;
  number: number;
  icon: LucideIcon;
  color: string;
  title: string;
  duration: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaLink: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'evaluation',
    number: 1,
    icon: Search,
    color: COLORS.etape1,
    title: 'Analyse Gratuite',
    duration: '45 min',
    description: 'Nous identifions vos opportunités d\'automatisation et d\'IA avec ROI mesurable',
    bullets: [
      'Rapport d\'opportunités chiffré',
      '3-5 cas d\'usage priorisés',
      'Estimation ROI détaillée'
    ],
    ctaText: 'Réserver Évaluation',
    ctaLink: '#contact'
  },
  {
    id: 'prototype',
    number: 2,
    icon: Zap,
    color: COLORS.etape2,
    title: 'Prototype Rapide',
    duration: '1-3 semaines',
    description: 'Validation rapide avec un prototype fonctionnel sur vos données réelles',
    bullets: [
      'Prototype avec données réelles',
      'Tests utilisateurs validés',
      '2 itérations d\'ajustement incluses'
    ],
    ctaText: 'Voir Exemples',
    ctaLink: '/portfolio'
  },
  {
    id: 'livraison',
    number: 3,
    icon: Rocket,
    color: COLORS.etape3,
    title: 'Livraison + Support',
    duration: '2-12 semaines',
    description: 'Déploiement production avec formation complète et support prioritaire',
    bullets: [
      'Solution production-ready',
      'Formation équipe + documentation',
      'Support prioritaire 3 mois'
    ],
    ctaText: 'Voir Projets',
    ctaLink: '/portfolio'
  }
];

const ProcessusSection_v2 = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-adaptive overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dainamics-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dainamics-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-adaptive-card border border-adaptive mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-dainamics-primary" />
            <span className="text-xs sm:text-sm font-semibold text-adaptive">Processus Transparent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            <span className="text-adaptive">De l'Idée au ROI Mesurable.</span>
            <br />
            <span className="bg-gradient-to-r from-dainamics-primary via-dainamics-secondary to-dainamics-success bg-clip-text text-transparent">
              En 8 Semaines.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-adaptive-muted max-w-3xl mx-auto px-4">
            Méthode validée par 50+ PME suisses. Résultats garantis, engagement transparent, zéro surprise.
          </p>
        </motion.div>

        {/* KEY METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 sm:mb-20 md:mb-24 max-w-5xl mx-auto">
          {[
            { icon: Clock, value: '8 Semaines', label: 'Temps Moyen Livraison', color: COLORS.etape1 },
            { icon: TrendingUp, value: '250-400%', label: 'ROI Première Année', color: COLORS.etape2 },
            { icon: Sparkles, value: '0 CHF', label: 'Évaluation Gratuite', color: COLORS.etape3 }
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                     style={{ background: `radial-gradient(circle at center, ${metric.color}40, transparent)` }}
                />
                <div className="relative bg-adaptive-card border border-adaptive rounded-2xl p-6 sm:p-8 text-center hover:border-dainamics-primary/30 transition-all duration-300">
                  <IconComponent
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4"
                    style={{ color: metric.color }}
                  />
                  <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-adaptive-muted">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PROCESS STEPS */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative mb-16">
            <div className="absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-adaptive border-adaptive" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-8 left-[8.33%] right-[8.33%] h-0.5 origin-left"
              style={{
                background: `linear-gradient(90deg, ${COLORS.etape1} 0%, ${COLORS.etape2} 50%, ${COLORS.etape3} 100%)`
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${step.color}30, transparent 70%)` }}
                  />

                  {/* Card */}
                  <div className="relative h-full bg-adaptive-card border border-adaptive rounded-3xl p-6 sm:p-8 hover:border-dainamics-primary/30 transition-all duration-300 flex flex-col">

                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 200 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl mb-5 sm:mb-6 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                        color: '#FFFFFF',
                        boxShadow: `0 10px 40px ${step.color}40`
                      }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <div className="mb-5 sm:mb-6 flex justify-center">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                          border: `1px solid ${step.color}30`
                        }}
                      >
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-adaptive mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center justify-center gap-2 text-adaptive-muted mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-medium">{step.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-center text-adaptive-muted text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed px-2">
                      {step.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-adaptive to-transparent mb-6 border-adaptive" />

                    {/* Bullets */}
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.15 + bulletIndex * 0.1 }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <CheckCircle2
                            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                            style={{ color: step.color }}
                          />
                          <span className="text-xs sm:text-sm text-adaptive-secondary leading-relaxed">
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full group/btn transition-all duration-300 border-2 text-sm sm:text-base"
                      style={{
                        backgroundColor: step.number === 1 ? step.color : 'transparent',
                        borderColor: step.color,
                        color: step.number === 1 ? '#FFFFFF' : step.color
                      }}
                    >
                      <a href={step.ctaLink} className="flex items-center justify-center gap-2">
                        <span className="whitespace-nowrap">{step.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-4">
            <span className="text-adaptive">Prêt à Démarrer Votre Transformation ?</span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 group/btn transition-all duration-300 border-0 w-full sm:w-auto"
              style={{
                background: `linear-gradient(135deg, ${COLORS.etape1}, ${COLORS.etape2})`,
                color: '#FFFFFF',
                boxShadow: `0 10px 40px ${COLORS.etape1}40`
              }}
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <span className="whitespace-nowrap">Réserver Évaluation Gratuite</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 border-2 hover:bg-adaptive-card w-full sm:w-auto"
              style={{
                borderColor: COLORS.etape2,
                color: COLORS.etape2
              }}
            >
              <a href="/portfolio" className="flex items-center justify-center gap-2">
                <span className="whitespace-nowrap">Voir Projets Réalisés</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessusSection_v2;
