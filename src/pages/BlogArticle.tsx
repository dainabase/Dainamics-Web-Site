import { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Tag, 
  Share2, 
  Bookmark,
  ChevronRight,
  ExternalLink,
  List,
  ArrowUp,
  BookOpen
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import BlogHeroImage from '@/components/blog/BlogHeroImage';
import {
  getArticleMetaBySlug,
  getCategoryById,
  getAuthorById,
  getArticlesByCategory,
  BlogArticleMeta
} from '@/data/blog';

// Import all markdown files statically
const markdownModules = import.meta.glob('/src/content/blog/*.md', { 
  query: '?raw',
  import: 'default' 
});

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogArticleMeta | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  // Progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadArticle = async () => {
      if (slug) {
        const meta = getArticleMetaBySlug(slug);
        setArticle(meta || null);
        
        if (meta) {
          const mdPath = `/src/content/blog/${slug}.md`;
          if (markdownModules[mdPath]) {
            try {
              const mdContent = await markdownModules[mdPath]() as string;
              setContent(mdContent);
              
              // Extract TOC items
              const headers = mdContent.match(/^#{1,3} .+$/gm) || [];
              const toc: TOCItem[] = headers.map(header => {
                const level = (header.match(/^#+/) || [''])[0].length;
                const text = header.replace(/^#+\s*/, '');
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return { id, text, level };
              });
              setTocItems(toc);
            } catch (e) {
              console.error('Error loading markdown:', e);
              setContent('');
            }
          }
        }
      }
      setLoading(false);
    };
    
    loadArticle();
  }, [slug]);

  // Track scroll position for active section and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      // Find active section
      const sections = tocItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setTocOpen(false);
  }, []);

  const category = useMemo(() => 
    article ? getCategoryById(article.categoryId) : null, 
    [article]
  );
  
  const author = useMemo(() => 
    article ? getAuthorById(article.authorId) : null, 
    [article]
  );
  
  const relatedArticles = useMemo(() => 
    article 
      ? getArticlesByCategory(article.categoryId)
          .filter(a => a.slug !== slug)
          .slice(0, 3)
      : [], 
    [article, slug]
  );

  const parsedContent = useMemo(() => 
    content ? parseMarkdown(content) : '', 
    [content]
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dainamics-background flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 border-2 border-dainamics-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-white/60">Chargement de l'article...</span>
        </motion.div>
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-dainamics-background">
      <EnhancedGridBackground />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-dainamics-primary via-dainamics-secondary to-dainamics-cta z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navigation />

      {/* Hero Image Section - Using BlogHeroImage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[35vh] md:h-[45vh] min-h-[280px] md:min-h-[350px] overflow-hidden"
      >
        <BlogHeroImage 
          title={article.title}
          categoryId={article.categoryId}
          categoryColor={category?.color}
          className="w-full h-full"
          aspectRatio="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dainamics-background via-dainamics-background/30 to-transparent" />
      </motion.div>

      <main className="relative pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb - Now outside hero, above the card */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-4 -mt-16 relative z-20"
          >
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            {category && (
              <>
                <Link 
                  to={`/blog/categorie/${category.slug}`}
                  className="hover:text-white transition-colors"
                  style={{ color: category.color }}
                >
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            <span className="text-white/60 truncate max-w-[200px] sm:max-w-[300px]">
              {article.title}
            </span>
          </motion.nav>

          {/* Article Header Card */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto relative z-10 mb-12"
          >
            <div className="bg-dainamics-background/90 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
              {/* Category Badge */}
              {category && (
                <Link 
                  to={`/blog/categorie/${category.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: `${category.color}20`,
                    border: `1px solid ${category.color}40`
                  }}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span style={{ color: category.color }} className="text-sm font-medium">
                    {category.name}
                  </span>
                </Link>
              )}

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400">
                  {author && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dainamics-primary to-dainamics-secondary flex items-center justify-center ring-2 ring-white/10">
                        <span className="text-white font-bold text-sm">
                          {author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{author.name}</p>
                        <p className="text-gray-500 text-xs">{author.role}</p>
                      </div>
                    </div>
                  )}
                  <div className="hidden sm:flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} min</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>{tocItems.length} sections</span>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setTocOpen(!tocOpen)}
                    className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    title="Table des matières"
                  >
                    <List className="w-4 h-4 text-gray-400" />
                  </button>
                  <button 
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    title="Partager"
                    onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
                  >
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button 
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    title="Sauvegarder"
                  >
                    <Bookmark className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Mobile TOC Dropdown */}
          {tocOpen && tocItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden max-w-4xl mx-auto mb-8"
            >
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-4">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <List className="w-4 h-4" />
                  Table des matières
                </h3>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-dainamics-primary/20 text-dainamics-primary'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      style={{ paddingLeft: `${(item.level - 1) * 12 + 12}px` }}
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}

          {/* Main Content Area */}
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8">
              
              {/* Desktop TOC Sidebar */}
              {tocItems.length > 0 && (
                <aside className="hidden lg:block w-64 flex-shrink-0">
                  <div className="sticky top-24">
                    <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-5">
                      <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                        <List className="w-4 h-4 text-dainamics-primary" />
                        Dans cet article
                      </h3>
                      <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        {tocItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                              activeSection === item.id
                                ? 'bg-dainamics-primary/20 text-white border-l-2 border-dainamics-primary'
                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                            }`}
                            style={{ paddingLeft: `${(item.level - 1) * 8 + 12}px` }}
                          >
                            <span className="line-clamp-2">{item.text}</span>
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>
                </aside>
              )}

              {/* Article Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 min-w-0 max-w-4xl"
              >
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />

                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-dainamics-primary" />
                      <span className="text-gray-400 text-sm font-medium">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white/5 hover:bg-dainamics-primary/20 rounded-full text-sm text-gray-300 hover:text-white border border-white/10 hover:border-dainamics-primary/40 transition-all cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Box */}
                {author && (
                  <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-dainamics-primary/10 to-dainamics-secondary/5 border border-white/10">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-dainamics-primary to-dainamics-secondary flex items-center justify-center flex-shrink-0 ring-4 ring-white/10">
                        <span className="text-white font-bold text-xl">
                          {author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-dainamics-secondary uppercase tracking-wider mb-1 font-medium">À propos de l'auteur</p>
                        <h3 className="text-xl font-bold text-white mb-2">{author.name}</h3>
                        <p className="text-gray-400 leading-relaxed">{author.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-dainamics-primary/30 via-dainamics-secondary/20 to-dainamics-cta/30" />
              <div className="absolute inset-0 bg-dainamics-background/60 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-dainamics-cta animate-pulse" />
                  Consultation gratuite
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à transformer votre entreprise ?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Discutons de vos besoins en IA et automatisation. Premier appel gratuit de 30 minutes avec un expert.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-dainamics-cta hover:bg-dainamics-cta/90 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-dainamics-cta/25"
                >
                  Réserver un appel gratuit
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-6xl mx-auto mt-20"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Articles similaires
                </h2>
                <Link 
                  to={`/blog/categorie/${category?.slug}`}
                  className="text-dainamics-secondary hover:text-white transition-colors text-sm flex items-center gap-1 group"
                >
                  Voir tous
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => {
                  const relatedCategory = getCategoryById(related.categoryId);
                  return (
                    <motion.div
                      key={related.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <Link
                        to={`/blog/${related.slug}`}
                        className="group block h-full"
                      >
                        <div className="h-full rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col">
                          {/* Card Image - Using BlogHeroImage */}
                          <div className="relative h-40 overflow-hidden">
                            <BlogHeroImage 
                              title={related.title}
                              categoryId={related.categoryId}
                              categoryColor={relatedCategory?.color}
                              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                              aspectRatio="card"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dainamics-background to-transparent" />
                            {relatedCategory && (
                              <div
                                className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                                style={{
                                  backgroundColor: `${relatedCategory.color}20`,
                                  border: `1px solid ${relatedCategory.color}40`
                                }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: relatedCategory.color }}
                                />
                                <span
                                  className="text-xs font-medium"
                                  style={{ color: relatedCategory.color }}
                                >
                                  {relatedCategory.name}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-dainamics-secondary transition-colors line-clamp-2 flex-grow">
                              {related.title}
                            </h3>

                            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                              <span>{formatDate(related.publishedAt)}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {related.readTime} min
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-xl border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0.8,
          pointerEvents: showBackToTop ? 'auto' : 'none'
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-dainamics-primary hover:bg-dainamics-primary/80 text-white rounded-full shadow-lg shadow-dainamics-primary/25 transition-all hover:scale-110 z-40"
        title="Retour en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Article Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.3);
        }
        
        .article-content {
          color: #e5e7eb;
          font-size: 1.125rem;
          line-height: 1.85;
        }
        
        .article-content h1 {
          color: white;
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.25;
          scroll-margin-top: 100px;
        }
        
        .article-content h2 {
          color: white;
          font-size: 1.625rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid rgba(123, 47, 255, 0.3);
          line-height: 1.3;
          scroll-margin-top: 100px;
        }
        
        .article-content h3 {
          color: white;
          font-size: 1.375rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
          scroll-margin-top: 100px;
        }
        
        .article-content p {
          margin-bottom: 1.75rem;
        }
        
        .article-content a {
          color: #10E4FF;
          text-decoration: none;
          border-bottom: 1px solid rgba(16, 228, 255, 0.3);
          transition: all 0.2s;
        }
        
        .article-content a:hover {
          border-bottom-color: #10E4FF;
          color: white;
        }
        
        .article-content strong {
          color: white;
          font-weight: 600;
        }
        
        .article-content em {
          font-style: italic;
          color: #9ca3af;
        }
        
        .article-content ul,
        .article-content ol {
          margin: 1.75rem 0;
          padding-left: 1.75rem;
        }
        
        .article-content li {
          margin-bottom: 0.875rem;
          position: relative;
        }
        
        .article-content ul li::marker {
          color: #7B2FFF;
        }
        
        .article-content ol li::marker {
          color: #7B2FFF;
          font-weight: 600;
        }
        
        .article-content code {
          background: rgba(123, 47, 255, 0.15);
          color: #10E4FF;
          padding: 0.2rem 0.5rem;
          border-radius: 0.375rem;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 0.875em;
          border: 1px solid rgba(123, 47, 255, 0.2);
        }
        
        .article-content pre {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }
        
        .article-content pre code {
          background: none;
          border: none;
          padding: 0;
          color: #e5e7eb;
          font-size: 0.875rem;
          line-height: 1.7;
        }
        
        .article-content blockquote {
          border-left: 4px solid #7B2FFF;
          background: linear-gradient(to right, rgba(123, 47, 255, 0.1), transparent);
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
        }
        
        .article-content blockquote p {
          margin-bottom: 0;
          color: #d1d5db;
        }
        
        .article-content blockquote strong {
          color: #10E4FF;
        }
        
        .article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.9375rem;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .article-content thead {
          background: rgba(123, 47, 255, 0.2);
        }
        
        .article-content th {
          text-align: left;
          padding: 1rem 1.25rem;
          color: white;
          font-weight: 600;
          border-bottom: 2px solid rgba(123, 47, 255, 0.3);
        }
        
        .article-content td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #d1d5db;
        }
        
        .article-content tr:hover td {
          background: rgba(255,255,255,0.03);
        }
        
        .article-content tr:last-child td {
          border-bottom: none;
        }
        
        .article-content hr {
          border: none;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(123, 47, 255, 0.5), transparent);
          margin: 3rem 0;
        }
        
        .article-content img {
          max-width: 100%;
          border-radius: 1rem;
          margin: 2rem 0;
          border: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 768px) {
          .article-content {
            font-size: 1rem;
            line-height: 1.75;
          }
          
          .article-content h1 {
            font-size: 1.625rem;
          }
          
          .article-content h2 {
            font-size: 1.375rem;
          }
          
          .article-content h3 {
            font-size: 1.125rem;
          }
          
          .article-content pre {
            padding: 1rem;
            border-radius: 0.75rem;
            font-size: 0.8rem;
          }
          
          .article-content table {
            font-size: 0.8rem;
          }
          
          .article-content th,
          .article-content td {
            padding: 0.75rem 0.625rem;
          }
          
          .article-content blockquote {
            padding: 1rem 1.25rem;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

// Enhanced Markdown Parser
const parseMarkdown = (content: string): string => {
  let html = content;

  // Headers with IDs for anchor links
  html = html.replace(/^### (.*$)/gim, (_, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h3 id="${id}">${title}</h3>`;
  });
  html = html.replace(/^## (.*$)/gim, (_, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h2 id="${id}">${title}</h2>`;
  });
  html = html.replace(/^# (.*$)/gim, (_, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h1 id="${id}">${title}</h1>`;
  });

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code class="language-$1">$2</code></pre>');
  html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

  // Horizontal rule
  html = html.replace(/^---$/gim, '<hr>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

  // Process lines for lists and tables
  const lines = html.split('\n');
  let inList = false;
  let inOrderedList = false;
  let inTable = false;
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Tables
    if (line.match(/^\|(.+)\|$/)) {
      if (!inTable) {
        inTable = true;
        const headers = line.split('|').slice(1, -1).map(h => h.trim());
        processedLines.push('<table>');
        processedLines.push('<thead><tr>');
        headers.forEach(header => {
          processedLines.push(`<th>${header}</th>`);
        });
        processedLines.push('</tr></thead>');

        if (lines[i + 1]?.match(/^\|[\s\-:|]+\|$/)) {
          i++;
        }
        processedLines.push('<tbody>');
      } else {
        const cells = line.split('|').slice(1, -1).map(c => c.trim());
        processedLines.push('<tr>');
        cells.forEach(cell => {
          processedLines.push(`<td>${cell}</td>`);
        });
        processedLines.push('</tr>');
      }
    } else {
      if (inTable) {
        processedLines.push('</tbody></table>');
        inTable = false;
      }

      // Ordered lists
      if (line.match(/^\d+\. (.+)/)) {
        const content = line.replace(/^\d+\. /, '');
        if (!inOrderedList) {
          if (inList) {
            processedLines.push('</ul>');
            inList = false;
          }
          processedLines.push('<ol>');
          inOrderedList = true;
        }
        processedLines.push(`<li>${content}</li>`);
      }
      // Unordered lists
      else if (line.match(/^[\-\*] (.+)/)) {
        const content = line.replace(/^[\-\*] /, '');
        if (!inList) {
          if (inOrderedList) {
            processedLines.push('</ol>');
            inOrderedList = false;
          }
          processedLines.push('<ul>');
          inList = true;
        }
        processedLines.push(`<li>${content}</li>`);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        if (inOrderedList) {
          processedLines.push('</ol>');
          inOrderedList = false;
        }

        // Paragraphs
        if (line.trim() === '') {
          // Skip empty lines
        } else if (!line.match(/^<[h|p|u|o|t|d|b|hr]/)) {
          if (!line.startsWith('<')) {
            processedLines.push(`<p>${line}</p>`);
          } else {
            processedLines.push(line);
          }
        } else {
          processedLines.push(line);
        }
      }
    }
  }

  // Close any open tags
  if (inList) processedLines.push('</ul>');
  if (inOrderedList) processedLines.push('</ol>');
  if (inTable) processedLines.push('</tbody></table>');

  // Merge consecutive blockquotes
  let result = processedLines.join('\n');
  result = result.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  return result;
};

export default BlogArticle;
