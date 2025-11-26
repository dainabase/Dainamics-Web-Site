import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Clock, CheckCircle2, Target, Rocket, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';
import { quickWinSolutions } from '@/data/solutions';

export default function QuickWins() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  const whyRef = useRef(null);
  const isWhyInView = useInView(whyRef, { once: true, amount: 0.3 });
  
  const solutionsRef = useRef(null);
  const areSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.1 });

  // Scroll animations avec parallax
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  // Smooth spring animations
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get Quick Win solutions
  const quickWins = quickWinSolutions;

  // Group by category
  const quickWinsByCategory = {
    ia: quickWins.filter(s => s.category === 'ia'),
    automatisation: quickWins.filter(s => s.category === 'automatisation'),
    developpement: quickWins.filter(s => s.category === 'developpement')
  };

  const categoryLabels = {
    ia: 'Intelligence Artificielle',
    automatisation: 'Automatisation',
    developpement: 'Développement'
  };

  const categoryColors = {
    ia: '#6366F1',
    automatisation: '#10E4FF',
    developpement: '#FF5A00'
  };

  // Variants d'animation avancés
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
        damping: 15,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main className="relative z-10">
        {/* Hero Section avec Parallax - PLUS D'ESPACE EN HAUT */}
        <section ref={heroRef} className="relative pt-32 md:pt-48 pb-20 md:pb-24 overflow-hidden">
          {/* Éléments flottants en arrière-plan avec parallax */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-dainamics-success/10 blur-3xl"
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
            className="absolute top-40 right-20 w-40 h-40 rounded-full bg-dainamics-primary/10 blur-3xl"
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
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full"
              style={{ scale: smoothScale, opacity }}
            >
              {/* Texte - Gauche avec stagger */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-dainamics-success/10 border border-dainamics-success/30 rounded-full backdrop-blur-sm">
                    <Zap className="h-4 w-4 text-dainamics-success mr-2" />
                    <span className="text-dainamics-success font-semibold tracking-wide uppercase text-sm">
                      Quick Wins
                    </span>
                  </span>
                </motion.div>

                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                >
                  <span className="text-gradient">ROI Garanti</span> <br />
                  <motion.span 
                    className="text-gradient-primary glow inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    en Moins de 6 Mois
                  </motion.span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="text-dainamics-light/80 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                >
                  Des solutions d'automatisation et d'IA qui génèrent des résultats immédiats. 
                  Implémentation rapide, investissement réduit, impact mesurable.
                </motion.p>

                {/* Stats rapides avec animations entrantes */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  {[
                    { value: '2-6', label: 'Semaines' },
                    { value: '<6', label: 'Mois ROI' },
                    { value: quickWins.length, label: 'Solutions' }
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
                      <div className="text-3xl font-bold text-dainamics-success">
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
                      className="bg-dainamics-success hover:bg-dainamics-success/90 text-white btn-glow font-semibold"
                    >
                      <a href="#quick-wins">
                        VOIR LES QUICK WINS
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

              {/* Animation Timeline - Droite avec 3D effects */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isHeroInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ 
                  perspective: 1000,
                  y: useTransform(scrollYProgress, [0, 0.3], [0, -50])
                }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* ROI Timeline Animation */}
                  <div className="glass-morphism rounded-xl p-8 border border-dainamics-success/20 backdrop-blur-xl">
                    <motion.div 
                      className="text-center mb-8"
                      initial={{ opacity: 0 }}
                      animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-dainamics-light mb-2 flex items-center justify-center gap-2">
                        <Sparkles className="h-6 w-6 text-dainamics-success" />
                        Timeline Typique
                      </h3>
                      <p className="text-dainamics-light/60 text-sm">
                        Du déploiement au ROI complet
                      </p>
                    </motion.div>

                    {/* Timeline verticale avec animations */}
                    <div className="relative">
                      {/* Ligne verticale animée */}
                      <motion.div 
                        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-dainamics-success via-dainamics-success/50 to-transparent"
                        initial={{ height: 0 }}
                        animate={isHeroInView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />

                      {/* Étapes avec stagger et scale effects */}
                      <div className="space-y-8">
                        {[
                          { icon: Rocket, week: 'Semaine 1-2', title: 'Déploiement', desc: 'Configuration et mise en production rapide', delay: 0.6 },
                          { icon: Target, week: 'Semaine 3-4', title: 'Optimisation', desc: 'Ajustements et amélioration continue', delay: 0.8 },
                          { icon: TrendingUp, week: 'Mois 2-3', title: 'Résultats Visibles', desc: 'Gains mesurables et adoption complète', delay: 1.0 },
                          { icon: CheckCircle2, week: 'Mois 4-6', title: 'ROI Atteint', desc: 'Retour sur investissement complet', delay: 1.2, special: true }
                        ].map((step, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: step.delay,
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{ x: 10 }}
                          >
                            <motion.div 
                              className={`flex-shrink-0 w-16 h-16 rounded-full ${
                                step.special 
                                  ? 'bg-gradient-to-br from-dainamics-success to-dainamics-success/50 shadow-lg shadow-dainamics-success/50' 
                                  : 'bg-dainamics-success/20'
                              } border-2 border-dainamics-success flex items-center justify-center relative z-10`}
                              whileHover={{ 
                                scale: 1.1,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <step.icon className={`h-6 w-6 ${step.special ? 'text-white' : 'text-dainamics-success'}`} />
                            </motion.div>
                            <div className="pt-2">
                              <div className="text-dainamics-success font-semibold mb-1">{step.week}</div>
                              <div className="text-dainamics-light font-medium mb-1">{step.title}</div>
                              <div className="text-dainamics-light/60 text-sm">{step.desc}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glow effects animés */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-40 h-40 bg-dainamics-success/20 rounded-full filter blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-dainamics-success/15 rounded-full filter blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section "Pourquoi Quick Wins" avec parallax inverse */}
        <section ref={whyRef} className="relative py-20 md:py-32 overflow-hidden">
          {/* Particules flottantes */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: useTransform(scrollYProgress, [0.2, 0.5], [0, -100]) }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-dainamics-success/20 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${20 + i * 10}%`
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>

          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              {/* Texte - Droite */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={isWhyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gradient">Pourquoi Commencer</span> <br />
                  <motion.span 
                    className="text-gradient-primary glow inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    Par les Quick Wins ?
                  </motion.span>
                </motion.h2>

                <motion.p 
                  className="text-dainamics-light/80 text-lg mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isWhyInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Les Quick Wins sont conçus pour les PME qui veulent prouver la valeur de l'IA 
                  et de l'automatisation sans prendre de risques majeurs.
                </motion.p>

                {/* Bénéfices liste avec stagger */}
                <motion.div 
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isWhyInView ? "visible" : "hidden"}
                >
                  {[
                    { title: 'Implémentation Rapide', desc: '2-6 semaines du concept à la production, pas de projets interminables' },
                    { title: 'Investissement Maîtrisé', desc: 'Budget prévisible, pas de surprises, ROI garanti en moins de 6 mois' },
                    { title: 'Risque Minimal', desc: 'Solutions éprouvées, processus déjà automatisés avec succès chez d\'autres PME' },
                    { title: 'Impact Immédiat', desc: 'Gains mesurables dès les premières semaines, satisfaction équipe garantie' }
                  ].map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-dainamics-success/20 flex items-center justify-center mt-1"
                        whileHover={{ 
                          scale: 1.2,
                          backgroundColor: "rgba(16,185,129,0.4)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-dainamics-success" />
                      </motion.div>
                      <div>
                        <div className="text-dainamics-light font-medium mb-1">{benefit.title}</div>
                        <div className="text-dainamics-light/60">{benefit.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow font-semibold"
                  >
                    <a href="/contact">
                      DÉMARRER AVEC UN QUICK WIN
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Animation Avant/Après - Gauche */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Avant - avec shake effect */}
                  <motion.div
                    className="glass-morphism rounded-xl p-6 border border-dainamics-error/30"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5
                    }}
                    style={{ perspective: 1000 }}
                  >
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-dainamics-error/20 rounded-full mb-2">
                        <span className="text-dainamics-error font-semibold text-sm">AVANT</span>
                      </div>
                      <h4 className="text-lg font-bold text-dainamics-light">Processus Manuel</h4>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: Clock, text: '10-15h/semaine perdues' },
                        { icon: TrendingUp, text: 'Taux d\'erreur élevé', rotate: true },
                        { icon: Zap, text: 'Équipe frustrée' },
                        { icon: Target, text: 'ROI impossible à prévoir' }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-dainamics-light/70"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isWhyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <item.icon className={`h-4 w-4 text-dainamics-error flex-shrink-0 ${item.rotate ? 'rotate-180' : ''}`} />
                          <span className="text-sm">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Après - avec glow effect */}
                  <motion.div
                    className="glass-morphism rounded-xl p-6 border border-dainamics-success/30 shadow-lg shadow-dainamics-success/20"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: -5,
                      boxShadow: "0 20px 60px rgba(16,185,129,0.4)"
                    }}
                    style={{ perspective: 1000 }}
                  >
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-dainamics-success/20 rounded-full mb-2">
                        <span className="text-dainamics-success font-semibold text-sm">APRÈS</span>
                      </div>
                      <h4 className="text-lg font-bold text-dainamics-light">Quick Win Déployé</h4>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: Clock, text: '80-95% temps gagné' },
                        { icon: TrendingUp, text: 'Zéro erreur humaine' },
                        { icon: Zap, text: 'Équipe libérée' },
                        { icon: CheckCircle2, text: 'ROI < 6 mois garanti' }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-dainamics-light/70"
                          initial={{ opacity: 0, x: 10 }}
                          animate={isWhyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                          >
                            <item.icon className="h-4 w-4 text-dainamics-success flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Grid des Quick Wins Solutions avec scroll animations */}
        <section id="quick-wins" ref={solutionsRef} className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={areSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gradient">Nos {quickWins.length} Solutions</span> <br />
                <span className="text-gradient-primary glow">Quick Wins</span>
              </motion.h2>
              <p className="text-dainamics-light/70 text-lg max-w-2xl mx-auto">
                Choisissez la solution qui correspond à votre besoin immédiat. 
                ROI garanti en moins de 6 mois.
              </p>
            </motion.div>

            {/* Par catégorie avec stagger */}
            {Object.entries(quickWinsByCategory).map(([category, solutions], idx) => {
              if (solutions.length === 0) return null;

              return (
                <motion.div 
                  key={category} 
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {/* Titre catégorie */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                      <span
                        className="w-1 h-8 rounded-full"
                        style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
                      />
                      <span className="text-dainamics-light">
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </span>
                    </h3>
                  </motion.div>

                  {/* Grid solutions avec animations 3D */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, sIdx) => (
                      <motion.div
                        key={solution.id}
                        initial={{ opacity: 0, y: 30, rotateX: -10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: sIdx * 0.1,
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
                      >
                        <div className="glass-morphism rounded-xl p-6 h-full flex flex-col group hover:border-dainamics-success/30 transition-all duration-300">
                          {/* Badge Quick Win */}
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                backgroundColor: `${categoryColors[category as keyof typeof categoryColors]}20`,
                                color: categoryColors[category as keyof typeof categoryColors]
                              }}
                            >
                              {categoryLabels[category as keyof typeof categoryLabels]}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 bg-dainamics-success/20 border border-dainamics-success/30 rounded-full">
                              <Zap className="h-3 w-3 text-dainamics-success" />
                            </span>
                          </div>

                          {/* Titre */}
                          <h4 className="text-xl font-bold text-dainamics-light mb-3 group-hover:text-dainamics-success transition-colors">
                            {solution.title}
                          </h4>

                          {/* Tagline */}
                          <p className="text-dainamics-light/70 mb-4 text-sm">
                            {solution.tagline}
                          </p>

                          {/* ROI */}
                          <div className="mt-auto pt-4 border-t border-dainamics-light/10">
                            <div className="flex items-center justify-between text-sm">
                              <div>
                                <div className="text-dainamics-light/60 mb-1">Gain temps</div>
                                <div className="text-dainamics-success font-semibold">
                                  {solution.outcomes.timeGained || 'Variable'}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-dainamics-light/60 mb-1">Économies</div>
                                <div className="text-dainamics-success font-semibold">
                                  {solution.outcomes.moneySaved || 'Sur mesure'}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* CTA avec animation */}
                          <motion.div 
                            className="mt-4"
                            whileHover={{ x: 5 }}
                          >
                            <Button
                              asChild
                              variant="link"
                              className="text-dainamics-success hover:text-dainamics-success/90 p-0 h-auto font-medium group-hover:underline"
                            >
                              <a href={`/solutions#${solution.id}`}>
                                En savoir plus
                                <motion.div
                                  className="inline-block ml-2"
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <ArrowRight className="h-4 w-4" />
                                </motion.div>
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Final avec magnetic effect */}
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
                <span className="text-gradient">Prêt à Démarrer</span> <br />
                <span className="text-gradient-primary glow">Votre Quick Win ?</span>
              </motion.h2>
              <motion.p 
                className="text-dainamics-light/70 text-lg max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Diagnostic gratuit de 30 minutes pour identifier votre Quick Win idéal. 
                Aucun engagement.
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
                    className="bg-dainamics-success hover:bg-dainamics-success/90 text-white btn-glow font-semibold"
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
