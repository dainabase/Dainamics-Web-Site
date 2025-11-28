import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Puzzle, TrendingUp, Link as LinkIcon, Cloud, Building, Briefcase, Rocket,
  Check, X, Phone, ArrowRight, Code, Zap, Shield, Users, Database, Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const ApplicationsWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Applications Web Sur Mesure | Développement SaaS & Plateformes | DAINAMICS";
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
                  Votre Logiciel Métier
                  <br />
                  <span className="text-dainamics-cta">N'Existe Pas Encore</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-400 mb-8 leading-relaxed"
                >
                  Les outils du marché ne correspondent jamais à 100% à votre façon de travailler.
                  On développe l'application web exactement adaptée à votre métier.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg">
                      Discuter de mon projet
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/realisations">
                    <Button variant="outline" className="border-dainamics-cta text-dainamics-cta hover:bg-dainamics-cta/10 px-8 py-6 text-lg">
                      Voir nos réalisations
                      <Code className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Illustration */}
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-dainamics-cta/20 to-dainamics-primary/20 rounded-2xl border border-dainamics-cta/30 p-8 overflow-hidden">
                    {/* Animation composants qui s'assemblent */}
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center"
                        >
                          {i === 4 ? (
                            <Code className="w-8 h-8 text-dainamics-cta" />
                          ) : (
                            <div className="w-6 h-6 bg-gradient-to-br from-dainamics-cta/50 to-dainamics-primary/50 rounded" />
                          )}
                        </motion.div>
                      ))}
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
                Pourquoi les outils du marché ne suffisent pas
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    "On paie 500€/mois pour utiliser 20% des fonctions"
                  </h3>
                  <p className="text-sm text-gray-400">
                    Logiciels SaaS surdimensionnés avec des fonctionnalités inutiles
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    "L'outil du marché ne s'intègre pas à nos systèmes"
                  </h3>
                  <p className="text-sm text-gray-400">
                    Incompatibilité avec votre ERP, CRM ou outils métier existants
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    "On a bricolé avec 5 outils qui ne se parlent pas"
                  </h3>
                  <p className="text-sm text-gray-400">
                    Perte de données, ressaisies, erreurs entre systèmes fragmentés
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <X className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    "Notre process est trop spécifique pour un logiciel standard"
                  </h3>
                  <p className="text-sm text-gray-400">
                    Adaptations impossibles, workflows rigides qui ne collent pas
                  </p>
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
                Notre Solution : Développement 100% Sur Mesure
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Une application web pensée pour VOTRE métier, VOS workflows, VOS utilisateurs
              </motion.p>

              {/* 3 Features principales */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/10 to-transparent rounded-xl p-6 border border-dainamics-cta/30"
                >
                  <Puzzle className="w-12 h-12 text-dainamics-cta mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Conçu Pour Votre Métier</h3>
                  <p className="text-gray-400">
                    Chaque écran, chaque workflow pensé pour VOS utilisateurs. Zéro compromis.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-6 border border-green-500/30"
                >
                  <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Évolutif Dans Le Temps</h3>
                  <p className="text-gray-400">
                    Architecture moderne qui grandit avec votre entreprise. Ajouts de fonctionnalités simples.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/30"
                >
                  <LinkIcon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Connecté à Vos Outils</h3>
                  <p className="text-gray-400">
                    API avec votre ERP, CRM, comptabilité existants. Données synchronisées.
                  </p>
                </motion.div>
              </div>

              {/* Technologies pills */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
                {['React/Next.js', 'TypeScript', 'API REST/GraphQL', 'Cloud Hosting', 'CI/CD', 'Tests Automatisés'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Types d'Applications */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-16 text-center">
                Types d'Applications Que Nous Développons
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* SaaS Métier */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-dainamics-cta/10 flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-dainamics-cta" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">SaaS Métier</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Plateforme de gestion, outil collaboratif
                  </p>
                  <p className="text-xs text-gray-500">
                    Pour qui : Entreprises avec process spécifiques
                  </p>
                </motion.div>

                {/* Portail B2B */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Portail B2B</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Espace partenaires, extranet fournisseurs
                  </p>
                  <p className="text-xs text-gray-500">
                    Pour qui : Entreprises avec réseau partenaires
                  </p>
                </motion.div>

                {/* Outil Interne */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Outil Interne</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    CRM maison, gestion RH, planning
                  </p>
                  <p className="text-xs text-gray-500">
                    Pour qui : Équipes avec besoins spécifiques
                  </p>
                </motion.div>

                {/* MVP/Startup */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-dainamics-cta/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">MVP/Startup</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Proof of concept, V1 produit
                  </p>
                  <p className="text-xs text-gray-500">
                    Pour qui : Entrepreneurs, intrapreneurs
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
                Prix selon la complexité et l'étendue fonctionnelle
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                {/* Application Standard */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Application Standard</h3>
                  <p className="text-gray-400 mb-6">Outil interne ou MVP</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">25-45K€</div>
                    <div className="text-sm text-gray-400">Livraison : 8-12 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">5-10 écrans fonctionnels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Authentification sécurisée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">API REST basique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Hébergement cloud inclus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Support 3 mois</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Plateforme Complète */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-dainamics-cta/20 to-transparent rounded-2xl p-8 border-2 border-dainamics-cta relative"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-dainamics-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plateforme Complète</h3>
                  <p className="text-gray-400 mb-6">SaaS métier ou portail B2B</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-dainamics-cta mb-2">45-80K€</div>
                    <div className="text-sm text-gray-400">Livraison : 12-20 semaines</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Tout du Standard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Multi-rôles & permissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Workflows complexes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Intégrations ERP/CRM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Mobile responsive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-dainamics-cta flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Analytics & reporting</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="text-center text-sm text-gray-400"
              >
                Maintenance : 15-20%/an • Support 3 mois inclus
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
                Prêt à avoir VOTRE application ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8">
                30 minutes pour comprendre votre besoin et estimer votre projet
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                <Link to="/contact">
                  <Button className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Réserver un appel découverte
                  </Button>
                </Link>
                <p className="text-sm text-gray-500">
                  Ou écrivez-nous : <a href="mailto:contact@dainamics.ch" className="text-dainamics-cta hover:underline">contact@dainamics.ch</a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationsWeb;
