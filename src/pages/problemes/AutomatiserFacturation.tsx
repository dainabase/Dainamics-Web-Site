import { FileText, Send, Bell, BarChart3 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import { ProblemeHero } from '@/components/problemes/ProblemeHero';
import { ProblemePointsDouleur } from '@/components/problemes/ProblemePointsDouleur';
import { ProblemeSolution } from '@/components/problemes/ProblemeSolution';
import { ProblemeCasClient } from '@/components/problemes/ProblemeCasClient';
import { ProblemeProcessus } from '@/components/problemes/ProblemeProcessus';
import { ProblemeInvestissement } from '@/components/problemes/ProblemeInvestissement';
import { ProblemeCTA } from '@/components/problemes/ProblemeCTA';

const ACCENT_COLOR = '#7B2FFF';

const pointsDouleur = [
  "Vous passez des heures à créer des factures une par une",
  "Les relances clients sont oubliées ou arrivent en retard",
  "Vous faites des erreurs de montants ou de TVA",
  "Vous n'avez pas de vision claire sur les impayés",
  "Votre comptable vous réclame des documents manquants"
];

const features = [
  {
    icon: FileText,
    title: "Génération automatique",
    description: "Factures créées automatiquement depuis vos données clients et contrats"
  },
  {
    icon: Send,
    title: "Envoi programmé",
    description: "Envoi par email ou courrier à la date que vous définissez"
  },
  {
    icon: Bell,
    title: "Relances automatiques",
    description: "Scénarios de relance personnalisés selon le profil client"
  },
  {
    icon: BarChart3,
    title: "Tableau de bord",
    description: "Suivi temps réel des paiements et des impayés"
  }
];

const casClient = {
  industry: "PME Immobilière",
  country: "Suisse",
  employees: "45 employés",
  problem: "Facturation manuelle de 80 locataires chaque mois. 12 heures de travail administratif. Retards de paiement fréquents.",
  solution: "Plateforme automatisée avec génération de factures, envoi automatique et portail locataires.",
  metrics: [
    { value: "12h → 0", label: "par mois" },
    { value: "95%", label: "paiements à temps" },
    { value: "3 mois", label: "ROI atteint" }
  ],
  quote: "On facturait à 60% à temps avant. Maintenant c'est 95%. Et on a récupéré 20h/semaine pour développer le business.",
  quoteName: "Marc R.",
  quoteRole: "Directeur"
};

const AutomatiserFacturation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      <CursorEffects />
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* Section 1: Hero */}
        <ProblemeHero
          badge="Automatisation Administrative"
          badgeColor={ACCENT_COLOR}
          title="Arrêtez de perdre des heures à facturer manuellement"
          subtitle="Chaque mois, c'est la même corvée : créer les factures, vérifier les montants, envoyer, relancer... On automatise tout ça en 2-4 semaines."
          ctaText="Analyser ma facturation"
          ctaLink="/contact"
        />

        {/* Section 2: Points de douleur */}
        <ProblemePointsDouleur
          points={pointsDouleur}
          conclusionText="Si vous avez coché au moins 2 cases, on peut vous aider."
        />

        {/* Section 3: Solution */}
        <ProblemeSolution
          title="Comment on résout ce problème"
          subtitle="Une plateforme qui gère tout le cycle de facturation, de la création à l'encaissement."
          features={features}
          accentColor={ACCENT_COLOR}
        />

        {/* Section 4: Cas Client */}
        <ProblemeCasClient
          casClient={casClient}
          accentColor={ACCENT_COLOR}
        />

        {/* Section 5: Processus */}
        <ProblemeProcessus />

        {/* Section 6: Investissement */}
        <ProblemeInvestissement
          title="Quick Win Facturation"
          priceRange="8 000€ - 12 000€"
          duration="2-4 semaines"
          roi="3-4 mois"
          includes={[
            "Analyse de vos processus actuels",
            "Développement sur-mesure",
            "Intégration avec vos outils",
            "Formation de vos équipes",
            "Support 1 mois inclus"
          ]}
          economie="10-15h/mois = 6 000€ - 9 000€/an"
          accentColor={ACCENT_COLOR}
        />

        {/* Section 7: CTA Final */}
        <ProblemeCTA
          title="Prêt à récupérer vos heures perdues ?"
          subtitle="30 minutes. On analyse votre situation. On identifie le premier Quick Win. Gratuit. Sans engagement."
          accentColor={ACCENT_COLOR}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutomatiserFacturation;
