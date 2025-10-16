import React from 'react';
import { Brain, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutServices: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description:
        "Agents IA conversationnels, analyse prédictive, traitement automatique de données. Nous intégrons l'IA là où elle apporte une vraie valeur ajoutée.",
      iconColor: 'text-dainamics-primary', // Violet
    },
    {
      icon: Zap,
      title: 'Automatisations',
      description:
        "Workflows automatisés, intégrations API, synchronisation de données. Éliminez les tâches répétitives et concentrez-vous sur l'essentiel.",
      iconColor: 'text-dainamics-secondary', // Cyan (accent)
    },
    {
      icon: Code,
      title: 'Développement Software',
      description:
        'Applications web, plateformes métier, dashboards sur mesure. Du prototype au produit final, nous construisons exactement ce dont vous avez besoin.',
      iconColor: 'text-dainamics-primary', // Violet
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Plus fluide (était 0.2)
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
    <section className="about-services-section py-24 bg-[#050510]">
      <div className="container-custom">
        {/* Paragraphe Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="intro-text text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligence Artificielle. Automatisations.
            <br />
            Développement Software.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
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
          className="services-grid grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="service-card bg-gradient-to-br from-[#0A0A1B] to-[#050510] border border-gray-800 rounded-2xl p-8 hover:border-dainamics-primary transition-all duration-300"
              >
                {/* Icon avec glow et animation */}
                <motion.div
                  variants={cardVariants}
                  className="icon-wrapper mb-6 w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-dainamics-primary/10 to-dainamics-secondary/5 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 0 30px 5px rgba(123, 47, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <motion.div variants={iconVariants}>
                    <Icon
                      className={`w-10 h-10 ${service.iconColor}`}
                      strokeWidth={2}
                    />
                  </motion.div>
                </motion.div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutServices;
