import React from 'react';
import { Quote } from 'lucide-react';

/**
 * TestimonialSection
 * Section témoignage unique, centrée, impactante avec métrique chiffrée
 * Position: Après SwissDifferentiators sur la homepage
 */
const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ils Nous Font Confiance
          </h2>
        </div>

        {/* Card Témoignage */}
        <div className="relative bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-transparent border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_0_60px_rgba(123,47,255,0.15)] hover:shadow-[0_0_80px_rgba(123,47,255,0.2)] transition-all duration-500">
          {/* Quote Icon Decorative */}
          <Quote className="absolute top-8 left-8 w-12 h-12 text-[#7B2FFF] opacity-20" />

          <div className="relative z-10">
            {/* Avatar/Initiales */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#10E4FF] flex items-center justify-center">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
            </div>

            {/* Citation */}
            <blockquote className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center">
              DAINAMICS a automatisé notre traitement de factures fournisseurs. Nous sommes
              passés de 12 heures hebdomadaires à moins de 2 heures, tout en réduisant les
              erreurs de saisie de 95%. L'équipe est ultra-réactive et les solutions sont
              robustes.
            </blockquote>

            {/* Métrique Highlight */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#0AFF9D]/10 border border-[#0AFF9D]/30 px-6 py-3 rounded-full">
                <span className="text-[#0AFF9D] font-bold text-xl">
                  -83% temps de traitement
                </span>
              </div>
            </div>

            {/* Auteur */}
            <div className="text-center">
              <div className="font-semibold text-white text-lg">Sophie Martin</div>
              <div className="text-gray-400 text-sm">
                Directrice Financière, TechCorp Suisse SA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
