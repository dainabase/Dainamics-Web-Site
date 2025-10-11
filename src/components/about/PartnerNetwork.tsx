
import React from 'react';

const PartnerNetwork: React.FC = () => {
  const partners = [
    {
      name: "Technology Partners",
      description: "Leading technology providers that help power our AI solutions",
      logos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      name: "Implementation Partners",
      description: "Expert consultants that help deploy our solutions at scale",
      logos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      name: "Industry Specialists",
      description: "Domain experts that bring sector-specific knowledge to our solutions",
      logos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ];

  return (
    <section className="py-24 bg-dainamics-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Our Alliance of Innovation Leaders
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          We've built a powerful ecosystem of partners to deliver comprehensive AI solutions
        </p>
        
        <div className="space-y-16">
          {partners.map((category, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">{category.name}</h3>
              <p className="text-gray-600 text-center mb-8">{category.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.logos.map((logo, logoIndex) => (
                  <div 
                    key={logoIndex} 
                    className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src={logo} 
                      alt="Partner logo" 
                      className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerNetwork;
