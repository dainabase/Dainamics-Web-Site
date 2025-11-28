import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText, Package, MessageSquare, HelpCircle, Settings, BarChart3,
  Check, X, Clock, Zap, Shield, Phone, ArrowRight, User, Lock,
  Download, TrendingDown, Focus, FileCheck, Users, Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const PortailsClients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portails Client Self-Service | DAINAMICS";
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
                  Vos Clients Appellent
                  <br />
                  <span className="text-dainamics-cta">Pour Des Infos Basiques ?</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-400 mb-8 leading-relaxed"
                >
                  "Où en est ma commande ?" "Envoyez-moi ma facture"...
                  Un portail client leur donne accès 24/7 à tout ce dont ils ont besoin.
                  Votre équipe se concentre sur ce qui compte.
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

              {/* Illustration portail */}
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dainamics-primary/20 to-dainamics-accent/20 rounded-2xl border border-dainamics-primary/30 p-6 overflow-hidden">
                    {/* Simulation portail */}
                    <div className="space-y-4">
                      {/* Header portail */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-dainamics-primary/20 flex items-center justify-center">
                            <User className="w-5 h-5 text-dainamics-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">Jean Dupont</div>
                            <div className="text-xs text-gray-400">Client #12345</div>
                          </div>
                        </div>
                      </div>

                      {/* Menu cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-dainamics-cta/50 transition-colors cursor-pointer">
                          <FileText className="w-6 h-6 text-blue-400 mb-2" />
                          <div className="text-sm font-medium text-white">Factures</div>
                          <div className="text-xs text-gray-400">12 documents</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-dainamics-cta/50 transition-colors cursor-pointer">
                          <Package className="w-6 h-6 text-green-400 mb-2" />
                          <div className="text-sm font-medium text-white">Commandes</div>
                          <div className="text-xs text-gray-400">3 en cours</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-dainamics-cta/50 transition-colors cursor-pointer">
                          <MessageSquare className="w-6 h-6 text-purple-400 mb-2" />
                          <div className="text-sm font-medium text-white">Messages</div>
                          <div className="text-xs text-gray-400">2 nouveaux</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-dainamics-cta/50 transition-colors cursor-pointer">
                          <Settings className="w-6 h-6 text-dainamics-cta mb-2" />
                          <div className="text-sm font-medium text-white">Compte</div>
                          <div className="text-xs text-gray-400">Paramètres</div>
                        </div>
                      </div>

                      {/* Status bar */}
                      <div className="bg-green-500/10 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-green-400 font-medium">Connexion sécurisée</span>
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
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Combien coûtent ces appels ?
              </motion.h2>

              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-br from-red-500/20 to-transparent rounded-xl p-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-red-400 mb-3">50+</div>
                  <div className="text-gray-300">Appels/jour pour des infos basiques</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-transparent rounded-xl p-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-red-400 mb-3">15min</div>
                  <div className="text-gray-300">Par appel en moyenne</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-transparent rounded-xl p-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-red-400 mb-3">12h</div>
                  <div className="text-gray-300">Perdues par semaine</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-transparent rounded-xl p-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-red-400 mb-3">2 000€</div>
                  <div className="text-gray-300">Coût mensuel estimé</div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Les demandes récurrentes :</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">"Où en est ma commande ?"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">"Envoyez-moi ma facture"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">"Quel est mon historique ?"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">"Je veux modifier mes infos"</span>
                  </div>
                </div>
              </motion.div>
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
                Tout Ce Dont Vos Clients Ont Besoin
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Un espace personnel sécurisé, accessible 24/7
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Factures & Documents */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-primary/50 transition-colors"
                >
                  <FileText className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Factures & Documents</h3>
                  <p className="text-gray-400">
                    Accès instantané à toutes les factures, devis, contrats. Téléchargement PDF en un clic.
                  </p>
                </motion.div>

                {/* Suivi Commandes */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-primary/50 transition-colors"
                >
                  <Package className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Suivi Commandes</h3>
                  <p className="text-gray-400">
                    Statut en temps réel, historique complet, notifications automatiques.
                  </p>
                </motion.div>

                {/* Messagerie */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-primary/50 transition-colors"
                >
                  <MessageSquare className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Messagerie Intégrée</h3>
                  <p className="text-gray-400">
                    Communication directe avec votre équipe, historique des échanges conservé.
                  </p>
                </motion.div>

                {/* Gestion Compte */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-primary/50 transition-colors"
                >
                  <Settings className="w-12 h-12 text-dainamics-cta mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Gestion Compte</h3>
                  <p className="text-gray-400">
                    Mise à jour des informations personnelles, adresses, préférences.
                  </p>
                </motion.div>

                {/* Support */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-primary/50 transition-colors"
                >
                  <HelpCircle className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Base de Connaissances</h3>
                  <p className="text-gray-400">
                    FAQ, tutoriels, guides. Les réponses aux questions fréquentes sans attendre.
                  </p>
                </motion.div>

                {/* Analytics */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-primary/50 transition-colors"
                >
                  <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Statistiques Client</h3>
                  <p className="text-gray-400">
                    Historique d'achats, consommation, tendances. Valeur ajoutée pour vos clients B2B.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Bénéfices */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Bénéfices pour vous */}
              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-dainamics-cta/10 to-transparent rounded-xl p-8 border border-dainamics-cta/30 h-full">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Pour Votre Équipe</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <TrendingDown className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">-70% d'appels entrants</h4>
                        <p className="text-sm text-gray-400">Les clients trouvent l'info eux-mêmes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Focus className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Équipe recentrée</h4>
                        <p className="text-sm text-gray-400">Focus sur les demandes à valeur ajoutée</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Traçabilité complète</h4>
                        <p className="text-sm text-gray-400">Historique de toutes les interactions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bénéfices pour vos clients */}
              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-dainamics-primary/10 to-transparent rounded-xl p-8 border border-dainamics-primary/30 h-full">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Pour Vos Clients</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-dainamics-cta/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-dainamics-cta" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Accès 24/7</h4>
                        <p className="text-sm text-gray-400">Informations disponibles à tout moment</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Réponse instantanée</h4>
                        <p className="text-sm text-gray-400">Plus d'attente au téléphone</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Espace sécurisé</h4>
                        <p className="text-sm text-gray-400">Connexion personnelle, données protégées</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                Adapté à votre volume de clients
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                {/* Portail Standard */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Portail Standard</h3>
                  <p className="text-gray-400 mb-6">Fonctionnalités essentielles</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">20-35K€</div>
                    <div className="text-sm text-gray-400">Livraison : 6-8 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Authentification sécurisée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Accès factures & documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Suivi commandes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Messagerie simple</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Design à votre image</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Portail Avancé */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/20 to-transparent rounded-2xl p-8 border-2 border-dainamics-cta relative"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-dainamics-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Portail Complet</h3>
                  <p className="text-gray-400 mb-6">Toutes fonctionnalités + intégrations</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">35-60K€</div>
                    <div className="text-sm text-gray-400">Livraison : 8-12 semaines</div>
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
                      <span className="text-sm text-gray-300">Paiement en ligne</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Statistiques avancées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">App mobile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Chatbot intégré</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="text-center text-sm text-gray-400"
              >
                ROI typique : 6-12 mois • Maintenance : 15-20%/an
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-dainamics-primary/10 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Libérez votre équipe des appels répétitifs
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
                30 minutes pour voir comment un portail client peut transformer votre relation client.
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

export default PortailsClients;
