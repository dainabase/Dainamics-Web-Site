import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RadialROIChart } from '@/components/ui/RadialROIChart';

const ProblemsWeSolve: React.FC = () => {
  return (
    <section
      id="problems-section"
      className="relative py-32 px-6 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B2FFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10E4FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#7B2FFF] bg-clip-text text-transparent">
              3 Problèmes Qui Freinent
            </span>
            <br />
            <span className="text-zinc-900 dark:text-white">
              Votre Croissance
            </span>
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Découvrez comment l'automatisation résout vos défis quotidiens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FinanceCard />
          <SalesCard />
          <SupportCard />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="#diagnostic"
            className="group relative px-8 py-4 rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#7B2FFF]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#7B2FFF] via-[#10E4FF] to-[#7B2FFF]" />

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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative md:row-span-2 h-full min-h-[600px]"
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
          <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-6xl"
              >
                💰
              </motion.div>

              <span className="px-3 py-1 text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 rounded-full border border-red-500/20">
                Critique
              </span>
            </div>

            <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight">
              20h perdues
              <br />
              <span className="text-2xl text-zinc-600 dark:text-zinc-400">
                chaque semaine
              </span>
            </h3>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              sur facturation manuelle
            </p>

            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <RadialROIChart value={400} />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-6xl font-bold text-[#0AFF9D]"
                  >
                    400%
                  </motion.span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    ROI 1ère année
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>Comptabilité automatisée</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex items-center gap-2"
                >
                  <span>Voir la solution</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-[#0AFF9D]/10 to-[#10E4FF]/10 backdrop-blur-xl border border-[#0AFF9D]/30 shadow-2xl shadow-[#0AFF9D]/20 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-[#0AFF9D] flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <span className="px-3 py-1 text-xs font-semibold bg-[#0AFF9D]/20 text-[#0AFF9D] rounded-full border border-[#0AFF9D]/40">
                Prouvée
              </span>
            </div>

            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
              Automatisation
              <br />
              <span className="text-2xl text-zinc-300">
                comptabilité
              </span>
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0AFF9D]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0AFF9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white">-90%</div>
                  <div className="text-sm text-zinc-300">temps facturation</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0AFF9D]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0AFF9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-sm text-zinc-300">erreurs en moins</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0AFF9D]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0AFF9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-white">Conforme 2026</div>
                  <div className="text-sm text-zinc-300">facturation électronique</div>
                </div>
              </div>
            </div>

            <button className="mt-auto w-full py-4 px-6 rounded-xl bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors duration-200 flex items-center justify-center gap-2 group">
              <span>Automatiser ma compta</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative h-full min-h-[290px] group"
    >
      <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-[#10E4FF]/50 transition-colors duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#10E4FF]/10 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-4xl"
          >
            📈
          </motion.div>

          <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full border border-orange-500/20">
            Urgent
          </span>
        </div>

        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
          30% leads perdus
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          suivis aléatoires
        </p>

        <div className="flex items-center justify-center my-4">
          <div className="relative w-32 h-32">
            <RadialROIChart value={300} size="small" color="#10E4FF" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#10E4FF]">300%</span>
              <span className="text-xs text-zinc-500">ROI</span>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Conversion</span>
            <span className="font-bold text-[#0AFF9D]">+30%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Productivité</span>
            <span className="font-bold text-[#0AFF9D]">+25%</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#engagement" className="text-sm text-[#10E4FF] hover:text-[#10E4FF]/80 font-medium flex items-center gap-2">
            <span>CRM intelligent</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative h-full min-h-[290px] group"
    >
      <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-[#7B2FFF]/50 transition-colors duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#7B2FFF]/10 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-4xl"
          >
            💬
          </motion.div>

          <span className="px-2 py-0.5 text-xs font-semibold bg-[#7B2FFF]/10 text-[#7B2FFF] rounded-full border border-[#7B2FFF]/20">
            24/7
          </span>
        </div>

        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
          67% clients
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          attendent réponse &lt;1h
        </p>

        <div className="flex items-center justify-center my-4">
          <div className="relative w-32 h-32">
            <RadialROIChart value={250} size="small" color="#7B2FFF" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#7B2FFF]">250%</span>
              <span className="text-xs text-zinc-500">ROI</span>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Auto-résolu</span>
            <span className="font-bold text-[#0AFF9D]">80%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Réponse</span>
            <span className="font-bold text-[#0AFF9D]">&lt;5s</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#engagement" className="text-sm text-[#7B2FFF] hover:text-[#7B2FFF]/80 font-medium flex items-center gap-2">
            <span>Chatbot IA 24/7</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemsWeSolve;
