import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  ArrowRight, 
  Brain, 
  Zap, 
  BarChart3, 
  MessageSquare,
  FileText,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  categoryIcon: React.ElementType;
  categoryColor: string;
  image?: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const FeaturedArticles: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Comment l'IA Transforme le Service Client en 2025",
      excerpt: "Découvrez comment les PME suisses obtiennent 70% de réponses plus rapides et 85% de satisfaction client grâce aux agents IA.",
      category: "Stratégie IA",
      categoryIcon: Brain,
      categoryColor: "#7B2FFF",
      date: "15 Nov 2025",
      readTime: "8 min",
      slug: "/blog/ia-service-client-2025",
      featured: true
    },
    {
      title: "Cas d'étude : +37% de Conversion pour une Fiduciaire",
      excerpt: "Comment l'automatisation des processus a transformé le pipeline commercial d'un cabinet comptable genevois.",
      category: "Cas Clients",
      categoryIcon: BarChart3,
      categoryColor: "#0AFF9D",
      date: "12 Nov 2025",
      readTime: "12 min",
      slug: "/blog/case-study-fiduciaire"
    },
    {
      title: "Guide : Automatiser sa Facturation en 2 Semaines",
      excerpt: "Étape par étape, comment passer de 12h/mois de facturation manuelle à 0 avec les bons outils.",
      category: "Automatisation",
      categoryIcon: Zap,
      categoryColor: "#10E4FF",
      date: "8 Nov 2025",
      readTime: "10 min",
      slug: "/blog/automatiser-facturation"
    },
    {
      title: "ChatGPT en Entreprise : Risques et Opportunités",
      excerpt: "Ce que les dirigeants de PME doivent savoir sur l'utilisation de l'IA générative au travail.",
      category: "IA Pratique",
      categoryIcon: MessageSquare,
      categoryColor: "#7B2FFF",
      date: "5 Nov 2025",
      readTime: "6 min",
      slug: "/blog/chatgpt-entreprise"
    },
    {
      title: "Les 5 Erreurs à Éviter en Projet IA",
      excerpt: "Retour d'expérience : les pièges classiques et comment les contourner pour réussir votre transformation.",
      category: "Guide",
      categoryIcon: FileText,
      categoryColor: "#FF5A00",
      date: "1 Nov 2025",
      readTime: "9 min",
      slug: "/blog/erreurs-projet-ia"
    },
    {
      title: "ROI de l'Automatisation : Calculez votre Potentiel",
      excerpt: "Méthodologie pratique pour estimer le retour sur investissement de vos futurs projets d'automatisation.",
      category: "Business",
      categoryIcon: Rocket,
      categoryColor: "#FF5A00",
      date: "28 Oct 2025",
      readTime: "7 min",
      slug: "/blog/roi-automatisation"
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

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
                to={featuredArticle.slug}
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
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-6"
                      style={{ 
                        backgroundColor: `${featuredArticle.categoryColor}20`,
                        border: `1px solid ${featuredArticle.categoryColor}40`
                      }}
                    >
                      <featuredArticle.categoryIcon 
                        className="w-4 h-4" 
                        style={{ color: featuredArticle.categoryColor }} 
                      />
                      <span 
                        className="text-sm font-medium"
                        style={{ color: featuredArticle.categoryColor }}
                      >
                        {featuredArticle.category}
                      </span>
                    </div>

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
                      <span>{featuredArticle.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
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
          {regularArticles.slice(0, 4).map((article, index) => {
            const Icon = article.categoryIcon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  to={article.slug}
                  className="group block h-full"
                >
                  <div className="h-full p-6 rounded-2xl bg-dainamics-card border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                    {/* Category Badge */}
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-4"
                      style={{ 
                        backgroundColor: `${article.categoryColor}15`,
                        border: `1px solid ${article.categoryColor}30`
                      }}
                    >
                      <Icon 
                        className="w-3.5 h-3.5" 
                        style={{ color: article.categoryColor }} 
                      />
                      <span 
                        className="text-xs font-medium"
                        style={{ color: article.categoryColor }}
                      >
                        {article.category}
                      </span>
                    </div>

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
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
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
