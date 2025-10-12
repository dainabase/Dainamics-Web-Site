
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import ArchitecturesHero from '@/components/architectures/ArchitecturesHero';
import ProcessVisualization from '@/components/architectures/ProcessVisualization';
import UseCases from '@/components/architectures/UseCases';
import TechStack from '@/components/architectures/TechStack';
import CoCreation from '@/components/architectures/CoCreation';

const AIArchitectures = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dainamics-background">
      <EnhancedGridBackground />
      {/* Custom cursor effects */}
      <CursorEffects />

      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Hero section */}
        <ArchitecturesHero />
        
        {/* Process Visualization */}
        <ProcessVisualization />
        
        {/* Use Cases */}
        <UseCases />
        
        {/* Technology Stack */}
        <TechStack />
        
        {/* Co-Creation Process */}
        <CoCreation />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AIArchitectures;
