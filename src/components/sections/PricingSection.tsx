import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Rocket, Users, Check, ArrowRight, Shield, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTier {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  priceRange: string;
  duration: string;
  popular?: boolean;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
}

interface Guarantee {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PricingSection: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      id: 'discovery',
      icon: <Lightbulb className="w-7 h-7" />,
      name: 'Discovery',
      description: 'Audit et roadmap personnalisée',
      priceRange: '5 - 12K€',
      duration: '1-2 semaines',
      features: [
        'Audit complet de vos processus',
        'Identification opportunités IA',
        'Roadmap priorisée par ROI',
        'Estimation gains détaillée',
        'Livrable PDF actionnable',
      ],
      cta: {
        text: 'En savoir plus',
        href: '#diagnostic',
      },
    },
    {
      id: 'quickwin',
      icon: <Zap className="w-7 h-7" />,
      name: 'Quick Win',
      description: 'Une automatisation clé en main',
      priceRange: '8 - 15K€',
      duration: '2-4 semaines',
      popular: true,
      features: [
        '1 automatisation complète',
        'Intégration à vos outils',
        'Formation équipe (4h)',
        'Documentation technique',
        'Support 1 mois inclus',
        'ROI garanti 6 mois',
      ],
      cta: {
        text: 'Démarrer',
        href: '#diagnostic',
      },
    },
    {
      id: 'custom',
      icon: <Rocket className="w-7 h-7" />,
      name: 'Projet Custom',
      description: 'Solution sur-mesure complète',
      priceRange: '25 - 75K€',
      duration: '2-4 mois',
      features: [
        'Solution complète sur-mesure',
        'Multiples intégrations',
        'Architecture évolutive',
        'Tests et validation',
        'Formation complète',
        'Support 3 mois inclus',
      ],
      cta: {
        text: 'Discuter du projet',
        href: '/contact',
      },
    },
  ];

  const guarantees: Guarantee[] = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Données en Suisse',
      description: 'Infrastructure 100% hébergée en Suisse',
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'ROI Garanti',
      description: 'Remboursé si objectifs non atteints',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Délais Tenus',
      description: 'Livraison dans les temps ou compensation',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="pricing-section py-24 bg-dainamics-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(123,47,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,228,255,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Nos Tarifs.</span>{' '}
            <span className="text-dainamics-secondary">Sans Surprise.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nous sommes les seuls en Suisse à afficher nos prix publiquement.
            Pas de devis mystérieux, pas de frais cachés.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              className={`relative group ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-dainamics-cta to-[#FF8040] text-white text-sm font-semibold shadow-lg shadow-dainamics-cta/30">
                    <Zap className="w-4 h-4" />
                    Populaire
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-2xl transition-all duration-500 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-dainamics-card to-[#0D0D20] border-2 border-dainamics-cta/50 shadow-xl shadow-dainamics-cta/10'
                    : 'bg-dainamics-card border border-dainamics-border hover:border-dainamics-primary/50'
                }`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10 ${
                    tier.popular
                      ? 'bg-dainamics-cta/20'
                      : 'bg-dainamics-primary/10'
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      tier.popular
                        ? 'bg-dainamics-cta/20 text-dainamics-cta'
                        : 'bg-dainamics-primary/20 text-dainamics-primary'
                    }`}
                  >
                    {tier.icon}
                  </div>

                  {/* Name & Description */}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold ${
                        tier.popular ? 'text-dainamics-cta' : 'text-dainamics-primary'
                      }`}
                    >
                      {tier.priceRange}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-8">{tier.duration}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            tier.popular ? 'text-dainamics-cta' : 'text-dainamics-success'
                          }`}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full group/btn transition-all duration-300 ${
                      tier.popular
                        ? 'bg-dainamics-cta hover:bg-dainamics-cta/90 text-white'
                        : 'bg-dainamics-primary hover:bg-dainamics-primary/90 text-white'
                    }`}
                    size="lg"
                  >
                    <a href={tier.cta.href} className="flex items-center justify-center gap-2">
                      {tier.cta.text}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extension d'équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-dainamics-card to-[#0D0D20] border border-dainamics-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-dainamics-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-dainamics-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Extension d'Équipe</h3>
                  <p className="text-gray-400 text-sm">
                    Développeurs IA/ML expérimentés intégrés à votre équipe
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl font-bold text-dainamics-secondary">7K€</div>
                <div className="text-sm text-gray-500">par mois / développeur</div>
                <div className="text-xs text-gray-600 mt-1">Engagement min. 3 mois</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
        >
          {guarantees.map((guarantee, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dainamics-success/10 flex items-center justify-center text-dainamics-success">
                {guarantee.icon}
              </div>
              <div>
                <div className="text-white font-medium text-sm">{guarantee.title}</div>
                <div className="text-gray-500 text-xs">{guarantee.description}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Pas sûr de votre besoin ? On en discute gratuitement.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-dainamics-primary/50 text-dainamics-primary hover:bg-dainamics-primary/10 group"
          >
            <a href="#diagnostic" className="flex items-center gap-2">
              Réserver 30 min gratuites
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
