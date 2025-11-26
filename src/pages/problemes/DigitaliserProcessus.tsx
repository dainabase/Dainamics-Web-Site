import { Search, PenTool, Code2, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ProblemeHero } from '@/components/problemes/ProblemeHero';
import { ProblemePointsDouleur } from '@/components/problemes/ProblemePointsDouleur';
import { ProblemeSolution } from '@/components/problemes/ProblemeSolution';
import { ProblemeCasClient } from '@/components/problemes/ProblemeCasClient';
import { ProblemeProcessus } from '@/components/problemes/ProblemeProcessus';
import { ProblemeInvestissement } from '@/components/problemes/ProblemeInvestissement';
import { ProblemeCTA } from '@/components/problemes/ProblemeCTA';

const ACCENT_COLOR = '#7B2FFF';

const pointsDouleur = [
  "Des fichiers Excel partout qui ne se parlent pas",
  "Des ressaisies entre systèmes (perte de temps + erreurs)",
  "Aucune visibilité globale sur l'activité",
  "Des logiciels du marché qui ne font pas ce que vous voulez",
  "Des process qui dépendent de la mémoire d'une personne"
];

const features = [
  {
    icon: Search,
    title: "Analyse processus",
    description: "On cartographie vos workflows pour identifier les gains"
  },
  {
    icon: PenTool,
    title: "Conception sur-mesure",
    description: "UX adaptée à vos utilisateurs, pas l'inverse"
  },
  {
    icon: Code2,
    title: "Développement agile",
    description: "Livraisons itératives pour voir les résultats rapidement"
  },
  {
    icon: GraduationCap,
    title: "Formation & support",
    description: "Vos équipes autonomes et accompagnées"
  }
];

const casClient = {
  industry: "Entreprise Construction",
  country: "France",
  employees: "120 employés",
  problem: "Planning chantiers sur Excel et papier. Communication difficile entre bureau et terrain. Retards et surcoûts fréquents par manque de visibilité.",
  solution: "Plateforme sur-mesure de gestion de chantiers : planning, ressources, suivi temps réel, app mobile terrain.",
  metrics: [
    { value: "-30%", label: "retards chantiers" },
    { value: "+40%", label: "productivité admin" },
    { value: "Temps réel", label: "visibilité" }
  ],
  quote: "On a enfin une vision claire de tous nos chantiers. Les équipes terrain ont l'app, tout est synchronisé. On a réduit les retards de 30%.",
  quoteName: "Philippe D.",
  quoteRole: "Directeur Travaux"
};

const DigitaliserProcessus = () => {
  return (
    <div className="min-h-screen bg-[#050510]">
      <Navigation />

      <main>
        <ProblemeHero
          badge="Développement Sur-Mesure"
          badgeColor={ACCENT_COLOR}
          title="Vos processus manuels vous freinent"
          subtitle="Excel partout. Ressaisies. Erreurs. Informations éparpillées. On crée la plateforme qui correspond exactement à votre façon de travailler."
          ctaText="Digitaliser mes processus"
          ctaLink="/contact"
        />

        <ProblemePointsDouleur
          points={pointsDouleur}
          conclusionText="Si vous avez coché au moins 2 cases, on peut vous aider."
        />

        <ProblemeSolution
          title="Comment on résout ce problème"
          subtitle="Une plateforme métier conçue autour de VOS besoins, pas l'inverse."
          features={features}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCasClient
          casClient={casClient}
          accentColor={ACCENT_COLOR}
        />

        <ProblemeProcessus />

        <ProblemeInvestissement
          title="Plateforme Sur-Mesure"
          priceRange="25 000€ - 75 000€"
          duration="2-6 mois"
          roi="6-12 mois"
          includes={[
            "Audit processus complet",
            "Design UX personnalisé",
            "Développement par sprints",
            "Tests et validation",
            "Formation et documentation",
            "Maintenance 3 mois incluse"
          ]}
          economie="Gains productivité + réduction erreurs = 30 000€ - 100 000€/an"
          accentColor={ACCENT_COLOR}
        />

        <ProblemeCTA
          title="Prêt à digitaliser vos processus ?"
          subtitle="30 minutes. On analyse vos workflows actuels. On identifie les quick wins. Gratuit. Sans engagement."
          accentColor={ACCENT_COLOR}
        />
      </main>

      <Footer />
    </div>
  );
};

export default DigitaliserProcessus;
