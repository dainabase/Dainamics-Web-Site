// src/pages/Expertise.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  expertisePillars, 
  categoryColors, 
  getGlobalStats,
  COLORS,
  type ExpertisePillar 
} from '@/data/expertise';
import { iconMapper } from '@/utils/iconMapper';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp,
  Users,
  Award,
  Target,
  ChevronRight
} from 'lucide-react';

export default function Expertise() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const globalStats = getGlobalStats();

  // URLs des sous-pages expertise
  const pillarUrls: Record<string, string> = {
    'pilier-ia': '/expertise/ia',
    'pilier-automatisation': '/expertise/automatisation',
    'pilier-developpement': '/expertise/developpement'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dainamics-primary/10 via-transparent to-dainamics-accent/10" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-dainamics-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-dainamics-accent/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge 
                variant="outline" 
                className="border-dainamics-primary/30 text-dainamics-primary px-4 py-2 text-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                3 Piliers d'Excellence
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-dainamics-light mb-6"
            >
              Notre{' '}
              <span className="text-gradient-primary">Expertise</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-dainamics-light/70 mb-8 max-w-3xl mx-auto"
            >
              Trois domaines de pointe pour transformer votre entreprise : 
              Intelligence Artificielle, Automatisation et Développement sur mesure. 
              Des solutions concrètes avec ROI mesurable.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white px-8 py-6 text-lg"
              >
                <a href="#diagnostic">
                  Diagnostic Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3 Pillar Cards Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-4">
              Nos 3 Piliers d'Excellence
            </h2>
            <p className="text-lg text-dainamics-light/70 max-w-2xl mx-auto">
              Chaque pilier combine expertise technique pointue et compréhension 
              profonde de vos enjeux business
            </p>
          </motion.div>

          {/* Pillar Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertisePillars.map((pillar, index) => {
              const IconComponent = iconMapper[pillar.icon];
              const pillarColor = categoryColors[pillar.category];

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  onHoverStart={() => setHoveredPillar(pillar.id)}
                  onHoverEnd={() => setHoveredPillar(null)}
                  className="relative group"
                >
                  {/* Card */}
                  <div 
                    className="relative h-full bg-dainamics-background border rounded-2xl p-8 transition-all duration-300"
                    style={{
                      borderColor: hoveredPillar === pillar.id 
                        ? pillarColor 
                        : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: hoveredPillar === pillar.id
                        ? `0 0 40px ${pillarColor}40`
                        : 'none'
                    }}
                  >
                    {/* Glow Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${pillarColor}10, transparent 70%)`
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${pillarColor}20` }}
                      >
                        {IconComponent && (
                          <IconComponent 
                            className="w-8 h-8" 
                            style={{ color: pillarColor }}
                          />
                        )}
                      </div>

                      {/* Name */}
                      <h3 
                        className="text-2xl font-bold mb-3"
                        style={{ color: pillarColor }}
                      >
                        {pillar.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-dainamics-light/80 mb-6 text-sm leading-relaxed">
                        {pillar.tagline}
                      </p>

                      {/* Technologies Preview (5 first) */}
                      <div className="mb-6">
                        <p className="text-xs text-dainamics-light/50 mb-3 uppercase tracking-wider">
                          Technologies Clés
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pillar.technologies.slice(0, 5).map((tech) => (
                            <Badge
                              key={tech.name}
                              variant="outline"
                              className="text-xs border-dainamics-light/20 text-dainamics-light/70"
                            >
                              {tech.name}
                            </Badge>
                          ))}
                          {pillar.technologies.length > 5 && (
                            <Badge
                              variant="outline"
                              className="text-xs border-dainamics-light/20 text-dainamics-light/70"
                            >
                              +{pillar.technologies.length - 5}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-t border-b border-dainamics-light/10">
                        <div>
                          <p className="text-2xl font-bold text-dainamics-light">
                            {pillar.metrics.projectsCompleted.value}
                          </p>
                          <p className="text-xs text-dainamics-light/50">Projets</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-dainamics-light">
                            {pillar.metrics.clientSatisfaction.value}
                          </p>
                          <p className="text-xs text-dainamics-light/50">Satisfaction</p>
                        </div>
                      </div>

                      {/* ROI */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4" style={{ color: pillarColor }} />
                          <span className="text-dainamics-light/70">
                            ROI moyen : <span className="font-semibold text-dainamics-light">{pillar.metrics.avgROI.value}</span>
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group/btn"
                        style={{
                          borderColor: pillarColor,
                          color: pillarColor
                        }}
                      >
                        <Link to={pillarUrls[pillar.id]}>
                          Voir détails
                          <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Metrics Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-dainamics-primary/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dainamics-light mb-4">
              L'Excellence en Chiffres
            </h2>
            <p className="text-dainamics-light/70 max-w-2xl mx-auto">
              Des résultats concrets et mesurables pour nos clients
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Target, 
                value: globalStats.totalProjects, 
                label: 'Projets Complétés',
                color: COLORS.primary
              },
              { 
                icon: Award, 
                value: globalStats.avgSatisfaction, 
                label: 'Satisfaction Client',
                color: COLORS.success
              },
              { 
                icon: Sparkles, 
                value: globalStats.totalTechnologies, 
                label: 'Technologies',
                color: COLORS.accent
              },
              { 
                icon: Users, 
                value: '15+', 
                label: 'Experts',
                color: COLORS.cta
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: stat.color }}
                    />
                  </div>
                  <p className="text-4xl font-bold text-dainamics-light mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-dainamics-light/60">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-dainamics-primary/20 to-dainamics-accent/20 p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-dainamics-light mb-6">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-lg text-dainamics-light/70 mb-8 max-w-2xl mx-auto">
                Découvrez comment nos solutions d'IA, d'automatisation et de développement 
                peuvent générer un ROI mesurable pour votre business
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white px-8"
                >
                  <Link to="/portfolio">
                    Voir notre Portfolio
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-dainamics-accent text-dainamics-accent hover:bg-dainamics-accent/10 px-8"
                >
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
