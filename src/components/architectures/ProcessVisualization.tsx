
import React from 'react';

const ProcessVisualization: React.FC = () => {
  const stages = [
    { 
      name: "Discovery", 
      description: "Problem analysis and opportunity mapping",
      icon: "🔍"
    },
    { 
      name: "Architecture Design", 
      description: "Custom AI system blueprint development",
      icon: "📐"
    },
    { 
      name: "Development", 
      description: "Building your bespoke intelligent system",
      icon: "⚙️"
    },
    { 
      name: "Integration", 
      description: "Seamless connection with existing business infrastructure",
      icon: "🔄"
    },
    { 
      name: "Optimization", 
      description: "Continuous improvement and performance enhancement",
      icon: "📈"
    }
  ];

  return (
    <section className="py-24 bg-dainamics-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          From Concept to Domination
        </h2>
        
        <div className="relative overflow-x-auto pb-8">
          <div className="flex space-x-4 md:space-x-8 min-w-max px-4">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                className="w-64 md:w-72 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{stage.name}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures we deliver a custom AI architecture that precisely solves your business challenges while maximizing ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualization;
