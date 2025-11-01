import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Zap,
  Rocket,
  Shield,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProcessStep {
  id: string;
  number: number;
  icon: typeof Search;
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
    color: '#7B2FFF',
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
    color: '#10E4FF',
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
    color: '#0AFF9D',
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

const ProcessusSection_v2 = () => {
  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(123,47,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(16,228,255,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#7B2FFF]/10 border border-[#7B2FFF]/20 text-[#7B2FFF] text-sm font-medium mb-6">
              Processus Transparent
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">De l'Idée au </span>
              <span className="bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#0AFF9D] bg-clip-text text-transparent">
                ROI Mesurable
              </span>
              <span className="text-white"> en 8 Semaines</span>
            </h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Méthodologie éprouvée sur 50+ projets. Transparence totale sur durées et tarifs.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              { value: '8 sem', label: 'Temps moyen livraison', icon: Clock, color: '#10E4FF' },
              { value: '250-400%', label: 'ROI moyen première année', icon: TrendingUp, color: '#0AFF9D' },
              { value: '0 CHF', label: 'Évaluation gratuite', icon: DollarSign, color: '#7B2FFF' }
            ].map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <IconComponent className="w-5 h-5" style={{ color: metric.color }} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-white/60">{metric.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Timeline + Cards */}
        <div className="relative mb-20">
          {/* Animated Progress Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-20 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#0AFF9D] origin-left"
            style={{ zIndex: 0 }}
          />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative p-8 rounded-2xl bg-[#0A0A1A] border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                    {/* Number Badge */}
                    <div
                      className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-[#050510]"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                        border: `1px solid ${step.color}40`
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: step.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white text-center mb-4">
                      {step.title}
                    </h3>

                    {/* Pricing + Duration */}
                    <div className="text-center mb-6 pb-6 border-b border-white/10">
                      <div className="text-4xl font-bold mb-1" style={{ color: step.color }}>
                        {step.pricing}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {step.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
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
                      variant={step.ctaType === 'primary' ? 'default' : 'outline'}
                      className={`w-full ${
                        step.ctaType === 'primary'
                          ? 'text-white'
                          : 'border-white/20 hover:bg-white/5 text-white'
                      }`}
                      style={
                        step.ctaType === 'primary'
                          ? { backgroundColor: step.color }
                          : {}
                      }
                    >
                      <a href={step.ctaLink} className="flex items-center justify-center gap-2">
                        {step.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Arrow Between Cards (Desktop) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                      className="hidden lg:block absolute top-20 -right-4 z-20"
                    >
                      <ArrowRight
                        className="w-8 h-8"
                        style={{ color: processSteps[index + 1].color }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5A00]/30 to-transparent" />
        </div>

        {/* Garantie Résultats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#FF5A00]/10 to-transparent border-2 border-[#FF5A00]/30">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#FF5A00]" />
              <h3 className="text-3xl font-bold text-white">
                Garantie Résultats
              </h3>
            </div>

            <p className="text-xl text-center text-white/90 mb-6 font-medium">
              Si le ROI projeté n'est pas atteint en 6 mois, nous continuons gratuitement
              jusqu'à l'objectif.
            </p>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <TrendingUp className="w-6 h-6 text-[#0AFF9D]" />
              <div>
                <div className="text-lg font-bold text-white">
                  100% des clients atteignent ROI projeté
                </div>
                <div className="text-sm text-white/60">
                  Basé sur 50+ projets livrés depuis 2020
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à Démarrer Votre Projet ?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Réservez votre évaluation gratuite de 45 minutes. Aucun engagement,
            juste une analyse approfondie de vos opportunités ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#7B2FFF] to-[#10E4FF] hover:opacity-90 transition-opacity text-white font-medium group"
            >
              <a href="#contact" className="flex items-center gap-2">
                Réserver Évaluation Gratuite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white"
            >
              <a href="/projets">
                Voir Projets Réalisés
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessusSection_v2;
