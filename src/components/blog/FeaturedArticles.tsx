
import React from 'react';

const FeaturedArticles: React.FC = () => {
  const featuredArticles = [
    {
      title: "How Superhuman AI Agents Are Transforming Customer Service",
      excerpt: "Learn how businesses are achieving 70% faster response times and 85% higher customer satisfaction with AI agents.",
      category: "AI Strategy",
      image: "/placeholder.svg",
      date: "May 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "Case Study: Financial Services Firm Increases Lead Conversion by 37%",
      excerpt: "Discover how AcquisitionNova transformed the sales pipeline for a leading financial services company.",
      category: "Implementation Cases",
      image: "/placeholder.svg",
      date: "May 8, 2025",
      readTime: "12 min read"
    },
    {
      title: "The Future of Executive Decision-Making with AI Assistance",
      excerpt: "Explore how CommandMatrix Elite is helping executives make better decisions with less cognitive load.",
      category: "Technology Insights",
      image: "/placeholder.svg",
      date: "May 5, 2025",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-24 bg-dainamics-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Featured Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-dainamics-primary/10 text-dainamics-primary text-sm px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-dainamics-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-dainamics-primary hover:text-dainamics-secondary font-semibold transition-colors">
            View all featured articles
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
