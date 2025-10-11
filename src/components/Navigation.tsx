
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Superhuman AI Agents', link: '/agents' },
  { name: 'Command Center', link: '/command-center' },
  { name: 'AI Architectures', link: '/architectures' },
  { name: 'About', link: '/about' },
  { name: 'Blog', link: '/blog' },
];

const languages = ['EN', 'FR', 'DE', 'ES'];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <Link
                key={item.name}
                to={item.link}
                className="text-dainamics-light/80 hover:text-dainamics-light font-medium transition-colors duration-200 relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-dainamics-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </Link>
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
                          "block w-full text-left px-4 py-2 hover:bg-dainamics-primary/10",
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
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            <Button 
              asChild
              className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow"
            >
              <a href="#diagnostic">Unlock AI Power</a>
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
            className="lg:hidden bg-dainamics-background/95 backdrop-blur-lg"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-dainamics-light/80 hover:text-dainamics-light font-medium py-2 px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex items-center mt-4 px-4 space-x-2">
                  <span className="text-dainamics-light/80">Language:</span>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCurrentLanguage(lang)}
                        className={cn(
                          "px-2 py-1 rounded",
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
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  
                  <Button 
                    asChild
                    className="bg-dainamics-cta hover:bg-dainamics-cta/90 text-white btn-glow w-full"
                  >
                    <a href="#diagnostic" onClick={() => setMobileMenuOpen(false)}>Unlock AI Power</a>
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
