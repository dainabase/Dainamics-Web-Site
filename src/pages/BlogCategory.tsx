import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  blogCategories, 
  blogArticles, 
  getArticlesByCategory, 
  getCategoryBySlug,
  getAuthorById,
  getCategoryById
} from '@/data/blog';

const BlogCategory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const category = useMemo(() => getCategoryBySlug(slug || ''), [slug]);
  const articles = useMemo(() => 
    category ? getArticlesByCategory(category.id) : [], 
    [category]
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-dainamics-background flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Categorie non trouvee</h1>
            <p className="text-gray-400 mb-8">La categorie demandee n'existe pas.</p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-dainamics-primary hover:bg-dainamics-primary/90"
            >
              Retour au blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-dainamics-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{category.name}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                border: `1px solid ${category.color}40`
              }}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span 
                className="text-sm font-medium"
                style={{ color: category.color }}
              >
                {articles.length} article{articles.length > 1 ? 's' : ''}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              {category.description}
            </p>
          </motion.div>

          {articles.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {articles
                .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                .map((article) => {
                  const author = getAuthorById(article.authorId);
                  const articleCategory = getCategoryById(article.categoryId);
                  
                  return (
                    <motion.article
                      key={article.id}
                      variants={itemVariants}
                      className="group"
                    >
                      <Link to={`/blog/${article.slug}`}>
                        <div className="h-full p-6 rounded-2xl bg-dainamics-card border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px]">
                          {articleCategory && (
                            <div 
                              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                              style={{
                                background: `${articleCategory.color}15`,
                                color: articleCategory.color,
                                border: `1px solid ${articleCategory.color}30`
                              }}
                            >
                              {articleCategory.name}
                            </div>
                          )}

                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-dainamics-secondary transition-colors line-clamp-2">
                            {article.title}
                          </h2>

                          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            {author && (
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{author.name}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>
                                {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime} min</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Aucun article dans cette categorie
              </h3>
              <p className="text-gray-400 mb-6">
                Les articles de cette categorie arrivent bientot.
              </p>
              <Button 
                onClick={() => navigate('/blog')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Retour au blog
              </Button>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Autres categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {blogCategories
                .filter(cat => cat.id !== category.id)
                .map((cat) => {
                  const count = getArticlesByCategory(cat.id).length;
                  return (
                    <Link
                      key={cat.id}
                      to={`/blog/categorie/${cat.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dainamics-card border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span className="text-white text-sm">{cat.name}</span>
                      <span className="text-gray-500 text-xs">({count})</span>
                    </Link>
                  );
                })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-dainamics-secondary hover:text-dainamics-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogCategory;
