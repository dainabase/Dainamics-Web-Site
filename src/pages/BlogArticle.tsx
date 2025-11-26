import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, User, Tag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import {
  getArticleBySlug,
  getCategoryById,
  getAuthorById,
  getArticlesByCategory,
  BlogArticle as Article
} from '@/data/blog';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const found = getArticleBySlug(slug);
      setArticle(found || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dainamics-background flex items-center justify-center">
        <div className="text-white text-xl">Chargement...</div>
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const category = getCategoryById(article.categoryId);
  const author = getAuthorById(article.authorId);
  const relatedArticles = getArticlesByCategory(article.categoryId)
    .filter(a => a.slug !== slug)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-dainamics-background">
      <EnhancedGridBackground />
      <Navigation />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-dainamics-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Category Badge */}
            {category && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{
                  backgroundColor: `${category.color}20`,
                  border: `1px solid ${category.color}40`
                }}
              >
                <span style={{ color: category.color }} className="text-sm font-medium">
                  {category.name}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              {author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min de lecture</span>
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
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#10E4FF] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-gray-300 prose-ul:my-6
                prose-ol:text-gray-300 prose-ol:my-6
                prose-li:my-2 prose-li:marker:text-[#7B2FFF]
                prose-code:bg-white/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-[#10E4FF] prose-code:font-mono prose-code:text-sm
                prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4
                prose-blockquote:border-l-4 prose-blockquote:border-[#7B2FFF] prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic
                prose-table:border-collapse prose-table:w-full prose-table:my-8
                prose-th:bg-white/10 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-white
                prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-3 prose-td:text-gray-300
                prose-hr:border-white/10 prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(article.content) }}
            />

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-6xl mx-auto mt-20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map(related => {
                  const relatedCategory = getCategoryById(related.categoryId);
                  return (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group block h-full"
                    >
                      <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col">
                        {relatedCategory && (
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-4"
                            style={{
                              backgroundColor: `${relatedCategory.color}15`,
                              border: `1px solid ${relatedCategory.color}30`
                            }}
                          >
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

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{formatDate(related.publishedAt)}</span>
                          <span>{related.readTime} min</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const parseMarkdown = (content: string): string => {
  let html = content;

  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

  const lines = html.split('\n');
  let inList = false;
  let inTable = false;
  let tableHeaders: string[] = [];
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

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

      if (line.match(/^[\-\*] (.+)/)) {
        const content = line.replace(/^[\-\*] /, '');
        if (!inList) {
          processedLines.push('<ul>');
          inList = true;
        }
        processedLines.push(`<li>${content}</li>`);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }

        if (line.trim() === '') {
          processedLines.push('<br>');
        } else if (!line.match(/^<[h|p|u|o|t|d|b]/)) {
          processedLines.push(line);
        } else {
          processedLines.push(line);
        }
      }
    }
  }

  if (inList) {
    processedLines.push('</ul>');
  }
  if (inTable) {
    processedLines.push('</tbody></table>');
  }

  return processedLines.join('\n');
};

export default BlogArticle;
