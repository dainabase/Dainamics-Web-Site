import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Cloud,
  Bot,
  Bell,
  Calendar
} from 'lucide-react';

interface QuickWin {
  id: string;
  title: string;
  setupTime: number;
  icon: React.ReactNode;
  gain: string;
  badge: {
    text: string;
    variant: 'success' | 'warning' | 'primary' | 'secondary';
  };
  cta: string;
  ctaLink: string;
}

const quickWinsData: QuickWin[] = [
  {
    id: 'email-signature',
    title: 'Signature Email',
    setupTime: 15,
    icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
    gain: 'Image marque',
    badge: { text: 'Gratuit', variant: 'success' },
    cta: 'Créer signature',
    ctaLink: '#diagnostic'
  },
  {
    id: 'cloud-backup',
    title: 'Backup Cloud',
    setupTime: 20,
    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
    gain: 'Sécurité 100%',
    badge: { text: 'Critique', variant: 'warning' },
    cta: 'Configurer',
    ctaLink: '#diagnostic'
  },
  {
    id: 'chatbot-faq',
    title: 'Chatbot FAQ',
    setupTime: 30,
    icon: <Bot className="w-5 h-5 md:w-6 md:h-6" />,
    gain: '10h/semaine',
    badge: { text: 'Impact élevé', variant: 'primary' },
    cta: 'Intégrer chatbot',
    ctaLink: '#diagnostic'
  },
  {
    id: 'invoice-reminders',
    title: 'Rappels Factures',
    setupTime: 30,
    icon: <Bell className="w-5 h-5 md:w-6 md:h-6" />,
    gain: 'Paiements +40%',
    badge: { text: 'ROI immédiat', variant: 'warning' },
    cta: 'Activer rappels',
    ctaLink: '#diagnostic'
  },
  {
    id: 'social-scheduler',
    title: 'Publication Social',
    setupTime: 45,
    icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
    gain: '10h/semaine',
    badge: { text: 'Marketing', variant: 'secondary' },
    cta: 'Programmer posts',
    ctaLink: '#diagnostic'
  }
];

const getBadgeStyles = (variant: string) => {
  switch (variant) {
    case 'success':
      return 'bg-dainamics-success/10 text-dainamics-success border-dainamics-success/30';
    case 'warning':
      return 'bg-dainamics-cta/10 text-dainamics-cta border-dainamics-cta/30';
    case 'primary':
      return 'bg-dainamics-primary/10 text-dainamics-primary border-dainamics-primary/30';
    case 'secondary':
      return 'bg-dainamics-secondary/10 text-dainamics-secondary border-dainamics-secondary/30';
    default:
      return 'bg-dainamics-primary/10 text-dainamics-primary border-dainamics-primary/30';
  }
};

const QuickWinsGrid: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-dainamics-card-alt overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-dainamics-secondary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-dainamics-success/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-gradient-secondary">
                5 Quick Wins
              </span>
            </h2>
            <p className="text-lg md:text-xl text-dainamics-light/80">
              Setup en moins d'1 heure. ROI immédiat.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-dainamics-light/50">
            <span>Glisser →</span>
            <motion.svg
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </div>
        </motion.div>

        <div className="relative mb-8 md:mb-12">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-dainamics-cta via-dainamics-secondary to-dainamics-success opacity-20" />

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-dainamics-secondary scrollbar-track-dainamics-border/20">
            {quickWinsData.map((item, index) => (
              <QuickWinCard key={item.id} data={item} index={index} />
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-4">
            {quickWinsData.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-dainamics-border"
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="#diagnostic"
            className="group relative px-10 py-4 rounded-full font-bold text-base text-dainamics-light overflow-hidden transition-all duration-300 hover:-translate-y-0.5 btn-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dainamics-cta via-dainamics-secondary to-dainamics-success" />

            <span className="relative flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Démarrer Mes 5 Quick Wins</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface QuickWinCardProps {
  data: QuickWin;
  index: number;
}

const QuickWinCard: React.FC<QuickWinCardProps> = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="relative flex-shrink-0 w-72 snap-center"
    >
      <div className="h-full p-6 rounded-2xl bg-dainamics-card border border-dainamics-border shadow-xl hover:border-dainamics-primary/50 transition-all duration-300 flex flex-col">

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dainamics-cta/10 border border-dainamics-cta/30">
            <svg className="w-4 h-4 text-dainamics-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-dainamics-cta">
              {data.setupTime} min
            </span>
          </div>

          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-dainamics-primary/20 flex items-center justify-center text-dainamics-primary`}>
            {data.icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-dainamics-light mb-3">
          {data.title}
        </h3>

        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${getBadgeStyles(data.badge.variant)}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-sm font-semibold">{data.badge.text}</span>
        </div>

        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-3xl font-bold text-dainamics-light">
            {data.gain}
          </span>
          <span className="text-sm text-dainamics-light/60">
            économisés
          </span>
        </div>

        <div className="h-1.5 bg-dainamics-border/30 rounded-full overflow-hidden mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(data.setupTime / 60) * 100}%` }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-dainamics-cta to-dainamics-success"
          />
        </div>

        <a
          href={data.ctaLink}
          className="block w-full py-3 px-4 rounded-xl bg-dainamics-background text-dainamics-light font-semibold text-center hover:bg-dainamics-background/80 transition-colors duration-200 group border border-dainamics-border/50"
        >
          <span className="flex items-center justify-center gap-2">
            {data.cta}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>

      </div>
    </motion.div>
  );
};

export default QuickWinsGrid;
