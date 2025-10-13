// src/pages/ExpertiseDeveloppement.tsx
// Développement - Page d'Expertise PROFESSIONNELLE (Style sobre comme ExpertiseIA)
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md
// Performance: 60fps garanti - Animations simplifiées, design professionnel

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
  Package,
  GitBranch,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function ExpertiseDeveloppement() {
  const pillar = getPillarByCategory('developpement');

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
      
      <HeroSection pillar={pillar} devColor={devColor} />
      <MetricsSection metrics={pillar.metrics} devColor={devColor} />
      <TechnologiesSection technologies={pillar.technologies} devColor={devColor} />
      <CapabilitiesSection capabilities={pillar.capabilities} devColor={devColor} />
      <UseCasesSection useCases={pillar.useCases} devColor={devColor} />
      <QuickWinsSection quickWins={pillar.quickWins} devColor={devColor} />
      <CTASection devColor={devColor} />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// HERO SECTION - Simple & Professional (comme ExpertiseIA)
// ============================================================================
function HeroSection({ pillar, devColor }: { pillar: any; devColor: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Gradient Glow Background - Sobre comme ExpertiseIA */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 30% 50%, ${devColor}20, transparent 50%)`,
            `radial-gradient(circle at 70% 50%, ${devColor}20, transparent 50%)`,
            `radial-gradient(circle at 30% 50%, ${devColor}20, transparent 50%)`,
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
          style={{ 
            background: `linear-gradient(135deg, ${devColor}90, ${devColor}70)`,
            border: `2px solid ${devColor}`,
            boxShadow: `0 4px 20px ${devColor}40`
          }}
        >
          <Code className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold text-white">
            {pillar.name}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {pillar.tagline.split(' ').map((word: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="inline-block mr-4"
              style={{ 
                color: i % 3 === 0 ? devColor : 'inherit',
                filter: i % 3 === 0 ? `drop-shadow(0 0 20px ${devColor}60)` : 'none'
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
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
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg" 
                className="group"
                style={{ 
                  background: `linear-gradient(135deg, ${devColor}, ${devColor}dd)`,
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.15)',
                  boxShadow: `0 4px 20px ${devColor}60`
                }}
              >
                <Terminal className="w-5 h-5 mr-2" />
                Démarrer un Projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </Link>
          <Link to="/portfolio">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                style={{ 
                  background: `${devColor}30`,
                  borderColor: `${devColor}60`,
                  color: 'white',
                  borderWidth: '2px'
                }}
              >
                Voir Nos Projets
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// METRICS SECTION - Simplifié comme ExpertiseIA
// ============================================================================
function MetricsSection({ metrics, devColor }: { metrics: any; devColor: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const metricsArray = [
    { label: metrics.yearsExperience.label, value: metrics.yearsExperience.value, icon: Award },
    { label: metrics.projectsCompleted.label, value: metrics.projectsCompleted.value, icon: Rocket },
    { label: metrics.avgROI.label, value: metrics.avgROI.value, icon: TrendingUp },
    { label: metrics.clientSatisfaction.label, value: metrics.clientSatisfaction.value, icon: Target }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metricsArray.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl group transition-all duration-300 cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${devColor}60, ${devColor}40)`,
                border: `2px solid ${devColor}80`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="mb-4">
                <metric.icon className="w-10 h-10 text-white" style={{ filter: `drop-shadow(0 0 8px ${devColor})` }} />
              </motion.div>

              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                className="text-5xl font-bold mb-2 text-white"
              >
                {metric.value}
              </motion.div>

              <div className="text-sm text-gray-200 font-medium">
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
// TECHNOLOGIES SECTION - Simplifié (pas de morphing excessif)
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
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8, scale: 1.05 }}
      onHoverStart={() => onHover(tech.name)}
      onHoverEnd={() => onHover(null)}
      className="relative p-6 rounded-xl group cursor-pointer overflow-hidden transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${devColor}40, ${devColor}25)`,
        border: `2px solid ${isHovered ? devColor : `${devColor}60`}`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)'
      }}
    >
      {/* Icon */}
      {Icon && (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
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
    </motion.div>
  );
}

// ============================================================================
// CAPABILITIES SECTION - Simplifié (FILIGRANES SUPPRIMÉS)
// ============================================================================
function CapabilitiesSection({ capabilities, devColor }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* ⚠️ FILIGRANES ORANGE SUPPRIMÉS (Layers, Cloud, Server) */}

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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: (index % 2) * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -4 }}
      className="p-8 rounded-2xl group cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${devColor}50, ${devColor}30)`,
        border: `2px solid ${devColor}70`,
        boxShadow: `0 4px 20px ${devColor}25`
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-6 mb-6">
        {/* Icon */}
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
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
    </motion.div>
  );
}

// ============================================================================
// USE CASES SECTION - Simplifié
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8 }}
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
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform">
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
    </motion.div>
  );
}

// ============================================================================
// QUICK WINS SECTION - Simplifié
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
        background: `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`,
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
// CTA SECTION - Simplifié (BACKGROUND RAYÉ SUPPRIMÉ)
// ============================================================================
function CTASection({ devColor }: { devColor: string }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* ⚠️ BACKGROUND RAYÉ SUPPRIMÉ - Gradient simple comme ExpertiseIA */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, ${devColor}15, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${devColor}15, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, ${devColor}15, transparent 50%)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
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
          {/* Icon - Simple rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex mb-8"
          >
            <Terminal className="w-16 h-16 text-white" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Prêt à transformer votre <span style={{ color: '#0A0A0F' }}>vision</span> ?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Transformez votre idée en application concrète. 
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
