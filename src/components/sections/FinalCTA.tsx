import React from 'react';
import { ArrowRight, Calendar, Clock, Shield } from 'lucide-react';

/**
 * FinalCTA Section
 * Dernière section avant footer : CTA conversion ultime avec message personnel
 * Position: Après TestimonialSection sur la homepage
 */
const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonne Gauche : Message + CTA */}
          <div className="order-2 md:order-1 space-y-6">
            {/* Titre */}
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Prêt à Récupérer{' '}
              <span className="text-[#0AFF9D]">15 Heures</span> Par Semaine ?
            </h2>

            {/* Message Personnel */}
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Chez DAINAMICS, nous ne vendons pas de l'IA pour le buzz. Nous automatisons
                vos tâches répétitives pour que vous puissiez vous concentrer sur ce qui
                compte vraiment :{' '}
                <span className="text-white font-semibold">
                  faire grandir votre entreprise
                </span>
                .
              </p>
              <p>
                Réservez un appel découverte de{' '}
                <span className="text-[#10E4FF] font-semibold">30 minutes gratuit</span>,
                sans engagement. Nous auditerons 2-3 processus de votre choix et vous
                proposerons des Quick Wins actionnables dès la semaine suivante.
              </p>
            </div>

            {/* Bénéfices Liste */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#10E4FF] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  30 minutes, 100% gratuit et sans engagement
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#10E4FF] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Audit de 2-3 processus de votre choix
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#0AFF9D] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Recommandations Quick Wins actionnables immédiatement
                </span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF5A00] to-[#FF5A00]/80 hover:from-[#FF5A00]/90 hover:to-[#FF5A00]/70 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(255,90,0,0.3)] hover:shadow-[0_0_50px_rgba(255,90,0,0.5)] text-base md:text-lg"
              >
                Réserver Mon Appel Découverte
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Garantie Textuelle */}
            <p className="text-sm text-gray-500 italic flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-500 flex-shrink-0" />
              Vos données restent confidentielles. Aucune obligation d'achat.
            </p>
          </div>

          {/* Colonne Droite : Photo Équipe */}
          <div className="order-1 md:order-2 relative">
            {/* Container Photo avec Effets */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(123,47,255,0.2)]">
              {/* Placeholder Photo Équipe */}
              <div className="aspect-[4/5] bg-gradient-to-br from-[#7B2FFF]/20 via-[#10E4FF]/10 to-[#0AFF9D]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#10E4FF] flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">D</span>
                  </div>
                  <div className="text-white text-xl font-semibold">Équipe DAINAMICS</div>
                  <div className="text-gray-400 text-sm">
                    Experts IA & Automatisations
                  </div>
                </div>
              </div>

              {/* Badge Overlay "Disponibles maintenant" */}
              <div className="absolute top-6 right-6">
                <div className="bg-[#0AFF9D]/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span className="text-[#050510] font-semibold text-sm">
                    Disponibles maintenant
                  </span>
                </div>
              </div>
            </div>

            {/* Glow Effect Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#7B2FFF]/20 via-transparent to-[#10E4FF]/20 blur-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
