// ============================================================================
// DAINAMICS - Data: 20 Automatisations PME
// ============================================================================
// Source: Automatisation_PME.md (20 automatisations + 5 bonus)
// Version: 1.0
// Date: 03 Novembre 2025
// ============================================================================

import type { LucideIcon } from 'lucide-react';

// Types
export interface Automatisation {
  id: string;
  nom: string;
  categorie: Categorie;
  description: string;
  gainsTemps: string;
  reductionErreurs: string;
  roiMois: number;
  score: number;
  icone: string; // Nom de l'icône Lucide React
}

export type Categorie = 
  | 'finance-admin'
  | 'ventes-pipeline'
  | 'marketing-leads'
  | 'support-client'
  | 'production-stock'
  | 'rh-equipe';

// ============================================================================
// 20 AUTOMATISATIONS PRINCIPALES
// ============================================================================

export const AUTOMATISATIONS: Automatisation[] = [
  // ========================================
  // CATÉGORIE: Finance & Administration
  // ========================================
  {
    id: 'compta-facturation',
    nom: 'Comptabilité & Facturation Électronique',
    categorie: 'finance-admin',
    description: 'Génération automatique factures électroniques, OCR intelligent, rapprochement bancaire automatisé',
    gainsTemps: '80% sur tâches comptables',
    reductionErreurs: '95%',
    roiMois: 4,
    score: 9.5,
    icone: 'FileText'
  },
  {
    id: 'notes-frais',
    nom: 'Gestion Notes de Frais',
    categorie: 'finance-admin',
    description: 'Scan automatique reçus avec OCR, workflow validation, remboursement automatique',
    gainsTemps: '80% sur traitement',
    reductionErreurs: '95%',
    roiMois: 3,
    score: 8.2,
    icone: 'Receipt'
  },
  {
    id: 'reporting-bi',
    nom: 'Reporting & Business Intelligence',
    categorie: 'finance-admin',
    description: 'Tableaux de bord temps réel, rapports auto-générés, alertes KPIs automatiques',
    gainsTemps: '75% sur reporting manuel',
    reductionErreurs: '90%',
    roiMois: 5,
    score: 8.8,
    icone: 'BarChart3'
  },
  {
    id: 'rpa-finance',
    nom: 'RPA Finance & Comptabilité',
    categorie: 'finance-admin',
    description: 'Robots logiciels automatisant tâches répétitives multi-systèmes',
    gainsTemps: '90% sur processus ciblés',
    reductionErreurs: '100%',
    roiMois: 7,
    score: 9.0,
    icone: 'Cog'
  },

  // ========================================
  // CATÉGORIE: Ventes & Pipeline Commercial
  // ========================================
  {
    id: 'crm',
    nom: 'CRM Intelligent',
    categorie: 'ventes-pipeline',
    description: 'Centralisation contacts, lead scoring automatique, rappels et workflows de vente',
    gainsTemps: '60% sur gestion clients',
    reductionErreurs: '85%',
    roiMois: 5,
    score: 9.3,
    icone: 'Users'
  },
  {
    id: 'prospection-commerciale',
    nom: 'Prospection Commerciale Automatisée',
    categorie: 'ventes-pipeline',
    description: 'Extraction prospects LinkedIn, séquences multi-canal automatisées, personnalisation à l\'échelle',
    gainsTemps: '+300% volume prospection',
    reductionErreurs: '80%',
    roiMois: 4,
    score: 8.4,
    icone: 'Target'
  },
  {
    id: 'pipeline-commercial',
    nom: 'Pipeline Commercial Automatisé',
    categorie: 'ventes-pipeline',
    description: 'Suivi opportunités automatisé, prévisions ventes IA, alertes deals',
    gainsTemps: '70% sur suivi manuel',
    reductionErreurs: '85%',
    roiMois: 5,
    score: 8.1,
    icone: 'TrendingUp'
  },
  {
    id: 'signature-electronique',
    nom: 'Signature Électronique & Contrats',
    categorie: 'ventes-pipeline',
    description: 'Signature documents en ligne, workflow approbation, archivage automatique',
    gainsTemps: '85% sur circuit signature',
    reductionErreurs: '100%',
    roiMois: 3,
    score: 8.0,
    icone: 'FileSignature'
  },

  // ========================================
  // CATÉGORIE: Marketing & Génération Leads
  // ========================================
  {
    id: 'email-marketing',
    nom: 'Email Marketing Automation',
    categorie: 'marketing-leads',
    description: 'Scénarios emails déclenchés, segmentation automatique, A/B testing, personnalisation dynamique',
    gainsTemps: '85% sur campagnes',
    reductionErreurs: '90%',
    roiMois: 3,
    score: 9.2,
    icone: 'Mail'
  },
  {
    id: 'reseaux-sociaux',
    nom: 'Automatisation Réseaux Sociaux',
    categorie: 'marketing-leads',
    description: 'Programmation multi-plateformes, monitoring marque, reporting automatique',
    gainsTemps: '80% sur gestion réseaux',
    reductionErreurs: '85%',
    roiMois: 5,
    score: 8.3,
    icone: 'Share2'
  },
  {
    id: 'lead-generation',
    nom: 'Lead Generation Automatisée',
    categorie: 'marketing-leads',
    description: 'Capture leads automatique, scoring, nurturing séquences, qualification',
    gainsTemps: '70% sur génération leads',
    reductionErreurs: '80%',
    roiMois: 4,
    score: 8.7,
    icone: 'UserPlus'
  },
  {
    id: 'marketing-automation',
    nom: 'Marketing Automation Complet',
    categorie: 'marketing-leads',
    description: 'Parcours client automatisés, lead nurturing, analytics avancés',
    gainsTemps: '75% sur workflows marketing',
    reductionErreurs: '90%',
    roiMois: 5,
    score: 8.6,
    icone: 'Zap'
  },

  // ========================================
  // CATÉGORIE: Support Client
  // ========================================
  {
    id: 'chatbot-ia',
    nom: 'Chatbot IA Support Client',
    categorie: 'support-client',
    description: 'Assistant IA 24/7 multilingue, réponses automatiques FAQ, escalade intelligente',
    gainsTemps: '75% sur support niveau 1',
    reductionErreurs: '100%',
    roiMois: 4,
    score: 9.1,
    icone: 'MessageCircle'
  },
  {
    id: 'support-client',
    nom: 'Support Client Automatisé',
    categorie: 'support-client',
    description: 'Ticketing automatique, routage intelligent, SLA monitoring, base de connaissances',
    gainsTemps: '70% sur gestion tickets',
    reductionErreurs: '90%',
    roiMois: 5,
    score: 8.5,
    icone: 'Headphones'
  },
  {
    id: 'workflows-approbations',
    nom: 'Workflows & Approbations',
    categorie: 'support-client',
    description: 'Circuits validation automatisés, notifications intelligentes, traçabilité complète',
    gainsTemps: '65% sur circuits',
    reductionErreurs: '95%',
    roiMois: 5,
    score: 8.2,
    icone: 'GitBranch'
  },
  {
    id: 'base-connaissances',
    nom: 'Base de Connaissances IA',
    categorie: 'support-client',
    description: 'Wiki intelligent auto-actualisé, recherche sémantique, suggestions contextuelles',
    gainsTemps: '60% sur recherche info',
    reductionErreurs: '85%',
    roiMois: 7,
    score: 7.7,
    icone: 'BookOpen'
  },

  // ========================================
  // CATÉGORIE: Production & Gestion Stocks
  // ========================================
  {
    id: 'gestion-stocks',
    nom: 'Gestion Stocks Intelligente',
    categorie: 'production-stock',
    description: 'Suivi temps réel, alertes automatiques, prévisions demande IA, réapprovisionnement auto',
    gainsTemps: '60% sur gestion manuelle',
    reductionErreurs: '95%',
    roiMois: 5,
    score: 8.6,
    icone: 'Package'
  },
  {
    id: 'maintenance-predictive',
    nom: 'Maintenance Prédictive',
    categorie: 'production-stock',
    description: 'Surveillance machines IoT, prédiction pannes, planification maintenance optimale',
    gainsTemps: '50% sur pannes imprévues',
    reductionErreurs: '90%',
    roiMois: 10,
    score: 8.3,
    icone: 'Wrench'
  },

  // ========================================
  // CATÉGORIE: RH & Équipe
  // ========================================
  {
    id: 'rh-recrutement',
    nom: 'RH & Recrutement Automatisé',
    categorie: 'rh-equipe',
    description: 'CV screening IA, planification entretiens, onboarding automatique, suivi candidats',
    gainsTemps: '65% sur recrutement',
    reductionErreurs: '75%',
    roiMois: 7,
    score: 8.5,
    icone: 'UserCheck'
  },
  {
    id: 'onboarding',
    nom: 'Onboarding Collaborateurs',
    categorie: 'rh-equipe',
    description: 'Parcours intégration automatisé, formation en ligne, suivi progression',
    gainsTemps: '70% sur onboarding',
    reductionErreurs: '85%',
    roiMois: 7,
    score: 7.8,
    icone: 'UserCircle'
  },
  {
    id: 'time-tracking',
    nom: 'Time Tracking & Congés',
    categorie: 'rh-equipe',
    description: 'Suivi temps automatique, gestion congés en ligne, reporting RH temps réel',
    gainsTemps: '75% sur suivi manuel',
    reductionErreurs: '95%',
    roiMois: 4,
    score: 7.5,
    icone: 'Clock'
  }
];

// ============================================================================
// HELPERS
// ============================================================================

export const getAutomatisationsByCategorie = (categorie: Categorie): Automatisation[] => {
  return AUTOMATISATIONS.filter(auto => auto.categorie === categorie);
};

export const getTopAutomatisations = (limit: number = 5): Automatisation[] => {
  return [...AUTOMATISATIONS]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};
