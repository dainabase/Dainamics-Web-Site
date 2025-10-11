
import React from 'react';

const TechStack: React.FC = () => {
  const layers = [
    {
      name: "Interface Layer",
      description: "Human-AI interaction points",
      technologies: ["Natural Language Processing", "Computer Vision", "Voice Recognition", "Custom Dashboards"]
    },
    {
      name: "Integration Layer",
      description: "APIs and connectors",
      technologies: ["RESTful APIs", "GraphQL", "Webhooks", "Enterprise Data Connectors"]
    },
    {
      name: "Intelligence Layer",
      description: "ML/AI models and algorithms",
      technologies: ["Deep Learning", "Reinforcement Learning", "Neural Networks", "Predictive Analytics"]
    },
    {
      name: "Foundation Layer",
      description: "Cloud infrastructure and data processing",
      technologies: ["Distributed Computing", "Containerization", "Data Lakes", "Edge Computing"]
    }
  ];

  return (
    <section className="py-24 bg-dainamics-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Cutting-edge Technology, Masterfully Deployed
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          We leverage the most advanced technologies to build your custom AI architecture
        </p>
        
        <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
          {layers.map((layer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-dainamics-primary">
                {layer.name}
              </h3>
              <p className="text-gray-600 mb-4">{layer.description}</p>
              <div className="flex flex-wrap gap-2">
                {layer.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
