import React from 'react';
import { Shield, Sparkles, TrendingUp } from 'lucide-react';

/**
 * Interface TypeScript pour un différenciateur
 */
interface Differentiator {
  id: string;
  icon: React.ReactNode;
  iconEmoji: string;
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
      icon: <Shield className="w-12 h-12" />,
      iconEmoji: '🇨🇭🔐',
      title: 'Vos Données Restent en Suisse',
      subtitle: 'Souveraineté & Sécurité Garanties',
      description:
        "Contrairement aux agences offshore qui stockent vos données sensibles sur AWS US ou serveurs Inde, toute notre infrastructure est hébergée en Suisse. Vos données métier, clients, et processus confidentiels ne quittent jamais le territoire suisse.",
      points: [
        'Conformité bancaire & santé : Respect strict RGPD et LPD suisse',
        'Infrastructure 100% locale : Serveurs Suisse (pas AWS US/Inde)',
        'Confidentialité garantie : NDAs renforcés, accès contrôlés',
        'Souveraineté digitale : Aucune backdoor légale étrangère',
      ],
      calloutBox: {
        type: 'warning',
        content:
          "À savoir : Les agences offshore peuvent être contraintes par des lois étrangères (Cloud Act US) d'exposer vos données métier. Avec DAINAMICS, vos secrets restent secrets.",
      },
      impactNumber: {
        value: '100%',
        label: 'Infrastructure Suisse',
      },
    },
    {
      id: 'transparency',
      icon: <Sparkles className="w-12 h-12" />,
      iconEmoji: '💡✨',
      title: 'Prix Clairs, Pas de Surprises',
      subtitle: 'La Transparence Comme Différenciateur',
      description:
        'Nous sommes les SEULS en Suisse à afficher nos prix publiquement. Pas de "contactez-nous pour devis" mystérieux. Pas de frais cachés découverts en fin de projet. Pas de commerciaux qui vous vendent du rêve. Vous savez exactement à quoi vous attendre dès le premier contact.',
      points: [
        'Pricing transparent : Ranges visibles avant même de nous contacter',
        'Scope détaillé AVANT signature : Contrat précis, zéro ambiguïté',
        'Communication directe : Accès fondateurs/CTO, pas de commerciaux',
        "Métriques succès définies : On sait ce qu'on mesure AVANT de démarrer",
      ],
      calloutBox: {
        type: 'stat',
        content:
          'Étude McKinsey 2023 : 68% des PME B2B préfèrent payer 20% de plus en échange de pricing transparent plutôt que de devis opaques.',
      },
      impactNumber: {
        value: '0%',
        label: 'Concurrents Suisses affichent leurs prix',
      },
      proofBox:
        "Pourquoi les autres cachent leurs prix ? Parce qu'ils gonflent de 40-60% en moyenne. Nous, on assume nos tarifs.",
    },
    {
      id: 'roi-guaranteed',
      icon: <TrendingUp className="w-12 h-12" />,
      iconEmoji: '📈🛡️',
      title: "Business d'Abord, Techno Ensuite",
      subtitle: 'ROI Mesurable ou Remboursé',
      description:
        'On ne vous vend pas de la "transformation digitale" abstraite ni la dernière hype technologique. On automatise des processus métier PRÉCIS, on mesure le ROI en heures économisées ou revenus générés, et on garantit le retour sur investissement en 2-6 mois. Si on ne livre pas sur nos Quick Wins, vous ne payez pas.',
      points: [
        'Approche business-first : ROI mesurable avant techno sexy',
        'Métriques concrètes : Heures économisées, CHF économisés, % erreurs réduits',
        'Garantie Quick Wins : ROI 2-6 mois ou remboursement intégral',
        'Reporting mensuel : Vous voyez les gains réels en temps réel',
      ],
      calloutBox: {
        type: 'info',
        content:
          "Track record DAINAMICS :\n• 45+ PME suisses accompagnées\n• 8 ans d'expérience terrain\n• 99% satisfaction client\n• ROI moyen constaté : 4 mois",
      },
      impactNumber: {
        value: '2-6',
        label: 'mois ROI garanti',
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

  /**
   * Retourne l'icône du point selon le contenu
   */
  const getPointIcon = (point: string): string => {
    if (point.includes('Conformité')) return '🏦';
    if (point.includes('Infrastructure')) return '🔐';
    if (point.includes('Confidentialité')) return '🛡️';
    if (point.includes('Souveraineté')) return '📍';
    if (point.includes('Pricing')) return '💰';
    if (point.includes('Scope')) return '📋';
    if (point.includes('Communication')) return '💬';
    if (point.includes('Métriques')) return '🎯';
    if (point.includes('Approche')) return '🎯';
    if (point.includes('Métriques concrètes')) return '⏱️';
    if (point.includes('Garantie')) return '🛡️';
    if (point.includes('Reporting')) return '📊';
    return '✅';
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
            <span className="text-5xl">🇨🇭</span>
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
                <div className="diff-icon-wrapper flex-shrink-0">
                  <div className="diff-icon text-5xl">{diff.iconEmoji}</div>
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
                  <div className="impact-value text-5xl font-bold text-gradient-primary">
                    {diff.impactNumber.value}
                  </div>
                  <div className="impact-label text-sm text-gray-400 text-right mt-2 max-w-[140px]">
                    {diff.impactNumber.label}
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
                    <span className="point-icon text-2xl flex-shrink-0">
                      {getPointIcon(point)}
                    </span>
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
                <div className="proof-box mt-4">
                  <span className="proof-icon">💡</span>
                  <span className="proof-text">{diff.proofBox}</span>
                </div>
              )}

              {/* Impact Number (mobile) */}
              <div className="diff-impact-mobile lg:hidden flex justify-center mt-8">
                <div className="text-center">
                  <div className="impact-value text-4xl font-bold text-gradient-primary">
                    {diff.impactNumber.value}
                  </div>
                  <div className="impact-label text-sm text-gray-400 mt-2">
                    {diff.impactNumber.label}
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
