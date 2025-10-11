
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

// Structure du menu avec dropdowns
interface NavItem {
  name: string;
  link?: string;
  children?: NavItem[];
  comingSoon?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  {
    name: 'Expertise',
    children: [
      { name: 'Vue d\'ensemble', link: '/expertise' },
      { name: 'Intelligence Artificielle', link: '/expertise/ia' },
      { name: 'Automatisation', link: '/expertise/automatisation' },
      { name: 'Développement', link: '/expertise/developpement' },
    ],
  },
  {
    name: 'Solutions',
    children: [
      { name: 'Toutes les solutions', link: '/solutions' },
      { name: 'Quick Wins', link: '/solutions/quick-wins' },
      { name: 'Par industrie', link: '/solutions/industries' },
    ],
  },
  { name: 'Portfolio', link: '/portfolio', comingSoon: true },
  {
    name: 'Resources',
    children: [
      { name: 'Blog', link: '/blog' },
      { name: 'Glossaire', link: '/glossary', comingSoon: true },
      { name: 'Cas d\'Usage', link: '/use-cases', comingSoon: true },
    ],
  },
  {
    name: 'À Propos',
    children: [
      { name: 'Notre Histoire', link: '/about' },
      { name: 'Notre Process', link: '/process', comingSoon: true },
      { name: 'Notre Approche', link: '/about#approach' },
    ],
  },
  { name: 'Pricing', link: '/pricing', comingSoon: true },
  { name: 'Contact', link: '/contact', comingSoon: true },
];

const languages = ['FR', 'EN', 'DE', 'IT'];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };
    
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  // Fermer menu mobile quand route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOpenSubmenu(null);
  }, [location.pathname]);

  const isActive = (link?: string) => {
    if (!link) return false;
    if (link === '/') return location.pathname === '/';
    return location.pathname.startsWith(link);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-4 transition-all duration-300',
        scrolled ? 'bg-dainamics-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-dainamics-light font-bold text-2xl flex items-center space-x-2">
          <span className="text-gradient-primary glow">Dainamics</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                onClick={(e) => e.stopPropagation()}
              >
                {item.children ? (
                  // Menu avec dropdown
                  <button
                    className={cn(
                      "text-dainamics-light/80 hover:text-dainamics-light font-medium transition-colors duration-200 flex items-center gap-1",
                      openDropdown === item.name && "text-dainamics-light"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  // Menu simple
                  <Link
                    to={item.link || '/'}
                    className={cn(
                      "text-dainamics-light/80 hover:text-dainamics-light font-medium transition-colors duration-200 relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-dainamics-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left flex items-center gap-2",
                      isActive(item.link) && "text-dainamics-primary"
                    )}
                  >
                    {item.name}
                    {item.comingSoon && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-dainamics-accent/20 text-dainamics-accent">
                        Soon
                      </span>
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-dainamics-background/95 backdrop-blur-lg border border-dainamics-primary/20 rounded-lg shadow-xl overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.link || '/'}
                          className={cn(
                            "block px-4 py-3 text-dainamics-light/80 hover:text-dainamics-light hover:bg-dainamics-primary/10 transition-colors duration-200 flex items-center justify-between gap-2",
                            isActive(child.link) && "text-dainamics-primary bg-dainamics-primary/5"
                          )}
                        >
                          <span>{child.name}</span>
                          {child.comingSoon && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-dainamics-accent/20 text-dainamics-accent">
                              Soon
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center text-dainamics-light/80 hover:text-dainamics-light"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span>{currentLanguage}</span>
              </button>
              
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-24 bg-dainamics-background/90 backdrop-blur-md border border-dainamics-primary/20 rounded-md shadow-lg z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLanguage(lang);
                          setLanguageMenuOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2 hover:bg-dainamics-primary/10 transition-colors",
                          currentLanguage === lang ? "text-dainamics-primary" : "text-dainamics-light/80"
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <Button
              asChild
              variant="outline"
              className="border-dainamics-primary text-dainamics-primary hover:bg-dainamics-primary/10"
            >
              <Link to="/contact">Contact</Link>
            </Button>
            
            <Button 
              asChild
              className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow"
            >
              <a href="#diagnostic">Diagnostic Gratuit</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-dainamics-light focus:outline-none"
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
            className="lg:hidden bg-dainamics-background/95 backdrop-blur-lg border-t border-dainamics-primary/20 mt-4"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      // Menu avec sous-menu
                      <>
                        <button
                          onClick={() => setMobileOpenSubmenu(
                            mobileOpenSubmenu === item.name ? null : item.name
                          )}
                          className="w-full text-left text-dainamics-light/80 hover:text-dainamics-light font-medium py-2 px-4 flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            mobileOpenSubmenu === item.name && "rotate-180"
                          )} />
                        </button>
                        
                        <AnimatePresence>
                          {mobileOpenSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.link || '/'}
                                  className={cn(
                                    "block text-dainamics-light/70 hover:text-dainamics-light py-2 px-4 text-sm flex items-center justify-between",
                                    isActive(child.link) && "text-dainamics-primary"
                                  )}
                                >
                                  <span>{child.name}</span>
                                  {child.comingSoon && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-dainamics-accent/20 text-dainamics-accent">
                                      Soon
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      // Menu simple
                      <Link
                        to={item.link || '/'}
                        className={cn(
                          "text-dainamics-light/80 hover:text-dainamics-light font-medium py-2 px-4 flex items-center justify-between",
                          isActive(item.link) && "text-dainamics-primary"
                        )}
                      >
                        <span>{item.name}</span>
                        {item.comingSoon && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-dainamics-accent/20 text-dainamics-accent">
                            Soon
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="flex items-center mt-4 px-4 space-x-2">
                  <span className="text-dainamics-light/80">Langue:</span>
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
                
                <div className="flex flex-col space-y-2 mt-4 px-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-dainamics-primary text-dainamics-primary hover:bg-dainamics-primary/10 w-full"
                  >
                    <Link to="/contact">Contact</Link>
                  </Button>
                  
                  <Button 
                    asChild
                    className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow w-full"
                  >
                    <a href="#diagnostic">Diagnostic Gratuit</a>
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
