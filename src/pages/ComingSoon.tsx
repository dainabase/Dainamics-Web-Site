import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';
import { Button } from '@/components/ui/button';
import { Construction, Home, ArrowRight } from 'lucide-react';

interface ComingSoonProps {
  pageName: string;
  description?: string;
}

export default function ComingSoon({ pageName, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90 flex flex-col">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 mx-auto bg-dainamics-primary/10 rounded-full flex items-center justify-center">
              <Construction className="w-12 h-12 text-dainamics-primary" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-dainamics-light mb-4"
          >
            Page en Construction
          </motion.h1>

          {/* Page Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <span className="text-2xl md:text-3xl text-gradient-primary font-semibold">
              {pageName}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-dainamics-light/70 mb-8"
          >
            {description || 
              "Cette page est actuellement en développement. Nous travaillons activement pour vous offrir une expérience exceptionnelle."
            }
          </motion.p>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm text-dainamics-light/60">En cours de développement</span>
            </div>
            <div className="h-2 w-full max-w-md mx-auto bg-dainamics-primary/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-dainamics-primary to-dainamics-accent"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-dainamics-accent text-dainamics-accent hover:bg-dainamics-accent/10"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-dainamics-primary/20"
          >
            <p className="text-sm text-dainamics-light/50">
              En attendant, découvrez nos autres pages ou{' '}
              <Link to="/contact" className="text-dainamics-accent hover:underline">
                contactez-nous
              </Link>
              {' '}pour en savoir plus.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
