import { motion } from 'framer-motion';
import { Search, Zap, Rocket, Clock, TrendingUp, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

const COLORS = {
  etape1: '#7B2FFF',
  etape2: '#10E4FF',
  etape3: '#0AFF9D',
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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dainamics-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dainamics-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-dainamics-primary" />
            <span className="text-sm font-semibold text-white/90">Processus Transparent</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">De l'Idée au ROI Mesurable.</span>
            <br />
            <span className="bg-gradient-to-r from-dainamics-primary via-dainamics-secondary to-dainamics-success bg-clip-text text-transparent">
              En 8 Semaines.
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Méthode validée par 50+ PME suisses. Résultats garantis, engagement transparent, zéro surprise.
          </p>
        </motion.div>

        {/* KEY METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
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
                <div className="relative bg-[#0A0A1A] border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
                  <IconComponent
                    className="w-10 h-10 mx-auto mb-4"
                    style={{ color: metric.color }}
                  />
                  <div className="text-4xl font-bold mb-2" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">
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
            <div className="absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-white/10" />
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
                  <div className="relative h-full bg-[#0A0A1A] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col">

                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                        color: '#FFFFFF',
                        boxShadow: `0 10px 40px ${step.color}40`
                      }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                          border: `1px solid ${step.color}30`
                        }}
                      >
                        <IconComponent className="w-10 h-10" style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{step.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-center text-gray-400 text-sm mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                    {/* Bullets */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.15 + bulletIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: step.color }}
                          />
                          <span className="text-sm text-gray-300 leading-relaxed">
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full group/btn transition-all duration-300 border-2"
                      style={{
                        backgroundColor: step.number === 1 ? step.color : 'transparent',
                        borderColor: step.color,
                        color: step.number === 1 ? '#FFFFFF' : step.color
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
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-white">Prêt à Démarrer Votre Transformation ?</span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 group/btn transition-all duration-300 border-0"
              style={{
                background: `linear-gradient(135deg, ${COLORS.etape1}, ${COLORS.etape2})`,
                color: '#FFFFFF',
                boxShadow: `0 10px 40px ${COLORS.etape1}40`
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
              className="text-lg px-10 py-6 border-2 hover:bg-white/5"
              style={{
                borderColor: COLORS.etape2,
                color: COLORS.etape2
              }}
            >
              <a href="/portfolio" className="flex items-center gap-2">
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
