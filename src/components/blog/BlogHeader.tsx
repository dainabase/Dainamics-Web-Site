
import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-dainamics-primary to-dainamics-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            The Superhuman Business Intelligence Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 animate-fade-in">
            Insights, strategies, and case studies to help you transform your business with AI
          </p>
          
          <div className="relative mt-8 animate-fade-in">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-4 px-6 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-dainamics-primary"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dainamics-primary hover:bg-dainamics-primary/90 text-white p-3 rounded-full">
              🔍
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('/placeholder.svg')] bg-contain bg-no-repeat bg-right-top"></div>
      </div>
    </section>
  );
};

export default BlogHeader;
