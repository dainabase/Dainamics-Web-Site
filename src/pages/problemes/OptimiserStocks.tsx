import { LineChart, BrainCircuit, Bell, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ProblemeHero } from '@/components/problemes/ProblemeHero';
import { ProblemePointsDouleur } from '@/components/problemes/ProblemePointsDouleur';
import { ProblemeSolution } from '@/components/problemes/ProblemeSolution';
import { ProblemeCasClient } from '@/components/problemes/ProblemeCasClient';
import { ProblemeProcessus } from '@/components/problemes/ProblemeProcessus';
import { ProblemeInvestissement } from '@/components/problemes/ProblemeInvestissement';
import { ProblemeCTA } from '@/components/problemes/ProblemeCTA';

const ACCENT_COLOR = '#FF5A00';

const pointsDouleur = [
  "Du capital immobilisé dans du stock qui ne bouge pas",
  "Des ruptures qui font perdre des ventes",
  "Des commandes basées sur l'intuition, pas les données",
  "Aucune visibilité sur la demande future",
  "Des promotions de déstockage qui grèvent les marges"
];

const features = [
  {
    icon: LineChart,
    title: "Analyse historique",
    description: "Ventes, saisonnalité, tendances - tout est analysé automatiquement"
  },
  {
    icon: BrainCircuit,
    title: "Prédiction demande",
    description: "Machine Learning entraîné sur vos données pour anticiper"
  },
  {
    icon: Bell,
    title: "Alertes stock",
    description: "Notification immédiate en cas de rupture ou surstock imminent"
  },
  {
    icon: ShoppingCart,
    title: "Suggestions commandes",
    description: "Quantités optimales calculées pour chaque référence"
  }
];

const casClient = {
  industry: "PME Production",
  country: "Suisse",
  employees: "80 employés",
  problem: "40K€/an perdus en stock dormant et ruptures. Commandes basées sur l'expérience, pas les données. Promotions forcées pour écouler les surplus.",
  solution: "Système de prédiction de demande basé sur l'historique de ventes, la saisonnalité et les tendances marché.",
  metrics: [
    { value: "-25%", label: "stock dormant" },
    { value: "-60%", label: "ruptures" },
    { value: "30K€/an", label: "économisés" }
  ],
  quote: "On commandait au feeling. Maintenant le système nous dit exactement quoi commander et quand. Les ruptures ont quasiment disparu.",
  quoteName: "Jean-Pierre L.",
  quoteRole: "Directeur Supply Chain"
};

const OptimiserStocks = () => {
  return (
    <div className="min-h-screen bg-[#050510]">
      <Navigation />

      <main>
        <ProblemeHero
          badge="IA Prédictive"
          badgeColor={ACCENT_COLOR}
          title="Arrêtez de perdre de l'argent sur vos stocks"
          subtitle="Trop de stock qui dort. Des ruptures qui font perdre des ventes. L'IA analyse votre historique et prédit la demande pour optimiser vos commandes."
          ctaText="Optimiser mes stocks"
          ctaLink="/contact"
        />

        <ProblemePointsDouleur
          points={pointsDouleur}
          conclusionText="Si vous avez coché au moins 2 cases, on peut vous aider."
        />

        <ProblemeSolution
          title="Comment on résout ce problème"
          subtitle="Un cerveau IA qui anticipe vos besoins et optimise chaque commande."
          features={features}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCasClient
          casClient={casClient}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeProcessus />

        <ProblemeInvestissement
          title="Optimisation Stocks IA"
          priceRange="15 000€ - 25 000€"
          duration="4-8 semaines"
          roi="6-12 mois"
          includes={[
            "Analyse de vos données historiques",
            "Modèle ML personnalisé",
            "Tableau de bord prédictif",
            "Intégration ERP/WMS",
            "Formation équipe supply chain"
          ]}
          economie="15-30% réduction stock dormant = 20 000€ - 50 000€/an"
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCTA
          title="Prêt à reprendre le contrôle de vos stocks ?"
          subtitle="30 minutes. On analyse votre situation stock. On estime le potentiel d'économies. Gratuit."
          accentColor={ACCENT_COLOR}
        />
      </main>

      <Footer />
    </div>
  );
};

export default OptimiserStocks;
