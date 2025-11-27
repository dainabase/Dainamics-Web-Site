import React, { useState } from 'react';
import { Check, ExternalLink, Eye, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: 'LEXAIA',
      subtitle: 'Plateforme Juridique IA',
      detailUrl: '/realisations/lexaia-legal-ai',
      category: 'LegalTech | Automatisation juridique | Architecture microservices',
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
        'Réduction 95% erreurs documents juridiques',
      ],
      screenshot: '/WhatsApp Image 2025-10-28 at 11.42.06 (1).jpeg',
      color: {
        primary: '#7B2FFF',
        secondary: '#5E24BF',
        gradient: 'from-[#7B2FFF] to-[#5E24BF]',
        glow: 'rgba(123, 47, 255, 0.4)',
      },
    },
    {
      id: 2,
      title: 'ΣNKI REALTY',
      subtitle: 'Plateforme Immobilière Agentique',
      detailUrl: '/realisations/enki-realty-automation',
      category: 'PropTech | Agents IA autonomes | Architecture B2B2C',
      description:
        "Plateforme immobilière de nouvelle génération pour le marché chypriote, propulsée par agents IA autonomes. Recherche conversationnelle, CRM intelligent, optimisation fiscale automatisée (LEXAIA), et pipeline commercial orchestré. Première solution B2B2C véritablement agentique du secteur.",
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
        glow: 'rgba(16, 228, 255, 0.4)',
      },
    },
    {
      id: 3,
      title: 'InMotion Digital Signage',
      subtitle: 'Vitrines Intelligentes avec Détection IA',
      detailUrl: '/realisations/inmotion-digital-signage',
      category: 'RetailTech | IoT | Plateforme Sur Mesure',
      description:
        "Système de signalisation numérique interactive pour retail de luxe. 9 vitrines autonomes avec détection de présence par IA (ML Kit). Intégration invisible derrière verre sans tain (spy mirror chrome 30%). Plateforme enterprise-grade avec gestion centralisée à distance.",
      stack: [
        'Kotlin Android',
        'Google ML Kit',
        'CameraX API',
        'Node.js 20',
        'React 18',
        'PostgreSQL',
        'Socket.IO',
        'TypeScript',
      ],
      results: [
        '9 vitrines connectées avec détection IA',
        'Détection >85% précision derrière verre sans tain',
        'Architecture offline-first garantie',
        'Synchronisation temps réel (WebSockets)',
        'Dashboard gestion centralisée',
      ],
      impact: [
        '-70% coûts opérationnels',
        '99.9% uptime système',
        'Déploiement contenu <5min',
        'Gestion 100% à distance (zéro déplacement)',
      ],
      screenshot: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: {
        primary: '#D4AF37',
        secondary: '#B8941F',
        gradient: 'from-[#D4AF37] to-[#B8941F]',
        glow: 'rgba(212, 175, 55, 0.4)',
      },
    },
    {
      id: 4,
      title: 'DATAVSN',
      subtitle: 'Ciblage Publicitaire IA & Analytics Retail',
      detailUrl: '/realisations/datavsn-retail-analytics',
      category: 'RetailTech / AdTech | Reconnaissance IA | Analytics 24/7',
      description:
        "Système intelligent combinant affichage dynamique (écrans, hologrammes 3D, totems) avec reconnaissance d'audience IA. Analyse temps réel âge, sexe, émotions, temps d'attention pour ciblage publicitaire automatique. Dashboard analytics my.datavsn.ch pour retailers.",
      stack: [
        'TensorFlow Lite',
        'OpenCV',
        'Python',
        'NVIDIA Jetson',
        'FastAPI',
        'Next.js 14',
        'PostgreSQL',
        'TimescaleDB',
      ],
      results: [
        '8+ catégories ciblage démographique temps réel',
        'Détection < 1 sec (âge, sexe, émotions)',
        'Affichage multi-supports (écrans, hologrammes, totems)',
        'Dashboard analytics 24/7 (OTS, conversion, attention)',
        '100% conforme RGPD/LPD (traitement local)',
      ],
      impact: [
        'Visibilité messages publicitaires mesurable',
        'Ciblage automatique audience temps réel',
        'ROI campagnes affichage optimisé',
        'Analytics "Google-like" pour points de vente physiques',
      ],
      screenshot: '/datavsn-dashboard.png',
      color: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        gradient: 'from-[#6366F1] to-[#4F46E5]',
        glow: 'rgba(99, 102, 241, 0.4)',
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
    <section className="featured-projects-section py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Titre section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Exemples de Projets Réalisés</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Des architectures IA complexes qui transforment des industries entières
          </p>
        </motion.div>

        {/* Grid projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card bg-black border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                '--hover-border-color': project.color.primary,
                '--hover-shadow-color': project.color.glow,
              } as React.CSSProperties}
            >
              {/* Screenshot */}
              <div className="screenshot-wrapper relative h-48 sm:h-56 md:h-64 bg-gray-900/50 overflow-hidden">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover block"
                  />
                ) : (
                  <div className="relative flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                      </svg>
                    </div>

                    <div className="relative text-center z-10">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${project.color.gradient} opacity-20 flex items-center justify-center`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10" />
                      </div>
                      <p className="text-gray-400 font-semibold text-lg">{project.title}</p>
                      <p className="text-gray-600 text-sm mt-1">Interface en production</p>
                    </div>
                  </div>
                )}
                {/* Overlay gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color.gradient} opacity-5`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              </div>

              {/* Contenu */}
              <div className="p-5 sm:p-6 md:p-8">
                {/* Header - Toujours visible */}
                <div
                  className="cursor-pointer"
                  onClick={() => toggleProject(project.id)}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p
                        className="text-base sm:text-lg font-semibold mb-1"
                        style={{ color: project.color.primary }}
                      >
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">{project.category}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                        style={{ color: expandedProject === project.id ? project.color.primary : undefined }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Contenu expandable */}
                <AnimatePresence mode="wait">
                  {expandedProject === project.id && (
                    <motion.div
                      key={`project-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stack technique */}
                      <div className="mb-5 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                          Stack Technique
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.stack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Résultats */}
                      <div className="mb-5 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                          Résultats Techniques
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check
                                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                                style={{ color: project.color.primary }}
                                strokeWidth={2.5}
                              />
                              <span className="text-xs sm:text-sm text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                          Impact Métier
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {project.impact.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check
                                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-dainamics-success"
                                strokeWidth={2.5}
                              />
                              <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={project.detailUrl}
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex-1 justify-center border-2"
                          style={{
                            background: `linear-gradient(135deg, ${project.color.primary}, ${project.color.secondary})`,
                            borderColor: project.color.primary,
                          }}
                        >
                          <Eye className="w-4 h-4" />
                          <span className="whitespace-nowrap">Voir le détail</span>
                        </Link>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 group flex-1 justify-center border-2"
                          style={{
                            color: project.color.primary,
                            borderColor: project.color.primary,
                            background: 'transparent',
                          }}
                        >
                          <span className="whitespace-nowrap">Projet similaire</span>
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
