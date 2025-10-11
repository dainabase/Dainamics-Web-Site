// src/pages/ExpertiseAutomatisation.tsx
// Automatisation - Page d'Expertise avec Effets Sticky Différents de IA
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  getPillarByCategory,
  categoryColors,
  complexityColors,
  COLORS
} from '@/data/expertise';
import { iconMapper } from '@/utils/iconMapper';
import { 
  ArrowRight, 
  Zap,
  Rocket,
  TrendingUp,
  Clock,
  Target,
  Award,
  CheckCircle,
  ArrowUpRight,
  Timer,
  Gauge,
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function ExpertiseAutomatisation() {
  const pillar = getPillarByCategory('automatisation');

  if (!pillar) {
    return (
      <div className="min-h-screen bg-dainamics-background text-dainamics-light flex items-center justify-center">
        <Navigation />
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Erreur: Pilier Automatisation non trouvé</h1>
          <p className="text-gray-400">La catégorie 'automatisation' n'existe pas dans les données.</p>
          <Link to="/expertise" className="text-dainamics-primary underline mt-4 inline-block">
            Retour à l'expertise
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const autoColor = categoryColors['automatisation']; // #10E4FF

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light">
      <Navigation />
      
      {/* Hero Section - Workflow Visual */}
      <HeroSection pillar={pillar} autoColor={autoColor} />
      
      {/* Metrics Section - Cards with Stagger */}
      <MetricsSection metrics={pillar.metrics} autoColor={autoColor} />
      
      {/* Technologies Section - HORIZONTAL SCROLL IN VERTICAL STICKY */}
      <TechnologiesSection 
        technologies={pillar.technologies}
        autoColor={autoColor}
      />
      
      {/* Capabilities Section - STICKY RIGHT + SCROLLING LEFT (inverse de IA) */}
      <CapabilitiesSection capabilities={pillar.capabilities} autoColor={autoColor} />
      
      {/* Use Cases - Cards Grid with Reveal */}
      <UseCasesSection useCases={pillar.useCases} autoColor={autoColor} />
      
      {/* Quick Wins - STICKY HEADER + SCROLLING CONTENT */}
      <QuickWinsSection quickWins={pillar.quickWins} autoColor={autoColor} />
      
      {/* CTA Section */}
      <CTASection autoColor={autoColor} />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// HERO SECTION - Workflow Animation
// ============================================================================
function HeroSection({ pillar, autoColor }: { pillar: any; autoColor: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-32">
      {/* Animated Workflow Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke={autoColor}
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
            />
          ))}
        </svg>
      </div>

      {/* Content - Split Screen */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Content */}
          <motion.div style={{ y: leftY }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ 
                backgroundColor: `${autoColor}15`,
                border: `1px solid ${autoColor}30`
              }}
            >
              <Zap className="w-4 h-4" style={{ color: autoColor }} />
              <span className="text-sm font-medium" style={{ color: autoColor }}>
                {pillar.name}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {pillar.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <span style={{ color: autoColor }}>
                {pillar.tagline.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10"
            >
              {pillar.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group"
                  style={{ 
                    backgroundColor: autoColor,
                    color: '#0A0A0F'
                  }}
                >
                  Automatiser Maintenant
                  <Zap className="w-5 h-5 ml-2 group-hover:scale-125 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  variant="outline"
                  style={{ 
                    borderColor: autoColor,
                    color: autoColor
                  }}
                >
                  Cas Clients
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT - Animated Workflow */}
          <motion.div 
            style={{ y: rightY }}
            className="relative h-96"
          >
            <WorkflowAnimation autoColor={autoColor} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkflowAnimation({ autoColor }: { autoColor: string }) {
  return (
    <div className="relative w-full h-full">
      {/* Process Nodes */}
      {[
        { label: 'Input', x: '10%', y: '20%' },
        { label: 'Process', x: '50%', y: '30%' },
        { label: 'Optimize', x: '50%', y: '70%' },
        { label: 'Output', x: '90%', y: '50%' }
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ 
              backgroundColor: `${autoColor}20`,
              border: `2px solid ${autoColor}`,
              color: autoColor
            }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                `0 0 10px ${autoColor}40`,
                `0 0 30px ${autoColor}80`,
                `0 0 10px ${autoColor}40`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            {node.label}
          </motion.div>
        </motion.div>
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 15% 25% Q 30% 27%, 50% 32%"
          stroke={autoColor}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M 50% 35% L 50% 68%"
          stroke={autoColor}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.path
          d="M 55% 72% Q 70% 62%, 88% 52%"
          stroke={autoColor}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        />
      </svg>
    </div>
  );
}

// ============================================================================
// METRICS SECTION - Staggered Cards
// ============================================================================
function MetricsSection({ metrics, autoColor }: { metrics: any; autoColor: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const metricsArray = [
    { label: metrics.yearsExperience.label, value: metrics.yearsExperience.value, icon: Award, color: autoColor },
    { label: metrics.projectsCompleted.label, value: metrics.projectsCompleted.value, icon: Rocket, color: autoColor },
    { label: metrics.avgROI.label, value: metrics.avgROI.value, icon: TrendingUp, color: COLORS.success },
    { label: metrics.clientSatisfaction.label, value: metrics.clientSatisfaction.value, icon: Target, color: autoColor }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsArray.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -12,
                rotateX: 5,
                scale: 1.05
              }}
              className="relative p-6 rounded-2xl group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${metric.color}10, transparent)`,
                border: `1px solid ${metric.color}30`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl"
                style={{ backgroundColor: `${metric.color}20` }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mb-4"
              >
                <metric.icon className="w-10 h-10" style={{ color: metric.color }} />
              </motion.div>

              {/* Value */}
              <motion.div
                className="relative z-10 text-5xl font-bold mb-2"
                style={{ color: metric.color }}
              >
                {metric.value}
              </motion.div>

              {/* Label */}
              <div className="relative z-10 text-sm text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TECHNOLOGIES SECTION - HORIZONTAL SCROLL IN VERTICAL STICKY
// ============================================================================
function TechnologiesSection({ technologies, autoColor }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Stack <span style={{ color: autoColor }}>Technique</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies et outils que nous maîtrisons pour automatiser vos processus
          </p>
        </motion.div>

        {/* Horizontal Scroll Container - STICKY */}
        <div className="sticky top-32 bg-dainamics-background/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-500">
              {technologies.length} technologies
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="p-2 rounded-lg transition-all disabled:opacity-30"
                style={{
                  backgroundColor: canScrollLeft ? `${autoColor}20` : 'transparent',
                  borderColor: canScrollLeft ? autoColor : '#374151',
                  border: '1px solid'
                }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: canScrollLeft ? autoColor : '#6B7280' }} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="p-2 rounded-lg transition-all disabled:opacity-30"
                style={{
                  backgroundColor: canScrollRight ? `${autoColor}20` : 'transparent',
                  borderColor: canScrollRight ? autoColor : '#374151',
                  border: '1px solid'
                }}
              >
                <ChevronRight className="w-5 h-5" style={{ color: canScrollRight ? autoColor : '#6B7280' }} />
              </button>
            </div>
          </div>

          {/* Scrolling Cards */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {technologies.map((tech: any, index: number) => (
              <TechnologyCard 
                key={tech.name} 
                tech={tech} 
                index={index}
                autoColor={autoColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyCard({ tech, index, autoColor }: any) {
  const Icon = iconMapper[tech.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="flex-shrink-0 w-80 p-6 rounded-xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${autoColor}08, transparent)`,
        border: `1px solid ${autoColor}25`,
        scrollSnapAlign: 'start'
      }}
    >
      {/* Icon & Badge */}
      <div className="flex items-start justify-between mb-4">
        {Icon && (
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${autoColor}15` }}
          >
            <Icon className="w-7 h-7" style={{ color: autoColor }} />
          </motion.div>
        )}
        <Badge 
          variant="outline"
          style={{ 
            borderColor: autoColor,
            color: autoColor,
            fontSize: '0.65rem'
          }}
        >
          {tech.proficiency}
        </Badge>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
        {tech.name}
      </h3>

      {/* Category */}
      <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
        {tech.category}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-3">
        {tech.description}
      </p>

      {/* Projects */}
      {tech.usedIn.length > 0 && (
        <div className="flex items-center gap-2 text-xs" style={{ color: COLORS.success }}>
          <CheckCircle className="w-3 h-3" />
          <span>{tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''}</span>
        </div>
      )}
    </motion.div>
  );
}

// ============================================================================
// CAPABILITIES SECTION - STICKY RIGHT + SCROLLING LEFT (inverse de IA)
// ============================================================================
function CapabilitiesSection({ capabilities, autoColor }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Services d'<span style={{ color: autoColor }}>Automatisation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            De la RPA aux workflows intelligents, nous automatisons l'ensemble de vos processus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT - SCROLLING CARDS */}
          <div className="lg:col-span-7 space-y-6">
            {capabilities.map((capability: any, index: number) => (
              <CapabilityCard 
                key={capability.id}
                capability={capability}
                index={index}
                autoColor={autoColor}
              />
            ))}
          </div>

          {/* RIGHT - STICKY SIDEBAR */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${autoColor}15, transparent)`,
                border: `1px solid ${autoColor}40`
              }}
            >
              <Gauge className="w-10 h-10 mb-4" style={{ color: autoColor }} />
              <div className="text-4xl font-bold mb-2" style={{ color: autoColor }}>
                {capabilities.length}
              </div>
              <div className="text-sm text-gray-400 mb-6">
                Services d'automatisation disponibles
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Complexité moyenne</span>
                  <span className="font-semibold" style={{ color: COLORS.warning }}>Intermediate</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">ROI moyen</span>
                  <span className="font-semibold" style={{ color: COLORS.success }}>3-6 mois</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{
                background: `radial-gradient(circle at top right, ${autoColor}15, transparent)`,
                border: `1px solid ${autoColor}30`
              }}
            >
              <Activity className="w-8 h-8 mb-4" style={{ color: autoColor }} />
              <h3 className="text-xl font-bold mb-3">
                Diagnostic Automatisation
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Identifiez vos processus à automatiser en priorité
              </p>
              <Link to="/contact">
                <Button 
                  className="w-full group"
                  style={{ 
                    backgroundColor: autoColor,
                    color: '#0A0A0F'
                  }}
                >
                  Obtenir mon Diagnostic
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ capability, index, autoColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const Icon = iconMapper[capability.icon];
  const complexityColor = complexityColors[capability.complexity];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ scale: 1.02, x: 8 }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${autoColor}10, transparent)`,
        border: `1px solid ${autoColor}30`
      }}
    >
      <div className="flex gap-6">
        {/* Icon */}
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.15, rotate: -10 }}
            className="flex-shrink-0 p-4 rounded-xl h-fit"
            style={{ backgroundColor: `${autoColor}20` }}
          >
            <Icon className="w-8 h-8" style={{ color: autoColor }} />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-grow">
          {/* Title & Badge */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">
              {capability.name}
            </h3>
            <Badge 
              style={{ 
                backgroundColor: `${complexityColor}20`,
                color: complexityColor,
                border: `1px solid ${complexityColor}40`,
                fontSize: '0.7rem'
              }}
            >
              {capability.complexity}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-4">{capability.description}</p>

          {/* Timeline */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Clock className="w-4 h-4" style={{ color: autoColor }} />
            <span className="text-gray-500">Durée: </span>
            <span className="font-semibold" style={{ color: autoColor }}>{capability.timeline}</span>
          </div>

          {/* Deliverables Preview */}
          <div className="flex flex-wrap gap-2">
            {capability.deliverables.slice(0, 3).map((deliverable: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${autoColor}10`,
                  color: autoColor,
                  border: `1px solid ${autoColor}30`
                }}
              >
                {deliverable.split(':')[0]}
              </span>
            ))}
            {capability.deliverables.length > 3 && (
              <span className="text-xs text-gray-500">
                +{capability.deliverables.length - 3} autres
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// USE CASES SECTION - Cards Grid with Reveal
// ============================================================================
function UseCasesSection({ useCases, autoColor }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Cas d'<span style={{ color: autoColor }}>Usage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Automatisations concrètes pour différentes industries
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase: any, index: number) => (
            <UseCaseCard 
              key={useCase.id}
              useCase={useCase}
              index={index}
              autoColor={autoColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase, index, autoColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Alternate animation direction
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        x: isEven ? -100 : 100,
        rotateY: isEven ? -20 : 20
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        rotateY: 0
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: (index % 2) * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        rotateY: 5
      }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${autoColor}12, transparent)`,
        border: `1px solid ${autoColor}35`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Industry Badge */}
      <Badge 
        className="mb-4"
        style={{ 
          backgroundColor: `${autoColor}20`,
          color: autoColor,
          border: `1px solid ${autoColor}50`
        }}
      >
        {useCase.industry}
      </Badge>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
        {useCase.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {useCase.description}
      </p>

      {/* ROI Results */}
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 text-sm"
        >
          <Clock className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
          <span style={{ color: COLORS.success }}>{useCase.roi.timeframe}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 text-sm"
        >
          <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
          <span style={{ color: COLORS.success }}>{useCase.roi.savings}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 text-sm"
        >
          <Zap className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
          <span style={{ color: COLORS.success }}>{useCase.roi.efficiency}</span>
        </motion.div>
      </div>

      {/* Glow on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-2xl -z-10"
        style={{ backgroundColor: `${autoColor}15` }}
      />
    </motion.div>
  );
}

// ============================================================================
// QUICK WINS SECTION - STICKY HEADER + SCROLLING CONTENT
// ============================================================================
function QuickWinsSection({ quickWins, autoColor }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* STICKY HEADER */}
        <div className="sticky top-20 z-10 bg-dainamics-background/90 backdrop-blur-xl py-8 mb-12 border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between flex-wrap gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Timer className="w-8 h-8" style={{ color: COLORS.success }} />
                <h2 className="text-4xl font-bold">
                  Quick <span style={{ color: COLORS.success }}>Wins</span>
                </h2>
              </div>
              <p className="text-lg text-gray-400">
                Automatisations rapides avec ROI immédiat
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-3xl font-bold" style={{ color: COLORS.success }}>
                  {quickWins.length}
                </div>
                <div className="text-sm text-gray-500">Quick Wins</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLLING CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickWins.map((win: any, index: number) => (
            <QuickWinCard 
              key={win.id}
              win={win}
              index={index}
              autoColor={autoColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickWinCard({ win, index, autoColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const Icon = iconMapper[win.icon];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.success}12, transparent)`,
        border: `1px solid ${COLORS.success}35`
      }}
    >
      {/* Quick Win Badge */}
      <div className="absolute top-4 right-4">
        <Badge 
          className="text-xs px-2 py-1"
          style={{
            backgroundColor: COLORS.success,
            color: '#0A0A0F',
            fontWeight: 'bold'
          }}
        >
          QUICK WIN
        </Badge>
      </div>

      {/* Icon */}
      {Icon && (
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="inline-flex p-3 rounded-xl mb-4"
          style={{ backgroundColor: `${COLORS.success}20` }}
        >
          <Icon className="w-7 h-7" style={{ color: COLORS.success }} />
        </motion.div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform">
        {win.title}
      </h3>

      {/* Timeframe */}
      <p className="text-sm text-gray-400 mb-2">
        <Clock className="w-4 h-4 inline mr-2" style={{ color: COLORS.success }} />
        {win.timeframe}
      </p>

      {/* Investment */}
      <p className="text-sm text-gray-400 mb-3">
        {win.investment}
      </p>

      {/* Returns */}
      <div className="flex items-center gap-2 text-sm font-bold" style={{ color: COLORS.success }}>
        <Zap className="w-4 h-4" />
        <span>{win.returns}</span>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ 
          border: `1px solid ${COLORS.success}00`,
        }}
        whileHover={{
          borderColor: COLORS.success,
          boxShadow: `0 0 30px ${COLORS.success}40`
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASection({ autoColor }: { autoColor: string }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, ${autoColor}15, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${autoColor}15, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, ${autoColor}15, transparent 50%)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex mb-8"
          >
            <Zap className="w-16 h-16" style={{ color: autoColor }} />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Automatisez votre <span style={{ color: autoColor }}>croissance</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Libérez le potentiel de votre équipe en automatisant les tâches répétitives. 
            Concentrez-vous sur ce qui compte vraiment.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button 
                size="lg"
                className="group text-lg px-8 py-6"
                style={{ 
                  backgroundColor: autoColor,
                  color: '#0A0A0F'
                }}
              >
                Démarrer l'Automatisation
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                style={{ 
                  borderColor: autoColor,
                  color: autoColor
                }}
              >
                Explorer les Solutions
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 flex items-center justify-center gap-8 flex-wrap text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: COLORS.success }} />
              <span>ROI Mesurable</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: COLORS.success }} />
              <span>Support Suisse</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: COLORS.success }} />
              <span>Quick Wins Garantis</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
