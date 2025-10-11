
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SuperhumanAgents from "@/pages/SuperhumanAgents";
import CommandCenter from "@/pages/CommandCenter";
import AIArchitectures from "@/pages/AIArchitectures";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiesPolicy from "@/pages/CookiesPolicy";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/agents" element={<SuperhumanAgents />} />
        <Route path="/command-center" element={<CommandCenter />} />
        <Route path="/architectures" element={<AIArchitectures />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
