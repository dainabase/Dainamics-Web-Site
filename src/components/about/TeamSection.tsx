
import React from 'react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      mission: "To revolutionize how businesses harness artificial intelligence",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Maya Chen",
      role: "Chief AI Architect",
      mission: "To design AI systems that augment human capabilities beyond recognition",
      image: "/placeholder.svg"
    },
    {
      name: "Jordan Williams",
      role: "Head of Implementation",
      mission: "To ensure every client achieves transformative business results through our technology",
      image: "/placeholder.svg"
    },
    {
      name: "Sophia Rodriguez",
      role: "Director of Research",
      mission: "To push the boundaries of what's possible with autonomous AI agents",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 bg-dainamics-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          The Architects of Business Evolution
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Our team of visionaries and experts is dedicated to transforming the business landscape through AI
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <div className="aspect-ratio-1/1 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dainamics-primary/80 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-white/90 mb-3">{member.role}</p>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-sm opacity-90 mt-2">"{member.mission}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
