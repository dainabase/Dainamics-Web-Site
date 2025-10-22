import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
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
      <EnhancedGridBackground />

      <HeroSection />
      <StatsSection />
      <FiltersSection
        selectedCategory={selectedCategory}
        selectedComplexity={selectedComplexity}
        onCategoryChange={setSelectedCategory}
        onComplexityChange={setSelectedComplexity}
      />

      {!selectedCategory && !selectedComplexity && (
        <QuickWinsSection onSolutionClick={openSolutionModal} />
      )}

      <SolutionsGrid
        solutions={filteredSolutions}
        onSolutionClick={openSolutionModal}
      />

      <CTASection />

      <SolutionModal
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <Badge className="px-4 py-2 text-sm font-medium" style={{
            backgroundColor: `${COLORS.accent}20`,
            color: COLORS.accent,
            border: `1px solid ${COLORS.accent}`
          }}>
            <Sparkles className="w-4 h-4 mr-2 inline" />
            15+ Scénarios d'Automatisation
          </Badge>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Solutions Qui <br/>
          <span style={{ color: COLORS.accent }}>Transforment</span> Votre Business
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Découvrez comment l'IA et l'automatisation peuvent résoudre vos défis business concrets.
          De la gestion client au pilotage d'entreprise, trouvez votre scénario.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
              style={{
                backgroundColor: COLORS.cta,
                color: 'white'
              }}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Discuter de Mon Projet
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg"
            onClick={() => {
              document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              borderColor: COLORS.accent,
              color: COLORS.accent
            }}
          >
            <Filter className="w-5 h-5 mr-2" />
            Explorer les Solutions
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500">Scroll pour découvrir</span>
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const statsData = [
    { label: 'Solutions Disponibles', value: solutionsStats.total, suffix: '', icon: Zap },
    { label: 'Quick Wins (< 6 mois)', value: solutionsStats.quickWins, suffix: '', icon: Sparkles },
    { label: 'Secteurs Couverts', value: solutionsStats.industries, suffix: '+', icon: TrendingUp },
    { label: 'ROI Moyen', value: '300', suffix: '%', icon: DollarSign }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative p-6 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Icon className="w-8 h-8 mb-3" style={{ color: COLORS.accent }} />
                <div className="text-4xl font-bold mb-2">
                  {stat.value}<span style={{ color: COLORS.accent }}>{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FiltersSection({ selectedCategory, selectedComplexity, onCategoryChange, onComplexityChange }: any) {
  const categories = [
    { id: null, label: 'Toutes les Solutions', color: '#FFFFFF' },
    { id: 'ia', label: 'Intelligence Artificielle', color: CATEGORY_COLORS.ia },
    { id: 'automatisation', label: 'Automatisation', color: CATEGORY_COLORS.automatisation },
    { id: 'developpement', label: 'Développement', color: CATEGORY_COLORS.developpement }
  ];

  const complexities = [
    { id: null, label: 'Toutes Complexités', color: '#FFFFFF' },
    { id: 'starter', label: 'Starter (2-4 sem)', color: COMPLEXITY_COLORS.starter },
    { id: 'intermediate', label: 'Intermédiaire (1-2 mois)', color: COMPLEXITY_COLORS.intermediate },
    { id: 'advanced', label: 'Avancé (3+ mois)', color: COMPLEXITY_COLORS.advanced }
  ];

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">Filtrer par Catégorie</h3>
        </div>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.id || 'all'}
              onClick={() => onCategoryChange(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
              style={{
                backgroundColor: selectedCategory === cat.id
                  ? `${cat.color}20`
                  : 'rgba(255,255,255,0.05)',
                border: `1px solid ${selectedCategory === cat.id ? cat.color : 'rgba(255,255,255,0.1)'}`,
                color: selectedCategory === cat.id ? cat.color : '#9CA3AF'
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <div className="text-center mb-8 mt-12">
          <h3 className="text-2xl font-semibold mb-2">Filtrer par Complexité</h3>
        </div>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {complexities.map((comp) => (
            <motion.button
              key={comp.id || 'all'}
              onClick={() => onComplexityChange(comp.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
              style={{
                backgroundColor: selectedComplexity === comp.id
                  ? `${comp.color}20`
                  : 'rgba(255,255,255,0.05)',
                border: `1px solid ${selectedComplexity === comp.id ? comp.color : 'rgba(255,255,255,0.1)'}`,
                color: selectedComplexity === comp.id ? comp.color : '#9CA3AF'
              }}
            >
              {comp.label}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickWinsSection({ onSolutionClick }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quick Wins <span style={{ color: COLORS.success }}>Rapides</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Solutions à impact immédiat avec ROI en moins de 6 mois
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickWinSolutions.map((solution, idx) => {
            const Icon = iconMapper[solution.icon] || Sparkles;
            const categoryColor = CATEGORY_COLORS[solution.category];

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => onSolutionClick(solution)}
                className="p-6 rounded-xl cursor-pointer transition-all hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${categoryColor}30`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-10 h-10" style={{ color: categoryColor }} />
                  <Badge
                    className="text-xs px-2 py-1"
                    style={{
                      backgroundColor: `${COLORS.success}20`,
                      color: COLORS.success,
                      border: `1px solid ${COLORS.success}`
                    }}
                  >
                    <Zap className="w-3 h-3 mr-1 inline" />
                    Quick Win
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{solution.tagline}</p>

                <div className="flex items-center gap-2 text-sm" style={{ color: categoryColor }}>
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid({ solutions, onSolutionClick }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="solutions-grid" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Toutes les <span style={{ color: COLORS.accent }}>Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {solutions.length} solution{solutions.length > 1 ? 's' : ''} trouvée{solutions.length > 1 ? 's' : ''}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution: Solution, idx: number) => {
            const Icon = iconMapper[solution.icon] || Sparkles;
            const categoryColor = CATEGORY_COLORS[solution.category];
            const complexityColor = COMPLEXITY_COLORS[solution.complexity];

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                onClick={() => onSolutionClick(solution)}
                className="p-6 rounded-xl cursor-pointer transition-all hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${categoryColor}30`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-10 h-10" style={{ color: categoryColor }} />
                  <div className="flex flex-col gap-2">
                    {solution.outcomes.quickWin && (
                      <Badge
                        className="text-xs px-2 py-1"
                        style={{
                          backgroundColor: `${COLORS.success}20`,
                          color: COLORS.success,
                          border: `1px solid ${COLORS.success}`
                        }}
                      >
                        Quick Win
                      </Badge>
                    )}
                    <Badge
                      className="text-xs px-2 py-1"
                      style={{
                        backgroundColor: `${complexityColor}20`,
                        color: complexityColor,
                        border: `1px solid ${complexityColor}`
                      }}
                    >
                      {solution.complexity}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{solution.tagline}</p>

                {solution.outcomes.timeGained && (
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{solution.outcomes.timeGained}</span>
                  </div>
                )}

                {solution.outcomes.moneySaved && (
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <DollarSign className="w-4 h-4" />
                    <span>{solution.outcomes.moneySaved}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm mt-4" style={{ color: categoryColor }}>
                  <span>Voir les détails</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-12 rounded-2xl text-center"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.accent}20)`,
          border: `1px solid ${COLORS.accent}30`,
          backdropFilter: 'blur(10px)'
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Prêt à Transformer <span style={{ color: COLORS.accent }}>Votre Entreprise</span>?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Discutons de votre projet et identifions ensemble les solutions les plus adaptées à vos besoins.
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold"
            style={{
              backgroundColor: COLORS.cta,
              color: 'white'
            }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Démarrer Mon Projet
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

function SolutionModal({ solution, isOpen, onClose }: any) {
  if (!solution) return null;

  const categoryColor = CATEGORY_COLORS[solution.category];
  const Icon = iconMapper[solution.icon] || Sparkles;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto rounded-2xl"
            style={{
              background: 'rgba(10, 10, 15, 0.95)',
              border: `1px solid ${categoryColor}50`,
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <Icon className="w-12 h-12" style={{ color: categoryColor }} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{solution.title}</h2>
                    <p className="text-lg text-gray-400 mt-2">{solution.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge style={{ backgroundColor: `${categoryColor}20`, color: categoryColor, border: `1px solid ${categoryColor}` }}>
                  {solution.category}
                </Badge>
                <Badge style={{ backgroundColor: `${COMPLEXITY_COLORS[solution.complexity]}20`, color: COMPLEXITY_COLORS[solution.complexity], border: `1px solid ${COMPLEXITY_COLORS[solution.complexity]}` }}>
                  {solution.complexity}
                </Badge>
                {solution.outcomes.quickWin && (
                  <Badge style={{ backgroundColor: `${COLORS.success}20`, color: COLORS.success, border: `1px solid ${COLORS.success}` }}>
                    <Zap className="w-3 h-3 mr-1 inline" />
                    Quick Win
                  </Badge>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Le Scénario</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{solution.scenario}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Ce Qui Est Possible</h3>
                  <ul className="space-y-3">
                    {solution.whatsPossible.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: COLORS.success }} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Résultats Attendus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {solution.outcomes.timeGained && (
                      <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <Clock className="w-6 h-6 mb-2" style={{ color: COLORS.accent }} />
                        <div className="text-sm text-gray-400">Temps Gagné</div>
                        <div className="text-xl font-semibold">{solution.outcomes.timeGained}</div>
                      </div>
                    )}
                    {solution.outcomes.moneySaved && (
                      <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <DollarSign className="w-6 h-6 mb-2" style={{ color: COLORS.success }} />
                        <div className="text-sm text-gray-400">Économies</div>
                        <div className="text-xl font-semibold">{solution.outcomes.moneySaved}</div>
                      </div>
                    )}
                    {solution.outcomes.improvement && (
                      <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <TrendingUp className="w-6 h-6 mb-2" style={{ color: COLORS.primary }} />
                        <div className="text-sm text-gray-400">Amélioration</div>
                        <div className="text-xl font-semibold">{solution.outcomes.improvement}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: categoryColor }}>Secteurs d'Application</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry: string, idx: number) => (
                      <Badge key={idx} className="px-3 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFF' }}>
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="w-full md:w-auto px-8 py-6 text-lg font-semibold"
                      style={{ backgroundColor: COLORS.cta, color: 'white' }}
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      Implémenter Cette Solution
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
