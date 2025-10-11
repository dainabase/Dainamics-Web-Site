
import React from 'react';

const CoCreation: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Vision Workshop",
      description: "We collaborate to define your business goals and identify the most impactful AI opportunities."
    },
    {
      number: "02",
      title: "Architecture Blueprint",
      description: "Our architects design a custom AI system blueprint tailored to your specific needs and constraints."
    },
    {
      number: "03",
      title: "Rapid Prototyping",
      description: "We develop functional prototypes to validate concepts and gather feedback early in the process."
    },
    {
      number: "04",
      title: "Iterative Deployment",
      description: "Your solution is deployed in phases, with continuous refinement based on real-world results."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-dainamics-primary to-dainamics-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Your Vision + Our Expertise = Unbeatable Results
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto text-center mb-16">
          Our co-creation process ensures we build exactly what your business needs to dominate
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="text-3xl font-bold text-white/70 mb-4">{step.number}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
              <p className="opacity-90">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-white text-dainamics-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            SCHEDULE YOUR ARCHITECTURE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoCreation;
