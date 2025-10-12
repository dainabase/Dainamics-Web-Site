// src/pages/Portfolio.tsx
// Portfolio Page - Professional & Clean Design
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
  Clock,
  Users,
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
  
  const filteredProjects = selectedCategory 
    ? portfolioProjects.filter(p => p.category === selectedCategory)
    : portfolioProjects;

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
    <div className="min-h-screen bg-dainamics-background text-dainamics-light overflow-hidden">
      <Navigation />
      
      {/* Purple Grid Background - Fixed on entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Global Progress Bar */}
      <ScrollProgressBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Animated Stats - Professional */}
      <StatsSection stats={stats} />
      
      {/* Filter Bar - Clean */}
      <FilterSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Featured Projects - Cards with Modal */}
      <FeaturedProjectsSection 
        projects={featuredProjects}
        onProjectClick={openProjectModal}
      />
      
      {/* All Projects - Bento Grid */}
      <AllProjectsSection 
        projects={filteredProjects}
        selectedCategory={selectedCategory}
        onProjectClick={openProjectModal}
      />
      
      {/* Technologies Carousel */}
      <TechnologiesSection />
      
      {/* CTA Section - Professional */}
      <CTASection />
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// SCROLL PROGRESS BAR
// ============================================================================
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #6366F1, #10E4FF, #FF5A00, #10B981)'
      }}
    />
  );
}

// ============================================================================
// HERO SECTION - Clean & Professional
// ============================================================================
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 z-10">
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center flex-grow flex flex-col justify-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight" style={{ color: '#FF5A00' }}>
            Projets qui
            <br />
            transforment
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Des solutions concrètes qui génèrent des{' '}
          <span className="font-bold" style={{ color: COLORS.success }}>résultats mesurables</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#featured"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 group"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                border: 'none',
                color: '#FFFFFF'
              }}
            >
              <Eye className="w-5 h-5 mr-2" />
              Découvrir les Projets
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.a>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              style={{
                borderColor: COLORS.cta,
                color: COLORS.cta,
                backgroundColor: 'transparent'
              }}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Lancer Votre Projet
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator at the bottom */}
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
    </section>
  );
}

// ============================================================================
// STATS SECTION - Professional & Subtle
// ============================================================================
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
          {statsData.map((stat, index) => (
            <ProfessionalStatCard 
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfessionalStatCard({ stat, index, isInView }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
      className="relative p-6 rounded-xl group cursor-pointer border"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.6)',
        borderColor: `${COLORS.primary}30`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <stat.icon className="w-8 h-8 mb-3" style={{ color: COLORS.accent }} />

      <div className="text-4xl font-bold mb-1" style={{ color: COLORS.primary }}>
        {count}{stat.suffix}
      </div>

      <div className="text-sm text-gray-400">
        {stat.label}
      </div>
    </motion.div>
  );
}

// ============================================================================
// FILTER SECTION - Clean Design
// ============================================================================
function FilterSection({ selectedCategory, onCategoryChange }: any) {
  const filters = [
    { id: null, label: 'Tous', color: COLORS.primary },
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

// ============================================================================
// FEATURED PROJECTS - Clean Cards with Modal
// ============================================================================
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
          {projects.map((project: PortfolioProject, index: number) => (
            <FeaturedProjectCard 
              key={project.id}
              project={project}
              index={index}
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="relative p-8 rounded-2xl cursor-pointer border group"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.6)',
        borderColor: `${categoryColor}30`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <Badge 
          style={{
            backgroundColor: `${categoryColor}20`,
            color: categoryColor,
            border: `1px solid ${categoryColor}50`
          }}
        >
          {project.category.toUpperCase()}
        </Badge>
        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: categoryColor }} />
      </div>

      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-base text-gray-400 mb-4">{project.client} • {project.industry}</p>

      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="grid grid-cols-3 gap-3">
        {Object.values(project.results).filter(Boolean).map((result: any, idx: number) => {
          const Icon = iconMapper[result.icon];
          return (
            <div
              key={idx}
              className="p-3 rounded-lg text-center"
              style={{
                backgroundColor: `${COLORS.success}10`,
                border: `1px solid ${COLORS.success}20`
              }}
            >
              {Icon && <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: COLORS.success }} />}
              <div className="text-xl font-bold" style={{ color: COLORS.success }}>
                {result.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {result.label}
              </div>
            </div>
          );
        })}
      </div>

      <motion.div
        className="mt-6 flex items-center gap-2 text-sm"
        style={{ color: categoryColor }}
      >
        <Eye className="w-4 h-4" />
        <span>Cliquer pour voir les détails</span>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// ALL PROJECTS - Sticky Cards Animation
// ============================================================================
const CARD_HEIGHT = 600;

interface StickyProjectCardProps {
  position: number;
  project: PortfolioProject;
  scrollYProgress: MotionValue<number>;
  totalCards: number;
  onClick: () => void;
}

function AllProjectsSection({ projects, selectedCategory, onProjectClick }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center pt-20 pb-10 px-6 relative z-10"
      >
        <h2 className="text-5xl font-bold mb-4">
          Tous nos <span style={{ color: COLORS.primary }}>Projets</span>
        </h2>
        <p className="text-lg text-gray-400">
          {selectedCategory
            ? `Projets ${selectedCategory}`
            : 'Portfolio complet de nos réalisations'
          }
        </p>
      </motion.div>

      {projects.map((project: PortfolioProject, idx: number) => (
        <StickyProjectCard
          key={project.id}
          project={project}
          scrollYProgress={scrollYProgress}
          position={idx + 1}
          totalCards={projects.length}
          onClick={() => onProjectClick(project)}
        />
      ))}
      <div className="h-screen" />
    </div>
  );
}

function StickyProjectCard({ position, project, scrollYProgress, totalCards, onClick }: StickyProjectCardProps) {
  const scaleFromPct = (position - 1) / totalCards;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const categoryColor = categoryColors[project.category];
  const isOddCard = position % 2;

  const cardBg = isOddCard ? 'rgba(10, 10, 15, 0.4)' : 'rgba(20, 20, 30, 0.4)';
  const textColor = '#FFFFFF';

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === totalCards ? undefined : y,
        backgroundColor: cardBg,
        backdropFilter: 'blur(10px)',
        borderColor: `${categoryColor}20`
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-6 border-b cursor-pointer"
      onClick={onClick}
    >
      <div className="max-w-4xl mx-auto text-center">
        <Badge
          className="mb-6"
          style={{
            backgroundColor: `${categoryColor}20`,
            color: categoryColor,
            border: `1px solid ${categoryColor}50`,
            fontSize: '0.9rem',
            padding: '0.5rem 1.5rem'
          }}
        >
          {project.category.toUpperCase()}
        </Badge>

        <h3 className="mb-4 text-4xl font-bold md:text-5xl" style={{ color: textColor }}>
          {project.title}
        </h3>

        <p className="mb-3 text-lg font-medium" style={{ color: categoryColor }}>
          {project.client}
        </p>

        <p className="mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
          {project.description}
        </p>

        <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
          {Object.values(project.results).filter(Boolean).map((result: any, idx: number) => {
            const Icon = iconMapper[result.icon];
            return (
              <div key={idx} className="flex flex-col items-center gap-2">
                {Icon && <Icon className="w-6 h-6" style={{ color: COLORS.success }} />}
                <span className="text-2xl font-bold" style={{ color: COLORS.success }}>
                  {result.value}
                </span>
                <span className="text-sm" style={{ color: '#6B7280' }}>
                  {result.label}
                </span>
              </div>
            );
          })}
        </div>

        <Button
          className="flex items-center gap-2 px-8 py-6 text-base font-medium uppercase transition-all"
          style={{
            backgroundColor: categoryColor,
            color: '#000000',
            boxShadow: `4px 4px 0px ${isOddCard ? '#FFFFFF' : '#000000'}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-2px, -2px)';
            e.currentTarget.style.boxShadow = `8px 8px 0px ${isOddCard ? '#FFFFFF' : '#000000'}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)';
            e.currentTarget.style.boxShadow = `4px 4px 0px ${isOddCard ? '#FFFFFF' : '#000000'}`;
          }}
        >
          <span>Voir le projet</span>
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
}

// ============================================================================
// TECHNOLOGIES CAROUSEL - Clean & Professional
// ============================================================================
function TechnologiesSection() {
  const allTechs = portfolioProjects.flatMap(p => p.technologies);
  const uniqueTechs = [...new Set(allTechs)];
  const displayTechs = [...uniqueTechs, ...uniqueTechs]; // Duplicate for infinite scroll

  return (
    <section className="py-20 px-6 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            Technologies <span style={{ color: COLORS.accent }}>Maîtrisées</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -50 * uniqueTechs.length]
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {displayTechs.map((tech, index) => (
              <div 
                key={`${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-lg font-medium text-sm whitespace-nowrap"
                style={{
                  backgroundColor: `${COLORS.primary}15`,
                  border: `1px solid ${COLORS.primary}30`,
                  color: COLORS.primary
                }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION - Professional
// ============================================================================
function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Prêt à créer votre{' '}
            <span style={{ color: COLORS.accent }}>success story</span> ?
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Rejoignez nos clients qui ont transformé leur business avec des solutions IA et automatisation sur mesure.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button 
                size="lg"
                className="text-lg px-8 py-6"
                style={{
                  backgroundColor: COLORS.primary,
                  border: 'none',
                  color: '#FFFFFF'
                }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Démarrer Votre Projet
              </Button>
            </Link>
            <Link to="/process">
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                style={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent,
                  backgroundColor: 'transparent'
                }}
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Notre Processus
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PROJECT MODAL - Professional Design
// ============================================================================
function ProjectModal({ project, isOpen, onClose }: any) {
  if (!project) return null;

  const categoryColor = categoryColors[project.category];
  const complexityColor = complexityColors[project.complexity];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl my-8 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(10, 10, 15, 0.98)',
                border: `2px solid ${categoryColor}50`,
                maxHeight: '90vh'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF'
                }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="overflow-y-auto max-h-[85vh] p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge 
                      style={{
                        backgroundColor: `${categoryColor}20`,
                        color: categoryColor,
                        border: `1px solid ${categoryColor}`
                      }}
                    >
                      {project.category.toUpperCase()}
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: `${complexityColor}20`,
                        color: complexityColor,
                        border: `1px solid ${complexityColor}50`
                      }}
                    >
                      {project.complexity}
                    </Badge>
                  </div>

                  <h2 className="text-4xl font-bold mb-3">{project.title}</h2>
                  <p className="text-xl text-gray-400">{project.client} • {project.industry}</p>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {Object.values(project.results).filter(Boolean).map((result: any, idx: number) => {
                    const Icon = iconMapper[result.icon];
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-xl text-center"
                        style={{
                          backgroundColor: `${COLORS.success}15`,
                          border: `1px solid ${COLORS.success}30`
                        }}
                      >
                        {Icon && <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: COLORS.success }} />}
                        <div className="text-3xl font-bold mb-1" style={{ color: COLORS.success }}>
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {result.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: `${COLORS.cta}10`,
                      border: `1px solid ${COLORS.cta}30`
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-6 h-6" style={{ color: COLORS.cta }} />
                      <h3 className="text-xl font-bold">Challenge</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                  </div>

                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: `${COLORS.primary}10`,
                      border: `1px solid ${COLORS.primary}30`
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Rocket className="w-6 h-6" style={{ color: COLORS.primary }} />
                      <h3 className="text-xl font-bold">Solution</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Stack Technique</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-sm px-3 py-1"
                        style={{
                          borderColor: categoryColor,
                          color: categoryColor,
                          backgroundColor: `${categoryColor}10`
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <div 
                    className="p-6 rounded-xl"
                    style={{ 
                      backgroundColor: `${COLORS.accent}10`,
                      border: `1px solid ${COLORS.accent}30`
                    }}
                  >
                    <Quote className="w-8 h-8 mb-4" style={{ color: COLORS.accent }} />
                    <p className="text-lg italic text-gray-300 mb-4 leading-relaxed">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{project.testimonial.author}</div>
                        <div className="text-sm text-gray-400">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
