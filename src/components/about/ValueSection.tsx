
import React from 'react';

const ValueSection: React.FC = () => {
  const values = [
    {
      name: "Radical Innovation",
      description: "We reject incremental improvement in favor of transformative change",
      icon: "🚀"
    },
    {
      name: "Measurable Impact",
      description: "Everything we create must deliver quantifiable business results",
      icon: "📊"
    },
    {
      name: "Ethical Advancement",
      description: "We develop powerful technology with responsible governance",
      icon: "⚖️"
    },
    {
      name: "Client Empowerment",
      description: "Our success is measured by the new capabilities we unlock for our clients",
      icon: "💪"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Core Principles That Drive Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Our values shape how we innovate, build, and partner with clients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-dainamics-background rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{value.name}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
