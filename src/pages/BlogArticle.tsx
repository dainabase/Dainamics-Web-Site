import { useEffect, useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  User, 
  Tag, 
  Share2, 
  Bookmark,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import {
  getArticleMetaBySlug,
  getCategoryById,
  getAuthorById,
  getArticlesByCategory,
  getContentPath,
  BlogArticleMeta
} from '@/data/blog';

// Import all markdown files statically
const markdownModules = import.meta.glob('/src/content/blog/*.md', { 
  query: '?raw',
  import: 'default' 
});

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogArticleMeta | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadArticle = async () => {
      if (slug) {
        const meta = getArticleMetaBySlug(slug);
        setArticle(meta || null);
        
        if (meta) {
          // Try to load content from markdown file
          const mdPath = `/src/content/blog/${slug}.md`;
          if (markdownModules[mdPath]) {
            try {
              const mdContent = await markdownModules[mdPath]() as string;
              setContent(mdContent);
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
      <Navigation />

      <main className="relative pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
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
              <span className="text-white/40 truncate max-w-[200px]">
                {article.title}
              </span>
            </div>
          </motion.nav>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Category Badge */}
            {category && (
              <Link 
                to={`/blog/categorie/${category.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 hover:scale-105 transition-transform"
                style={{
                  backgroundColor: `${category.color}15`,
                  border: `1px solid ${category.color}30`
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-white/10">
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                {author && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dainamics-primary to-dainamics-secondary flex items-center justify-center">
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
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min de lecture</span>
                </div>
              </div>
              
              {/* Share buttons */}
              <div className="flex items-center gap-3">
                <button 
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title="Partager"
                >
                  <Share2 className="w-4 h-4 text-gray-400" />
                </button>
                <button 
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title="Sauvegarder"
                >
                  <Bookmark className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm font-medium">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 border border-white/10 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Box */}
            {author && (
              <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dainamics-primary to-dainamics-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">À propos de l'auteur</p>
                    <h3 className="text-xl font-bold text-white mb-2">{author.name}</h3>
                    <p className="text-gray-400 leading-relaxed">{author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.article>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-dainamics-primary/20 to-dainamics-secondary/20" />
              <div className="absolute inset-0 bg-white/[0.02]" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à transformer votre entreprise ?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Discutons de vos besoins en IA et automatisation. Premier appel gratuit de 30 minutes.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-dainamics-cta hover:bg-dainamics-cta/90 text-white font-semibold rounded-xl transition-all hover:scale-105"
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
                  className="text-dainamics-secondary hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  Voir tous
                  <ChevronRight className="w-4 h-4" />
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
                        <div className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
                          {relatedCategory && (
                            <div
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-4"
                              style={{
                                backgroundColor: `${relatedCategory.color}10`,
                                border: `1px solid ${relatedCategory.color}25`
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

                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-dainamics-secondary transition-colors line-clamp-2 flex-grow">
                            {related.title}
                          </h3>

                          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                            {related.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                            <span>{formatDate(related.publishedAt)}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {related.readTime} min
                            </span>
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
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Article Styles */}
      <style>{`
        .article-content {
          color: #d1d5db;
          font-size: 1.125rem;
          line-height: 1.8;
        }
        
        .article-content h1 {
          color: white;
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .article-content h2 {
          color: white;
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          line-height: 1.3;
        }
        
        .article-content h3 {
          color: white;
          font-size: 1.375rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
        }
        
        .article-content a {
          color: #10E4FF;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        
        .article-content a:hover {
          border-bottom-color: #10E4FF;
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
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        
        .article-content li {
          margin-bottom: 0.75rem;
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
          background: rgba(255,255,255,0.1);
          color: #10E4FF;
          padding: 0.2rem 0.5rem;
          border-radius: 0.375rem;
          font-family: 'Fira Code', 'Monaco', monospace;
          font-size: 0.875em;
        }
        
        .article-content pre {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }
        
        .article-content pre code {
          background: none;
          padding: 0;
          color: #d1d5db;
          font-size: 0.875rem;
          line-height: 1.7;
        }
        
        .article-content blockquote {
          border-left: 4px solid #7B2FFF;
          background: rgba(123, 47, 255, 0.05);
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
        }
        
        .article-content blockquote p {
          margin-bottom: 0;
          color: #9ca3af;
        }
        
        .article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.9375rem;
        }
        
        .article-content thead {
          background: rgba(255,255,255,0.05);
        }
        
        .article-content th {
          text-align: left;
          padding: 1rem;
          color: white;
          font-weight: 600;
          border-bottom: 2px solid rgba(255,255,255,0.1);
        }
        
        .article-content td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #d1d5db;
        }
        
        .article-content tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        
        .article-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
          margin: 3rem 0;
        }
        
        .article-content img {
          max-width: 100%;
          border-radius: 1rem;
          margin: 2rem 0;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .article-content {
            font-size: 1rem;
          }
          
          .article-content h1 {
            font-size: 1.75rem;
          }
          
          .article-content h2 {
            font-size: 1.5rem;
          }
          
          .article-content h3 {
            font-size: 1.25rem;
          }
          
          .article-content pre {
            padding: 1rem;
            border-radius: 0.75rem;
          }
          
          .article-content table {
            font-size: 0.875rem;
          }
          
          .article-content th,
          .article-content td {
            padding: 0.75rem 0.5rem;
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
  let tableHeaders: string[] = [];
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Tables
    if (line.match(/^\|(.+)\|$/)) {
      if (!inTable) {
        inTable = true;
        const headers = line.split('|').slice(1, -1).map(h => h.trim());
        tableHeaders = headers;
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
          // Skip empty lines but don't add br for consecutive empty lines
        } else if (!line.match(/^<[h|p|u|o|t|d|b|hr]/)) {
          // Wrap plain text in paragraphs
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
