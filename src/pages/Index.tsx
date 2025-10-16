
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutServices from '@/components/AboutServices';
import DiagnosticQuestionnaireNew from '@/components/DiagnosticQuestionnaireNew';
import IntelligenceCenter from '@/components/IntelligenceCenter';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const Index = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add custom font to head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add font to body
    document.body.style.fontFamily = "'Inter', sans-serif";

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dainamics-background">
      {/* Enhanced Grid Background */}
      <EnhancedGridBackground />

      {/* Custom cursor effects */}
      <CursorEffects />

      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Hero section with 3D brain neural network from Sketchfab */}
        <Hero />
        
        {/* About Services section - 3 pillars (IA, Automatisations, Software) */}
        <AboutServices />
        
        {/* Interactive diagnostic questionnaire - updated version */}
        <DiagnosticQuestionnaireNew />
        
        {/* Intelligence Center showcase - renamed in the component */}
        <IntelligenceCenter />
        
        {/* Services section */}
        <Services />
        
        {/* Social proof section */}
        <SocialProof />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

