// src/pages/ExpertiseAutomatisation.tsx
// CONCEPT: Workflow Symphony - Flow-based design, carousel, morphing cards, connected nodes

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
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Clock,
  Target,
  Workflow,
  GitBranch,
  Network,
  RefreshCw
} from 'lucide-react';

export default function ExpertiseAutomatisation() {
  const pillar = getPillarByCategory('automatisation');
  const [selectedProficiency, setSelectedProficiency] = useState<'all' | 'expert' | 'advanced' | 'intermediate'>('all');
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  if (!pillar) {
    return <div>Pilier non trouvé</div>;
  }

  const automationColor = categoryColors['automatisation'];
  const filteredTechnologies = selectedProficiency === 'all' 
    ? pillar.technologies 
    : pillar.technologies.filter(tech => tech.proficiency === selectedProficiency);

  return (
    <div ref={containerRef} className="min-h-screen bg-dainamics-background relative">
      <Navigation />

      {/* Sticky Sidebar Progress - unique à cette page */}
      <StickyProgressSidebar scrollProgress={scrollYProgress} color={automationColor} />

      {/* Hero Section - Workflow Nodes animés */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Animated Workflow Background */}
        <WorkflowNodesBackground color={automationColor} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <Link 
                to="/expertise" 
                className="inline-flex items-center gap-3 text-dainamics-light/60 hover:text-dainamics-light transition-all group text-lg"
              >
                <ChevronRight className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
                Retour à l'Expertise
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <Badge 
                    className="px-5 py-3 text-lg"
                    style={{
                      backgroundColor: `${automationColor}20`,
                      borderColor: `${automationColor}50`,
                      color: automationColor,
                      boxShadow: `0 0 40px ${automationColor}30`
                    }}
                  >
                    <Workflow className="w-5 h-5 mr-2" />
                    Automatisation & Optimisation
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                  style={{ 
                    color: automationColor,
                    textShadow: `0 0 40px ${automationColor}40`
                  }}
                >
                  {pillar.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl text-dainamics-light/80 mb-4"
                >
                  {pillar.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg text-dainamics-light/60 mb-8 leading-relaxed"
                >
                  {pillar.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="text-white px-8 py-6 text-lg group"
                    style={{
                      backgroundColor: automationColor,
                      boxShadow: `0 10px 40px ${automationColor}40`
                    }}
                  >
                    <a href="#contact">
                      <RefreshCw className="mr-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                      Automatiser maintenant
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg"
                    style={{
                      borderColor: `${automationColor}50`,
                      color: automationColor,
                      backgroundColor: `${automationColor}10`
                    }}
                  >
                    <Link to="/portfolio">
                      Nos automatisations
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: Animated Flow Diagram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <FlowDiagram color={automationColor} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section - Cards flottantes */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Workflows Créés', value: pillar.metrics.projectsCompleted, icon: Workflow, suffix: '+' },
              { label: 'ROI Moyen', value: pillar.metrics.avgROI, icon: TrendingUp, suffix: '' },
              { label: 'Clients Satisfaits', value: pillar.metrics.clientSatisfaction, icon: CheckCircle, suffix: '' },
              { label: 'Expérience', value: `${pillar.metrics.yearsExperience}`, icon: Zap, suffix: ' ans' },
            ].map((metric, index) => (
              <FloatingMetricCard
                key={metric.label}
                metric={metric}
                index={index}
                color={automationColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - 3D Carousel rotatif */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Stack <span style={{ color: automationColor }}>Automatisation</span>
            </h2>
            <p className="text-xl text-dainamics-light/70 max-w-3xl mx-auto mb-12">
              {pillar.technologies.length} technologies pour automatiser vos processus
            </p>

            {/* Filtres morphing */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['all', 'expert', 'advanced', 'intermediate'].map((level, idx) => (
                <motion.div
                  key={level}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setSelectedProficiency(level as any)}
                    variant={selectedProficiency === level ? 'default' : 'outline'}
                    size="lg"
                    className={`px-8 transition-all duration-300 ${
                      selectedProficiency === level 
                        ? 'text-white' 
                        : 'backdrop-blur-xl'
                    }`}
                    style={selectedProficiency === level ? {
                      backgroundColor: automationColor,
                      boxShadow: `0 10px 40px ${automationColor}50`
                    } : {
                      borderColor: `${automationColor}40`,
                      color: automationColor,
                      backgroundColor: `${automationColor}08`
                    }}
                  >
                    {level === 'all' ? 'Toutes' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Carousel 3D - UNIQUE à cette page */}
          <TechnologyCarousel3D 
            technologies={filteredTechnologies} 
            color={automationColor}
            activeIndex={activeCarouselIndex}
            setActiveIndex={setActiveCarouselIndex}
          />
        </div>
      </section>

      {/* Capabilities Section - Morphing Cards */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Services <span style={{ color: automationColor }}>d'Automatisation</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              {pillar.capabilities.length} solutions pour optimiser vos opérations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillar.capabilities.map((capability, index) => (
              <MorphingCapabilityCard
                key={capability.id}
                capability={capability}
                index={index}
                color={automationColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Horizontal Scroll */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-dainamics-light/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Cas d'Usage <span style={{ color: automationColor }}>Réels</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              {pillar.useCases.length} exemples d'automatisation avec ROI prouvé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillar.useCases.map((useCase, index) => (
              <UseCaseRevealCard
                key={useCase.id}
                useCase={useCase}
                index={index}
                color={automationColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins - Stacked Cards avec décalage */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Quick Wins <span style={{ color: automationColor }}>Automatisation</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              Commencez rapidement avec des gains immédiats
            </p>
          </motion.div>

          <div className="space-y-8">
            {pillar.quickWins.map((quickWin, index) => (
              <StackedQuickWinCard
                key={index}
                quickWin={quickWin}
                index={index}
                color={automationColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Morphing Shape */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-16 md:p-20 text-center overflow-hidden"
            style={{
              background: `radial-gradient(circle at center, ${automationColor}20, ${automationColor}05)`,
              border: `2px solid ${automationColor}30`,
              boxShadow: `0 20px 80px ${automationColor}30`
            }}
          >
            {/* Morphing shape animé */}
            <motion.div
              animate={{
                borderRadius: ["30%", "50%", "40%", "30%"],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"
              style={{ backgroundColor: automationColor }}
            />

            <div className="relative z-10">
              <Workflow className="w-20 h-20 mx-auto mb-8" style={{ color: automationColor }} />
              
              <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-8">
                Prêt à automatiser vos processus ?
              </h2>
              
              <p className="text-xl text-dainamics-light/70 mb-12 max-w-3xl mx-auto">
                Libérez le potentiel de votre équipe en automatisant les tâches répétitives.
                Concentrez-vous sur ce qui compte vraiment.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="text-white px-10 py-7 text-lg"
                    style={{
                      backgroundColor: automationColor,
                      boxShadow: `0 20px 60px ${automationColor}50`
                    }}
                  >
                    <Link to="/contact">
                      Audit gratuit
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="px-10 py-7 text-lg"
                    style={{
                      borderColor: `${automationColor}50`,
                      color: automationColor,
                      backgroundColor: `${automationColor}10`
                    }}
                  >
                    <Link to="/portfolio">
                      Voir nos automatisations
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

// Sticky Progress Sidebar - UNIQUE à cette page
function StickyProgressSidebar({ scrollProgress, color }: any) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {['Hero', 'Metrics', 'Tech', 'Services', 'Cas', 'Wins', 'CTA'].map((label, index) => {
          const progress = scrollProgress.get();
          const sectionProgress = index / 6;
          const isActive = progress >= sectionProgress && progress < sectionProgress + 1/6;
          
          return (
            <motion.div
              key={label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className={`text-xs text-dainamics-light/50 transition-opacity ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                {label}
              </span>
              <div
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: isActive ? color : `${color}30`,
                  boxShadow: isActive ? `0 0 10px ${color}` : 'none',
                  scale: isActive ? 1.5 : 1
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Workflow Nodes Background
function WorkflowNodesBackground({ color }: any) {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-16 h-16 rounded-lg"
            style={{
              backgroundColor: `${color}20`,
              border: `2px solid ${color}40`,
              boxShadow: `0 0 20px ${color}30`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Flow Diagram animé
function FlowDiagram({ color }: any) {
  return (
    <div className="relative w-full h-96">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Connections animées */}
        <motion.path
          d="M 100 100 Q 200 150, 300 100"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          opacity={0.5}
        />
        <motion.path
          d="M 300 100 Q 300 200, 300 300"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          opacity={0.5}
        />
        <motion.path
          d="M 100 300 Q 200 250, 300 300"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
          opacity={0.5}
        />
        
        {/* Nodes */}
        {[
          { x: 100, y: 100, icon: '📥' },
          { x: 300, y: 100, icon: '⚙️' },
          { x: 300, y: 300, icon: '📤' },
          { x: 100, y: 300, icon: '✅' },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="30"
              fill={`${color}20`}
              stroke={color}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="24"
            >
              {node.icon}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// Floating Metric Card
function FloatingMetricCard({ metric, index, color }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = metric.icon;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.15,
          type: "spring",
          stiffness: 100
        }
      } : {}}
      whileHover={{ 
        y: -10,
        boxShadow: `0 20px 60px ${color}40`
      }}
      className="p-8 rounded-2xl text-center backdrop-blur-xl cursor-pointer"
      style={{
        backgroundColor: `${color}10`,
        border: `1px solid ${color}30`,
        boxShadow: `0 10px 40px ${color}20`
      }}
    >
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

// 3D Carousel de technologies - UNIQUE
function TechnologyCarousel3D({ technologies, color, activeIndex, setActiveIndex }: any) {
  return (
    <div className="relative h-96 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        {technologies.map((tech: any, index: number) => {
          const offset = index - activeIndex;
          const IconComponent = iconMapper[tech.icon];
          
          return (
            <motion.div
              key={tech.name}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                x: `${offset * 40 - 50}%`,
                scale: offset === 0 ? 1.2 : 0.8,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                z: offset === 0 ? 100 : 0,
                rotateY: offset * 30,
              }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveIndex(index)}
            >
              <div 
                className="p-8 rounded-2xl backdrop-blur-xl w-64"
                style={{
                  backgroundColor: offset === 0 ? `${color}15` : `${color}08`,
                  border: `2px solid ${offset === 0 ? color : `${color}30`}`,
                  boxShadow: offset === 0 ? `0 20px 60px ${color}40` : `0 10px 30px ${color}20`
                }}
              >
                {IconComponent && (
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color }}
                    />
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-dainamics-light text-center mb-2">
                  {tech.name}
                </h3>
                
                {offset === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-dainamics-light/70 text-center"
                  >
                    {tech.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          variant="outline"
          style={{
            borderColor: `${color}40`,
            color
          }}
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </Button>
        <Button
          onClick={() => setActiveIndex(Math.min(technologies.length - 1, activeIndex + 1))}
          disabled={activeIndex === technologies.length - 1}
          variant="outline"
          style={{
            borderColor: `${color}40`,
            color
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

// Morphing Capability Card
function MorphingCapabilityCard({ capability, index, color }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = iconMapper[capability.icon];
  const complexityColor = complexityColors[capability.complexity];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, 2, -2, 0],
        transition: { duration: 0.3 }
      }}
      className="p-8 rounded-3xl backdrop-blur-xl cursor-pointer"
      style={{
        backgroundColor: `${color}08`,
        border: `2px solid ${color}20`,
        boxShadow: `0 10px 40px ${color}20`
      }}
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{ 
          backgroundColor: `${color}15`,
          boxShadow: `0 0 30px ${color}30`
        }}
      >
        {IconComponent && (
          <IconComponent 
            className="w-8 h-8" 
            style={{ color }}
          />
        )}
      </div>

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-dainamics-light">
          {capability.name}
        </h3>
        <Badge 
          variant="outline"
          style={{
            borderColor: `${complexityColor}40`,
            color: complexityColor,
            backgroundColor: `${complexityColor}10`
          }}
        >
          {capability.complexity}
        </Badge>
      </div>

      <p className="text-dainamics-light/70 mb-4 text-sm">
        {capability.description}
      </p>

      <div className="flex items-center gap-2 text-sm text-dainamics-light/60 mb-4">
        <Clock className="w-4 h-4" />
        <span>{capability.timeline}</span>
      </div>

      <div className="space-y-2">
        {capability.deliverables.slice(0, 2).map((deliverable: string, i: number) => (
          <div 
            key={i}
            className="flex items-start gap-2 p-2 rounded-lg"
            style={{ backgroundColor: `${color}10` }}
          >
            <CheckCircle 
              className="w-4 h-4 mt-0.5 flex-shrink-0" 
              style={{ color }}
            />
            <span className="text-xs text-dainamics-light/80">{deliverable}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Use Case Reveal Card
function UseCaseRevealCard({ useCase, index, color }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 45 }}
      animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="p-8 rounded-3xl backdrop-blur-xl"
      style={{
        backgroundColor: `${color}08`,
        border: `1px solid ${color}30`,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
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

      <p className="text-dainamics-light/70 mb-6 text-sm">
        {useCase.description}
      </p>

      <div 
        className="p-4 rounded-xl mb-4"
        style={{ backgroundColor: `${color}10` }}
      >
        <p className="text-xs text-dainamics-light/50 mb-2 uppercase">ROI</p>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs text-dainamics-light/70">Délai</p>
            <p className="text-sm font-bold text-dainamics-light">{useCase.roi.timeframe}</p>
          </div>
          <div>
            <p className="text-xs text-dainamics-light/70">Économies</p>
            <p className="text-sm font-bold" style={{ color }}>{useCase.roi.savings}</p>
          </div>
          <div>
            <p className="text-xs text-dainamics-light/70">Efficacité</p>
            <p className="text-sm font-bold text-dainamics-light">{useCase.roi.efficiency}</p>
          </div>
        </div>
      </div>

      {useCase.relatedProjectId && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full"
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
  );
}

// Stacked Quick Win Card - avec décalage
function StackedQuickWinCard({ quickWin, index, color }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      whileHover={{ x: 20 }}
      className="p-10 rounded-3xl backdrop-blur-xl"
      style={{
        backgroundColor: `${color}10`,
        border: `2px solid ${color}30`,
        boxShadow: `0 10px 40px ${color}20`,
        marginLeft: `${index * 20}px`
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <Zap className="w-10 h-10 mb-4" style={{ color }} />
          
          <h3 className="text-2xl font-bold text-dainamics-light mb-4">
            {quickWin.title}
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-dainamics-light/50" />
              <span className="text-dainamics-light/70">
                <strong>Délai :</strong> {quickWin.timeframe}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-dainamics-light/50" />
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
        </div>

        <Button
          asChild
          size="lg"
          className="text-white self-end md:self-center"
          style={{ 
            backgroundColor: color,
            boxShadow: `0 10px 30px ${color}40`
          }}
        >
          <a href="#contact">
            Démarrer
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
