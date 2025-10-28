import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cog, Code, TrendingUp, Zap, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  Brain,
  Cog,
  Code,
  TrendingUp,
  Zap,
  CheckCircle2
};

interface ROI {
  mainValue: string;
  period: string;
  breakdown: string;
  icon: keyof typeof iconMap;
}

interface CTA {
  text: string;
  link: string;
}

interface Expertise {
  id: string;
  icon: keyof typeof iconMap;
  color: string;
  colorAdjusted: string;
  title: string;
  tagline: string;
  capabilities: string[];
  roi: ROI;
  cta: CTA;
}

const expertises: Expertise[] = [
  {
    id: 'ia',
    icon: 'Brain',
    color: '#7B2FFF',
    colorAdjusted: '#7B2FFF',
    title: 'Intelligence Artificielle',
    tagline: 'Économisez 15h/Semaine • ROI 250-400%',
    capabilities: [
      'Chatbots 24/7 → -40% tickets support',
      'OCR 90+ langues → -95% erreurs saisie',
      'Agents autonomes → Recherche 10× plus rapide'
    ],
    roi: {
      mainValue: '250-400%',
      period: 'ROI Première Année',
      breakdown: '6 mois: 150-200% • 12 mois: 250-400%',
      icon: 'TrendingUp'
    },
    cta: {
      text: 'Voir Cas Clients IA',
      link: '/projets#ia'
    }
  },
  {
    id: 'automatisations',
    icon: 'Cog',
    color: '#00C8E6',
    colorAdjusted: '#00C8E6',
    title: 'Automatisations Business',
    tagline: 'Zéro Erreur Manuelle • Gain Temps 70%',
    capabilities: [
      'RPA multi-systèmes → -80% temps admin',
      'Workflows n8n → Intégration 500+ apps',
      'Email auto → 4200% ROI (étude validée)'
    ],
    roi: {
      mainValue: '200-300%',
      period: 'ROI Première Année',
      breakdown: '6 mois: 120-180% • 12 mois: 200-300%',
      icon: 'TrendingUp'
    },
    cta: {
      text: 'Voir Cas Clients Auto',
      link: '/projets#automatisations'
    }
  },
  {
    id: 'software',
    icon: 'Code',
    color: '#00E68A',
    colorAdjusted: '#00E68A',
    title: 'Développement Software',
    tagline: 'Livraison 2 Semaines • Coût -50%',
    capabilities: [
      'Prototypes validés → Livraison 14 jours',
      'Stack moderne → Next.js, React, TypeScript',
      'Architecture scalable → Microservices prêts croissance'
    ],
    roi: {
      mainValue: '40-60%',
      period: 'Réduction Coûts vs Interne',
      breakdown: 'Prototype: 2 sem • Production: 6-8 sem',
      icon: 'Zap'
    },
    cta: {
      text: 'Voir Cas Clients Software',
      link: '/projets#software'
    }
  }
];

const ExpertisesSection = () => {
  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(123,47,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,200,230,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            <span className="text-white">3 Expertises. </span>
            <span className="bg-gradient-to-r from-[#7B2FFF] via-[#00C8E6] to-[#00E68A] bg-clip-text text-transparent">
              Infinies Possibilités.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            De l'IA générative aux automatisations métier en passant par le développement sur-mesure,
            nous transformons vos processus en avantages compétitifs mesurables.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {expertises.map((expertise, index) => {
            const IconComponent = iconMap[expertise.icon];
            const ROIIconComponent = iconMap[expertise.roi.icon];

            return (
              <motion.div
                key={expertise.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-[#0A0A1A] border border-white/10 transition-all duration-700 hover:border-white/20 hover:shadow-2xl">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${expertise.colorAdjusted}20, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${expertise.colorAdjusted}20, transparent)`,
                        border: `1px solid ${expertise.colorAdjusted}40`
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: expertise.colorAdjusted }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {expertise.title}
                    </h3>
                    <p
                      className="text-sm font-medium mb-6"
                      style={{ color: expertise.colorAdjusted }}
                    >
                      {expertise.tagline}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {expertise.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: expertise.colorAdjusted }}
                          />
                          <span className="text-sm text-white/90 leading-relaxed">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="p-6 rounded-xl border-2 mb-6 mt-auto"
                      style={{
                        background: `linear-gradient(135deg, ${expertise.colorAdjusted}15, transparent)`,
                        borderColor: `${expertise.colorAdjusted}30`
                      }}
                    >
                      <div className="flex items-baseline gap-2 mb-2">
                        <span
                          className="text-5xl font-bold"
                          style={{ color: expertise.colorAdjusted }}
                        >
                          {expertise.roi.mainValue}
                        </span>
                        <ROIIconComponent
                          className="w-6 h-6"
                          style={{ color: expertise.colorAdjusted }}
                        />
                      </div>
                      <p className="text-base text-white/90 font-medium mb-1">
                        {expertise.roi.period}
                      </p>
                      <p className="text-sm text-white/60">
                        {expertise.roi.breakdown}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full group/btn transition-all duration-300"
                      style={{
                        backgroundColor: expertise.colorAdjusted,
                        color: '#FFFFFF'
                      }}
                    >
                      <a href={expertise.cta.link} className="flex items-center justify-center gap-2">
                        {expertise.cta.text}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative h-px mb-16">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #7B2FFF 50%, transparent 100%)',
              opacity: 0.3
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Quelle Expertise Pour Votre Projet ?
          </h3>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Pas sûr de votre besoin ? Notre diagnostic gratuit identifie les gains
            potentiels en 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#7B2FFF] to-[#00C8E6] hover:opacity-90 transition-opacity text-white font-medium group"
            >
              <a href="#diagnostic" className="flex items-center gap-2">
                Diagnostic Gratuit 2 min
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white group"
            >
              <a href="#projets" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explorer Cas Clients
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
