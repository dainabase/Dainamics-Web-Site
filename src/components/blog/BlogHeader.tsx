import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogHeader: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog/tous-les-articles?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, navigate]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  }, [handleSearch]);

  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dainamics-primary/20 via-dainamics-background to-dainamics-secondary/10" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-dainamics-primary/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-dainamics-secondary/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dainamics-primary/10 border border-dainamics-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-dainamics-primary" />
            <span className="text-sm font-medium text-dainamics-primary">
              Ressources IA &amp; Automatisation
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Hub Intelligence</span>
            <br />
            <span className="bg-gradient-to-r from-dainamics-primary via-dainamics-secondary to-dainamics-success bg-clip-text text-transparent">
              Artificielle
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Strategies, cas pratiques et guides pour transformer votre entreprise
            avec l'IA et l'automatisation.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-xl mx-auto mb-12"
          >
            <form onSubmit={handleSearch} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-dainamics-primary to-dainamics-secondary rounded-full opacity-30 group-hover:opacity-50 blur transition duration-300" />
              <div className="relative flex items-center">
                <Search className="absolute left-5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Rechercher un article..."
                  className="w-full py-4 pl-14 pr-6 rounded-full text-white bg-dainamics-card border border-white/10 focus:outline-none focus:border-dainamics-primary/50 transition-colors placeholder:text-gray-500"
                />
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeader;
