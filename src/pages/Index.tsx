import { useEffect, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutServices from '@/components/AboutServices';
import CredibiliteImmediate from '@/components/sections/CredibiliteImmediate';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExpertisesSection from '@/components/sections/ExpertisesSection';
import ProcessusSection_v2 from '@/components/sections/ProcessusSection_v2';
import SwissDifferentiators from '@/components/sections/SwissDifferentiators';
import CTAFinalSection from '@/components/sections/CTAFinalSection';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

const AutomatisationsQuestionnaire = lazy(() => import('@/components/AutomatisationsQuestionnaire'));

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

        {/* ========== SECTION 2: ABOUT SERVICES ========== */}
        {/* 3 pillars (IA, Automatisations, Software) */}
        <AboutServices />

        {/* ========== SECTION 3: CRÉDIBILITÉ IMMÉDIATE ========== */}
        {/* Fusion Metrics + Logos - 4 KPIs + 9 logos clients */}
        <CredibiliteImmediate />

        {/* ========== SECTION 4: FEATURED PROJECTS ========== */}
        {/* LEXAIA & ENKI REALITY */}
        <FeaturedProjects />

        {/* ========== SECTION 4B: NOS 3 EXPERTISES ========== */}
        {/* IA · Automatisations · Software */}
        <ExpertisesSection />

        {/* ========== SECTION 4C: PROCESSUS TRANSPARENT ========== */}
        {/* De l'Idée au ROI en 8 Semaines - Timeline + Garantie */}
        <ProcessusSection_v2 />



        {/* ========== SECTION 8: SWISS DIFFERENTIATORS ========== */}
        {/* 3 USP */}
        <SwissDifferentiators />

        {/* ========== SECTION 9: CTA FINAL (DOUBLE PARCOURS) ========== */}
        {/* 3 Options: Explorer Solutions | Diagnostic 2 min | Réserver Appel */}
        <CTAFinalSection />

        {/* ========== SECTION 10: QUESTIONNAIRE AUTOMATISATIONS ========== */}
        {/*
          NOUVELLE APPROCHE SIMPLIFIÉE (v2.0) :
          - Problem-first: 6 catégories business → Questions contextuelles → 3 scénarios personnalisés
          - Réduction 68% bundle size (1,184 → 520 lignes)
          - Focus sur 20 automatisations réelles DAINAMICS (vs agents IA fictifs)
          - Pas de pricing affiché (devis uniquement)
          - Intégration automatisations.ts + scenarios.ts
          
          STRATÉGIE CONVERSION :
          - Après FinalCTA : Offre alternative pour leads tièdes (pas prêts à booker)
          - Avant Footer : Dernière chance de capturer un lead qualifié
          - Engagement progressif : Quiz interactif 2 min vs Booking 30 min
          - Double filet : Leads chauds (booking) + Leads tièdes (quiz)
        */}
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-dainamics-background">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-dainamics-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Chargement du questionnaire...</p>
            </div>
          </div>
        }>
          <AutomatisationsQuestionnaire />
        </Suspense>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
