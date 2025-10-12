// src/pages/ExpertiseIA.tsx
// Intelligence Artificielle - Page d'Expertise avec Design Visible et Performant
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
      
      {/* Hero Section - Visible Premium Design */}
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
// HERO SECTION - Visible Premium Design
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
      {/* Gradient Glow Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 30% 50%, ${iaColor}20, transparent 50%)`,
            `radial-gradient(circle at 70% 50%, ${iaColor}20, transparent 50%)`,
            `radial-gradient(circle at 30% 50%, ${iaColor}20, transparent 50%)`,
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Orbs */}
      <FloatingOrbs color={iaColor} />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Badge - VISIBLE DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 transition-all hover:scale-105"
          style={{ 
            background: `linear-gradient(135deg, ${iaColor}80, ${iaColor}60)`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: `2px solid ${iaColor}60`,
            boxShadow: `0 8px 32px ${iaColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`
          }}
        >
          <Brain className="w-5 h-5" style={{ color: 'white' }} />
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
                color: i % 3 === 0 ? iaColor : 'inherit',
                filter: i % 3 === 0 ? `drop-shadow(0 0 20px ${iaColor}60)` : 'none'
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

        {/* CTAs - VISIBLE BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${iaColor}, ${iaColor}dd)`,
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.15)',
                  boxShadow: `0 8px 32px ${iaColor}50, inset 0 1px 1px rgba(255,255,255,0.25)`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer un Projet IA
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                  style={{ background: `radial-gradient(circle, ${iaColor}80, transparent)` }}
                />
              </Button>
            </motion.div>
          </Link>
          <Link to="/portfolio">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="relative overflow-hidden transition-all"
                style={{ 
                  background: `linear-gradient(135deg, ${iaColor}40, ${iaColor}20)`,
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderColor: `${iaColor}60`,
                  color: 'white',
                  borderWidth: '2px',
                  boxShadow: `inset 0 1px 1px rgba(255,255,255,0.15)`
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
// METRICS SECTION - Visible Cards with Glow
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
              whileHover={{ scale: 1.08, y: -8 }}
              className="relative p-8 rounded-3xl group transition-all cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${iaColor}50, ${iaColor}30)`,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: `2px solid ${iaColor}60`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)`
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="mb-4"
              >
                <metric.icon className="w-10 h-10" style={{ color: 'white', filter: `drop-shadow(0 0 10px ${iaColor}80)` }} />
              </motion.div>

              {/* Value */}
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                className="text-5xl font-bold mb-2 text-white"
                style={{ 
                  textShadow: `0 0 30px ${iaColor}70`
                }}
              >
                {metric.value}
              </motion.div>

              {/* Label */}
              <div className="text-sm text-gray-200 font-medium">
                {metric.label}
              </div>

              {/* Hover Glow - Reduced */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl -z-10"
                style={{ background: `radial-gradient(circle, ${iaColor}60, transparent 70%)` }}
              />
              
              {/* Glass Reflection */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TECHNOLOGIES SECTION - STICKY SCROLL with Visible Design
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
          
          {/* LEFT - STICKY SIDEBAR with Visible Design */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Technologies <span style={{ color: iaColor, textShadow: `0 0 20px ${iaColor}60` }}>IA</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Notre stack technique pour l'intelligence artificielle
              </p>
            </motion.div>

            {/* Filters - VISIBLE BUTTONS */}
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
                <motion.button
                  key={level}
                  onClick={() => setSelectedProficiency(level)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: selectedProficiency === level 
                      ? `linear-gradient(135deg, ${iaColor}70, ${iaColor}50)` 
                      : 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    borderLeft: `4px solid ${selectedProficiency === level ? iaColor : 'rgba(255,255,255,0.1)'}`,
                    color: selectedProficiency === level ? 'white' : '#9CA3AF',
                    border: `2px solid ${selectedProficiency === level ? `${iaColor}80` : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: selectedProficiency === level 
                      ? `0 8px 24px ${iaColor}30, inset 0 1px 1px rgba(255,255,255,0.15)` 
                      : 'none'
                  }}
                >
                  <span className="font-semibold capitalize flex items-center justify-between">
                    <span>{level === 'all' ? 'Toutes' : level === 'expert' ? 'Expert' : level === 'advanced' ? 'Avancé' : 'Intermédiaire'}</span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      background: selectedProficiency === level ? `${iaColor}40` : 'rgba(255,255,255,0.1)',
                      color: selectedProficiency === level ? 'white' : '#6B7280'
                    }}>
                      {level === 'all' ? allTechnologies.length : allTechnologies.filter((t: any) => t.proficiency === level).length}
                    </span>
                  </span>
                  {/* Hover Glow */}
                  {selectedProficiency === level && (
                    <div 
                      className="absolute inset-0 blur-xl -z-10"
                      style={{ background: `radial-gradient(circle, ${iaColor}40, transparent 70%)` }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Stats - VISIBLE CARD */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-8 rounded-2xl transition-all cursor-pointer relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${iaColor}60, ${iaColor}40)`,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: `2px solid ${iaColor}70`,
                boxShadow: `0 8px 32px ${iaColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`
              }}
            >
              <div className="text-4xl font-bold mb-2 text-white" style={{ textShadow: `0 0 20px ${iaColor}70` }}>
                {allTechnologies.length}+
              </div>
              <div className="text-sm text-gray-200 font-medium">
                Technologies maîtrisées
              </div>
              {/* Glass Reflection */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl opacity-10"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent)' }}
              />
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
      whileHover={{ scale: 1.02, x: -12, y: -4 }}
      className="p-6 rounded-2xl group cursor-pointer transition-all relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${iaColor}35, ${iaColor}20)`,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: `2px solid ${iaColor}50`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
      }}
    >
      {/* Glow on hover - Reduced */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-xl -z-10"
        style={{ background: `radial-gradient(circle at 50% 50%, ${iaColor}40, transparent 70%)` }}
      />
      
      {/* Glass Reflection */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1), transparent)' }}
      />

      <div className="flex items-start gap-4 relative z-10">
        {/* Icon */}
        {Icon && (
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 p-3 rounded-xl"
            style={{ 
              background: `linear-gradient(135deg, ${iaColor}60, ${iaColor}40)`,
              border: `2px solid ${iaColor}70`,
              boxShadow: `0 4px 16px ${iaColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`,
              backdropFilter: 'blur(6px)'
            }}
          >
            <Icon className="w-6 h-6" style={{ color: 'white', filter: `drop-shadow(0 0 6px ${iaColor}80)` }} />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
            <Badge 
              variant="outline"
              className="text-xs px-2 py-1 transition-all"
              style={{ 
                background: `linear-gradient(135deg, ${iaColor}50, ${iaColor}30)`,
                borderColor: `${iaColor}70`,
                color: 'white',
                borderWidth: '2px',
                backdropFilter: 'blur(6px)',
                boxShadow: `inset 0 1px 1px rgba(255,255,255,0.15)`
              }}
            >
              {tech.proficiency}
            </Badge>
          </div>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{tech.description}</p>
          
          {/* Used In Projects */}
          {tech.usedIn.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <CheckCircle className="w-3 h-3" style={{ color: COLORS.success, filter: `drop-shadow(0 0 4px ${COLORS.success}60)` }} />
              <span>Utilisé dans {tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Arrow */}
        <ChevronRight 
          className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0"
          style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }}
        />
      </div>
    </motion.div>
  );
}

// ============================================================================
// CAPABILITIES SECTION - Visible Cards with Progressive Scroll
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
            Nos <span style={{ color: iaColor, textShadow: `0 0 30px ${iaColor}60` }}>Capacités</span> IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
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
        {/* Icon - VISIBLE */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="inline-flex p-8 rounded-3xl transition-all relative overflow-hidden cursor-pointer"
          style={{ 
            background: `linear-gradient(135deg, ${iaColor}70, ${iaColor}50)`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: `2px solid ${iaColor}80`,
            boxShadow: `0 8px 32px ${iaColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`
          }}
        >
          {Icon && <Icon className="w-14 h-14" style={{ color: 'white', filter: `drop-shadow(0 0 12px ${iaColor}80)` }} />}
          {/* Glass Reflection */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl opacity-10"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent)' }}
          />
        </motion.div>

        {/* Title & Badge */}
        <div>
          <Badge 
            className="mb-4 text-xs px-3 py-1 transition-all"
            style={{ 
              background: `linear-gradient(135deg, ${complexityColor}60, ${complexityColor}40)`,
              color: 'white',
              borderColor: `${complexityColor}80`,
              border: '2px solid',
              backdropFilter: 'blur(6px)',
              boxShadow: `0 4px 12px ${complexityColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`
            }}
          >
            {capability.complexity}
          </Badge>
          <h3 className="text-3xl font-bold mb-4 text-white">{capability.name}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{capability.description}</p>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-3 text-sm">
          <Clock className="w-5 h-5" style={{ color: iaColor, filter: `drop-shadow(0 0 6px ${iaColor}60)` }} />
          <span className="text-gray-400">Durée typique: </span>
          <span style={{ color: iaColor }} className="font-semibold">{capability.timeline}</span>
        </div>
      </motion.div>

      {/* Right - Deliverables - VISIBLE CARDS */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-xl font-semibold mb-6 text-gray-200">Livrables</h4>
        {capability.deliverables.map((deliverable: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-start gap-3 p-5 rounded-xl transition-all relative overflow-hidden cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${iaColor}30, ${iaColor}15)`,
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              borderLeft: `3px solid ${iaColor}80`,
              border: `2px solid ${iaColor}40`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
            }}
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.success, filter: `drop-shadow(0 0 6px ${COLORS.success}60)` }} />
            <span className="text-gray-200 leading-relaxed">{deliverable}</span>
            {/* Glass Reflection */}
            <div 
              className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl opacity-0 hover:opacity-10 transition-opacity duration-500"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1), transparent)' }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// USE CASES SECTION - Visible Timeline
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
            Cas d'<span style={{ color: iaColor, textShadow: `0 0 30px ${iaColor}60` }}>Usage</span> Concrets
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Transformations réelles pour des entreprises suisses
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-16">
          {/* Vertical Line - VISIBLE */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
            style={{ 
              background: `linear-gradient(180deg, ${iaColor}80, ${iaColor}40)`,
              boxShadow: `0 0 20px ${iaColor}50`
            }}
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
      {/* Timeline Dot - VISIBLE */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="absolute left-6 top-8 w-8 h-8 rounded-full border-4 border-dainamics-background"
        style={{ 
          background: `radial-gradient(circle, ${iaColor}, ${iaColor}dd)`,
          boxShadow: `0 0 30px ${iaColor}90, 0 0 60px ${iaColor}60`
        }}
      />

      {/* Card - VISIBLE */}
      <motion.div
        whileHover={{ scale: 1.02, y: -8, x: -4 }}
        className="p-8 rounded-3xl transition-all group relative overflow-hidden cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${iaColor}40, ${iaColor}25)`,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: `2px solid ${iaColor}60`,
          boxShadow: `0 8px 32px ${iaColor}25, inset 0 1px 1px rgba(255,255,255,0.1)`
        }}
      >
        {/* Glow on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl -z-10"
          style={{ background: `radial-gradient(circle at 50% 50%, ${iaColor}50, transparent 70%)` }}
        />
        
        {/* Glass Reflection */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/3 rounded-t-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15), transparent)' }}
        />

        {/* Industry - VISIBLE BADGE */}
        <Badge 
          className="mb-4 text-xs px-3 py-1 transition-all"
          variant="outline"
          style={{ 
            background: `linear-gradient(135deg, ${iaColor}60, ${iaColor}40)`,
            borderColor: `${iaColor}80`,
            color: 'white',
            borderWidth: '2px',
            backdropFilter: 'blur(6px)',
            boxShadow: `inset 0 1px 1px rgba(255,255,255,0.15)`
          }}
        >
          {useCase.industry}
        </Badge>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>

        {/* ROI Results */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`,
              backdropFilter: 'blur(6px)',
              border: `2px solid ${COLORS.success}60`
            }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: 'white', filter: `drop-shadow(0 0 6px ${COLORS.success}60)` }} />
            <span className="text-sm font-semibold text-white">
              {useCase.roi.savings}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`,
              backdropFilter: 'blur(6px)',
              border: `2px solid ${COLORS.success}60`
            }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: 'white', filter: `drop-shadow(0 0 6px ${COLORS.success}60)` }} />
            <span className="text-sm font-semibold text-white">
              {useCase.roi.efficiency}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// QUICK WINS SECTION - Visible Cards
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
            Quick <span style={{ color: COLORS.success, textShadow: `0 0 30px ${COLORS.success}60` }}>Wins</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
      whileHover={{ y: -12, scale: 1.03 }}
      className="p-6 rounded-3xl group cursor-pointer transition-all relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.success}40, ${COLORS.success}25)`,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: `2px solid ${COLORS.success}60`,
        boxShadow: `0 8px 32px ${COLORS.success}25, inset 0 1px 1px rgba(255,255,255,0.1)`
      }}
    >
      {/* Glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl -z-10"
        style={{ background: `radial-gradient(circle at 50% 50%, ${COLORS.success}50, transparent 70%)` }}
      />
      
      {/* Glass Reflection */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/3 rounded-t-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15), transparent)' }}
      />

      {/* Badge */}
      <Badge 
        className="mb-4 transition-all"
        style={{
          background: `linear-gradient(135deg, ${COLORS.success}, ${COLORS.success}dd)`,
          color: 'white',
          fontSize: '0.6rem',
          padding: '0.35rem 0.6rem',
          border: '2px solid rgba(255,255,255,0.25)',
          boxShadow: `0 4px 12px ${COLORS.success}40, inset 0 1px 1px rgba(255,255,255,0.25)`
        }}
      >
        QUICK WIN
      </Badge>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform text-white">
        {win.title}
      </h3>

      {/* Timeframe */}
      <p className="text-sm text-gray-200 mb-2 flex items-center gap-2">
        <Clock className="w-4 h-4" style={{ color: 'white', filter: `drop-shadow(0 0 4px ${COLORS.success}60)` }} />
        {win.timeframe}
      </p>

      {/* Investment */}
      <p className="text-sm text-gray-300 mb-2">
        {win.investment}
      </p>

      {/* Returns */}
      <div className="flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg mt-4" style={{ 
        color: 'white',
        background: `linear-gradient(135deg, ${COLORS.success}50, ${COLORS.success}30)`,
        border: `2px solid ${COLORS.success}70`
      }}>
        <Zap className="w-4 h-4" style={{ filter: `drop-shadow(0 0 4px ${COLORS.success}60)` }} />
        <span>{win.returns}</span>
      </div>
    </motion.div>
  );
}

// ============================================================================
// CTA SECTION - Premium Visible Design
// ============================================================================
function CTASection({ iaColor }: { iaColor: string }) {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-16 rounded-[2rem] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${iaColor}50, ${iaColor}30)`,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: `3px solid ${iaColor}70`,
            boxShadow: `0 20px 60px ${iaColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`
          }}
        >
          {/* Animated Background Glow - Reduced */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 blur-[40px]"
            style={{ background: `radial-gradient(circle, ${iaColor}60, transparent 60%)` }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: 'white', filter: `drop-shadow(0 0 20px ${iaColor}80)` }} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Prêt à transformer votre <span style={{ textShadow: `0 0 30px ${iaColor}70` }}>entreprise</span> ?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discutons de vos besoins en IA et découvrons ensemble comment nous pouvons vous aider
            </p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="group relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${iaColor}, ${iaColor}dd)`,
                    color: 'white',
                    padding: '1.75rem 3.5rem',
                    fontSize: '1.25rem',
                    border: '2px solid rgba(255,255,255,0.25)',
                    boxShadow: `0 12px 40px ${iaColor}50, inset 0 1px 1px rgba(255,255,255,0.25)`,
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Démarrer Votre Projet IA
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                  </span>
                  {/* Hover Glow - Reduced */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `radial-gradient(circle, ${iaColor}dd, transparent)` }}
                  />
                </Button>
              </motion.div>
            </Link>
          </div>
          
          {/* Glass Reflection */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[2rem] opacity-10"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent)' }}
          />
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
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${350 + i * 50}px`,
            height: `${350 + i * 50}px`,
            background: `radial-gradient(circle, ${color}${25 - i * 4}, transparent 70%)`,
            filter: `blur(${40 + i * 15}px)`,
            top: `${15 + i * 20}%`,
            left: `${5 + i * 25}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}