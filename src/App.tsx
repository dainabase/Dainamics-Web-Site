import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Solutions from "@/pages/Solutions";
import Realisations from "@/pages/Realisations";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiesPolicy from "@/pages/CookiesPolicy";
import NotFound from "@/pages/NotFound";

// Expertise Pages (IA et Automatisation seulement)
import ExpertiseIA from "@/pages/ExpertiseIA";
import ExpertiseAutomatisation from "@/pages/ExpertiseAutomatisation";

// Services Pages
import ServicesDeveloppement from "@/pages/services/Developpement";

// Solutions Pages
import Dashboards from "@/pages/solutions/Dashboards";
import PortailsClients from "@/pages/solutions/PortailsClients";
import ApplicationsMobiles from "@/pages/solutions/ApplicationsMobiles";
import ApplicationsWeb from "@/pages/solutions/ApplicationsWeb";

// Realisations Pages
import InMotionDigitalSignage from "@/pages/realisations/InMotionDigitalSignage";
import LexaiaLegalAI from "@/pages/realisations/LexaiaLegalAI";
import EnkiRealtyPlatform from "@/pages/realisations/EnkiRealtyPlatform";
import DatavsnRetailAnalytics from "@/pages/realisations/DatavsnRetailAnalytics";

// Problemes Pages
import AutomatiserFacturation from "@/pages/problemes/AutomatiserFacturation";
import ReduireChargeSupport from "@/pages/problemes/ReduireChargeSupport";
import TraiterDocuments from "@/pages/problemes/TraiterDocuments";
import OptimiserStocks from "@/pages/problemes/OptimiserStocks";
import DigitaliserProcessus from "@/pages/problemes/DigitaliserProcessus";

// Solutions Pages
import QuickWins from "@/pages/QuickWins";
import Industries from "@/pages/Industries";

import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";

// DEV ONLY - Menu pour voir les pages orphelines
import DevMenu from "@/components/DevMenu";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* DEV MENU - Bouton flottant pour accéder aux pages orphelines */}
      {/* TODO: Supprimer avant mise en production */}
      <DevMenu />
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />

        {/* Problemes Routes */}
        <Route path="/automatiser-facturation" element={<AutomatiserFacturation />} />
        <Route path="/reduire-charge-support" element={<ReduireChargeSupport />} />
        <Route path="/traiter-documents-automatiquement" element={<TraiterDocuments />} />
        <Route path="/optimiser-stocks-predictions" element={<OptimiserStocks />} />
        <Route path="/digitaliser-processus-metier" element={<DigitaliserProcessus />} />

        {/* Navigation Principale */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/realisations/inmotion-digital-signage" element={<InMotionDigitalSignage />} />
        <Route path="/realisations/lexaia-legal-ai" element={<LexaiaLegalAI />} />
        <Route path="/realisations/enki-realty-automation" element={<EnkiRealtyPlatform />} />
        <Route path="/realisations/datavsn-retail-analytics" element={<DatavsnRetailAnalytics />} />
        <Route path="/contact" element={<Contact />} />

        {/* Expertise Routes (IA et Automatisation uniquement) */}
        <Route path="/expertise/ia" element={<ExpertiseIA />} />
        <Route path="/expertise/automatisation" element={<ExpertiseAutomatisation />} />

        {/* Services Routes */}
        <Route path="/services/developpement" element={<ServicesDeveloppement />} />

        {/* Solutions Sub-Routes */}
        <Route path="/solutions/quick-wins" element={<QuickWins />} />
        <Route path="/solutions/industries" element={<Industries />} />
        <Route path="/solutions/dashboards" element={<Dashboards />} />
        <Route path="/solutions/portails-clients" element={<PortailsClients />} />
        <Route path="/solutions/applications-mobiles" element={<ApplicationsMobiles />} />
        <Route path="/solutions/applications-web" element={<ApplicationsWeb />} />

        {/* Portfolio */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Resources Routes */}
        <Route path="/blog" element={<Blog />} />

        {/* Legal Pages */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
