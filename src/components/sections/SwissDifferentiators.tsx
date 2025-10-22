import React from 'react';
import { Shield, Eye, TrendingUp, MapPin, AlertCircle, Clock, Check } from 'lucide-react';

/**
 * Interface TypeScript pour un différenciateur
 */
interface Differentiator {
  id: string;
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  calloutBox?: {
    type: 'warning' | 'info' | 'stat';
    content: string;
  };
  impactNumber: {
    value: string;
    label: string;
    icon: React.ReactNode;
  };
  proofBox?: string;
}

/**
 * SwissDifferentiators Section
 * Présente les 3 USP uniques de DAINAMICS vs concurrence
 * Position: Après ServicesOverview sur la homepage
 */
const SwissDifferentiators: React.FC = () => {
  /**
   * Les 3 différenciateurs suisses
   */
  const differentiators: Differentiator[] = [
    {
      id: 'data-sovereignty',
      icon: <Shield className="w-8 h-8" />,
      iconColor: '#7B2FFF',
      title: 'Vos Données Restent en Suisse',
      subtitle: 'Souveraineté & Sécurité Garanties',
      description:
        "Contrairement aux agences offshore qui stockent vos données sensibles sur AWS US ou serveurs Inde, toute notre infrastructure est hébergée en Suisse. Vos données métier, clients, et processus confidentiels ne quittent jamais le territoire suisse.",
      points: [
        'Données hébergées Suisse : Conformité RGPD stricte + LPD',
        'Infrastructure souveraine : Pas de dépendance US/Chine',
        'Support local : Équipe suisse, réponse <4h',
      ],
      calloutBox: {
        type: 'warning',
        content:
          "À savoir : Les agences offshore peuvent être contraintes par des lois étrangères (Cloud Act US) d'exposer vos données métier. Avec DAINAMICS, vos secrets restent secrets.",
      },
      impactNumber: {
        value: '100%',
        label: 'Infrastructure Suisse',
        icon: <MapPin className="w-6 h-6" />,
      },
    },
    {
      id: 'transparency',
      icon: <Eye className="w-8 h-8" />,
      iconColor: '#10E4FF',
      title: 'Prix Clairs, Pas de Surprises',
      subtitle: 'La Transparence Comme Différenciateur',
      description:
        'Nous sommes les SEULS en Suisse à afficher nos prix publiquement. Pas de "contactez-nous pour devis" mystérieux. Pas de frais cachés découverts en fin de projet. Pas de commerciaux qui vous vendent du rêve. Vous savez exactement à quoi vous attendre dès le premier contact.',
      points: [
        'Pricing transparent : Pas de frais cachés, devis fixe',
        'Timeline réaliste : Livraison promise ou compensation',
        'Démo fonctionnelle avant paiement + Documentation complète',
      ],
      calloutBox: {
        type: 'stat',
        content:
          'Étude McKinsey 2023 : 68% des PME B2B préfèrent payer 20% de plus en échange de pricing transparent plutôt que de devis opaques.',
      },
      impactNumber: {
        value: '0%',
        label: 'Concurrents Suisses affichent leurs prix',
        icon: <Eye className="w-6 h-6" />,
      },
      proofBox:
        "Pourquoi les autres cachent leurs prix ? Parce qu'ils gonflent de 40-60% en moyenne. Nous, on assume nos tarifs.",
    },
    {
      id: 'roi-guaranteed',
      icon: <TrendingUp className="w-8 h-8" />,
      iconColor: '#0AFF9D',
      title: "Business d'Abord, Techno Ensuite",
      subtitle: 'ROI Mesurable ou Remboursé',
      description:
        'On ne vous vend pas de la "transformation digitale" abstraite ni la dernière hype technologique. On automatise des processus métier PRÉCIS, on mesure le ROI en heures économisées ou revenus générés, et on garantit le retour sur investissement en 2-6 mois. Si on ne livre pas sur nos Quick Wins, vous ne payez pas.',
      points: [
        'Estimation ROI précise avant démarrage (ex: 60K€/an)',
        'Garantie retour investissement 2-6 mois maximum',
        'Si ROI non atteint : Remboursement ou support gratuit',
      ],
      calloutBox: {
        type: 'info',
        content:
          "Track record DAINAMICS :\n• 45+ PME suisses accompagnées\n• 8 ans d'expérience terrain\n• 99% satisfaction client\n• ROI moyen constaté : 4 mois",
      },
      impactNumber: {
        value: '2-6',
        label: 'mois ROI garanti',
        icon: <Clock className="w-6 h-6" />,
      },
      proofBox:
        "Les grandes agences vous vendent des \"POC\" à 50K€ qui ne passent jamais en production. Nous, on livre du concret opérationnel, pas des PDF PowerPoint.",
    },
  ];

  /**
   * Retourne la classe du callout box selon le type
   */
  const getCalloutClass = (type: string): string => {
    const baseClass = 'callout-box';
    switch (type) {
      case 'warning':
        return `${baseClass} callout-warning`;
      case 'stat':
        return `${baseClass} callout-stat`;
      case 'info':
        return `${baseClass} callout-info`;
      default:
        return baseClass;
    }
  };

  return (
    <section
      className="swiss-differentiators-section bg-gradient-to-b from-dainamics-background via-dainamics-background to-[#0A0A1B] py-24"
      aria-label="Pourquoi nous choisir"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-[#7B2FFF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pourquoi les PME Suisses{' '}
            <span className="text-gradient-primary">Nous Choisissent</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trois différenciateurs qui font toute la différence face aux agences
            traditionnelles et aux prestataires offshore
          </p>
        </div>

        {/* Differentiators Stack (vertical) */}
        <div className="differentiators-stack space-y-12 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <div
              key={diff.id}
              className="differentiator-card group"
              data-index={index}
            >
              {/* Icon + Title Column */}
              <div className="diff-header flex items-start gap-6 mb-6">
                {/* Icon */}
                <div className="diff-icon-wrapper flex-shrink-0" style={{ color: diff.iconColor }}>
                  {diff.icon}
                </div>

                {/* Title + Subtitle */}
                <div className="diff-title-block flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-lg text-dainamics-primary font-semibold">
                    {diff.subtitle}
                  </p>
                </div>

                {/* Impact Number (desktop) */}
                <div className="diff-impact hidden lg:flex flex-col items-end">
                  <div className="flex items-center gap-4 bg-opacity-10 border border-opacity-30 p-6 rounded-lg" style={{
                    backgroundColor: `${diff.iconColor}1A`,
                    borderColor: `${diff.iconColor}4D`
                  }}>
                    <div style={{ color: diff.iconColor }}>
                      {diff.impactNumber.icon}
                    </div>
                    <div>
                      <div className="text-4xl font-bold" style={{ color: diff.iconColor }}>
                        {diff.impactNumber.value}
                      </div>
                      <div className="text-sm text-gray-400">{diff.impactNumber.label}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {diff.description}
              </p>

              {/* Points List */}
              <ul className="diff-points-list space-y-3 mb-6">
                {diff.points.map((point, idx) => (
                  <li key={idx} className="diff-point-item flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#0AFF9D] flex-shrink-0 mt-1" />
                    <span className="text-gray-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Callout Box */}
              {diff.calloutBox && (
                <div className={getCalloutClass(diff.calloutBox.type)}>
                  <div className="callout-content whitespace-pre-line">
                    {diff.calloutBox.content}
                  </div>
                </div>
              )}

              {/* Proof Box (si existe) */}
              {diff.proofBox && (
                <div className="proof-box mt-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#10E4FF] flex-shrink-0 mt-0.5" />
                  <span className="proof-text">{diff.proofBox}</span>
                </div>
              )}

              {/* Impact Number (mobile) */}
              <div className="diff-impact-mobile lg:hidden flex justify-center mt-8">
                <div className="flex items-center gap-4 bg-opacity-10 border border-opacity-30 p-6 rounded-lg" style={{
                  backgroundColor: `${diff.iconColor}1A`,
                  borderColor: `${diff.iconColor}4D`
                }}>
                  <div style={{ color: diff.iconColor }}>
                    {diff.impactNumber.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold" style={{ color: diff.iconColor }}>
                      {diff.impactNumber.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      {diff.impactNumber.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-300 mb-6">
            Prêt à travailler avec une agence qui assume ses prix, protège vos données,
            et garantit vos résultats ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-dainamics-primary hover:bg-dainamics-secondary text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Parlons de votre projet
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SwissDifferentiators;
