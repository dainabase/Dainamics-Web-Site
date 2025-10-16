import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'LEXAIA',
      subtitle: 'Plateforme Juridique IA',
      category: 'Automatisation juridique | Architecture microservices',
      description:
        "Plateforme juridique intelligente combinant IA générative, RAG dual (documents privés + base juridique publique), et automatisation de workflows. Architecture microservices complète avec 40+ services orchestrés pour cabinets d'avocats.",
      stack: [
        'Next.js 15',
        'React 19',
        'Python FastAPI',
        'LangChain',
        'PostgreSQL',
        'Docker',
        'Qdrant',
        'n8n',
      ],
      results: [
        '40+ microservices orchestrés',
        'RAG dual : documents privés + base juridique',
        'OCR multilingue (90+ langues)',
        '4 agents IA conversationnels',
        'Architecture scalable multi-tenant',
      ],
      impact: [
        '15-20h/semaine économisées par avocat',
        'Recherche jurisprudentielle 10x plus rapide',
        'Analyse contrats en 2 minutes',
      ],
      screenshot: null, // Placeholder à venir
      color: {
        primary: '#7B2FFF',
        secondary: '#5E24BF',
        gradient: 'from-[#7B2FFF] to-[#5E24BF]',
      },
    },
    {
      id: 2,
      title: 'ENKI REALITY',
      subtitle: 'Plateforme Immobilière Agentique',
      category: 'Immobilier Chypre | Agents IA autonomes',
      description:
        "Plateforme immobilière de nouvelle génération pour le marché chypriote, propulsée par agents IA autonomes. Recherche conversationnelle, CRM intelligent, optimisation fiscale automatisée (Exaia), et pipeline commercial orchestré. Première solution B2B2C véritablement agentique du secteur.",
      stack: [
        'Next.js 14',
        'TypeScript',
        'Supabase',
        'Claude AI',
        'Tailwind CSS',
        'Mixpanel',
        'PostgreSQL',
        'Edge Functions',
      ],
      results: [
        '6 agents IA spécialisés (CRM, Fiscal, Analytics...)',
        'Recherche conversationnelle multilingue (8 langues)',
        'Optimisation fiscale automatisée (15k-140k€/an)',
        'Pipeline commercial 10 étapes automatisé',
        'Golden Visa calculator intégré',
      ],
      impact: [
        '+218% taux conversion (7% vs 2,2% secteur)',
        '+340% ROI marketing',
        '10x capacité gestion prospects',
        '-60% temps recherche utilisateurs',
      ],
      screenshot: 'https://page.gensparksite.com/v1/base64_upload/6931ccfc66db10cbcf7b902099c02c84',
      color: {
        primary: '#10E4FF',
        secondary: '#0CB4D4',
        gradient: 'from-[#10E4FF] to-[#0CB4D4]',
      },
    },
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
    <section className="featured-projects-section py-24 bg-[#050510] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dainamics-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Titre section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Projets{' '}
            <span className="bg-gradient-to-r from-dainamics-primary to-dainamics-secondary bg-clip-text text-transparent">
              Réalisés
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des architectures IA complexes qui transforment des industries entières
          </p>
        </motion.div>

        {/* Grid projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card bg-gradient-to-br from-[#0A0A1B] to-[#050510] border border-gray-800 rounded-2xl overflow-hidden hover:border-dainamics-primary transition-all duration-300 hover:shadow-2xl hover:shadow-dainamics-primary/20"
            >
              {/* Screenshot */}
              <div className="screenshot-wrapper relative h-64 bg-gray-900/50 overflow-hidden">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500 text-lg">
                      {project.title} Interface - Screenshot à venir
                    </p>
                  </div>
                )}
                {/* Overlay gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color.gradient} opacity-10`}
                />
              </div>

              {/* Contenu */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p
                    className="text-lg font-semibold mb-1"
                    style={{ color: project.color.primary }}
                  >
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>

                {/* Description */}
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stack technique */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Résultats */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Résultats Techniques
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: project.color.primary }}
                          strokeWidth={2.5}
                        />
                        <span className="text-sm text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Impact Métier
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-dainamics-success"
                          strokeWidth={2.5}
                        />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${project.color.primary}, ${project.color.secondary})`,
                  }}
                >
                  Discuter d'un projet similaire
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
