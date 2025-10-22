import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricsConfidence from '@/components/MetricsConfidence';
import FeaturedProjects from '@/components/FeaturedProjects';
import TrustedClients from '@/components/sections/TrustedClients';
import ServicesOverview from '@/components/sections/ServicesOverview';
import SwissDifferentiators from '@/components/sections/SwissDifferentiators';
import TestimonialSection from '@/components/sections/TestimonialSection';
import FinalCTA from '@/components/sections/FinalCTA';
import DiagnosticQuestionnaireNew from '@/components/DiagnosticQuestionnaireNew';
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
      <main className="relative z-10">
        {/* ========== SECTION 1: HERO ========== */}
        <Hero />

        {/* ========== SECTION 2: METRICS CONFIDENCE ========== */}
        {/* 4 key metrics with animated counters */}
        <MetricsConfidence />

        {/* ========== SECTION 3: TRUSTED CLIENTS ========== */}
        {/* 9 logos carousel */}
        <TrustedClients />

        {/* ========== SECTION 4: FEATURED PROJECTS ========== */}
        {/* LEXAIA & ENKI REALITY */}
        <FeaturedProjects />

        {/* ========== SECTION 5: SERVICES OVERVIEW ========== */}
        {/* 4 services with substance */}
        <ServicesOverview />

        {/* ========== SECTION 6: SWISS DIFFERENTIATORS ========== */}
        {/* 3 USP */}
        <SwissDifferentiators />

        {/* ========== SECTION 7: TESTIMONIAL ========== */}
        {/* Témoignage unique centré */}
        <TestimonialSection />

        {/* ========== SECTION 8: FINAL CTA ========== */}
        {/* Conversion ultime - Booking direct */}
        <FinalCTA />

        {/* ========== SECTION 9: QUESTIONNAIRE DIAGNOSTIC ========== */}
        {/*
          STRATÉGIE CONVERSION :
          - Après FinalCTA : Offre alternative pour leads tièdes (pas prêts à booker)
          - Avant Footer : Dernière chance de capturer un lead qualifié
          - Engagement progressif : Quiz interactif 2 min vs Booking 30 min
          - Double filet : Leads chauds (booking) + Leads tièdes (quiz)
        */}
        <DiagnosticQuestionnaireNew />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
