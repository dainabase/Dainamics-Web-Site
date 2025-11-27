import React from 'react';
import { motion } from 'framer-motion';

/**
 * Interface TypeScript pour un logo client
 */
interface Logo {
  name: string;      // Nom complet du client
  filename: string;  // Nom du fichier dans /public/logos-clients/
  scale?: number;    // Facteur d'échelle optionnel (par défaut: 1)
}

/**
 * TrustedClients Section
 * Affiche un carrousel infini de logos clients avec effet grayscale/hover
 * Position: Après FeaturedProjects sur la homepage
 */
const TrustedClients: React.FC = () => {
  /**
   * Portfolio des 9 clients réels DAINAMICS
   * ⚠️ NE PAS modifier l'ordre (optimisé pour flow visuel)
   */
  interface LogoWithType extends Logo {
    type: 'enterprise' | 'pme' | 'project';
  }

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
      className="trusted-clients-section bg-dainamics-background py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      aria-label="Clients qui nous font confiance"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">De la PME aux Groupes Internationaux.</span>
          </h2>
        </motion.div>

        {/* Carrousel infini */}
        <div className="logo-carousel-wrapper" role="region" aria-label="Carrousel de logos clients">
          <div className="logo-track">
            {/* Logos originaux (1er set) */}
            {logos.map((logo, index) => (
              <div
                key={`original-${index}`}
                className="logo-item"
                title={logo.name}
                role="img"
                aria-label={`Logo ${logo.name}`}
              >
                <img
                  src={`/logos-clients/${logo.filename}`}
                  alt={`Logo ${logo.name}`}
                  loading="lazy"
                  draggable="false"
                  style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                />
              </div>
            ))}

            {/* Logos dupliqués (2ème set pour seamless loop) */}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="logo-item"
                title={logo.name}
                role="img"
                aria-label={`Logo ${logo.name}`}
              >
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

        {/* Message rassurant pour PME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 max-w-3xl mx-auto px-4"
        >
          <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-dainamics-primary/5 via-dainamics-secondary/5 to-dainamics-primary/5 border border-white/10">
            <p className="text-center text-gray-300 text-base sm:text-lg leading-relaxed">
              Que vous soyez une PME de 15 personnes ou un groupe international,
              notre méthodologie s'adapte à votre réalité.
              {' '}<span className="text-white font-medium">Même rigueur, même résultats.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClients;
