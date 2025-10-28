import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Zap,
  Rocket,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  Search,
  Zap,
  Rocket,
  Shield,
  TrendingUp,
  Clock,
  DollarSign
};

interface Livrable {
  title: string;
  description: string;
}

interface Validation {
  critere: string;
  action: string;
}

interface CTA {
  text: string;
  link: string;
  type: 'primary' | 'secondary' | 'outline';
}

interface PricingBreakdown {
  level?: string;
  type?: string;
  price: string;
  duration: string;
  description: string;
}

interface ProcessStep {
  id: string;
  number: number;
  icon: keyof typeof iconMap;
  iconEmoji: string;
  color: string;
  title: string;
  duration: string;
  pricing: {
    amount: string;
    detail: string;
    breakdown?: PricingBreakdown[];
  };
  description: string;
  livrables: Livrable[];
  validation: Validation;
  cta: CTA;
}

const processSteps: ProcessStep[] = [
  {
    id: 'evaluation',
    number: 1,
    icon: 'Search',
    iconEmoji: '🔍',
    color: '#7B2FFF',
    title: 'Analyse Gratuite',
    duration: '45 minutes précises',
    pricing: {
      amount: '0 CHF',
      detail: 'Sans engagement'
    },
    description: "Évaluation approfondie de votre cas d'usage avec identification des opportunités ROI prioritaires.",
    livrables: [
      {
        title: 'Rapport Opportunités PDF',
        description: 'Analyse détaillée 3-5 cas d\'usage avec ROI estimé pour chacun'
      },
      {
        title: 'Estimation ROI Chiffrée',
        description: 'Projection gains temps + économies coûts sur 6-12 mois'
      },
      {
        title: 'Recommandation Priorisation',
        description: 'Ordre d\'implémentation optimal selon impact/effort'
      }
    ],
    validation: {
      critere: 'Au moins 1 opportunité ROI ≥ 5000 CHF identifiée',
      action: 'Décision client : passer au prototype ou explorer d\'autres options'
    },
    cta: {
      text: 'Réserver Mon Évaluation Gratuite',
      link: '#contact',
      type: 'primary'
    }
  },
  {
    id: 'prototype',
    number: 2,
    icon: 'Zap',
    iconEmoji: '⚡',
    color: '#00C8E6',
    title: 'Prototype Rapide',
    duration: '1-3 semaines selon complexité',
    pricing: {
      amount: '5K-12K CHF',
      detail: 'Selon niveau complexité',
      breakdown: [
        {
          level: 'Simple',
          price: '5K CHF',
          duration: '1 semaine',
          description: 'Prototype mono-système, intégration basique'
        },
        {
          level: 'Standard',
          price: '8K CHF',
          duration: '2 semaines',
          description: 'Multi-systèmes, workflows automatisés'
        },
        {
          level: 'Avancé',
          price: '12K CHF',
          duration: '3 semaines',
          description: 'Composants IA personnalisés, architecture complexe'
        }
      ]
    },
    description: "Développement d'un prototype fonctionnel pour valider la faisabilité technique et l'adéquation avec vos processus réels.",
    livrables: [
      {
        title: 'Prototype Fonctionnel',
        description: 'Solution testable en environnement réel avec données échantillon'
      },
      {
        title: 'Tests Utilisateurs Validés',
        description: '3-5 collaborateurs testent et valident l\'utilisabilité'
      },
      {
        title: 'Ajustements Inclus',
        description: 'Jusqu\'à 2 itérations d\'amélioration selon retours tests'
      },
      {
        title: 'Documentation Technique',
        description: 'Spécifications architecture et intégrations prévues'
      }
    ],
    validation: {
      critere: 'Métriques cibles atteintes (ex: temps traitement -40%, erreurs -80%)',
      action: 'Décision client : déploiement production ou ajustements additionnels'
    },
    cta: {
      text: 'Voir Exemples Prototypes',
      link: '/projets#prototypes',
      type: 'secondary'
    }
  },
  {
    id: 'livraison',
    number: 3,
    icon: 'Rocket',
    iconEmoji: '🚀',
    color: '#00E68A',
    title: 'Livraison + Support',
    duration: 'Variable selon type projet',
    pricing: {
      amount: '15K-75K CHF',
      detail: 'Projet complet avec formation',
      breakdown: [
        {
          type: 'Quick Wins',
          price: '15K-25K CHF',
          duration: '2-4 semaines',
          description: 'Automatisations simples, déploiement rapide, formation 2h'
        },
        {
          type: 'Projets Custom Standard',
          price: '30K-50K CHF',
          duration: '6-8 semaines',
          description: 'Solutions sur-mesure, intégrations multiples, formation 1 jour'
        },
        {
          type: 'Transformations Complètes',
          price: '60K-75K CHF',
          duration: '8-12 semaines',
          description: 'Refonte processus métier, change management, formation 2-3 jours'
        }
      ]
    },
    description: "Déploiement en production avec formation équipe, documentation complète et support prioritaire pendant 3 mois.",
    livrables: [
      {
        title: 'Solution Production-Ready',
        description: 'Code source documenté, architecture scalable, sécurité validée'
      },
      {
        title: 'Formation Équipe Complète',
        description: 'Sessions pratiques avec documentation vidéo et guides utilisateur'
      },
      {
        title: 'Support Prioritaire 3 Mois',
        description: 'Mois 1: illimité • Mois 2-3: SLA 48h • Ajustements inclus'
      },
      {
        title: 'Code Propriété 100%',
        description: 'Accès GitHub complet, liberté totale maintenance future'
      }
    ],
    validation: {
      critere: 'Objectifs ROI confirmés par métriques en production',
      action: 'Revue résultats à 30/60/90 jours avec rapport performance'
    },
    cta: {
      text: 'Voir Projets Livrés',
      link: '/projets#cas-clients',
      type: 'secondary'
    }
  }
];

const ProcessusSection = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [showGarantieDetails, setShowGarantieDetails] = useState(false);

  const toggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(123,47,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,200,230,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#7B2FFF]/10 border border-[#7B2FFF]/20 text-[#7B2FFF] text-sm font-medium mb-6">
              Processus Transparent
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">De l'Idée au </span>
              <span className="bg-gradient-to-r from-[#7B2FFF] via-[#00C8E6] to-[#00E68A] bg-clip-text text-transparent">
                ROI Mesurable
              </span>
              <span className="text-white"> en 8 Semaines</span>
            </h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Méthodologie éprouvée sur 50+ projets. Transparence totale sur durées et tarifs.
              Zéro risque avec notre garantie résultats.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { value: '8 sem', label: 'Temps moyen livraison', icon: Clock },
              { value: '250-400%', label: 'ROI moyen première année', icon: TrendingUp },
              { value: '0 CHF', label: 'Évaluation gratuite', icon: DollarSign }
            ].map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <IconComponent className="w-5 h-5 text-[#00C8E6]" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-white/60">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="hidden lg:block mb-24">
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7B2FFF] via-[#00C8E6] to-[#00E68A] opacity-30" />

            <div className="grid grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = iconMap[step.icon];

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="relative p-8 rounded-2xl bg-[#0A0A1A] border border-white/10 hover:border-white/20 transition-all duration-500">
                      <div
                        className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-[#050510]"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>

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

                      <h3 className="text-2xl font-bold text-white text-center mb-2">
                        {step.title}
                      </h3>

                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-1">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        <div className="text-3xl font-bold mb-1" style={{ color: step.color }}>
                          {step.pricing.amount}
                        </div>
                        <div className="text-xs text-white/50">{step.pricing.detail}</div>
                      </div>

                      <p className="text-sm text-white/70 text-center mb-6">
                        {step.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3 text-center">
                          Livrables
                        </h4>
                        <ul className="space-y-2">
                          {step.livrables.map((livrable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2
                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                                style={{ color: step.color }}
                              />
                              <div>
                                <span className="text-sm text-white/90 font-medium">
                                  {livrable.title}
                                </span>
                                <p className="text-xs text-white/60 mt-0.5">
                                  {livrable.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-6">
                        <div className="text-xs uppercase tracking-wider text-white/40 mb-2">
                          Validation
                        </div>
                        <p className="text-sm text-white/90 font-medium mb-1">
                          {step.validation.critere}
                        </p>
                        <p className="text-xs text-white/60">
                          {step.validation.action}
                        </p>
                      </div>

                      <Button
                        asChild
                        variant={step.cta.type === 'primary' ? 'default' : 'outline'}
                        className={`w-full ${
                          step.cta.type === 'primary'
                            ? 'text-white'
                            : 'border-white/20 hover:bg-white/5 text-white'
                        }`}
                        style={
                          step.cta.type === 'primary'
                            ? { backgroundColor: step.color }
                            : {}
                        }
                      >
                        <a href={step.cta.link} className="flex items-center justify-center gap-2">
                          {step.cta.text}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    {index < processSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                        className="absolute top-24 -right-4 z-20"
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
        </div>

        <div className="lg:hidden mb-16">
          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              const isExpanded = expandedStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    onClick={() => toggleStep(step.id)}
                    className="relative p-6 rounded-2xl bg-[#0A0A1A] border border-white/10 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.number}
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                            <Clock className="w-3 h-3" />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>

                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-white/60" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/60" />
                      )}
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold" style={{ color: step.color }}>
                        {step.pricing.amount}
                      </span>
                      <span className="text-sm text-white/60">{step.pricing.detail}</span>
                    </div>

                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <p className="text-sm text-white/70 mb-6">
                          {step.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                            Livrables
                          </h4>
                          <ul className="space-y-3">
                            {step.livrables.map((livrable, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2
                                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                                  style={{ color: step.color }}
                                />
                                <div>
                                  <span className="text-sm text-white/90 font-medium">
                                    {livrable.title}
                                  </span>
                                  <p className="text-xs text-white/60 mt-0.5">
                                    {livrable.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-6">
                          <div className="text-xs uppercase tracking-wider text-white/40 mb-2">
                            Validation
                          </div>
                          <p className="text-sm text-white/90 font-medium mb-1">
                            {step.validation.critere}
                          </p>
                          <p className="text-xs text-white/60">
                            {step.validation.action}
                          </p>
                        </div>

                        <Button
                          asChild
                          variant={step.cta.type === 'primary' ? 'default' : 'outline'}
                          className={`w-full ${
                            step.cta.type === 'primary'
                              ? 'text-white'
                              : 'border-white/20 hover:bg-white/5 text-white'
                          }`}
                          style={
                            step.cta.type === 'primary'
                              ? { backgroundColor: step.color }
                              : {}
                          }
                        >
                          <a href={step.cta.link} className="flex items-center justify-center gap-2">
                            {step.cta.text}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div
                        className="w-0.5 h-8"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}, ${processSteps[index + 1].color})`
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative h-px mb-16">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #FF5A00 50%, transparent 100%)',
              opacity: 0.3
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#FF5A00]/10 to-transparent border-2 border-[#FF5A00]/30">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-[#FF5A00]" />
              <h3 className="text-3xl font-bold text-white">
                Garantie Résultats
              </h3>
            </div>

            <p className="text-xl text-center text-white/90 mb-8 font-medium">
              Si le ROI projeté n'est pas atteint en 6 mois, nous continuons gratuitement
              jusqu'à l'objectif.
            </p>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
              <TrendingUp className="w-6 h-6 text-[#00E68A]" />
              <div>
                <div className="text-lg font-bold text-white">
                  100% des clients atteignent ROI projeté
                </div>
                <div className="text-sm text-white/60">
                  Basé sur 50+ projets livrés depuis 2020
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowGarantieDetails(!showGarantieDetails)}
                className="inline-flex items-center gap-2 text-[#FF5A00] hover:text-[#FF5A00]/80 transition-colors"
              >
                <span className="font-medium">
                  {showGarantieDetails ? 'Masquer les détails' : 'Voir les détails de la garantie'}
                </span>
                {showGarantieDetails ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>

            {showGarantieDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Engagement Contractuel',
                      description: 'Clause formalisée dans chaque contrat avec métriques ROI précises'
                    },
                    {
                      title: 'Suivi Mensuel Transparent',
                      description: 'Rapports automatisés avec dashboards temps réel des gains mesurés'
                    },
                    {
                      title: 'Support Étendu Gratuit',
                      description: 'Si objectifs non atteints mois 6 : support/optimisations sans coût additionnel'
                    },
                    {
                      title: 'Conditions Simples',
                      description: 'Applicable si écart ≥20% vs projection initiale et données tracking complètes'
                    }
                  ].map((detail, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{detail.title}</h4>
                        <p className="text-sm text-white/70">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

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
              className="bg-gradient-to-r from-[#7B2FFF] to-[#00C8E6] hover:opacity-90 transition-opacity text-white font-medium group"
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

export default ProcessusSection;
