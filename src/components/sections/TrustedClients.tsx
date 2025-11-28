import React from 'react';
import { motion } from 'framer-motion';

interface Logo {
  name: string;
  filename: string;
  scale?: number;
}

interface LogoWithType extends Logo {
  type: 'enterprise' | 'pme' | 'project';
}

const TrustedClients: React.FC = () => {
  const logos: LogoWithType[] = [
    { name: 'Roche', filename: 'roche.png', type: 'enterprise' },
    { name: 'LEXAIA', filename: 'lexaia.svg', scale: 1.2, type: 'project' },
    { name: 'Novartis', filename: 'novartis.png', scale: 2, type: 'enterprise' },
    { name: 'Creative Circle Group', filename: 'CCG_Logo_line_100K.webp', type: 'pme' },
    { name: 'Tissot', filename: 'tissot.png', scale: 2, type: 'enterprise' },
    { name: 'ΣNKI REALTY', filename: 'enki-realty.svg', scale: 1.2, type: 'project' },
    { name: 'Coop', filename: 'coop.png', type: 'enterprise' },
    { name: 'InterContinental Hotels Group', filename: 'ihg.png', type: 'enterprise' },
    { name: 'Philip Morris International', filename: 'pmi.png', type: 'enterprise' },
  ];

  return (
    <section
      className="trusted-clients-section bg-adaptive py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      aria-label="Clients qui nous font confiance"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-adaptive">De la PME aux Groupes Internationaux.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4"
        >
          <p className="text-center text-adaptive-secondary text-base sm:text-lg leading-relaxed">
            Que vous soyez une PME de 15 personnes ou un groupe international,
            notre méthodologie s'adapte à votre réalité.
            {' '}<span className="text-adaptive font-medium">Même rigueur, même résultats.</span>
          </p>
        </motion.div>

        <div className="logo-carousel-wrapper" role="region" aria-label="Carrousel de logos clients">
          <div className="logo-track">
            {logos.map((logo, index) => (
              <div key={`original-${index}`} className="logo-item" title={logo.name}>
                <img
                  src={`/logos-clients/${logo.filename}`}
                  alt={`Logo ${logo.name}`}
                  loading="lazy"
                  draggable="false"
                  style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="logo-item" title={logo.name}>
                <img
                  src={`/logos-clients/${logo.filename}`}
                  alt={`Logo ${logo.name}`}
                  loading="lazy"
                  draggable="false"
                  style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
