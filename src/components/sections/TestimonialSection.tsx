import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-dainamics-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dainamics-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-dainamics-light">
            Ils Nous Font Confiance
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative glass-morphism p-8 md:p-12 rounded-2xl border border-dainamics-border/50 shadow-2xl">

            <Quote className="absolute top-6 md:top-8 left-6 md:left-8 w-10 h-10 md:w-12 md:h-12 text-dainamics-primary opacity-20" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-dainamics-primary to-dainamics-secondary flex items-center justify-center shadow-lg">
                  <span className="text-dainamics-light font-bold text-lg md:text-xl">SM</span>
                </div>
              </div>

              <blockquote className="text-base md:text-lg lg:text-xl text-dainamics-light/80 leading-relaxed mb-8 md:mb-10 text-center">
                DAINAMICS a automatisé notre traitement de factures fournisseurs. Nous sommes passés de 12 heures hebdomadaires à moins de 2 heures, tout en réduisant les erreurs de saisie de 95%. L'équipe est ultra-réactive et les solutions sont robustes.
              </blockquote>

              <div className="flex justify-center mb-6 md:mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  className="inline-flex items-center gap-2 bg-dainamics-success/10 border border-dainamics-success/30 px-6 py-3 rounded-full"
                >
                  <svg className="w-5 h-5 text-dainamics-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-dainamics-success font-bold text-lg md:text-xl">
                    -83% temps de traitement
                  </span>
                </motion.div>
              </div>

              <div className="text-center">
                <div className="font-semibold text-dainamics-light text-lg md:text-xl mb-1">
                  Sophie Martin
                </div>
                <div className="text-dainamics-light/60 text-sm md:text-base">
                  Directrice Financière, TechCorp Suisse SA
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
