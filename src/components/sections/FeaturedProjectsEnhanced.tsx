import React from 'react';
import { motion } from 'framer-motion';

interface ProjectMetric {
  value: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: ProjectMetric[];
  link?: string;
}

const FeaturedProjectsEnhanced: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'lexaia',
      title: 'LEXAIA',
      category: '💼 Finance / Legal Tech',
      description:
        "Automatisation extraction données légales depuis PDFs complexes. OCR intelligent + validation IA pour zéro erreur de saisie manuelle.",
      metrics: [
        { value: '40h', label: 'Par semaine économisées' },
        { value: '€60K', label: 'Économies annuelles' },
        { value: '99.8%', label: 'Précision extraction' },
        { value: '2 sem', label: 'Délai livraison' },
      ],
      link: '#',
    },
    {
      id: 'enki-reality',
      title: 'ENKI REALITY',
      category: '🏠 PropTech / Real Estate',
      description:
        "Chatbot IA 24/7 qualification leads immobiliers automatique. Réponses instantanées, prise de RDV intégrée, CRM synchronisé temps réel.",
      metrics: [
        { value: '3 mois', label: 'ROI atteint' },
        { value: '85%', label: 'Leads qualifiés auto' },
        { value: '24/7', label: 'Disponibilité' },
        { value: '+120%', label: 'Conversions' },
      ],
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 relative overflow-hidden bg-dainamics-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-8">
        <div className="inline-block px-4 py-2 rounded-lg bg-dainamics-success/10 border border-dainamics-success/30 text-dainamics-success font-bold text-sm">
          ✨ VERSION ENRICHIE (Comparaison Visuelle)
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white"
        >
          Ils Ont Récupéré{' '}
          <span className="bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent">
            Leur Temps
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Des projets concrets, des gains mesurables, des clients satisfaits
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="card-elevated h-full flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dainamics-primary/10 text-dainamics-secondary border border-dainamics-primary/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-dainamics-primary group-hover:to-dainamics-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-dainamics-primary/20 to-transparent" />

                <div className="p-6 pt-4 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 pt-4 mt-auto">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-3 px-6 rounded-lg bg-gradient-to-r from-dainamics-primary to-dainamics-secondary text-white font-semibold text-center shadow-lg hover:shadow-dainamics-primary/50 transition-all duration-300"
                  >
                    Voir le Projet →
                  </motion.a>
                </div>
              </div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dainamics-primary/0 to-dainamics-secondary/0 group-hover:from-dainamics-primary/5 group-hover:to-dainamics-secondary/5 blur-xl transition-all duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-dainamics-card border border-dainamics-border"
        >
          <h4 className="text-lg font-bold text-white mb-3">
            📊 Différences Version Enrichie :
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              ✅ <strong className="text-white">Badge secteur</strong> : Finance, PropTech (contexte immédiat)
            </li>
            <li>
              ✅ <strong className="text-white">Separator gradient</strong> : Séparation visuelle élégante
            </li>
            <li>
              ✅ <strong className="text-white">Metrics 2×2</strong> : Outcomes quantifiés (40h, €60K, 99.8%, etc.)
            </li>
            <li>
              ✅ <strong className="text-white">Hover effects</strong> : Scale 1.02 + glow violet + titre gradient
            </li>
            <li>
              ✅ <strong className="text-white">Bouton gradient</strong> : Violet→Cyan avec shadow
            </li>
            <li>
              ✅ <strong className="text-white">Animations stagger</strong> : Cards apparaissent séquentiellement
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsEnhanced;
