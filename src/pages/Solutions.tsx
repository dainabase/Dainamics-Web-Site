import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  Code2,
  Users,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Rocket,
  Wallet,
  Clock,
  Target,
  Globe,
  Check
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const formules = [
  {
    icon: Zap,
    title: "Quick Win",
    tagline: "Un problème. Une solution. Vite fait.",
    price: "8 000€ - 15 000€",
    duration: "2-4 semaines",
    roi: "ROI 3-6 mois",
    color: "#0AFF9D",
    features: [
      "Chatbot support client",
      "Automatisation facturation",
      "Extraction documents",
      "Dashboards analytics"
    ],
    ideal: "Résoudre UN problème précis rapidement",
    cta: "Voir les Quick Wins",
    link: "/contact"
  },
  {
    icon: Code2,
    title: "Projet Custom",
    tagline: "Votre outil. Sur mesure. Exactement.",
    price: "25 000€ - 75 000€",
    duration: "2-6 mois",
    roi: "Transformation durable",
    color: "#7B2FFF",
    popular: true,
    features: [
      "Plateforme métier complète",
      "CRM sur-mesure",
      "Application mobile",
      "Intégrations complexes"
    ],
    ideal: "Digitaliser entièrement un processus",
    cta: "Découvrir",
    link: "/contact"
  },
  {
    icon: Users,
    title: "Équipe Dédiée",
    tagline: "Vos projets. Nos experts.",
    price: "7 000€/mois",
    duration: "Flexible",
    roi: "Scalable",
    color: "#10E4FF",
    features: [
      "Développeurs seniors",
      "Chef de projet dédié",
      "Méthodologie agile",
      "Montée en charge rapide"
    ],
    ideal: "Projets multiples ou continus",
    cta: "En savoir plus",
    link: "/contact"
  }
];

const etapes = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Analyser",
    duration: "30 min gratuit",
    description: "On comprend vos défis, vos contraintes, vos objectifs. Sans jargon.",
    color: "#7B2FFF"
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Prototyper",
    duration: "1 semaine",
    description: "On vous montre concrètement à quoi ressemblera la solution.",
    color: "#10E4FF"
  },
  {
    num: "03",
    icon: Rocket,
    title: "Livrer",
    duration: "2-4 semaines",
    description: "On déploie, on forme vos équipes, on reste disponibles.",
    color: "#0AFF9D"
  }
];

const avantages = [
  {
    icon: Wallet,
    title: "Adapté PME",
    description: "Solutions proportionnées à vos besoins et votre budget. Pas de projet usine à gaz."
  },
  {
    icon: Clock,
    title: "Rapide",
    description: "Livraison Quick Wins en 2-4 semaines. Vous voyez les résultats vite."
  },
  {
    icon: Target,
    title: "Pragmatique",
    description: "ROI d'abord. Pas de buzzwords. On mesure les gains concrètement."
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "FR, DE, EN, IT. On travaille avec toute l'Europe."
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#050510]">
      <Navigation />

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                variants={fadeInUp}
              >
                Des solutions adaptées à{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FFF] to-[#10E4FF]">
                  votre réalité
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/60 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Pas de projet usine à gaz. On dimensionne l'intervention
                à votre problème et votre budget. Du Quick Win en 2 semaines
                à la transformation complète.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {formules.map((formule, index) => {
                const Icon = formule.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative bg-white/[0.03] border rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 ${
                      formule.popular
                        ? 'border-[#7B2FFF]/50 shadow-lg shadow-[#7B2FFF]/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {formule.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#7B2FFF] rounded-full text-sm font-medium text-white">
                        Populaire
                      </div>
                    )}

                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${formule.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: formule.color }} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {formule.title}
                    </h3>
                    <p className="text-white/50 mb-6">
                      "{formule.tagline}"
                    </p>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-white mb-1">
                        {formule.price}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <span>{formule.duration}</span>
                        <span>•</span>
                        <span>{formule.roi}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {formule.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-[#0AFF9D] flex-shrink-0" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-sm text-white/40 mb-6 pb-6 border-b border-white/10">
                      <span className="text-white/60">Idéal pour :</span> {formule.ideal}
                    </div>

                    <Link
                      to={formule.link}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium transition-all duration-300"
                      style={{
                        backgroundColor: formule.popular ? '#FF5A00' : 'transparent',
                        border: formule.popular ? 'none' : '1px solid rgba(255,255,255,0.2)',
                        color: 'white'
                      }}
                    >
                      {formule.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                3 étapes. Pas de surprise.
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Un processus simple et transparent, du premier appel à la mise en production.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#0AFF9D] opacity-30" />

              {etapes.map((etape, index) => {
                const Icon = etape.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative text-center"
                  >
                    <div className="relative inline-block mb-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                        style={{ backgroundColor: `${etape.color}15` }}
                      >
                        <Icon className="w-10 h-10" style={{ color: etape.color }} />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: etape.color }}
                      >
                        {etape.num}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {etape.title}
                    </h3>
                    <div
                      className="text-sm font-medium mb-3"
                      style={{ color: etape.color }}
                    >
                      {etape.duration}
                    </div>
                    <p className="text-white/50">
                      {etape.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pourquoi DAINAMICS ?
              </h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {avantages.map((avantage, index) => {
                const Icon = avantage.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#7B2FFF]/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#7B2FFF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {avantage.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {avantage.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#7B2FFF]/20 to-[#10E4FF]/10 border border-white/10 rounded-3xl p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pas sûr de quelle formule vous convient ?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                On en discute 30 min. On vous conseille honnêtement.
                Parfois un Quick Win suffit. Parfois il faut plus. On vous le dira.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5A00] text-white font-semibold rounded-lg hover:bg-[#FF5A00]/90 transition-colors"
              >
                Réserver mon appel gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
