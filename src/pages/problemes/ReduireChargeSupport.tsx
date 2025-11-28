import { MessageSquare, Globe, GitBranch, TrendingUp } from 'lucide-react';
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

const ACCENT_COLOR = '#10E4FF';

const pointsDouleur = [
  "Votre équipe répond aux mêmes questions 50 fois par jour",
  "Les délais de réponse s'allongent, les clients s'impatientent",
  "Vous embauchez mais ça ne suffit jamais",
  "Le turnover support est élevé (travail répétitif)",
  "Vous n'êtes pas disponible 24/7 (fuseaux horaires)"
];

const features = [
  {
    icon: MessageSquare,
    title: "Assistant IA 24/7",
    description: "Répond instantanément aux questions fréquentes, même la nuit et le week-end"
  },
  {
    icon: Globe,
    title: "Multilingue FR/DE/EN/IT",
    description: "Communique dans la langue du client automatiquement"
  },
  {
    icon: GitBranch,
    title: "Escalade intelligente",
    description: "Transfère les cas complexes à votre équipe avec tout le contexte"
  },
  {
    icon: TrendingUp,
    title: "Apprentissage continu",
    description: "S'améliore avec chaque interaction pour des réponses toujours plus pertinentes"
  }
];

const casClient = {
  industry: "Services Juridiques",
  country: "Suisse",
  employees: "25 employés",
  problem: "150 demandes clients par semaine. Chaque demande = 15-30 min à traiter. Équipe support de 3 personnes saturée.",
  solution: "Assistant IA multilingue (FR/DE/IT) connecté à une base de connaissance de 500+ documents juridiques.",
  metrics: [
    { value: "-70%", label: "charge support" },
    { value: "+40%", label: "satisfaction client" },
    { value: "35K€/an", label: "économisés" }
  ],
  quote: "L'assistant traite 80% de nos demandes. Notre équipe se concentre enfin sur les cas complexes. Investissement remboursé en 4 mois.",
  quoteName: "Sophie M.",
  quoteRole: "Directrice Opérations"
};

const ReduireChargeSupport = () => {
  return (
    <div className="min-h-screen bg-adaptive">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main>
        <ProblemeHero
          badge="Intelligence Artificielle"
          badgeColor={ACCENT_COLOR}
          title="Votre support croule sous les mêmes questions ?"
          subtitle="50 emails par jour. Toujours les mêmes réponses. Un assistant IA peut traiter 80% de ces demandes pendant que votre équipe gère les cas complexes."
          ctaText="Voir comment réduire ma charge"
          ctaLink="/contact"
        />

        <ProblemePointsDouleur
          points={pointsDouleur}
          conclusionText="Si vous avez coché au moins 2 cases, on peut vous aider."
        />

        <ProblemeSolution
          title="Comment on résout ce problème"
          subtitle="Un assistant IA qui comprend vos clients et répond avec précision, 24h/24."
          features={features}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCasClient
          casClient={casClient}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeProcessus />

        <ProblemeInvestissement
          title="Assistant IA Support"
          priceRange="10 000€ - 15 000€"
          duration="2-4 semaines"
          roi="4-6 mois"
          includes={[
            "Analyse de vos demandes fréquentes",
            "Entraînement sur vos données",
            "Intégration site web / email",
            "Interface de supervision",
            "Support et amélioration continue"
          ]}
          economie="Équivalent 0.5-1 ETP = 25 000€ - 50 000€/an"
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCTA
          title="Prêt à libérer votre équipe support ?"
          subtitle="30 minutes. On analyse vos demandes les plus fréquentes. On estime le potentiel d'automatisation. Gratuit."
          accentColor={ACCENT_COLOR}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ReduireChargeSupport;
