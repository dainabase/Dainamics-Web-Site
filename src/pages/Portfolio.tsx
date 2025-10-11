// src/pages/Portfolio.tsx

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  portfolioProjects, 
  getFeaturedProjects,
  getProjectsByCategory,
  categoryColors,
  complexityColors,
  type PortfolioProject 
} from '@/data/portfolio';
import { iconMapper } from '@/utils/iconMapper';
import { ArrowRight, Filter, X } from 'lucide-react';

/**
 * Page Portfolio - Projets DAINAMICS
 * 
 * Affiche les 5 projets phares avec:
 * - Featured projects (LEXAIA, ENKI-REALTY) en avant
 * - Filtres par catégorie, industrie, complexité
 * - Animations Framer Motion
 * - Design System strict (CATEGORY_COLORS, COMPLEXITY_COLORS)
 * - Icônes dynamiques via iconMapper
 */

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);

  // Featured projects (LEXAIA, ENKI-REALTY)
  const featuredProjects = getFeaturedProjects();

  // Filtrage des projets
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      if (project.featured) return false; // Featured projects séparés
      if (selectedCategory && project.category !== selectedCategory) return false;
      if (selectedIndustry && project.industry !== selectedIndustry) return false;
      if (selectedComplexity && project.complexity !== selectedComplexity) return false;
      return true;
    });
  }, [selectedCategory, selectedIndustry, selectedComplexity]);

  // Liste unique des industries
  const industries = useMemo(() => {
    return [...new Set(portfolioProjects.map(p => p.industry))];
  }, []);

  // Reset filtres
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedIndustry(null);
    setSelectedComplexity(null);
  };

  const hasActiveFilters = selectedCategory || selectedIndustry || selectedComplexity;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6366F1]/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                background: 'linear-gradient(to right, #6366F1, #10E4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Projets qui Transforment
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-400 mb-8"
            >
              5 projets • 3 catégories • CHF 850K+ économisés annuellement
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {Object.entries(categoryColors).map(([key, color]) => (
                <Badge
                  key={key}
                  variant="outline"
                  className="px-4 py-2 text-sm border-2 cursor-pointer transition-all"
                  style={{
                    borderColor: selectedCategory === key ? color : 'rgba(255,255,255,0.2)',
                    backgroundColor: selectedCategory === key ? `${color}20` : 'transparent',
                    color: selectedCategory === key ? color : '#fff'
                  }}
                  onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                >
                  {key === 'ia' ? 'Intelligence Artificielle' : 
                   key === 'automatisation' ? 'Automatisation' : 'Développement'}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Projets Phares
          </motion.h2>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <Badge
                    className="px-3 py-1"
                    style={{
                      backgroundColor: `${categoryColors[project.category]}20`,
                      color: categoryColors[project.category],
                      borderColor: categoryColors[project.category]
                    }}
                  >
                    {project.category.toUpperCase()}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-3 py-1"
                    style={{
                      borderColor: complexityColors[project.complexity],
                      color: complexityColors[project.complexity]
                    }}
                  >
                    {project.complexity}
                  </Badge>
                  <span className="text-sm text-gray-400">{project.industry}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-gray-300 mb-6">{project.description}</p>

                {/* Challenge & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">DÉFI</h4>
                    <p className="text-gray-300">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">SOLUTION</h4>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {Object.values(project.results).map((metric, idx) => {
                    if (!metric) return null;
                    const Icon = iconMapper[metric.icon];
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        {Icon && (
                          <div 
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${categoryColors[project.category]}20` }}
                          >
                            <Icon size={20} style={{ color: categoryColors[project.category] }} />
                          </div>
                        )}
                        <div>
                          <div className="text-2xl font-bold" style={{ color: categoryColors[project.category] }}>
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mb-6">
                    <p className="text-gray-300 italic mb-4">"{project.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366F1] to-[#10E4FF]" />
                      <div>
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div className="text-sm text-gray-400">
                          {project.testimonial.role} • {project.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="group/btn"
                  style={{ borderColor: categoryColors[project.category] }}
                >
                  <span style={{ color: categoryColors[project.category] }}>Voir les Détails</span>
                  <ArrowRight 
                    size={16} 
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    style={{ color: categoryColors[project.category] }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <span className="font-semibold">Filtres:</span>
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry || ''}
              onChange={(e) => setSelectedIndustry(e.target.value || null)}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-[#6366F1]"
            >
              <option value="">Toutes les Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>

            {/* Complexity Filter */}
            <select
              value={selectedComplexity || ''}
              onChange={(e) => setSelectedComplexity(e.target.value || null)}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-[#6366F1]"
            >
              <option value="">Toutes Complexités</option>
              <option value="starter">Starter</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            {/* Reset Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-gray-400 hover:text-white"
              >
                <X size={16} className="mr-2" />
                Réinitialiser
              </Button>
            )}

            {/* Results Count */}
            <span className="ml-auto text-sm text-gray-400">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Autres Projets
          </motion.h2>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
              >
                {/* Badges */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    className="px-2 py-1 text-xs"
                    style={{
                      backgroundColor: `${categoryColors[project.category]}20`,
                      color: categoryColors[project.category]
                    }}
                  >
                    {project.category.toUpperCase()}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-2 py-1 text-xs"
                    style={{
                      borderColor: complexityColors[project.complexity],
                      color: complexityColors[project.complexity]
                    }}
                  >
                    {project.complexity}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.industry} • {project.year}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics Preview */}
                <div className="space-y-3 mb-6">
                  {Object.values(project.results).slice(0, 2).map((metric, idx) => {
                    if (!metric) return null;
                    const Icon = iconMapper[metric.icon];
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        {Icon && <Icon size={16} className="text-[#6366F1]" />}
                        <span className="text-sm font-semibold text-[#6366F1]">{metric.value}</span>
                        <span className="text-xs text-gray-400">{metric.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400 mb-4">
                Aucun projet ne correspond aux filtres sélectionnés
              </p>
              <Button onClick={resetFilters} variant="outline">
                Réinitialiser les filtres
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#6366F1]/20 to-[#10E4FF]/20 rounded-2xl p-12 border border-[#6366F1]/30"
          >
            <h2 className="text-4xl font-bold mb-6">
              Votre Projet Pourrait Être le Prochain
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transformez votre entreprise avec l'IA et l'automatisation.
              Démarrons ensemble.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white"
              >
                Démarrer un Projet
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10"
              >
                Diagnostic Gratuit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}