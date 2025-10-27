import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Code, LineChart } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: 'primary' | 'secondary' | 'success' | 'cta';
  link: string;
}

const servicesData: Service[] = [
  {
    id: 'ia',
    title: 'Intelligence Artificielle',
    subtitle: 'Sur Mesure',
    description: 'Solutions IA personnalisées pour automatiser vos processus métier et augmenter votre productivité',
    icon: <Brain className="w-8 h-8" />,
    features: [
      'Agents IA conversationnels',
      'Analyse prédictive',
      'Vision par ordinateur',
      'Traitement du langage'
    ],
    color: 'primary',
    link: '/expertise-ia'
  },
  {
    id: 'automatisation',
    title: 'Automatisation',
    subtitle: 'Intelligente',
    description: 'Workflows automatisés qui éliminent les tâches répétitives et libèrent votre équipe',
    icon: <Zap className="w-8 h-8" />,
    features: [
      'Workflows no-code',
      'Intégrations APIs',
      'RPA & Process mining',
      'Orchestration cloud'
    ],
    color: 'secondary',
    link: '/expertise-automatisation'
  },
  {
    id: 'developpement',
    title: 'Développement',
    subtitle: 'Software',
    description: 'Applications web et mobile scalables avec architecture moderne et UX premium',
    icon: <Code className="w-8 h-8" />,
    features: [
      'Web apps React/Next.js',
      'Mobile iOS/Android',
      'APIs RESTful',
      'Architecture cloud'
    ],
    color: 'success',
    link: '/expertise-developpement'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    subtitle: 'Data-Driven',
    description: 'Tableaux de bord et rapports automatisés pour piloter votre croissance par la donnée',
    icon: <LineChart className="w-8 h-8" />,
    features: [
      'Dashboards temps réel',
      'Business Intelligence',
      'Data visualization',
      'Reporting automatique'
    ],
    color: 'cta',
    link: '/solutions'
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return {
        iconBg: 'bg-dainamics-primary/20',
        iconText: 'text-dainamics-primary',
        border: 'border-dainamics-primary/30',
        hoverBorder: 'hover:border-dainamics-primary',
        gradient: 'from-dainamics-primary/10 to-transparent'
      };
    case 'secondary':
      return {
        iconBg: 'bg-dainamics-secondary/20',
        iconText: 'text-dainamics-secondary',
        border: 'border-dainamics-secondary/30',
        hoverBorder: 'hover:border-dainamics-secondary',
        gradient: 'from-dainamics-secondary/10 to-transparent'
      };
    case 'success':
      return {
        iconBg: 'bg-dainamics-success/20',
        iconText: 'text-dainamics-success',
        border: 'border-dainamics-success/30',
        hoverBorder: 'hover:border-dainamics-success',
        gradient: 'from-dainamics-success/10 to-transparent'
      };
    case 'cta':
      return {
        iconBg: 'bg-dainamics-cta/20',
        iconText: 'text-dainamics-cta',
        border: 'border-dainamics-cta/30',
        hoverBorder: 'hover:border-dainamics-cta',
        gradient: 'from-dainamics-cta/10 to-transparent'
      };
    default:
      return {
        iconBg: 'bg-dainamics-primary/20',
        iconText: 'text-dainamics-primary',
        border: 'border-dainamics-primary/30',
        hoverBorder: 'hover:border-dainamics-primary',
        gradient: 'from-dainamics-primary/10 to-transparent'
      };
  }
};

const ServicesOverview: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-dainamics-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-dainamics-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-dainamics-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">
              Nos Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dainamics-light/80 max-w-2xl mx-auto">
            4 piliers d'expertise pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const colors = getColorClasses(service.color);

  return (
    <motion.a
      href={service.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative block"
    >
      <div className={`h-full p-6 md:p-8 rounded-2xl bg-dainamics-card border ${colors.border} ${colors.hoverBorder} shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col`}>

        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center mb-6 ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold text-dainamics-light mb-1">
          {service.title}
        </h3>
        <p className={`text-sm font-semibold ${colors.iconText} mb-4 uppercase tracking-wider`}>
          {service.subtitle}
        </p>

        <p className="text-sm md:text-base text-dainamics-light/70 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3 mb-6 flex-1">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              className="flex items-start gap-2"
            >
              <div className={`mt-1 w-1 h-1 rounded-full ${colors.iconBg} flex-shrink-0`} />
              <span className="text-xs md:text-sm text-dainamics-light/60">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="pt-4 border-t border-dainamics-border/50 flex items-center justify-between">
          <span className={`text-sm font-medium ${colors.iconText}`}>
            Découvrir
          </span>
          <svg
            className={`w-5 h-5 ${colors.iconText} group-hover:translate-x-1 transition-transform duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default ServicesOverview;
