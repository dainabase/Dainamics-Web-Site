// ============================================================================
// DAINAMICS - Data: Scénarios d'Automatisation par Problématique
// ============================================================================
// Version: 1.0
// Date: 03 Novembre 2025
// Note: Pas de prix affichés - uniquement sur devis
// ============================================================================

import type { Categorie } from './automatisations';

export interface Scenario {
  id: string;
  titre: string;
  description: string;
  gains: string;
  duree: string;
  roiMois: string;
  automatisations: string[]; // Noms des automatisations incluses
  icone: string; // Lucide icon name
}

export interface CategorieScenarios {
  categorie: Categorie;
  titre: string;
  description: string;
  scenarios: Scenario[];
}

// ============================================================================
// SCÉNARIOS PAR PROBLÉMATIQUE
// ============================================================================

export const SCENARIOS_BY_CATEGORIE: CategorieScenarios[] = [
  // ========================================
  // Finance & Administration
  // ========================================
  {
    categorie: 'finance-admin',
    titre: 'Trop de tâches administratives',
    description: 'Éliminez la saisie manuelle et les erreurs comptables',
    scenarios: [
      {
        id: 'scenario-compta-complete',
        titre: 'Automatisation Comptabilité Complète',
        description: 'Facturation électronique automatique, rapprochement bancaire intelligent, pré-comptabilisation, conformité réglementaire assurée',
        gains: '80% temps gagné = 12-15h/semaine économisées',
        duree: '2-3 semaines',
        roiMois: 'ROI en 3-4 mois',
        automatisations: ['Facturation électronique', 'OCR factures', 'Rapprochement bancaire', 'Tableaux de bord'],
        icone: 'FileText'
      },
      {
        id: 'scenario-notes-frais-rpa',
        titre: 'Notes de Frais + RPA',
        description: 'Scan automatique reçus, workflow validation automatisé, remboursement instantané, intégration comptabilité',
        gains: '95% erreurs éliminées, remboursement 5x plus rapide',
        duree: '2-4 semaines',
        roiMois: 'ROI en 3 mois',
        automatisations: ['OCR reçus intelligents', 'Workflow validation', 'Intégration compta', 'RPA'],
        icone: 'Receipt'
      },
      {
        id: 'scenario-reporting-bi',
        titre: 'Reporting BI Automatisé',
        description: 'Tableaux de bord temps réel, rapports auto-générés quotidiens/hebdomadaires, alertes KPIs critiques',
        gains: '75% temps gagné en reporting manuel (6-8h/semaine)',
        duree: '3-5 semaines',
        roiMois: 'ROI en 4-6 mois',
        automatisations: ['Dashboards Power BI', 'Rapports automatiques', 'Alertes intelligentes'],
        icone: 'BarChart3'
      }
    ]
  },

  // ========================================
  // Ventes & Pipeline Commercial
  // ========================================
  {
    categorie: 'ventes-pipeline',
    titre: 'Pipeline commercial désorganisé',
    description: 'Structurez votre processus de vente et ne perdez plus aucun lead',
    scenarios: [
      {
        id: 'scenario-crm-automation',
        titre: 'CRM Intelligent + Automation',
        description: 'Centralisation contacts automatique, lead scoring IA, rappels intelligents, pipelines de vente automatisés, reporting 360°',
        gains: '+30% taux conversion, cycle vente -20%, zéro lead perdu',
        duree: '3-4 semaines',
        roiMois: 'ROI en 4-6 mois',
        automatisations: ['CRM centralisé', 'Lead scoring IA', 'Workflows vente', 'Notifications automatiques'],
        icone: 'Users'
      },
      {
        id: 'scenario-prospection-multicanal',
        titre: 'Prospection Automatisée Multi-Canal',
        description: 'Séquences LinkedIn/Email automatiques, personnalisation à l\'échelle, suivi engagement, synchronisation CRM',
        gains: '+300% volume prospection, +25% taux réponse',
        duree: '2-3 semaines',
        roiMois: 'ROI en 3-5 mois',
        automatisations: ['Prospection LinkedIn', 'Email sequences', 'Personnalisation IA', 'CRM sync'],
        icone: 'Target'
      },
      {
        id: 'scenario-signature-contracts',
        titre: 'Signature Électronique + Contrats',
        description: 'Signature en ligne sécurisée, workflow approbation automatisé, archivage intelligent, conformité légale',
        gains: '85% temps gagné circuit signature (heures → minutes)',
        duree: '1-2 semaines',
        roiMois: 'ROI en 2-3 mois',
        automatisations: ['Signature électronique', 'Workflow approbation', 'Archivage automatique'],
        icone: 'FileSignature'
      }
    ]
  },

  // ========================================
  // Marketing & Génération Leads
  // ========================================
  {
    categorie: 'marketing-leads',
    titre: 'Pas assez de leads qualifiés',
    description: 'Générez et nurturez des leads automatiquement 24/7',
    scenarios: [
      {
        id: 'scenario-email-marketing-complet',
        titre: 'Email Marketing Automation Complète',
        description: 'Scénarios déclenchés automatiques (bienvenue, abandon panier, relance), segmentation intelligente, A/B testing, personnalisation dynamique',
        gains: '+50-70% taux ouverture, +30-40% conversion emails',
        duree: '2-3 semaines',
        roiMois: 'ROI en 2-3 mois (42€ retour pour 1€ investi)',
        automatisations: ['Scénarios emails', 'Segmentation auto', 'A/B testing', 'Personnalisation'],
        icone: 'Mail'
      },
      {
        id: 'scenario-lead-generation-complete',
        titre: 'Lead Generation + Nurturing Complet',
        description: 'Capture leads multi-canal, scoring automatique, séquences nurturing personnalisées, qualification intelligente',
        gains: '+200% leads générés, qualification automatique 70%',
        duree: '3-4 semaines',
        roiMois: 'ROI en 3-5 mois',
        automatisations: ['Capture leads', 'Lead scoring', 'Nurturing sequences', 'Qualification IA'],
        icone: 'UserPlus'
      },
      {
        id: 'scenario-reseaux-sociaux',
        titre: 'Automatisation Réseaux Sociaux',
        description: 'Programmation multi-plateformes (LinkedIn, Facebook, Instagram), monitoring marque temps réel, reporting automatique',
        gains: '80% temps gagné gestion réseaux (10-15h/semaine)',
        duree: '2-3 semaines',
        roiMois: 'ROI en 4-6 mois',
        automatisations: ['Programmation posts', 'Monitoring marque', 'Reporting analytics'],
        icone: 'Share2'
      }
    ]
  },

  // ========================================
  // Support Client
  // ========================================
  {
    categorie: 'support-client',
    titre: 'Support client débordé',
    description: 'Répondez instantanément 24/7 et libérez votre équipe',
    scenarios: [
      {
        id: 'scenario-chatbot-ia-complet',
        titre: 'Chatbot IA Support Client 24/7',
        description: 'Assistant IA multilingue (FR/DE/EN/IT), réponses automatiques FAQ 70-80%, escalade intelligente, apprentissage continu',
        gains: '75% questions automatisées, disponibilité 24/7, satisfaction +35%',
        duree: '3-5 semaines',
        roiMois: 'ROI en 3-5 mois',
        automatisations: ['Chatbot IA multilingue', 'Base connaissances', 'Escalade intelligente'],
        icone: 'MessageCircle'
      },
      {
        id: 'scenario-support-ticketing',
        titre: 'Support Client Automatisé Complet',
        description: 'Ticketing automatique multi-canal, routage intelligent selon expertise, SLA monitoring, base connaissances',
        gains: '70% temps gagné gestion tickets, SLA respectés 95%',
        duree: '3-4 semaines',
        roiMois: 'ROI en 4-6 mois',
        automatisations: ['Ticketing auto', 'Routage intelligent', 'SLA monitoring', 'Base connaissances'],
        icone: 'Headphones'
      },
      {
        id: 'scenario-workflows-approbations',
        titre: 'Workflows & Approbations Automatisés',
        description: 'Circuits validation automatisés, notifications intelligentes multi-niveaux, traçabilité complète, conformité',
        gains: '65% temps gagné circuits approbation, traçabilité 100%',
        duree: '2-4 semaines',
        roiMois: 'ROI en 4-5 mois',
        automatisations: ['Workflows automatisés', 'Notifications', 'Traçabilité'],
        icone: 'GitBranch'
      }
    ]
  },

  // ========================================
  // Production & Gestion Stocks
  // ========================================
  {
    categorie: 'production-stock',
    titre: 'Gestion production/stock inefficace',
    description: 'Optimisez vos stocks et anticipez les pannes machines',
    scenarios: [
      {
        id: 'scenario-gestion-stocks-ia',
        titre: 'Gestion Stocks Intelligente IA',
        description: 'Suivi temps réel multi-entrepôts, alertes automatiques rupture/surstock, prévisions demande IA, réapprovisionnement auto',
        gains: '60% temps gagné, -25-35% coûts stocks, ruptures -90%',
        duree: '4-6 semaines',
        roiMois: 'ROI en 4-6 mois',
        automatisations: ['Suivi temps réel', 'Prévisions IA', 'Réappro auto', 'Alertes intelligentes'],
        icone: 'Package'
      },
      {
        id: 'scenario-maintenance-predictive',
        titre: 'Maintenance Prédictive IoT',
        description: 'Surveillance machines IoT continue, prédiction pannes IA, planification maintenance optimale, historique complet',
        gains: '-50% pannes imprévues, +20-30% durée vie équipements',
        duree: '6-10 semaines',
        roiMois: 'ROI en 8-12 mois',
        automatisations: ['Capteurs IoT', 'Prédiction pannes IA', 'Planning maintenance', 'Dashboards'],
        icone: 'Wrench'
      }
    ]
  },

  // ========================================
  // RH & Équipe
  // ========================================
  {
    categorie: 'rh-equipe',
    titre: 'Processus RH chronophages',
    description: 'Accélérez recrutement et simplifiez gestion RH',
    scenarios: [
      {
        id: 'scenario-rh-recrutement',
        titre: 'RH & Recrutement Automatisé',
        description: 'CV screening IA intelligent, planification entretiens automatique, onboarding digitalisé, suivi candidats complet',
        gains: '65% temps gagné recrutement, délai embauche -40%',
        duree: '4-6 semaines',
        roiMois: 'ROI en 6-8 mois',
        automatisations: ['CV screening IA', 'Planning entretiens', 'Onboarding auto', 'Suivi candidats'],
        icone: 'UserCheck'
      },
      {
        id: 'scenario-time-tracking-conges',
        titre: 'Time Tracking & Congés Automatisés',
        description: 'Suivi temps automatique multi-projets, gestion congés en ligne, validation automatisée, reporting RH temps réel',
        gains: '75% temps gagné suivi manuel, précision 95%',
        duree: '2-3 semaines',
        roiMois: 'ROI en 3-4 mois',
        automatisations: ['Time tracking auto', 'Gestion congés', 'Validation workflow', 'Reporting RH'],
        icone: 'Clock'
      },
      {
        id: 'scenario-onboarding-formation',
        titre: 'Onboarding & Formation Automatisés',
        description: 'Parcours intégration personnalisé, formation e-learning automatique, suivi progression, feedback automatisé',
        gains: '70% temps gagné onboarding, satisfaction +40%',
        duree: '3-5 semaines',
        roiMois: 'ROI en 6-8 mois',
        automatisations: ['Parcours onboarding', 'E-learning', 'Suivi progression', 'Feedback auto'],
        icone: 'UserCircle'
      }
    ]
  }
];

// ============================================================================
// HELPERS
// ============================================================================

export const getScenariosByCategorie = (categorie: Categorie): Scenario[] => {
  const categorieScenarios = SCENARIOS_BY_CATEGORIE.find(cs => cs.categorie === categorie);
  return categorieScenarios?.scenarios || [];
};

export const getAllScenarios = (): Scenario[] => {
  return SCENARIOS_BY_CATEGORIE.flatMap(cs => cs.scenarios);
};
