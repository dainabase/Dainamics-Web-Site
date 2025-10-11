
import React from 'react';

const ArchitecturesHero: React.FC = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-dainamics-primary to-dainamics-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Custom AI Architectures: Beyond Standard Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 animate-fade-in">
            Bespoke intelligent systems designed for your unique business challenges
          </p>
          <div className="mt-10 animate-fade-in">
            <button className="bg-white text-dainamics-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[url('/placeholder.svg')] bg-contain bg-no-repeat bg-right-top"></div>
      </div>
    </section>
  );
};

export default ArchitecturesHero;
