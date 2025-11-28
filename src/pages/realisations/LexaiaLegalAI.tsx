import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Scale, FileText, Languages, Bot, Users, TrendingUp,
  Check, ArrowLeft, Phone, Clock, Target, Zap,
  Database, Cloud, Code, Shield, Search, FileCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const LexaiaLegalAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LEXAIA Legal AI | Plateforme Juridique IA | Cas Client DAINAMICS";
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
        {/* Section 1: Hero Projet */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <Link to="/realisations" className="inline-flex items-center gap-2 text-gray-400 hover:text-dainamics-primary transition-colors mb-8">
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
                  <span className="px-4 py-2 rounded-full bg-dainamics-primary/10 border border-dainamics-primary/30 text-dainamics-primary text-sm font-medium">
                    LegalTech
                  </span>
                  <span className="px-4 py-2 rounded-full bg-dainamics-primary/10 border border-dainamics-primary/30 text-dainamics-primary text-sm font-medium">
                    Plateforme IA
                  </span>
                </motion.div>

                {/* Titre */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
                >
                  <span className="text-white">LEXAIA</span>
                  <br />
                  <span className="text-dainamics-primary">Legal AI</span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl sm:text-2xl text-gray-300 mb-6"
                >
                  Plateforme juridique intelligente avec 40+ microservices orchestrés
                </motion.p>

                {/* Métriques hero */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-primary/20">
                    <div className="text-3xl font-bold text-dainamics-primary mb-1">850+</div>
                    <div className="text-xs text-gray-400">contrats/mois</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-accent/20">
                    <div className="text-3xl font-bold text-dainamics-accent mb-1">90+</div>
                    <div className="text-xs text-gray-400">langues OCR</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-cta/20">
                    <div className="text-3xl font-bold text-dainamics-cta mb-1">40+</div>
                    <div className="text-xs text-gray-400">microservices</div>
                  </div>
                </motion.div>

                {/* Infos projet */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>8 mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>4 développeurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    <span>Startup suisse</span>
                  </div>
                </motion.div>
              </div>

              {/* Colonne droite : Illustration */}
              <motion.div variants={fadeInUp}>
                <div className="aspect-square bg-gradient-to-br from-dainamics-primary/20 to-dainamics-accent/20 rounded-2xl border border-dainamics-primary/30 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="w-32 h-32 text-dainamics-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white">LEXAIA</div>
                    <div className="text-sm text-gray-400">Powered by AI</div>
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
                Cabinet juridique international submergé par le volume de contrats
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Target className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Volume Écrasant</h3>
                  <p className="text-sm text-gray-400">
                    Analyse manuelle de 500+ contrats/mois. Équipe juridique débordée.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Clock className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Temps Critique</h3>
                  <p className="text-sm text-gray-400">
                    3 jours pour analyser un contrat complexe. Délais inacceptables pour les clients.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Shield className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Risques d'Erreurs</h3>
                  <p className="text-sm text-gray-400">
                    Erreurs humaines possibles sur clauses critiques. Exposition juridique du cabinet.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <Search className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Recherche Impossible</h3>
                  <p className="text-sm text-gray-400">
                    Pas de recherche intelligente dans la base documentaire. Précédents perdus.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-dainamics-primary/10 to-transparent rounded-xl p-8 border border-dainamics-primary/30"
              >
                <p className="text-lg text-gray-300 italic text-center">
                  "On passait plus de temps à chercher des précédents qu'à conseiller nos clients."
                </p>
                <p className="text-sm text-gray-500 text-center mt-2">— Directeur Juridique, Cabinet international</p>
              </motion.div>
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
                Notre Solution
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Architecture technique sophistiquée pour gérer la complexité juridique
              </motion.p>

              {/* Stack technique */}
              <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 mb-12">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Stack Technique</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Frontend</div>
                    <div className="space-y-1">
                      <div className="text-sm text-white">Next.js 15</div>
                      <div className="text-sm text-white">React 19</div>
                      <div className="text-sm text-white">TypeScript</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Backend</div>
                    <div className="space-y-1">
                      <div className="text-sm text-white">Python FastAPI</div>
                      <div className="text-sm text-white">LangChain</div>
                      <div className="text-sm text-white">PostgreSQL</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">IA</div>
                    <div className="space-y-1">
                      <div className="text-sm text-white">Claude AI</div>
                      <div className="text-sm text-white">GPT-4</div>
                      <div className="text-sm text-white">Embeddings</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Infrastructure</div>
                    <div className="space-y-1">
                      <div className="text-sm text-white">Kubernetes</div>
                      <div className="text-sm text-white">Docker</div>
                      <div className="text-sm text-white">CI/CD</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Fonctionnalités clés */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-primary/10 to-transparent rounded-xl p-6 border border-dainamics-primary/30"
                >
                  <FileCheck className="w-12 h-12 text-dainamics-primary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Analyse Automatique</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Extraction clauses clés, détection risques, comparaison standards
                  </p>
                  <div className="text-xs text-dainamics-primary">95% précision</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-accent/10 to-transparent rounded-xl p-6 border border-dainamics-accent/30"
                >
                  <Database className="w-12 h-12 text-dainamics-accent mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">RAG Dual</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Recherche documents privés + base légale suisse/EU avec sources
                  </p>
                  <div className="text-xs text-dainamics-accent">Réponses sourcées</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-6 border border-green-500/30"
                >
                  <Languages className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">OCR Multilingue</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Scan papier, reconnaissance manuscrit, export structuré
                  </p>
                  <div className="text-xs text-green-400">90+ langues</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/10 to-transparent rounded-xl p-6 border border-dainamics-cta/30"
                >
                  <Bot className="w-12 h-12 text-dainamics-cta mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Assistant Juridique IA</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Chat contextuel, suggestions rédaction, vérification conformité
                  </p>
                  <div className="text-xs text-dainamics-cta">24/7 disponible</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-6 border border-purple-500/30"
                >
                  <Users className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Workflow Collaboratif</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Assignation tâches, validation multi-niveaux, audit trail
                  </p>
                  <div className="text-xs text-purple-400">Traçabilité complète</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/30"
                >
                  <Zap className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Intégrations</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    DMS existant, calendrier, facturation synchronisés
                  </p>
                  <div className="text-xs text-blue-400">API complète</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Résultats Chiffrés */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
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
                  <div className="text-5xl font-bold text-green-400 mb-3">850+</div>
                  <div className="text-gray-300 mb-2">contrats traités/mois</div>
                  <div className="text-sm text-gray-500">(vs 200 avant)</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-primary/20 to-transparent rounded-xl p-8 border border-dainamics-primary/30 text-center"
                >
                  <div className="text-5xl font-bold text-dainamics-primary mb-3">3j → 2h</div>
                  <div className="text-gray-300 mb-2">temps analyse contrat</div>
                  <div className="text-sm text-gray-500">(-96% temps)</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-accent/20 to-transparent rounded-xl p-8 border border-dainamics-accent/30 text-center"
                >
                  <div className="text-5xl font-bold text-dainamics-accent mb-3">95%</div>
                  <div className="text-gray-300 mb-2">précision extraction</div>
                  <div className="text-sm text-gray-500">clauses identifiées</div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/20 to-transparent rounded-xl p-8 border border-dainamics-cta/30 text-center"
                >
                  <div className="text-5xl font-bold text-dainamics-cta mb-3">6 mois</div>
                  <div className="text-gray-300 mb-2">ROI atteint</div>
                  <div className="text-sm text-gray-500">investissement rentabilisé</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Timeline Projet */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Timeline Projet
              </motion.h2>

              <div className="space-y-6">
                {[
                  { phase: 'Mois 1-2', title: 'Discovery & Architecture', desc: 'Analyse besoins, design système, choix techno' },
                  { phase: 'Mois 3-4', title: 'MVP Core', desc: 'Analyse basique contrats, interface utilisateur' },
                  { phase: 'Mois 5-6', title: 'RAG + OCR', desc: 'Intégration IA avancée, reconnaissance documents' },
                  { phase: 'Mois 7', title: 'Intégrations + Tests', desc: 'Connexion systèmes existants, QA approfondi' },
                  { phase: 'Mois 8', title: 'Déploiement + Formation', desc: 'Mise en production, formation équipes, documentation' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 flex gap-6"
                  >
                    <div className="w-24 flex-shrink-0">
                      <div className="text-lg font-bold text-dainamics-primary">{item.phase}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-semibold text-white mb-2">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Témoignage */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ">
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
                className="bg-gradient-to-br from-dainamics-primary/10 to-transparent rounded-2xl p-12 border border-dainamics-primary/30"
              >
                <Scale className="w-16 h-16 text-dainamics-primary mx-auto mb-6" />
                <blockquote className="text-2xl text-gray-200 mb-6 italic">
                  "LEXAIA a transformé notre façon de travailler. Ce qui prenait 3 jours se fait maintenant en 2 heures.
                  L'IA ne remplace pas nos juristes, elle les rend plus efficaces."
                </blockquote>
                <p className="text-sm text-gray-400">— Directeur Juridique, Cabinet international</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Un projet juridique ou documentaire similaire ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
                On peut adapter cette expertise à votre contexte
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white px-8 py-6 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Discuter de mon projet
                  </Button>
                </Link>
                <Link to="/realisations">
                  <Button variant="outline" className="border-dainamics-primary text-dainamics-primary hover:bg-dainamics-primary/10 px-8 py-6 text-lg">
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

export default LexaiaLegalAI;
