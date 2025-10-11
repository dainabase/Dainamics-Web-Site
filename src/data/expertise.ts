// src/data/expertise.ts

/**
 * EXPERTISE DAINAMICS - Les 3 Piliers
 * 
 * Définit les domaines d'expertise de DAINAMICS :
 * - Intelligence Artificielle (IA)
 * - Automatisation (Workflow & Process)
 * - Développement (Web, Mobile, Cloud)
 * 
 * Design System: DESIGN-SYSTEM-MANDATORY.md
 * Couleurs: CATEGORY_COLORS obligatoires
 * Icônes: Lucide React v0.263.1 uniquement (vérifiées sur https://lucide.dev)
 */

import type { LucideIcon } from 'lucide-react';

// ============================================================================
// INTERFACES TYPESCRIPT STRICTES
// ============================================================================

/**
 * Technologie utilisée dans un pilier d'expertise
 */
export interface Technology {
  name: string;
  category: 'framework' | 'library' | 'platform' | 'tool' | 'language';
  icon: string; // Nom icône Lucide (sera mappé via iconMapper)
  description: string;
  proficiency: 'expert' | 'advanced' | 'intermediate'; // Niveau de maîtrise DAINAMICS
  usedIn: string[]; // IDs projets portfolio où utilisé
}

/**
 * Capacité / Service offert dans un pilier
 */
export interface Capability {
  id: string;
  name: string;
  description: string;
  icon: string; // Nom icône Lucide
  deliverables: string[]; // Ce qui est livré
  timeline: string; // Durée typique
  complexity: 'starter' | 'intermediate' | 'advanced';
}

/**
 * Cas d'usage concret pour un pilier
 */
export interface UseCase {
  id: string;
  title: string;
  description: string;
  industry: string; // Secteur d'activité
  problem: string; // Problème résolu
  roi: {
    timeframe: string; // Ex: "6 mois"
    savings: string; // Ex: "CHF 50'000/an"
    efficiency: string; // Ex: "+65% productivité"
  };
  relatedProjectId?: string; // ID projet portfolio si applicable
}

/**
 * Pilier d'expertise DAINAMICS
 */
export interface ExpertisePillar {
  id: string;
  category: 'ia' | 'automatisation' | 'developpement';
  name: string;
  tagline: string; // Phrase d'accroche courte
  description: string; // Description détaillée 2-3 phrases
  icon: string; // Icône principale Lucide
  
  // Technologies maîtrisées
  technologies: Technology[];
  
  // Capacités / Services offerts
  capabilities: Capability[];
  
  // Cas d'usage concrets
  useCases: UseCase[];
  
  // Liens avec portfolio
  relatedProjects: string[]; // IDs projets portfolio
  
  // Métriques d'expertise
  metrics: {
    projectsCompleted: { label: string; value: string };
    avgROI: { label: string; value: string };
    clientSatisfaction: { label: string; value: string };
    yearsExperience: { label: string; value: string };
  };
  
  // Quick wins possibles
  quickWins: {
    title: string;
    timeframe: string; // Ex: "2-4 semaines"
    investment: string; // Ex: "CHF 5'000-10'000"
    returns: string; // Ex: "ROI < 6 mois"
  }[];
}

// ============================================================================
// COULEURS DESIGN SYSTEM - OBLIGATOIRES
// ============================================================================

/**
 * Couleurs principales du Design System
 * Source: DESIGN-SYSTEM-MANDATORY.md
 * ⚠️ NE JAMAIS MODIFIER CES VALEURS
 */
export const COLORS = {
  primary: '#6366F1',      // Indigo - Tech/IA
  success: '#10B981',      // Green - Success
  accent: '#10E4FF',       // Cyan - Automatisation
  cta: '#FF5A00',          // Orange - CTA/Développement
  warning: '#F59E0B',      // Yellow - Warning
  error: '#EF4444',        // Red - Error
  background: '#0A0A0F',   // Dark Navy
  light: '#F1F5F9'         // Light text
} as const;

/**
 * Mapping couleurs par catégorie
 * Source: DESIGN-SYSTEM-MANDATORY.md
 * ⚠️ NE JAMAIS MODIFIER CES VALEURS
 */
export const categoryColors: Record<'ia' | 'automatisation' | 'developpement', string> = {
  'ia': COLORS.primary,           // Primary Indigo
  'automatisation': COLORS.accent, // Accent Cyan
  'developpement': COLORS.cta      // CTA Orange
};

/**
 * Mapping couleurs par niveau de complexité
 * Source: DESIGN-SYSTEM-MANDATORY.md
 */
export const complexityColors: Record<'starter' | 'intermediate' | 'advanced', string> = {
  'starter': COLORS.success,      // Success Green
  'intermediate': COLORS.warning,  // Warning Yellow
  'advanced': COLORS.error         // Error Red
};

// ============================================================================
// DONNÉES - LES 3 PILIERS DAINAMICS
// ============================================================================

export const expertisePillars: ExpertisePillar[] = [
  // ==========================================================================
  // PILIER 1 : INTELLIGENCE ARTIFICIELLE
  // ==========================================================================
  {
    id: 'pilier-ia',
    category: 'ia',
    name: 'Intelligence Artificielle',
    tagline: 'Transformez vos données en décisions stratégiques avec l\'IA',
    description: 'Nous développons des solutions d\'Intelligence Artificielle sur mesure qui automatisent les tâches complexes, analysent vos données et prennent des décisions intelligentes. De l\'analyse documentaire aux agents IA autonomes, nous maîtrisons les technologies LLM les plus avancées (GPT-4, Claude) pour créer des systèmes qui apprennent et s\'adaptent à vos besoins.',
    icon: 'Brain', // Lucide: Brain (vérifié sur lucide.dev)
    
    technologies: [
      {
        name: 'GPT-4 & Claude',
        category: 'platform',
        icon: 'Sparkles',
        description: 'LLMs de dernière génération pour compréhension et génération de texte',
        proficiency: 'expert',
        usedIn: ['lexaia-legal-ai', 'enki-realty-automation', 'ecommerce-chatbot-multilingual']
      },
      {
        name: 'LangChain',
        category: 'framework',
        icon: 'Link',
        description: 'Orchestration d\'agents IA et chaînes de traitement complexes',
        proficiency: 'expert',
        usedIn: ['lexaia-legal-ai', 'enki-realty-automation']
      },
      {
        name: 'Pinecone',
        category: 'platform',
        icon: 'Database',
        description: 'Base de données vectorielle pour RAG et recherche sémantique',
        proficiency: 'advanced',
        usedIn: ['lexaia-legal-ai', 'ecommerce-chatbot-multilingual']
      },
      {
        name: 'OpenCV',
        category: 'library',
        icon: 'Eye',
        description: 'Vision par ordinateur et traitement d\'images',
        proficiency: 'advanced',
        usedIn: []
      },
      {
        name: 'TensorFlow',
        category: 'framework',
        icon: 'Cpu',
        description: 'Machine Learning et Deep Learning',
        proficiency: 'intermediate',
        usedIn: []
      },
      {
        name: 'Python',
        category: 'language',
        icon: 'Code',
        description: 'Langage principal pour projets IA',
        proficiency: 'expert',
        usedIn: ['lexaia-legal-ai', 'enki-realty-automation', 'ecommerce-chatbot-multilingual']
      },
      {
        name: 'FastAPI',
        category: 'framework',
        icon: 'Zap',
        description: 'APIs haute performance pour modèles IA',
        proficiency: 'expert',
        usedIn: ['lexaia-legal-ai', 'enki-realty-automation']
      },
      {
        name: 'Hugging Face',
        category: 'platform',
        icon: 'Cloud',
        description: 'Modèles pré-entraînés et fine-tuning',
        proficiency: 'advanced',
        usedIn: []
      }
    ],
    
    capabilities: [
      {
        id: 'cap-ia-1',
        name: 'Agents IA Autonomes',
        description: 'Agents intelligents capables de raisonner, planifier et exécuter des tâches complexes de manière autonome',
        icon: 'Bot',
        deliverables: ['Agent IA personnalisé', 'Dashboard de monitoring', 'Documentation technique'],
        timeline: '8-12 semaines',
        complexity: 'advanced'
      },
      {
        id: 'cap-ia-2',
        name: 'Analyse Documentaire Automatisée',
        description: 'Extraction et analyse intelligente de données depuis documents (PDF, Excel, images) avec compréhension contextuelle',
        icon: 'FileText',
        deliverables: ['Pipeline d\'extraction', 'API d\'analyse', 'Interface de validation'],
        timeline: '4-6 semaines',
        complexity: 'intermediate'
      },
      {
        id: 'cap-ia-3',
        name: 'Chatbots Intelligents',
        description: 'Assistants conversationnels multilingues avec RAG (Retrieval-Augmented Generation) sur vos documents',
        icon: 'MessageSquare',
        deliverables: ['Chatbot intégré', 'Base de connaissances', 'Analytics conversations'],
        timeline: '4-8 semaines',
        complexity: 'intermediate'
      },
      {
        id: 'cap-ia-4',
        name: 'Vision par Ordinateur',
        description: 'Détection d\'objets, reconnaissance de texte (OCR), analyse d\'images pour automatiser le contrôle qualité',
        icon: 'Eye',
        deliverables: ['Modèle personnalisé', 'API d\'inférence', 'Dashboard résultats'],
        timeline: '6-10 semaines',
        complexity: 'advanced'
      },
      {
        id: 'cap-ia-5',
        name: 'Prédiction & Forecasting',
        description: 'Modèles prédictifs pour anticiper la demande, optimiser les stocks, prévoir les tendances',
        icon: 'TrendingUp',
        deliverables: ['Modèle ML', 'Dashboard prédictions', 'Rapports automatisés'],
        timeline: '6-8 semaines',
        complexity: 'advanced'
      }
    ],
    
    useCases: [
      {
        id: 'uc-ia-1',
        title: 'Automatisation Analyse Juridique',
        description: 'Agent IA qui analyse les jugements, extrait les informations clés et génère des synthèses',
        industry: 'Juridique',
        problem: '2h/jour perdues à analyser des jugements manuellement',
        roi: {
          timeframe: '6 mois',
          savings: 'CHF 85\'000/an',
          efficiency: '+80% rapidité d\'analyse'
        },
        relatedProjectId: 'lexaia-legal-ai'
      },
      {
        id: 'uc-ia-2',
        title: 'Assistant Immobilier IA',
        description: 'Chatbot intelligent qui répond aux questions locataires et extrait infos des baux',
        industry: 'Immobilier',
        problem: '50+ demandes/jour de locataires à traiter manuellement',
        roi: {
          timeframe: '4 mois',
          savings: 'CHF 42\'000/an',
          efficiency: '+70% temps de réponse'
        },
        relatedProjectId: 'enki-realty-automation'
      },
      {
        id: 'uc-ia-3',
        title: 'Contrôle Qualité Visuel',
        description: 'Système de vision par ordinateur qui détecte automatiquement les défauts de production',
        industry: 'Manufacturing',
        problem: 'Contrôle qualité manuel lent et sujet aux erreurs humaines',
        roi: {
          timeframe: '8 mois',
          savings: 'CHF 120\'000/an',
          efficiency: '99.5% précision de détection'
        }
      },
      {
        id: 'uc-ia-4',
        title: 'Prédiction de la Demande',
        description: 'Modèle ML qui prévoit les ventes futures pour optimiser les stocks',
        industry: 'E-commerce',
        problem: 'Ruptures de stock fréquentes et surstock coûteux',
        roi: {
          timeframe: '5 mois',
          savings: 'CHF 65\'000/an',
          efficiency: '-45% coûts de stockage'
        }
      },
      {
        id: 'uc-ia-5',
        title: 'Extraction Automatique de Factures',
        description: 'OCR intelligent qui extrait et valide les données de factures',
        industry: 'Fiduciaire',
        problem: '3h/jour de saisie manuelle de données comptables',
        roi: {
          timeframe: '3 mois',
          savings: 'CHF 38\'000/an',
          efficiency: '+90% réduction erreurs de saisie'
        }
      }
    ],
    
    relatedProjects: ['lexaia-legal-ai', 'enki-realty-automation', 'ecommerce-chatbot-multilingual'],
    
    metrics: {
      yearsExperience: { label: "Années d'expérience IA", value: "5+" },
      projectsCompleted: { label: "Projets IA livrés", value: "12+" },
      avgROI: { label: "ROI moyen annuel", value: "CHF 65'000" },
      clientSatisfaction: { label: "Satisfaction client", value: "4.9/5" }
    },
    
    quickWins: [
      {
        title: 'Chatbot Support Client',
        timeframe: '2-3 semaines',
        investment: 'CHF 5\'000-8\'000',
        returns: 'ROI < 4 mois'
      },
      {
        title: 'Extraction de Factures PDF',
        timeframe: '2-4 semaines',
        investment: 'CHF 6\'000-10\'000',
        returns: 'ROI < 3 mois'
      }
    ]
  },

  // ==========================================================================
  // PILIER 2 : AUTOMATISATION
  // ==========================================================================
  {
    id: 'pilier-automatisation',
    category: 'automatisation',
    name: 'Automatisation',
    tagline: 'Éliminez les tâches répétitives et libérez le potentiel de vos équipes',
    description: 'Nous concevons et déployons des solutions d\'automatisation intelligentes qui connectent vos outils, éliminent les tâches manuelles et accélèrent vos processus. De la RPA aux workflows complexes sur mesure, nous transformons vos opérations pour gagner des heures chaque jour et réduire drastiquement les erreurs.',
    icon: 'Zap', // Lucide: Zap (vérifié sur lucide.dev)
    
    technologies: [
      {
        name: 'Make (Integromat)',
        category: 'platform',
        icon: 'GitBranch',
        description: 'Automatisation visuelle de workflows complexes',
        proficiency: 'expert',
        usedIn: ['swiss-fiduciaire-automation']
      },
      {
        name: 'Zapier',
        category: 'platform',
        icon: 'Workflow',
        description: 'Connexion d\'applications cloud sans code',
        proficiency: 'expert',
        usedIn: []
      },
      {
        name: 'n8n',
        category: 'platform',
        icon: 'Network',
        description: 'Automatisation open-source auto-hébergée',
        proficiency: 'advanced',
        usedIn: []
      },
      {
        name: 'Python + Selenium',
        category: 'tool',
        icon: 'Code',
        description: 'RPA personnalisé pour automatisation web',
        proficiency: 'expert',
        usedIn: ['swiss-fiduciaire-automation']
      },
      {
        name: 'APIs REST',
        category: 'tool',
        icon: 'Send',
        description: 'Intégration directe avec systèmes tiers',
        proficiency: 'expert',
        usedIn: ['swiss-fiduciaire-automation', 'manufacturing-iot-dashboard']
      },
      {
        name: 'PostgreSQL',
        category: 'platform',
        icon: 'Database',
        description: 'Base de données pour logs et orchestration',
        proficiency: 'expert',
        usedIn: ['swiss-fiduciaire-automation', 'manufacturing-iot-dashboard']
      },
      {
        name: 'Celery + Redis',
        category: 'tool',
        icon: 'Timer',
        description: 'Gestion de tâches asynchrones et file d\'attente',
        proficiency: 'advanced',
        usedIn: []
      }
    ],
    
    capabilities: [
      {
        id: 'cap-auto-1',
        name: 'Workflow Automation',
        description: 'Automatisation de workflows multi-étapes avec intégrations entre vos outils (CRM, ERP, Compta)',
        icon: 'Workflow',
        deliverables: ['Workflows automatisés', 'Monitoring dashboard', 'Documentation processus'],
        timeline: '3-6 semaines',
        complexity: 'intermediate'
      },
      {
        id: 'cap-auto-2',
        name: 'RPA (Robotic Process Automation)',
        description: 'Robots logiciels qui exécutent des tâches répétitives sur vos applications desktop et web',
        icon: 'Bot',
        deliverables: ['Bots RPA', 'Scheduler', 'Logs et alertes'],
        timeline: '4-8 semaines',
        complexity: 'advanced'
      },
      {
        id: 'cap-auto-3',
        name: 'Intégrations Systèmes',
        description: 'Connexion bi-directionnelle entre vos outils métier via APIs (CRM ↔ Compta, ERP ↔ E-commerce)',
        icon: 'Link',
        deliverables: ['Connecteurs API', 'Synchronisation données', 'Monitoring'],
        timeline: '4-6 semaines',
        complexity: 'intermediate'
      },
      {
        id: 'cap-auto-4',
        name: 'Extraction & Traitement de Données',
        description: 'Extraction automatique de données depuis emails, PDFs, Excel, sites web + validation',
        icon: 'FileText',
        deliverables: ['Pipeline ETL', 'Validation automatique', 'Rapports erreurs'],
        timeline: '3-5 semaines',
        complexity: 'intermediate'
      },
      {
        id: 'cap-auto-5',
        name: 'Rapports Automatisés',
        description: 'Génération et envoi automatique de rapports (KPIs, financiers) par email ou dashboard',
        icon: 'BarChart',
        deliverables: ['Templates rapports', 'Scheduler automatique', 'Distribution email'],
        timeline: '2-4 semaines',
        complexity: 'starter'
      }
    ],
    
    useCases: [
      {
        id: 'uc-auto-1',
        title: 'Automatisation Comptabilité Fiduciaire',
        description: 'Pipeline automatisé qui extrait, valide et saisit les écritures comptables',
        industry: 'Fiduciaire',
        problem: '4h/jour de saisie comptable manuelle et erreurs fréquentes',
        roi: {
          timeframe: '5 mois',
          savings: 'CHF 52\'000/an',
          efficiency: '+75% rapidité de traitement'
        },
        relatedProjectId: 'swiss-fiduciaire-automation'
      },
      {
        id: 'uc-auto-2',
        title: 'Synchronisation CRM → ERP',
        description: 'Workflow qui synchronise les commandes du CRM vers l\'ERP automatiquement',
        industry: 'E-commerce',
        problem: 'Ressaisie manuelle de 100+ commandes/jour entre systèmes',
        roi: {
          timeframe: '3 mois',
          savings: 'CHF 35\'000/an',
          efficiency: 'Zéro erreur de ressaisie'
        }
      },
      {
        id: 'uc-auto-3',
        title: 'Génération Automatique de Devis',
        description: 'Bot qui crée et envoie des devis personnalisés depuis un Google Form',
        industry: 'Services B2B',
        problem: '2h/jour à créer des devis manuellement depuis Excel',
        roi: {
          timeframe: '2 mois',
          savings: 'CHF 28\'000/an',
          efficiency: '+60% rapidité de réponse'
        }
      },
      {
        id: 'uc-auto-4',
        title: 'Onboarding Client Automatisé',
        description: 'Workflow qui envoie documents, collecte signatures et crée comptes automatiquement',
        industry: 'SaaS',
        problem: '90 min/client d\'onboarding manuel avec oublis fréquents',
        roi: {
          timeframe: '4 mois',
          savings: 'CHF 45\'000/an',
          efficiency: '100% conformité processus'
        }
      },
      {
        id: 'uc-auto-5',
        title: 'Monitoring & Alertes IoT',
        description: 'Système qui surveille capteurs IoT et envoie alertes automatiques si anomalie',
        industry: 'Manufacturing',
        problem: 'Surveillance manuelle 24/7 coûteuse et réactive',
        roi: {
          timeframe: '6 mois',
          savings: 'CHF 68\'000/an',
          efficiency: '-85% temps de réaction'
        },
        relatedProjectId: 'manufacturing-iot-dashboard'
      }
    ],
    
    relatedProjects: ['swiss-fiduciaire-automation', 'manufacturing-iot-dashboard'],
    
    metrics: {
      yearsExperience: { label: "Années d'expérience Automatisation", value: "6+" },
      projectsCompleted: { label: "Projets d'automatisation", value: "18+" },
      avgROI: { label: "ROI moyen annuel", value: "CHF 48'000" },
      clientSatisfaction: { label: "Satisfaction client", value: "4.8/5" }
    },
    
    quickWins: [
      {
        title: 'Rapports Automatiques Google Sheets → Email',
        timeframe: '1-2 semaines',
        investment: 'CHF 3\'000-5\'000',
        returns: 'ROI < 3 mois'
      },
      {
        title: 'Synchronisation CRM → Compta',
        timeframe: '2-3 semaines',
        investment: 'CHF 5\'000-8\'000',
        returns: 'ROI < 4 mois'
      }
    ]
  },

  // ==========================================================================
  // PILIER 3 : DÉVELOPPEMENT
  // ==========================================================================
  {
    id: 'pilier-developpement',
    category: 'developpement',
    name: 'Développement',
    tagline: 'Des applications sur mesure qui évoluent avec votre business',
    description: 'Nous développons des applications web et mobiles performantes, sécurisées et scalables. De la simple landing page au SaaS complet avec infrastructure cloud, nous maîtrisons les technologies modernes (React, Node.js, PostgreSQL) pour créer des solutions digitales qui propulsent votre croissance.',
    icon: 'Code', // Lucide: Code (vérifié sur lucide.dev)
    
    technologies: [
      {
        name: 'React',
        category: 'framework',
        icon: 'Sparkles',
        description: 'Interfaces utilisateur modernes et performantes',
        proficiency: 'expert',
        usedIn: ['manufacturing-iot-dashboard', 'ecommerce-chatbot-multilingual']
      },
      {
        name: 'Next.js',
        category: 'framework',
        icon: 'Globe',
        description: 'Applications full-stack React avec SSR',
        proficiency: 'expert',
        usedIn: []
      },
      {
        name: 'TypeScript',
        category: 'language',
        icon: 'Code',
        description: 'JavaScript typé pour applications robustes',
        proficiency: 'expert',
        usedIn: ['manufacturing-iot-dashboard', 'ecommerce-chatbot-multilingual']
      },
      {
        name: 'Node.js',
        category: 'platform',
        icon: 'Server',
        description: 'Backend JavaScript haute performance',
        proficiency: 'expert',
        usedIn: ['manufacturing-iot-dashboard', 'ecommerce-chatbot-multilingual']
      },
      {
        name: 'PostgreSQL',
        category: 'platform',
        icon: 'Database',
        description: 'Base de données relationnelle robuste',
        proficiency: 'expert',
        usedIn: ['swiss-fiduciaire-automation', 'manufacturing-iot-dashboard']
      },
      {
        name: 'Supabase',
        category: 'platform',
        icon: 'Cloud',
        description: 'Backend-as-a-Service avec PostgreSQL',
        proficiency: 'expert',
        usedIn: []
      },
      {
        name: 'Docker',
        category: 'tool',
        icon: 'Package',
        description: 'Conteneurisation et déploiement',
        proficiency: 'advanced',
        usedIn: ['manufacturing-iot-dashboard']
      },
      {
        name: 'Tailwind CSS',
        category: 'framework',
        icon: 'Paintbrush',
        description: 'Framework CSS utility-first',
        proficiency: 'expert',
        usedIn: ['ecommerce-chatbot-multilingual']
      },
      {
        name: 'AWS / Vercel',
        category: 'platform',
        icon: 'Cloud',
        description: 'Hébergement cloud scalable',
        proficiency: 'advanced',
        usedIn: ['manufacturing-iot-dashboard', 'ecommerce-chatbot-multilingual']
      }
    ],
    
    capabilities: [
      {
        id: 'cap-dev-1',
        name: 'Applications Web Métier',
        description: 'Développement d\'applications web sur mesure (dashboards, CRM, ERP, portails)',
        icon: 'Globe',
        deliverables: ['Application web', 'Backend API', 'Documentation technique'],
        timeline: '10-16 semaines',
        complexity: 'advanced'
      },
      {
        id: 'cap-dev-2',
        name: 'APIs REST & GraphQL',
        description: 'Création d\'APIs sécurisées pour connecter vos systèmes et applications',
        icon: 'Send',
        deliverables: ['API documentée', 'Authentification', 'Monitoring'],
        timeline: '4-8 semaines',
        complexity: 'intermediate'
      },
      {
        id: 'cap-dev-3',
        name: 'Sites Web & Landing Pages',
        description: 'Sites corporate, e-commerce et landing pages performantes avec SEO optimisé',
        icon: 'Layout',
        deliverables: ['Site web responsive', 'CMS', 'SEO technique'],
        timeline: '4-8 semaines',
        complexity: 'starter'
      },
      {
        id: 'cap-dev-4',
        name: 'Applications Mobiles',
        description: 'Apps mobiles natives (iOS/Android) ou cross-platform (React Native)',
        icon: 'Smartphone',
        deliverables: ['App mobile', 'Backend API', 'Publication stores'],
        timeline: '12-20 semaines',
        complexity: 'advanced'
      },
      {
        id: 'cap-dev-5',
        name: 'Infrastructure Cloud',
        description: 'Setup d\'infrastructure scalable sur AWS, Azure ou Google Cloud avec CI/CD',
        icon: 'Cloud',
        deliverables: ['Infrastructure code', 'CI/CD pipelines', 'Monitoring'],
        timeline: '6-10 semaines',
        complexity: 'advanced'
      }
    ],
    
    useCases: [
      {
        id: 'uc-dev-1',
        title: 'Dashboard IoT Temps Réel',
        description: 'Application web qui affiche données capteurs en temps réel avec alertes',
        industry: 'Manufacturing',
        problem: 'Pas de visibilité sur l\'état des machines en production',
        roi: {
          timeframe: '8 mois',
          savings: 'CHF 95\'000/an',
          efficiency: '-70% temps d\'arrêt machines'
        },
        relatedProjectId: 'manufacturing-iot-dashboard'
      },
      {
        id: 'uc-dev-2',
        title: 'Portail Client Self-Service',
        description: 'Portail web où clients accèdent factures, contrats, tickets support',
        industry: 'Services B2B',
        problem: '50+ demandes/jour par email de clients pour documents',
        roi: {
          timeframe: '6 mois',
          savings: 'CHF 38\'000/an',
          efficiency: '+85% satisfaction client'
        }
      },
      {
        id: 'uc-dev-3',
        title: 'CRM Sur Mesure',
        description: 'CRM personnalisé adapté aux processus spécifiques de l\'entreprise',
        industry: 'Agence Immobilière',
        problem: 'CRM générique trop complexe et mal adapté aux besoins',
        roi: {
          timeframe: '10 mois',
          savings: 'CHF 72\'000/an',
          efficiency: '+60% productivité commerciale'
        }
      },
      {
        id: 'uc-dev-4',
        title: 'Marketplace B2B',
        description: 'Plateforme e-commerce qui connecte fournisseurs et acheteurs professionnels',
        industry: 'Distribution',
        problem: 'Processus de commande par email lent et sujet aux erreurs',
        roi: {
          timeframe: '12 mois',
          savings: 'CHF 150\'000/an',
          efficiency: '+40% volume de commandes'
        }
      },
      {
        id: 'uc-dev-5',
        title: 'App Mobile de Terrain',
        description: 'Application mobile pour techniciens terrain avec mode offline',
        industry: 'Maintenance',
        problem: 'Techniciens perdent 1h/jour à remplir rapports manuellement',
        roi: {
          timeframe: '9 mois',
          savings: 'CHF 82\'000/an',
          efficiency: '+55% interventions/jour'
        }
      }
    ],
    
    relatedProjects: ['manufacturing-iot-dashboard', 'ecommerce-chatbot-multilingual'],
    
    metrics: {
      yearsExperience: { label: "Années d'expérience Dev", value: "8+" },
      projectsCompleted: { label: "Applications livrées", value: "24+" },
      avgROI: { label: "ROI moyen annuel", value: "CHF 78'000" },
      clientSatisfaction: { label: "Satisfaction client", value: "4.9/5" }
    },
    
    quickWins: [
      {
        title: 'Landing Page Performante',
        timeframe: '1-2 semaines',
        investment: 'CHF 3\'000-6\'000',
        returns: 'Leads immédiats'
      },
      {
        title: 'Dashboard Analytics Simple',
        timeframe: '2-3 semaines',
        investment: 'CHF 6\'000-10\'000',
        returns: 'Visibilité temps réel'
      }
    ]
  }
];

// ============================================================================
// HELPERS EXPORTÉS
// ============================================================================

/**
 * Obtenir un pilier par sa catégorie
 */
export const getPillarByCategory = (
  category: 'ia' | 'automatisation' | 'developpement'
): ExpertisePillar | undefined => {
  return expertisePillars.find(pillar => pillar.category === category);
};

/**
 * Obtenir toutes les technologies d'un pilier
 */
export const getPillarTechnologies = (pillarId: string): Technology[] => {
  const pillar = expertisePillars.find(p => p.id === pillarId);
  return pillar?.technologies || [];
};

/**
 * Obtenir toutes les capacités d'un pilier
 */
export const getPillarCapabilities = (pillarId: string): Capability[] => {
  const pillar = expertisePillars.find(p => p.id === pillarId);
  return pillar?.capabilities || [];
};

/**
 * Obtenir tous les cas d'usage d'un pilier
 */
export const getPillarUseCases = (pillarId: string): UseCase[] => {
  const pillar = expertisePillars.find(p => p.id === pillarId);
  return pillar?.useCases || [];
};

/**
 * Filtrer capacités par niveau de complexité
 */
export const getCapabilitiesByComplexity = (
  complexity: 'starter' | 'intermediate' | 'advanced'
): Capability[] => {
  return expertisePillars.flatMap(pillar =>
    pillar.capabilities.filter(cap => cap.complexity === complexity)
  );
};

/**
 * Obtenir statistiques globales
 */
export const getGlobalStats = () => {
  const totalProjects = expertisePillars.reduce((sum, pillar) => {
    const value = parseInt(pillar.metrics.projectsCompleted.value.replace('+', ''));
    return sum + value;
  }, 0);
  const avgSatisfaction = (
    expertisePillars.reduce((sum, pillar) => {
      const value = parseFloat(pillar.metrics.clientSatisfaction.value.split('/')[0]);
      return sum + value;
    }, 0) / expertisePillars.length
  ).toFixed(1);

  return {
    totalProjects,
    avgSatisfaction: `${avgSatisfaction}/5`,
    totalTechnologies: expertisePillars.reduce((sum, pillar) => sum + pillar.technologies.length, 0),
    totalCapabilities: expertisePillars.reduce((sum, pillar) => sum + pillar.capabilities.length, 0)
  };
};

/**
 * Obtenir toutes les technologies EXPERTES
 */
export const getExpertTechnologies = (): Technology[] => {
  return expertisePillars.flatMap(pillar =>
    pillar.technologies.filter(tech => tech.proficiency === 'expert')
  );
};

/**
 * Obtenir tous les quick wins disponibles
 */
export const getAllQuickWins = () => {
  return expertisePillars.map(pillar => ({
    pillar: pillar.name,
    category: pillar.category,
    quickWins: pillar.quickWins
  }));
};
