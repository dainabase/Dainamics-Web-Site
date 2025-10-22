// src/pages/ExpertiseDeveloppement.tsx
// Développement - Page d'Expertise OPTIMISÉE & PROFESSIONNELLE
// Référence Design System: DAINAMICS_Design_System_v2_Complete.md
// Performance: 60fps garanti - Animations simplifiées, sobre comme ExpertiseIA

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
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
  Code,
  Terminal,
  Rocket,
  TrendingUp,
  Clock,
  Target,
  Award,
  CheckCircle,
  Smartphone,
  Globe,
  Server,
  Package,
  GitBranch,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function ExpertiseDeveloppement() {
  const pillar = getPillarByCategory('developpement');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (!pillar) {
    return (
      <div className="min-h-screen bg-dainamics-background text-dainamics-light flex items-center justify-center">
        <Navigation />
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Erreur: Pilier Développement non trouvé</h1>
          <p className="text-gray-400">La catégorie 'developpement' n'existe pas dans les données.</p>
          <Link to="/expertise" className="text-dainamics-primary underline mt-4 inline-block">
            Retour à l'expertise
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const devColor = categoryColors['developpement']; // #FF5A00 (ORANGE)

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light">
      <EnhancedGridBackground />
      <Navigation />
      
      {/* Sticky Progress Bar */}
      <ScrollProgressBar />
      
      {/* Hero Section - Code Animation */}
      <HeroSection pillar={pillar} devColor={devColor} />
      
      {/* Metrics Section - Parallax Cards */}
      <MetricsSection metrics={pillar.metrics} devColor={devColor} />
      
      {/* Technologies Section - Grid */}
      <TechnologiesSection 
        technologies={pillar.technologies}
        devColor={devColor}
      />
      
      {/* Capabilities Section - Simple Cards */}
      <CapabilitiesSection 
        capabilities={pillar.capabilities} 
        devColor={devColor}
        sectionRefs={sectionRefs}
      />
      
      {/* Use Cases - Floating Cards */}
      <UseCasesSection useCases={pillar.useCases} devColor={devColor} />
      
      {/* Quick Wins - Accordion Style */}
      <QuickWinsSection quickWins={pillar.quickWins} devColor={devColor} />
      
      {/* CTA Section */}
      <CTASection devColor={devColor} />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// SCROLL PROGRESS BAR - STICKY TOP
// ============================================================================
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-dainamics-cta via-dainamics-primary to-dainamics-accent z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// ============================================================================
// HERO SECTION - Floating Code Blocks (SIMPLIFIÉ)
// ============================================================================
function HeroSection({ pillar, devColor }: { pillar: any; devColor: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const codeY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const codeSnippets = [
    { code: '<App />', x: '10%', y: '20%', delay: 0 },
    { code: 'const', x: '80%', y: '30%', delay: 0.2 },
    { code: '{ }', x: '15%', y: '70%', delay: 0.4 },
    { code: '=>', x: '85%', y: '65%', delay: 0.6 }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-32">
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-4xl font-bold opacity-10"
            style={{ 
              left: snippet.x, 
              top: snippet.y,
              color: devColor,
              y: codeY
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: snippet.delay }}
          >
            {snippet.code}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Badge - OPTIMISÉ: 90% → 70% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ 
            background: `linear-gradient(135deg, ${devColor}90, ${devColor}70)`,
            border: `2px solid ${devColor}`,
            boxShadow: `0 4px 20px ${devColor}40`
          }}
        >
          <Code className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">
            {pillar.name}
          </span>
        </motion.div>

        {/* Title with Terminal Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="font-mono" style={{ color: devColor }}>&gt;</span>{' '}
            {pillar.tagline}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          {pillar.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link to="/contact">
            <Button 
              size="lg" 
              className="group"
              style={{ 
                backgroundColor: devColor,
                color: 'white'
              }}
            >
              <Terminal className="w-5 h-5 mr-2" />
              Démarrer un Projet
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button 
              size="lg" 
              variant="outline"
              style={{ 
                borderColor: devColor,
                color: devColor
              }}
            >
              <GitBranch className="w-5 h-5 mr-2" />
              Voir le Portfolio
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// METRICS SECTION - Parallax Cards (ANIMATIONS SIMPLIFIÉES)
// ============================================================================
function MetricsSection({ metrics, devColor }: { metrics: any; devColor: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const metricsArray = [
    { label: metrics.yearsExperience.label, value: metrics.yearsExperience.value, icon: Award },
    { label: metrics.projectsCompleted.label, value: metrics.projectsCompleted.value, icon: Rocket },
    { label: metrics.avgROI.label, value: metrics.avgROI.value, icon: TrendingUp },
    { label: metrics.clientSatisfaction.label, value: metrics.clientSatisfaction.value, icon: Target }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsArray.map((metric, index) => {
            // Different parallax speed for each card
            const y = useTransform(
              scrollYProgress, 
              [0, 1], 
              [100 - index * 20, -100 + index * 20]
            );

            return (
              <MetricCard 
                key={index}
                metric={metric}
                index={index}
                devColor={devColor}
                y={y}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index, devColor, y }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        scale: 1.05,
        y: -12
      }}
      className="relative p-8 rounded-2xl group cursor-pointer"
      style={{
        y,
        background: `linear-gradient(135deg, ${devColor}60, ${devColor}40)`,
        border: `2px solid ${devColor}80`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
      }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, ${devColor}20, transparent)`
        }}
      />

      {/* Icon - SIMPLIFIÉ: pas de rotation */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 mb-4"
      >
        <metric.icon className="w-12 h-12" style={{ color: devColor }} />
      </motion.div>

      {/* Value */}
      <motion.div
        className="relative z-10 text-5xl font-bold mb-2"
        style={{ color: devColor }}
      >
        {metric.value}
      </motion.div>

      {/* Label */}
      <div className="relative z-10 text-sm text-gray-400">
        {metric.label}
      </div>
    </motion.div>
  );
}

// ============================================================================
// TECHNOLOGIES SECTION - Grid (ANIMATIONS SIMPLIFIÉES)
// ============================================================================
function TechnologiesSection({ technologies, devColor }: any) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
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
            Stack <span style={{ color: devColor }}>Technologique</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies modernes pour créer des applications performantes et scalables
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech: any, index: number) => (
            <TechnologyCard 
              key={tech.name}
              tech={tech}
              index={index}
              devColor={devColor}
              isHovered={hoveredTech === tech.name}
              onHover={setHoveredTech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyCard({ tech, index, devColor, isHovered, onHover }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const Icon = iconMapper[tech.icon];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        zIndex: 10
      }}
      onHoverStart={() => onHover(tech.name)}
      onHoverEnd={() => onHover(null)}
      className="relative p-6 rounded-xl group cursor-pointer overflow-hidden"
      style={{
        background: isHovered 
          ? `linear-gradient(135deg, ${devColor}40, ${devColor}25)`
          : `linear-gradient(135deg, ${devColor}40, ${devColor}25)`,
        border: `2px solid ${isHovered ? devColor : `${devColor}60`}`,
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)'
      }}
    >
      {/* Icon - SIMPLIFIÉ: pas de rotation */}
      {Icon && (
        <motion.div
          animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
      )}

      {/* Name */}
      <h3 className="text-lg font-bold mb-2 text-white">{tech.name}</h3>

      {/* Category */}
      <Badge 
        variant="outline"
        className="text-xs"
        style={{ 
          background: `${devColor}40`,
          borderColor: `${devColor}80`,
          color: 'white',
          borderWidth: '2px'
        }}
      >
        {tech.category}
      </Badge>

      {/* Glow Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 blur-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ backgroundColor: `${devColor}30` }}
        />
      )}
    </motion.div>
  );
}

// ============================================================================
// CAPABILITIES SECTION - Simple Cards (FILIGRANES SUPPRIMÉS, ANIMATIONS SIMPLIFIÉES)
// ============================================================================
function CapabilitiesSection({ capabilities, devColor, sectionRefs }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* FILIGRANES SUPPRIMÉS - Section propre et sobre */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Services de <span style={{ color: devColor }}>Développement</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solutions complètes de développement adaptées à vos besoins
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {capabilities.map((capability: any, index: number) => (
            <CapabilityCard 
              key={capability.id}
              capability={capability}
              index={index}
              devColor={devColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ capability, index, devColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const Icon = iconMapper[capability.icon];
  const complexityColor = complexityColors[capability.complexity];

  // Alternate side animation
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        x: fromLeft ? -100 : 100
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: (index % 2) * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.03,
        y: -10
      }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${devColor}50, ${devColor}30)`,
        border: `2px solid ${devColor}70`,
        boxShadow: `0 4px 20px ${devColor}25`
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-6 mb-6">
        {/* Icon - SIMPLIFIÉ: pas de rotation */}
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 p-4 rounded-xl"
            style={{ 
              background: `linear-gradient(135deg, ${devColor}80, ${devColor}60)`,
              border: `2px solid ${devColor}`
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        )}

        {/* Title & Badge */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-white">{capability.name}</h3>
          <Badge 
            style={{ 
              backgroundColor: `${complexityColor}20`,
              color: complexityColor,
              border: `1px solid ${complexityColor}40`
            }}
          >
            {capability.complexity}
          </Badge>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6">{capability.description}</p>

      {/* Timeline */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Clock className="w-4 h-4" style={{ color: devColor }} />
        <span className="text-gray-400">Durée: </span>
        <span className="font-semibold" style={{ color: devColor }}>
          {capability.timeline}
        </span>
      </div>

      {/* Deliverables */}
      <div className="space-y-2">
        {capability.deliverables.slice(0, 3).map((deliverable: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            className="flex items-center gap-2 text-sm p-3 rounded-lg"
            style={{
              background: `${devColor}25`,
              borderLeft: `3px solid ${devColor}`,
              border: `2px solid ${devColor}40`
            }}
          >
            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
            <span className="text-gray-200">{deliverable}</span>
          </motion.div>
        ))}
      </div>

      {/* Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl -z-10"
        style={{ backgroundColor: `${devColor}15` }}
      />
    </motion.div>
  );
}

// ============================================================================
// USE CASES SECTION - Floating Cards (ANIMATIONS SIMPLIFIÉES)
// ============================================================================
function UseCasesSection({ useCases, devColor }: any) {
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
            Projets <span style={{ color: devColor }}>Réalisés</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Applications et solutions développées pour nos clients
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase: any, index: number) => (
            <UseCaseCard 
              key={useCase.id}
              useCase={useCase}
              index={index}
              devColor={devColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase, index, devColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        y: 100
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -15,
        scale: 1.03
      }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${devColor}50, ${devColor}30)`,
        border: `2px solid ${devColor}70`,
        boxShadow: `0 4px 20px ${devColor}25`
      }}
    >
      {/* Industry Badge */}
      <Badge 
        className="mb-4"
        style={{ 
          backgroundColor: `${devColor}25`,
          color: devColor,
          border: `1px solid ${devColor}50`
        }}
      >
        {useCase.industry}
      </Badge>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform text-white">
        {useCase.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {useCase.description}
      </p>

      {/* ROI Results */}
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 text-sm"
        >
          <Clock className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
          <span style={{ color: COLORS.success }}>{useCase.roi.timeframe}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 text-sm"
        >
          <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
          <span style={{ color: COLORS.success }}>{useCase.roi.savings}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-3 text-sm"
        >
          <Zap className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.success }} />
          <span style={{ color: COLORS.success }}>{useCase.roi.efficiency}</span>
        </motion.div>
      </div>

      {/* Floating Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${devColor}20, transparent)`,
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

// ============================================================================
// QUICK WINS SECTION - Accordion Style
// ============================================================================
function QuickWinsSection({ quickWins, devColor }: any) {
  const [expandedWin, setExpandedWin] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Zap className="w-10 h-10" style={{ color: COLORS.success }} />
            <h2 className="text-5xl font-bold">
              Quick <span style={{ color: COLORS.success }}>Wins</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400">
            Développements rapides avec impact immédiat
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {quickWins.map((win: any, index: number) => (
            <QuickWinAccordion 
              key={`quick-win-${index}`}
              win={win}
              index={index}
              devColor={devColor}
              isExpanded={expandedWin === win.id}
              onToggle={() => setExpandedWin(expandedWin === win.id ? null : win.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickWinAccordion({ win, index, devColor, isExpanded, onToggle }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: isExpanded
          ? `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`
          : `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`,
        border: `2px solid ${isExpanded ? COLORS.success : `${COLORS.success}70`}`,
        boxShadow: `0 4px 20px ${COLORS.success}25`
      }}
    >
      {/* Header - Clickable */}
      <motion.button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
        whileHover={{ x: 8 }}
      >
        <div className="flex items-center gap-4 flex-grow">

          {/* Title & Badge */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white">{win.title}</h3>
              <Badge 
                style={{
                  backgroundColor: COLORS.success,
                  color: '#0A0A0F',
                  fontSize: '0.65rem'
                }}
              >
                QUICK WIN
              </Badge>
            </div>
            <div className="text-sm" style={{ color: COLORS.success }}>
              {win.returns}
            </div>
          </div>
        </div>

        {/* Expand Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-6 h-6" style={{ color: COLORS.success }} />
        </motion.div>
      </motion.button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 space-y-2">
          <p className="text-gray-300">
            <Clock className="w-4 h-4 inline mr-2" style={{ color: COLORS.success }} />
            {win.timeframe}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Investissement:</span> {win.investment}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// CTA SECTION (BACKGROUND RAYÉ SUPPRIMÉ, ICÔNE SIMPLIFIÉE)
// ============================================================================
function CTASection({ devColor }: { devColor: string }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* BACKGROUND RAYÉ SUPPRIMÉ - Section propre */}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-16 rounded-[2rem] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${devColor}60, ${devColor}40)`,
            border: `3px solid ${devColor}80`,
            boxShadow: `0 8px 40px ${devColor}30`
          }}
        >
          {/* Icon - SIMPLIFIÉ: pulse au lieu de rotation infinie */}
          <motion.div
            className="inline-flex mb-8"
            animate={{ 
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Terminal className="w-16 h-16 text-white" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Prêt à <span style={{ color: '#0A0A0F' }}>coder</span> l'avenir ?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Transformez votre vision en application concrète. 
            Notre équipe de développeurs experts est prête à relever vos défis.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button 
                size="lg"
                className="group text-lg px-8 py-6"
                style={{ 
                  backgroundColor: '#0A0A0F',
                  color: devColor,
                  border: `2px solid ${devColor}`
                }}
              >
                <Code className="w-5 h-5 mr-2" />
                Démarrer le Projet
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-4px] transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                style={{ 
                  borderColor: '#0A0A0F',
                  color: '#0A0A0F',
                  backgroundColor: `${devColor}30`
                }}
              >
                <GitBranch className="w-5 h-5 mr-2" />
                Voir nos Réalisations
              </Button>
            </Link>
          </div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 flex items-center justify-center gap-6 flex-wrap"
          >
            {[
              { icon: Globe, label: 'Web' },
              { icon: Smartphone, label: 'Mobile' },
              { icon: Server, label: 'Cloud' },
              { icon: Package, label: 'API' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: `${devColor}25`,
                  border: `1px solid ${devColor}50`
                }}
              >
                <item.icon className="w-5 h-5" style={{ color: devColor }} />
                <span className="text-sm font-semibold" style={{ color: devColor }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}