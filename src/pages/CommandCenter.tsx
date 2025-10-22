
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CommandCenterHero from '@/components/command-center/CommandCenterHero';
import CommandCenterFeatures from '@/components/command-center/CommandCenterFeatures';
import CommandCenterRoi from '@/components/command-center/CommandCenterRoi';

const CommandCenter = () => {
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
        <CommandCenterHero />
        
        {/* Core Features Section */}
        <CommandCenterFeatures />
        
        {/* ROI Calculator Section */}
        <CommandCenterRoi />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CommandCenter;
