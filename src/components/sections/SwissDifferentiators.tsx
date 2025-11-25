import React from 'react';
import { Shield, Eye, TrendingUp, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Interface TypeScript pour un différenciateur condensé
 */
interface Differentiator {
  id: string;
  icon: React.ReactNode;
  color: string;
  title: string;
  subtitle: string;
  stat: {
    value: string;
    label: string;
  };
}

/**
 * SwissDifferentiators Section - VERSION CONDENSÉE
 * Présente les 3 USP uniques de DAINAMICS en format compact
 * Position: Après ProcessusSection sur la homepage
 */
const SwissDifferentiators: React.FC = () => {
  const differentiators: Differentiator[] = [
    {
      id: 'data-sovereignty',
      icon: <Shield className="w-8 h-8" />,
      color: '#7B2FFF',
      title: 'Données en Suisse',
      subtitle: 'Infrastructure 100% suisse. Pas de Cloud Act US.',
      stat: {
        value: '100%',
        label: 'Hébergement CH'
      }
    },
    {
      id: 'transparency',
      icon: <Eye className="w-8 h-8" />,
      color: '#10E4FF',
      title: 'Prix Affichés',
      subtitle: 'Seuls en Suisse à publier nos tarifs.',
      stat: {
        value: '0%',
        label: 'Concurrents le font'
      }
    },
    {
      id: 'roi-guaranteed',
      icon: <TrendingUp className="w-8 h-8" />,
      color: '#0AFF9D',
      title: 'ROI Garanti',
      subtitle: 'Résultats en 2-6 mois ou remboursé.',
      stat: {
        value: '45+',
        label: 'PME accompagnées'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
      className="swiss-differentiators-section py-20 bg-gradient-to-b from-dainamics-background to-[#0A0A1A]"
      aria-label="Pourquoi nous choisir"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header compact */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-white">Pourquoi les PME</span>{' '}
            <span className="text-dainamics-primary">Nous Choisissent</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trois engagements qui nous différencient des agences traditionnelles
          </p>
        </motion.div>

        {/* Cards Grid - 3 colonnes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {differentiators.map((diff) => (
            <motion.div
              key={diff.id}
              variants={itemVariants}
              className="group relative"
            >
              <div 
                className="relative h-full p-6 rounded-2xl bg-[#0A0A1A] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${diff.color}15, transparent 70%)` }}
                />

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${diff.color}20, transparent)`,
                    border: `1px solid ${diff.color}40`
                  }}
                >
                  <div style={{ color: diff.color }}>
                    {diff.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {diff.subtitle}
                </p>

                {/* Stat Badge */}
                <div 
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: `${diff.color}10`,
                    border: `1px solid ${diff.color}30`
                  }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: diff.color }}
                  >
                    {diff.stat.value}
                  </span>
                  <span className="text-xs text-gray-400">
                    {diff.stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SwissDifferentiators;
