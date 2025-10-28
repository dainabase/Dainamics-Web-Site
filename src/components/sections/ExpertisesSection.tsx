import React from 'react';
import { motion } from 'framer-motion';

interface Expertise {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  capacities: {
    title: string;
    description: string;
  }[];
  examples: string[];
  roi: {
    value: string;
    details: string;
  };
  ctaText: string;
  ctaLink: string;
  color: {
    primary: string;
    gradient: string;
    glow: string;
  };
}

const ExpertisesSection: React.FC = () => {
  const expertises: Expertise[] = [
    {
      id: 'ia',
      icon: '🧠',
      title: 'Intelligence Artificielle',
      tagline: 'Intelligence qui Comprend, Prédit, Décide',
      capacities: [
        {
          title: 'Comprend',
          description: 'Langage naturel, emails, documents, images',
        },
        {
          title: 'Prédit',
          description: 'Demandes clients, pannes machines, ventes futures',
        },
        {
          title: 'Décide',
          description: 'Recommande actions, optimise ressources, détecte anomalies',
        },
      ],
      examples: [
        'Chatbots intelligents 24/7',
        'Analyse prédictive ventes',
        'OCR factures intelligent',
        'Génération contenu marketing',
      ],
      roi: {
        value: '250-400%',
        details: 'ROI première année (Source : Étude 20 Automatisations PME)',
      },
      ctaText: 'Voir Exemples IA',
      ctaLink: '#exemples-ia',
      color: {
        primary: '#7B2FFF',
        gradient: 'from-[#7B2FFF] to-[#5E24BF]',
        glow: 'rgba(123, 47, 255, 0.4)',
      },
    },
    {
      id: 'automatisations',
      icon: '⚙️',
      title: 'Automatisations',
      tagline: 'Robots Logiciels 24/7 Sans Erreur',
      capacities: [
        {
          title: 'Exécute 24/7',
          description: 'Travaille nuit, weekend, jours fériés',
        },
        {
          title: 'Zéro erreur',
          description: 'Précision 100%, pas de fatigue',
        },
        {
          title: 'Évolutif',
          description: "De 10 à 10'000 tâches sans embauche",
        },
      ],
      examples: [
        'RPA (copie données entre systèmes)',
        'Workflows métier (validations auto)',
        'Intégrations API (sync CRM↔ERP)',
        'ETL données (consolidation temps réel)',
      ],
      roi: {
        value: '200-300%',
        details: 'ROI première année (Source : Étude 20 Automatisations PME)',
      },
      ctaText: 'Voir Exemples Auto',
      ctaLink: '#exemples-automatisations',
      color: {
        primary: '#10E4FF',
        gradient: 'from-[#10E4FF] to-[#0CB4D4]',
        glow: 'rgba(16, 228, 255, 0.4)',
      },
    },
    {
      id: 'software',
      icon: '💻',
      title: 'Développement Software',
      tagline: 'Applications sur Mesure pour Votre Métier',
      capacities: [
        {
          title: 'Votre métier',
          description: 'Conçu pour vos processus uniques',
        },
        {
          title: 'Vos règles',
          description: 'Logique métier dans le code',
        },
        {
          title: 'Évolutif',
          description: 'Grandit avec votre entreprise',
        },
      ],
      examples: [
        'Portails web métier (ex: LEXAIA)',
        'Applications mobiles terrain',
        'Dashboards temps réel personnalisés',
        'Systèmes gestion sur mesure',
      ],
      roi: {
        value: 'Variable',
        details: 'Souvent 40-60% coûts vs développement interne',
      },
      ctaText: 'Voir Projets Réalisés',
      ctaLink: '#projets',
      color: {
        primary: '#0AFF9D',
        gradient: 'from-[#0AFF9D] to-[#06D989]',
        glow: 'rgba(10, 255, 157, 0.4)',
      },
    },
  ];

  const sectors = [
    { label: 'Finance', color: '#7B2FFF' },
    { label: 'RH', color: '#10E4FF' },
    { label: 'Marketing', color: '#0AFF9D' },
    { label: 'Ventes', color: '#FF5A00' },
    { label: 'Support', color: '#7B2FFF' },
    { label: 'Production', color: '#10E4FF' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      role="region"
      aria-labelledby="expertises-heading"
      className="expertises-section py-24 bg-dainamics-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dainamics-secondary/4 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            id="expertises-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            3 Expertises.{' '}
            <span className="bg-gradient-to-r from-dainamics-primary via-dainamics-secondary to-dainamics-success bg-clip-text text-transparent">
              Infinies Possibilités.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            IA · Automatisations · Développement Software sur Mesure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {expertises.map((expertise) => (
            <motion.div
              key={expertise.id}
              variants={itemVariants}
              className="expertise-card group relative"
              role="listitem"
            >
              <div
                className="card-elevated h-full flex flex-col p-8 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  '--expertise-color': expertise.color.primary,
                  '--expertise-glow': expertise.color.glow,
                } as React.CSSProperties}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${expertise.color.gradient} opacity-20 flex items-center justify-center text-4xl mb-4`}
                  >
                    {expertise.icon}
                  </div>
                  <h3
                    id={`expertise-${expertise.id}`}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {expertise.title}
                  </h3>
                  <p
                    className="text-base font-semibold"
                    style={{ color: expertise.color.primary }}
                  >
                    {expertise.tagline}
                  </p>
                </div>

                <div
                  className="h-px w-full mb-6 bg-gradient-to-r from-transparent to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${expertise.color.primary}40, transparent)`,
                  }}
                />

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    3 Capacités Clés
                  </h4>
                  <ul className="space-y-3">
                    {expertise.capacities.map((capacity, idx) => (
                      <li key={idx}>
                        <span
                          className="font-semibold"
                          style={{ color: expertise.color.primary }}
                        >
                          {capacity.title}
                        </span>
                        <span className="text-sm text-gray-400">
                          {' '}
                          : {capacity.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Exemples Concrets
                  </h4>
                  <ul className="space-y-2">
                    {expertise.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="text-lg leading-none mt-0.5"
                          style={{ color: expertise.color.primary }}
                        >
                          •
                        </span>
                        <span className="text-sm text-gray-300">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: expertise.color.primary }}
                    >
                      {expertise.roi.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {expertise.roi.details}
                    </div>
                  </div>
                </div>

                <a
                  href={expertise.ctaLink}
                  className="mt-auto block w-full py-3 px-6 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${expertise.color.primary}, ${expertise.color.primary}cc)`,
                  }}
                >
                  {expertise.ctaText} →
                </a>
              </div>

              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle, ${expertise.color.glow}, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-dainamics-card to-dainamics-background border border-dainamics-border"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
            25+ Types d'Automatisations Possibles.{' '}
            <span className="bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent">
              Tous Secteurs.
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {sectors.map((sector, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: sector.color }}
              >
                {sector.label}
              </span>
            ))}
          </div>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Nos 3 expertises combinées créent des solutions uniques pour chaque
            client. Que vous soyez dans la finance, l'industrie, les services ou le
            commerce, nous analysons{' '}
            <strong className="text-white">VOS</strong> processus et créons l'outil
            sur mesure qui multiplie votre efficacité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#solutions"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-dainamics-primary to-dainamics-secondary text-white font-semibold text-center hover:scale-105 transition-all"
            >
              Voir Toutes les Solutions →
            </a>
            <a
              href="#diagnostic"
              className="px-8 py-3 rounded-lg border-2 border-dainamics-primary text-dainamics-primary font-semibold text-center hover:bg-dainamics-primary hover:text-white transition-all"
            >
              Diagnostic Gratuit 2 min →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
