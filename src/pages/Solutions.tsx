// src/pages/Solutions.tsx
// Solutions Page - Professional Design with Filters & Modals
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  solutions, 
  quickWinSolutions, 
  solutionsByCategory,
  solutionsStats,
  type Solution 
} from '@/data/solutions';
import { iconMapper } from '@/utils/iconMapper';
import { 
  ArrowRight,
  Sparkles,
  Filter,
  X,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  ChevronDown,
  Rocket
} from 'lucide-react';

const COLORS = {
  primary: '#6366F1',
  cta: '#FF5A00',
  accent: '#10E4FF',
  success: '#10B981'
};

const CATEGORY_COLORS = {
  'ia': '#6366F1',
  'automatisation': '#10E4FF',
  'developpement': '#FF5A00'
};

const COMPLEXITY_COLORS = {
  'starter': '#10B981',
  'intermediate': '#F59E0B',
  'advanced': '#EF4444'
};

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSolutions = solutions.filter(solution => {
    const categoryMatch = !selectedCategory || solution.category === selectedCategory;
    const complexityMatch = !selectedComplexity || solution.complexity === selectedComplexity;
    return categoryMatch && complexityMatch;
  });

  const openSolutionModal = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSolution(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light overflow-hidden">
      <Navigation />

      {/* Enhanced 3D Grid Background with Parallax & Depth */}
      <EnhancedGridBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Filters */}
      <FiltersSection
        selectedCategory={selectedCategory}
        selectedComplexity={selectedComplexity}
        onCategoryChange={setSelectedCategory}
        onComplexityChange={setSelectedComplexity}
      />

      {/* Quick Wins Highlight */}
      {!selectedCategory && !selectedComplexity && (
        <QuickWinsSection onSolutionClick={openSolutionModal} />
      )}

      {/* Solutions Grid */}
      <SolutionsGrid
        solutions={filteredSolutions}
        onSolutionClick={openSolutionModal}
      />

      {/* CTA Section */}
      <CTASection />

      {/* Solution Modal */}
      <SolutionModal
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}

// ============================================================================
// ENHANCED GRID BACKGROUND - Maximum Depth Effect
// ============================================================================
function EnhancedGridBackground() {
  const { scrollY } = useScroll();
  
  // Parallax effect - Grid moves slower than content
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Radial gradient overlay - Spotlight effect from center */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 30%,
              rgba(99, 102, 241, 0.15) 0%,
              rgba(99, 102, 241, 0.05) 25%,
              transparent 50%
            )
          `
        }}
      />

      {/* Primary Grid Layer - Main grid with dots at intersections */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        />
      </motion.div>

      {/* Secondary Grid Layer - Offset for moiré effect */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 228, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 228, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: '25px 25px'
          }}
        />
      </motion.div>

      {/* Vignette effect - Darkens edges for more depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 40%,
              rgba(10, 10, 15, 0.3) 70%,
              rgba(10, 10, 15, 0.6) 100%
            )
          `
        }}
      />

      {/* Top glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(99, 102, 241, 0.1) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(60px)'
        }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[300px]"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(16, 228, 255, 0.08) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(80px)'
        }}
      />
    </div>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: `${COLORS.success}15`,
              border: `1px solid ${COLORS.success}30`
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: COLORS.success }} />
            <span className="text-sm font-medium" style={{ color: COLORS.success }}>
              15 Solutions Prêtes à Déployer
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Solutions qui{' '}
            <span style={{ color: COLORS.accent }}>génèrent</span>
            <br />
            des résultats
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            De l'automatisation simple aux systèmes IA avancés. Toutes nos solutions incluent des gains mesurables en temps et argent.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                  border: 'none',
                  color: '#FFFFFF'
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Explorer les Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                style={{
                  borderColor: COLORS.cta,
                  color: COLORS.cta,
                  backgroundColor: 'transparent'
                }}
              >
                Discuter de Votre Projet
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Défiler pour découvrir</span>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// STATS SECTION
// ============================================================================
function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const stats = [
    { 
      label: 'Solutions', 
      value: solutionsStats.total, 
      suffix: '', 
      icon: Sparkles,
      color: COLORS.primary 
    },
    { 
      label: 'Quick Wins', 
      value: solutionsStats.quickWins, 
      suffix: '', 
      icon: Zap,
      color: COLORS.success 
    },
    { 
      label: 'Catégories', 
      value: 3, 
      suffix: '', 
      icon: Filter,
      color: COLORS.accent 
    },
    { 
      label: 'Industries', 
      value: 15, 
      suffix: '+', 
      icon: TrendingUp,
      color: COLORS.cta 
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-xl border"
              style={{
                backgroundColor: 'rgba(10, 10, 15, 0.6)',
                borderColor: `${stat.color}30`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <stat.icon className="w-8 h-8 mb-3" style={{ color: stat.color }} />
              <div className="text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FILTERS SECTION
// ============================================================================
function FiltersSection({ 
  selectedCategory, 
  selectedComplexity, 
  onCategoryChange, 
  onComplexityChange 
}: any) {
  const categories = [
    { id: null, label: 'Toutes', color: COLORS.primary },
    { id: 'ia', label: 'Intelligence Artificielle', color: CATEGORY_COLORS.ia },
    { id: 'automatisation', label: 'Automatisation', color: CATEGORY_COLORS.automatisation },
    { id: 'developpement', label: 'Développement', color: CATEGORY_COLORS.developpement }
  ];

  const complexities = [
    { id: null, label: 'Tous niveaux', color: COLORS.primary },
    { id: 'starter', label: 'Starter', color: COMPLEXITY_COLORS.starter },
    { id: 'intermediate', label: 'Intermediate', color: COMPLEXITY_COLORS.intermediate },
    { id: 'advanced', label: 'Advanced', color: COMPLEXITY_COLORS.advanced }
  ];

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Category Filters */}
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Par Catégorie</h3>
          <div className="flex items-center gap-3 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category.id || 'all'}
                onClick={() => onCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
                style={{
                  backgroundColor: selectedCategory === category.id 
                    ? `${category.color}20`
                    : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${selectedCategory === category.id ? category.color : 'rgba(255,255,255,0.1)'}`,
                  color: selectedCategory === category.id ? category.color : '#9CA3AF'
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Complexity Filters */}
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Par Complexité</h3>
          <div className="flex items-center gap-3 flex-wrap">
            {complexities.map((complexity) => (
              <motion.button
                key={complexity.id || 'all'}
                onClick={() => onComplexityChange(complexity.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
                style={{
                  backgroundColor: selectedComplexity === complexity.id 
                    ? `${complexity.color}20`
                    : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${selectedComplexity === complexity.id ? complexity.color : 'rgba(255,255,255,0.1)'}`,
                  color: selectedComplexity === complexity.id ? complexity.color : '#9CA3AF'
                }}
              >
                {complexity.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// QUICK WINS SECTION
// ============================================================================
function QuickWinsSection({ onSolutionClick }: any) {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: `${COLORS.success}15`,
              border: `1px solid ${COLORS.success}30`
            }}
          >
            <Zap className="w-4 h-4" style={{ color: COLORS.success }} />
            <span className="text-sm font-medium" style={{ color: COLORS.success }}>
              ROI Rapide - Moins de 6 mois
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Quick <span style={{ color: COLORS.success }}>Wins</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Solutions à fort impact avec retour sur investissement rapide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickWinSolutions.slice(0, 6).map((solution, index) => (
            <QuickWinCard
              key={solution.id}
              solution={solution}
              index={index}
              onClick={() => onSolutionClick(solution)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickWinCard({ solution, index, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const categoryColor = CATEGORY_COLORS[solution.category];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="p-6 rounded-xl cursor-pointer border group relative overflow-hidden"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.6)',
        borderColor: `${categoryColor}30`,
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Quick Win Badge */}
      <div className="absolute top-4 right-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-lg"
          style={{
            backgroundColor: `${COLORS.success}20`,
            border: `1px solid ${COLORS.success}`
          }}
        >
          <Zap className="w-4 h-4" style={{ color: COLORS.success }} />
        </motion.div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Badge
          className="text-xs"
          style={{
            backgroundColor: `${categoryColor}20`,
            color: categoryColor,
            border: `1px solid ${categoryColor}40`
          }}
        >
          {solution.category}
        </Badge>
      </div>

      <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{solution.tagline}</p>

      <div className="space-y-2">
        {solution.outcomes.timeGained && (
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-3.5 h-3.5" style={{ color: COLORS.success }} />
            <span style={{ color: COLORS.success }}>{solution.outcomes.timeGained}</span>
          </div>
        )}
        {solution.outcomes.moneySaved && (
          <div className="flex items-center gap-2 text-xs">
            <DollarSign className="w-3.5 h-3.5" style={{ color: COLORS.success }} />
            <span style={{ color: COLORS.success }}>{solution.outcomes.moneySaved}</span>
          </div>
        )}
      </div>

      <motion.div
        className="mt-4 flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: categoryColor }}
      >
        <span>Voir les détails</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// SOLUTIONS GRID
// ============================================================================
function SolutionsGrid({ solutions, onSolutionClick }: any) {
  return (
    <section id="solutions" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Toutes nos <span style={{ color: COLORS.primary }}>Solutions</span>
          </h2>
          <p className="text-lg text-gray-400">
            {solutions.length} solution{solutions.length > 1 ? 's' : ''} disponible{solutions.length > 1 ? 's' : ''}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {solutions.map((solution: Solution, index: number) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={index}
                onClick={() => onSolutionClick(solution)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, index, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const categoryColor = CATEGORY_COLORS[solution.category];
  const complexityColor = COMPLEXITY_COLORS[solution.complexity];
  const Icon = iconMapper[solution.icon];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="p-6 rounded-xl cursor-pointer border group"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.6)',
        borderColor: `${categoryColor}30`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className="p-2 rounded-lg" style={{ backgroundColor: `${categoryColor}20` }}>
              <Icon className="w-5 h-5" style={{ color: categoryColor }} />
            </div>
          )}
        </div>
        {solution.outcomes.quickWin && (
          <Badge
            className="text-xs"
            style={{
              backgroundColor: `${COLORS.success}20`,
              color: COLORS.success,
              border: `1px solid ${COLORS.success}40`
            }}
          >
            <Zap className="w-3 h-3 mr-1" />
            Quick Win
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Badge
          className="text-xs"
          style={{
            backgroundColor: `${categoryColor}20`,
            color: categoryColor,
            border: `1px solid ${categoryColor}40`
          }}
        >
          {solution.category}
        </Badge>
        <Badge
          className="text-xs"
          style={{
            backgroundColor: `${complexityColor}20`,
            color: complexityColor,
            border: `1px solid ${complexityColor}40`
          }}
        >
          {solution.complexity}
        </Badge>
      </div>

      <h3 className="text-lg font-bold mb-2 line-clamp-2">{solution.title}</h3>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{solution.tagline}</p>

      <div className="space-y-2 mb-4">
        {solution.outcomes.timeGained && (
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-3.5 h-3.5" style={{ color: COLORS.success }} />
            <span className="text-gray-400">{solution.outcomes.timeGained}</span>
          </div>
        )}
        {solution.outcomes.moneySaved && (
          <div className="flex items-center gap-2 text-xs">
            <DollarSign className="w-3.5 h-3.5" style={{ color: COLORS.success }} />
            <span className="text-gray-400">{solution.outcomes.moneySaved}</span>
          </div>
        )}
        {solution.outcomes.improvement && (
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp className="w-3.5 h-3.5" style={{ color: COLORS.success }} />
            <span className="text-gray-400">{solution.outcomes.improvement}</span>
          </div>
        )}
      </div>

      <motion.div
        className="flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: categoryColor }}
      >
        <span>Voir les détails</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASection() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Prêt à <span style={{ color: COLORS.accent }}>automatiser</span> ?
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Discutons de votre situation et identifions ensemble les solutions à fort impact pour votre entreprise.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                style={{
                  backgroundColor: COLORS.primary,
                  border: 'none',
                  color: '#FFFFFF'
                }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Démarrer Votre Projet
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                style={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent,
                  backgroundColor: 'transparent'
                }}
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Voir Nos Réalisations
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SOLUTION MODAL
// ============================================================================
function SolutionModal({ solution, isOpen, onClose }: any) {
  if (!solution) return null;

  const categoryColor = CATEGORY_COLORS[solution.category];
  const complexityColor = COMPLEXITY_COLORS[solution.complexity];
  const Icon = iconMapper[solution.icon];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl my-8 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(10, 10, 15, 0.98)',
                border: `2px solid ${categoryColor}50`,
                maxHeight: '90vh'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF'
                }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="overflow-y-auto max-h-[85vh] p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="p-3 rounded-xl" style={{ backgroundColor: `${categoryColor}20` }}>
                        <Icon className="w-8 h-8" style={{ color: categoryColor }} />
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Badge
                        style={{
                          backgroundColor: `${categoryColor}20`,
                          color: categoryColor,
                          border: `1px solid ${categoryColor}`
                        }}
                      >
                        {solution.category.toUpperCase()}
                      </Badge>
                      <Badge
                        style={{
                          backgroundColor: `${complexityColor}20`,
                          color: complexityColor,
                          border: `1px solid ${complexityColor}50`
                        }}
                      >
                        {solution.complexity}
                      </Badge>
                      {solution.outcomes.quickWin && (
                        <Badge
                          style={{
                            backgroundColor: `${COLORS.success}20`,
                            color: COLORS.success,
                            border: `1px solid ${COLORS.success}50`
                          }}
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          Quick Win
                        </Badge>
                      )}
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold mb-3">{solution.title}</h2>
                  <p className="text-xl" style={{ color: categoryColor }}>{solution.tagline}</p>
                </div>

                {/* Scenario */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Le Scénario</h3>
                  <p className="text-gray-300 leading-relaxed">{solution.scenario}</p>
                </div>

                {/* Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {solution.outcomes.timeGained && (
                    <div
                      className="p-6 rounded-xl"
                      style={{
                        backgroundColor: `${COLORS.success}15`,
                        border: `1px solid ${COLORS.success}30`
                      }}
                    >
                      <Clock className="w-8 h-8 mb-3" style={{ color: COLORS.success }} />
                      <div className="text-2xl font-bold mb-1" style={{ color: COLORS.success }}>
                        {solution.outcomes.timeGained}
                      </div>
                      <div className="text-sm text-gray-400">Temps gagné</div>
                    </div>
                  )}
                  {solution.outcomes.moneySaved && (
                    <div
                      className="p-6 rounded-xl"
                      style={{
                        backgroundColor: `${COLORS.success}15`,
                        border: `1px solid ${COLORS.success}30`
                      }}
                    >
                      <DollarSign className="w-8 h-8 mb-3" style={{ color: COLORS.success }} />
                      <div className="text-2xl font-bold mb-1" style={{ color: COLORS.success }}>
                        {solution.outcomes.moneySaved}
                      </div>
                      <div className="text-sm text-gray-400">Économies</div>
                    </div>
                  )}
                  {solution.outcomes.improvement && (
                    <div
                      className="p-6 rounded-xl"
                      style={{
                        backgroundColor: `${COLORS.success}15`,
                        border: `1px solid ${COLORS.success}30`
                      }}
                    >
                      <TrendingUp className="w-8 h-8 mb-3" style={{ color: COLORS.success }} />
                      <div className="text-2xl font-bold mb-1" style={{ color: COLORS.success }}>
                        {solution.outcomes.improvement}
                      </div>
                      <div className="text-sm text-gray-400">Amélioration</div>
                    </div>
                  )}
                </div>

                {/* What's Possible */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Ce qui est possible</h3>
                  <div className="space-y-3">
                    {solution.whatsPossible.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: COLORS.success }} />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Industries concernées</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry: string) => (
                      <Badge
                        key={industry}
                        variant="outline"
                        className="text-sm px-3 py-1"
                        style={{
                          borderColor: categoryColor,
                          color: categoryColor,
                          backgroundColor: `${categoryColor}10`
                        }}
                      >
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t" style={{ borderColor: `${categoryColor}30` }}>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        style={{
                          backgroundColor: categoryColor,
                          border: 'none',
                          color: '#FFFFFF'
                        }}
                      >
                        <Rocket className="w-5 h-5 mr-2" />
                        Discuter de cette Solution
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
