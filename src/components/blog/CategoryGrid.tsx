
import React from 'react';

const CategoryGrid: React.FC = () => {
  const categories = [
    {
      name: "AI Strategy",
      description: "Framework and approaches to maximize AI impact",
      articleCount: 24,
      icon: "🧠"
    },
    {
      name: "Implementation Cases",
      description: "Real-world examples of successful AI deployments",
      articleCount: 18,
      icon: "📊"
    },
    {
      name: "Technology Insights",
      description: "Deep dives into cutting-edge AI technologies",
      articleCount: 31,
      icon: "⚙️"
    },
    {
      name: "Future Trends",
      description: "What's coming next in AI and business technology",
      articleCount: 16,
      icon: "🔮"
    },
    {
      name: "Competitive Advantage",
      description: "How to outperform competitors with AI",
      articleCount: 22,
      icon: "🏆"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Browse by Category</h2>
        <p className="text-xl text-gray-600 mb-16">
          Find insights relevant to your specific business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-dainamics-background rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{category.articleCount} articles</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Get the latest insights on AI and business transformation delivered to your inbox
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow py-3 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dainamics-primary"
              />
              <button className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white py-3 px-6 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
