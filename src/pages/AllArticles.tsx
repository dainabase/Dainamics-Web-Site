import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import BlogHeroImage from '@/components/blog/BlogHeroImage';
import { blogArticles, blogCategories, getCategoryById } from '@/data/blog';

const AllArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category') || null
  );

  // Update URL when search or category changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (selectedCategory) params.set('category', selectedCategory);
    setSearchParams(params, { replace: true });
  }, [search, selectedCategory, setSearchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = useMemo(() => {
    return blogArticles
      .filter(article => {
        const matchesSearch =
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = !selectedCategory || article.categoryId === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [search, selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-adaptive">
      <EnhancedGridBackground />
      <Navigation />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Tous les Articles
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              {blogArticles.length} articles sur l'IA, l'automatisation et la transformation digitale des PME
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Rechercher un article par titre, contenu ou tag..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-dainamics-primary/50 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-3 flex-wrap justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-dainamics-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                Tous ({blogArticles.length})
              </button>
              {blogCategories.map(cat => {
                const count = blogArticles.filter(a => a.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      selectedCategory === cat.id
                        ? 'text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border-white/10'
                    }`}
                    style={
                      selectedCategory === cat.id
                        ? {
                            backgroundColor: cat.color,
                            borderColor: cat.color
                          }
                        : {}
                    }
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Results Count */}
          {(search || selectedCategory) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-gray-400">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} trouvé
                {filteredArticles.length !== 1 ? 's' : ''}
                {search && <span> pour "{search}"</span>}
              </p>
            </motion.div>
          )}

          {/* Articles Grid with Images */}
          {filteredArticles.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article, index) => {
                const category = getCategoryById(article.categoryId);
                return (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Link to={`/blog/${article.slug}`} className="group block h-full">
                      <div className="h-full rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all flex flex-col overflow-hidden">
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                          <BlogHeroImage
                            title={article.title}
                            categoryId={article.categoryId}
                            categoryColor={category?.color}
                            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                            aspectRatio="card"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dainamics-background/90 via-transparent to-transparent" />
                          
                          {/* Category Badge on Image */}
                          {category && (
                            <div
                              className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm"
                              style={{
                                backgroundColor: `${category.color}25`,
                                border: `1px solid ${category.color}40`
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: category.color }}
                              />
                              <span
                                className="text-xs font-medium"
                                style={{ color: category.color }}
                              >
                                {category.name}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                          {/* Title */}
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-dainamics-secondary transition-colors line-clamp-2">
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                            {article.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                            <span>{formatDate(article.publishedAt)}</span>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime} min
                              </span>
                              <span className="flex items-center gap-1 text-dainamics-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                                Lire
                                <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aucun article trouvé</h3>
              <p className="text-gray-400 mb-6">
                Essayez de modifier votre recherche ou vos filtres
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 rounded-full bg-dainamics-primary text-white hover:bg-dainamics-primary/90 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllArticles;
