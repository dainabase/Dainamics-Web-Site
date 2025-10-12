import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Building2, Store, Briefcase, Landmark, Scale, 
  Home, TrendingUp, Package, Factory, Users, Laptop, 
  ShoppingCart, Target, Sparkles, CheckCircle2, Zap
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { solutions } from '@/data/solutions';

// Extract unique industries from solutions
const extractIndustries = () => {
  const allIndustries = solutions.flatMap(s => s.industries);
  const uniqueIndustries = [...new Set(allIndustries)];
  return uniqueIndustries.sort();
};

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
  
  const industriesRef = useRef(null);
  const areIndustriesInView = useInView(industriesRef, { once: true, amount: 0.1 });

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
        <section ref={heroRef} className="relative min-h-[80vh] py-32 overflow-hidden">
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

          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Texte - Gauche avec stagger */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-dainamics-accent/10 border border-dainamics-accent/30 rounded-full backdrop-blur-sm">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Building2 className="h-4 w-4 text-dainamics-accent mr-2" />
                    </motion.div>
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
                    { value: '15+', label: 'Secteurs' }
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
                      <motion.div 
                        className="text-3xl font-bold text-dainamics-accent"
                        animate={{ 
                          textShadow: [
                            "0 0 10px rgba(16,228,255,0.5)",
                            "0 0 20px rgba(16,228,255,0.8)",
                            "0 0 10px rgba(16,228,255,0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {stat.value}
                      </motion.div>
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
                      className="bg-dainamics-accent hover:bg-dainamics-accent/90 text-dainamics-background btn-glow font-semibold power-pulse"
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

              {/* Animation Industries - Droite avec 3D effects */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isHeroInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ perspective: 1000 }}
              >
                <div className="glass-morphism rounded-xl p-8 border border-dainamics-accent/20 backdrop-blur-xl">
                  <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-dainamics-light mb-2 flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="h-6 w-6 text-dainamics-accent" />
                      </motion.div>
                      Votre Secteur, Nos Solutions
                    </h3>
                    <p className="text-dainamics-light/60 text-sm">
                      Solutions éprouvées par secteur d'activité
                    </p>
                  </motion.div>

                  {/* Grid d'icônes industries flottantes */}
                  <div className="grid grid-cols-4 gap-6">
                    {industryData.slice(0, 8).map((industry, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isHeroInView ? { 
                          opacity: 1, 
                          scale: 1,
                          y: [-5, 5, -5]
                        } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          opacity: { delay: 0.8 + idx * 0.1 },
                          scale: { delay: 0.8 + idx * 0.1, type: "spring" },
                          y: { 
                            duration: 2 + idx * 0.3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                        className="flex items-center justify-center"
                      >
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${industry.color}20`,
                            border: `1px solid ${industry.color}40`
                          }}
                        >
                          <industry.icon 
                            className="h-6 w-6" 
                            style={{ color: industry.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats au centre */}
                  <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-dainamics-light/60 text-sm mb-2">
                      En moyenne par secteur
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <div>
                        <div className="text-2xl font-bold text-dainamics-success">3-5</div>
                        <div className="text-xs text-dainamics-light/60">Solutions</div>
                      </div>
                      <div className="w-px h-8 bg-dainamics-light/20" />
                      <div>
                        <div className="text-2xl font-bold text-dainamics-accent">2-6</div>
                        <div className="text-xs text-dainamics-light/60">Semaines</div>
                      </div>
                      <div className="w-px h-8 bg-dainamics-light/20" />
                      <div>
                        <div className="text-2xl font-bold text-dainamics-warning">ROI</div>
                        <div className="text-xs text-dainamics-light/60">&lt; 6 mois</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Grid Industries avec scroll animations */}
        <section id="industries" ref={industriesRef} className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={areIndustriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gradient">Explorez par</span> <br />
                <span className="text-gradient-primary glow">Industrie</span>
              </motion.h2>
              <p className="text-dainamics-light/70 text-lg max-w-2xl mx-auto">
                Sélectionnez votre secteur pour découvrir les solutions adaptées à vos défis spécifiques.
              </p>
            </motion.div>

            {/* Grid industries avec animations 3D */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryData.map((industry, idx) => {
                const solutionCount = solutions.filter(s => 
                  s.industries.some(i => i.toLowerCase().includes(industry.name.toLowerCase()))
                ).length;

                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                      transition: { duration: 0.3 }
                    }}
                    style={{ perspective: 1000 }}
                    onClick={() => setSelectedIndustry(
                      selectedIndustry === industry.name ? null : industry.name
                    )}
                    className="cursor-pointer"
                  >
                    <div 
                      className={`glass-morphism rounded-xl p-6 h-full group transition-all duration-300 ${
                        selectedIndustry === industry.name 
                          ? 'border-dainamics-accent/50 shadow-lg shadow-dainamics-accent/20' 
                          : 'hover:border-dainamics-accent/30'
                      }`}
                    >
                      {/* Icon avec rotation */}
                      <motion.div 
                        className="mb-4"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <div 
                          className="w-16 h-16 rounded-lg flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${industry.color}20`,
                            border: `1px solid ${industry.color}40`
                          }}
                        >
                          <industry.icon 
                            className="h-8 w-8" 
                            style={{ color: industry.color }}
                          />
                        </div>
                      </motion.div>

                      {/* Titre */}
                      <h3 className="text-xl font-bold text-dainamics-light mb-2 group-hover:text-dainamics-accent transition-colors">
                        {industry.name}
                      </h3>

                      {/* Description */}
                      <p className="text-dainamics-light/70 text-sm mb-4">
                        {industry.desc}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-dainamics-light/10">
                        <div className="flex items-center gap-2 text-sm">
                          <motion.div
                            animate={selectedIndustry === industry.name ? {
                              boxShadow: [
                                "0 0 10px rgba(16,228,255,0.3)",
                                "0 0 20px rgba(16,228,255,0.5)",
                                "0 0 10px rgba(16,228,255,0.3)"
                              ]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Zap className="h-4 w-4 text-dainamics-accent" />
                          </motion.div>
                          <span className="text-dainamics-accent font-semibold">
                            {solutionCount} solutions
                          </span>
                        </div>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-5 w-5 text-dainamics-light/40 group-hover:text-dainamics-accent transition-colors" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Solutions filtrées */}
            {selectedIndustry && filteredSolutions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16"
              >
                <div className="glass-morphism rounded-xl p-8 border border-dainamics-accent/30">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-dainamics-light flex items-center gap-3">
                      <Target className="h-6 w-6 text-dainamics-accent" />
                      Solutions pour {selectedIndustry}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedIndustry(null)}
                      className="border-dainamics-light/20 text-dainamics-light hover:bg-dainamics-light/5"
                    >
                      Voir toutes
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredSolutions.map((solution, idx) => (
                      <motion.div
                        key={solution.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-dainamics-light/5 transition-all"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <CheckCircle2 className="h-6 w-6 text-dainamics-success flex-shrink-0 mt-1" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-dainamics-light mb-1">
                            {solution.title}
                          </h4>
                          <p className="text-sm text-dainamics-light/60 mb-2">
                            {solution.tagline}
                          </p>
                          <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="text-dainamics-accent hover:text-dainamics-accent/90 p-0 h-auto"
                          >
                            <a href={`/solutions#${solution.id}`}>
                              En savoir plus →
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
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
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gradient">Votre Industrie</span> <br />
                <span className="text-gradient-primary glow">Mérite une Solution Sur Mesure</span>
              </motion.h2>
              <motion.p 
                className="text-dainamics-light/70 text-lg max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Diagnostic gratuit de 30 minutes pour identifier les opportunités d'automatisation 
                spécifiques à votre secteur.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-dainamics-accent hover:bg-dainamics-accent/90 text-dainamics-background btn-glow font-semibold power-pulse"
                  >
                    <a href="/contact">
                      RÉSERVER MON DIAGNOSTIC
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
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
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}