import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, TrendingUp, ArrowUpRight, Check } from 'lucide-react';

interface Differentiator {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  title: string;
  subtitle: string;
  shortPoints: string[];
  gradientFrom: string;
  gradientTo: string;
  patternType: 'grid' | 'dots' | 'waves';
  ctaLink: string;
  ctaText: string;
}

const SwissDifferentiatorsReveal: React.FC = () => {
  const differentiators: Differentiator[] = [
    {
      id: 'data-sovereignty',
      icon: Shield,
      iconColor: '#7B2FFF',
      title: 'Vos Données Restent en Suisse',
      subtitle: 'Souveraineté & Sécurité Garanties',
      shortPoints: [
        'Infrastructure 100% Suisse',
        'Conformité RGPD + LPD stricte',
        'Support local réactif <4h',
      ],
      gradientFrom: '#7B2FFF',
      gradientTo: '#9D4FFF',
      patternType: 'grid',
      ctaLink: '/about',
      ctaText: 'Notre approche',
    },
    {
      id: 'transparency',
      icon: Eye,
      iconColor: '#10E4FF',
      title: 'Prix Clairs, Pas de Surprises',
      subtitle: 'Transparence Comme Différenciateur',
      shortPoints: [
        'Pricing public et transparent',
        'Zéro frais cachés découverts plus tard',
        'Timeline réaliste, pas de promesses vides',
      ],
      gradientFrom: '#10E4FF',
      gradientTo: '#4FF0FF',
      patternType: 'dots',
      ctaLink: '/pricing',
      ctaText: 'Voir nos tarifs',
    },
    {
      id: 'roi-guaranteed',
      icon: TrendingUp,
      iconColor: '#0AFF9D',
      title: "Business d'Abord, Techno Ensuite",
      subtitle: 'ROI Mesurable ou Remboursé',
      shortPoints: [
        'ROI garanti 2-6 mois maximum',
        'Heures économisées mesurées précisément',
        'Remboursement si objectifs non atteints',
      ],
      gradientFrom: '#0AFF9D',
      gradientTo: '#4AFFB8',
      patternType: 'waves',
      ctaLink: '/solutions/quick-wins',
      ctaText: 'Nos garanties',
    },
  ];

  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B2FFF]/2 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-3 mb-6"
          >
            <Shield className="w-10 h-10 text-[#7B2FFF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Pourquoi les PME Suisses{' '}
            <span className="bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#0AFF9D] bg-clip-text text-transparent">
              Nous Choisissent
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Trois différenciateurs qui font toute la différence face aux agences
            traditionnelles et aux prestataires offshore
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {differentiators.map((diff, index) => (
            <DifferentiatorCard key={diff.id} diff={diff} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Prêt à travailler avec une agence qui assume ses prix, protège vos
            données, et garantit vos résultats ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7B2FFF] to-[#FF5A00] hover:opacity-90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Parlons de votre projet
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface DifferentiatorCardProps {
  diff: Differentiator;
  index: number;
}

const DifferentiatorCard: React.FC<DifferentiatorCardProps> = ({
  diff,
  index,
}) => {
  const Icon = diff.icon;

  const getPattern = () => {
    switch (diff.patternType) {
      case 'grid':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`grid-${diff.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${diff.id})`} />
          </svg>
        );
      case 'dots':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`dots-${diff.id}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dots-${diff.id})`} />
          </svg>
        );
      case 'waves':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`waves-${diff.id}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q25 30, 50 50 T100 50" fill="none" stroke="white" strokeWidth="2"/>
                <path d="M0 70 Q25 50, 50 70 T100 70" fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#waves-${diff.id})`} />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover="hover"
      className="w-full h-[380px] relative group cursor-pointer"
    >
      <div
        className="h-1/2 p-6 flex flex-col justify-center relative z-20"
        style={{
          background: `linear-gradient(135deg, #0A0A1B 0%, ${diff.iconColor}15 100%)`,
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
      >
        <div className="mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: `${diff.iconColor}20`,
              boxShadow: `0 0 20px ${diff.iconColor}30`,
            }}
          >
            <Icon className="w-7 h-7" style={{ color: diff.iconColor }} />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {diff.title}
        </h3>

        <p
          className="text-sm font-semibold"
          style={{ color: diff.iconColor }}
        >
          {diff.subtitle}
        </p>
      </div>

      <motion.div
        initial={{
          top: '0%',
          right: '0%',
        }}
        variants={{
          hover: {
            top: '50%',
            right: '50%',
          },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="absolute inset-0 z-10 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${diff.gradientFrom} 0%, ${diff.gradientTo} 100%)`,
          borderRadius: '16px',
        }}
      >
        {getPattern()}
      </motion.div>

      <a
        href={diff.ctaLink}
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 flex flex-col items-center justify-center text-white transition-all duration-300 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${diff.iconColor}10 0%, ${diff.iconColor}05 100%)`,
          borderBottomRightRadius: '16px',
          borderLeft: `1px solid ${diff.iconColor}30`,
          borderTop: `1px solid ${diff.iconColor}30`,
        }}
      >
        <div className="px-4 mb-3 space-y-2">
          {diff.shortPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: diff.iconColor }}
              />
              <span className="text-xs text-gray-300 leading-tight">
                {point}
              </span>
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: diff.iconColor }}
        >
          <span>{diff.ctaText}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </a>
    </motion.div>
  );
};

export default SwissDifferentiatorsReveal;
