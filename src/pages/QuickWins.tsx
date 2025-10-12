import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Clock, CheckCircle2, Target, Rocket } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { solutions, quickWinSolutions } from '@/data/solutions';

export default function QuickWins() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const whyRef = useRef(null);
  const isWhyInView = useInView(whyRef, { once: true, amount: 0.3 });

  const solutionsRef = useRef(null);
  const areSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.1 });

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

  return (
    <div className="min-h-screen bg-dainamics-background">
      <EnhancedGridBackground />
      <Navigation />

      <main className="relative">
        {/* Hero Section - 2 colonnes */}
        <section ref={heroRef} className="relative min-h-[80vh] py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Texte - Gauche */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-dainamics-success/10 border border-dainamics-success/30 rounded-full">
                    <Zap className="h-4 w-4 text-dainamics-success mr-2" />
                    <span className="text-dainamics-success font-semibold tracking-wide uppercase text-sm">
                      Quick Wins
                    </span>
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  <span className="text-gradient">ROI Garanti</span> <br />
                  <span className="text-gradient-primary glow">en Moins de 6 Mois</span>
                </h1>

                <p className="text-dainamics-light/80 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Des solutions d'automatisation et d'IA qui génèrent des résultats immédiats. 
                  Implémentation rapide, investissement réduit, impact mesurable.
                </p>

                {/* Stats rapides */}
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-dainamics-success">2-6</div>
                    <div className="text-sm text-dainamics-light/60">Semaines</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-dainamics-success">&lt;6</div>
                    <div className="text-sm text-dainamics-light/60">Mois ROI</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-dainamics-success">{quickWins.length}</div>
                    <div className="text-sm text-dainamics-light/60">Solutions</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-dainamics-success hover:bg-dainamics-success/90 text-white btn-glow font-semibold power-pulse"
                  >
                    <a href="#quick-wins">
                      VOIR LES QUICK WINS
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>

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
                </div>
              </motion.div>

              {/* Animation - Droite : Timeline ROI */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative">
                  {/* ROI Timeline Animation */}
                  <div className="glass-morphism rounded-xl p-8 border border-dainamics-success/20">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-dainamics-light mb-2">
                        Timeline Typique
                      </h3>
                      <p className="text-dainamics-light/60 text-sm">
                        Du déploiement au ROI complet
                      </p>
                    </div>

                    {/* Timeline verticale */}
                    <div className="relative">
                      {/* Ligne verticale */}
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dainamics-success via-dainamics-success/50 to-transparent"></div>

                      {/* Étapes */}
                      <div className="space-y-8">
                        {/* Semaine 1-2 : Déploiement */}
                        <motion.div
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-dainamics-success/20 border-2 border-dainamics-success flex items-center justify-center relative z-10">
                            <Rocket className="h-6 w-6 text-dainamics-success" />
                          </div>
                          <div className="pt-2">
                            <div className="text-dainamics-success font-semibold mb-1">Semaine 1-2</div>
                            <div className="text-dainamics-light font-medium mb-1">Déploiement</div>
                            <div className="text-dainamics-light/60 text-sm">
                              Configuration et mise en production rapide
                            </div>
                          </div>
                        </motion.div>

                        {/* Semaine 3-4 : Optimisation */}
                        <motion.div
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-dainamics-success/20 border-2 border-dainamics-success flex items-center justify-center relative z-10">
                            <Target className="h-6 w-6 text-dainamics-success" />
                          </div>
                          <div className="pt-2">
                            <div className="text-dainamics-success font-semibold mb-1">Semaine 3-4</div>
                            <div className="text-dainamics-light font-medium mb-1">Optimisation</div>
                            <div className="text-dainamics-light/60 text-sm">
                              Ajustements et amélioration continue
                            </div>
                          </div>
                        </motion.div>

                        {/* Mois 2-3 : Résultats Visibles */}
                        <motion.div
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                        >
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-dainamics-success/20 border-2 border-dainamics-success flex items-center justify-center relative z-10">
                            <TrendingUp className="h-6 w-6 text-dainamics-success" />
                          </div>
                          <div className="pt-2">
                            <div className="text-dainamics-success font-semibold mb-1">Mois 2-3</div>
                            <div className="text-dainamics-light font-medium mb-1">Résultats Visibles</div>
                            <div className="text-dainamics-light/60 text-sm">
                              Gains mesurables et adoption complète
                            </div>
                          </div>
                        </motion.div>

                        {/* Mois 4-6 : ROI Atteint */}
                        <motion.div
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        >
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-dainamics-success to-dainamics-success/50 border-2 border-dainamics-success flex items-center justify-center relative z-10 shadow-lg shadow-dainamics-success/50 animate-pulse-glow">
                            <CheckCircle2 className="h-6 w-6 text-white" />
                          </div>
                          <div className="pt-2">
                            <div className="text-dainamics-success font-semibold mb-1">Mois 4-6</div>
                            <div className="text-dainamics-light font-medium mb-1">ROI Atteint 🎯</div>
                            <div className="text-dainamics-light/60 text-sm">
                              Retour sur investissement complet
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Glow effects */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-dainamics-success/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dainamics-success/15 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section "Pourquoi Quick Wins" - 2 colonnes inversées */}
        <section ref={whyRef} className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              {/* Texte - Droite */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={isWhyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-gradient">Pourquoi Commencer</span> <br />
                  <span className="text-gradient-primary glow">Par les Quick Wins ?</span>
                </h2>

                <p className="text-dainamics-light/80 text-lg mb-8 leading-relaxed">
                  Les Quick Wins sont conçus pour les PME qui veulent prouver la valeur de l'IA 
                  et de l'automatisation sans prendre de risques majeurs.
                </p>

                {/* Bénéfices liste */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dainamics-success/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="h-5 w-5 text-dainamics-success" />
                    </div>
                    <div>
                      <div className="text-dainamics-light font-medium mb-1">
                        Implémentation Rapide
                      </div>
                      <div className="text-dainamics-light/60">
                        2-6 semaines du concept à la production, pas de projets interminables
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dainamics-success/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="h-5 w-5 text-dainamics-success" />
                    </div>
                    <div>
                      <div className="text-dainamics-light font-medium mb-1">
                        Investissement Maîtrisé
                      </div>
                      <div className="text-dainamics-light/60">
                        Budget prévisible, pas de surprises, ROI garanti en moins de 6 mois
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dainamics-success/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="h-5 w-5 text-dainamics-success" />
                    </div>
                    <div>
                      <div className="text-dainamics-light font-medium mb-1">
                        Risque Minimal
                      </div>
                      <div className="text-dainamics-light/60">
                        Solutions éprouvées, processus déjà automatisés avec succès chez d'autres PME
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dainamics-success/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="h-5 w-5 text-dainamics-success" />
                    </div>
                    <div>
                      <div className="text-dainamics-light font-medium mb-1">
                        Impact Immédiat
                      </div>
                      <div className="text-dainamics-light/60">
                        Gains mesurables dès les premières semaines, satisfaction équipe garantie
                      </div>
                    </div>
                  </div>
                </div>

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

              {/* Animation - Gauche : Comparaison Avant/Après */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Avant */}
                  <div className="glass-morphism rounded-xl p-6 border border-dainamics-error/30">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-dainamics-error/20 rounded-full mb-2">
                        <span className="text-dainamics-error font-semibold text-sm">AVANT</span>
                      </div>
                      <h4 className="text-lg font-bold text-dainamics-light">
                        Processus Manuel
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <Clock className="h-4 w-4 text-dainamics-error flex-shrink-0" />
                        <span className="text-sm">10-15h/semaine perdues</span>
                      </div>
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <TrendingUp className="h-4 w-4 text-dainamics-error flex-shrink-0 rotate-180" />
                        <span className="text-sm">Taux d'erreur élevé</span>
                      </div>
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <Zap className="h-4 w-4 text-dainamics-error flex-shrink-0" />
                        <span className="text-sm">Équipe frustrée</span>
                      </div>
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <Target className="h-4 w-4 text-dainamics-error flex-shrink-0" />
                        <span className="text-sm">ROI impossible à prévoir</span>
                      </div>
                    </div>
                  </div>

                  {/* Après */}
                  <div className="glass-morphism rounded-xl p-6 border border-dainamics-success/30 shadow-lg shadow-dainamics-success/20">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-dainamics-success/20 rounded-full mb-2">
                        <span className="text-dainamics-success font-semibold text-sm">APRÈS</span>
                      </div>
                      <h4 className="text-lg font-bold text-dainamics-light">
                        Quick Win Déployé
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <Clock className="h-4 w-4 text-dainamics-success flex-shrink-0" />
                        <span className="text-sm">80-95% temps gagné</span>
                      </div>
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <TrendingUp className="h-4 w-4 text-dainamics-success flex-shrink-0" />
                        <span className="text-sm">Zéro erreur humaine</span>
                      </div>
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <Zap className="h-4 w-4 text-dainamics-success flex-shrink-0" />
                        <span className="text-sm">Équipe libérée</span>
                      </div>
                      <div className="flex items-center gap-2 text-dainamics-light/70">
                        <CheckCircle2 className="h-4 w-4 text-dainamics-success flex-shrink-0" />
                        <span className="text-sm">ROI &lt; 6 mois garanti</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Grid des Quick Wins Solutions */}
        <section id="quick-wins" ref={solutionsRef} className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={areSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-gradient">Nos {quickWins.length} Solutions</span> <br />
                <span className="text-gradient-primary glow">Quick Wins</span>
              </h2>
              <p className="text-dainamics-light/70 text-lg max-w-2xl mx-auto">
                Choisissez la solution qui correspond à votre besoin immédiat. 
                ROI garanti en moins de 6 mois.
              </p>
            </motion.div>

            {/* Par catégorie */}
            {Object.entries(quickWinsByCategory).map(([category, solutions], idx) => {
              if (solutions.length === 0) return null;

              return (
                <div key={category} className="mb-16">
                  {/* Titre catégorie */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={areSolutionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                      <span
                        className="w-1 h-8 rounded-full"
                        style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
                      ></span>
                      <span className="text-dainamics-light">
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </span>
                    </h3>
                  </motion.div>

                  {/* Grid solutions */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, sIdx) => (
                      <motion.div
                        key={solution.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={areSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 + sIdx * 0.1 }}
                      >
                        <div className="glass-morphism rounded-xl p-6 h-full flex flex-col group hover:border-dainamics-success/30 transition-colors">
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
                            <span className="inline-flex items-center px-2 py-1 bg-dainamics-success/20 border border-dainamics-success/30 rounded-full animate-pulse-glow">
                              <Zap className="h-3 w-3 text-dainamics-success" />
                            </span>
                          </div>

                          {/* Titre */}
                          <h4 className="text-xl font-bold text-dainamics-light mb-3">
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
                                <div className="text-dainamics-light/60 mb-1">ROI</div>
                                <div className="text-dainamics-success font-semibold">
                                  {solution.roi.timeframe}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-dainamics-light/60 mb-1">Économies</div>
                                <div className="text-dainamics-success font-semibold">
                                  CHF {solution.roi.savings.toLocaleString('fr-CH')}/an
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="mt-4">
                            <Button
                              asChild
                              variant="link"
                              className="text-dainamics-success hover:text-dainamics-success/90 p-0 h-auto font-medium group-hover:underline"
                            >
                              <a href={`/solutions/${solution.id}`}>
                                En savoir plus
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
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
                <span className="text-gradient">Prêt à Démarrer</span> <br />
                <span className="text-gradient-primary glow">Votre Quick Win ?</span>
              </h2>
              <p className="text-dainamics-light/70 text-lg max-w-2xl mx-auto mb-8">
                Diagnostic gratuit de 30 minutes pour identifier votre Quick Win idéal. 
                Aucun engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-dainamics-success hover:bg-dainamics-success/90 text-white btn-glow font-semibold power-pulse"
                >
                  <a href="/contact">
                    RÉSERVER MON DIAGNOSTIC
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
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
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
