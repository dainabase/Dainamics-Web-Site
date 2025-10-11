// src/data/portfolio.ts

import { 
  Brain, 
  Building, 
  TrendingUp, 
  Award,
  Code,
  Zap,
  Users,
  FileText,
  BarChart,
  Target,
  Clock,
  DollarSign,
  CheckCircle,
  Star
} from 'lucide-react';

/**
 * Interface stricte pour un projet portfolio
 * Tous les champs sont obligatoires sauf ceux marqués optional (?)
 */
export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'ia' | 'automatisation' | 'developpement';
  complexity: 'starter' | 'intermediate' | 'advanced';
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric1: {
      label: string;
      value: string;
      icon: string; // Nom icône Lucide
    };
    metric2: {
      label: string;
      value: string;
      icon: string;
    };
    metric3?: {
      label: string;
      value: string;
      icon: string;
    };
  };
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  image?: string;
  link?: string;
  featured: boolean; // Afficher en premier sur page Portfolio
  year: number;
  duration: string; // "3 mois", "6 semaines", etc.
  team: string[]; // Compétences équipe mobilisée
}

/**
 * Mapping des catégories vers couleurs Design System
 */
export const categoryColors = {
  ia: '#6366F1',           // Primary Indigo
  automatisation: '#10E4FF', // Accent Cyan
  developpement: '#FF5A00'   // CTA Orange
} as const;

/**
 * Mapping des complexités vers couleurs badges
 */
export const complexityColors = {
  starter: '#10B981',      // Success Green
  intermediate: '#F59E0B', // Warning Yellow
  advanced: '#EF4444'      // Error Red
} as const;

/**
 * Database complète des projets portfolio
 * Minimum 5 projets requis
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'lexaia-legal-ai',
    title: 'LEXAIA - Assistant Juridique IA',
    client: 'Cabinet Juridique Confidentiel',
    industry: 'Juridique',
    category: 'ia',
    complexity: 'advanced',
    description: 'Agent IA spécialisé en droit suisse pour automatiser l\'analyse de contrats, la veille juridique et la génération de documents légaux conformes au droit suisse.',
    challenge: 'Le cabinet recevait 200+ contrats/mois à analyser manuellement. Temps moyen d\'analyse: 4h/contrat. Coût: CHF 800/analyse. Risque d\'erreurs humaines sur clauses critiques. Difficulté à suivre la veille législative suisse en temps réel.',
    solution: 'Développement d\'un agent IA RAG (Retrieval-Augmented Generation) entraîné sur le droit suisse (CO, nLPD, SwissDec). Intégration OCR pour numérisation contrats papier. Pipeline automatisé: extraction → analyse risques → génération recommandations → génération documents. Dashboard temps réel avec alertes conformité.',
    results: {
      metric1: {
        label: 'Réduction temps analyse',
        value: '-87%',
        icon: 'Clock'
      },
      metric2: {
        label: 'Économies annuelles',
        value: 'CHF 180\'000',
        icon: 'TrendingUp'
      },
      metric3: {
        label: 'Contrats traités/mois',
        value: '850+',
        icon: 'FileText'
      }
    },
    technologies: [
      'GPT-4',
      'LangChain',
      'Pinecone Vector DB',
      'OCR Tesseract',
      'Python FastAPI',
      'React + TypeScript',
      'PostgreSQL',
      'Docker'
    ],
    testimonial: {
      quote: 'LEXAIA a transformé notre pratique juridique. Nous analysons désormais 4x plus de contrats avec une précision accrue. Le ROI a été atteint en 3 mois.',
      author: 'Me. Sarah Dubois',
      role: 'Associée Senior',
      company: 'Cabinet Juridique'
    },
    featured: true,
    year: 2024,
    duration: '6 mois',
    team: ['IA/ML Engineer', 'Backend Developer', 'Legal Expert', 'UX Designer']
  },
  {
    id: 'enki-realty-automation',
    title: 'ENKI-REALTY - Plateforme Immobilier IA',
    client: 'Agence Immobilière Romande',
    industry: 'Immobilier',
    category: 'ia',
    complexity: 'advanced',
    description: 'Plateforme complète d\'automatisation immobilière avec IA: estimation prix, matching acheteurs-biens, génération visites virtuelles, et chatbot multilingue 24/7 pour leads qualification.',
    challenge: 'L\'agence perdait 60% des leads par manque de réactivité (réponse moyenne: 18h). Estimation prix manuelle prenait 2h/bien. Visites physiques coûteuses (CHF 200/visite). Difficile de gérer leads DE/FR/IT/EN simultanément.',
    solution: 'Plateforme IA full-stack: 1) Modèle ML pour estimation prix (analyse 50+ variables: localisation, état, marché, etc.). 2) Algorithme matching intelligent basé sur préférences/budget/lifestyle. 3) Génération visites virtuelles 3D automatiques. 4) Chatbot Claude multilingue pour qualification leads 24/7. 5) CRM intégré avec scoring leads automatique.',
    results: {
      metric1: {
        label: 'Conversion leads',
        value: '+156%',
        icon: 'TrendingUp'
      },
      metric2: {
        label: 'Temps réponse moyen',
        value: '< 2 min',
        icon: 'Zap'
      },
      metric3: {
        label: 'Visites physiques réduites',
        value: '-68%',
        icon: 'Building'
      }
    },
    technologies: [
      'Claude AI API',
      'Scikit-learn ML',
      'Next.js 14',
      'Supabase',
      'Three.js (3D)',
      'Mapbox API',
      'SendGrid',
      'Stripe'
    ],
    testimonial: {
      quote: 'ENKI-REALTY nous a fait passer d\'une agence traditionnelle à un leader tech de l\'immobilier romand. Nos clients adorent l\'expérience digitale.',
      author: 'Pierre Fontaine',
      role: 'CEO',
      company: 'Agence Immobilière'
    },
    featured: true,
    year: 2024,
    duration: '8 mois',
    team: ['IA Engineer', 'Full-Stack Dev', 'ML Engineer', '3D Artist', 'Product Manager']
  },
  {
    id: 'swiss-fiduciaire-automation',
    title: 'Automatisation Comptable SwissDec',
    client: 'Fiduciaire Genevoise PME',
    industry: 'Comptabilité',
    category: 'automatisation',
    complexity: 'intermediate',
    description: 'Automatisation complète du workflow comptable: OCR factures, extraction données, validation SwissDec, génération déclarations TVA, et reporting temps réel pour 150+ clients PME.',
    challenge: 'La fiduciaire gérait manuellement 3000+ factures/mois pour 150 PME. Saisie manuelle: 8 min/facture. Risques erreurs TVA (conformité suisse stricte). Reporting clients retardé de 3-4 semaines. Coût opérationnel: CHF 45/h pour tâches répétitives.',
    solution: 'Pipeline automatisé end-to-end: 1) OCR intelligent (Tesseract + GPT-4V) pour extraction données factures. 2) Validation automatique conformité SwissDec/nLPD. 3) Génération déclarations TVA automatiques. 4) Dashboard temps réel par client avec KPIs financiers. 5) Alertes proactives (factures en retard, anomalies, seuils TVA). 6) API export vers logiciels comptables suisses.',
    results: {
      metric1: {
        label: 'Temps traitement facture',
        value: '-92%',
        icon: 'Clock'
      },
      metric2: {
        label: 'Économies annuelles',
        value: 'CHF 120\'000',
        icon: 'TrendingUp'
      },
      metric3: {
        label: 'Erreurs TVA',
        value: '-98%',
        icon: 'CheckCircle'
      }
    },
    technologies: [
      'Tesseract OCR',
      'GPT-4 Vision',
      'Python Django',
      'PostgreSQL',
      'Redis Queue',
      'React Dashboard',
      'SwissDec API',
      'Bexio Integration'
    ],
    testimonial: {
      quote: 'Nous avons pu doubler notre portefeuille clients sans embaucher. L\'automatisation nous a libéré 40h/semaine pour du conseil à valeur ajoutée.',
      author: 'Marc Berset',
      role: 'Expert-Comptable',
      company: 'Fiduciaire Genevoise'
    },
    featured: false,
    year: 2024,
    duration: '4 mois',
    team: ['Backend Developer', 'Data Engineer', 'Accounting Expert', 'QA Engineer']
  },
  {
    id: 'manufacturing-iot-dashboard',
    title: 'Dashboard IoT Temps Réel Industrie 4.0',
    client: 'Manufacture Horlogère Suisse',
    industry: 'Manufacturing',
    category: 'developpement',
    complexity: 'advanced',
    description: 'Plateforme IoT complète pour monitoring temps réel de 45 machines CNC, prédiction pannes avec ML, optimisation production, et reporting OEE (Overall Equipment Effectiveness) automatique.',
    challenge: 'La manufacture subissait 12h+ de downtime/mois (coût: CHF 15\'000/h). Pannes imprévisibles causaient retards production. Données machines non exploitées. Reporting OEE manuel prenait 2 jours/mois. Impossible d\'optimiser cadence production sans visibilité temps réel.',
    solution: 'Plateforme IoT Industry 4.0: 1) Capteurs IoT sur 45 machines (température, vibrations, consommation énergie, cycles production). 2) Data pipeline temps réel (MQTT → InfluxDB → Analytics). 3) ML prédiction pannes (Random Forest sur 12 mois données historiques). 4) Dashboard React temps réel avec alertes proactives. 5) Optimisation automatique cadence production basée sur données. 6) Reporting OEE automatisé.',
    results: {
      metric1: {
        label: 'Downtime réduit',
        value: '-78%',
        icon: 'TrendingUp'
      },
      metric2: {
        label: 'Économies maintenance',
        value: 'CHF 280\'000/an',
        icon: 'DollarSign'
      },
      metric3: {
        label: 'Augmentation OEE',
        value: '+23%',
        icon: 'BarChart'
      }
    },
    technologies: [
      'MQTT Protocol',
      'InfluxDB Time-Series',
      'Python Scikit-learn',
      'React + D3.js',
      'Node.js WebSockets',
      'Docker Swarm',
      'Grafana',
      'Redis Pub/Sub'
    ],
    testimonial: {
      quote: 'Le dashboard IoT nous a donné une visibilité complète sur notre production. Nous prédisons maintenant les pannes 3 jours à l\'avance. Game changer.',
      author: 'François Reichenbach',
      role: 'Directeur Production',
      company: 'Manufacture Horlogère'
    },
    featured: false,
    year: 2023,
    duration: '7 mois',
    team: ['IoT Engineer', 'ML Engineer', 'Full-Stack Dev', 'DevOps', 'Industrial Engineer']
  },
  {
    id: 'ecommerce-chatbot-multilingual',
    title: 'Chatbot E-commerce Multilingue IA',
    client: 'E-commerce Montres Luxe Suisse',
    industry: 'E-commerce',
    category: 'ia',
    complexity: 'intermediate',
    description: 'Chatbot IA multilingue (FR/DE/IT/EN) pour support client 24/7, recommandations produits personnalisées, et gestion commandes. Intégré à Shopify avec analytics conversationnels.',
    challenge: 'Le site e-commerce recevait 500+ questions/jour. Support client limité à 9h-18h (lundi-vendredi). Taux abandon panier: 68%. Clients internationaux frustrés par barrière linguistique. Coût support: CHF 35/h avec 3 agents.',
    solution: 'Chatbot Claude AI multilingue: 1) Entraîné sur catalogue 200+ montres (specs techniques, stocks, prix). 2) Détection automatique langue client. 3) Recommandations personnalisées basées sur budget/style/occasion. 4) Gestion complète commandes (tracking, retours, SAV). 5) Escalade automatique vers humain si nécessaire. 6) Analytics conversationnels (sentiment, intents, conversion). 7) Intégration Shopify + CRM.',
    results: {
      metric1: {
        label: 'Taux abandon panier',
        value: '-42%',
        icon: 'TrendingUp'
      },
      metric2: {
        label: 'Temps réponse moyen',
        value: '< 5 sec',
        icon: 'Zap'
      },
      metric3: {
        label: 'Satisfaction client',
        value: '4.7/5',
        icon: 'Star'
      }
    },
    technologies: [
      'Claude AI API',
      'LangChain',
      'Shopify API',
      'React Chat UI',
      'Node.js Express',
      'MongoDB',
      'Redis Cache',
      'Google Analytics'
    ],
    testimonial: {
      quote: 'Notre chatbot répond mieux que nos agents humains. Il connaît tout le catalogue et ne dort jamais. Les ventes de nuit ont explosé.',
      author: 'Isabelle Mercier',
      role: 'E-commerce Manager',
      company: 'Montres Luxe SA'
    },
    featured: false,
    year: 2024,
    duration: '3 mois',
    team: ['IA Engineer', 'Frontend Dev', 'Backend Dev', 'UX Designer']
  }
];

/**
 * Helper: Filtrer projets par catégorie
 */
export const getProjectsByCategory = (category: PortfolioProject['category']) => {
  return portfolioProjects.filter(p => p.category === category);
};

/**
 * Helper: Filtrer projets par industrie
 */
export const getProjectsByIndustry = (industry: string) => {
  return portfolioProjects.filter(p => 
    p.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

/**
 * Helper: Obtenir projets featured uniquement
 */
export const getFeaturedProjects = () => {
  return portfolioProjects.filter(p => p.featured);
};

/**
 * Helper: Obtenir projets par complexité
 */
export const getProjectsByComplexity = (complexity: PortfolioProject['complexity']) => {
  return portfolioProjects.filter(p => p.complexity === complexity);
};

/**
 * Helper: Obtenir projets récents (dernière année)
 */
export const getRecentProjects = () => {
  const currentYear = new Date().getFullYear();
  return portfolioProjects.filter(p => p.year >= currentYear - 1);
};

/**
 * Helper: Chercher projets par technologies
 */
export const getProjectsByTechnology = (tech: string) => {
  return portfolioProjects.filter(p =>
    p.technologies.some(t => 
      t.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

/**
 * Helper: Statistiques portfolio
 */
export const getPortfolioStats = () => {
  return {
    total: portfolioProjects.length,
    featured: getFeaturedProjects().length,
    byCategory: {
      ia: getProjectsByCategory('ia').length,
      automatisation: getProjectsByCategory('automatisation').length,
      developpement: getProjectsByCategory('developpement').length
    },
    byComplexity: {
      starter: getProjectsByComplexity('starter').length,
      intermediate: getProjectsByComplexity('intermediate').length,
      advanced: getProjectsByComplexity('advanced').length
    },
    industries: [...new Set(portfolioProjects.map(p => p.industry))],
    technologies: [...new Set(portfolioProjects.flatMap(p => p.technologies))].sort()
  };
};