import { motion } from 'framer-motion';
import {
  Calendar,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CTAFinalSection - VERSION SIMPLIFIÉE
 * 2 options claires au lieu de 3 cartes complexes
 * Objectif: Réduire la paralysie du choix, augmenter conversions
 */
const CTAFinalSection = () => {
  const guarantees = [
    { icon: CheckCircle2, text: '100% gratuit' },
    { icon: Shield, text: 'Sans engagement' },
    { icon: Clock, text: 'Réponse sous 24h' }
  ];

  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,90,0,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Prêt à </span>
            <span className="text-dainamics-cta">Automatiser</span>
            <span className="text-white"> ?</span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Réservez 30 minutes avec notre équipe. On analyse ensemble 
            vos opportunités d'automatisation.
          </p>
        </motion.div>

        {/* 2 CTA Buttons - Hiérarchie claire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* CTA Principal - Appel */}
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-[#FF5A00] to-[#CC4800] hover:from-[#FF6A10] hover:to-[#DD5800] text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-[#FF5A00]/25 transition-all duration-300"
          >
            <a href="/contact" className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Réserver Mon Appel Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* CTA Secondaire - Diagnostic */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-6 text-lg font-medium transition-all duration-300"
          >
            <a href="#diagnostic" className="flex items-center gap-3">
              <ClipboardList className="w-5 h-5" />
              Faire le Diagnostic 2 min
              <Zap className="w-4 h-4 text-dainamics-secondary" />
            </a>
          </Button>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span 
                key={idx} 
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <Icon className="w-4 h-4 text-dainamics-success" />
                {item.text}
              </span>
            );
          })}
        </motion.div>

        {/* Separator */}
        <div className="relative h-px mb-12">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
            }}
          />
        </div>

        {/* Contact alternatif - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            Préférez-vous nous écrire directement ?
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@dainamics.ch"
              className="text-white/70 hover:text-dainamics-secondary transition-colors text-sm"
            >
              contact@dainamics.ch
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://linkedin.com/company/dainamics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-dainamics-secondary transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
