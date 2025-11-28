import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target, Zap, ShieldCheck, Camera, BarChart3, Users, TrendingUp,
  Clock, Eye, ArrowLeft, Phone, X, Check, Brain, MonitorPlay,
  Activity, Sparkles, Shield, AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const DatavsnRetailAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "DATAVSN - Ciblage Publicitaire IA & Analytics Retail | Cas Client DAINAMICS";
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

  const painPoints = [
    "Aucune visibilité sur l'efficacité des affichages publicitaires",
    "Communication non ciblée = gaspillage de budget marketing",
    "Impossible de connaître le profil démographique des visiteurs en magasin",
    "Publicités statiques ignorées par les passants",
    "Pas d'équivalent 'Google Analytics' pour les points de vente physiques",
    "ROI des campagnes d'affichage impossible à mesurer"
  ];

  const features = [
    {
      title: "Reconnaissance Audience IA",
      description: "Détection âge, sexe, émotions en temps réel. 100% anonyme (aucune donnée biométrique stockée). Traitement local sur Databox (pas de cloud).",
      icon: Brain
    },
    {
      title: "Ciblage Intelligent",
      description: "8 catégories : Enfant/Jeune/Adulte/Senior × Homme/Femme. Contenu publicitaire adapté automatiquement. Rotation intelligente des messages.",
      icon: Target
    },
    {
      title: "Affichage Multi-Supports",
      description: "Écrans dynamiques HD, hologrammes 3D, totems publicitaires, vitrines intelligentes.",
      icon: MonitorPlay
    },
    {
      title: "Dashboard Analytics 24/7",
      description: "Plateforme my.datavsn.ch. OTS (Opportunity To See), taux de conversion, temps d'attention, répartition démographique.",
      icon: BarChart3
    }
  ];

  const analytics = [
    { label: "OTS (Opportunity To See)", icon: Eye },
    { label: "Nombre d'observateurs", icon: Users },
    { label: "Taux de conversion extérieur-intérieur", icon: TrendingUp },
    { label: "Temps de visionnage et d'attention", icon: Clock },
    { label: "Ratio d'attraction", icon: Target },
    { label: "Répartition Genre-Âge-Émotions", icon: Activity }
  ];

  const techStack = {
    "Edge Computing & IA": [
      "TensorFlow Lite",
      "OpenCV",
      "Python",
      "NVIDIA Jetson / ARM"
    ],
    "Backend & API": [
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "Redis"
    ],
    "Frontend Dashboard": [
      "Next.js 14",
      "React 18",
      "Recharts",
      "TypeScript"
    ],
    "Infrastructure": [
      "Swiss Hosting",
      "Docker",
      "Nginx",
      "MQTT"
    ]
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
                    RetailTech
                  </span>
                  <span className="px-4 py-2 rounded-full bg-dainamics-primary/10 border border-dainamics-primary/30 text-dainamics-primary text-sm font-medium">
                    AdTech
                  </span>
                </motion.div>

                {/* Titre */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
                >
                  <span className="text-white">DATAVSN</span>
                  <br />
                  <span className="text-dainamics-primary">Ciblage Publicitaire IA</span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Système intelligent combinant affichage dynamique (écrans, hologrammes 3D, totems)
                  avec reconnaissance d'audience IA. Analyse temps réel des visiteurs pour un ciblage
                  publicitaire automatique et des analytics retail 24/7.
                </motion.p>

                {/* Métriques hero */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-primary/20">
                    <div className="text-3xl font-bold text-dainamics-primary mb-1">8+</div>
                    <div className="text-xs text-gray-400">Catégories ciblage</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-accent/20">
                    <div className="text-3xl font-bold text-dainamics-accent mb-1">&lt; 1 sec</div>
                    <div className="text-xs text-gray-400">Temps de réponse</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-dainamics-cta/20">
                    <div className="text-3xl font-bold text-dainamics-cta mb-1">100%</div>
                    <div className="text-xs text-gray-400">Conformité RGPD</div>
                  </div>
                </motion.div>
              </div>

              {/* Colonne droite : Visuel/Schema */}
              <motion.div
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-gradient-to-br from-dainamics-primary/20 to-dainamics-accent/20 rounded-2xl p-8 border border-dainamics-primary/30 backdrop-blur-sm">
                  <div className="flex flex-col gap-6">
                    {/* Architecture Flow */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center gap-2">
                        <Camera className="w-12 h-12 text-dainamics-primary" />
                        <span className="text-xs text-gray-400">Caméra IA</span>
                      </div>
                      <ArrowLeft className="w-8 h-8 text-gray-500 rotate-180" />
                      <div className="flex flex-col items-center gap-2">
                        <Brain className="w-12 h-12 text-dainamics-accent" />
                        <span className="text-xs text-gray-400">Databox Edge</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center gap-2">
                        <MonitorPlay className="w-12 h-12 text-dainamics-cta" />
                        <span className="text-xs text-gray-400">Affichage Dynamique</span>
                      </div>
                      <ArrowLeft className="w-8 h-8 text-gray-500 rotate-180" />
                      <div className="flex flex-col items-center gap-2">
                        <BarChart3 className="w-12 h-12 text-dainamics-primary" />
                        <span className="text-xs text-gray-400">Dashboard Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Le Défi */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white/[0.02]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-8 text-center">
                Le <span className="text-dainamics-primary">Défi</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-4 mb-12">
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg"
                  >
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-dainamics-primary/10 to-dainamics-accent/10 border-l-4 border-dainamics-primary p-6 rounded-r-lg"
              >
                <p className="text-xl italic text-gray-200">
                  "Les retailers investissent des milliers de francs en affichage sans savoir
                  qui regarde leurs publicités ni si elles fonctionnent."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Notre Solution */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                Notre <span className="text-dainamics-primary">Solution</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-dainamics-primary/20 hover:border-dainamics-primary/50 transition-all"
                  >
                    <feature.icon className="w-10 h-10 text-dainamics-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Données Analysées */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white/[0.02]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                Données <span className="text-dainamics-primary">Analysées</span>
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {analytics.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-dainamics-primary/10 to-transparent border border-dainamics-primary/20 rounded-xl p-6 flex items-center gap-4"
                  >
                    <item.icon className="w-8 h-8 text-dainamics-primary flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Stack Technique */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                Stack <span className="text-dainamics-primary">Technique</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(techStack).map(([category, technologies], index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-dainamics-primary/20"
                  >
                    <h3 className="text-xl font-bold mb-4 text-dainamics-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-dainamics-primary/10 border border-dainamics-primary/30 rounded-full text-sm text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 bg-gradient-to-r from-dainamics-primary/10 to-dainamics-accent/10 rounded-xl p-6 border border-dainamics-primary/30"
              >
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-dainamics-primary" />
                    <span className="font-semibold">Swiss Made Software</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-dainamics-accent" />
                    <span className="font-semibold">Swiss Hosting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-dainamics-cta" />
                    <span className="font-semibold">RGPD & LPD Conforme</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Résultats */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white/[0.02]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                <span className="text-dainamics-primary">Résultats</span>
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <motion.div variants={fadeInUp} className="bg-gradient-to-br from-dainamics-primary/20 to-transparent border border-dainamics-primary/30 rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold text-dainamics-primary mb-2">8+</div>
                  <p className="text-gray-300">Catégories de ciblage démographique</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-gradient-to-br from-dainamics-accent/20 to-transparent border border-dainamics-accent/30 rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold text-dainamics-accent mb-2">&lt; 1s</div>
                  <p className="text-gray-300">Temps de réponse ciblage</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-gradient-to-br from-dainamics-cta/20 to-transparent border border-dainamics-cta/30 rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold text-dainamics-cta mb-2">24/7</div>
                  <p className="text-gray-300">Analytics temps réel</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-gradient-to-br from-dainamics-primary/20 to-transparent border border-dainamics-primary/30 rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold text-dainamics-primary mb-2">100%</div>
                  <p className="text-gray-300">Conformité RGPD/LPD</p>
                </motion.div>
              </div>

              {/* Bénéfices */}
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  "Augmentation visibilité des messages publicitaires",
                  "Optimisation efficacité des campagnes",
                  "Connaissance client 'physique' (vs online)",
                  "Mesure ROI affichage publicitaire",
                  "Ciblage temps réel automatique"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-dainamics-primary/5 border border-dainamics-primary/20 rounded-lg">
                    <Check className="w-5 h-5 text-dainamics-primary flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
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
              variants={fadeInUp}
              className="bg-gradient-to-br from-dainamics-primary/10 to-dainamics-accent/10 border border-dainamics-primary/30 rounded-2xl p-8 md:p-12 text-center"
            >
              <Sparkles className="w-12 h-12 text-dainamics-primary mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light italic text-gray-100 mb-8 leading-relaxed">
                "DATAVSN c'est comme Google Analytics pour notre point de vente.
                On connaît enfin le profil de nos visiteurs et nos publicités
                s'adaptent automatiquement. Le ROI de nos campagnes a explosé."
              </blockquote>
              <div className="text-gray-300">
                <p className="font-semibold text-white">Direction Innovation</p>
                <p className="text-sm">Projet DATAVSN</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: CTA Final */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white/[0.02]">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Un projet <span className="text-dainamics-primary">retail analytics</span> similaire ?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
                Discutons de votre besoin en ciblage publicitaire intelligent.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/contact">
                  <Button size="lg" className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white px-8 py-6 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Planifier un appel découverte
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

export default DatavsnRetailAnalytics;
