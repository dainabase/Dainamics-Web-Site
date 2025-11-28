
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import BlogHeader from '@/components/blog/BlogHeader';
import LatestArticles from '@/components/blog/LatestArticles';
import FeaturedArticles from '@/components/blog/FeaturedArticles';
import CategoryGrid from '@/components/blog/CategoryGrid';

const Blog = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-adaptive">
      <EnhancedGridBackground />
      {/* Custom cursor effects */}
      <CursorEffects />

      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Blog Header with search */}
        <BlogHeader />
        
        {/* Latest Articles - Most recent 3, prominently displayed */}
        <LatestArticles />
        
        {/* Featured Articles - Curated selection */}
        <FeaturedArticles />
        
        {/* Category Grid - Browse by topic */}
        <CategoryGrid />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
