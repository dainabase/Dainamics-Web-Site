import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Check } from 'lucide-react';

interface EngagementLevel {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaColor: string;
  borderColor: string;
  glowColor: string;
}

const HorizontalScrollEngagement: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-75%"]);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 0, 0]);

  const engagementLevels: EngagementLevel[] = [
    {
      badge: 'Idéal pour démarrer',
      badgeColor: 'bg-[#7B2FFF]/20 text-[#7B2FFF] border-[#7B2FFF]/30',
      title: 'Discovery & Stratégie IA',
      description: "Identifiez où l'IA peut transformer VOS processus métier. Assessment complet, roadmap priorisée par ROI, et POC fonctionnel pour valider la faisabilité technique immédiatement.",
      features: [
        'Assessment opportunités IA sur vos processus actuels',
        'Roadmap priorisée par ROI et facilité d\'implémentation',
        'POC fonctionnel + Workshop équipe inclus (4h)',
      ],
      cta: 'Démarrons votre stratégie',
      ctaColor: 'bg-gradient-to-r from-[#7B2FFF] to-[#9D4FFF]',
      borderColor: 'border-[#7B2FFF]/30 hover:border-[#7B2FFF]',
      glowColor: 'rgba(123, 47, 255, 0.25)',
    },
    {
      badge: 'GARANTIE ROI',
      badgeColor: 'bg-[#10E4FF]/20 text-[#10E4FF] border-[#10E4FF]/30',
      title: 'Quick Wins',
      description: 'Automatisez UNE tâche répétitive en 2-4 semaines. Scope précis, ROI garanti sous 6 mois ou remboursement intégral. Formation équipe incluse pour autonomie complète.',
      features: [
        'Mise en production rapide : 2-4 semaines maximum',
        'ROI garanti 2-6 mois ou remboursement intégral',
        'Formation 4h + Support 1 mois inclus',
      ],
      cta: 'Voir exemples Quick Wins',
      ctaColor: 'bg-gradient-to-r from-[#10E4FF] to-[#4FF0FF]',
      borderColor: 'border-[#10E4FF]/30 hover:border-[#10E4FF]',
      glowColor: 'rgba(16, 228, 255, 0.25)',
    },
    {
      badge: 'Projets complexes',
      badgeColor: 'bg-[#0AFF9D]/20 text-[#0AFF9D] border-[#0AFF9D]/30',
      title: 'Développement Custom',
      description: 'Solution métier sur-mesure pour besoins complexes. Plateforme multi-agents IA, automatisation bout-en-bout, intégration complète systèmes existants. Documentation parfaite, approche agile, support 3 mois inclus.',
      features: [
        'Solution sur-mesure alignée processus uniques',
        'Intégration complète CRM, ERP, outils métier',
        'Documentation parfaite + Support 3 mois inclus',
      ],
      cta: 'Discutons de votre projet',
      ctaColor: 'bg-gradient-to-r from-[#0AFF9D] to-[#4AFFB8]',
      borderColor: 'border-[#0AFF9D]/30 hover:border-[#0AFF9D]',
      glowColor: 'rgba(10, 255, 157, 0.25)',
    },
    {
      badge: 'Partenariat durable',
      badgeColor: 'bg-[#FF5A00]/20 text-[#FF5A00] border-[#FF5A00]/30',
      title: 'Support & Évolution Continue',
      description: 'Partenariat durable : votre solution évolue avec votre métier. Support réactif <4h, évolutions mensuelles, monitoring proactif. Formation continue et mises à jour sécurité garanties.',
      features: [
        'Support réactif <4h + Résolution rapide',
        'Évolutions mensuelles + Monitoring proactif',
        'Formation continue + Mises à jour sécurité',
      ],
      cta: 'Découvrir le support',
      ctaColor: 'bg-gradient-to-r from-[#FF5A00] to-[#FF8A40]',
      borderColor: 'border-[#FF5A00]/30 hover:border-[#FF5A00]',
      glowColor: 'rgba(255, 90, 0, 0.25)',
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-[#050510]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B2FFF]/2 to-transparent pointer-events-none" />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          className="absolute left-0 top-1/4 z-10 max-w-2xl pl-8 md:pl-16 lg:pl-24"
          style={{ opacity: titleOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Services :<br />
              <span className="bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#0AFF9D] bg-clip-text text-transparent">
                Du Diagnostic au Support
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Quatre niveaux d'engagement pour accompagner votre transformation digitale, de l'exploration stratégique au partenariat long terme
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ x }}
          className="flex gap-8 pl-8 md:pl-[45rem] relative z-30"
        >
          {engagementLevels.map((level, index) => (
            <EngagementCard key={index} level={level} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface EngagementCardProps {
  level: EngagementLevel;
  index: number;
}

const EngagementCard: React.FC<EngagementCardProps> = ({ level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -8 }}
      className={`group relative flex-shrink-0 w-[420px] rounded-2xl overflow-hidden border-2 ${level.borderColor} transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1B] to-[#050510]" />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          boxShadow: `0 0 80px 20px ${level.glowColor}`,
        }}
      />

      <div className="relative z-10 p-8 flex flex-col h-full min-h-[580px]">
        <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border mb-6 w-fit ${level.badgeColor}`}>
          {level.badge}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {level.title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-base mb-6">
          {level.description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow">
          {level.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#0AFF9D] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3.5 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${level.ctaColor}`}
        >
          {level.cta}
        </button>
      </div>
    </motion.div>
  );
};

export default HorizontalScrollEngagement;
