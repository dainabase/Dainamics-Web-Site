
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import AgentsHero from '@/components/agents/AgentsHero';
import AgentShowcase from '@/components/agents/AgentShowcase';
import AgentsSynergy from '@/components/agents/AgentsSynergy';

const SuperhumanAgents = () => {
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
        {/* Hero section */}
        <AgentsHero />
        
        {/* Agent Showcase Sections */}
        <AgentShowcase />
        
        {/* Agent Synergy Section */}
        <AgentsSynergy />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuperhumanAgents;
