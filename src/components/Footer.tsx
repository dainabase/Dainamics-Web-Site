import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Send, Linkedin, Github, MapPin, Mail, Phone } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez nos prochaines actualités.",
    });
    
    setEmail('');
  };
  
  return (
    <footer className="bg-adaptive relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dainamics-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-dainamics-primary/20 rounded-full blur-[100px] z-0 opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Company info */}
          <div className="md:col-span-4">
            <Link to="/" className="text-adaptive font-bold text-2xl flex items-center space-x-2 mb-4">
              <span className="text-gradient-primary glow">DAINAMICS</span>
            </Link>
            
            <p className="text-adaptive-secondary mb-6">
              Agence suisse spécialisée en IA, Automatisation et Développement sur mesure pour PME européennes.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-adaptive-muted text-sm">
                <MapPin className="h-4 w-4" />
                <span>Suisse (Genève, Lausanne)</span>
              </div>
              <a 
                href="mailto:contact@dainamics.ch" 
                className="flex items-center gap-2 text-adaptive-muted hover:text-dainamics-primary text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@dainamics.ch</span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/dainamics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-adaptive-muted hover:text-dainamics-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/dainabase" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-adaptive-muted hover:text-dainamics-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Entreprise */}
          <div className="md:col-span-2">
            <h3 className="text-adaptive font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-adaptive-secondary hover:text-dainamics-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-adaptive-secondary hover:text-dainamics-primary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-adaptive-secondary hover:text-dainamics-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Ressources */}
          <div className="md:col-span-2">
            <h3 className="text-adaptive font-semibold mb-4">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-adaptive-secondary hover:text-dainamics-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-adaptive-secondary hover:text-dainamics-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-adaptive-secondary hover:text-dainamics-primary transition-colors">
                  Études de cas
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-adaptive font-semibold mb-4">Newsletter</h3>
            <p className="text-adaptive-secondary mb-4 text-sm">
              Recevez nos conseils IA & Automatisation pour PME. Pas de spam, que du concret.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-adaptive-card border-adaptive rounded-r-none focus-visible:ring-dainamics-primary/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  type="submit"
                  size="icon"
                  className="bg-dainamics-primary hover:bg-dainamics-primary/90 rounded-l-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-adaptive-muted text-xs">
                Désinscription possible à tout moment.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom links */}
        <div className="pt-8 border-t border-adaptive flex flex-col md:flex-row justify-between items-center">
          <div className="text-adaptive-muted text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DAINAMICS by HMF Corporation SA. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-adaptive-secondary hover:text-dainamics-primary text-sm transition-colors">
              CGV
            </Link>
            <Link to="/privacy" className="text-adaptive-secondary hover:text-dainamics-primary text-sm transition-colors">
              Confidentialité
            </Link>
            <Link to="/cookies" className="text-adaptive-secondary hover:text-dainamics-primary text-sm transition-colors">
              Cookies
            </Link>
            <Link to="/sitemap" className="text-adaptive-secondary hover:text-dainamics-primary text-sm transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
