// src/pages/ExpertiseIA.tsx
// Intelligence Artificielle - Page d'Expertise avec VRAIS Effets Sticky Scroll
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

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
  Brain,
  Sparkles,
  TrendingUp,
  Zap,
  Clock,
  Target,
  Award,
  Rocket,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

export default function ExpertiseIA() {
  const pillar = getPillarByCategory('ia');
  const [selectedProficiency, setSelectedProficiency] = useState<'all' | 'expert' | 'advanced' | 'intermediate'>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  if (!pillar) {
    return (
      <div className="min-h-screen bg-dainamics-background text-dainamics-light flex items-center justify-center">
        <Navigation />
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Erreur: Pilier IA non trouvé</h1>
          <p className="text-gray-400">La catégorie 'ia' n'existe pas dans les données.</p>
          <Link to="/expertise" className="text-dainamics-primary underline mt-4 inline-block">
            Retour à l'expertise
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const iaColor = categoryColors['ia']; // #6366F1
  const filteredTechnologies = selectedProficiency === 'all' 
    ? pillar.technologies 
    : pillar.technologies.filter(tech => tech.proficiency === selectedProficiency);

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light" ref={containerRef}>
      <EnhancedGridBackground />
      <Navigation />
      
      {/* Hero Section - Neural Network Visual */}
      <HeroSection pillar={pillar} iaColor={iaColor} />
      
      {/* Metrics Section */}
      <MetricsSection metrics={pillar.metrics} iaColor={iaColor} />
      
      {/* Technologies Section - STICKY SCROLL TYPE 1 */}
      <TechnologiesSection 
        technologies={filteredTechnologies}
        selectedProficiency={selectedProficiency}
        setSelectedProficiency={setSelectedProficiency}
        iaColor={iaColor}
        allTechnologies={pillar.technologies}
      />
      
      {/* Capabilities Section - STICKY SCROLL TYPE 2 (Progress-based) */}
      <CapabilitiesSection capabilities={pillar.capabilities} iaColor={iaColor} />
      
      {/* Use Cases - Scroll-Triggered Timeline */}
      <UseCasesSection useCases={pillar.useCases} iaColor={iaColor} />
      
      {/* Quick Wins */}
      <QuickWinsSection quickWins={pillar.quickWins} iaColor={iaColor} />
      
      {/* CTA Section */}
      <CTASection iaColor={iaColor} />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// HERO SECTION - Neural Network Visual
// ============================================================================
function HeroSection({ pillar, iaColor }: { pillar: any; iaColor: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Floating Orbs */}
      <FloatingOrbs color={iaColor} />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Badge - AMÉLIORATION: border-2 + hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 transition-all hover:scale-105"
          style={{ 
            backgroundColor: `${iaColor}15`,
            border: `2px solid ${iaColor}40`
          }}
        >
          <Brain className="w-4 h-4" style={{ color: iaColor }} />
          <span className="text-sm font-medium" style={{ color: iaColor }}>
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
                color: i % 3 === 0 ? iaColor : 'inherit'
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
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          {pillar.description}
        </motion.p>

        {/* CTAs - AMÉLIORATION: border-2 + transitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link to="/contact">
            <Button 
              size="lg" 
              className="group border-2 border-white/30 hover:border-white/50 transition-all"
              style={{ 
                backgroundColor: iaColor,
                color: 'white'
              }}
            >
              Démarrer un Projet IA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-opacity-10 transition-all"
              style={{ 
                borderColor: iaColor,
                color: iaColor
              }}
            >
              Voir Nos Projets
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// METRICS SECTION - Staggered Reveal
// ============================================================================
function MetricsSection({ metrics, iaColor }: { metrics: any; iaColor: string }) {
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
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
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
              className="relative p-8 rounded-2xl group transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${iaColor}08, transparent)`,
                border: `2px solid ${iaColor}30`
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4"
              >
                <metric.icon className="w-8 h-8" style={{ color: iaColor }} />
              </motion.div>

              {/* Value */}
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                className="text-4xl font-bold mb-2"
                style={{ color: iaColor }}
              >
                {metric.value}
              </motion.div>

              {/* Label */}
              <div className="text-sm text-gray-400">
                {metric.label}
              </div>

              {/* Hover Glow - AMÉLIORATION */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                style={{ backgroundColor: `${iaColor}30` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TECHNOLOGIES SECTION - STICKY SCROLL TYPE 1 (Sticky Sidebar)
// ============================================================================
function TechnologiesSection({ 
  technologies, 
  selectedProficiency, 
  setSelectedProficiency,
  iaColor,
  allTechnologies
}: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT - STICKY SIDEBAR */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Technologies <span style={{ color: iaColor }}>IA</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Notre stack technique pour l'intelligence artificielle
              </p>
            </motion.div>

            {/* Filters - AMÉLIORATION: border-2 + transitions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-sm font-semibold text-gray-500 mb-3">
                Niveau de Maîtrise
              </div>
              {(['all', 'expert', 'advanced', 'intermediate'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedProficiency(level)}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:scale-102"
                  style={{
                    backgroundColor: selectedProficiency === level ? `${iaColor}20` : 'transparent',
                    borderLeft: `4px solid ${selectedProficiency === level ? iaColor : 'transparent'}`,
                    color: selectedProficiency === level ? iaColor : '#9CA3AF',
                    border: selectedProficiency === level ? `2px solid ${iaColor}40` : '2px solid transparent'
                  }}
                >
                  <span className="font-medium capitalize">
                    {level === 'all' ? 'Toutes' : level === 'expert' ? 'Expert' : level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({level === 'all' ? allTechnologies.length : allTechnologies.filter((t: any) => t.proficiency === level).length})
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Stats - AMÉLIORATION: border-2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${iaColor}10, transparent)`,
                border: `2px solid ${iaColor}40`
              }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: iaColor }}>
                {allTechnologies.length}+
              </div>
              <div className="text-sm text-gray-400">
                Technologies maîtrisées
              </div>
            </motion.div>
          </div>

          {/* RIGHT - SCROLLING CARDS */}
          <div className="lg:col-span-8 space-y-4">
            {technologies.map((tech: any, index: number) => (
              <TechnologyCard 
                key={tech.name} 
                tech={tech} 
                index={index}
                iaColor={iaColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyCard({ tech, index, iaColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const Icon = iconMapper[tech.icon];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ scale: 1.02, x: -8 }}
      className="p-6 rounded-xl backdrop-blur-sm group cursor-pointer transition-all relative"
      style={{
        background: `linear-gradient(135deg, ${iaColor}08, transparent)`,
        border: `2px solid ${iaColor}30`
      }}
    >
      {/* Glow on hover - AMÉLIORATION */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl -z-10"
        style={{ backgroundColor: `${iaColor}20` }}
      />

      <div className="flex items-start gap-4">
        {/* Icon */}
        {Icon && (
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 p-3 rounded-lg"
            style={{ 
              backgroundColor: `${iaColor}15`,
              border: `2px solid ${iaColor}30`
            }}
          >
            <Icon className="w-6 h-6" style={{ color: iaColor }} />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <Badge 
              variant="outline"
              className="border-2 transition-all"
              style={{ 
                borderColor: iaColor,
                color: iaColor,
                fontSize: '0.7rem'
              }}
            >
              {tech.proficiency}
            </Badge>
          </div>
          <p className="text-gray-400 text-sm mb-3">{tech.description}</p>
          
          {/* Used In Projects */}
          {tech.usedIn.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle className="w-3 h-3" style={{ color: COLORS.success }} />
              <span>Utilisé dans {tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Arrow */}
        <ChevronRight 
          className="w-5 h-5 text-gray-600 group-hover:text-dainamics-light group-hover:translate-x-1 transition-all flex-shrink-0"
        />
      </div>
    </motion.div>
  );
}

// ============================================================================
// CAPABILITIES SECTION - STICKY SCROLL TYPE 2 (Progress-based)
// ============================================================================
function CapabilitiesSection({ capabilities, iaColor }: any) {
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
            Nos <span style={{ color: iaColor }}>Capacités</span> IA
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des services complets pour transformer votre entreprise avec l'intelligence artificielle
          </p>
        </motion.div>

        {/* Capabilities List */}
        <div className="space-y-24">
          {capabilities.map((capability: any, index: number) => (
            <CapabilityItem 
              key={capability.id}
              capability={capability}
              index={index}
              iaColor={iaColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityItem({ capability, index, iaColor }: any) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const Icon = iconMapper[capability.icon];
  const complexityColor = complexityColors[capability.complexity];

  return (
    <motion.div
      ref={itemRef}
      style={{ scale, opacity }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* Left - Icon & Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Icon - AMÉLIORATION: border-2 */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="inline-flex p-6 rounded-2xl transition-all"
          style={{ 
            backgroundColor: `${iaColor}15`,
            border: `2px solid ${iaColor}30`
          }}
        >
          {Icon && <Icon className="w-12 h-12" style={{ color: iaColor }} />}
        </motion.div>

        {/* Title & Badge - AMÉLIORATION: border-2 sur badge */}
        <div>
          <Badge 
            className="mb-4 border-2 transition-all"
            style={{ 
              backgroundColor: `${complexityColor}20`,
              color: complexityColor,
              borderColor: `${complexityColor}60`
            }}
          >
            {capability.complexity}
          </Badge>
          <h3 className="text-3xl font-bold mb-4">{capability.name}</h3>
          <p className="text-gray-400 text-lg">{capability.description}</p>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-3 text-sm">
          <Clock className="w-4 h-4" style={{ color: iaColor }} />
          <span className="text-gray-500">Durée typique: </span>
          <span style={{ color: iaColor }} className="font-semibold">{capability.timeline}</span>
        </div>
      </motion.div>

      {/* Right - Deliverables - AMÉLIORATION: border-2 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-xl font-semibold mb-6 text-gray-300">Livrables</h4>
        {capability.deliverables.map((deliverable: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 p-4 rounded-lg transition-all hover:scale-102"
            style={{
              background: `linear-gradient(135deg, ${iaColor}05, transparent)`,
              borderLeft: `3px solid ${iaColor}60`
            }}
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.success }} />
            <span className="text-gray-300">{deliverable}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// USE CASES SECTION - Scroll-Triggered Timeline
// ============================================================================
function UseCasesSection({ useCases, iaColor }: any) {
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Cas d'<span style={{ color: iaColor }}>Usage</span> Concrets
          </h2>
          <p className="text-xl text-gray-400">
            Transformations réelles pour des entreprises suisses
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-16">
          {/* Vertical Line - AMÉLIORATION: plus épaisse */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-1"
            style={{ backgroundColor: `${iaColor}40` }}
          />

          {useCases.map((useCase: any, index: number) => (
            <UseCaseCard 
              key={useCase.id}
              useCase={useCase}
              index={index}
              iaColor={iaColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase, index, iaColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-24"
    >
      {/* Timeline Dot - AMÉLIORATION: plus gros */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="absolute left-6 top-6 w-6 h-6 rounded-full border-4 border-dainamics-background"
        style={{ 
          backgroundColor: iaColor,
          boxShadow: `0 0 25px ${iaColor}`
        }}
      />

      {/* Card - AMÉLIORATION: border-2 + hover */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className="p-8 rounded-2xl transition-all group relative"
        style={{
          background: `linear-gradient(135deg, ${iaColor}10, transparent)`,
          border: `2px solid ${iaColor}40`
        }}
      >
        {/* Glow on hover - AMÉLIORATION */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
          style={{ backgroundColor: `${iaColor}20` }}
        />

        {/* Industry - AMÉLIORATION: border-2 */}
        <Badge 
          className="mb-4 border-2 transition-all"
          variant="outline"
          style={{ 
            borderColor: iaColor,
            color: iaColor
          }}
        >
          {useCase.industry}
        </Badge>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-6">{useCase.description}</p>

        {/* ROI Results */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" style={{ color: COLORS.success }} />
            <span className="text-sm" style={{ color: COLORS.success }}>
              {useCase.roi.savings}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
            className="flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" style={{ color: COLORS.success }} />
            <span className="text-sm" style={{ color: COLORS.success }}>
              {useCase.roi.efficiency}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// QUICK WINS SECTION
// ============================================================================
function QuickWinsSection({ quickWins, iaColor }: any) {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Quick <span style={{ color: COLORS.success }}>Wins</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Résultats rapides et ROI immédiat avec nos solutions IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickWins.map((win: any, index: number) => (
            <QuickWinCard 
              key={index}
              win={win}
              index={index}
              iaColor={iaColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickWinCard({ win, index, iaColor }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-6 rounded-2xl group cursor-pointer transition-all relative"
      style={{
        background: `linear-gradient(135deg, ${COLORS.success}10, transparent)`,
        border: `2px solid ${COLORS.success}40`
      }}
    >
      {/* Glow on hover - AMÉLIORATION */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
        style={{ backgroundColor: `${COLORS.success}20` }}
      />

      {/* Badge - AMÉLIORATION: border */}
      <Badge 
        className="mb-4 border transition-all"
        style={{
          backgroundColor: COLORS.success,
          color: 'white',
          fontSize: '0.6rem',
          padding: '0.25rem 0.5rem',
          borderColor: 'white'
        }}
      >
        QUICK WIN
      </Badge>

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
      <p className="text-sm text-gray-400 mb-2">
        {win.investment}
      </p>

      {/* Returns */}
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: COLORS.success }}>
        <Zap className="w-4 h-4" />
        <span>{win.returns}</span>
      </div>
    </motion.div>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASection({ iaColor }: { iaColor: string }) {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-16 rounded-3xl overflow-hidden"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${iaColor}20, transparent)`,
            border: `2px solid ${iaColor}50`
          }}
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 blur-3xl"
            style={{ backgroundColor: iaColor }}
          />

          {/* Content */}
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: iaColor }} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre <span style={{ color: iaColor }}>entreprise</span> ?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Discutons de vos besoins en IA et découvrons ensemble comment nous pouvons vous aider
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="group border-2 border-white/30 hover:border-white/50 transition-all"
                style={{ 
                  backgroundColor: iaColor,
                  color: 'white',
                  padding: '1.5rem 3rem',
                  fontSize: '1.125rem'
                }}
              >
                Démarrer Votre Projet IA
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================
function FloatingOrbs({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: '400px',
            height: '400px',
            backgroundColor: `${color}15`,
            top: `${20 + i * 30}%`,
            left: `${10 + i * 30}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}