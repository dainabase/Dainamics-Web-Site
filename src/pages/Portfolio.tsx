// src/pages/Portfolio.tsx
// Portfolio Page - Professional Swiss Design
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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
  Award,
  TrendingUp,
  Rocket,
  CheckCircle,
  Quote,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const stats = getPortfolioStats();
  const featuredProjects = getFeaturedProjects();
  
  const filteredProjects = selectedCategory 
    ? portfolioProjects.filter(p => p.category === selectedCategory && !p.featured)
    : portfolioProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light relative">
      <Navigation />
      
      {/* Background Grid - Throughout the page */}
      <BackgroundGrid />
      
      {/* Progress Bar */}
      <ProgressBar />
      
      {/* Hero Section */}
      <HeroSection stats={stats} />
      
      {/* Filter Bar */}
      <FilterBar 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Featured Projects */}
      <FeaturedProjectsSection projects={featuredProjects} />
      
      {/* All Projects */}
      <AllProjectsSection projects={filteredProjects} />
      
      {/* Technologies Grid */}
      <TechnologiesSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// BACKGROUND GRID
// ============================================================================
function BackgroundGrid() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1]);
  
  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
    </motion.div>
  );
}

// ============================================================================
// PROGRESS BAR
// ============================================================================
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-dainamics-primary z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection({ stats }: { stats: any }) {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true });
  
  return (
    <section ref={heroRef} className="relative pt-32 pb-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)'
          }}>
            <span className="text-sm font-medium text-dainamics-primary">Portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Projets qui génèrent des
            <br />
            <span className="text-gradient-primary">résultats mesurables</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Des solutions concrètes qui transforment les opérations de nos clients suisses. 
            Chaque projet est accompagné de métriques de performance vérifiables.
          </p>
        </motion.div>

        {/* Stats Grid - Elegant & Professional */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            label="Projets Réalisés"
            value={stats.total}
            icon={Award}
            delay={0}
          />
          <StatCard 
            label="Secteurs"
            value={`${stats.industries.length}+`}
            icon={TrendingUp}
            delay={0.1}
          />
          <StatCard 
            label="Technologies"
            value={`${stats.technologies.length}+`}
            icon={Rocket}
            delay={0.2}
          />
          <StatCard 
            label="Featured"
            value={stats.featured}
            icon={CheckCircle}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, icon: Icon, delay }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-xl border border-white/5 hover:border-dainamics-primary/30 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03), transparent)'
      }}
    >
      <Icon className="w-8 h-8 mb-4 text-dainamics-primary opacity-80" />
      <div className="text-4xl font-bold mb-1 text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}

// ============================================================================
// FILTER BAR
// ============================================================================
function FilterBar({ selectedCategory, onCategoryChange }: any) {
  const filters = [
    { id: null, label: 'Tous les Projets' },
    { id: 'ia', label: 'Intelligence Artificielle' },
    { id: 'automatisation', label: 'Automatisation' },
    { id: 'developpement', label: 'Développement' }
  ];

  return (
    <section className="sticky top-20 z-40 py-6 px-6 backdrop-blur-xl border-b border-white/5" style={{
      background: 'rgba(10, 10, 15, 0.8)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
          {filters.map((filter) => (
            <button
              key={filter.id || 'all'}
              onClick={() => onCategoryChange(filter.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                transition-all duration-200 flex-shrink-0
                ${selectedCategory === filter.id 
                  ? 'bg-dainamics-primary/20 text-dainamics-primary border border-dainamics-primary/30' 
                  : 'border border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FEATURED PROJECTS SECTION
// ============================================================================
function FeaturedProjectsSection({ projects }: { projects: PortfolioProject[] }) {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projets Phares</h2>
          <p className="text-gray-400 text-lg">
            Nos réalisations les plus impactantes avec résultats vérifiables
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const categoryColor = categoryColors[project.category];
  
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        className="p-8 md:p-12 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${categoryColor}08, transparent)`
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Badge 
                variant="outline"
                style={{
                  borderColor: `${categoryColor}40`,
                  color: categoryColor,
                  background: `${categoryColor}10`
                }}
              >
                {project.category.toUpperCase()}
              </Badge>
              <Badge 
                variant="outline"
                className="text-xs"
                style={{
                  borderColor: `${complexityColors[project.complexity]}40`,
                  color: complexityColors[project.complexity]
                }}
              >
                {project.complexity}
              </Badge>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-dainamics-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.client} • {project.industry}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.values(project.results).filter(Boolean).map((result: any, idx: number) => {
            const Icon = iconMapper[result.icon];
            return (
              <div 
                key={idx} 
                className="p-4 rounded-xl border border-white/5"
                style={{ background: 'rgba(16, 228, 255, 0.03)' }}
              >
                {Icon && (
                  <Icon className="w-5 h-5 mb-2 text-dainamics-accent" />
                )}
                <div className="text-3xl font-bold text-dainamics-accent mb-1">
                  {result.value}
                </div>
                <div className="text-sm text-gray-400">{result.label}</div>
              </div>
            );
          })}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Challenge */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Challenge
            </h4>
            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Solution
            </h4>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Stack Technique
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-400"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div 
              className="p-6 rounded-xl border border-white/5 mt-6"
              style={{ background: 'rgba(16, 228, 255, 0.03)' }}
            >
              <Quote className="w-6 h-6 text-dainamics-accent mb-3 opacity-50" />
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-dainamics-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-dainamics-primary">
                    {project.testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {project.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ============================================================================
// ALL PROJECTS SECTION
// ============================================================================
function AllProjectsSection({ projects }: { projects: PortfolioProject[] }) {
  if (projects.length === 0) return null;
  
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Autres Projets</h2>
          <p className="text-gray-400 text-lg">
            Portfolio complet de nos réalisations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const categoryColor = categoryColors[project.category];
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.02), transparent)'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge 
            variant="outline"
            className="text-xs"
            style={{
              borderColor: `${categoryColor}40`,
              color: categoryColor,
              background: `${categoryColor}08`
            }}
          >
            {project.category}
          </Badge>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-dainamics-primary group-hover:translate-x-1 transition-all" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-dainamics-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 mb-4">{project.client} • {project.industry}</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Quick Results */}
      <div className="flex gap-4 pt-4 border-t border-white/5">
        {Object.values(project.results).filter(Boolean).slice(0, 2).map((result: any, idx: number) => (
          <div key={idx} className="flex-1">
            <div className="text-lg font-bold text-dainamics-accent">{result.value}</div>
            <div className="text-xs text-gray-500">{result.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ============================================================================
// TECHNOLOGIES SECTION
// ============================================================================
function TechnologiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const allTechs = portfolioProjects.flatMap(p => p.technologies);
  const uniqueTechs = [...new Set(allTechs)].sort();
  
  // Split into 3 rows
  const rows = [
    uniqueTechs.slice(0, Math.ceil(uniqueTechs.length / 3)),
    uniqueTechs.slice(Math.ceil(uniqueTechs.length / 3), Math.ceil(uniqueTechs.length * 2 / 3)),
    uniqueTechs.slice(Math.ceil(uniqueTechs.length * 2 / 3))
  ];
  
  return (
    <section ref={sectionRef} className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technologies Maîtrisées</h2>
          <p className="text-gray-400 text-lg">
            Stack technique moderne pour des applications performantes
          </p>
        </motion.div>

        <div className="space-y-6">
          {rows.map((row, rowIndex) => {
            const x = useTransform(
              scrollYProgress,
              [0, 1],
              rowIndex % 2 === 0 ? [0, -100] : [0, 100]
            );
            
            return (
              <motion.div
                key={rowIndex}
                style={{ x }}
                className="flex gap-3 flex-wrap"
              >
                {row.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: techIndex * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg border border-white/10 text-sm font-medium text-gray-300 hover:border-dainamics-primary/30 hover:text-white transition-all"
                    style={{
                      background: 'rgba(99, 102, 241, 0.05)'
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
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
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Prêt à transformer
            <br />
            <span className="text-gradient-primary">votre entreprise</span> ?
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez nos clients qui ont déjà automatisé leurs processus et multiplié leur efficacité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white font-semibold text-lg px-8"
              >
                Démarrer Votre Projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/process">
              <Button 
                size="lg"
                variant="outline"
                className="border-dainamics-primary text-dainamics-primary hover:bg-dainamics-primary/10 font-semibold text-lg px-8"
              >
                Notre Processus
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
