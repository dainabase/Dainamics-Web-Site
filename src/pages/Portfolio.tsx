// src/pages/Portfolio.tsx
// Portfolio Page - Ultra-Modern with Hero Background
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
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
  ChevronDown
} from 'lucide-react';

const COLORS = {
  primary: '#6366F1',
  cta: '#FF5A00',
  accent: '#10E4FF',
  success: '#10B981'
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const stats = getPortfolioStats();
  const featuredProjects = getFeaturedProjects();
  
  const filteredProjects = selectedCategory 
    ? portfolioProjects.filter(p => p.category === selectedCategory)
    : portfolioProjects;

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light overflow-hidden">
      <Navigation />
      
      {/* Hero Background on entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 z-0" />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Global Progress Bar */}
      <ScrollProgressBar />
      
      {/* Hero Section - 3D Holographic */}
      <HeroSection />
      
      {/* Animated Stats */}
      <StatsSection stats={stats} />
      
      {/* Filter Bar */}
      <FilterSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Featured Projects - 3D Cards */}
      <FeaturedProjectsSection 
        projects={featuredProjects}
        hoveredProject={hoveredProject}
        onHover={setHoveredProject}
      />
      
      {/* All Projects - Sticky Scroll */}
      <AllProjectsSection 
        projects={filteredProjects}
        selectedCategory={selectedCategory}
      />
      
      {/* Technologies Showcase */}
      <TechnologiesSection />
      
      {/* CTA Section */}
      <CTASection />
      
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
// HERO SECTION - 3D Holographic
// ============================================================================
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 z-10">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dainamics-background to-dainamics-background" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          style={{
            y,
            backgroundImage: `
              linear-gradient(rgba(16,228,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,228,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating Particles - darker and subtler */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: i % 3 === 0 ? COLORS.primary : i % 3 === 1 ? COLORS.accent : COLORS.cta,
              opacity: 0.15
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Dark vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ y, opacity, scale }}
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
          className="text-2xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Des solutions concrètes qui génèrent des{' '}
          <span className="font-bold" style={{ color: '#0AFF9D' }}>résultats mesurables</span>
          {' '}pour nos clients suisses
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
              className="text-lg px-8 py-6 group backdrop-blur-sm border-0"
              style={{
                background: `linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(16, 228, 255, 0.2))`,
                border: '1px solid rgba(16, 228, 255, 0.3)',
                boxShadow: '0 0 30px rgba(16, 228, 255, 0.2)',
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
              className="text-lg px-8 py-6 backdrop-blur-sm"
              style={{
                borderColor: 'rgba(255, 90, 0, 0.4)',
                backgroundColor: 'rgba(255, 90, 0, 0.05)',
                color: COLORS.cta,
                boxShadow: '0 0 20px rgba(255, 90, 0, 0.1)'
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
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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

// ============================================================================
// STATS SECTION
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
    <section ref={sectionRef} className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <AnimatedStatCard 
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

function AnimatedStatCard({ stat, index, isInView }: any) {
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
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.1,
        rotateY: 10,
        z: 50
      }}
      className="relative p-8 rounded-2xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary}15, transparent)`,
        border: `1px solid ${COLORS.primary}30`,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${COLORS.primary}30, transparent)`,
          filter: 'blur(20px)'
        }}
      />

      <motion.div
        animate={isInView ? { rotate: 360 } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        className="mb-4"
      >
        <stat.icon className="w-12 h-12" style={{ color: COLORS.accent }} />
      </motion.div>

      <div className="text-6xl font-bold mb-2" style={{ color: COLORS.primary }}>
        {count}{stat.suffix}
      </div>

      <div className="text-sm text-gray-400">
        {stat.label}
      </div>
    </motion.div>
  );
}

// ============================================================================
// FILTER SECTION
// ============================================================================
function FilterSection({ selectedCategory, onCategoryChange }: any) {
  const filters = [
    { id: null, label: 'Tous', color: COLORS.primary },
    { id: 'ia', label: 'Intelligence Artificielle', color: categoryColors.ia },
    { id: 'automatisation', label: 'Automatisation', color: categoryColors.automatisation },
    { id: 'developpement', label: 'Développement', color: categoryColors.developpement }
  ];

  return (
    <section className="py-16 px-6 sticky top-20 z-40 backdrop-blur-xl" style={{ backgroundColor: 'rgba(10, 10, 15, 0.8)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Filter className="w-5 h-5 text-gray-400" />
          {filters.map((filter) => (
            <motion.button
              key={filter.id || 'all'}
              onClick={() => onCategoryChange(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-medium transition-all"
              style={{
                backgroundColor: selectedCategory === filter.id 
                  ? `${filter.color}20`
                  : 'transparent',
                border: `2px solid ${selectedCategory === filter.id ? filter.color : 'rgba(255,255,255,0.1)'}`,
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
// FEATURED PROJECTS - 3D Flip Cards
// ============================================================================
function FeaturedProjectsSection({ projects, hoveredProject, onHover }: any) {
  return (
    <section id="featured" className="py-32 px-6 relative z-10">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${COLORS.primary}, transparent 50%),
                         radial-gradient(circle at 70% 50%, ${COLORS.accent}, transparent 50%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8" style={{ color: COLORS.accent }} />
            <h2 className="text-6xl font-bold">
              Projets <span style={{ color: COLORS.accent }}>Phares</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nos réalisations les plus impressionnantes avec impact mesurable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project: PortfolioProject, index: number) => (
            <FeaturedProjectCard 
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={onHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index, isHovered, onHover }: any) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const categoryColor = categoryColors[project.category];
  const complexityColor = complexityColors[project.complexity];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: -45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative h-[600px]"
      style={{ perspective: '2000px' }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 rounded-3xl p-8 cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
            background: `linear-gradient(135deg, ${categoryColor}20, transparent)`,
            border: `2px solid ${categoryColor}40`
          }}
          onClick={() => setIsFlipped(true)}
        >
          <div className="flex items-center justify-between mb-6">
            <Badge 
              style={{
                backgroundColor: `${categoryColor}30`,
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

          <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
          <p className="text-lg text-gray-400 mb-6">{project.client} • {project.industry}</p>

          <p className="text-gray-300 mb-8 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.values(project.results).filter(Boolean).map((result: any, idx: number) => {
              const Icon = iconMapper[result.icon];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-4 rounded-xl text-center"
                  style={{
                    backgroundColor: `${COLORS.success}15`,
                    border: `1px solid ${COLORS.success}30`
                  }}
                >
                  {Icon && <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: COLORS.success }} />}
                  <div className="text-2xl font-bold" style={{ color: COLORS.success }}>
                    {result.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {result.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="absolute bottom-8 left-8 right-8"
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center gap-2 text-sm" style={{ color: categoryColor }}>
              <Eye className="w-4 h-4" />
              <span>Cliquer pour voir les détails</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 rounded-3xl p-8 cursor-pointer overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${categoryColor}25, rgba(10,10,15,0.95))`,
            border: `2px solid ${categoryColor}60`
          }}
          onClick={() => setIsFlipped(false)}
        >
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color: COLORS.cta }} />
              Challenge
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.challenge}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Rocket className="w-5 h-5" style={{ color: COLORS.primary }} />
              Solution
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-3">Stack Technique</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech: string) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="text-xs"
                  style={{
                    borderColor: categoryColor,
                    color: categoryColor
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="p-4 rounded-xl" style={{ backgroundColor: `${COLORS.accent}10` }}>
              <Quote className="w-6 h-6 mb-2" style={{ color: COLORS.accent }} />
              <p className="text-sm italic text-gray-300 mb-3">"{project.testimonial.quote}"</p>
              <div className="text-xs text-gray-400">
                <strong>{project.testimonial.author}</strong>, {project.testimonial.role}
              </div>
            </div>
          )}

          <motion.div
            className="absolute bottom-8 left-8 right-8"
            whileHover={{ x: -5 }}
          >
            <div className="flex items-center gap-2 text-sm" style={{ color: categoryColor }}>
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Cliquer pour revenir</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// ALL PROJECTS SECTION
// ============================================================================
function AllProjectsSection({ projects, selectedCategory }: any) {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6">
            Tous nos <span style={{ color: COLORS.primary }}>Projets</span>
          </h2>
          <p className="text-xl text-gray-400">
            {selectedCategory 
              ? `Projets filtrés: ${selectedCategory}`
              : 'Portfolio complet de nos réalisations'
            }
          </p>
        </motion.div>

        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {projects.map((project: PortfolioProject, index: number) => (
              <ProjectListItem 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectListItem({ project, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const categoryColor = categoryColors[project.category];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="p-8 rounded-2xl cursor-pointer"
      style={{
        background: `linear-gradient(90deg, ${categoryColor}15, transparent)`,
        border: `1px solid ${categoryColor}30`,
        borderLeft: `4px solid ${categoryColor}`
      }}
    >
      <div className="flex items-start gap-6">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <Badge style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}>
              {project.category}
            </Badge>
          </div>
          <p className="text-gray-400 mb-4">{project.client} • {project.industry}</p>
          <p className="text-gray-300 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex items-center gap-6">
            {Object.values(project.results).filter(Boolean).slice(0, 2).map((result: any, idx: number) => {
              const Icon = iconMapper[result.icon];
              return (
                <div key={idx} className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" style={{ color: COLORS.success }} />}
                  <span className="font-bold" style={{ color: COLORS.success }}>
                    {result.value}
                  </span>
                  <span className="text-xs text-gray-500">{result.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex-shrink-0"
        >
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${categoryColor}20` }}
          >
            <ArrowRight className="w-6 h-6" style={{ color: categoryColor }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// TECHNOLOGIES SECTION
// ============================================================================
function TechnologiesSection() {
  const allTechs = portfolioProjects.flatMap(p => p.technologies);
  const uniqueTechs = [...new Set(allTechs)].slice(0, 16);

  return (
    <section className="py-32 px-6 relative overflow-hidden z-10">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, ${COLORS.primary}, transparent)`,
            `radial-gradient(circle at 80% 50%, ${COLORS.accent}, transparent)`,
            `radial-gradient(circle at 50% 80%, ${COLORS.cta}, transparent)`,
            `radial-gradient(circle at 20% 50%, ${COLORS.primary}, transparent)`
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6">
            Technologies <span style={{ color: COLORS.accent }}>Maîtrisées</span>
          </h2>
        </motion.div>

        <div className="relative h-[500px] flex items-center justify-center">
          {uniqueTechs.map((tech, index) => {
            const angle = (index / uniqueTechs.length) * 360;
            const radius = 200;
            
            return (
              <motion.div
                key={tech}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius
                }}
                whileHover={{ scale: 1.3, zIndex: 10 }}
              >
                <div 
                  className="px-4 py-2 rounded-full font-medium text-sm"
                  style={{
                    backgroundColor: `${COLORS.primary}20`,
                    border: `1px solid ${COLORS.primary}50`,
                    color: COLORS.primary
                  }}
                >
                  {tech}
                </div>
              </motion.div>
            );
          })}

          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${COLORS.primary}30, transparent)`,
              border: `2px solid ${COLORS.primary}`
            }}
          >
            <Rocket className="w-16 h-16" style={{ color: COLORS.primary }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden z-10">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.primary} 0, ${COLORS.primary} 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex mb-8"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-20 h-20" style={{ color: COLORS.accent }} />
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            Prêt à créer votre{' '}
            <span 
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              success story
            </span>{' '}?
          </h2>

          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Rejoignez nos clients qui ont déjà transformé leur business avec des solutions IA et automatisation sur mesure.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button 
                size="lg"
                className="text-xl px-10 py-7 group"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.primary})`,
                  border: 'none'
                }}
              >
                <Rocket className="w-6 h-6 mr-2" />
                Démarrer Votre Projet
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Button>
            </Link>
            <Link to="/process">
              <Button 
                size="lg"
                variant="outline"
                className="text-xl px-10 py-7"
                style={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent
                }}
              >
                <CheckCircle className="w-6 h-6 mr-2" />
                Notre Processus
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
