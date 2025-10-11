// src/pages/ExpertiseIA.tsx
// CONCEPT: Neural Network Experience - ENHANCED with full color palette & advanced sticky scroll

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
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
  Brain,
  Sparkles,
  TrendingUp,
  Zap,
  ChevronRight,
  Clock,
  Lock,
  Target,
  Award,
  Rocket,
  Shield,
  Gauge
} from 'lucide-react';

export default function ExpertiseIA() {
  const pillar = getPillarByCategory('ia');
  const [selectedProficiency, setSelectedProficiency] = useState<'all' | 'expert' | 'advanced' | 'intermediate'>('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  
  if (!pillar) {
    return <div>Pilier non trouvé</div>;
  }

  const iaColor = categoryColors['ia'];
  const filteredTechnologies = selectedProficiency === 'all' 
    ? pillar.technologies 
    : pillar.technologies.filter(tech => tech.proficiency === selectedProficiency);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-dainamics-background overflow-hidden">
      <Navigation />

      {/* Multi-color animated grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-200"
          style={{
            backgroundImage: `
              linear-gradient(${COLORS.primary}40 1px, transparent 1px),
              linear-gradient(90deg, ${COLORS.accent}40 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      {/* Rainbow progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ 
          scaleX: scrollYProgress,
          background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent}, ${COLORS.cta}, ${COLORS.warning})`
        }}
      />

      {/* Hero with multi-color orbs */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        {/* Multi-colored floating orbs */}
        {[
          { color: COLORS.primary, size: 'w-64 h-64', pos: 'top-1/4 right-1/4', duration: 20 },
          { color: COLORS.accent, size: 'w-96 h-96', pos: 'bottom-1/4 left-1/4', duration: 15 },
          { color: COLORS.success, size: 'w-80 h-80', pos: 'top-1/3 left-1/3', duration: 25 },
          { color: COLORS.cta, size: 'w-72 h-72', pos: 'bottom-1/3 right-1/3', duration: 18 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute ${orb.pos} ${orb.size} rounded-full blur-3xl`}
            style={{ backgroundColor: orb.color }}
          />
        ))}

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <Link 
                to="/expertise" 
                className="inline-flex items-center gap-2 text-dainamics-light/60 hover:text-dainamics-light transition-all group"
              >
                <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform" />
                <span className="text-lg">Retour à l'Expertise</span>
              </Link>
            </motion.div>

            {/* Multi-color badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mb-8"
            >
              <Badge 
                className="px-6 py-3 text-base backdrop-blur-xl border-2"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.accent}20)`,
                  borderColor: COLORS.primary,
                  color: COLORS.primary,
                  boxShadow: `0 0 30px ${COLORS.primary}30`
                }}
              >
                <Brain className="w-5 h-5 mr-2" />
                Intelligence Artificielle Générative
              </Badge>
            </motion.div>

            {/* Rainbow gradient title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent}, ${COLORS.cta})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}
            >
              {pillar.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-dainamics-light/80 mb-6 max-w-3xl mx-auto"
            >
              {pillar.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-dainamics-light/60 mb-12 max-w-2xl mx-auto"
            >
              {pillar.description}
            </motion.p>

            {/* Multi-color CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, rotateZ: 2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="text-white px-10 py-7 text-lg relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                    boxShadow: `0 20px 60px ${COLORS.primary}40`
                  }}
                >
                  <a href="#contact">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Démarrer un projet IA
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, rotateZ: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 text-lg backdrop-blur-xl border-2"
                  style={{
                    borderColor: COLORS.accent,
                    color: COLORS.accent,
                    backgroundColor: `${COLORS.accent}10`
                  }}
                >
                  <Link to="/portfolio">
                    Explorer nos projets
                    <Sparkles className="ml-3 w-6 h-6" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-dainamics-light/50">Défiler</span>
            <ChevronRight className="w-6 h-6 rotate-90" style={{ color: COLORS.accent }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics - Multi-color cards */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Projets IA', value: pillar.metrics.projectsCompleted, icon: Brain, color: COLORS.primary, suffix: '+' },
              { label: 'ROI Moyen', value: pillar.metrics.avgROI, icon: TrendingUp, color: COLORS.success, suffix: '' },
              { label: 'Satisfaction', value: pillar.metrics.clientSatisfaction, icon: Award, color: COLORS.accent, suffix: '' },
              { label: 'Expertise', value: `${pillar.metrics.yearsExperience}`, icon: Zap, color: COLORS.cta, suffix: ' ans' },
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <ColorfulMetricCard
                  key={metric.label}
                  metric={metric}
                  index={index}
                  IconComponent={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies - Colorful grid */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Technologies <span style={{ color: COLORS.primary }}>IA</span>
            </h2>
            <p className="text-xl text-dainamics-light/70 max-w-3xl mx-auto mb-12">
              {pillar.technologies.length} technologies d'IA générative maîtrisées
            </p>

            {/* Rainbow filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { level: 'all', label: 'Toutes', color: COLORS.primary },
                { level: 'expert', label: 'Expert', color: COLORS.success },
                { level: 'advanced', label: 'Advanced', color: COLORS.accent },
                { level: 'intermediate', label: 'Intermediate', color: COLORS.warning }
              ].map((filter, idx) => (
                <motion.div
                  key={filter.level}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Button
                    onClick={() => setSelectedProficiency(filter.level as any)}
                    variant={selectedProficiency === filter.level ? 'default' : 'outline'}
                    size="lg"
                    className={`px-8 transition-all duration-300 ${
                      selectedProficiency === filter.level ? 'text-white' : ''
                    }`}
                    style={selectedProficiency === filter.level ? {
                      backgroundColor: filter.color,
                      boxShadow: `0 10px 40px ${filter.color}40`
                    } : {
                      borderColor: `${filter.color}40`,
                      color: filter.color,
                      backgroundColor: `${filter.color}08`
                    }}
                  >
                    {filter.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colorful tech cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredTechnologies.map((tech, index) => (
              <ColorfulTechnologyCard
                key={tech.name}
                tech={tech}
                index={index}
                baseColor={COLORS.primary}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities - Sticky scroll effect */}
      <CapabilitiesStickySection 
        capabilities={pillar.capabilities} 
        baseColor={COLORS.primary}
      />

      {/* Use Cases - STICKY LEFT + SCROLLING RIGHT (Framer-style) */}
      <UseCasesStickySection 
        useCases={pillar.useCases}
        baseColor={COLORS.primary}
      />

      {/* Quick Wins - Colorful */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Quick Wins <span style={{ color: COLORS.primary }}>IA</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              Démarrez rapidement avec des projets IA à ROI rapide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {pillar.quickWins.map((quickWin, index) => (
              <ColorfulQuickWinCard
                key={index}
                quickWin={quickWin}
                index={index}
                colors={[COLORS.primary, COLORS.accent, COLORS.success]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Rainbow gradient */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, rotateX: 45 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl p-16 md:p-20 text-center overflow-hidden border-2"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.accent}20, ${COLORS.success}10)`,
              boxShadow: `0 30px 80px ${COLORS.primary}30`,
              borderColor: COLORS.primary
            }}
          >
            {/* Multi-color orbs */}
            {[
              { color: COLORS.primary, pos: 'top-0 right-0' },
              { color: COLORS.accent, pos: 'bottom-0 left-0' },
              { color: COLORS.success, pos: 'top-1/2 left-1/2' }
            ].map((orb, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: i * 2
                }}
                className={`absolute ${orb.pos} w-96 h-96 rounded-full blur-3xl opacity-20`}
                style={{ backgroundColor: orb.color }}
              />
            ))}

            <div className="relative z-10">
              <Brain className="w-16 h-16 mx-auto mb-8" style={{ color: COLORS.primary }} />
              
              <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-8">
                Prêt à intégrer l'IA dans votre entreprise ?
              </h2>
              
              <p className="text-xl text-dainamics-light/70 mb-12 max-w-3xl mx-auto">
                Découvrez comment l'Intelligence Artificielle peut transformer vos opérations
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="text-white px-10 py-7 text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                      boxShadow: `0 20px 60px ${COLORS.primary}40`
                    }}
                  >
                    <Link to="/contact">
                      Consultation gratuite
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="px-10 py-7 text-lg border-2"
                    style={{
                      borderColor: COLORS.accent,
                      color: COLORS.accent,
                      backgroundColor: `${COLORS.accent}10`
                    }}
                  >
                    <Link to="/portfolio">
                      Nos réalisations IA
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

// Colorful Metric Card
function ColorfulMetricCard({ metric, index, IconComponent }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: `0 20px 60px ${metric.color}50`
      }}
      className="relative p-8 rounded-2xl backdrop-blur-2xl text-center group cursor-pointer border-2"
      style={{
        backgroundColor: `${metric.color}10`,
        borderColor: `${metric.color}30`
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, ${metric.color}20, transparent)`,
        }}
      />
      
      <IconComponent 
        className="w-10 h-10 mx-auto mb-4" 
        style={{ color: metric.color }}
      />
      <p className="text-4xl font-bold text-dainamics-light mb-2">
        {metric.value}{metric.suffix}
      </p>
      <p className="text-sm text-dainamics-light/60">
        {metric.label}
      </p>
    </motion.div>
  );
}

// Colorful Technology Card
function ColorfulTechnologyCard({ tech, index, baseColor }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = iconMapper[tech.icon];
  
  // Assign different colors based on proficiency
  const proficiencyColors = {
    expert: COLORS.success,
    advanced: COLORS.accent,
    intermediate: COLORS.warning
  };
  const cardColor = proficiencyColors[tech.proficiency as keyof typeof proficiencyColors] || baseColor;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        boxShadow: `0 20px 60px ${cardColor}40`
      }}
      className="group relative p-6 rounded-2xl backdrop-blur-xl cursor-pointer border-2"
      style={{
        backgroundColor: `${cardColor}08`,
        borderColor: `${cardColor}30`
      }}
    >
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{ 
          backgroundColor: `${cardColor}20`,
          boxShadow: `0 0 20px ${cardColor}30`
        }}
      >
        {IconComponent && (
          <IconComponent 
            className="w-7 h-7" 
            style={{ color: cardColor }}
          />
        )}
      </div>

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-dainamics-light">
          {tech.name}
        </h3>
        <Badge 
          variant="outline"
          style={{
            borderColor: `${cardColor}50`,
            color: cardColor,
            backgroundColor: `${cardColor}15`
          }}
        >
          {tech.proficiency}
        </Badge>
      </div>

      <p className="text-sm text-dainamics-light/70">
        {tech.description}
      </p>

      {tech.usedIn.length > 0 && (
        <div className="mt-4 flex items-center gap-2 text-xs">
          <Sparkles className="w-3 h-3" style={{ color: cardColor }} />
          <span style={{ color: cardColor }}>
            {tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// Capabilities Sticky Section
function CapabilitiesStickySection({ capabilities, baseColor }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative py-32 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="sticky top-32 mb-20 z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6 text-center">
            Nos Capacités <span style={{ color: baseColor }}>IA</span>
          </h2>
          <p className="text-xl text-dainamics-light/70 text-center">
            {capabilities.length} services d'IA pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="space-y-12">
          {capabilities.map((capability: any, index: number) => (
            <ColorfulCapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
              colors={[COLORS.primary, COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Colorful Capability Card
function ColorfulCapabilityCard({ capability, index, colors }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  
  const IconComponent = iconMapper[capability.icon];
  const complexityColor = complexityColors[capability.complexity];
  const cardColor = colors[index % colors.length];
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative"
    >
      <div 
        className="p-10 rounded-3xl backdrop-blur-2xl border-2"
        style={{
          backgroundColor: `${cardColor}08`,
          borderColor: `${cardColor}30`,
          boxShadow: `0 20px 60px ${cardColor}20`
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ 
              background: `linear-gradient(135deg, ${cardColor}20, ${complexityColor}20)`,
              boxShadow: `0 10px 30px ${cardColor}30`
            }}
          >
            {IconComponent && (
              <IconComponent 
                className="w-10 h-10" 
                style={{ color: cardColor }}
              />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-dainamics-light">
                {capability.name}
              </h3>
              <Badge 
                variant="outline"
                className="border-2"
                style={{
                  borderColor: complexityColor,
                  color: complexityColor,
                  backgroundColor: `${complexityColor}15`
                }}
              >
                {capability.complexity}
              </Badge>
            </div>

            <p className="text-dainamics-light/70 mb-6 text-lg">
              {capability.description}
            </p>

            <div className="flex items-center gap-3 text-dainamics-light/60 mb-6">
              <Clock className="w-5 h-5" style={{ color: cardColor }} />
              <span className="text-base">Délai : {capability.timeline}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {capability.deliverables.slice(0, 3).map((deliverable: string, i: number) => (
                <div 
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: `${cardColor}10`,
                    borderColor: `${cardColor}20`
                  }}
                >
                  <Zap 
                    className="w-4 h-4 mt-0.5 flex-shrink-0" 
                    style={{ color: cardColor }}
                  />
                  <span className="text-sm text-dainamics-light/80">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Use Cases Sticky Section - STICKY LEFT + SCROLLING RIGHT (Framer-style)
function UseCasesStickySection({ useCases, baseColor }: any) {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-dainamics-light/5 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT SIDE - STICKY */}
          <motion.div 
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light">
                Cas d'Usage <span style={{ color: baseColor }}>Concrets</span>
              </h2>
              <p className="text-xl text-dainamics-light/70">
                {useCases.length} exemples de transformation par l'IA avec ROI prouvé
              </p>
              
              {/* Stats colorées */}
              <div className="space-y-4 mt-8">
                {[
                  { label: 'ROI Moyen', value: '300%', color: COLORS.success, icon: TrendingUp },
                  { label: 'Délai Moyen', value: '6 mois', color: COLORS.warning, icon: Clock },
                  { label: 'Satisfaction', value: '98%', color: COLORS.primary, icon: Award }
                ].map((stat, i) => {
                  const IconComp = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl border-2"
                      style={{
                        backgroundColor: `${stat.color}10`,
                        borderColor: `${stat.color}30`
                      }}
                    >
                      <IconComp className="w-8 h-8" style={{ color: stat.color }} />
                      <div>
                        <p className="text-sm text-dainamics-light/60">{stat.label}</p>
                        <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - SCROLLING */}
          <div className="lg:col-span-8 space-y-8">
            {useCases.map((useCase: any, index: number) => (
              <ColorfulUseCaseCard
                key={useCase.id}
                useCase={useCase}
                index={index}
                colors={[COLORS.primary, COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Colorful Use Case Card
function ColorfulUseCaseCard({ useCase, index, colors }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardColor = colors[index % colors.length];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 30px 80px ${cardColor}40`
      }}
      className="p-8 rounded-3xl backdrop-blur-xl border-2"
      style={{
        backgroundColor: `${cardColor}08`,
        borderColor: `${cardColor}30`
      }}
    >
      <Badge 
        variant="outline" 
        className="mb-4 border-2"
        style={{
          borderColor: cardColor,
          color: cardColor,
          backgroundColor: `${cardColor}15`
        }}
      >
        {useCase.industry}
      </Badge>

      <h3 className="text-2xl font-bold text-dainamics-light mb-4">
        {useCase.title}
      </h3>

      <p className="text-dainamics-light/70 mb-6">
        {useCase.description}
      </p>

      <div 
        className="p-4 rounded-xl mb-4 border"
        style={{ 
          backgroundColor: `${cardColor}10`,
          borderColor: `${cardColor}20`
        }}
      >
        <p className="text-xs text-dainamics-light/50 mb-3 uppercase">ROI Détaillé</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-dainamics-light/70 mb-1">Délai</p>
            <p className="text-lg font-bold text-dainamics-light">{useCase.roi.timeframe}</p>
          </div>
          <div>
            <p className="text-sm text-dainamics-light/70 mb-1">Économies</p>
            <p className="text-lg font-bold" style={{ color: COLORS.success }}>{useCase.roi.savings}</p>
          </div>
          <div>
            <p className="text-sm text-dainamics-light/70 mb-1">Efficacité</p>
            <p className="text-lg font-bold" style={{ color: cardColor }}>{useCase.roi.efficiency}</p>
          </div>
        </div>
      </div>

      {useCase.relatedProjectId && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full border-2"
          style={{
            borderColor: cardColor,
            color: cardColor,
            backgroundColor: `${cardColor}10`
          }}
        >
          <Link to={`/portfolio#${useCase.relatedProjectId}`}>
            Voir le projet complet
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      )}
    </motion.div>
  );
}

// Colorful Quick Win Card
function ColorfulQuickWinCard({ quickWin, index, colors }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardColor = colors[index % colors.length];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateZ: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ 
        y: -10, 
        rotateZ: 2,
        boxShadow: `0 30px 80px ${cardColor}40`
      }}
      className="p-10 rounded-3xl backdrop-blur-2xl cursor-pointer border-2"
      style={{
        backgroundColor: `${cardColor}08`,
        borderColor: `${cardColor}30`
      }}
    >
      <Zap 
        className="w-12 h-12 mb-6" 
        style={{ color: cardColor }}
      />

      <h3 className="text-2xl font-bold text-dainamics-light mb-6">
        {quickWin.title}
      </h3>

      <div className="space-y-4 mb-8">
        {[
          { icon: Clock, label: 'Délai', value: quickWin.timeframe, color: COLORS.accent },
          { icon: Lock, label: 'Investment', value: quickWin.investment, color: COLORS.warning },
          { icon: TrendingUp, label: 'Retours', value: quickWin.returns, color: COLORS.success }
        ].map((item, i) => {
          const IconComp = item.icon;
          return (
            <div key={i} className="flex items-center gap-3">
              <IconComp className="w-5 h-5" style={{ color: item.color }} />
              <span className="text-dainamics-light/70">
                <strong style={{ color: item.color }}>{item.label} :</strong> {item.value}
              </span>
            </div>
          );
        })}
      </div>

      <Button
        asChild
        size="lg"
        className="w-full text-white"
        style={{ 
          background: `linear-gradient(135deg, ${cardColor}, ${colors[(index + 1) % colors.length]})`,
          boxShadow: `0 10px 30px ${cardColor}40`
        }}
      >
        <a href="#contact">
          Démarrer ce projet
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
    </motion.div>
  );
}
