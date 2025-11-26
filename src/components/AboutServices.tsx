import React from 'react';
import { Brain, Zap, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutServices: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description:
        "Agents IA conversationnels, analyse prédictive, traitement automatique de données. Exemple : Support client 24/7 ou extraction automatique de factures.",
      iconColor: 'text-dainamics-primary', // Violet
      link: '/services/ia',
      linkText: 'Découvrir nos solutions IA',
    },
    {
      icon: Zap,
      title: 'Automatisations',
      description:
        "Workflows automatisés, intégrations API, synchronisation de données. Exemple : Synchronisation CRM-comptabilité ou validation automatique de documents.",
      iconColor: 'text-dainamics-secondary', // Cyan (accent)
      link: '/services/automatisation',
      linkText: 'Explorer les automatisations',
    },
    {
      icon: Code,
      title: 'Développement Software',
      description:
        'Applications web, plateformes métier, dashboards sur mesure. Exemple : Portail client personnalisé ou tableau de bord KPI temps réel.',
      iconColor: 'text-dainamics-primary', // Violet
      link: '/services/developpement',
      linkText: 'Voir nos développements',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 5,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="about-services-section py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90 relative">

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Paragraphe Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="intro-text text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Intelligence Artificielle. Automatisations.</span>
            <br />
            <span className="text-white">Développement Software.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            Nous construisons les outils technologiques qui propulsent votre
            entreprise.
            <br />
            Du prototype à la production, des solutions sur mesure qui
            fonctionnent.
          </p>
        </motion.div>

        {/* 3 Colonnes Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="services-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="service-card bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-dainamics-primary transition-all duration-300 flex flex-col"
              >
                {/* Icon avec glow et animation */}
                <motion.div
                  variants={cardVariants}
                  className="icon-wrapper mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-dainamics-primary/10 to-dainamics-secondary/5 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 0 30px 5px rgba(123, 47, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <motion.div variants={iconVariants}>
                    <Icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${service.iconColor}`}
                      strokeWidth={2}
                    />
                  </motion.div>
                </motion.div>

                {/* Titre */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-dainamics-secondary hover:text-dainamics-primary transition-colors duration-200 font-medium group"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutServices;
