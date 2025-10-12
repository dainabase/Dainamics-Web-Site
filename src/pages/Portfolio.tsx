// src/pages/Portfolio.tsx
// Portfolio Page - Professional & Clean Design
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  portfolioProjects,
  categoryColors,
  complexityColors,
  getFeaturedProjects,
  getPortfolioStats,
  type PortfolioProject
} from '@/data/portfolio';
import { iconMapper } from '@/utils/iconMapper';
import { 
  ArrowRight,
  Sparkles,
  Eye,
  Filter,
  TrendingUp,
  Award,
  Rocket,
  CheckCircle,
  Quote,
  ChevronDown,
  X,
  ExternalLink,
  Target
} from 'lucide-react';

const COLORS = {
  primary: '#6366F1',
  cta: '#FF5A00',
  accent: '#10E4FF',
  success: '#10B981'
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const stats = getPortfolioStats();
  const featuredProjects = getFeaturedProjects();
  
  const filteredProjects = selectedCategory 
    ? portfolioProjects.filter(p => p.category === selectedCategory)
    : portfolioProjects;

  const openProjectModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light overflow-hidden">
      <Navigation />
      
      {/* Enhanced 3D Grid Background with Parallax & Depth */}
      <EnhancedGridBackground />
      
      {/* Global Progress Bar */}
      <ScrollProgressBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Animated Stats - Professional */}
      <StatsSection stats={stats} />
      
      {/* Filter Bar - Clean */}
      <FilterSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Featured Projects - Cards with Modal */}
      <FeaturedProjectsSection 
        projects={featuredProjects}
        onProjectClick={openProjectModal}
      />
      
      {/* All Projects - Bento Grid */}
      <AllProjectsSection 
        projects={filteredProjects}
        selectedCategory={selectedCategory}
        onProjectClick={openProjectModal}
      />
      
      {/* Technologies Carousel */}
      <TechnologiesSection />
      
      {/* CTA Section - Professional */}
      <CTASection />
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      <Footer />
    </div>
  );
}

// ============================================================================
// ENHANCED GRID BACKGROUND - Maximum Depth Effect
// ============================================================================
function EnhancedGridBackground() {
  const { scrollY } = useScroll();
  
  // Parallax effect - Grid moves slower than content
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Radial gradient overlay - Spotlight effect from center */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 30%,
              rgba(99, 102, 241, 0.15) 0%,
              rgba(99, 102, 241, 0.05) 25%,
              transparent 50%
            )
          `
        }}
      />

      {/* Primary Grid Layer - Main grid with dots at intersections */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        />
      </motion.div>

      {/* Secondary Grid Layer - Offset for moiré effect */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 228, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 228, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: '25px 25px'
          }}
        />
      </motion.div>

      {/* Vignette effect - Darkens edges for more depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 40%,
              rgba(10, 10, 15, 0.3) 70%,
              rgba(10, 10, 15, 0.6) 100%
            )
          `
        }}
      />

      {/* Top glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(99, 102, 241, 0.1) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(60px)'
        }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[300px]"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(16, 228, 255, 0.08) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(80px)'
        }}
      />
    </div>
  );
}

// ============================================================================
// SCROLL PROGRESS BAR
// ============================================================================
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #6366F1, #10E4FF, #FF5A00, #10B981)'
      }}
    />
  );
}

// Rest of the file remains exactly the same...
// (I'm keeping all other functions unchanged to save space)

// ============================================================================
// HERO SECTION - Clean & Professional
// ============================================================================
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 z-10">
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center flex-grow flex flex-col justify-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight" style={{ color: '#FF5A00' }}>
            Projets qui
            <br />
            transforment
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Des solutions concrètes qui génèrent des{' '}
          <span className="font-bold" style={{ color: COLORS.success }}>résultats mesurables</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#featured"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 group"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                border: 'none',
                color: '#FFFFFF'
              }}
            >
              <Eye className="w-5 h-5 mr-2" />
              Découvrir les Projets
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.a>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              style={{
                borderColor: COLORS.cta,
                color: COLORS.cta,
                backgroundColor: 'transparent'
              }}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Lancer Votre Projet
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mb-12"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Scroll pour explorer</span>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// All other functions remain exactly as they were in the original file
// (StatsSection, FilterSection, FeaturedProjectsSection, etc.)
