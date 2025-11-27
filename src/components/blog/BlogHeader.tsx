import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
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

  // Categories with their colors from blog.ts
  const categories = [
    { label: 'Stratégie IA', slug: 'strategie-ia', color: '#7B2FFF' },
    { label: 'Automatisation', slug: 'automatisation', color: '#10E4FF' },
    { label: 'Cas Clients', slug: 'cas-clients', color: '#0AFF9D' },
    { label: 'Guides Pratiques', slug: 'guides', color: '#F59E0B' },
    { label: 'Tendances', slug: 'tendances', color: '#FF5A00' }
  ];

  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden bg-[#050510]">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(123, 47, 255, 0.12) 0%, transparent 50%)'
        }}
      />
      
      {/* Very subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#7B2FFF] text-sm font-medium tracking-wide uppercase mb-4"
          >
            Ressources
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            Blog IA &amp; Automatisation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Guides pratiques, études de cas et analyses pour optimiser 
            vos processus avec l'intelligence artificielle.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-8"
          >
            <form onSubmit={handleSearch} className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Rechercher un article..."
                className="w-full py-3.5 pl-12 pr-4 rounded-lg text-white bg-white/[0.03] border border-white/10 focus:outline-none focus:border-[#7B2FFF]/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-500"
              />
            </form>
          </motion.div>

          {/* Category links with colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => navigate(`/blog/categorie/${cat.slug}`)}
                className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg transition-all duration-300"
                style={{
                  color: cat.color,
                  backgroundColor: `${cat.color}10`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: `${cat.color}30`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${cat.color}20`;
                  e.currentTarget.style.borderColor = `${cat.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${cat.color}10`;
                  e.currentTarget.style.borderColor = `${cat.color}30`;
                }}
              >
                {cat.label}
                <ArrowRight 
                  className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" 
                  style={{ color: cat.color }}
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default BlogHeader;
