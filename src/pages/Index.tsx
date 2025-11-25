import { useEffect, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutServices from '@/components/AboutServices';
import CredibiliteImmediate from '@/components/sections/CredibiliteImmediate';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProcessusSection_v2 from '@/components/sections/ProcessusSection_v2';
import PricingSection from '@/components/sections/PricingSection';
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
        {/* Métriques honnêtes + Logos clients MIX (entreprises + PME) */}
        <CredibiliteImmediate />

        {/* ========== SECTION 4: FEATURED PROJECTS ========== */}
        {/* LEXAIA & ENKI REALITY */}
        <FeaturedProjects />

        {/* ========== SECTION 5: PROCESSUS TRANSPARENT ========== */}
        {/* De l'Idée au ROI en 8 Semaines - Timeline + Garantie */}
        <ProcessusSection_v2 />

        {/* ========== SECTION 6: PRICING TRANSPARENT ========== */}
        {/* 4 offres : Discovery, Quick Win, Projet Custom, Extension équipe */}
        {/* Différenciateur marché suisse : seuls à afficher les prix */}
        <PricingSection />

        {/* ========== SECTION 7: SWISS DIFFERENTIATORS ========== */}
        {/* 3 USP : Données Suisse, Prix Affichés, ROI Garanti */}
        <SwissDifferentiators />

        {/* ========== SECTION 8: CTA FINAL ========== */}
        {/* 2 options simplifiées : Réserver Appel + Diagnostic */}
        <CTAFinalSection />

        {/* ========== SECTION 9: QUESTIONNAIRE AUTOMATISATIONS ========== */}
        {/* Lead magnet interactif pour leads tièdes */}
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
