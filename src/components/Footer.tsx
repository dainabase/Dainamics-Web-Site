import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { ArrowRight, Send, Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Success toast
    toast({
      title: "Subscription successful!",
      description: "You have been added to our newsletter.",
    });
    
    // Reset the form
    setEmail('');
  };
  
  return (
    <footer className="bg-dainamics-background relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dainamics-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-dainamics-primary/20 rounded-full blur-[100px] z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Company info */}
          <div className="md:col-span-4">
            <Link to="/" className="text-dainamics-light font-bold text-2xl flex items-center space-x-2 mb-4">
              <span className="text-gradient-primary glow">Dainamics</span>
            </Link>
            
            <p className="text-dainamics-light/70 mb-6">
              We create advanced AI agents and solutions that transform businesses through intelligent automation and operational excellence.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-dainamics-light/60 hover:text-dainamics-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-dainamics-light/60 hover:text-dainamics-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-dainamics-light/60 hover:text-dainamics-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-dainamics-light/60 hover:text-dainamics-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-dainamics-light/60 hover:text-dainamics-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-dainamics-light font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/careers" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products links */}
          <div className="md:col-span-2">
            <h3 className="text-dainamics-light font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agents" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/command-center" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Command Center
                </Link>
              </li>
              <li>
                <Link to="/architectures" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  AI Architectures
                </Link>
              </li>
              <li>
                <a href="/enterprise" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources links */}
          <div className="md:col-span-2">
            <h3 className="text-dainamics-light font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/documentation" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/webinars" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="/faq" className="text-dainamics-light/70 hover:text-dainamics-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-dainamics-light font-semibold mb-4">Subscribe</h3>
            <p className="text-dainamics-light/70 mb-4 text-sm">
              Get the latest updates and news about AI advancements.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-dainamics-light/5 border-dainamics-light/10 rounded-r-none focus-visible:ring-dainamics-primary/50"
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
              <p className="text-dainamics-light/50 text-xs">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom links */}
        <div className="pt-8 border-t border-dainamics-light/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-dainamics-light/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dainamics. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-dainamics-light/70 hover:text-dainamics-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-dainamics-light/70 hover:text-dainamics-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-dainamics-light/70 hover:text-dainamics-primary text-sm transition-colors">
              Cookie Policy
            </Link>
            <a href="/sitemap" className="text-dainamics-light/70 hover:text-dainamics-primary text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
