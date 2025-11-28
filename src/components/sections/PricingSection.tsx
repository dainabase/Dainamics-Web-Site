import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Zap,
  Rocket,
  Check,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTier {
  id: string;
  icon: React.ReactNode;
  name: string;
  price: string;
  priceDetail: string;
  duration: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
  color: string;
  popular?: boolean;
}

const PricingSection: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      id: 'discovery',
      icon: <Lightbulb className="w-7 h-7" />,
      name: 'Discovery',
      price: '5 - 12K€',
      priceDetail: 'Prix fixe',
      duration: '1-2 semaines',
      description: 'Audit de vos processus et roadmap IA personnalisée',
      features: [
        'Audit processus métier',
        'Identification opportunités IA',
        'Roadmap priorisée',
        'Estimation ROI détaillée',
        'Présentation équipe dirigeante'
      ],
      cta: {
        text: 'En savoir plus',
        link: '/services/discovery'
      },
      color: '#7B2FFF'
    },
    {
      id: 'quickwin',
      icon: <Zap className="w-7 h-7" />,
      name: 'Quick Win',
      price: '8 - 15K€',
      priceDetail: 'Prix fixe',
      duration: '2-4 semaines',
      description: 'Une automatisation livrée rapidement avec ROI garanti',
      features: [
        '1 automatisation complète',
        'Intégration systèmes existants',
        'Formation équipe (4h)',
        'Documentation technique',
        'Support 1 mois inclus',
        'ROI garanti ou remboursé'
      ],
      cta: {
        text: 'Démarrer',
        link: '/contact'
      },
      color: '#10E4FF',
      popular: true
    },
    {
      id: 'custom',
      icon: <Rocket className="w-7 h-7" />,
      name: 'Projet Custom',
      price: '25 - 75K€',
      priceDetail: 'Selon complexité',
      duration: '2-4 mois',
      description: 'Solution IA/Automation complète sur-mesure',
      features: [
        'Solution complète sur-mesure',
        'Multiples intégrations',
        'Architecture scalable',
        'Formation approfondie',
        'Support 3 mois inclus',
        'Maintenance évolutive'
      ],
      cta: {
        text: 'Discuter du projet',
        link: '/contact'
      },
      color: '#FF5A00'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section
      className="pricing-section py-16 sm:py-20 md:py-24 lg:py-32 bg-adaptive"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          {/* Badge différenciateur */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-dainamics-primary/10 border border-dainamics-primary/30 mb-4 sm:mb-6">
            <Shield className="w-4 h-4 text-dainamics-primary" />
            <span className="text-xs sm:text-sm font-medium text-dainamics-primary">
              Seuls en Suisse à afficher nos prix
            </span>
          </div>

          <h2 id="pricing-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            <span className="text-adaptive">Nos Tarifs.</span>
            <br />
            <span className="text-adaptive">Sans Surprise.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-adaptive-muted max-w-2xl mx-auto px-4">
            Pas de "contactez-nous pour un devis mystérieux".
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>Vous savez exactement à quoi vous attendre.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              className={`relative group h-full`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#10E4FF] to-[#0AFF9D] text-[#050510] text-xs font-bold">
                    <Zap className="w-3 h-3" />
                    Populaire
                  </div>
                </div>
              )}

              {/* Card */}
              <div 
                className={`
                  relative h-full p-6 rounded-2xl 
                  bg-adaptive-card border transition-all duration-300
                  ${tier.popular 
                    ? 'border-dainamics-secondary/50 shadow-[0_0_30px_rgba(16,228,255,0.15)]' 
                    : 'border-adaptive hover:border-dainamics-primary/30'
                  }
                `}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${tier.color}20, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${tier.color}20, transparent)`,
                    border: `1px solid ${tier.color}40`
                  }}
                >
                  <div style={{ color: tier.color }}>
                    {tier.icon}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-adaptive mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 justify-center">
                    <span
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: tier.color }}
                    >
                      {tier.price}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-adaptive-muted">
                    {tier.priceDetail}
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4 text-sm text-adaptive-muted">
                  <Clock className="w-4 h-4" />
                  {tier.duration}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-adaptive-muted mb-4 sm:mb-5 min-h-[40px] text-center">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: tier.color }}
                      />
                      <span className="text-xs sm:text-sm text-adaptive-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    className={`
                      w-full font-semibold transition-all duration-300
                      ${tier.popular 
                        ? 'bg-gradient-to-r from-[#10E4FF] to-[#0AFF9D] text-[#050510] hover:opacity-90' 
                        : 'bg-adaptive-elevated text-adaptive hover:bg-dainamics-primary/20'
                      }
                    `}
                  >
                    <a href={tier.cta.link} className="flex items-center justify-center gap-2">
                      {tier.cta.text}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-dainamics-primary/10 via-dainamics-secondary/10 to-dainamics-success/10 border border-adaptive p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full md:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dainamics-success/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-dainamics-success" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-adaptive mb-1">
                  Garantie ROI 2-6 mois
                </h3>
                <p className="text-sm sm:text-base text-adaptive-muted">
                  Si le ROI n'est pas atteint sur nos Quick Wins, on continue gratuitement jusqu'à ce qu'il le soit.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white font-bold px-6 sm:px-8 py-5 sm:py-6 whitespace-nowrap w-full sm:w-auto text-sm sm:text-base"
            >
              <a href="/contact" className="flex items-center justify-center gap-2">
                Réserver 30 min gratuites
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-adaptive-muted text-xs sm:text-sm mt-6 sm:mt-8 px-4"
        >
          Tous les prix sont HT. Projets facturés en CHF ou EUR selon préférence.
          <br />
          Pas sûr de votre besoin ? Un appel de 30 min suffit pour y voir clair.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
