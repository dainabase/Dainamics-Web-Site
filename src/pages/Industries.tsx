import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Building2, Store, Briefcase, Landmark, Scale, 
  Home, TrendingUp, Package, Factory, Users, Laptop, 
  ShoppingCart, Target, CheckCircle2, Zap
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { solutions } from '@/data/solutions';

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

export default function Industries() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

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

  // Variants d'animation
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
        {/* Hero Section avec Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-24 overflow-hidden">
          {/* Éléments flottants en arrière-plan */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-dainamics-primary/10 blur-3xl"
            style={{ y: smoothY }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 rounded-full bg-dainamics-accent/10 blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <div className="container mx-auto px-4 md:px-8 min-h-[60vh] flex items-center">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
              {/* Texte - Gauche avec stagger */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-dainamics-accent/10 border border-dainamics-accent/30 rounded-full backdrop-blur-sm">
                    <Building2 className="h-4 w-4 text-dainamics-accent mr-2" />
                    <span className="text-dainamics-accent font-semibold tracking-wide uppercase text-sm">
                      Industries
                    </span>
                  </span>
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
                  className="text-dainamics-light/80 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                >
                  Chaque secteur a ses défis spécifiques. Découvrez les solutions d'IA et 
                  d'automatisation conçues pour répondre aux besoins de votre industrie.
                </motion.p>

                {/* Stats rapides */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  {[
                    { value: industryData.length, label: 'Industries' },
                    { value: solutions.length, label: 'Solutions' },
                    { value: '2-6', label: 'Semaines' }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center lg:text-left"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-dainamics-accent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-dainamics-light/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-dainamics-accent hover:bg-dainamics-accent/90 text-dainamics-background btn-glow font-semibold"
                    >
                      <a href="#industries">
                        DÉCOUVRIR LES INDUSTRIES
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-dainamics-light/20 text-dainamics-light hover:bg-dainamics-light/5 font-semibold"
                    >
                      <a href="/contact">
                        DIAGNOSTIC GRATUIT
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Stats Card - Droite */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isHeroInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ perspective: 1000 }}
              >
                <div className="glass-morphism rounded-xl p-8 border border-dainamics-accent/20 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-dainamics-light mb-6 text-center">
                    Pourquoi par Industrie ?
                  </h3>

                  <div className="space-y-4">
                    {[
                      { title: 'Solutions Éprouvées', desc: 'Automatisations testées dans votre secteur' },
                      { title: 'Conformité Garantie', desc: 'Respect des normes spécifiques (nLPD, SwissDec)' },
                      { title: 'ROI Rapide', desc: 'Implémentation 2-6 semaines, ROI < 6 mois' },
                      { title: 'Support Expert', desc: 'Équipe connaissant vos défis métier' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-dainamics-accent flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-dainamics-light font-medium mb-1">{item.title}</div>
                          <div className="text-dainamics-light/60 text-sm">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2 Colonnes Layout : Liste Gauche + Détails Droite */}
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
              {/* GAUCHE : Liste Industries compacte */}
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
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          isSelected
                            ? 'bg-dainamics-accent/20 border border-dainamics-accent/50'
                            : 'glass-morphism border border-dainamics-light/10 hover:border-dainamics-accent/30 hover:bg-dainamics-light/5'
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${industry.color}20`,
                              border: `1px solid ${industry.color}40`
                            }}
                          >
                            <industry.icon className="h-5 w-5" style={{ color: industry.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold mb-1 ${
                              isSelected ? 'text-dainamics-accent' : 'text-dainamics-light'
                            }`}>
                              {industry.name}
                            </div>
                            <div className="text-xs text-dainamics-light/60 truncate">
                              {industry.desc}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xs font-semibold text-dainamics-accent">
                              {solutionCount}
                            </span>
                            <ArrowRight className={`h-4 w-4 transition-transform ${
                              isSelected ? 'rotate-90 text-dainamics-accent' : 'text-dainamics-light/40'
                            }`} />
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
                    className="glass-morphism rounded-xl p-12 border border-dainamics-light/10 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                  >
                    <Target className="h-16 w-16 text-dainamics-accent/40 mb-4" />
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
                    className="glass-morphism rounded-xl p-8 border border-dainamics-accent/30"
                  >
                    {/* Header industrie sélectionnée */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-dainamics-light/10">
                      <div className="flex items-center gap-4">
                        {(() => {
                          const industry = industryData.find(i => i.name === selectedIndustry);
                          if (!industry) return null;
                          return (
                            <>
                              <div
                                className="w-14 h-14 rounded-lg flex items-center justify-center"
                                style={{
                                  backgroundColor: `${industry.color}20`,
                                  border: `2px solid ${industry.color}60`
                                }}
                              >
                                <industry.icon className="h-7 w-7" style={{ color: industry.color }} />
                              </div>
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

                    {/* Solutions */}
                    {filteredSolutions.length > 0 ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap className="h-5 w-5 text-dainamics-accent" />
                          <h4 className="text-lg font-semibold text-dainamics-light">
                            {filteredSolutions.length} Solution{filteredSolutions.length > 1 ? 's' : ''} Disponible{filteredSolutions.length > 1 ? 's' : ''}
                          </h4>
                        </div>

                        {filteredSolutions.map((solution, idx) => (
                          <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-5 rounded-lg border border-dainamics-light/10 hover:border-dainamics-accent/30 hover:bg-dainamics-light/5 transition-all group"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div className="flex-1">
                                <h5 className="font-bold text-dainamics-light mb-2 group-hover:text-dainamics-accent transition-colors">
                                  {solution.title}
                                </h5>
                                <p className="text-sm text-dainamics-light/70 mb-3">
                                  {solution.tagline}
                                </p>
                              </div>
                              <span
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                                style={{
                                  backgroundColor: `${categoryColors[solution.category]}20`,
                                  color: categoryColors[solution.category]
                                }}
                              >
                                {solution.category.toUpperCase()}
                              </span>
                            </div>

                            {/* ROI */}
                            <div className="flex items-center justify-between text-sm pt-3 border-t border-dainamics-light/10">
                              <div className="flex items-center gap-4">
                                {solution.outcomes.timeGained && (
                                  <div>
                                    <span className="text-dainamics-light/60">Gain temps: </span>
                                    <span className="text-dainamics-success font-semibold">
                                      {solution.outcomes.timeGained}
                                    </span>
                                  </div>
                                )}
                                {solution.outcomes.moneySaved && (
                                  <div>
                                    <span className="text-dainamics-light/60">Économies: </span>
                                    <span className="text-dainamics-success font-semibold">
                                      {solution.outcomes.moneySaved}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <Button
                                asChild
                                variant="link"
                                size="sm"
                                className="text-dainamics-accent hover:text-dainamics-accent/90 p-0 h-auto group-hover:underline"
                              >
                                <a href={`/solutions#${solution.id}`}>
                                  Détails →
                                </a>
                              </Button>
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

        {/* CTA Final */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Votre Industrie</span> <br />
                <span className="text-gradient-primary glow">Mérite une Solution Sur Mesure</span>
              </h2>
              <p className="text-dainamics-light/70 text-lg max-w-2xl mx-auto mb-8">
                Diagnostic gratuit de 30 minutes pour identifier les opportunités d'automatisation 
                spécifiques à votre secteur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-dainamics-accent hover:bg-dainamics-accent/90 text-dainamics-background btn-glow font-semibold"
                  >
                    <a href="/contact">
                      RÉSERVER MON DIAGNOSTIC
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-dainamics-light/20 text-dainamics-light hover:bg-dainamics-light/5 font-semibold"
                  >
                    <a href="/solutions">
                      TOUTES LES SOLUTIONS
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
