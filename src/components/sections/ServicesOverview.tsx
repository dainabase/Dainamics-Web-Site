import React from 'react';
import { ArrowRight, Target, Zap, Code, RefreshCw } from 'lucide-react';

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
        "Vous ne savez pas par où commencer avec l'IA ? Vous avez entendu parler de ChatGPT mais vous ne voyez pas comment l'appliquer à votre métier ? Notre phase Discovery identifie les opportunités concrètes d'automatisation dans VOS processus, évalue le ROI potentiel de chaque scénario, et vous livre une roadmap priorisée actionnable immédiatement.",
      benefits: [
        "Assessment opportunités IA sur vos processus actuels",
        "Roadmap priorisée par ROI et facilité d'implémentation",
        "POC fonctionnel (preuve de concept) pour valider la faisabilité",
        "Estimation ROI précise avec timeline de retour sur investissement",
        "Workshop équipe pour démystifier l'IA dans votre contexte",
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
        "Vous avez identifié UN processus qui vous fait perdre un temps fou chaque semaine ? Automatisation reporting, extraction données, qualification leads, gestion emails... Nos Quick Wins ciblent une tâche spécifique, l'automatisent en 2-4 semaines, et vous garantissent un ROI mesurable en moins de 6 mois. Si on ne tient pas la promesse, vous ne payez pas.",
      benefits: [
        "Scope précis et fixe : une tâche, une solution, un résultat",
        "Mise en production rapide : 2-4 semaines maximum",
        "ROI garanti 2-6 mois ou remboursement intégral",
        "Formation équipe incluse (4h) pour autonomie complète",
        "Support 1 mois post-lancement pour ajustements",
      ],
      badge: {
        text: '🛡️ GARANTIE ROI',
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
        "Votre besoin dépasse un Quick Win et nécessite une solution métier sur-mesure ? Plateforme multi-agents IA, automatisation bout-en-bout multi-systèmes, refonte complète workflow... Nous développons la solution exactement adaptée à votre réalité métier, intégrée à vos outils existants, documentée parfaitement, et scalable pour votre croissance future.",
      benefits: [
        "Solution métier sur-mesure alignée sur vos processus uniques",
        "Intégration complète systèmes existants (CRM, ERP, outils métier)",
        "Documentation technique parfaite pour maintenance interne possible",
        "Approche itérative avec validation continue (sprints agiles)",
        "Support 3 mois post-lancement + formation approfondie équipes",
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
        "Votre solution IA/automation n'est pas statique : elle évolue avec votre métier. Nouveaux cas d'usage découverts, optimisations performance, adaptations réglementaires, formation nouvelles recrues... Nous assurons le support technique continu, les évolutions itératives mensuelles, et l'optimisation permanente de votre investissement initial. Vous n'êtes jamais abandonné post-lancement.",
      benefits: [
        "Support technique réactif : Réponse <4h, résolution rapide",
        "Évolutions itératives mensuelles : Nouvelles features, optimisations",
        "Monitoring performance proactif : Alertes, rapports mensuels détaillés",
        "Formation continue : Onboarding nouvelles recrues, refresh équipes",
        "Mises à jour sécurité & conformité : Patches, évolutions réglementaires",
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

  /**
   * Retourne l'icône du benefit selon le texte
   */
  const getBenefitIcon = (benefit: string): string => {
    if (benefit.includes('Assessment') || benefit.includes('Scope')) return '🎯';
    if (benefit.includes('Roadmap') || benefit.includes('Mise en production')) return '⚡';
    if (benefit.includes('POC') || benefit.includes('ROI')) return '📈';
    if (benefit.includes('Estimation') || benefit.includes('Formation')) return '🎓';
    if (benefit.includes('Workshop') || benefit.includes('Support')) return '🛡️';
    if (benefit.includes('Solution') || benefit.includes('Évolutions')) return '🔄';
    if (benefit.includes('Intégration')) return '🔗';
    if (benefit.includes('Documentation')) return '📚';
    if (benefit.includes('Approche') || benefit.includes('Monitoring')) return '📊';
    if (benefit.includes('Mises à jour')) return '🔒';
    return '✅';
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
                    <span className="benefit-icon text-xl flex-shrink-0">
                      {getBenefitIcon(benefit)}
                    </span>
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
