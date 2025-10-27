import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RadialROIChart } from '@/components/ui/RadialROIChart';

const ProblemsWeSolve: React.FC = () => {
  return (
    <section
      id="problems-section"
      className="relative py-20 md:py-28 px-4 md:px-8 bg-dainamics-background overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-dainamics-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dainamics-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">
              3 Problèmes Qui Freinent
            </span>
            <br />
            <span className="text-dainamics-light">
              Votre Croissance
            </span>
          </h2>

          <p className="text-lg md:text-xl text-dainamics-light/80 max-w-2xl mx-auto">
            Découvrez comment l'automatisation résout vos défis quotidiens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <FinanceCard />
          <SalesCard />
          <SupportCard />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="#diagnostic"
            className="group relative px-8 py-3 rounded-full font-semibold text-base text-dainamics-light overflow-hidden transition-all duration-300 hover:-translate-y-0.5 btn-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dainamics-primary to-dainamics-cta" />

            <span className="relative flex items-center gap-3">
              <span>Diagnostiquer Mes Freins</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FinanceCard: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="relative md:row-span-2 h-full min-h-[500px] md:min-h-[600px]"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 cursor-pointer group"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setFlipped(!flipped);
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
        aria-label="Retourner la carte pour voir la solution"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full p-6 md:p-8 rounded-2xl bg-dainamics-card border border-dainamics-border shadow-2xl flex flex-col group-hover:border-dainamics-primary/50 transition-colors duration-300">
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-5xl md:text-6xl"
              >
                💰
              </motion.div>

              <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-dainamics-cta/10 text-dainamics-cta rounded-full border border-dainamics-cta/20">
                Critique
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-dainamics-light mb-3 md:mb-4 leading-tight">
              20h perdues
              <br />
              <span className="text-xl md:text-2xl text-dainamics-light/70">
                chaque semaine
              </span>
            </h3>

            <p className="text-base md:text-lg text-dainamics-light/60 mb-6 md:mb-8">
              sur facturation manuelle
            </p>

            <div className="flex-1 flex items-center justify-center my-4 md:my-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <RadialROIChart value={400} />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-5xl md:text-6xl font-bold text-dainamics-success"
                  >
                    400%
                  </motion.span>
                  <span className="text-xs md:text-sm text-dainamics-light/60">
                    ROI 1ère année
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 md:pt-6 border-t border-dainamics-border/50">
              <div className="flex items-center justify-between text-xs md:text-sm text-dainamics-light/50">
                <span>Comptabilité automatisée</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex items-center gap-2"
                >
                  <span>Voir la solution</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full p-6 md:p-8 rounded-2xl glass-morphism border border-dainamics-success/30 shadow-2xl flex flex-col">
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-dainamics-success flex items-center justify-center"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-dainamics-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <span className="px-2 md:px-3 py-0.5 md:py-1 text-xs font-semibold bg-dainamics-success/20 text-dainamics-success rounded-full border border-dainamics-success/40">
                Prouvée
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-dainamics-light mb-3 md:mb-4 leading-tight">
              Automatisation
              <br />
              <span className="text-xl md:text-2xl text-dainamics-light/80">
                comptabilité
              </span>
            </h3>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-dainamics-success/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-dainamics-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-2xl md:text-3xl font-bold text-dainamics-light">-90%</div>
                  <div className="text-xs md:text-sm text-dainamics-light/70">temps facturation</div>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-dainamics-success/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-dainamics-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-2xl md:text-3xl font-bold text-dainamics-light">95%</div>
                  <div className="text-xs md:text-sm text-dainamics-light/70">erreurs en moins</div>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-dainamics-success/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-dainamics-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-base md:text-lg font-bold text-dainamics-light">Conforme 2026</div>
                  <div className="text-xs md:text-sm text-dainamics-light/70">facturation électronique</div>
                </div>
              </div>
            </div>

            <button className="mt-auto w-full py-3 md:py-4 px-4 md:px-6 rounded-xl bg-dainamics-light text-dainamics-background font-semibold hover:bg-dainamics-light/90 transition-all duration-200 flex items-center justify-center gap-2 group">
              <span>Automatiser ma compta</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SalesCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="relative h-full min-h-[240px] md:min-h-[290px] group"
    >
      <div className="h-full p-4 md:p-6 rounded-2xl bg-dainamics-card border border-dainamics-border hover:border-dainamics-secondary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-3xl md:text-4xl"
          >
            📈
          </motion.div>

          <span className="px-2 py-0.5 text-xs font-semibold bg-dainamics-cta/10 text-dainamics-cta rounded-full border border-dainamics-cta/20">
            Urgent
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-dainamics-light mb-2 leading-tight">
          30% leads perdus
        </h3>
        <p className="text-sm text-dainamics-light/60 mb-4">
          suivis aléatoires
        </p>

        <div className="flex items-center justify-center my-3 md:my-4">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <RadialROIChart value={300} size="small" color="#10E4FF" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-dainamics-secondary">300%</span>
              <span className="text-xs text-dainamics-light/50">ROI</span>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-dainamics-light/60">Conversion</span>
            <span className="font-bold text-dainamics-success">+30%</span>
          </div>
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-dainamics-light/60">Productivité</span>
            <span className="font-bold text-dainamics-success">+25%</span>
          </div>
        </div>

        <div className="mt-4 pt-3 md:pt-4 border-t border-dainamics-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#engagement" className="text-xs md:text-sm text-dainamics-secondary hover:text-dainamics-secondary/80 font-medium flex items-center gap-2">
            <span>CRM intelligent</span>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const SupportCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="relative h-full min-h-[240px] md:min-h-[290px] group"
    >
      <div className="h-full p-4 md:p-6 rounded-2xl bg-dainamics-card border border-dainamics-border hover:border-dainamics-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-3xl md:text-4xl"
          >
            💬
          </motion.div>

          <span className="px-2 py-0.5 text-xs font-semibold bg-dainamics-primary/10 text-dainamics-primary rounded-full border border-dainamics-primary/20">
            24/7
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-dainamics-light mb-2 leading-tight">
          67% clients
        </h3>
        <p className="text-sm text-dainamics-light/60 mb-4">
          attendent réponse &lt;1h
        </p>

        <div className="flex items-center justify-center my-3 md:my-4">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <RadialROIChart value={250} size="small" color="#7B2FFF" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-dainamics-primary">250%</span>
              <span className="text-xs text-dainamics-light/50">ROI</span>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-dainamics-light/60">Auto-résolu</span>
            <span className="font-bold text-dainamics-success">80%</span>
          </div>
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-dainamics-light/60">Réponse</span>
            <span className="font-bold text-dainamics-success">&lt;5s</span>
          </div>
        </div>

        <div className="mt-4 pt-3 md:pt-4 border-t border-dainamics-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#engagement" className="text-xs md:text-sm text-dainamics-primary hover:text-dainamics-primary/80 font-medium flex items-center gap-2">
            <span>Chatbot IA 24/7</span>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemsWeSolve;
