import React from 'react';

/**
 * Interface TypeScript pour un logo client
 */
interface Logo {
  name: string;      // Nom complet du client
  filename: string;  // Nom du fichier dans /public/logos-clients/
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
  const logos: Logo[] = [
    { name: 'Coop', filename: 'coop.png' },
    { name: 'Roche', filename: 'roche.png' },
    { name: 'Philip Morris International', filename: 'pmi.png' },
    { name: 'InterContinental Hotels Group', filename: 'ihg.png' },
    { name: 'World Trade Organization', filename: 'wto.png' },
    { name: 'OPI Products', filename: 'opi.png' },
    { name: 'Tissot', filename: 'tissot.png' },
    { name: 'Coty Inc', filename: 'coty.png' },
    { name: 'Novartis', filename: 'novartis.png' },
  ];

  return (
    <section 
      className="trusted-clients-section bg-dainamics-background py-24 overflow-hidden"
      aria-label="Clients qui nous font confiance"
    >
      <div className="container mx-auto px-6">
        {/* Titre avec gradient sur "Confiance" */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Ils Nous Font{' '}
          <span className="text-gradient-primary">Confiance</span>
        </h2>

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
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tagline descriptive */}
        <p className="text-center text-gray-400 mt-12 text-lg max-w-3xl mx-auto">
          Des leaders mondiaux dans la pharma, l'hôtellerie, la beauté et plus encore 
          nous font confiance pour leur transformation digitale
        </p>
      </div>
    </section>
  );
};

export default TrustedClients;
