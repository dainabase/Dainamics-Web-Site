import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Solution } from '@/data/solutions';
import * as LucideIcons from 'lucide-react';
import { useEffect } from 'react';

interface SolutionModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors = {
  ia: '#6366F1',
  automatisation: '#10E4FF',
  developpement: '#FF5A00'
};

const complexityColors = {
  starter: '#10B981',
  intermediate: '#F59E0B',
  advanced: '#EF4444'
};

const categoryLabels = {
  ia: 'Intelligence Artificielle',
  automatisation: 'Automatisation',
  developpement: 'Développement'
};

const complexityLabels = {
  starter: 'Démarrage Rapide',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé'
};

export default function SolutionModal({ solution, isOpen, onClose }: SolutionModalProps) {
  // Fermeture avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Bloquer le scroll du body
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!solution) return null;

  // Récupérer l'icône Lucide dynamiquement
  const IconComponent = (LucideIcons as any)[solution.icon] || LucideIcons.Sparkles;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Click pour fermer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="glass-morphism rounded-xl border border-dainamics-light/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-dainamics-background/95 backdrop-blur-xl border-b border-dainamics-light/10 p-6 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icône */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${categoryColors[solution.category]}20`,
                        border: `2px solid ${categoryColors[solution.category]}60`
                      }}
                    >
                      <IconComponent 
                        className="h-6 w-6" 
                        style={{ color: categoryColors[solution.category] }} 
                      />
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: `${categoryColors[solution.category]}20`,
                          color: categoryColors[solution.category]
                        }}
                      >
                        {categoryLabels[solution.category]}
                      </span>

                      {solution.outcomes.quickWin && (
                        <span className="inline-flex items-center px-2 py-1 bg-dainamics-success/20 border border-dainamics-success/30 rounded-full">
                          <Zap className="h-3 w-3 text-dainamics-success mr-1" />
                          <span className="text-dainamics-success font-semibold text-xs">Quick Win</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-dainamics-light mb-2">
                    {solution.title}
                  </h2>
                  <p className="text-dainamics-light/70 text-lg">
                    {solution.tagline}
                  </p>
                </div>

                {/* Bouton fermer */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-dainamics-light/60 hover:text-dainamics-light hover:bg-dainamics-light/10 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Scénario */}
                <div>
                  <h3 className="text-lg font-bold text-dainamics-light mb-3">Le Scénario</h3>
                  <p className="text-dainamics-light/80 leading-relaxed">
                    {solution.scenario}
                  </p>
                </div>

                {/* Ce qui est possible */}
                <div>
                  <h3 className="text-lg font-bold text-dainamics-light mb-3">Ce qui est possible</h3>
                  <div className="space-y-2">
                    {solution.whatsPossible.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-dainamics-success flex-shrink-0 mt-0.5" />
                        <span className="text-dainamics-light/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Résultats */}
                <div className="glass-morphism rounded-lg p-5 border border-dainamics-success/20">
                  <h3 className="text-lg font-bold text-dainamics-light mb-4">Résultats Mesurables</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {solution.outcomes.timeGained && (
                      <div>
                        <div className="text-dainamics-light/60 text-sm mb-1">Gain de temps</div>
                        <div className="text-dainamics-success font-bold text-xl">
                          {solution.outcomes.timeGained}
                        </div>
                      </div>
                    )}
                    {solution.outcomes.moneySaved && (
                      <div>
                        <div className="text-dainamics-light/60 text-sm mb-1">Économies</div>
                        <div className="text-dainamics-success font-bold text-xl">
                          {solution.outcomes.moneySaved}
                        </div>
                      </div>
                    )}
                    {solution.outcomes.improvement && (
                      <div>
                        <div className="text-dainamics-light/60 text-sm mb-1">Amélioration</div>
                        <div className="text-dainamics-success font-bold text-xl">
                          {solution.outcomes.improvement}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Industries & Complexité */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Industries */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-dainamics-light/60 mb-2">Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dainamics-light/5 border border-dainamics-light/10 rounded-full text-sm text-dainamics-light"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Complexité */}
                  <div>
                    <h3 className="text-sm font-semibold text-dainamics-light/60 mb-2">Complexité</h3>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: `${complexityColors[solution.complexity]}20`,
                        color: complexityColors[solution.complexity]
                      }}
                    >
                      {complexityLabels[solution.complexity]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="sticky bottom-0 bg-dainamics-background/95 backdrop-blur-xl border-t border-dainamics-light/10 p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-dainamics-cta hover:bg-dainamics-cta/90 text-white font-semibold"
                  >
                    <a href="/contact">
                      Discuter de cette solution
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 border-dainamics-light/20 text-dainamics-light hover:bg-dainamics-light/5"
                  >
                    Fermer
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
