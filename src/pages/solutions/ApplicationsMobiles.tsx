import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, ClipboardList, Camera, WifiOff, RefreshCw, Bell,
  Wrench, Briefcase, HardHat, Truck,
  Check, X, Phone, ArrowRight, Smartphone, FileText,
  Edit, CheckCircle2, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const ApplicationsMobiles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Applications Mobiles Métier | DAINAMICS";
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
                  Vos Équipes Terrain
                  <br />
                  <span className="text-dainamics-cta">Sont Déconnectées ?</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-400 mb-8 leading-relaxed"
                >
                  Fiches papier, ressaisies au bureau, informations qui arrivent trop tard...
                  Une app mobile métier connecte vos équipes terrain en temps réel.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg">
                      Voir une démo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-dainamics-cta text-dainamics-cta hover:bg-dainamics-cta/10 px-8 py-6 text-lg">
                      Discuter de mon besoin
                      <Phone className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Illustration mobile */}
              <motion.div variants={fadeInUp}>
                <div className="relative flex justify-center">
                  {/* Phone mockup */}
                  <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-[12px] border-gray-800 shadow-2xl overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />

                    {/* App content simulation */}
                    <div className="h-full bg-gradient-to-br from-dainamics-primary/20 to-dainamics-accent/20 p-4 pt-8 overflow-hidden">
                      {/* Header */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-3 border border-white/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-dainamics-cta" />
                            <span className="text-sm font-semibold text-white">App Terrain</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <WifiOff className="w-4 h-4 text-green-400" />
                            <span className="text-xs text-green-400">Hors-ligne</span>
                          </div>
                        </div>
                      </div>

                      {/* Task cards */}
                      <div className="space-y-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-white mb-1">Intervention #1234</div>
                              <div className="text-xs text-gray-400">Rue du Lac 45, Genève</div>
                              <div className="mt-2 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                <span className="text-xs text-green-400">En cours</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded bg-dainamics-cta/20 flex items-center justify-center flex-shrink-0">
                              <ClipboardList className="w-4 h-4 text-dainamics-cta" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-white mb-1">Rapport à compléter</div>
                              <div className="text-xs text-gray-400">3 champs obligatoires</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                              <Camera className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-white mb-1">Photos ajoutées</div>
                              <div className="text-xs text-gray-400">4 photos • Sync en attente</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom action bar */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-dainamics-cta/90 backdrop-blur-sm rounded-xl p-3 border border-dainamics-cta">
                          <div className="flex items-center justify-center gap-2">
                            <RefreshCw className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Synchroniser</span>
                          </div>
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
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                La réalité du terrain aujourd'hui
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"Fiches papier perdues"</h3>
                  <p className="text-sm text-gray-400">Interventions non tracées, données égarées</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"Double saisie au bureau"</h3>
                  <p className="text-sm text-gray-400">Temps perdu à recopier les rapports</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"Infos décalées"</h3>
                  <p className="text-sm text-gray-400">Planning et stocks pas à jour sur le terrain</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">"Pas de visibilité"</h3>
                  <p className="text-sm text-gray-400">Le bureau ignore ce qui se passe en temps réel</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Fonctionnalités */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Une App Pensée Pour Le Terrain
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Rapide, intuitive, qui fonctionne même sans réseau
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mode hors-ligne */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-6 border border-green-500/30"
                >
                  <WifiOff className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Mode Hors-Ligne</h3>
                  <p className="text-gray-400">
                    Fonctionne sans connexion. Synchronisation automatique dès que le réseau revient.
                  </p>
                </motion.div>

                {/* Géolocalisation */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/30"
                >
                  <MapPin className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Géolocalisation</h3>
                  <p className="text-gray-400">
                    Planning optimisé, navigation intégrée, pointage de présence sur site.
                  </p>
                </motion.div>

                {/* Photos & Documents */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-6 border border-purple-500/30"
                >
                  <Camera className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Photos & Documents</h3>
                  <p className="text-gray-400">
                    Capture photo annotée, signature client, documents PDF accessibles.
                  </p>
                </motion.div>

                {/* Formulaires dynamiques */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/10 to-transparent rounded-xl p-6 border border-dainamics-cta/30"
                >
                  <ClipboardList className="w-12 h-12 text-dainamics-cta mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Formulaires Dynamiques</h3>
                  <p className="text-gray-400">
                    Checklists, rapports d'intervention, bons de travail adaptés à votre métier.
                  </p>
                </motion.div>

                {/* Sync temps réel */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl p-6 border border-cyan-500/30"
                >
                  <RefreshCw className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Sync Temps Réel</h3>
                  <p className="text-gray-400">
                    Le bureau voit les interventions en direct. Réactivité maximale.
                  </p>
                </motion.div>

                {/* Notifications */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-xl p-6 border border-yellow-500/30"
                >
                  <Bell className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Notifications Push</h3>
                  <p className="text-gray-400">
                    Alertes urgentes, nouvelles missions, messages de l'équipe.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Cas d'usage */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Pour Quels Métiers ?
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Techniciens */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Techniciens SAV</h3>
                  <p className="text-sm text-gray-400">
                    Interventions, pièces détachées, historique client
                  </p>
                </motion.div>

                {/* Commerciaux */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Commerciaux Terrain</h3>
                  <p className="text-sm text-gray-400">
                    Visites clients, devis instantanés, commandes
                  </p>
                </motion.div>

                {/* Chantiers */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-dainamics-cta/10 flex items-center justify-center mb-4">
                    <HardHat className="w-6 h-6 text-dainamics-cta" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Conducteurs Travaux</h3>
                  <p className="text-sm text-gray-400">
                    Suivi chantier, pointage équipes, rapports journaliers
                  </p>
                </motion.div>

                {/* Livreurs */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Livreurs / Logistique</h3>
                  <p className="text-sm text-gray-400">
                    Tournées optimisées, preuve de livraison, stocks
                  </p>
                </motion.div>
              </div>
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
                iOS et Android natifs
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                {/* App Standard */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">App Métier Standard</h3>
                  <p className="text-gray-400 mb-6">Fonctionnalités essentielles</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">30-50K€</div>
                    <div className="text-sm text-gray-400">Livraison : 8-12 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">iOS + Android</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Mode hors-ligne</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Formulaires personnalisés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Photos & signatures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Notifications push</span>
                    </li>
                  </ul>
                </motion.div>

                {/* App Avancée */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/20 to-transparent rounded-2xl p-8 border-2 border-dainamics-cta relative"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-dainamics-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Complète
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">App Métier Avancée</h3>
                  <p className="text-gray-400 mb-6">+ Intégrations & Dashboard</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">50-80K€</div>
                    <div className="text-sm text-gray-400">Livraison : 12-16 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Tout du Standard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Intégration ERP/CRM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Dashboard web admin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Géolocalisation avancée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Analytics & KPIs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Multi-langues</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="text-center text-sm text-gray-400"
              >
                Publication App Store & Play Store incluse • Maintenance : 15-20%/an
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-dainamics-accent/10 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Connectez vos équipes terrain
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
                30 minutes pour comprendre vos contraintes terrain et voir ce qu'une app mobile peut changer.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Link to="/contact">
                  <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Réserver une démo gratuite
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationsMobiles;
