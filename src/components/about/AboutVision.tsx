
import React from 'react';

const AboutVision: React.FC = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-dainamics-primary to-dainamics-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Our Vision: The Age of Superhuman Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 animate-fade-in">
            We're ushering in a new era where businesses transcend traditional human limitations through strategic AI augmentation. Our mission is to transform organizations into superhuman operations that outperform, outthink, and outmaneuver their competitors.
          </p>
          <div className="mt-10 animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-white text-lg font-bold mb-2">Our Core Purpose</div>
              <div className="text-white/90">To create the most intelligent businesses on the planet</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[url('/placeholder.svg')] bg-contain bg-no-repeat bg-right-top"></div>
      </div>
    </section>
  );
};

export default AboutVision;
