import { useState, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  portfolioProjects,
  getFeaturedProjects,
  categoryColors,
  complexityColors,
  type PortfolioProject
} from '@/data/portfolio';
import { iconMapper } from '@/utils/iconMapper';
import { ArrowRight, Filter, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const featuredProjects = getFeaturedProjects();

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      if (project.featured) return false;
      if (selectedCategory && project.category !== selectedCategory) return false;
      if (selectedIndustry && project.industry !== selectedIndustry) return false;
      if (selectedComplexity && project.complexity !== selectedComplexity) return false;
      return true;
    });
  }, [selectedCategory, selectedIndustry, selectedComplexity]);

  const industries = useMemo(() =>
    [...new Set(portfolioProjects.map(p => p.industry))], []
  );

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedIndustry(null);
    setSelectedComplexity(null);
  };

  const hasActiveFilters = selectedCategory || selectedIndustry || selectedComplexity;

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light">
      <Navigation />

      <div ref={heroRef} className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dainamics-primary/5 to-transparent pointer-events-none" />

        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge
                className="px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: `${categoryColors.ia}20`,
                  color: categoryColors.ia,
                  border: `1px solid ${categoryColors.ia}40`
                }}
              >
                Nos Réalisations
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-primary leading-tight">
              Portfolio
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-dainamics-light/70 leading-relaxed"
            >
              Découvrez comment nous transformons les entreprises avec l'IA et l'automatisation
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dainamics-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {featuredProjects.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dainamics-light">
                Projets Phares
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-dainamics-primary via-dainamics-accent to-dainamics-cta rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dainamics-light">
                  Tous les Projets
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-dainamics-primary via-dainamics-accent to-dainamics-cta rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-dainamics-light/60" />
                <span className="text-sm text-dainamics-light/60">
                  {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <FilterButton
                label="IA"
                active={selectedCategory === 'ia'}
                onClick={() => setSelectedCategory(selectedCategory === 'ia' ? null : 'ia')}
                color={categoryColors.ia}
              />
              <FilterButton
                label="Automatisation"
                active={selectedCategory === 'automatisation'}
                onClick={() => setSelectedCategory(selectedCategory === 'automatisation' ? null : 'automatisation')}
                color={categoryColors.automatisation}
              />
              <FilterButton
                label="Développement"
                active={selectedCategory === 'developpement'}
                onClick={() => setSelectedCategory(selectedCategory === 'developpement' ? null : 'developpement')}
                color={categoryColors.developpement}
              />

              <div className="w-px h-8 bg-dainamics-light/10 mx-2" />

              {industries.map(industry => (
                <FilterButton
                  key={industry}
                  label={industry}
                  active={selectedIndustry === industry}
                  onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                  color="#F1F5F9"
                />
              ))}

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-dainamics-light/60 hover:text-dainamics-light"
                >
                  <X className="w-4 h-4 mr-2" />
                  Effacer
                </Button>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-dainamics-light/60 text-lg">
                Aucun projet ne correspond à vos critères de recherche
              </p>
              <Button
                onClick={clearFilters}
                className="mt-6 bg-dainamics-primary hover:bg-dainamics-primary/90"
              >
                Voir tous les projets
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FilterButton({ label, active, onClick, color }: {
  label: string;
  active: boolean;
  onClick: () => void;
  color: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
      style={{
        backgroundColor: active ? `${color}20` : 'transparent',
        color: active ? color : '#F1F5F9',
        border: `1px solid ${active ? color : '#F1F5F940'}`
      }}
    >
      {label}
    </motion.button>
  );
}

function FeaturedProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const categoryColor = categoryColors[project.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dainamics-background/80 to-dainamics-background/40 border border-dainamics-primary/20 hover:border-dainamics-primary/40 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${categoryColor}40 0%, transparent 100%)`
        }}
      />

      <div className="relative p-8 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge
                  className="mb-4"
                  style={{
                    backgroundColor: `${categoryColor}20`,
                    color: categoryColor,
                    border: `1px solid ${categoryColor}40`
                  }}
                >
                  {project.category}
                </Badge>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-dainamics-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dainamics-primary group-hover:to-dainamics-accent transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-dainamics-light/60">{project.client} • {project.industry}</p>
              </div>
            </div>

            <p className="text-dainamics-light/80 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.values(project.results).map((result, idx) => {
                if (!result) return null;
                const Icon = iconMapper[result.icon as keyof typeof iconMapper];

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-xl bg-dainamics-background/60 border border-dainamics-primary/10"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 mb-2" style={{ color: categoryColor }} />
                    )}
                    <div className="text-2xl font-bold mb-1" style={{ color: categoryColor }}>
                      {result.value}
                    </div>
                    <div className="text-sm text-dainamics-light/60">{result.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-dainamics-light/5 text-dainamics-light/70 border border-dainamics-light/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1 text-xs rounded-full bg-dainamics-light/5 text-dainamics-light/70">
                  +{project.technologies.length - 5} plus
                </span>
              )}
            </div>

            {project.testimonial && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-dainamics-primary/5 border-l-4"
                style={{ borderColor: categoryColor }}
              >
                <p className="text-dainamics-light/80 italic mb-3">
                  "{project.testimonial.quote}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-dainamics-light">
                    {project.testimonial.author}
                  </div>
                  <div className="text-dainamics-light/60">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 origin-left"
        style={{ backgroundColor: categoryColor }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
      />
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const categoryColor = categoryColors[project.category];
  const complexityColor = complexityColors[project.complexity];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="h-full rounded-xl overflow-hidden bg-gradient-to-br from-dainamics-background/80 to-dainamics-background/40 border border-dainamics-primary/20 hover:border-dainamics-primary/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${categoryColor}40 0%, transparent 100%)`
          }}
        />

        <div className="relative p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <Badge
              className="text-xs"
              style={{
                backgroundColor: `${categoryColor}20`,
                color: categoryColor,
                border: `1px solid ${categoryColor}40`
              }}
            >
              {project.category}
            </Badge>

            <Badge
              className="text-xs"
              style={{
                backgroundColor: `${complexityColor}20`,
                color: complexityColor
              }}
            >
              {project.complexity}
            </Badge>
          </div>

          <h3 className="text-xl font-bold mb-2 text-dainamics-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dainamics-primary group-hover:to-dainamics-accent transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-sm text-dainamics-light/60 mb-4">
            {project.client} • {project.industry}
          </p>

          <p className="text-sm text-dainamics-light/70 mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          <div className="space-y-3 mb-4">
            {Object.values(project.results).slice(0, 2).map((result, idx) => {
              if (!result) return null;
              const Icon = iconMapper[result.icon as keyof typeof iconMapper];

              return (
                <div key={idx} className="flex items-center gap-3">
                  {Icon && (
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: categoryColor }} />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold" style={{ color: categoryColor }}>
                      {result.value}
                    </div>
                    <div className="text-xs text-dainamics-light/60 truncate">
                      {result.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-dainamics-light/5 text-dainamics-light/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full justify-between text-dainamics-light/80 hover:text-dainamics-light group/btn mt-auto"
          >
            Voir le projet
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ backgroundColor: categoryColor }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 + 0.2 }}
        />
      </div>
    </motion.div>
  );
}
