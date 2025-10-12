// src/pages/Solutions.tsx
// Solutions Page - Professional Design with Filters & Modals
// Référence Design System: DESIGN-SYSTEM-MANDATORY.md

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  solutions, 
  quickWinSolutions, 
  solutionsByCategory,
  solutionsStats,
  type Solution 
} from '@/data/solutions';
import { iconMapper } from '@/utils/iconMapper';
import { 
  ArrowRight,
  Sparkles,
  Filter,
  X,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  ChevronDown,
  Rocket
} from 'lucide-react';

const COLORS = {
  primary: '#6366F1',
  cta: '#FF5A00',
  accent: '#10E4FF',
  success: '#10B981'
};

const CATEGORY_COLORS = {
  'ia': '#6366F1',
  'automatisation': '#10E4FF',
  'developpement': '#FF5A00'
};

const COMPLEXITY_COLORS = {
  'starter': '#10B981',
  'intermediate': '#F59E0B',
  'advanced': '#EF4444'
};

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSolutions = solutions.filter(solution => {
    const categoryMatch = !selectedCategory || solution.category === selectedCategory;
    const complexityMatch = !selectedComplexity || solution.complexity === selectedComplexity;
    return categoryMatch && complexityMatch;
  });

  const openSolutionModal = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSolution(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-dainamics-background text-dainamics-light overflow-hidden">
      <Navigation />

      {/* Enhanced 3D Grid Background with Parallax & Depth */}
      <EnhancedGridBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Filters */}
      <FiltersSection
        selectedCategory={selectedCategory}
        selectedComplexity={selectedComplexity}
        onCategoryChange={setSelectedCategory}
        onComplexityChange={setSelectedComplexity}
      />

      {/* Quick Wins Highlight */}
      {!selectedCategory && !selectedComplexity && (
        <QuickWinsSection onSolutionClick={openSolutionModal} />
      )}

      {/* Solutions Grid */}
      <SolutionsGrid
        solutions={filteredSolutions}
        onSolutionClick={openSolutionModal}
      />

      {/* CTA Section */}
      <CTASection />

      {/* Solution Modal */}
      <SolutionModal
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}

// All other component functions remain unchanged from the original file
// (HeroSection, StatsSection, FiltersSection, QuickWinsSection, etc.)
// The only change is removing the inline EnhancedGridBackground function
// and importing it as a component instead
