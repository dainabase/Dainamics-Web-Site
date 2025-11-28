import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home, Bot, Users, TrendingUp, Clock, Target,
  Check, ArrowLeft, Phone, MessageSquare, Search,
  Calendar, FileText, BarChart3, Zap, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const EnkiRealtyPlatform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ΣNKI REALTY | Plateforme Immobilière Multi-Agents IA | DAINAMICS";
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

  const agents = [
    {
      icon: MessageSquare,
      name: 'Concierge',
      role: 'Premier contact, qualification',
      capabilities: 'Comprendre besoins, router vers bon agent',
      color: 'from-blue-500/10 to-transparent border-blue-500/30 text-blue-400'
    },
    {
      icon: Search,
      name: 'Chasseur',
      role: 'Recherche de biens',
      capabilities: 'Matching intelligent, suggestions proactives',
      color: 'from-green-500/10 to-transparent border-green-500/30 text-green-400'
    },
    {
      icon: BarChart3,
      name: 'Analyste',
      role: 'Évaluation marché',
      capabilities: 'Estimation prix, analyse quartier, tendances',
      color: 'from-purple-500/10 to-transparent border-purple-500/30 text-purple-400'
    },
    {
      icon: Target,
      name: 'Négociateur',
      role: 'Aide à la négociation',
      capabilities: 'Historique transactions, arguments personnalisés',
      color: 'from-dainamics-cta/10 to-transparent border-dainamics-cta/30 text-dainamics-cta'
    },
    {
      icon: Calendar,
      name: 'Coordinateur',
      role: 'Gestion visites et RDV',
      capabilities: 'Planning intelligent, rappels, confirmations',
      color: 'from-cyan-500/10 to-transparent border-cyan-500/30 text-cyan-400'
    },
    {
      icon: FileText,
      name: 'Notaire Assistant',
      role: 'Accompagnement administratif',
      capabilities: 'Checklist documents, suivi dossier',
      color: 'from-yellow-500/10 to-transparent border-yellow-500/30 text-yellow-400'
    }
  ];

  return (
    <div className="min-h-screen bg-adaptive text-adaptive">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main className="relative z-10">
        {/* Section 1: Hero Projet */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <Link to="/realisations" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8">
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
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                    PropTech
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                    Multi-Agents IA
                  </span>
                </motion.div>

                {/* Titre */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
                >
                  <span className="text-white">ΣNKI</span>
                  <br />
                  <span className="text-green-400">REALTY</span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl sm:text-2xl text-gray-300 mb-6"
                >
                  Plateforme immobilière intelligente avec 6 agents IA spécialisés
                </motion.p>

                {/* Métriques hero */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-green-500/20">
                    <div className="text-3xl font-bold text-green-400 mb-1">+218%</div>
                    <div className="text-xs text-gray-400">conversion</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">6</div>
                    <div className="text-xs text-gray-400">agents IA</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-cta/20">
                    <div className="text-3xl font-bold text-dainamics-cta mb-1">24/7</div>
                    <div className="text-xs text-gray-400">disponible</div>
                  </div>
                </motion.div>

                {/* Infos projet */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>3 développeurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    <span>Startup suisse</span>
                  </div>
                </motion.div>
              </div>

              {/* Colonne droite : Illustration */}
              <motion.div variants={fadeInUp}>
                <div className="aspect-square bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl border border-green-500/30 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Home className="w-32 h-32 text-green-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white">ΣNKI REALTY</div>
                    <div className="text-sm text-gray-400">Powered by 6 AI Agents</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Le Défi Client */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-8 text-center">
                Le Défi Client
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Agence immobilière voulant se différencier par la tech
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Users className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Agents Débordés</h3>
                  <p className="text-sm text-gray-400">
                    Agents submergés par demandes répétitives. 60% du temps sur tâches automatisables.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Search className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Matching Inefficace</h3>
                  <p className="text-sm text-gray-400">
                    Matching manuel biens/clients chronophage et peu précis. Opportunités manquées.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Clock className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Disponibilité Limitée</h3>
                  <p className="text-sm text-gray-400">
                    Service uniquement en horaires bureau. Prospects perdus en dehors des heures d'ouverture.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Target className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Pas de Personnalisation</h3>
                  <p className="text-sm text-gray-400">
                    Parcours client générique. Pas d'adaptation aux préférences individuelles.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-green-500/10 to-transparent rounded-xl p-8 border border-green-500/30"
              >
                <p className="text-lg text-gray-300 italic text-center">
                  "Nos agents passaient 60% de leur temps sur des tâches que l'IA pouvait faire."
                </p>
                <p className="text-sm text-gray-500 text-center mt-2">— CEO, Agence immobilière Genève</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Architecture Multi-Agents */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Les 6 Agents IA Spécialisés
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Chaque agent a son expertise et collabore avec les autres
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map((agent, i) => {
                  const Icon = agent.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className={`bg-gradient-to-br ${agent.color} rounded-xl p-6 border`}
                    >
                      <Icon className={`w-12 h-12 mb-4 ${agent.color.split(' ')[2]}`} />
                      <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
                      <p className="text-sm text-gray-300 mb-3 font-medium">{agent.role}</p>
                      <p className="text-xs text-gray-400">{agent.capabilities}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Schema interaction */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Communication Entre Agents</h3>
                <p className="text-sm text-gray-400 text-center">
                  Les agents communiquent en temps réel pour offrir une expérience fluide et cohérente au client.
                  Le Concierge route vers le bon agent, qui peut ensuite faire appel aux autres selon les besoins.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Fonctionnalités Plateforme */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Fonctionnalités Plateforme
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Search className="w-10 h-10 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Recherche Intelligente</h3>
                  <p className="text-sm text-gray-400">
                    Filtres naturels ("proche écoles", "calme"). Suggestions basées sur comportement.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Zap className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Matching Automatique</h3>
                  <p className="text-sm text-gray-400">
                    Score compatibilité bien/acheteur. Alertes nouvelles opportunités.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Home className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visites Virtuelles IA</h3>
                  <p className="text-sm text-gray-400">
                    Commentaires contextuels. Points d'intérêt automatiques.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <BarChart3 className="w-10 h-10 text-dainamics-cta mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Estimation Instantanée</h3>
                  <p className="text-sm text-gray-400">
                    Analyse comparative. Facteurs valorisation en temps réel.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Users className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Espace Propriétaire</h3>
                  <p className="text-sm text-gray-400">
                    Suivi annonces. Analytics visites. Offres reçues.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <Star className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Espace Acheteur</h3>
                  <p className="text-sm text-gray-400">
                    Favoris intelligents. Historique recherches. Dossier digital.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Résultats Chiffrés */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Résultats Mesurables
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-500/20 to-transparent rounded-xl p-8 border border-green-500/30 text-center"
                >
                  <div className="text-5xl font-bold text-green-400 mb-3">+218%</div>
                  <div className="text-gray-300 mb-2">taux de conversion</div>
                  <div className="text-sm text-gray-500">(leads → visites)</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-cyan-500/20 to-transparent rounded-xl p-8 border border-cyan-500/30 text-center"
                >
                  <div className="text-5xl font-bold text-cyan-400 mb-3">-65%</div>
                  <div className="text-gray-300 mb-2">temps agents</div>
                  <div className="text-sm text-gray-500">tâches répétitives</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl p-8 border border-purple-500/30 text-center"
                >
                  <div className="text-5xl font-bold text-purple-400 mb-3">+156%</div>
                  <div className="text-gray-300 mb-2">satisfaction client</div>
                  <div className="text-sm text-gray-500">(NPS score)</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/20 to-transparent rounded-xl p-8 border border-dainamics-cta/30 text-center"
                >
                  <div className="text-5xl font-bold text-dainamics-cta mb-3">24/7</div>
                  <div className="text-gray-300 mb-2">disponibilité</div>
                  <div className="text-sm text-gray-500">(vs 8h/jour)</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Stack Technique */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                Stack Technique
              </motion.h2>

              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-sm text-gray-400 mb-3">Frontend</div>
                    <div className="space-y-2">
                      <div className="text-sm text-white">Next.js 14</div>
                      <div className="text-sm text-white">TypeScript</div>
                      <div className="text-sm text-white">Tailwind CSS</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-3">Backend</div>
                    <div className="space-y-2">
                      <div className="text-sm text-white">Supabase</div>
                      <div className="text-sm text-white">PostgreSQL</div>
                      <div className="text-sm text-white">Auth + Realtime</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-3">IA</div>
                    <div className="space-y-2">
                      <div className="text-sm text-white">Claude AI</div>
                      <div className="text-sm text-white">Embeddings</div>
                      <div className="text-sm text-white">Multi-agents</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-3">Services</div>
                    <div className="space-y-2">
                      <div className="text-sm text-white">Mapbox</div>
                      <div className="text-sm text-white">Vercel</div>
                      <div className="text-sm text-white">Supabase Cloud</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Témoignage */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-12 border border-green-500/30"
              >
                <Home className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <blockquote className="text-2xl text-gray-200 mb-6 italic">
                  "ΣNKI a révolutionné notre relation client. Nos agents se concentrent sur le conseil à haute valeur ajoutée
                  pendant que l'IA gère la qualification et le matching. Nos conversions ont plus que doublé."
                </blockquote>
                <p className="text-sm text-gray-400">— CEO, Agence immobilière Genève</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: CTA */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Un projet marketplace ou multi-agents ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
                Notre expertise en systèmes IA complexes peut s'adapter à votre secteur
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Discuter de mon projet
                  </Button>
                </Link>
                <Link to="/realisations">
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg">
                    Voir d'autres réalisations
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

export default EnkiRealtyPlatform;
