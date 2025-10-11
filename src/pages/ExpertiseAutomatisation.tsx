// src/pages/ExpertiseAutomatisation.tsx
// CONCEPT: Workflow Symphony - ENHANCED with full color palette & advanced sticky effects

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
  RefreshCw,
  Gauge,
  Award,
  Rocket
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

      {/* Rainbow sidebar progress */}
      <RainbowSidebarProgress scrollProgress={scrollYProgress} />

      {/* Multi-color progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ 
          scaleX: scrollYProgress,
          background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.success}, ${COLORS.warning}, ${COLORS.cta})`
        }}
      />

      {/* Hero with colorful workflow */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
        <ColorfulWorkflowBackground />

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <Badge 
                    className="px-5 py-3 text-lg border-2"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.success}20)`,
                      borderColor: COLORS.accent,
                      color: COLORS.accent,
                      boxShadow: `0 0 40px ${COLORS.accent}30`
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
                    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.success}, ${COLORS.warning})`,
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
                  className="text-2xl text-dainamics-light/80 mb-4"
                >
                  {pillar.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg text-dainamics-light/60 mb-8"
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
                      background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.success})`,
                      boxShadow: `0 10px 40px ${COLORS.accent}40`
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
                    className="px-8 py-6 text-lg border-2"
                    style={{
                      borderColor: COLORS.accent,
                      color: COLORS.accent,
                      backgroundColor: `${COLORS.accent}10`
                    }}
                  >
                    <Link to="/portfolio">
                      Nos automatisations
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ColorfulFlowDiagram />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics - Rainbow cards */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Workflows', value: pillar.metrics.projectsCompleted, icon: Workflow, color: COLORS.accent, suffix: '+' },
              { label: 'ROI Moyen', value: pillar.metrics.avgROI, icon: TrendingUp, color: COLORS.success, suffix: '' },
              { label: 'Satisfaction', value: pillar.metrics.clientSatisfaction, icon: CheckCircle, color: COLORS.warning, suffix: '' },
              { label: 'Expérience', value: `${pillar.metrics.yearsExperience}`, icon: Zap, color: COLORS.cta, suffix: ' ans' },
            ].map((metric, index) => (
              <RainbowMetricCard
                key={metric.label}
                metric={metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - Colorful carousel */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Stack <span style={{ color: COLORS.accent }}>Automatisation</span>
            </h2>
            <p className="text-xl text-dainamics-light/70 max-w-3xl mx-auto mb-12">
              {pillar.technologies.length} technologies pour automatiser vos processus
            </p>

            {/* Rainbow filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { level: 'all', label: 'Toutes', color: COLORS.accent },
                { level: 'expert', label: 'Expert', color: COLORS.success },
                { level: 'advanced', label: 'Advanced', color: COLORS.warning },
                { level: 'intermediate', label: 'Intermediate', color: COLORS.cta }
              ].map((filter, idx) => (
                <motion.div
                  key={filter.level}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
                      boxShadow: `0 10px 40px ${filter.color}50`
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

          <ColorfulCarousel3D 
            technologies={filteredTechnologies} 
            activeIndex={activeCarouselIndex}
            setActiveIndex={setActiveCarouselIndex}
          />
        </div>
      </section>

      {/* Capabilities - STICKY TOP + SCROLLING CARDS */}
      <CapabilitiesStickyTopSection 
        capabilities={pillar.capabilities}
      />

      {/* Use Cases - Colorful grid */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-dainamics-light/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-6">
              Cas d'Usage <span style={{ color: COLORS.accent }}>Réels</span>
            </h2>
            <p className="text-xl text-dainamics-light/70">
              {pillar.useCases.length} exemples d'automatisation avec ROI prouvé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillar.useCases.map((useCase, index) => (
              <ColorfulUseCaseCard
                key={useCase.id}
                useCase={useCase}
                index={index}
                colors={[COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta, COLORS.primary]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins - STICKY RIGHT + SCROLLING LEFT */}
      <QuickWinsStickyRightSection 
        quickWins={pillar.quickWins}
      />

      {/* CTA - Rainbow morphing */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-16 md:p-20 text-center overflow-hidden border-2"
            style={{
              background: `radial-gradient(circle at center, ${COLORS.accent}20, ${COLORS.success}10)`,
              borderColor: COLORS.accent,
              boxShadow: `0 20px 80px ${COLORS.accent}30`
            }}
          >
            {/* Multi-color morphing shapes */}
            {[
              { color: COLORS.accent, delay: 0 },
              { color: COLORS.success, delay: 5 },
              { color: COLORS.warning, delay: 10 }
            ].map((shape, i) => (
              <motion.div
                key={i}
                animate={{
                  borderRadius: ["30%", "50%", "40%", "30%"],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: shape.delay
                }}
                className="absolute w-96 h-96 blur-3xl opacity-30"
                style={{ 
                  backgroundColor: shape.color,
                  top: `${i * 30}%`,
                  left: `${i * 30}%`
                }}
              />
            ))}

            <div className="relative z-10">
              <Workflow className="w-20 h-20 mx-auto mb-8" style={{ color: COLORS.accent }} />
              
              <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-8">
                Prêt à automatiser vos processus ?
              </h2>
              
              <p className="text-xl text-dainamics-light/70 mb-12 max-w-3xl mx-auto">
                Libérez le potentiel de votre équipe en automatisant les tâches répétitives
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="text-white px-10 py-7 text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.success})`,
                      boxShadow: `0 20px 60px ${COLORS.accent}50`
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
                    className="px-10 py-7 text-lg border-2"
                    style={{
                      borderColor: COLORS.warning,
                      color: COLORS.warning,
                      backgroundColor: `${COLORS.warning}10`
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

// Rainbow Sidebar Progress
function RainbowSidebarProgress({ scrollProgress }: any) {
  const colors = [COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta, COLORS.primary, COLORS.accent, COLORS.success];
  
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {['Hero', 'Metrics', 'Tech', 'Services', 'Cas', 'Wins', 'CTA'].map((label, index) => {
          const progress = scrollProgress.get();
          const sectionProgress = index / 6;
          const isActive = progress >= sectionProgress && progress < sectionProgress + 1/6;
          const color = colors[index];
          
          return (
            <motion.div
              key={label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className={`text-xs text-dainamics-light/50 transition-all ${isActive ? 'opacity-100 font-bold' : 'opacity-30'}`}>
                {label}
              </span>
              <div
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: isActive ? color : `${color}30`,
                  boxShadow: isActive ? `0 0 15px ${color}` : 'none',
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

// Colorful Workflow Background
function ColorfulWorkflowBackground() {
  const colors = [COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta];
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-16 h-16 rounded-lg border-2"
            style={{
              backgroundColor: `${colors[i % colors.length]}15`,
              borderColor: colors[i % colors.length],
              boxShadow: `0 0 20px ${colors[i % colors.length]}30`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Colorful Flow Diagram
function ColorfulFlowDiagram() {
  const colors = [COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta];
  
  return (
    <div className="relative w-full h-96">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Colorful connections */}
        {[
          { d: "M 100 100 Q 200 150, 300 100", color: colors[0] },
          { d: "M 300 100 Q 300 200, 300 300", color: colors[1] },
          { d: "M 100 300 Q 200 250, 300 300", color: colors[2] },
          { d: "M 100 100 Q 100 200, 100 300", color: colors[3] }
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            stroke={path.color}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            opacity={0.6}
          />
        ))}
        
        {/* Colorful nodes */}
        {[
          { x: 100, y: 100, icon: '📥', color: colors[0] },
          { x: 300, y: 100, icon: '⚙️', color: colors[1] },
          { x: 300, y: 300, icon: '📤', color: colors[2] },
          { x: 100, y: 300, icon: '✅', color: colors[3] },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="35"
              fill={`${node.color}20`}
              stroke={node.color}
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="28"
            >
              {node.icon}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// Rainbow Metric Card
function RainbowMetricCard({ metric, index }: any) {
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
          type: "spring"
        }
      } : {}}
      whileHover={{ 
        y: -10,
        boxShadow: `0 20px 60px ${metric.color}40`,
        scale: 1.05
      }}
      className="p-8 rounded-2xl text-center backdrop-blur-xl cursor-pointer border-2"
      style={{
        backgroundColor: `${metric.color}10`,
        borderColor: `${metric.color}40`
      }}
    >
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

// Colorful 3D Carousel
function ColorfulCarousel3D({ technologies, activeIndex, setActiveIndex }: any) {
  const colors = [COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta, COLORS.primary];
  
  return (
    <div className="relative h-96 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        {technologies.map((tech: any, index: number) => {
          const offset = index - activeIndex;
          const IconComponent = iconMapper[tech.icon];
          const cardColor = colors[index % colors.length];
          
          return (
            <motion.div
              key={tech.name}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{ x: '-50%', y: '-50%' }}
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
                className="p-8 rounded-2xl backdrop-blur-xl w-64 border-2"
                style={{
                  backgroundColor: offset === 0 ? `${cardColor}20` : `${cardColor}08`,
                  borderColor: offset === 0 ? cardColor : `${cardColor}30`,
                  boxShadow: offset === 0 ? `0 20px 60px ${cardColor}40` : ''
                }}
              >
                {IconComponent && (
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ 
                      backgroundColor: `${cardColor}20`,
                      border: `2px solid ${cardColor}`
                    }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: cardColor }}
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
      
      {/* Rainbow controls */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          variant="outline"
          style={{
            borderColor: COLORS.accent,
            color: COLORS.accent
          }}
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </Button>
        <Button
          onClick={() => setActiveIndex(Math.min(technologies.length - 1, activeIndex + 1))}
          disabled={activeIndex === technologies.length - 1}
          variant="outline"
          style={{
            borderColor: COLORS.success,
            color: COLORS.success
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

// Capabilities STICKY TOP + SCROLLING CARDS
function CapabilitiesStickyTopSection({ capabilities }: any) {
  const containerRef = useRef(null);
  const colors = [COLORS.accent, COLORS.success, COLORS.warning, COLORS.cta, COLORS.primary];
  
  return (
    <section ref={containerRef} className="relative py-32 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <div className="sticky top-20 mb-20 z-20 bg-dainamics-background/80 backdrop-blur-xl py-8 rounded-2xl border-2"
             style={{ borderColor: `${COLORS.accent}30` }}>
          <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light mb-4 text-center">
            Services <span style={{ color: COLORS.accent }}>d'Automatisation</span>
          </h2>
          <p className="text-xl text-dainamics-light/70 text-center">
            {capabilities.length} solutions pour optimiser vos opérations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability: any, index: number) => (
            <ColorfulCapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
              cardColor={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Colorful Capability Card
function ColorfulCapabilityCard({ capability, index, cardColor }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = iconMapper[capability.icon];
  const complexityColor = complexityColors[capability.complexity];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, 2, -2, 0],
        boxShadow: `0 20px 60px ${cardColor}40`
      }}
      className="p-8 rounded-3xl backdrop-blur-xl cursor-pointer border-2"
      style={{
        backgroundColor: `${cardColor}08`,
        borderColor: `${cardColor}30`
      }}
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2"
        style={{ 
          background: `linear-gradient(135deg, ${cardColor}20, ${complexityColor}20)`,
          borderColor: cardColor
        }}
      >
        {IconComponent && (
          <IconComponent 
            className="w-8 h-8" 
            style={{ color: cardColor }}
          />
        )}
      </div>

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-dainamics-light">
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

      <p className="text-dainamics-light/70 mb-4 text-sm">
        {capability.description}
      </p>

      <div className="flex items-center gap-2 text-sm text-dainamics-light/60 mb-4">
        <Clock className="w-4 h-4" style={{ color: cardColor }} />
        <span>{capability.timeline}</span>
      </div>

      <div className="space-y-2">
        {capability.deliverables.slice(0, 2).map((deliverable: string, i: number) => (
          <div 
            key={i}
            className="flex items-start gap-2 p-2 rounded-lg border"
            style={{ 
              backgroundColor: `${cardColor}10`,
              borderColor: `${cardColor}20`
            }}
          >
            <CheckCircle 
              className="w-4 h-4 mt-0.5 flex-shrink-0" 
              style={{ color: cardColor }}
            />
            <span className="text-xs text-dainamics-light/80">{deliverable}</span>
          </div>
        ))}
      </div>
    </motion.div>
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
      initial={{ opacity: 0, rotateX: 45, y: 50 }}
      animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
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

      <p className="text-dainamics-light/70 mb-6 text-sm">
        {useCase.description}
      </p>

      <div 
        className="p-4 rounded-xl mb-4 border"
        style={{ 
          backgroundColor: `${cardColor}10`,
          borderColor: `${cardColor}20`
        }}
      >
        <p className="text-xs text-dainamics-light/50 mb-3 uppercase">ROI</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Délai', value: useCase.roi.timeframe, color: COLORS.accent },
            { label: 'Économies', value: useCase.roi.savings, color: COLORS.success },
            { label: 'Efficacité', value: useCase.roi.efficiency, color: COLORS.warning }
          ].map((item, i) => (
            <div key={i}>
              <p className="text-xs text-dainamics-light/70 mb-1">{item.label}</p>
              <p className="text-sm font-bold" style={{ color: item.color }}>{item.value}</p>
            </div>
          ))}
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
            Voir le projet
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      )}
    </motion.div>
  );
}

// Quick Wins STICKY RIGHT + SCROLLING LEFT
function QuickWinsStickyRightSection({ quickWins }: any) {
  const colors = [COLORS.accent, COLORS.success, COLORS.warning];
  
  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT - SCROLLING */}
          <div className="lg:col-span-7 space-y-8">
            {quickWins.map((quickWin: any, index: number) => (
              <ColorfulQuickWinCard
                key={index}
                quickWin={quickWin}
                index={index}
                colors={colors}
              />
            ))}
          </div>

          {/* RIGHT - STICKY */}
          <motion.div 
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-dainamics-light">
                Quick Wins <span style={{ color: COLORS.accent }}>Automatisation</span>
              </h2>
              <p className="text-xl text-dainamics-light/70">
                Commencez rapidement avec des gains immédiats
              </p>
              
              {/* Colorful benefits */}
              <div className="space-y-4 mt-8">
                {[
                  { label: 'Délai rapide', value: '2-4 semaines', color: COLORS.accent, icon: Clock },
                  { label: 'ROI garanti', value: '< 6 mois', color: COLORS.success, icon: TrendingUp },
                  { label: 'Risque minimal', value: 'Investissement limité', color: COLORS.warning, icon: Target }
                ].map((benefit, i) => {
                  const IconComp = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl border-2"
                      style={{
                        backgroundColor: `${benefit.color}10`,
                        borderColor: `${benefit.color}30`
                      }}
                    >
                      <IconComp className="w-8 h-8" style={{ color: benefit.color }} />
                      <div>
                        <p className="text-sm text-dainamics-light/60">{benefit.label}</p>
                        <p className="text-xl font-bold" style={{ color: benefit.color }}>{benefit.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
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
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      whileHover={{ 
        x: 20,
        boxShadow: `0 30px 80px ${cardColor}40`
      }}
      className="p-10 rounded-3xl backdrop-blur-xl border-2"
      style={{
        backgroundColor: `${cardColor}10`,
        borderColor: `${cardColor}30`
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <Zap className="w-10 h-10 mb-4" style={{ color: cardColor }} />
          
          <h3 className="text-2xl font-bold text-dainamics-light mb-4">
            {quickWin.title}
          </h3>

          <div className="space-y-3">
            {[
              { icon: Clock, label: 'Délai', value: quickWin.timeframe, color: COLORS.accent },
              { icon: Target, label: 'Investment', value: quickWin.investment, color: COLORS.warning },
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
        </div>

        <Button
          asChild
          size="lg"
          className="text-white self-end md:self-center"
          style={{ 
            background: `linear-gradient(135deg, ${cardColor}, ${colors[(index + 1) % colors.length]})`,
            boxShadow: `0 10px 30px ${cardColor}40`
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
