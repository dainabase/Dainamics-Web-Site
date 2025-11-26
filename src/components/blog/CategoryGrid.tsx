import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Lightbulb, 
  Compass, 
  Trophy,
  Zap,
  ArrowRight,
  Mail,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Category {
  name: string;
  description: string;
  articleCount: number;
  icon: React.ElementType;
  color: string;
  slug: string;
}

const CategoryGrid: React.FC = () => {
  const categories: Category[] = [
    {
      name: "Stratégie IA",
      description: "Frameworks et approches pour maximiser l'impact de l'IA",
      articleCount: 24,
      icon: Brain,
      color: "#7B2FFF",
      slug: "/blog/categorie/strategie-ia"
    },
    {
      name: "Cas Clients",
      description: "Exemples concrets de déploiements IA réussis en PME",
      articleCount: 18,
      icon: BarChart3,
      color: "#0AFF9D",
      slug: "/blog/categorie/cas-clients"
    },
    {
      name: "Automatisation",
      description: "Guides pratiques pour automatiser vos processus métier",
      articleCount: 31,
      icon: Zap,
      color: "#10E4FF",
      slug: "/blog/categorie/automatisation"
    },
    {
      name: "Tendances",
      description: "Les évolutions à venir en IA et technologies business",
      articleCount: 16,
      icon: Compass,
      color: "#FF5A00",
      slug: "/blog/categorie/tendances"
    },
    {
      name: "Guides Pratiques",
      description: "Tutoriels étape par étape pour implémenter l'IA",
      articleCount: 22,
      icon: Lightbulb,
      color: "#F59E0B",
      slug: "/blog/categorie/guides"
    },
    {
      name: "Compétitivité",
      description: "Comment surpasser vos concurrents grâce à l'IA",
      articleCount: 14,
      icon: Trophy,
      color: "#EF4444",
      slug: "/blog/categorie/competitivite"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-dainamics-background to-[#0A0A1A]">
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
            Explorer par Catégorie
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Trouvez les ressources adaptées à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  to={category.slug}
                  className="group block h-full"
                >
                  <div className="h-full p-6 rounded-2xl bg-[#0A0A1A] border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px]">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                        border: `1px solid ${category.color}30`
                      }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: category.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-dainamics-secondary transition-colors">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    {/* Article Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {category.articleCount} articles
                      </span>
                      <ArrowRight 
                        className="w-4 h-4 text-gray-500 group-hover:text-dainamics-secondary group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-dainamics-primary/10 via-dainamics-secondary/5 to-dainamics-cta/10 border border-white/10"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-dainamics-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-dainamics-secondary/20 rounded-full blur-[80px]" />

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dainamics-primary/10 border border-dainamics-primary/30 mb-4">
                  <Bell className="w-4 h-4 text-dainamics-primary" />
                  <span className="text-sm font-medium text-dainamics-primary">Newsletter</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Restez à la Pointe de l'IA
                </h3>
                <p className="text-gray-400 max-w-xl">
                  Recevez chaque semaine nos meilleurs articles sur l'IA et l'automatisation.
                  Pas de spam, que du contenu utile.
                </p>
              </div>

              {/* Form */}
              <div className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1 min-w-[280px]">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Votre email professionnel"
                      className="w-full py-4 pl-12 pr-4 rounded-xl bg-[#0A0A1A] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-dainamics-primary/50 transition-colors"
                    />
                  </div>
                  <Button
                    className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white font-semibold px-8 py-4 h-auto whitespace-nowrap"
                  >
                    S'abonner
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                  Désinscription en un clic. Vos données restent en Suisse.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
