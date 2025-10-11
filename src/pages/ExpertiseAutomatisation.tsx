// src/pages/ExpertiseAutomatisation.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  getPillarByCategory,
  categoryColors,
  complexityColors,
  type Technology,
  type Capability,
  type UseCase
} from '@/data/expertise';
import { iconMapper } from '@/utils/iconMapper';
import { 
  ArrowRight, 
  Zap,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Clock,
  Target,
  Award,
  Sparkles
} from 'lucide-react';

export default function ExpertiseAutomatisation() {
  const pillar = getPillarByCategory('automatisation');
  const [selectedProficiency, setSelectedProficiency] = useState<'all' | 'expert' | 'advanced' | 'intermediate'>('all');
  
  if (!pillar) {
    return <div>Pilier non trouvé</div>;
  }

  const automationColor = categoryColors['automatisation'];

  // Filter technologies by proficiency
  const filteredTechnologies = selectedProficiency === 'all' 
    ? pillar.technologies 
    : pillar.technologies.filter(tech => tech.proficiency === selectedProficiency);

  return (
    <div className="min-h-screen bg-dainamics-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at top right, ${automationColor}40, transparent 50%)`
          }}
        />
        
        {/* Animated Background */}
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
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${automationColor}10` }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Link 
                to="/expertise" 
                className="inline-flex items-center gap-2 text-dainamics-light/60 hover:text-dainamics-light transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Retour à l'Expertise
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <Badge 
                variant="outline" 
                className="px-4 py-2 text-sm"
                style={{
                  borderColor: `${automationColor}40`,
                  color: automationColor
                }}
              >
                <Zap className="w-4 h-4 mr-2" />
                Automatisation & Workflow
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: automationColor }}
            >
              {pillar.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-dainamics-light mb-6"
            >
              {pillar.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-dainamics-light/70 mb-8 leading-relaxed"
            >
              {pillar.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="text-white px-8"
                style={{
                  backgroundColor: automationColor,
                }}
              >
                <a href="#contact">
                  Automatiser vos processus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8"
                style={{
                  borderColor: `${automationColor}40`,
                  color: automationColor
                }}
              >
                <Link to="/portfolio">
                  Voir nos automations
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 border-y border-dainamics-light/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Projets Complétés', value: pillar.metrics.projectsCompleted, icon: Target },
              { label: 'ROI Moyen', value: pillar.metrics.avgROI, icon: TrendingUp },
              { label: 'Satisfaction Client', value: pillar.metrics.clientSatisfaction, icon: Award },
              { label: 'Années d\'Expérience', value: `${pillar.metrics.yearsExperience} ans`, icon: Sparkles },
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent 
                    className="w-8 h-8 mx-auto mb-3" 
                    style={{ color: automationColor }}
                  />
                  <p className="text-3xl font-bold text-dainamics-light mb-1">
                    {metric.value}
                  </p>
                  <p className="text-sm text-dainamics-light/60">
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-4">
              Technologies d'Automatisation
            </h2>
            <p className="text-lg text-dainamics-light/70 max-w-2xl mx-auto mb-8">
              {pillar.technologies.length} outils et technologies pour automatiser vos processus
            </p>

            {/* Proficiency Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'expert', 'advanced', 'intermediate'].map((level) => (
                <Button
                  key={level}
                  onClick={() => setSelectedProficiency(level as any)}
                  variant={selectedProficiency === level ? 'default' : 'outline'}
                  size="sm"
                  className={selectedProficiency === level ? 'text-white' : ''}
                  style={selectedProficiency === level ? {
                    backgroundColor: automationColor
                  } : {
                    borderColor: `${automationColor}30`,
                    color: automationColor
                  }}
                >
                  {level === 'all' ? 'Toutes' : level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech, index) => {
              const IconComponent = iconMapper[tech.icon];
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative p-6 rounded-xl bg-dainamics-light/5 border border-dainamics-light/10 hover:border-opacity-30 transition-all duration-300"
                  style={{
                    borderColor: `${automationColor}20`
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${automationColor}15` }}
                  >
                    {IconComponent && (
                      <IconComponent 
                        className="w-6 h-6" 
                        style={{ color: automationColor }}
                      />
                    )}
                  </div>

                  {/* Name & Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-dainamics-light">
                      {tech.name}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{
                        borderColor: `${automationColor}30`,
                        color: automationColor
                      }}
                    >
                      {tech.proficiency}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-dainamics-light/70 mb-4">
                    {tech.description}
                  </p>

                  {/* Used In */}
                  {tech.usedIn.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-dainamics-light/50">
                      <CheckCircle className="w-3 h-3" />
                      <span>Utilisé dans {tech.usedIn.length} projet{tech.usedIn.length > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-dainamics-light/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-4">
              Nos Capacités d'Automatisation
            </h2>
            <p className="text-lg text-dainamics-light/70 max-w-2xl mx-auto">
              {pillar.capabilities.length} services d'automatisation pour transformer vos opérations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pillar.capabilities.map((capability, index) => {
              const IconComponent = iconMapper[capability.icon];
              const complexityColor = complexityColors[capability.complexity];
              
              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-dainamics-background border border-dainamics-light/10 hover:border-opacity-30 transition-all duration-300"
                  style={{
                    borderColor: `${automationColor}20`
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${automationColor}15` }}
                    >
                      {IconComponent && (
                        <IconComponent 
                          className="w-7 h-7" 
                          style={{ color: automationColor }}
                        />
                      )}
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{
                        borderColor: `${complexityColor}30`,
                        color: complexityColor
                      }}
                    >
                      {capability.complexity}
                    </Badge>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-dainamics-light mb-3">
                    {capability.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-dainamics-light/70 mb-4 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-dainamics-light/60 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Délai : {capability.timeline}</span>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <p className="text-xs text-dainamics-light/50 uppercase tracking-wider">
                      Livrables
                    </p>
                    <ul className="space-y-1">
                      {capability.deliverables.slice(0, 3).map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-dainamics-light/70">
                          <CheckCircle 
                            className="w-4 h-4 mt-0.5 flex-shrink-0" 
                            style={{ color: automationColor }}
                          />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-4">
              Cas d'Usage Concrets
            </h2>
            <p className="text-lg text-dainamics-light/70 max-w-2xl mx-auto">
              {pillar.useCases.length} exemples d'automatisation avec ROI prouvé
            </p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {pillar.useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-dainamics-light/5 border border-dainamics-light/10"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left: Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-3 mb-4">
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{
                          borderColor: `${automationColor}30`,
                          color: automationColor
                        }}
                      >
                        {useCase.industry}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-dainamics-light mb-3">
                      {useCase.title}
                    </h3>

                    <p className="text-dainamics-light/70 mb-4">
                      {useCase.description}
                    </p>

                    <div className="flex items-start gap-2 text-sm text-dainamics-light/60">
                      <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Problème :</strong> {useCase.problem}</span>
                    </div>
                  </div>

                  {/* Right: ROI */}
                  <div className="space-y-4">
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${automationColor}10` }}
                    >
                      <p className="text-xs text-dainamics-light/50 mb-2 uppercase">
                        ROI
                      </p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-dainamics-light/70">Délai</p>
                          <p className="text-lg font-bold text-dainamics-light">
                            {useCase.roi.timeframe}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-dainamics-light/70">Économies</p>
                          <p 
                            className="text-xl font-bold"
                            style={{ color: automationColor }}
                          >
                            {useCase.roi.savings}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-dainamics-light/70">Efficacité</p>
                          <p className="text-lg font-bold text-dainamics-light">
                            {useCase.roi.efficiency}
                          </p>
                        </div>
                      </div>
                    </div>

                    {useCase.relatedProjectId && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full"
                        style={{
                          borderColor: `${automationColor}30`,
                          color: automationColor
                        }}
                      >
                        <Link to={`/portfolio#${useCase.relatedProjectId}`}>
                          Voir le projet
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-dainamics-light/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dainamics-light mb-4">
              Quick Wins Automatisation
            </h2>
            <p className="text-lg text-dainamics-light/70 max-w-2xl mx-auto">
              Commencez rapidement avec nos projets d'automatisation à ROI rapide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillar.quickWins.map((quickWin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border"
                style={{
                  backgroundColor: `${automationColor}05`,
                  borderColor: `${automationColor}30`
                }}
              >
                <Zap 
                  className="w-10 h-10 mb-4" 
                  style={{ color: automationColor }}
                />

                <h3 className="text-xl font-bold text-dainamics-light mb-4">
                  {quickWin.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-dainamics-light/50" />
                    <span className="text-dainamics-light/70">
                      <strong>Délai :</strong> {quickWin.timeframe}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-dainamics-light/50" />
                    <span className="text-dainamics-light/70">
                      <strong>Investment :</strong> {quickWin.investment}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp 
                      className="w-4 h-4" 
                      style={{ color: automationColor }}
                    />
                    <span 
                      className="font-semibold"
                      style={{ color: automationColor }}
                    >
                      {quickWin.returns}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  size="sm"
                  className="w-full text-white"
                  style={{ backgroundColor: automationColor }}
                >
                  <a href="#contact">
                    Démarrer ce projet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
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
            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${automationColor}20, ${automationColor}10)`
            }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-dainamics-light mb-6">
                Prêt à automatiser vos processus ?
              </h2>
              <p className="text-lg text-dainamics-light/70 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour un audit gratuit et découvrez comment 
                l'automatisation peut libérer le potentiel de vos équipes
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-white px-8"
                  style={{ backgroundColor: automationColor }}
                >
                  <Link to="/contact">
                    Demander un audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8"
                  style={{
                    borderColor: `${automationColor}40`,
                    color: automationColor
                  }}
                >
                  <Link to="/portfolio">
                    Voir nos réalisations
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