// src/pages/ExpertiseAutomatisation.tsx
// Automatisation - Page d'Expertise avec ScrollStack Technologies
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md
// Performance: 60fps garanti - ScrollStack avec effets empilés

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollStack, { ScrollStackItem } from '@/components/ui/scroll-stack';
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
  Activity
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

  const autoColor = categoryColors['automatisation']; // #10E4FF (CYAN)

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light">
      <EnhancedGridBackground />
      <Navigation />
      
      {/* Hero Section - Workflow Visual */}
      <HeroSection pillar={pillar} autoColor={autoColor} />
      
      {/* Metrics Section - Cards with Stagger */}
      <MetricsSection metrics={pillar.metrics} autoColor={autoColor} />
      
      {/* Technologies Section - SCROLLSTACK */}
      <TechnologiesSection 
        technologies={pillar.technologies}
        autoColor={autoColor}
      />
      
      {/* Capabilities Section - STICKY RIGHT + SCROLLING LEFT */}
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
                background: `linear-gradient(135deg, ${autoColor}90, ${autoColor}70)`,
                border: `2px solid ${autoColor}`,
                boxShadow: `0 4px 20px ${autoColor}40`
              }}
            >
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
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
                background: `linear-gradient(135deg, ${metric.color}60, ${metric.color}40)`,
                border: `2px solid ${metric.color}80`,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
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
// TECHNOLOGIES SECTION - SCROLLSTACK
// ============================================================================
function TechnologiesSection({ technologies, autoColor }: any) {
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Stack <span style={{ color: autoColor }}>Technique</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies et outils que nous maîtrisons pour automatiser vos processus
          </p>
          <p className="text-sm text-gray-500 mt-4">
            {technologies.length} technologies • Scroll pour explorer
          </p>
        </motion.div>

        {/* ScrollStack Container */}
        <div className="h-[800px] rounded-3xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${autoColor}10, transparent)`,
            border: `1px solid ${autoColor}30`
          }}
        >
          <ScrollStack
            itemDistance={50}
            itemScale={0.04}
            itemStackDistance={20}
            stackPosition="15%"
            scaleEndPosition="5%"
            baseScale={0.9}
            rotationAmount={0}
            blurAmount={0}
          >
            {technologies.map((tech: any, index: number) => {
              const Icon = iconMapper[tech.icon];
              
              return (
                <ScrollStackItem
                  key={tech.name}
                  itemClassName=""
                >
                  <div 
                    className="w-full h-full flex flex-col"
                    style={{
                      background: `linear-gradient(135deg, ${autoColor}30, ${autoColor}15)`,
                      border: `2px solid ${autoColor}60`,
                      borderRadius: '40px'
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {Icon && (
                          <div 
                            className="p-4 rounded-2xl"
                            style={{ 
                              background: `linear-gradient(135deg, ${autoColor}70, ${autoColor}50)`,
                              border: `2px solid ${autoColor}`
                            }}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {tech.category}
                          </p>
                        </div>
                      </div>
                      
                      <Badge 
                        variant="outline"
                        style={{ 
                          background: `${autoColor}30`,
                          borderColor: `${autoColor}70`,
                          color: 'white',
                          fontSize: '0.7rem',
                          borderWidth: '2px'
                        }}
                      >
                        {tech.proficiency}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 flex-grow">
                      {tech.description}
                    </p>

                    {/* Footer */}
                    {tech.usedIn.length > 0 && (
                      <div className="flex items-center gap-2 text-xs" style={{ color: COLORS.success }}>
                        <CheckCircle className="w-4 h-4" />
                        <span>{tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''} réalisé{tech.usedIn.length > 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CAPABILITIES SECTION - STICKY RIGHT
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
                background: `linear-gradient(135deg, ${autoColor}70, ${autoColor}50)`,
                border: `2px solid ${autoColor}90`,
                boxShadow: `0 4px 20px ${autoColor}30`
              }}
            >
              <Gauge className="w-10 h-10 mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                {capabilities.length}
              </div>
              <div className="text-sm text-gray-200 mb-6">
                Services d'automatisation disponibles
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Complexité moyenne</span>
                  <span className="font-semibold" style={{ color: COLORS.warning }}>Intermediate</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">ROI moyen</span>
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
                background: `radial-gradient(circle at top right, ${autoColor}40, transparent)`,
                border: `2px solid ${autoColor}60`,
                boxShadow: `0 4px 20px ${autoColor}25`
              }}
            >
              <Activity className="w-8 h-8 mb-4" style={{ color: autoColor }} />
              <h3 className="text-xl font-bold mb-3 text-white">
                Diagnostic Automatisation
              </h3>
              <p className="text-sm text-gray-300 mb-6">
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
        background: `linear-gradient(135deg, ${autoColor}50, ${autoColor}30)`,
        border: `2px solid ${autoColor}70`,
        boxShadow: `0 4px 20px ${autoColor}25`
      }}
    >
      <div className="flex gap-6">
        {/* Icon */}
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.15, rotate: -10 }}
            className="flex-shrink-0 p-4 rounded-xl h-fit"
            style={{ 
              background: `linear-gradient(135deg, ${autoColor}80, ${autoColor}60)`,
              border: `2px solid ${autoColor}`
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-grow">
          {/* Title & Badge */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform text-white">
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
          <p className="text-gray-300 mb-4">{capability.description}</p>

          {/* Timeline */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Clock className="w-4 h-4" style={{ color: autoColor }} />
            <span className="text-gray-400">Durée: </span>
            <span className="font-semibold" style={{ color: autoColor }}>{capability.timeline}</span>
          </div>

          {/* Deliverables Preview */}
          <div className="flex flex-wrap gap-2">
            {capability.deliverables.slice(0, 3).map((deliverable: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${autoColor}25`,
                  color: autoColor,
                  border: `1px solid ${autoColor}50`
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
// USE CASES SECTION - Cards Grid
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
        background: `linear-gradient(135deg, ${autoColor}50, ${autoColor}30)`,
        border: `2px solid ${autoColor}70`,
        transformStyle: 'preserve-3d',
        boxShadow: `0 4px 20px ${autoColor}25`
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
// QUICK WINS SECTION - STICKY HEADER
// ============================================================================
function QuickWinsSection({ quickWins, autoColor }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* STICKY HEADER */}
        <div className="sticky top-20 z-10 py-8 mb-12 border-b border-gray-800"
          style={{
            background: `linear-gradient(135deg, ${autoColor}40, transparent)`,
            borderColor: `${autoColor}60`
          }}
        >
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
              <p className="text-lg text-gray-300">
                Automatisations rapides avec ROI immédiat
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-3xl font-bold" style={{ color: COLORS.success }}>
                  {quickWins.length}
                </div>
                <div className="text-sm text-gray-400">Quick Wins</div>
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
        background: `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`,
        border: `2px solid ${COLORS.success}70`,
        boxShadow: `0 4px 20px ${COLORS.success}25`
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

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform text-white">
        {win.title}
      </h3>

      {/* Timeframe */}
      <p className="text-sm text-gray-300 mb-2">
        <Clock className="w-4 h-4 inline mr-2" style={{ color: COLORS.success }} />
        {win.timeframe}
      </p>

      {/* Investment */}
      <p className="text-sm text-gray-300 mb-3">
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
          className="relative p-16 rounded-[2rem] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${autoColor}60, ${autoColor}40)`,
            border: `3px solid ${autoColor}80`,
            boxShadow: `0 8px 40px ${autoColor}30`
          }}
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex mb-8"
          >
            <Zap className="w-16 h-16 text-white" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Automatisez votre <span style={{ color: '#0A0A0F' }}>croissance</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
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
                  backgroundColor: '#0A0A0F',
                  color: autoColor,
                  border: `2px solid ${autoColor}`
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
                  borderColor: '#0A0A0F',
                  color: '#0A0A0F',
                  backgroundColor: `${autoColor}30`
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
            className="mt-16 flex items-center justify-center gap-8 flex-wrap text-sm text-gray-200"
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