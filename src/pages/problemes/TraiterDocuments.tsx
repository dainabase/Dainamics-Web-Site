import { Scan, Brain, AlertTriangle, Database } from 'lucide-react';
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

const ACCENT_COLOR = '#0AFF9D';

const pointsDouleur = [
  "Des piles de bons de commande à saisir chaque jour",
  "Des erreurs de saisie qui créent des problèmes en cascade",
  "Des heures perdues à chercher un document",
  "Du retard dans le traitement des factures fournisseurs",
  "Aucune visibilité temps réel sur les flux"
];

const features = [
  {
    icon: Scan,
    title: "Scan automatique",
    description: "Email, scan ou dépôt de fichier - tous les formats acceptés"
  },
  {
    icon: Brain,
    title: "Extraction IA",
    description: "OCR + IA avancée pour extraire les données avec précision"
  },
  {
    icon: AlertTriangle,
    title: "Validation intelligente",
    description: "Anomalies détectées et signalées automatiquement"
  },
  {
    icon: Database,
    title: "Intégration ERP/Compta",
    description: "Export automatique vers vos systèmes existants"
  }
];

const casClient = {
  industry: "Atelier Manufacturier",
  country: "Allemagne",
  employees: "60 employés",
  problem: "200 bons de livraison à traiter par mois. 15 heures de saisie manuelle. Erreurs fréquentes (mauvais codes, quantités).",
  solution: "Système d'extraction automatique avec OCR et validation intelligente. Export direct vers ERP.",
  metrics: [
    { value: "15h → 30min", label: "par mois" },
    { value: "-95%", label: "erreurs de saisie" },
    { value: "2 mois", label: "ROI atteint" }
  ],
  quote: "Le système traite nos bons en quelques secondes. On ne fait plus d'erreurs de saisie. Le ROI a été atteint en 2 mois.",
  quoteName: "Klaus W.",
  quoteRole: "Responsable Logistique"
};

const TraiterDocuments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main>
        <ProblemeHero
          badge="Extraction Intelligente"
          badgeColor={ACCENT_COLOR}
          title="Fini la saisie manuelle de documents"
          subtitle="Bons de commande, factures fournisseurs, contrats... Notre système scanne, extrait et classe automatiquement. Vous ne touchez plus un papier."
          ctaText="Automatiser mes documents"
          ctaLink="/contact"
        />

        <ProblemePointsDouleur
          points={pointsDouleur}
          conclusionText="Si vous avez coché au moins 2 cases, on peut vous aider."
        />

        <ProblemeSolution
          title="Comment on résout ce problème"
          subtitle="Un pipeline intelligent qui transforme vos documents papier en données structurées."
          features={features}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCasClient
          casClient={casClient}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeProcessus />

        <ProblemeInvestissement
          title="Extraction Documents IA"
          priceRange="8 000€ - 12 000€"
          duration="2-4 semaines"
          roi="2-4 mois"
          includes={[
            "Analyse de vos types de documents",
            "Entraînement IA sur vos formats",
            "Connecteurs ERP inclus",
            "Interface de validation",
            "Support 1 mois inclus"
          ]}
          economie="10-20h/mois + réduction erreurs = 8 000€ - 15 000€/an"
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCTA
          title="Prêt à éliminer la saisie manuelle ?"
          subtitle="30 minutes. On analyse vos documents types. On estime le temps gagné. Gratuit. Sans engagement."
          accentColor={ACCENT_COLOR}
        />
      </main>

      <Footer />
    </div>
  );
};

export default TraiterDocuments;
