import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Building2, Store, Briefcase, Landmark, Scale, 
  Home, TrendingUp, Package, Factory, Users, Laptop, 
  ShoppingCart, Target, CheckCircle2, Zap, Shield, Clock, Award, HeadphonesIcon,
  Sparkles
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import SolutionModal from '@/components/SolutionModal';
import { solutions, Solution } from '@/data/solutions';

// Industry data with icons
const industryData = [
  { name: 'E-commerce', icon: ShoppingCart, desc: 'Boutiques en ligne et marketplaces', color: '#6366F1' },
  { name: 'Retail', icon: Store, desc: 'Commerce de détail et distribution', color: '#10E4FF' },
  { name: 'Services', icon: Briefcase, desc: 'Prestations de services B2B/B2C', color: '#FF5A00' },
  { name: 'SaaS', icon: Laptop, desc: 'Logiciels et solutions cloud', color: '#10B981' },
  { name: 'Finance', icon: Landmark, desc: 'Banques, assurances, fintech', color: '#F59E0B' },
  { name: 'Juridique', icon: Scale, desc: 'Cabinets d\'avocats et notaires', color: '#EF4444' },
  { name: 'Immobilier', icon: Home, desc: 'Gestion immobilière et promotion', color: '#8B5CF6' },
  { name: 'Consulting', icon: Users, desc: 'Conseil et accompagnement', color: '#EC4899' },
  { name: 'Manufacturing', icon: Factory, desc: 'Production et industrie', color: '#14B8A6' },
  { name: 'Distribution', icon: Package, desc: 'Logistique et distribution', color: '#F97316' },
  { name: 'Technology', icon: Laptop, desc: 'Tech et innovation', color: '#06B6D4' },
  { name: 'Comptabilité', icon: TrendingUp, desc: 'Expertise comptable et fiscale', color: '#84CC16' },
];

const accentColor = '#10E4FF';

export default function Industries() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll animations avec parallax
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get solutions for selected industry
  const filteredSolutions = selectedIndustry
    ? solutions.filter(s => s.industries.some(i => 
        i.toLowerCase().includes(selectedIndustry.toLowerCase())
      ))
    : [];

  // Ouvrir modal
  const handleOpenModal = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  // Fermer modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSolution(null), 300);
  };

  // Variants d'animation - GARDÉS INTACTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Category colors
  const categoryColors = {
    ia: '#6366F1',
    automatisation: '#10E4FF',
    developpement: '#FF5A00'
  };

  return (
    <div className="min-h-screen bg-dainamics-background">
      <EnhancedGridBackground />
      <Navigation />

      <main className="relative z-10">
        {/* Hero Section - STYLE EXPERTISE IA AMÉLIORÉ */}
        <section ref={heroRef} className="relative py-20 md:py-24 overflow-hidden">
          {/* Animated Background Grid - STYLE EXPERTISE IA */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ y: smoothY }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${accentColor} 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </motion.div>

          {/* Floating Orbs - PLUS NOMBREUX STYLE EXPERTISE IA */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl pointer-events-none"
              style={{
                width: `${300 + i * 50}px`,
                height: `${300 + i * 50}px`,
                backgroundColor: i % 2 === 0 ? `${accentColor}15` : `#6366F115`,
                top: `${10 + i * 15}%`,
                left: `${5 + i * 20}%`,
              }}
              animate={{
                y: [0, -30 - i * 10, 0],
                x: [0, 20 + i * 5, 0],
                scale: [1, 1.1 + i * 0.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          <div className="container mx-auto px-4 md:px-8 min-h-[85vh] flex items-center">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
              {/* Texte - Gauche avec stagger */}
              <motion.div
                className="lg:w-1/2 lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="mb-4">
                  <Badge 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-semibold"
                    style={{ 
                      backgroundColor: `${accentColor}15`,
                      border: `1px solid ${accentColor}30`,
                      color: accentColor
                    }}
                  >
                    <Building2 className="h-4 w-4" />
                    <span className="tracking-wide uppercase">Industries</span>
                  </Badge>
                </motion.div>

                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                >
                  <span className="text-gradient">Solutions Adaptées</span> <br />
                  <motion.span 
                    className="text-gradient-primary glow inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    À Votre Industrie
                  </motion.span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="text-dainamics-light/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
                >
                  Chaque secteur a ses défis spécifiques. Découvrez les solutions d'IA et 
                  d'automatisation conçues pour répondre aux besoins de votre industrie.
                </motion.p>

                {/* Stats rapides - STYLE AMÉLIORÉ */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 mb-8 max-w-lg"
                >
                  {[
                    { value: industryData.length, label: 'Industries', icon: Building2 },
                    { value: solutions.length, label: 'Solutions', icon: Zap },
                    { value: '2-6', label: 'Semaines', icon: Clock }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="relative p-4 rounded-xl group"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}08, transparent)`,
                        border: `1px solid ${accentColor}20`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                    >
                      {/* Glow on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"
                        style={{ backgroundColor: `${accentColor}15` }}
                      />
                      <div className="relative z-10 text-left">
                        <stat.icon className="w-5 h-5 mb-2" style={{ color: accentColor }} />
                        <div className="text-2xl font-bold" style={{ color: accentColor }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-dainamics-light/60">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* BOUTONS - STYLE EXPERTISE IA */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="group font-semibold w-full sm:w-auto"
                      style={{ 
                        backgroundColor: accentColor,
                        color: 'white',
                        border: 'none'
                      }}
                    >
                      <a href="#industries" className="flex items-center">
                        DÉCOUVRIR LES INDUSTRIES
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="font-semibold w-full sm:w-auto"
                      style={{ 
                        borderColor: accentColor,
                        color: accentColor
                      }}
                    >
                      <a href="/contact">
                        DIAGNOSTIC GRATUIT
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Stats Card - Droite - STYLE EXPERTISE IA AMÉLIORÉ */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isHeroInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ perspective: 1000 }}
              >
                <div className="relative rounded-2xl p-8 backdrop-blur-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}10, transparent)`,
                    border: `1px solid ${accentColor}30`
                  }}
                >
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full filter blur-3xl"
                    style={{ backgroundColor: `${accentColor}30` }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-dainamics-light mb-8 text-center">
                      Pourquoi par Industrie ?
                    </h3>

                    {/* Grid 2x2 avec icônes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { 
                          icon: Award, 
                          title: 'Solutions Éprouvées', 
                          desc: 'Automatisations testées dans votre secteur',
                          color: '#10E4FF'
                        },
                        { 
                          icon: Shield, 
                          title: 'Conformité Garantie', 
                          desc: 'Respect des normes spécifiques (nLPD, SwissDec)',
                          color: '#10B981'
                        },
                        { 
                          icon: Clock, 
                          title: 'ROI Rapide', 
                          desc: 'Implémentation 2-6 semaines, ROI < 6 mois',
                          color: '#F59E0B'
                        },
                        { 
                          icon: HeadphonesIcon, 
                          title: 'Support Expert', 
                          desc: 'Équipe connaissant vos défis métier',
                          color: '#6366F1'
                        }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="relative p-4 rounded-xl group"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}08, transparent)`,
                            border: `1px solid ${item.color}20`
                          }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {/* Glow on hover */}
                          <motion.div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)`
                            }}
                          />

                          <div className="relative z-10">
                            {/* Icône avec background coloré */}
                            <motion.div 
                              className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                              style={{
                                backgroundColor: `${item.color}15`,
                                border: `1px solid ${item.color}30`
                              }}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <item.icon 
                                className="h-6 w-6" 
                                style={{ color: item.color }}
                              />
                            </motion.div>

                            <div className="text-dainamics-light font-semibold mb-2 text-sm">
                              {item.title}
                            </div>
                            <div className="text-dainamics-light/70 text-xs leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2 Colonnes Layout - STYLE AMÉLIORÉ */}
        <section id="industries" className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-gradient">Sélectionnez</span>{' '}
                <span className="text-gradient-primary glow">Votre Industrie</span>
              </h2>
              <p className="text-dainamics-light/70 text-lg max-w-2xl mx-auto">
                Cliquez sur votre secteur pour découvrir les solutions adaptées à vos défis.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* GAUCHE : Liste Industries - STYLE AMÉLIORÉ */}
              <div className="lg:w-1/3">
                <div className="space-y-2 sticky top-24">
                  {industryData.map((industry, idx) => {
                    const solutionCount = solutions.filter(s => 
                      s.industries.some(i => i.toLowerCase().includes(industry.name.toLowerCase()))
                    ).length;

                    const isSelected = selectedIndustry === industry.name;

                    return (
                      <motion.button
                        key={industry.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => setSelectedIndustry(isSelected ? null : industry.name)}
                        className="w-full text-left p-4 rounded-lg transition-all duration-300"
                        style={{
                          background: isSelected 
                            ? `linear-gradient(135deg, ${industry.color}20, transparent)`
                            : 'transparent',
                          border: `1px solid ${isSelected ? `${industry.color}50` : '#ffffff10'}`
                        }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${industry.color}20`,
                              border: `1px solid ${industry.color}40`
                            }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                          >
                            <industry.icon className="h-5 w-5" style={{ color: industry.color }} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div 
                              className="font-semibold mb-1"
                              style={{ color: isSelected ? industry.color : '#F1F5F9' }}
                            >
                              {industry.name}
                            </div>
                            <div className="text-xs text-dainamics-light/60 truncate">
                              {industry.desc}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Badge 
                              variant="outline"
                              style={{ 
                                borderColor: industry.color,
                                color: industry.color,
                                fontSize: '0.65rem'
                              }}
                            >
                              {solutionCount}
                            </Badge>
                            <ArrowRight 
                              className="h-4 w-4 transition-transform" 
                              style={{ 
                                color: isSelected ? industry.color : '#9CA3AF',
                                transform: isSelected ? 'rotate(90deg)' : 'rotate(0deg)'
                              }}
                            />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* DROITE : Détails Solutions */}
              <div className="lg:w-2/3">
                {!selectedIndustry ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}08, transparent)`,
                      border: `1px solid ${accentColor}20`
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Target className="h-16 w-16 mb-4" style={{ color: `${accentColor}60` }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-dainamics-light mb-3">
                      Sélectionnez une Industrie
                    </h3>
                    <p className="text-dainamics-light/60 max-w-md">
                      Cliquez sur un secteur dans la liste de gauche pour découvrir les solutions 
                      d'automatisation et d'IA adaptées à vos besoins spécifiques.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedIndustry}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl p-8"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}10, transparent)`,
                      border: `1px solid ${accentColor}30`
                    }}
                  >
                    {/* Header industrie sélectionnée */}
                    <div className="flex items-center justify-between mb-8 pb-6" 
                      style={{ borderBottom: `1px solid ${accentColor}20` }}
                    >
                      <div className="flex items-center gap-4">
                        {(() => {
                          const industry = industryData.find(i => i.name === selectedIndustry);
                          if (!industry) return null;
                          return (
                            <>
                              <motion.div
                                className="w-14 h-14 rounded-lg flex items-center justify-center"
                                style={{
                                  backgroundColor: `${industry.color}20`,
                                  border: `2px solid ${industry.color}60`
                                }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                <industry.icon className="h-7 w-7" style={{ color: industry.color }} />
                              </motion.div>
                              <div>
                                <h3 className="text-2xl font-bold text-dainamics-light mb-1">
                                  {industry.name}
                                </h3>
                                <p className="text-dainamics-light/60 text-sm">{industry.desc}</p>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedIndustry(null)}
                        className="text-dainamics-light/60 hover:text-dainamics-light hover:bg-dainamics-light/5"
                      >
                        Fermer
                      </Button>
                    </div>

                    {/* Solutions - STYLE AMÉLIORÉ */}
                    {filteredSolutions.length > 0 ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap className="h-5 w-5" style={{ color: accentColor }} />
                          <h4 className="text-lg font-semibold text-dainamics-light">
                            {filteredSolutions.length} Solution{filteredSolutions.length > 1 ? 's' : ''} Disponible{filteredSolutions.length > 1 ? 's' : ''}
                          </h4>
                        </div>

                        {filteredSolutions.map((solution, idx) => (
                          <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, x: -5 }}
                            onClick={() => handleOpenModal(solution)}
                            className="p-6 rounded-xl cursor-pointer group relative overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${categoryColors[solution.category]}08, transparent)`,
                              border: `1px solid ${categoryColors[solution.category]}20`
                            }}
                          >
                            {/* Hover glow */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: `radial-gradient(circle at right, ${categoryColors[solution.category]}15, transparent 70%)`
                              }}
                            />

                            <div className="relative z-10">
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1">
                                  <h5 className="font-bold text-dainamics-light text-lg mb-2 group-hover:translate-x-1 transition-transform">
                                    {solution.title}
                                  </h5>
                                  <p className="text-sm text-dainamics-light/70 mb-3">
                                    {solution.tagline}
                                  </p>
                                </div>
                                <Badge 
                                  style={{ 
                                    backgroundColor: `${categoryColors[solution.category]}20`,
                                    color: categoryColors[solution.category],
                                    borderColor: `${categoryColors[solution.category]}40`,
                                    fontSize: '0.7rem'
                                  }}
                                >
                                  {solution.category.toUpperCase()}
                                </Badge>
                              </div>

                              {/* ROI */}
                              <div className="flex items-center justify-between text-sm pt-3" 
                                style={{ borderTop: `1px solid ${categoryColors[solution.category]}20` }}
                              >
                                <div className="flex items-center gap-4">
                                  {solution.outcomes.timeGained && (
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4" style={{ color: '#10B981' }} />
                                      <span className="text-dainamics-light/60">
                                        {solution.outcomes.timeGained}
                                      </span>
                                    </div>
                                  )}
                                  {solution.outcomes.moneySaved && (
                                    <div className="flex items-center gap-2">
                                      <TrendingUp className="w-4 h-4" style={{ color: '#10B981' }} />
                                      <span className="text-dainamics-light/60">
                                        {solution.outcomes.moneySaved}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <motion.span 
                                  className="font-medium flex items-center gap-1"
                                  style={{ color: categoryColors[solution.category] }}
                                  whileHover={{ x: 3 }}
                                >
                                  Voir détails
                                  <ArrowRight className="w-4 h-4" />
                                </motion.span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-dainamics-light/60">
                          Aucune solution spécifique pour cette industrie actuellement.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final - STYLE EXPERTISE IA */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-16 rounded-3xl overflow-hidden"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${accentColor}20, transparent)`,
                border: `1px solid ${accentColor}40`
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
                style={{ backgroundColor: accentColor }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: accentColor }} />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Votre Industrie <br />
                  <span style={{ color: accentColor }}>Mérite une Solution Sur Mesure</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Diagnostic gratuit de 30 minutes pour identifier les opportunités d'automatisation 
                  spécifiques à votre secteur
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      size="lg"
                      className="group"
                      style={{ 
                        backgroundColor: accentColor,
                        color: 'white',
                        padding: '1.5rem 3rem',
                        fontSize: '1.125rem'
                      }}
                    >
                      <a href="/contact" className="flex items-center">
                        RÉSERVER MON DIAGNOSTIC
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      style={{ 
                        borderColor: '#F1F5F9',
                        color: '#F1F5F9',
                        padding: '1.5rem 3rem',
                        fontSize: '1.125rem'
                      }}
                    >
                      <a href="/solutions">
                        TOUTES LES SOLUTIONS
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Solution */}
      <SolutionModal 
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}