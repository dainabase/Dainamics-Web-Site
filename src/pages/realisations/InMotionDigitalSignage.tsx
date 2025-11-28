import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Monitor, Smartphone, Server, LayoutDashboard,
  Eye, Clock, Play, Check, X,
  ListVideo, Calendar, Activity, Zap, RotateCcw, WifiOff,
  Users, TrendingUp, Film, Phone, ArrowLeft, ArrowDown,
  ArrowRight, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const InMotionDigitalSignage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "InMotion Digital Signage - Vitrines Intelligentes | DAINAMICS";
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
            <Link to="/realisations" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Retour aux réalisations
            </Link>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Colonne gauche : Contenu */}
              <div>
                {/* Badges */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium">
                    RetailTech
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium">
                    IoT
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium">
                    Plateforme Sur Mesure
                  </span>
                </motion.div>

                {/* Titre */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
                >
                  <span className="text-white">InMotion</span>
                  <br />
                  <span className="text-[#D4AF37]">Digital Signage</span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl sm:text-2xl text-gray-300 mb-6"
                >
                  Vitrines Intelligentes avec Détection IA
                </motion.p>

                {/* Description */}
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-gray-400 mb-8 leading-relaxed"
                >
                  Système de 9 vitrines interactives avec détection de présence par intelligence artificielle
                  pour le retail de luxe. Intégration invisible derrière verre sans tain.
                </motion.p>

                {/* Métriques rapides */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-1">9</div>
                    <div className="text-sm text-gray-400">Vitrines connectées</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-1">-70%</div>
                    <div className="text-sm text-gray-400">Coûts opérationnels</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-1">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeInUp}>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:opacity-90 text-white px-8 py-6 text-lg">
                      Discuter d'un projet similaire
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Colonne droite : Visuel */}
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 rounded-2xl border border-[#D4AF37]/30 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    <div className="relative z-10 text-center p-8">
                      <Monitor className="w-24 h-24 text-[#D4AF37] mx-auto mb-4" />
                      <p className="text-2xl font-semibold text-white">Vitrine Interactive</p>
                      <p className="text-gray-400 mt-2">Détection IA en temps réel</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Contexte & Défis */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Le Défi
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-[#D4AF37] text-center mb-4">
                Retail de Luxe • HMF Corporation SA - HYPERVISUAL
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Transformer des vitrines statiques en expériences interactives captivantes
              </motion.p>

              {/* Problèmes */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    Enjeux Business
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Vitrines statiques inefficaces</p>
                        <p className="text-sm text-gray-400">Échec à capter l'attention dans un environnement retail compétitif</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">9 systèmes isolés</p>
                        <p className="text-sm text-gray-400">Interventions manuelles sur site pour chaque mise à jour</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Contrainte spy mirror</p>
                        <p className="text-sm text-gray-400">Détection de mouvement impossible derrière verre sans tain (chrome 30%)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Contraintes Techniques
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Clock className="w-8 h-8 text-[#D4AF37] mb-3" />
                      <p className="font-medium text-white mb-1">Fonctionnement 15h/jour</p>
                      <p className="text-sm text-gray-400">Zéro tolérance pour écrans noirs ou erreurs visibles</p>
                    </div>
                    <div>
                      <Eye className="w-8 h-8 text-[#D4AF37] mb-3" />
                      <p className="font-medium text-white mb-1">Esthétique luxe à préserver</p>
                      <p className="text-sm text-gray-400">Hardware dissimulé, intégration invisible</p>
                    </div>
                    <div>
                      <Activity className="w-8 h-8 text-[#D4AF37] mb-3" />
                      <p className="font-medium text-white mb-1">Dissipation thermique</p>
                      <p className="text-sm text-gray-400">Écrans haute luminosité (1500-2000 nits) en espace confiné</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Solution - Architecture */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Solution Livrée
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Plateforme enterprise-grade complète avec IA, cloud et gestion centralisée
              </motion.p>

              {/* Architecture diagram */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30"
                >
                  <Smartphone className="w-12 h-12 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Application Android</h3>
                  <p className="text-sm text-[#D4AF37] mb-4">9 appareils déployés</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Kotlin + Architecture MVVM</li>
                    <li>• ML Kit Face Detection</li>
                    <li>• ExoPlayer (Hardware Accel.)</li>
                    <li>• Mode Kiosk sécurisé</li>
                    <li>• Cache local intelligent</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30"
                >
                  <Server className="w-12 h-12 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Backend Cloud</h3>
                  <p className="text-sm text-[#D4AF37] mb-4">API temps réel</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Node.js 20 + Express</li>
                    <li>• PostgreSQL 16 (JSONB)</li>
                    <li>• Socket.IO temps réel</li>
                    <li>• JWT Auth (Access/Refresh)</li>
                    <li>• Helmet + CORS sécurisé</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30"
                >
                  <LayoutDashboard className="w-12 h-12 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Web Dashboard</h3>
                  <p className="text-sm text-[#D4AF37] mb-4">Gestion centralisée</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• React 18 + TypeScript</li>
                    <li>• Tailwind CSS + Vite</li>
                    <li>• Gestion de parc d'écrans</li>
                    <li>• Création de campagnes</li>
                    <li>• Analytics en temps réel</li>
                  </ul>
                </motion.div>
              </div>

              {/* Flux de données */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Performance & Latence</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">50-150ms</div>
                    <div className="text-sm text-gray-400">Détection IA/frame</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">&lt;200ms</div>
                    <div className="text-sm text-gray-400">Switch contenu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">&lt;50ms</div>
                    <div className="text-sm text-gray-400">API response (LAN)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">&lt;100ms</div>
                    <div className="text-sm text-gray-400">WebSocket ping</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Détection IA */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Texte */}
              <div>
                <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-6">
                  Intelligence Artificielle
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4">
                  Détection de Présence
                  <br />
                  <span className="text-[#D4AF37]">ML Kit Face Detection</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Pour assurer une fiabilité optimale derrière le verre sans tain,
                  nous avons remplacé la détection de mouvement basique (OpenCV)
                  par une IA avancée de détection faciale.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Mode ACCURATE</h4>
                      <p className="text-sm text-gray-400">Haute précision même en faible contraste</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Validation stricte</h4>
                      <p className="text-sm text-gray-400">≥10 frames + 2 secondes continues requises</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">CPU optimisé (20-30%)</h4>
                      <p className="text-sm text-gray-400">Fonctionnement fluide sans surchauffe</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Schéma logique */}
              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-8 border border-[#D4AF37]/30">
                  <h3 className="text-2xl font-semibold text-white mb-8 text-center">Logique d'Activation</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Détection</h4>
                        <p className="text-sm text-gray-400">Visage &gt; 25% écran</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="w-6 h-6 text-[#D4AF37]" />
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Validation</h4>
                        <p className="text-sm text-gray-400">2 sec présence continue</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="w-6 h-6 text-[#D4AF37]" />
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white flex items-center justify-center font-bold flex-shrink-0 text-lg">
                        ▶
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#D4AF37] mb-1">ACTION</h4>
                        <p className="text-sm text-gray-400">Lecture vidéo activée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Dashboard & Gestion */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Gestion Centralisée
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Dashboard web moderne pour le contrôle total du parc d'écrans sans intervention sur site
              </motion.p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <ListVideo className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Campaign Playlists</h3>
                  <p className="text-sm text-gray-400">Création drag-and-drop, séquençage intuitif</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Monitor className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Device Assignment</h3>
                  <p className="text-sm text-gray-400">Groupage flexible, ciblage par zone</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Calendar className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Scheduled Content</h3>
                  <p className="text-sm text-gray-400">Planification calendaire, règles horaires</p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Activity className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Monitoring Temps Réel</h3>
                  <p className="text-sm text-gray-400">Statut, connectivité, logs d'erreurs</p>
                </motion.div>
              </div>

              {/* Avantages */}
              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30">
                  <Zap className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Mises à jour instantanées</h4>
                  <p className="text-sm text-gray-400">Déploiement via WebSocket en &lt;5 min</p>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30">
                  <RotateCcw className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Version Control & Rollback</h4>
                  <p className="text-sm text-gray-400">Historique complet, retour arrière immédiat</p>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 border border-[#D4AF37]/30">
                  <WifiOff className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Mode Hors-Ligne</h4>
                  <p className="text-sm text-gray-400">Fonctionnement 100% après sync initiale</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Résultats */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Résultats & Impact Business
              </motion.h2>

              {/* Métriques principales */}
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-xl p-8 border border-[#D4AF37]/30 text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">-70%</div>
                  <div className="text-gray-300">Réduction coûts opérationnels</div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-xl p-8 border border-[#D4AF37]/30 text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">&lt;5min</div>
                  <div className="text-gray-300">Déploiement contenu</div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-xl p-8 border border-[#D4AF37]/30 text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">0</div>
                  <div className="text-gray-300">Visites sur site requises</div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-xl p-8 border border-[#D4AF37]/30 text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">99.9%</div>
                  <div className="text-gray-300">Uptime système</div>
                </div>
              </motion.div>

              {/* Bénéfices détaillés */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="text-2xl font-semibold text-white">Impact Expérience Client</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Vitrines dynamiques qui s'activent à l'approche des clients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Effet de surprise captivant augmentant le trafic piéton</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Esthétique luxueuse préservée (intégration invisible)</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="text-2xl font-semibold text-white">Efficacité Opérationnelle</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Pilotage des 9 écrans depuis un dashboard unique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Architecture cloud prête pour multi-sites</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Évolutivité vers analytics et fonctionnalités avancées</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Stack Technique Complète */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Stack Technique
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Android */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="text-xl font-semibold text-white">Application Android</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Android 7.0+ (API 24)</li>
                    <li>Kotlin + MVVM</li>
                    <li>ML Kit Face Detection</li>
                    <li>ExoPlayer 2.19+</li>
                    <li>CameraX API</li>
                    <li>DataStore + Retrofit</li>
                  </ul>
                </motion.div>

                {/* Backend */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="text-xl font-semibold text-white">Backend API</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Node.js 20+ LTS</li>
                    <li>Express</li>
                    <li>PostgreSQL 16</li>
                    <li>Socket.IO</li>
                    <li>JWT + Bcrypt</li>
                    <li>Helmet + CORS</li>
                  </ul>
                </motion.div>

                {/* Dashboard */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <LayoutDashboard className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="text-xl font-semibold text-white">Web Dashboard</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>React 18</li>
                    <li>TypeScript</li>
                    <li>Vite (ESBuild)</li>
                    <li>Tailwind CSS</li>
                    <li>Axios</li>
                    <li>React Router</li>
                  </ul>
                </motion.div>

                {/* Vidéo */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Film className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="text-xl font-semibold text-white">Spécifications Vidéo</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>MP4, MKV, WebM</li>
                    <li>H.264 High Profile</li>
                    <li>1920×1080 / 1080×1920</li>
                    <li>30 fps constant</li>
                    <li>8-15 Mbps CBR</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: CTA Final */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4">
                Un projet retail ou IoT similaire ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
                Digital signage, détection de présence, systèmes embarqués...
                <br />
                Discutons de votre projet.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:opacity-90 text-white px-8 py-6 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Réserver un appel gratuit
                  </Button>
                </Link>
                <Link to="/realisations">
                  <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-6 text-lg">
                    Voir tous les projets
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              {/* Valorisation */}
              <motion.div
                variants={fadeInUp}
                className="inline-block bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <p className="text-sm text-gray-400 mb-2">Valeur marché estimée de la solution</p>
                <p className="text-3xl font-bold text-[#D4AF37]">CHF 23,000 – 33,000</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InMotionDigitalSignage;
