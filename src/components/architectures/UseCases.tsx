
import React from 'react';

const UseCases: React.FC = () => {
  const cases = [
    {
      industry: "E-commerce",
      challenge: "Unpredictable inventory needs and static pricing",
      solution: "Inventory prediction and dynamic pricing architecture",
      impact: "42% reduction in stockouts, 18% margin improvement"
    },
    {
      industry: "Professional Services",
      challenge: "Inefficient client intake and service allocation",
      solution: "Client intake and service delivery optimization",
      impact: "35% faster onboarding, 28% improvement in resource utilization"
    },
    {
      industry: "Manufacturing",
      challenge: "Supply chain disruptions and inefficiencies",
      solution: "Supply chain prediction and optimization system",
      impact: "51% reduction in supply delays, 23% cost reduction"
    },
    {
      industry: "Healthcare",
      challenge: "Suboptimal patient scheduling and resource allocation",
      solution: "Patient journey optimization and resource allocation",
      impact: "39% reduction in wait times, 27% increase in facility utilization"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Transformations That Redefine Industries
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Our custom AI architectures have delivered measurable impact across diverse industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-dainamics-primary text-white text-sm rounded-full mb-4">
                  {case_.industry}
                </div>
                <h3 className="text-xl font-bold mb-4">Challenge:</h3>
                <p className="text-gray-600 mb-4">{case_.challenge}</p>
                <h3 className="text-xl font-bold mb-4">Solution:</h3>
                <p className="text-gray-600 mb-4">{case_.solution}</p>
                <div className="mt-6">
                  <div className="text-lg font-bold text-dainamics-primary">
                    Impact: {case_.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
