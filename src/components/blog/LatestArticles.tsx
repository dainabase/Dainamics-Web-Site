import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Sparkles, Brain, Zap, BarChart3, Lightbulb, Compass, Trophy, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRecentArticles, getCategoryById, BlogArticleMeta } from '@/data/blog';
import BlogHeroImage from './BlogHeroImage';

const iconMap: Record<string, React.ElementType> = {
  'Brain': Brain,
  'Zap': Zap,
  'BarChart3': BarChart3,
  'Lightbulb': Lightbulb,
  'Compass': Compass,
  'Trophy': Trophy,
  'FileText': FileText
};

const LatestArticles: React.FC = () => {
  // Get the 3 most recent articles
  const latestArticles = getRecentArticles(3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Aujourd'hui";
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const mainArticle = latestArticles[0];
  const secondaryArticles = latestArticles.slice(1, 3);

  if (!mainArticle) return null;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#050510] to-dainamics-background relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 228, 255, 0.15) 0%, transparent 70%)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-[#10E4FF]/10 border border-[#10E4FF]/30 rounded-full">
            <Sparkles className="w-4 h-4 text-[#10E4FF]" />
            <span className="text-[#10E4FF] font-semibold text-sm">Dernières Publications</span>
          </div>
          <div className="hidden sm:block h-px flex-grow bg-gradient-to-r from-[#10E4FF]/30 to-transparent" />
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main Article - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Link to={`/blog/${mainArticle.slug}`} className="group block h-full">
              <div className="relative h-full min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden border border-[#10E4FF]/20 hover:border-[#10E4FF]/40 transition-all duration-300 shadow-lg shadow-[#10E4FF]/5 hover:shadow-[#10E4FF]/10">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <BlogHeroImage
                    title={mainArticle.title}
                    categoryId={mainArticle.categoryId}
                    categoryColor={getCategoryById(mainArticle.categoryId)?.color}
                    className="w-full h-full"
                    aspectRatio="hero"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/80 to-transparent" />
                </div>

                {/* "NEW" Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#10E4FF] text-[#050510] rounded-full text-xs font-bold uppercase tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    Nouveau
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Category */}
                  {(() => {
                    const category = getCategoryById(mainArticle.categoryId);
                    const Icon = category ? iconMap[category.icon] || Brain : Brain;
                    return category ? (
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm"
                        style={{
                          backgroundColor: `${category.color}25`,
                          border: `1px solid ${category.color}40`
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: category.color }} />
                        <span className="text-sm font-medium" style={{ color: category.color }}>
                          {category.name}
                        </span>
                      </div>
                    ) : null;
                  })()}

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#10E4FF] transition-colors leading-tight">
                    {mainArticle.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed line-clamp-2 md:line-clamp-3 max-w-2xl">
                    {mainArticle.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-[#10E4FF] font-medium">{formatDate(mainArticle.publishedAt)}</span>
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {mainArticle.readTime} min de lecture
                    </span>
                    <span className="flex items-center gap-1.5 text-[#10E4FF] group-hover:gap-2.5 transition-all">
                      Lire l'article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Articles - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {secondaryArticles.map((article, index) => {
              const category = getCategoryById(article.categoryId);
              const Icon = category ? iconMap[category.icon] || Brain : Brain;
              
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex-1"
                >
                  <Link to={`/blog/${article.slug}`} className="group block h-full">
                    <div className="h-full rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#10E4FF]/30 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col">
                      {/* Image */}
                      <div className="relative h-32 md:h-40 overflow-hidden">
                        <BlogHeroImage
                          title={article.title}
                          categoryId={article.categoryId}
                          categoryColor={category?.color}
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                          aspectRatio="card"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                        
                        {/* Category Badge */}
                        {category && (
                          <div
                            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm"
                            style={{
                              backgroundColor: `${category.color}20`,
                              border: `1px solid ${category.color}35`
                            }}
                          >
                            <Icon className="w-3 h-3" style={{ color: category.color }} />
                            <span className="text-xs font-medium" style={{ color: category.color }}>
                              {category.name}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#10E4FF] transition-colors line-clamp-2 flex-grow">
                          {article.title}
                        </h3>

                        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                          <span className="text-[#10E4FF]/80">{formatDate(article.publishedAt)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
