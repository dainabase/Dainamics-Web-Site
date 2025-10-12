import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SuperhumanAgents from "@/pages/SuperhumanAgents";
import CommandCenter from "@/pages/CommandCenter";
import AIArchitectures from "@/pages/AIArchitectures";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Solutions from "@/pages/Solutions";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiesPolicy from "@/pages/CookiesPolicy";
import NotFound from "@/pages/NotFound";

// Expertise Pages
import Expertise from "@/pages/Expertise";
import ExpertiseIA from "@/pages/ExpertiseIA";
import ExpertiseAutomatisation from "@/pages/ExpertiseAutomatisation";
import ExpertiseDeveloppement from "@/pages/ExpertiseDeveloppement";

// Resource Pages
import Glossary from "@/pages/Glossary";
import UseCases from "@/pages/UseCases";

// Process Page
import Process from "@/pages/Process";

import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        
        {/* Expertise Routes */}
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/expertise/ia" element={<ExpertiseIA />} />
        <Route path="/expertise/automatisation" element={<ExpertiseAutomatisation />} />
        <Route path="/expertise/developpement" element={<ExpertiseDeveloppement />} />
        
        {/* Solutions Routes */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/*" element={<Solutions />} />
        <Route path="/solutions/quick-wins" element={<Solutions />} />
        <Route path="/solutions/industries" element={<Solutions />} />
        
        {/* Portfolio */}
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Resources Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/use-cases" element={<UseCases />} />
        
        {/* Business Pages */}
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Legacy Routes (if needed) */}
        <Route path="/agents" element={<SuperhumanAgents />} />
        <Route path="/command-center" element={<CommandCenter />} />
        <Route path="/architectures" element={<AIArchitectures />} />
        
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
