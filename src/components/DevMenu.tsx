import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bug, X, AlertTriangle, Link2Off, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * DevMenu - Composant temporaire pour accéder aux pages orphelines
 * À SUPPRIMER avant mise en production
 */
export default function DevMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const orphanPages = [
    // ORPHELINES - Existent mais pas liées dans navigation principale
    { path: '/portfolio', label: 'Portfolio', status: 'orphan', note: 'Doublon /realisations → À supprimer' },
    { path: '/solutions/quick-wins', label: 'Quick Wins', status: 'orphan', note: 'Non lié dans nav' },
    { path: '/solutions/industries', label: 'Industries', status: 'orphan', note: 'Non lié dans nav' },
    
    // SOUS-PAGES RÉALISATIONS (accessibles via /realisations)
    { path: '/realisations/inmotion-digital-signage', label: 'InMotion Digital Signage', status: 'subpage', note: 'Lié depuis /realisations' },
    { path: '/realisations/lexaia-legal-ai', label: 'LEXAIA Legal AI', status: 'subpage', note: 'Lié depuis /realisations' },
    { path: '/realisations/enki-realty-automation', label: 'ENKI REALTY', status: 'subpage', note: 'Lié depuis /realisations' },
    { path: '/realisations/datavsn-retail-analytics', label: 'DataVSN Retail', status: 'subpage', note: 'Lié depuis /realisations' },
  ];

  const pagesToCreate = [
    { path: '/faq', label: 'FAQ', note: 'Lié dans Footer → À créer' },
    { path: '/sitemap', label: 'Sitemap', note: 'Lié dans Footer → À créer (SEO)' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-orange-500/20 border-orange-500/50 text-orange-400';
      case 'orphan': return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400';
      case 'subpage': return 'bg-blue-500/20 border-blue-500/50 text-blue-400';
      default: return 'bg-white/10 border-white/20 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="w-3 h-3" />;
      case 'orphan': return <Eye className="w-3 h-3" />;
      case 'subpage': return <Link2Off className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-[9999] bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title="Menu Dev - Pages Orphelines"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bug className="w-6 h-6" />}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-20 left-4 z-[9998] w-80 max-h-[70vh] overflow-y-auto bg-[#0a0a0f]/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#0a0a0f] border-b border-white/10 p-4">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Bug className="w-5 h-5 text-purple-400" />
                Pages Orphelines
              </h3>
              <p className="text-white/50 text-xs mt-1">
                {orphanPages.length} orphelines + {pagesToCreate.length} à créer
              </p>
            </div>

            {/* Légende */}
            <div className="px-4 py-2 border-b border-white/10 flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1 text-yellow-400">
                <Eye className="w-3 h-3" /> Orpheline
              </span>
              <span className="flex items-center gap-1 text-blue-400">
                <Link2Off className="w-3 h-3" /> Sous-page
              </span>
              <span className="flex items-center gap-1 text-green-400">
                <AlertTriangle className="w-3 h-3" /> À créer
              </span>
            </div>

            {/* Pages orphelines */}
            <div className="p-2">
              <h4 className="text-white/60 text-xs uppercase tracking-wider px-2 py-2">
                Pages Orphelines ({orphanPages.length})
              </h4>
              <div className="space-y-1">
                {orphanPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={() => setIsOpen(false)}
                    className={`block p-2 rounded-lg border transition-all hover:scale-[1.02] ${getStatusColor(page.status)}`}
                  >
                    <div className="flex items-center gap-2">
                      {getStatusIcon(page.status)}
                      <span className="font-medium text-sm">{page.label}</span>
                    </div>
                    <div className="text-[10px] opacity-60 mt-1 pl-5">
                      {page.path}
                    </div>
                    <div className="text-[10px] opacity-40 mt-0.5 pl-5 italic">
                      {page.note}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pages à créer */}
            <div className="p-2 border-t border-white/10">
              <h4 className="text-green-400/60 text-xs uppercase tracking-wider px-2 py-2 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" />
                Pages à Créer ({pagesToCreate.length})
              </h4>
              <div className="space-y-1">
                {pagesToCreate.map((page) => (
                  <div
                    key={page.path}
                    className="block p-2 rounded-lg border bg-green-500/10 border-green-500/30 text-green-400/70"
                  >
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3" />
                      <span className="font-medium text-sm">{page.label}</span>
                    </div>
                    <div className="text-[10px] opacity-60 mt-1 pl-5">
                      {page.path}
                    </div>
                    <div className="text-[10px] opacity-40 mt-0.5 pl-5 italic">
                      {page.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-[#0a0a0f] border-t border-white/10 p-3">
              <p className="text-white/30 text-[10px] text-center">
                🚨 Supprimer ce composant avant production
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
