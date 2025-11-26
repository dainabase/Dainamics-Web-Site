
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import BlogHeader from '@/components/blog/BlogHeader';
import FeaturedArticles from '@/components/blog/FeaturedArticles';
import CategoryGrid from '@/components/blog/CategoryGrid';

const Blog = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      {/* Custom cursor effects */}
      <CursorEffects />

      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Blog Header */}
        <BlogHeader />
        
        {/* Featured Articles */}
        <FeaturedArticles />
        
        {/* Category Grid */}
        <CategoryGrid />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
