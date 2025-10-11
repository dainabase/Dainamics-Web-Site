
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import AboutVision from '@/components/about/AboutVision';
import TeamSection from '@/components/about/TeamSection';
import ValueSection from '@/components/about/ValueSection';
import PartnerNetwork from '@/components/about/PartnerNetwork';

const About = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dainamics-background">
      {/* Custom cursor effects */}
      <CursorEffects />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Vision Section */}
        <AboutVision />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Values Section */}
        <ValueSection />
        
        {/* Partner Network */}
        <PartnerNetwork />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
