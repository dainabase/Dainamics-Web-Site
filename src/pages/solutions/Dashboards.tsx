import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database, Target, Bell, RefreshCw, Smartphone, Download, Users,
  TrendingUp, Factory, DollarSign, Monitor, ArrowRight,
  Check, X, Phone, Mail, BarChart, Activity, FileText,
  Calendar, AlertCircle, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const Dashboards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dashboards Analytiques Sur Mesure | DAINAMICS";
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-adaptive text-adaptive">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main className="relative z-10">
        {/* Section 1: Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Contenu */}
              <div>
                <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-dainamics-cta/10 border border-dainamics-cta/30 text-dainamics-cta text-sm font-medium mb-6">
                  Développement Sur Mesure
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
                >
                  Fini les 10 Fichiers
                  <br />
                  <span className="text-dainamics-cta">Excel Qui Ne Se Parlent Pas</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-400 mb-8 leading-relaxed"
                >
                  Vos données sont éparpillées dans 5 outils différents.
                  On les centralise dans un dashboard unique,
                  avec les KPIs qui comptent vraiment pour vous.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg">
                      Voir une démo
                      <Monitor className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-dainamics-cta text-dainamics-cta hover:bg-dainamics-cta/10 px-8 py-6 text-lg">
                      Discuter de mon besoin
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Illustration - Dashboard animé */}
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dainamics-cta/20 to-dainamics-primary/20 rounded-2xl border border-dainamics-cta/30 p-8 overflow-hidden">
                    {/* Simulation de dashboard */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                          <div className="text-2xl font-bold text-white">+34%</div>
                          <div className="text-xs text-gray-400">CA ce mois</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <Users className="w-6 h-6 text-blue-400 mb-2" />
                          <div className="text-2xl font-bold text-white">142</div>
                          <div className="text-xs text-gray-400">Leads actifs</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <Target className="w-6 h-6 text-dainamics-cta mb-2" />
                          <div className="text-2xl font-bold text-white">87%</div>
                          <div className="text-xs text-gray-400">Objectif</div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-white">Pipeline Commercial</span>
                          <BarChart className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white/5 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }} />
                            </div>
                            <span className="text-xs text-gray-400">75%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white/5 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }} />
                            </div>
                            <span className="text-xs text-gray-400">60%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white/5 rounded-full h-2">
                              <div className="bg-dainamics-cta h-2 rounded-full" style={{ width: '45%' }} />
                            </div>
                            <span className="text-xs text-gray-400">45%</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <Activity className="w-5 h-5 text-purple-400 mb-2" />
                          <div className="text-lg font-bold text-white">Real-time</div>
                          <div className="text-xs text-gray-400">Données synchronisées</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <Bell className="w-5 h-5 text-yellow-400 mb-2" />
                          <div className="text-lg font-bold text-white">3 Alertes</div>
                          <div className="text-xs text-gray-400">Actions requises</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Problèmes résolus */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Vous vous reconnaissez ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Ces situations coûtent des heures chaque semaine à vos équipes
              </motion.p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"On exporte des CSV de partout"</h3>
                  <p className="text-sm text-gray-400">CRM, ERP, comptabilité... rien ne communique</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"Les chiffres ne correspondent jamais"</h3>
                  <p className="text-sm text-gray-400">Chaque rapport donne des résultats différents</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"On découvre les problèmes trop tard"</h3>
                  <p className="text-sm text-gray-400">Aucune alerte automatique, tout est manuel</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"Les rapports prennent 2 jours"</h3>
                  <p className="text-sm text-gray-400">Reporting mensuel = cauchemar Excel</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Notre Solution */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Un Dashboard, Toutes Vos Données
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Connexion à vos outils existants, KPIs personnalisés, alertes automatiques
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Feature 1 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/10 to-transparent rounded-xl p-8 border border-dainamics-cta/30"
                >
                  <Database className="w-12 h-12 text-dainamics-cta mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-3">Multi-Sources</h3>
                  <p className="text-gray-400">
                    Connexion à vos outils : CRM, ERP, comptabilité, Google Sheets, bases de données...
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-primary/10 to-transparent rounded-xl p-8 border border-dainamics-primary/30"
                >
                  <Target className="w-12 h-12 text-dainamics-primary mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-3">KPIs Sur Mesure</h3>
                  <p className="text-gray-400">
                    Les indicateurs qui comptent pour VOTRE métier, pas des métriques génériques
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-accent/10 to-transparent rounded-xl p-8 border border-dainamics-accent/30"
                >
                  <Bell className="w-12 h-12 text-dainamics-accent mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-3">Alertes Automatiques</h3>
                  <p className="text-gray-400">
                    Notification immédiate quand un seuil critique est atteint
                  </p>
                </motion.div>
              </div>

              {/* Sous-features */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-gray-800">
                  <RefreshCw className="w-4 h-4 text-dainamics-cta" />
                  <span className="text-sm text-gray-300">Données temps réel</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-gray-800">
                  <Smartphone className="w-4 h-4 text-dainamics-cta" />
                  <span className="text-sm text-gray-300">Accès mobile</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-gray-800">
                  <Download className="w-4 h-4 text-dainamics-cta" />
                  <span className="text-sm text-gray-300">Export PDF/Excel</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-gray-800">
                  <Users className="w-4 h-4 text-dainamics-cta" />
                  <span className="text-sm text-gray-300">Multi-utilisateurs</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Exemples de Dashboards */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Exemples de Dashboards
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Dashboard Commercial */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Dashboard Commercial</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Pipeline, conversions, CA par commercial, prévisions
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Suivi pipeline en temps réel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Performance par commercial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Prévisions vs objectifs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Alertes deals à risque</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Dashboard Production */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Factory className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Dashboard Production</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Rendement machines, taux de rebut, planification
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">OEE (Overall Equipment Effectiveness)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Suivi qualité en temps réel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Planning de production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Alertes maintenance préventive</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Dashboard RH */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Dashboard RH</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Effectifs, absences, turnover, formations
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Vue effectifs par département</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Suivi absences et congés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Indicateurs turnover</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Planning formations</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Dashboard Finance */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-dainamics-cta/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-dainamics-cta" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Dashboard Finance</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Trésorerie, P&L, créances, budget
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Trésorerie prévisionnelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Suivi budget vs réel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Âge des créances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Alertes seuils critiques</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Référence projet */}
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30 text-center"
              >
                <p className="text-sm text-gray-400 mb-2">Projet réalisé</p>
                <Link
                  to="/realisations/inmotion-digital-signage"
                  className="text-[#D4AF37] hover:text-[#B8941F] transition-colors font-semibold inline-flex items-center gap-2"
                >
                  InMotion Digital Signage - Dashboard de gestion de parc d'écrans
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Investissement */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Investissement
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16">
                Prix transparents, pas de surprise
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                {/* Dashboard Simple */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Dashboard Standard</h3>
                  <p className="text-gray-400 mb-6">1-2 sources de données, 5-10 KPIs</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">15-25K€</div>
                    <div className="text-sm text-gray-400">Livraison : 4-6 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Connexion 1-2 sources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">5-10 KPIs personnalisés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Alertes email</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Formation équipe</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Dashboard Avancé */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/20 to-transparent rounded-2xl p-8 border-2 border-dainamics-cta relative"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-dainamics-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dashboard Avancé</h3>
                  <p className="text-gray-400 mb-6">Multi-sources, KPIs complexes, prédictif</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">25-45K€</div>
                    <div className="text-sm text-gray-400">Livraison : 6-10 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Connexion multi-sources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">KPIs illimités</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Alertes avancées (SMS, Slack)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Analyses prédictives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">App mobile</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="text-center text-sm text-gray-400"
              >
                Maintenance : 15-20% du coût initial par an • Support inclus 3 mois
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: CTA Final */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-dainamics-cta/10 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Prêt à centraliser vos données ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
                30 minutes pour comprendre vos besoins et vous montrer
                <br />
                ce qu'un dashboard sur mesure peut faire pour vous.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Réserver une démo gratuite
                  </Button>
                </Link>
                <a href="mailto:contact@dainamics.ch">
                  <Button variant="outline" className="border-dainamics-cta text-dainamics-cta hover:bg-dainamics-cta/10 px-8 py-6 text-lg">
                    <Mail className="mr-2 w-5 h-5" />
                    contact@dainamics.ch
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboards;
