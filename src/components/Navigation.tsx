import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Globe, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavItem {
  name: string;
  link: string;
}

interface ProblemeItem {
  label: string;
  href: string;
  isNew?: boolean;
}

interface ServiceItem {
  label: string;
  href: string;
  isNew?: boolean;
}

// Services réorganisés: Piliers principaux + Solutions concrètes
const servicesPiliers: ServiceItem[] = [
  { label: 'Développement Software', href: '/services/developpement' },
  { label: 'Intelligence Artificielle', href: '/expertise/ia' },
  { label: 'Automatisation', href: '/expertise/automatisation' },
];

const servicesSolutions: ServiceItem[] = [
  { label: 'Applications Web', href: '/solutions/applications-web', isNew: true },
  { label: 'Applications Mobiles', href: '/solutions/applications-mobiles', isNew: true },
  { label: 'Dashboards Sur Mesure', href: '/solutions/dashboards', isNew: true },
  { label: 'Portails Clients', href: '/solutions/portails-clients', isNew: true },
];

// Problèmes réorganisés: Automatisation + Développement
const problemesAutomatisation: ProblemeItem[] = [
  { label: 'Facturation manuelle', href: '/automatiser-facturation' },
  { label: 'Support client saturé', href: '/reduire-charge-support' },
  { label: 'Documents à traiter', href: '/traiter-documents-automatiquement' },
  { label: 'Stocks imprévisibles', href: '/optimiser-stocks-predictions' },
  { label: 'Processus manuels', href: '/digitaliser-processus-metier' },
];

const problemesDeveloppement: ProblemeItem[] = [
  { label: 'Excel ne suffit plus', href: '/solutions/dashboards', isNew: true },
  { label: 'Clients frustrés', href: '/solutions/portails-clients', isNew: true },
  { label: 'Équipe déconnectée', href: '/solutions/applications-mobiles', isNew: true },
];

const navItems: NavItem[] = [
  { name: 'Solutions', link: '/solutions' },
  { name: 'Réalisations', link: '/realisations' },
  { name: 'Contact', link: '/contact' },
];

const languages = ['FR', 'EN', 'DE', 'IT'];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [problemesOpen, setProblemesOpen] = useState(false);
  const [problemesOpenMobile, setProblemesOpenMobile] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (link: string) => {
    if (link === '/') return location.pathname === '/';
    return location.pathname.startsWith(link);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-16 py-3 md:py-4 transition-all duration-300',
        scrolled 
          ? 'nav-bg-adaptive shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-adaptive font-bold text-xl sm:text-2xl flex items-center space-x-2 flex-shrink-0">
          <span className="text-gradient-primary glow">DAINAMICS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <div className="flex items-center space-x-4 xl:space-x-6">
            {/* Dropdown Services */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1 text-adaptive-secondary hover:text-adaptive font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap",
                servicesOpen && "text-adaptive"
              )}>
                Services
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 glass-adaptive rounded-xl p-2 shadow-2xl border-dainamics-cta/30"
                  >
                    {/* Piliers principaux */}
                    <div className="mb-2">
                      <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Nos Piliers</span>
                      {servicesPiliers.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-3 text-adaptive-secondary hover:text-adaptive hover-adaptive rounded-lg transition-colors text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Séparateur */}
                    <div className="border-t border-adaptive my-2" />
                    
                    {/* Solutions concrètes */}
                    <div>
                      <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Solutions</span>
                      {servicesSolutions.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center justify-between px-4 py-3 text-adaptive-secondary hover:text-adaptive hover-adaptive rounded-lg transition-colors text-sm"
                        >
                          <span>{item.label}</span>
                          {item.isNew && (
                            <span className="text-[10px] bg-[#FF5A00] text-white px-1.5 py-0.5 rounded-full font-medium">
                              NEW
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown Problèmes */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setProblemesOpen(true)}
              onMouseLeave={() => setProblemesOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1 text-adaptive-secondary hover:text-adaptive font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap",
                problemesOpen && "text-adaptive"
              )}>
                Problèmes
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    problemesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {problemesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 glass-adaptive rounded-xl p-2 shadow-2xl border-dainamics-primary/30"
                  >
                    {/* Problèmes Automatisation */}
                    <div className="mb-2">
                      <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Automatisation</span>
                      {problemesAutomatisation.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-3 text-adaptive-secondary hover:text-adaptive hover-adaptive rounded-lg transition-colors text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Séparateur */}
                    <div className="border-t border-adaptive my-2" />
                    
                    {/* Problèmes Développement */}
                    <div>
                      <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Développement</span>
                      {problemesDeveloppement.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center justify-between px-4 py-3 text-adaptive-secondary hover:text-adaptive hover-adaptive rounded-lg transition-colors text-sm"
                        >
                          <span>{item.label}</span>
                          {item.isNew && (
                            <span className="text-[10px] bg-[#FF5A00] text-white px-1.5 py-0.5 rounded-full font-medium">
                              NEW
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Autres liens */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={cn(
                  "text-adaptive-secondary hover:text-adaptive font-medium transition-colors duration-200 relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-dainamics-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm xl:text-base whitespace-nowrap",
                  isActive(item.link) && "text-dainamics-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center text-adaptive-secondary hover:text-adaptive"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-sm">{currentLanguage}</span>
              </button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-24 glass-adaptive rounded-md shadow-lg z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLanguage(lang);
                          setLanguageMenuOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2 hover:bg-dainamics-primary/10 transition-colors text-sm",
                          currentLanguage === lang ? "text-dainamics-primary" : "text-adaptive-secondary"
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="sm"
              className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white text-xs xl:text-sm whitespace-nowrap px-3 xl:px-4 flex items-center gap-2"
            >
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Appel Gratuit
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-adaptive focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-adaptive border-t border-adaptive mt-4"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-2">
                {/* Accordéon Services */}
                <div>
                  <button
                    onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                    className="flex items-center justify-between w-full text-adaptive py-3 px-4 font-medium"
                  >
                    Services
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      servicesOpenMobile && "rotate-180"
                    )} />
                  </button>
                  <AnimatePresence>
                    {servicesOpenMobile && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 mt-2"
                      >
                        {/* Piliers */}
                        <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Nos Piliers</span>
                        {servicesPiliers.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block text-adaptive-secondary hover:text-adaptive py-2 px-4 rounded-lg hover-adaptive transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        
                        {/* Séparateur mobile */}
                        <div className="border-t border-adaptive my-2 mx-4" />
                        
                        {/* Solutions */}
                        <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Solutions</span>
                        {servicesSolutions.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center justify-between text-adaptive-secondary hover:text-adaptive py-2 px-4 rounded-lg hover-adaptive transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            {item.isNew && (
                              <span className="text-[10px] bg-[#FF5A00] text-white px-1.5 py-0.5 rounded-full font-medium">
                                NEW
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordéon Problèmes */}
                <div>
                  <button
                    onClick={() => setProblemesOpenMobile(!problemesOpenMobile)}
                    className="flex items-center justify-between w-full text-adaptive py-3 px-4 font-medium"
                  >
                    Problèmes
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      problemesOpenMobile && "rotate-180"
                    )} />
                  </button>
                  <AnimatePresence>
                    {problemesOpenMobile && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 mt-2"
                      >
                        {/* Automatisation */}
                        <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Automatisation</span>
                        {problemesAutomatisation.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block text-adaptive-secondary hover:text-adaptive py-2 px-4 rounded-lg hover-adaptive transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        
                        {/* Séparateur mobile */}
                        <div className="border-t border-adaptive my-2 mx-4" />
                        
                        {/* Développement */}
                        <span className="block px-4 py-1 text-xs text-adaptive-muted uppercase tracking-wider">Développement</span>
                        {problemesDeveloppement.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center justify-between text-adaptive-secondary hover:text-adaptive py-2 px-4 rounded-lg hover-adaptive transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            {item.isNew && (
                              <span className="text-[10px] bg-[#FF5A00] text-white px-1.5 py-0.5 rounded-full font-medium">
                                NEW
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Autres liens */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={cn(
                      "text-adaptive-secondary hover:text-adaptive font-medium py-3 px-4 rounded-lg transition-colors",
                      isActive(item.link) && "text-dainamics-primary bg-dainamics-primary/5"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex items-center mt-4 px-4 space-x-2">
                  <span className="text-adaptive-secondary text-sm">Langue:</span>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCurrentLanguage(lang)}
                        className={cn(
                          "px-2 py-1 rounded text-sm",
                          currentLanguage === lang
                            ? "bg-dainamics-primary/20 text-dainamics-primary"
                            : "text-dainamics-light/80"
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Mobile */}
                <div className="mt-4 px-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white w-full flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to="/contact">
                      <Phone className="w-4 h-4" />
                      Appel Gratuit
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
