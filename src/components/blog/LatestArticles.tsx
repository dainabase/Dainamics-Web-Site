import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Sparkles, Brain, Zap, BarChart3, Lightbulb, Compass, Trophy, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRecentArticles, getCategoryById } from '@/data/blog';
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
      month: 'long'
    });
  };

  if (latestArticles.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-dainamics-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
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

        {/* 3 Cards horizontales identiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => {
            const category = getCategoryById(article.categoryId);
            const Icon = category ? iconMap[category.icon] || Brain : Brain;
            
            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${article.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#10E4FF]/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <BlogHeroImage
                        title={article.title}
                        categoryId={article.categoryId}
                        categoryColor={category?.color}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        aspectRatio="card"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
                      
                      {/* Badge Nouveau sur le premier article */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#10E4FF] text-[#050510] rounded-full text-xs font-bold uppercase tracking-wide">
                            <Sparkles className="w-3 h-3" />
                            Nouveau
                          </div>
                        </div>
                      )}
                      
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
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#10E4FF] transition-colors line-clamp-2 flex-grow">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
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
    </section>
  );
};

export default LatestArticles;
