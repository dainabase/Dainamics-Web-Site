import React from 'react';
import { ArrowRight, Target, Zap, Code, RefreshCw, Check } from 'lucide-react';

/**
 * Interface TypeScript pour un service
 */
interface Service {
  id: string;
  iconComponent: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  benefits: string[];
  badge: {
    text: string;
    color: string;
    animated?: boolean;
  };
  cta: {
    text: string;
    link: string;
  };
}

/**
 * ServicesOverview Section
 * Présente les 4 services DAINAMICS avec substance et bénéfices
 * Position: Après TrustedClients sur la homepage
 */
const ServicesOverview: React.FC = () => {
  /**
   * Portfolio des 4 services avec contenu riche
   */
  const services: Service[] = [
    {
      id: 'discovery',
      iconComponent: <Target className="w-12 h-12" />,
      iconColor: '#7B2FFF',
      title: 'Discovery & Stratégie IA',
      description:
        "Identifiez où l'IA peut transformer VOS processus métier. Assessment complet, roadmap priorisée par ROI, et POC fonctionnel pour valider la faisabilité technique immédiatement.",
      benefits: [
        "Assessment opportunités IA sur vos processus actuels",
        "Roadmap priorisée par ROI et facilité d'implémentation",
        "POC fonctionnel + Workshop équipe inclus (4h)",
      ],
      badge: {
        text: 'Idéal pour démarrer',
        color: 'cyan',
      },
      cta: {
        text: 'Démarrons votre stratégie',
        link: '/services/discovery',
      },
    },
    {
      id: 'quick-wins',
      iconComponent: <Zap className="w-12 h-12" />,
      iconColor: '#10E4FF',
      title: 'Quick Wins',
      description:
        "Automatisez UNE tâche répétitive en 2-4 semaines. Scope précis, ROI garanti sous 6 mois ou remboursement intégral. Formation équipe incluse pour autonomie complète.",
      benefits: [
        "Mise en production rapide : 2-4 semaines maximum",
        "ROI garanti 2-6 mois ou remboursement intégral",
        "Formation 4h + Support 1 mois inclus",
      ],
      badge: {
        text: 'GARANTIE ROI',
        color: 'orange',
        animated: true,
      },
      cta: {
        text: 'Voir exemples Quick Wins',
        link: '/services/quick-wins',
      },
    },
    {
      id: 'custom',
      iconComponent: <Code className="w-12 h-12" />,
      iconColor: '#7B2FFF',
      title: 'Développement Custom',
      description:
        "Solution métier sur-mesure pour besoins complexes. Plateforme multi-agents IA, automatisation bout-en-bout, intégration complète systèmes existants. Documentation parfaite, approche agile, support 3 mois inclus.",
      benefits: [
        "Solution sur-mesure alignée processus uniques",
        "Intégration complète CRM, ERP, outils métier",
        "Documentation parfaite + Support 3 mois inclus",
      ],
      badge: {
        text: 'Projets complexes',
        color: 'violet',
      },
      cta: {
        text: 'Discutons de votre projet',
        link: '/contact',
      },
    },
    {
      id: 'support',
      iconComponent: <RefreshCw className="w-12 h-12" />,
      iconColor: '#0AFF9D',
      title: 'Support & Évolution Continue',
      description:
        "Partenariat durable : votre solution évolue avec votre métier. Support réactif <4h, évolutions mensuelles, monitoring proactif. Formation continue et mises à jour sécurité garanties.",
      benefits: [
        "Support réactif <4h + Résolution rapide",
        "Évolutions mensuelles + Monitoring proactif",
        "Formation continue + Mises à jour sécurité",
      ],
      badge: {
        text: 'Partenariat durable',
        color: 'green',
      },
      cta: {
        text: 'Découvrir le support',
        link: '/services/support',
      },
    },
  ];

  /**
   * Retourne la classe CSS du badge selon la couleur
   */
  const getBadgeClass = (color: string, animated?: boolean): string => {
    const baseClass = 'service-badge';
    const colorClass = `badge-${color}`;
    const animClass = animated ? 'badge-animated' : '';
    return `${baseClass} ${colorClass} ${animClass}`.trim();
  };

  return (
    <section
      className="services-overview-section bg-dainamics-background py-24"
      aria-label="Nos services"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services :{' '}
            <span className="text-gradient-primary">Du Diagnostic au Support</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quatre niveaux d'engagement pour accompagner votre transformation digitale,
            de l'exploration stratégique au partenariat long terme
          </p>
        </div>

        {/* Services Grid 2x2 */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group"
              data-service={service.id}
            >
              {/* Badge (top-right) */}
              <div className={getBadgeClass(service.badge.color, service.badge.animated)}>
                {service.badge.text}
              </div>

              {/* Icon */}
              <div className="service-icon mb-6" style={{ color: service.iconColor }}>
                {service.iconComponent}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

              {/* Benefits List */}
              <ul className="benefits-list space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#0AFF9D] flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={service.cta.link}
                className="service-cta inline-flex items-center gap-2 text-dainamics-primary font-semibold hover:text-dainamics-secondary transition-colors duration-300"
              >
                {service.cta.text}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Footer Tagline */}
        <p className="text-center text-gray-400 mt-16 text-lg">
          Besoin d'aide pour choisir ?{' '}
          <a
            href="/contact"
            className="text-dainamics-primary hover:text-dainamics-secondary transition-colors underline"
          >
            Parlons de votre situation
          </a>
        </p>
      </div>
    </section>
  );
};

export default ServicesOverview;
