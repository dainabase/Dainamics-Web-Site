// src/pages/ExpertiseIA.tsx
// CONCEPT: Neural Network Experience - High-tech, futuristic, 3D depth effects

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
  Target
} from 'lucide-react';

export default function ExpertiseIA() {
  const pillar = getPillarByCategory('ia');
  const [selectedProficiency, setSelectedProficiency] = useState<'all' | 'expert' | 'advanced' | 'intermediate'>('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  
  if (!pillar) {
    return <div>Pilier non trouvé</div>;
  }

  const iaColor = categoryColors['ia'];
  const filteredTechnologies = selectedProficiency === 'all' 
    ? pillar.technologies 
    : pillar.technologies.filter(tech => tech.proficiency === selectedProficiency);

  // Mouse parallax effect
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

      {/* Animated Background Grid - suivit la souris */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(${iaColor}20 1px, transparent 1px),
              linear-gradient(90deg, ${iaColor}20 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      {/* Floating Progress Bar - sticky */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ 
          scaleX: scrollYProgress,
          backgroundColor: iaColor,
          boxShadow: `0 0 20px ${iaColor}80`
        }}
      />

      {/* Hero Section - Neural Network Style */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        {/* 3D Floating Orbs animés */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: iaColor }}
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: COLORS.accent }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Back Link animé */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
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

            {/* Badge avec glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative mb-8"
            >
              <Badge 
                className="px-6 py-3 text-base backdrop-blur-xl"
                style={{
                  backgroundColor: `${iaColor}15`,
                  borderColor: `${iaColor}40`,
                  color: iaColor,
                  boxShadow: `0 0 30px ${iaColor}30`
                }}
              >
                <Brain className="w-5 h-5 mr-2" />
                Intelligence Artificielle Générative
              </Badge>
            </motion.div>

            {/* Title avec gradient animé */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
              style={{
                background: `linear-gradient(135deg, ${iaColor}, ${COLORS.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
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
              className="text-lg text-dainamics-light/60 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {pillar.description}
            </motion.p>

            {/* CTAs avec effets 3D */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05, rotateZ: 2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="text-white px-10 py-7 text-lg relative overflow-hidden group"
                  style={{
                    backgroundColor: iaColor,
                    boxShadow: `0 20px 60px ${iaColor}40`
                  }}
                >
                  <a href="#contact" className="relative z-10">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
                  className="px-10 py-7 text-lg backdrop-blur-xl"
                  style={{
                    borderColor: `${iaColor}60`,
                    color: iaColor,
                    backgroundColor: `${iaColor}10`
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-dainamics-light/50">Défiler</span>
            <ChevronRight className="w-6 h-6 rotate-90" style={{ color: iaColor }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics Section - Glassmorphism 3D Cards */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Projets IA', value: pillar.metrics.projectsCompleted, icon: Brain, suffix: '+' },
              { label: 'ROI Moyen', value: pillar.metrics.avgROI, icon: TrendingUp, suffix: '' },
              { label: 'Satisfaction', value: pillar.metrics.clientSatisfaction, icon: Sparkles, suffix: '' },
              { label: 'Expertise', value: `${pillar.metrics.yearsExperience}`, icon: Zap, suffix: ' ans' },
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <MetricCard
                  key={metric.label}
                  metric={metric}
                  index={index}
                  color={iaColor}
                  IconComponent={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section - 3D Interactive Grid */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Technologies <span style={{ color: iaColor }}>IA</span>
            </h2>
            <p className="text-xl text-dainamics-light/70 max-w-3xl mx-auto mb-12">
              {pillar.technologies.length} technologies d'IA générative maîtrisées
            </p>

            {/* Animated Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'expert', 'advanced', 'intermediate'].map((level, idx) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Button
                    onClick={() => setSelectedProficiency(level as any)}
                    variant={selectedProficiency === level ? 'default' : 'outline'}
                    size="lg"
                    className={`px-8 transition-all duration-300 ${
                      selectedProficiency === level 
                        ? 'text-white shadow-2xl' 
                        : 'backdrop-blur-xl'
                    }`}
                    style={selectedProficiency === level ? {
                      backgroundColor: iaColor,
                      boxShadow: `0 10px 40px ${iaColor}40`
                    } : {
                      borderColor: `${iaColor}30`,
                      color: iaColor,
                      backgroundColor: `${iaColor}05`
                    }}
                  >
                    {level === 'all' ? 'Toutes' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredTechnologies.map((tech, index) => (
              <TechnologyCard3D
                key={tech.name}
                tech={tech}
                index={index}
                color={iaColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section - Parallax Scroll */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Nos Capacités <span style={{ color: iaColor }}>IA</span>
            </h2>
            <p className="text-xl text-dainamics-light/70 max-w-3xl mx-auto">
              {pillar.capabilities.length} services d'IA pour transformer votre entreprise
            </p>
          </motion.div>

          <div className="space-y-12">
            {pillar.capabilities.map((capability, index) => (
              <CapabilityParallaxCard
                key={capability.id}
                capability={capability}
                index={index}
                color={iaColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Vertical Timeline */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-dainamics-light/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Cas d'Usage <span style={{ color: iaColor }}>Concrets</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              {pillar.useCases.length} exemples de transformation par l'IA
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block"
              style={{
                background: `linear-gradient(to bottom, transparent, ${iaColor}40, transparent)`
              }}
            />

            <div className="space-y-24">
              {pillar.useCases.map((useCase, index) => (
                <UseCaseTimelineItem
                  key={useCase.id}
                  useCase={useCase}
                  index={index}
                  color={iaColor}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins - Floating 3D Cards */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Quick Wins <span style={{ color: iaColor }}>IA</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              Démarrez rapidement avec des projets IA à ROI rapide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {pillar.quickWins.map((quickWin, index) => (
              <QuickWinFloatingCard
                key={index}
                quickWin={quickWin}
                index={index}
                color={iaColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 3D Transform */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, rotateX: 45 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative rounded-3xl p-16 md:p-20 text-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${iaColor}20, ${COLORS.accent}20)`,
              boxShadow: `0 30px 80px ${iaColor}30`,
              border: `1px solid ${iaColor}30`
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: iaColor }}
            />

            <div className="relative z-10">
              <Brain className="w-16 h-16 mx-auto mb-8" style={{ color: iaColor }} />
              
              <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-8">
                Prêt à intégrer l'IA dans votre entreprise ?
              </h2>
              
              <p className="text-xl text-dainamics-light/70 mb-12 max-w-3xl mx-auto">
                Découvrez comment l'Intelligence Artificielle peut transformer vos opérations
                et créer de nouvelles opportunités de croissance
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="text-white px-10 py-7 text-lg"
                    style={{
                      backgroundColor: iaColor,
                      boxShadow: `0 20px 60px ${iaColor}40`
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
                    className="px-10 py-7 text-lg backdrop-blur-xl"
                    style={{
                      borderColor: `${iaColor}60`,
                      color: iaColor,
                      backgroundColor: `${iaColor}10`
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
    </div>
  );
}

// Metric Card Component avec effet 3D
function MetricCard({ metric, index, color, IconComponent }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="relative p-8 rounded-2xl backdrop-blur-2xl text-center group cursor-pointer"
      style={{
        backgroundColor: `${color}10`,
        border: `1px solid ${color}20`,
        boxShadow: `0 10px 40px ${color}20`
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, ${color}20, transparent)`,
        }}
      />
      
      <IconComponent 
        className="w-10 h-10 mx-auto mb-4" 
        style={{ color }}
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

// 3D Technology Card
function TechnologyCard3D({ tech, index, color }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = iconMapper[tech.icon];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.6, type: "spring" }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        z: 50
      }}
      className="group relative p-6 rounded-2xl backdrop-blur-xl cursor-pointer"
      style={{
        backgroundColor: `${color}08`,
        border: `1px solid ${color}20`,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${color}30, transparent)`,
        }}
      />

      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          style={{ 
            backgroundColor: `${color}15`,
            boxShadow: `0 0 20px ${color}20`
          }}
        >
          {IconComponent && (
            <IconComponent 
              className="w-7 h-7" 
              style={{ color }}
            />
          )}
        </div>

        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-dainamics-light group-hover:text-white transition-colors">
            {tech.name}
          </h3>
          <Badge 
            variant="outline" 
            className="text-xs"
            style={{
              borderColor: `${color}40`,
              color,
              backgroundColor: `${color}10`
            }}
          >
            {tech.proficiency}
          </Badge>
        </div>

        <p className="text-sm text-dainamics-light/70 leading-relaxed">
          {tech.description}
        </p>

        {tech.usedIn.length > 0 && (
          <div className="mt-4 flex items-center gap-2 text-xs text-dainamics-light/50">
            <Sparkles className="w-3 h-3" />
            <span>{tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Parallax Capability Card
function CapabilityParallaxCard({ capability, index, color }: any) {
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
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative"
    >
      <div 
        className="p-10 rounded-3xl backdrop-blur-2xl border"
        style={{
          backgroundColor: `${color}08`,
          borderColor: `${color}20`,
          boxShadow: `0 20px 60px ${color}20`
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ 
              backgroundColor: `${color}15`,
              boxShadow: `0 10px 30px ${color}30`
            }}
          >
            {IconComponent && (
              <IconComponent 
                className="w-10 h-10" 
                style={{ color }}
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
                className="text-xs"
                style={{
                  borderColor: `${complexityColor}40`,
                  color: complexityColor,
                  backgroundColor: `${complexityColor}10`
                }}
              >
                {capability.complexity}
              </Badge>
            </div>

            <p className="text-dainamics-light/70 mb-6 leading-relaxed text-lg">
              {capability.description}
            </p>

            <div className="flex items-center gap-3 text-sm text-dainamics-light/60 mb-6">
              <Clock className="w-5 h-5" />
              <span className="text-base">Délai : {capability.timeline}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {capability.deliverables.slice(0, 3).map((deliverable: string, i: number) => (
                <div 
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-lg"
                  style={{ backgroundColor: `${color}10` }}
                >
                  <Zap 
                    className="w-4 h-4 mt-0.5 flex-shrink-0" 
                    style={{ color }}
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

// Timeline Use Case Item
function UseCaseTimelineItem({ useCase, index, color, isLeft }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, type: "spring" }}
      className={`relative flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
    >
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-3xl backdrop-blur-xl"
          style={{
            backgroundColor: `${color}08`,
            border: `1px solid ${color}30`,
            boxShadow: `0 20px 60px ${color}20`
          }}
        >
          <Badge 
            variant="outline" 
            className="mb-4"
            style={{
              borderColor: `${color}40`,
              color,
              backgroundColor: `${color}10`
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

          <div className="space-y-4">
            <div 
              className="p-4 rounded-xl"
              style={{ backgroundColor: `${color}10` }}
            >
              <p className="text-xs text-dainamics-light/50 mb-2 uppercase">ROI</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-dainamics-light/70">Délai</p>
                  <p className="text-lg font-bold text-dainamics-light">{useCase.roi.timeframe}</p>
                </div>
                <div>
                  <p className="text-sm text-dainamics-light/70">Économies</p>
                  <p className="text-lg font-bold" style={{ color }}>{useCase.roi.savings}</p>
                </div>
                <div>
                  <p className="text-sm text-dainamics-light/70">Efficacité</p>
                  <p className="text-lg font-bold text-dainamics-light">{useCase.roi.efficiency}</p>
                </div>
              </div>
            </div>
          </div>

          {useCase.relatedProjectId && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full mt-4"
              style={{
                borderColor: `${color}40`,
                color
              }}
            >
              <Link to={`/portfolio#${useCase.relatedProjectId}`}>
                Voir le projet
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          )}
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="w-6 h-6 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 30px ${color}60`
          }}
        />
      </div>
    </motion.div>
  );
}

// Floating Quick Win Card
function QuickWinFloatingCard({ quickWin, index, color }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateZ: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      whileHover={{ 
        y: -10, 
        rotateZ: 2,
        boxShadow: `0 30px 80px ${color}40`
      }}
      className="p-10 rounded-3xl backdrop-blur-2xl cursor-pointer"
      style={{
        backgroundColor: `${color}08`,
        border: `1px solid ${color}30`,
        boxShadow: `0 20px 60px ${color}20`
      }}
    >
      <Zap 
        className="w-12 h-12 mb-6" 
        style={{ color }}
      />

      <h3 className="text-2xl font-bold text-dainamics-light mb-6">
        {quickWin.title}
      </h3>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-dainamics-light/50" />
          <span className="text-dainamics-light/70">
            <strong>Délai :</strong> {quickWin.timeframe}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="w-5 h-5 text-dainamics-light/50" />
          <span className="text-dainamics-light/70">
            <strong>Investment :</strong> {quickWin.investment}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <TrendingUp 
            className="w-5 h-5" 
            style={{ color }}
          />
          <span 
            className="font-semibold text-lg"
            style={{ color }}
          >
            {quickWin.returns}
          </span>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="w-full text-white"
        style={{ 
          backgroundColor: color,
          boxShadow: `0 10px 30px ${color}40`
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
