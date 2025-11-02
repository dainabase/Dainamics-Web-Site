import { motion } from 'framer-motion';
import {
  BookOpen,
  ClipboardList,
  Calendar,
  ArrowRight,
  Sparkles,
  Phone,
  CheckCircle2,
  Shield,
  Mail,
  Clock,
  Linkedin,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  BookOpen,
  ClipboardList,
  Calendar,
  ArrowRight,
  Sparkles,
  Phone,
  CheckCircle2,
  Shield,
  Mail,
  Clock,
  Linkedin,
  Star
};

interface CTA {
  text: string;
  link: string;
  icon: keyof typeof iconMap;
  style: 'primary' | 'secondary' | 'outline';
}

interface Parcour {
  id: string;
  number: number;
  icon: keyof typeof iconMap;
  iconEmoji: string;
  color: string;
  gradient: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: CTA;
  recommendation: string;
  badge?: string;
}

interface Contact {
  type: string;
  icon: keyof typeof iconMap;
  label: string;
  value: string;
  link: string;
}

const parcours: Parcour[] = [
  {
    id: 'explorer',
    number: 1,
    icon: 'BookOpen',
    iconEmoji: '📚',
    color: '#00E68A',
    gradient: 'from-[#00E68A] to-[#00B36B]',
    tag: 'Pour Décideurs',
    title: 'Je Sais Ce Que Je Veux',
    subtitle: 'Vous avez identifié votre besoin',
    description: "Explorez nos projets réalisés, cas clients et solutions détaillées pour vous inspirer.",
    features: [
      '50+ projets avec résultats mesurés',
      'Filtres par industrie et problème',
      'Stack techniques détaillées',
      'ROI et gains quantifiés'
    ],
    cta: {
      text: 'Explorer Solutions & Projets',
      link: '/portfolio',
      icon: 'ArrowRight',
      style: 'primary'
    },
    recommendation: 'Idéal si : Vous savez quel type d\'automatisation vous cherchez'
  },
  {
    id: 'diagnostic',
    number: 2,
    icon: 'ClipboardList',
    iconEmoji: '📋',
    color: '#7B2FFF',
    gradient: 'from-[#7B2FFF] to-[#5E24BF]',
    tag: 'Plus Populaire',
    title: 'Besoin d\'Aide Pour Choisir',
    subtitle: 'Pas sûr par où commencer',
    description: "Diagnostic interactif en 2 minutes pour identifier vos opportunités ROI prioritaires.",
    features: [
      '5 questions ciblées métier',
      'Rapport PDF avec recommandations',
      'Estimation ROI personnalisée',
      'Suggestions solutions adaptées'
    ],
    cta: {
      text: 'Démarrer Diagnostic Gratuit',
      link: '#diagnostic',
      icon: 'Sparkles',
      style: 'primary'
    },
    recommendation: 'Idéal si : Vous cherchez des idées d\'automatisation pour votre PME',
    badge: 'Recommandé'
  },
  {
    id: 'calendly',
    number: 3,
    icon: 'Calendar',
    iconEmoji: '📞',
    color: '#FF5A00',
    gradient: 'from-[#FF5A00] to-[#CC4800]',
    tag: 'Le Plus Direct',
    title: 'Je Veux Parler à un Expert',
    subtitle: 'Échange personnalisé',
    description: "Réservez un appel de 30 minutes avec notre équipe pour discuter de votre projet spécifique.",
    features: [
      'Appel vidéo ou téléphone',
      'Analyse préliminaire gratuite',
      'Questions-réponses en direct',
      'Proposition sur-mesure'
    ],
    cta: {
      text: 'Réserver Appel 30 min',
      link: '/contact',
      icon: 'Phone',
      style: 'primary'
    },
    recommendation: 'Idéal si : Vous avez un projet spécifique en tête et voulez échanger'
  }
];

const contacts: Contact[] = [
  {
    type: 'email',
    icon: 'Mail',
    label: 'Email',
    value: 'contact@dainamics.ch',
    link: 'mailto:contact@dainamics.ch'
  },
  {
    type: 'phone',
    icon: 'Phone',
    label: 'Téléphone',
    value: '+41 XX XXX XX XX',
    link: 'tel:+41XXXXXXXXX'
  },
  {
    type: 'linkedin',
    icon: 'Linkedin',
    label: 'LinkedIn',
    value: 'DAINAMICS',
    link: 'https://linkedin.com/company/dainamics'
  }
];

const CTAFinalSection = () => {
  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,230,138,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,90,0,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Shield className="w-4 h-4 text-[#00E68A]" />
              <span className="text-sm text-white/90 font-medium">
                3 Options • 0 Risque • 100% Gratuit
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Prêt à </span>
              <span className="bg-gradient-to-r from-[#7B2FFF] via-[#00E68A] to-[#FF5A00] bg-clip-text text-transparent">
                Transformer
              </span>
              <span className="text-white"> Votre Business ?</span>
            </h2>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choisissez votre point de départ selon votre situation.
              Aucun engagement, 100% gratuit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {parcours.map((parcour, index) => {
            const IconComponent = iconMap[parcour.icon];
            const CTAIconComponent = iconMap[parcour.cta.icon];

            return (
              <motion.div
                key={parcour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {parcour.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#7B2FFF] to-[#5E24BF] text-white text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      {parcour.badge}
                    </div>
                  </div>
                )}

                <div className="relative h-full p-8 rounded-2xl bg-[#0A0A1A] border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl -z-10"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${parcour.color}25, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${parcour.color}15`,
                          color: parcour.color
                        }}
                      >
                        {parcour.tag}
                      </span>
                    </div>

                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${parcour.color}20, transparent)`,
                        border: `1px solid ${parcour.color}40`
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: parcour.color }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {parcour.title}
                    </h3>
                    <p
                      className="text-sm font-medium mb-4"
                      style={{ color: parcour.color }}
                    >
                      {parcour.subtitle}
                    </p>

                    <p className="text-sm text-white/70 mb-6">
                      {parcour.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {parcour.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: parcour.color }}
                          />
                          <span className="text-sm text-white/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-6 mt-auto">
                      <p className="text-xs text-white/70">
                        {parcour.recommendation}
                      </p>
                    </div>

                    <Button
                      asChild
                      className={`w-full group/btn transition-all duration-300 bg-gradient-to-r ${parcour.gradient} hover:opacity-90 text-white font-medium`}
                      size="lg"
                    >
                      <a href={parcour.cta.link} className="flex items-center justify-center gap-2">
                        {parcour.cta.text}
                        <CTAIconComponent className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative h-px mb-12">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Questions Avant de Choisir ?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous guider. Contactez-nous par email ou téléphone.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {contacts.map((contact, idx) => {
              const ContactIcon = iconMap[contact.icon];

              return (
                <a
                  key={idx}
                  href={contact.link}
                  target={contact.type === 'email' ? '_self' : '_blank'}
                  rel={contact.type === 'email' ? '' : 'noopener noreferrer'}
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <ContactIcon className="w-5 h-5 text-[#00C8E6]" />
                  <div className="text-left">
                    <div className="text-xs text-white/60">{contact.label}</div>
                    <div className="text-sm text-white font-medium group-hover:text-[#00C8E6] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Clock className="w-4 h-4" />
            <span>Réponse sous 24h en semaine</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
