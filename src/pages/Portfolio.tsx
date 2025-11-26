import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  portfolioProjects,
  categoryColors,
  complexityColors,
  getFeaturedProjects,
  getPortfolioStats,
  type PortfolioProject
} from '@/data/portfolio';
import { iconMapper } from '@/utils/iconMapper';
import {
  ArrowRight,
  Sparkles,
  Eye,
  Filter,
  TrendingUp,
  Award,
  Rocket,
  CheckCircle,
  Quote,
  ChevronDown,
  X,
  ExternalLink,
  Target
} from 'lucide-react';

const COLORS = {
  primary: '#6366F1',
  cta: '#FF5A00',
  accent: '#10E4FF',
  success: '#10B981'
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = getPortfolioStats();
  const featuredProjects = getFeaturedProjects();

  const filteredProjects = portfolioProjects.filter(project => {
    if (!selectedCategory) return true;
    return project.category === selectedCategory;
  });

  const openProjectModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90 text-dainamics-light overflow-hidden">
      <Navigation />
      <EnhancedGridBackground />
      <CursorEffects />

      <HeroSection stats={stats} />
      <StatsSection stats={stats} />
      <CategoryFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FeaturedProjectsSection
        projects={featuredProjects}
        onProjectClick={openProjectModal}
      />
      <AllProjectsSection
        projects={filteredProjects}
        selectedCategory={selectedCategory}
        onProjectClick={openProjectModal}
      />
      <CTASection />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}

function HeroSection({ stats }: { stats: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <Badge className="px-4 py-2 text-sm font-medium" style={{
            backgroundColor: `${COLORS.accent}20`,
            color: COLORS.accent,
            border: `1px solid ${COLORS.accent}`
          }}>
            <Award className="w-4 h-4 mr-2 inline" />
            {stats.total} Projets Réalisés
          </Badge>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Portfolio de <br/>
          <span style={{ color: COLORS.accent }}>Transformations</span> Digitales
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Découvrez comment nous avons aidé nos clients à automatiser, optimiser et
          transformer leurs processus avec l'IA et l'automatisation intelligente.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
              style={{
                backgroundColor: COLORS.cta,
                color: 'white'
              }}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Lancer Votre Projet
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-10 mb-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500">Scroll pour explorer</span>
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatsSection({ stats }: { stats: any }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const statsData = [
    { label: 'Projets Réalisés', value: stats.total, suffix: '', icon: Award },
    { label: 'Secteurs Couverts', value: stats.industries.length, suffix: '+', icon: TrendingUp },
    { label: 'Technologies', value: stats.technologies.length, suffix: '+', icon: Rocket },
    { label: 'Projets Featured', value: stats.featured, suffix: '', icon: Sparkles }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative p-6 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Icon className="w-8 h-8 mb-3" style={{ color: COLORS.accent }} />
                <div className="text-4xl font-bold mb-2">
                  {stat.value}<span style={{ color: COLORS.accent }}>{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryFilters({ selectedCategory, onCategoryChange }: any) {
  const filters = [
    { id: null, label: 'Tous les Projets', color: '#FFFFFF' },
    { id: 'ia', label: 'Intelligence Artificielle', color: categoryColors.ia },
    { id: 'automatisation', label: 'Automatisation', color: categoryColors.automatisation },
    { id: 'developpement', label: 'Développement', color: categoryColors.developpement }
  ];

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter.id || 'all'}
              onClick={() => onCategoryChange(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
              style={{
                backgroundColor: selectedCategory === filter.id
                  ? `${filter.color}20`
                  : 'rgba(255,255,255,0.05)',
                border: `1px solid ${selectedCategory === filter.id ? filter.color : 'rgba(255,255,255,0.1)'}`,
                color: selectedCategory === filter.id ? filter.color : '#9CA3AF'
              }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectsSection({ projects, onProjectClick }: any) {
  return (
    <section id="featured" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Projets <span style={{ color: COLORS.accent }}>Phares</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nos réalisations les plus impressionnantes avec impact mesurable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project: PortfolioProject, idx: number) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const categoryColor = categoryColors[project.category];
  const Icon = iconMapper[project.results.metric1.icon] || Target;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onClick={onClick}
      className="group relative p-8 rounded-2xl cursor-pointer overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: `1px solid ${categoryColor}30`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${categoryColor}15, transparent 70%)`
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <Badge
              className="mb-4"
              style={{
                backgroundColor: `${categoryColor}20`,
                color: categoryColor,
                border: `1px solid ${categoryColor}`
              }}
            >
              {project.category}
            </Badge>
            <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {project.client} • {project.industry}
            </p>
          </div>
          <Icon className="w-12 h-12 flex-shrink-0 ml-4" style={{ color: categoryColor }} />
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-2xl font-bold" style={{ color: categoryColor }}>
              {project.results.metric1.value}
            </div>
            <div className="text-xs text-gray-400 mt-1">{project.results.metric1.label}</div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-2xl font-bold" style={{ color: categoryColor }}>
              {project.results.metric2.value}
            </div>
            <div className="text-xs text-gray-400 mt-1">{project.results.metric2.label}</div>
          </div>
          {project.results.metric3 && (
            <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="text-2xl font-bold" style={{ color: categoryColor }}>
                {project.results.metric3.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{project.results.metric3.label}</div>
            </div>
          )}
        </div>

        <motion.div
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: categoryColor }}
        >
          <Eye className="w-4 h-4" />
          <span>Voir le projet complet</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function AllProjectsSection({ projects, selectedCategory, onProjectClick }: any) {
  return (
    <section id="all-projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Tous nos <span style={{ color: COLORS.accent }}>Projets</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos réalisations à travers différents secteurs
          </p>
        </motion.div>

        <ProjectCarousel projects={projects} onProjectClick={onProjectClick} />
      </div>
    </section>
  );
}

function ProjectCarousel({ projects, onProjectClick }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12 py-12">
        {projects.map((project: PortfolioProject, idx: number) => (
          <ProjectCarouselItem
            key={project.id}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            numItems={projects.length}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCarouselItem({ scrollYProgress, position, numItems, project, onClick }: any) {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.8]);

  const categoryColor = categoryColors[project.category];
  const Icon = iconMapper[project.results.metric1.icon] || Target;

  return (
    <motion.div
      style={{
        opacity,
        scale,
        background: 'rgba(255, 255, 255, 0.03)',
        border: `1px solid ${categoryColor}30`,
        backdropFilter: 'blur(10px)'
      }}
      onClick={onClick}
      className="sticky top-24 w-full p-6 md:p-8 rounded-2xl cursor-pointer group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-4">
            <Icon className="w-10 h-10 flex-shrink-0" style={{ color: categoryColor }} />
            <div className="flex-1">
              <Badge
                className="mb-2"
                style={{
                  backgroundColor: `${categoryColor}20`,
                  color: categoryColor,
                  border: `1px solid ${categoryColor}`
                }}
              >
                {project.category}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">
                {project.client} • {project.industry}
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="text-xl font-bold" style={{ color: categoryColor }}>
                {project.results.metric1.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{project.results.metric1.label}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="text-xl font-bold" style={{ color: categoryColor }}>
                {project.results.metric2.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{project.results.metric2.label}</div>
            </div>
            {project.results.metric3 && (
              <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-xl font-bold" style={{ color: categoryColor }}>
                  {project.results.metric3.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{project.results.metric3.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <motion.div
        className="flex items-center gap-2 text-sm font-medium mt-6"
        style={{ color: categoryColor }}
      >
        <Eye className="w-4 h-4" />
        <span>Cliquer pour voir les détails</span>
      </motion.div>
    </motion.div>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-12 rounded-2xl text-center"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.accent}20)`,
          border: `1px solid ${COLORS.accent}30`,
          backdropFilter: 'blur(10px)'
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Prochain Projet: <span style={{ color: COLORS.accent }}>Le Vôtre</span>?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Transformons ensemble vos défis en opportunités avec l'IA et l'automatisation.
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold"
            style={{
              backgroundColor: COLORS.cta,
              color: 'white'
            }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Démarrer Votre Projet
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

function ProjectModal({ project, isOpen, onClose }: any) {
  if (!project) return null;

  const categoryColor = categoryColors[project.category];
  const Icon = iconMapper[project.results.metric1.icon] || Target;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto rounded-2xl"
            style={{
              background: 'rgba(10, 10, 15, 0.95)',
              border: `1px solid ${categoryColor}50`,
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <Icon className="w-12 h-12" style={{ color: categoryColor }} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                    <p className="text-lg text-gray-400 mt-2">
                      {project.client} • {project.industry}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge style={{ backgroundColor: `${categoryColor}20`, color: categoryColor, border: `1px solid ${categoryColor}` }}>
                  {project.category}
                </Badge>
                <Badge style={{ backgroundColor: `${complexityColors[project.complexity]}20`, color: complexityColors[project.complexity], border: `1px solid ${complexityColors[project.complexity]}` }}>
                  {project.complexity}
                </Badge>
                <Badge style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFF' }}>
                  {project.duration}
                </Badge>
                <Badge style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFF' }}>
                  {project.year}
                </Badge>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Description</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Le Défi</h3>
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Notre Solution</h3>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Résultats Mesurables</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className="text-3xl font-bold mb-2" style={{ color: categoryColor }}>
                        {project.results.metric1.value}
                      </div>
                      <div className="text-sm text-gray-400">{project.results.metric1.label}</div>
                    </div>
                    <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className="text-3xl font-bold mb-2" style={{ color: categoryColor }}>
                        {project.results.metric2.value}
                      </div>
                      <div className="text-sm text-gray-400">{project.results.metric2.label}</div>
                    </div>
                    {project.results.metric3 && (
                      <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <div className="text-3xl font-bold mb-2" style={{ color: categoryColor }}>
                          {project.results.metric3.value}
                        </div>
                        <div className="text-sm text-gray-400">{project.results.metric3.label}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Technologies Utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, idx: number) => (
                      <Badge key={idx} className="px-3 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFF' }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.testimonial && (
                  <div className="p-6 rounded-lg" style={{ background: `${categoryColor}10`, border: `1px solid ${categoryColor}30` }}>
                    <Quote className="w-8 h-8 mb-4" style={{ color: categoryColor }} />
                    <p className="text-lg text-gray-300 italic mb-4">"{project.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div className="text-sm text-gray-400">
                          {project.testimonial.role} • {project.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4">
                  <Link to={`/realisations/${project.id}`}>
                    <Button
                      size="lg"
                      className="w-full md:w-auto px-8 py-6 text-lg font-semibold"
                      style={{ backgroundColor: categoryColor, color: 'white' }}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Voir le Détail Complet
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full md:w-auto px-8 py-6 text-lg font-semibold border-2"
                      style={{ borderColor: COLORS.cta, color: COLORS.cta }}
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      Lancer un Projet Similaire
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
