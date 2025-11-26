import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Send,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Clock,
  CheckCircle2,
  Users,
  Shield,
  ArrowRight,
  Loader2
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const callBenefits = [
  "Comprendre vos défis actuels",
  "Identifier les opportunités d'automatisation",
  "Estimer le ROI potentiel",
  "Proposer les prochaines étapes"
];

const trustBadges = [
  { icon: Clock, text: "30 minutes" },
  { icon: Shield, text: "Sans engagement" },
  { icon: Users, text: "Gratuit" }
];

const companySizes = [
  { value: '', label: 'Sélectionner...' },
  { value: '1-10', label: '1-10 employés' },
  { value: '10-50', label: '10-50 employés' },
  { value: '50-200', label: '50-200 employés' },
  { value: '200+', label: '200+ employés' }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@dainamics.ch',
    href: 'mailto:info@dainamics.ch'
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+41 26 561 40 45',
    href: 'tel:+41265614045'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'DAINAMICS',
    href: 'https://linkedin.com/company/dainamics'
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Avenue de Beauregard 1, 1700 Fribourg',
    href: null
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', size: '', message: '' });
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
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
                Parlons de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FFF] to-[#10E4FF]">
                  votre projet
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/60 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                30 minutes. On comprend votre situation.
                On identifie le meilleur premier pas.
                Gratuit. Sans engagement.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6 mt-8"
                variants={fadeInUp}
              >
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-white/60">
                      <Icon className="w-5 h-5 text-[#0AFF9D]" />
                      <span>{badge.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#7B2FFF]/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#7B2FFF]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        Réserver un appel
                      </h2>
                      <p className="text-white/50 text-sm">
                        Choisissez un créneau qui vous convient
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 mb-6 min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-[#7B2FFF]/50 mx-auto mb-4" />
                      <p className="text-white/60 mb-4">
                        Calendrier de réservation
                      </p>
                      <a
                        href="https://calendly.com/dainamics/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#7B2FFF] text-white font-medium rounded-lg hover:bg-[#7B2FFF]/90 transition-colors"
                      >
                        <Calendar className="w-5 h-5" />
                        Ouvrir Calendly
                      </a>
                      <p className="text-white/40 text-sm mt-4">
                        Ou intégrez directement le widget Calendly ici
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Ce qu'on fera ensemble :
                    </h3>
                    <div className="space-y-3">
                      {callBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0AFF9D] flex-shrink-0" />
                          <span className="text-white/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-sm">
                      Disponible en : <span className="text-white">FR</span> • <span className="text-white">DE</span> • <span className="text-white">EN</span> • <span className="text-white">IT</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#10E4FF]/20 flex items-center justify-center">
                      <Send className="w-6 h-6 text-[#10E4FF]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        Ou écrivez-nous
                      </h2>
                      <p className="text-white/50 text-sm">
                        Réponse sous 4h ouvrées
                      </p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#0AFF9D]/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-[#0AFF9D]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-white/60 mb-6">
                        Nous vous répondrons sous 4 heures ouvrées.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-[#7B2FFF] hover:text-[#10E4FF] transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF] transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF] transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                          Entreprise *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF] transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <div>
                        <label htmlFor="size" className="block text-sm font-medium text-white/70 mb-2">
                          Taille (employés)
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF] transition-colors appearance-none cursor-pointer"
                        >
                          {companySizes.map(option => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-[#0A0A0F] text-white"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                          Votre défi principal *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF] transition-colors resize-none"
                          placeholder="Décrivez brièvement le problème que vous souhaitez résoudre..."
                        />
                      </div>

                      {error && (
                        <div className="text-red-400 text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FF5A00] text-white font-semibold rounded-lg hover:bg-[#FF5A00]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-white/40 text-sm">
                        Réponse garantie sous 4 heures ouvrées
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Autres moyens de nous contacter
              </h2>
              <p className="text-white/50">
                Choisissez ce qui vous convient le mieux
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:bg-white/[0.05] hover:border-[#7B2FFF]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#7B2FFF]/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#7B2FFF]" />
                    </div>
                    <div className="text-white/50 text-sm mb-1">
                      {info.label}
                    </div>
                    <div className="text-white font-medium">
                      {info.value}
                    </div>
                  </div>
                );

                return (
                  <motion.div key={index} variants={fadeInUp}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-white/40">
                <span className="text-white/60">DAINAMICS by HMF Corporation SA</span> • Avenue de Beauregard 1, 1700 Fribourg, Switzerland • <span className="text-white/60">Intervention :</span> Toute l'Europe
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
                variants={fadeInUp}
              >
                Questions fréquentes
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    q: "L'appel est-il vraiment gratuit ?",
                    a: "Oui, 100% gratuit et sans engagement. On prend 30 minutes pour comprendre votre situation et voir si on peut vous aider."
                  },
                  {
                    q: "Combien de temps avant d'avoir une réponse ?",
                    a: "Pour les messages : sous 4 heures ouvrées. Pour les appels : vous choisissez directement un créneau dans notre calendrier."
                  },
                  {
                    q: "Travaillez-vous avec des entreprises hors de Suisse ?",
                    a: "Absolument. Nous travaillons avec des PME dans toute l'Europe. Les réunions se font en visio, et nous nous déplaçons pour les projets importants."
                  },
                  {
                    q: "Quel budget minimum pour travailler avec vous ?",
                    a: "Nos Quick Wins commencent à 8 000€. On vous dira honnêtement si votre projet nécessite un budget plus ou moins important."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-white/60">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
