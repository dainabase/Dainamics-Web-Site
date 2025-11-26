import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Monitor, Users, BarChart3, Smartphone,
  Search, PenTool, Code2, Rocket,
  Phone, Mail, X, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const ServicesDeveloppement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Développement Software Sur Mesure | DAINAMICS";
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
    <div className="min-h-screen bg-dainamics-background text-white">
      <CursorEffects />
      <EnhancedGridBackground />
      <Navigation />

      <main className="relative z-10">
        {/* Section 1: Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5A00]/10 border border-[#FF5A00]/30 text-[#FF5A00] text-sm font-medium">
                  <Code2 className="w-4 h-4" />
                  Développement Sur Mesure
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              >
                <span className="text-white">Votre Métier Mérite</span>
                <br />
                <span className="text-gradient-primary glow">Son Propre Logiciel</span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Applications web, portails clients, dashboards sur mesure.
                Nous construisons les outils qui correspondent exactement à votre façon de travailler.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,90,0,0.5)]"
                >
                  <a href="#contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuter de mon projet
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-dainamics-secondary text-dainamics-secondary hover:bg-dainamics-secondary/10 font-semibold text-lg px-8 py-6"
                >
                  <Link to="/realisations">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Voir nos réalisations
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Problèmes Résolus */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
              >
                Vous vous reconnaissez ?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: X, text: "On utilise 5 logiciels différents qui ne communiquent pas" },
                  { icon: X, text: "Excel partout, ressaisies constantes, erreurs fréquentes" },
                  { icon: X, text: "Le logiciel du marché fait 20% de ce dont on a besoin" },
                  { icon: X, text: "Nos équipes terrain n'ont pas accès aux infos en temps réel" }
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/[0.03] border border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <problem.icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-white/80 text-lg leading-relaxed">
                        "{problem.text}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Nos Solutions */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                Ce qu'on construit pour vous
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/60"
              >
                Des solutions sur mesure, pas des usines à gaz
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Monitor,
                  title: "Applications Web Métier",
                  description: "CRM sur mesure, ERP léger, plateforme B2B adaptée à vos processus exacts.",
                  features: [
                    "Interface adaptée à vos utilisateurs",
                    "Intégration systèmes existants",
                    "Évolutif selon vos besoins"
                  ]
                },
                {
                  icon: Users,
                  title: "Portails Client Self-Service",
                  description: "Vos clients accèdent à leurs infos 24/7 sans appeler votre équipe.",
                  features: [
                    "Accès factures et commandes",
                    "Suivi projets temps réel",
                    "Zone documents sécurisée"
                  ]
                },
                {
                  icon: BarChart3,
                  title: "Dashboards Analytiques",
                  description: "Vue unifiée de vos données en temps réel, fini les 10 fichiers Excel.",
                  features: [
                    "Données multi-sources agrégées",
                    "KPIs métier personnalisés",
                    "Alertes automatiques"
                  ]
                },
                {
                  icon: Smartphone,
                  title: "Applications Mobiles",
                  description: "Vos équipes terrain connectées, même hors ligne.",
                  features: [
                    "iOS et Android natif",
                    "Mode hors-ligne",
                    "Synchronisation temps réel"
                  ]
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#FF5A00]/40 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#FF5A00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-[#FF5A00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-white/60 mb-4 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 4: Cas Clients (LEXAIA + ENKI) */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
              Projets Réalisés
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEXAIA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#7B2FFF]/10 to-transparent border border-[#7B2FFF]/30 rounded-2xl p-8 hover:border-[#7B2FFF]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#7B2FFF]/20 text-[#7B2FFF] rounded-full text-sm font-medium">
                    LegalTech
                  </span>
                  <span className="px-3 py-1 bg-[#FF5A00]/20 text-[#FF5A00] rounded-full text-sm font-medium">
                    Plateforme Sur Mesure
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">LEXAIA</h3>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  Plateforme d'analyse de contrats par IA pour cabinets juridiques.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#7B2FFF] mb-1">40+</div>
                    <div className="text-sm text-white/60">Microservices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#7B2FFF] mb-1">850+</div>
                    <div className="text-sm text-white/60">Contrats/mois</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#7B2FFF] mb-1">90+</div>
                    <div className="text-sm text-white/60">Langues OCR</div>
                  </div>
                </div>

                <div className="text-sm text-white/50 font-mono">
                  Stack : Next.js 15, React 19, Python FastAPI, LangChain, PostgreSQL
                </div>
              </motion.div>

              {/* ENKI REALTY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#10E4FF]/10 to-transparent border border-[#10E4FF]/30 rounded-2xl p-8 hover:border-[#10E4FF]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#10E4FF]/20 text-[#10E4FF] rounded-full text-sm font-medium">
                    PropTech
                  </span>
                  <span className="px-3 py-1 bg-[#FF5A00]/20 text-[#FF5A00] rounded-full text-sm font-medium">
                    Plateforme Sur Mesure
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">ΣNKI REALTY</h3>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  Plateforme B2B2C immobilière avec 6 agents IA spécialisés.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#10E4FF] mb-1">+218%</div>
                    <div className="text-sm text-white/60">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#10E4FF] mb-1">6</div>
                    <div className="text-sm text-white/60">Agents IA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#10E4FF] mb-1">B2B2C</div>
                    <div className="text-sm text-white/60">Architecture</div>
                  </div>
                </div>

                <div className="text-sm text-white/50 font-mono">
                  Stack : Next.js 14, TypeScript, Supabase, Claude AI
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Processus (Timeline) */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                Comment ça se passe
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/60"
              >
                De l'idée au déploiement en 2-4 mois
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Search,
                  step: "1. Discovery",
                  duration: "1-2 semaines",
                  description: "Comprendre vos processus et définir le périmètre exact"
                },
                {
                  icon: PenTool,
                  step: "2. Prototype",
                  duration: "2-3 semaines",
                  description: "Maquettes interactives pour valider l'UX"
                },
                {
                  icon: Code2,
                  step: "3. Développement",
                  duration: "4-12 semaines",
                  description: "Sprints de 2 semaines avec démos régulières"
                },
                {
                  icon: Rocket,
                  step: "4. Déploiement",
                  duration: "1-2 semaines",
                  description: "Mise en production + formation équipes"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-[#FF5A00]/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[#FF5A00]/10 flex items-center justify-center mb-4">
                      <phase.icon className="w-6 h-6 text-[#FF5A00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{phase.step}</h3>
                    <div className="text-[#FF5A00] font-medium mb-3">{phase.duration}</div>
                    <p className="text-white/60 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/20">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Investissement */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                Investissement
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/60"
              >
                Prix transparents, pas de mauvaise surprise
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Application Simple",
                  subtitle: "Dashboard, portail basique",
                  price: "25-40K€",
                  delivery: "6-10 semaines",
                  popular: false
                },
                {
                  title: "Application Complète",
                  subtitle: "CRM métier, plateforme B2B",
                  price: "40-75K€",
                  delivery: "10-16 semaines",
                  popular: true
                },
                {
                  title: "Plateforme Entreprise",
                  subtitle: "Multi-modules, intégrations complexes",
                  price: "75-150K€",
                  delivery: "16-24 semaines",
                  popular: false
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white/[0.03] border rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 ${
                    tier.popular
                      ? 'border-[#FF5A00] shadow-[0_0_30px_rgba(255,90,0,0.2)]'
                      : 'border-white/10 hover:border-[#FF5A00]/40'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-[#FF5A00] text-white text-sm font-bold rounded-full">
                        Populaire
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                  <p className="text-white/60 mb-6">{tier.subtitle}</p>
                  <div className="text-4xl font-bold text-[#FF5A00] mb-4">{tier.price}</div>
                  <p className="text-white/80">Livraison : {tier.delivery}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-white/50 text-sm"
            >
              Maintenance : 15-20% du coût initial par an • Support inclus 3 mois
            </motion.div>
          </div>
        </section>

        {/* Section 7: CTA Final */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center bg-gradient-to-br from-[#FF5A00]/10 to-transparent border border-[#FF5A00]/30 rounded-3xl p-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                Prêt à construire votre solution ?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/70 mb-10"
              >
                30 minutes pour comprendre votre besoin et vous dire honnêtement si on peut vous aider.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                >
                  <a href="tel:+41000000000">
                    <Phone className="w-5 h-5 mr-2" />
                    Réserver un appel gratuit
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/5 font-semibold text-lg px-8 py-6"
                >
                  <a href="mailto:contact@dainamics.ch">
                    <Mail className="w-5 h-5 mr-2" />
                    contact@dainamics.ch
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesDeveloppement;
