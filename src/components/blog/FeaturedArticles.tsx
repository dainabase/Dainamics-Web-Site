import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  ArrowRight,
  Brain,
  Zap,
  BarChart3,
  Lightbulb,
  Compass,
  Trophy,
  MessageSquare,
  FileText,
  Rocket,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getFeaturedArticles,
  getRecentArticles,
  getCategoryById,
  BlogArticle
} from '@/data/blog';

const iconMap: Record<string, React.ElementType> = {
  'Brain': Brain,
  'Zap': Zap,
  'BarChart3': BarChart3,
  'Lightbulb': Lightbulb,
  'Compass': Compass,
  'Trophy': Trophy,
  'MessageSquare': MessageSquare,
  'FileText': FileText,
  'Rocket': Rocket,
  'Users': Users
};

const FeaturedArticles: React.FC = () => {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(6);

  const articles = featuredArticles.length > 0
    ? [...featuredArticles, ...recentArticles.filter(a => !featuredArticles.find(f => f.slug === a.slug))].slice(0, 6)
    : recentArticles;

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1, 5);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-dainamics-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Articles à la Une
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Les dernières publications sur l'IA, l'automatisation et la transformation digitale des PME.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Featured Article - Large Card */}
          {featuredArticle && (
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 lg:row-span-2"
            >
              <Link
                to={`/blog/${featuredArticle.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden bg-gradient-to-br from-dainamics-primary/20 to-dainamics-secondary/10 border border-white/10 hover:border-dainamics-primary/50 transition-all duration-300">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-dainamics-primary/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-dainamics-secondary/30 rounded-full blur-[80px]" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 lg:p-10 flex flex-col justify-end">
                    {/* Category Badge */}
                    {(() => {
                      const category = getCategoryById(featuredArticle.categoryId);
                      const Icon = category ? iconMap[category.icon] || Brain : Brain;
                      return category ? (
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-6"
                          style={{
                            backgroundColor: `${category.color}20`,
                            border: `1px solid ${category.color}40`
                          }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{ color: category.color }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: category.color }}
                          >
                            {category.name}
                          </span>
                        </div>
                      ) : null;
                    })()}

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-dainamics-secondary transition-colors">
                      {featuredArticle.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{formatDate(featuredArticle.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime} min
                      </span>
                      <span className="flex items-center gap-1 text-dainamics-secondary group-hover:translate-x-1 transition-transform">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular Articles - Small Cards */}
          {regularArticles.map((article, index) => {
            const category = getCategoryById(article.categoryId);
            const Icon = category ? iconMap[category.icon] || Brain : Brain;
            return (
              <motion.div
                key={article.slug}
                variants={itemVariants}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full p-6 rounded-2xl bg-dainamics-card border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                    {/* Category Badge */}
                    {category && (
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-4"
                        style={{
                          backgroundColor: `${category.color}15`,
                          border: `1px solid ${category.color}30`
                        }}
                      >
                        <Icon
                          className="w-3.5 h-3.5"
                          style={{ color: category.color }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: category.color }}
                        >
                          {category.name}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-dainamics-secondary transition-colors line-clamp-2 flex-grow">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/blog/tous-les-articles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium"
          >
            Voir tous les articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
