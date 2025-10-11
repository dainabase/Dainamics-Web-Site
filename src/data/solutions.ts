// src/data/solutions.ts

/**
 * Solutions et Scénarios d'Automatisation DAINAMICS
 * 
 * Ce fichier contient les scénarios d'automatisation possibles,
 * présentés de manière inspirante et business-oriented.
 * 
 * DESIGN SYSTEM :
 * - Catégories : 'ia' (Indigo #6366F1), 'automatisation' (Cyan #10E4FF), 'developpement' (Orange #FF5A00)
 * - Icônes : Lucide React uniquement (https://lucide.dev)
 * - Quick Win : Badge avec pulse animation (ROI < 6 mois)
 * 
 * Structure : 15 solutions réparties en 3 catégories
 * - 5 scénarios IA
 * - 7 scénarios Automatisation
 * - 3 scénarios Développement
 */

export interface Solution {
  // Identifiant unique (kebab-case)
  id: string;
  
  // Titre court et percutant (max 60 caractères)
  title: string;
  
  // Catégorie principale (RESPECTER Design System)
  // 'ia' → #6366F1, 'automatisation' → #10E4FF, 'developpement' → #FF5A00
  category: 'ia' | 'automatisation' | 'developpement';
  
  // Tagline : une phrase d'accroche (max 100 caractères)
  tagline: string;
  
  // Le scénario : situation concrète d'une PME avec problème + solution
  // 3-5 phrases, focus business outcomes
  scenario: string;
  
  // Liste de 3-5 capacités possibles (pas des specs techniques)
  // Commence chaque item par un verbe d'action ou une capacité
  whatsPossible: string[];
  
  // Résultats mesurables
  outcomes: {
    // Temps gagné par semaine ou mois
    timeGained?: string;
    
    // Économies en CHF par mois (fourchette réaliste)
    moneySaved?: string;
    
    // Amélioration en % ou métrique business
    improvement?: string;
    
    // Quick Win = ROI < 6 mois OU implémentation < 3 mois
    // Badge spécial avec pulse animation dans l'interface
    quickWin?: boolean;
  };
  
  // Industries concernées (minimum 2, maximum 5)
  industries: string[];
  
  // Complexité d'implémentation (RESPECTER Design System)
  // 'starter' → Badge vert, 'intermediate' → Badge jaune, 'advanced' → Badge rouge
  complexity: 'starter' | 'intermediate' | 'advanced';
  
  // Icône Lucide React (nom exact, PascalCase)
  // VÉRIFIER sur https://lucide.dev que l'icône existe dans v0.263.1
  // Format : 'MessageSquare', 'FileText', 'TrendingUp', etc.
  icon: string;
}

export const solutions: Solution[] = [
  // === CATÉGORIE IA (5 solutions) ===
  // Couleur : Primary #6366F1 (Indigo)
  
  {
    id: 'ai-customer-service',
    title: 'Service Client Intelligent 24/7',
    category: 'ia',
    tagline: 'Répondez à vos clients instantanément, même à 3h du matin',
    scenario: 'Une PME de e-commerce reçoit 200 emails clients par jour. 80% sont des questions répétitives sur le statut des commandes, les retours ou la disponibilité produits. Chaque email prend 5-10 minutes à traiter. Un agent IA peut gérer ces demandes automatiquement en 30 secondes, laissant votre équipe se concentrer sur les 20% de cas complexes nécessitant une touche humaine.',
    whatsPossible: [
      'Agent conversationnel multilingue (FR/DE/IT/EN) qui comprend l\'intention du client',
      'Accès en temps réel aux systèmes (ERP, CRM) pour répondre avec les données actuelles',
      'Escalade automatique vers un humain si complexité ou frustration détectée',
      'Apprentissage continu des nouvelles questions pour améliorer les réponses',
      'Rapports analytics sur types de demandes et taux de satisfaction'
    ],
    outcomes: {
      timeGained: '15-20h/semaine',
      moneySaved: 'CHF 4\'000-6\'000/mois',
      improvement: '-70% temps de réponse, +35% satisfaction client',
      quickWin: true
    },
    industries: ['E-commerce', 'Services', 'SaaS', 'Retail'],
    complexity: 'intermediate',
    icon: 'MessageSquare' // Lucide React icon
  },
  
  {
    id: 'ai-contract-analysis',
    title: 'Analyse de Contrats Automatisée',
    category: 'ia',
    tagline: 'Extrayez les clauses critiques en secondes, pas en heures',
    scenario: 'Un cabinet juridique analyse 50-100 contrats par mois. Chaque contrat nécessite 2-3h de lecture pour identifier clauses critiques, dates clés, obligations, et risques potentiels. Une IA spécialisée peut analyser un contrat de 50 pages en 2 minutes et produire un rapport structuré avec les points d\'attention.',
    whatsPossible: [
      'Extraction automatique des clauses importantes (résiliation, pénalités, garanties)',
      'Identification des dates critiques et création d\'alertes automatiques',
      'Analyse comparative avec vos standards et templates d\'entreprise',
      'Détection de clauses inhabituelles ou à risque',
      'Génération de résumés exécutifs en français avec points clés'
    ],
    outcomes: {
      timeGained: '80-100h/mois',
      improvement: '-85% temps d\'analyse, -60% risques d\'oubli',
      quickWin: false
    },
    industries: ['Juridique', 'Immobilier', 'Finance', 'Assurances'],
    complexity: 'advanced',
    icon: 'FileSearch' // Lucide React icon
  },
  
  {
    id: 'ai-predictive-inventory',
    title: 'Gestion de Stock Prédictive',
    category: 'ia',
    tagline: 'Anticipez la demande, éliminez les ruptures et le surstock',
    scenario: 'Un commerce retail gère 500+ références produits. Les ruptures de stock causent une perte de 15-20% du CA, tandis que le surstock immobilise CHF 50\'000+ en capital. Une IA analyse les ventes historiques, la saisonnalité, les tendances et les événements pour prédire les besoins de réapprovisionnement avec 92% de précision.',
    whatsPossible: [
      'Prédiction de la demande produit par produit sur 30-90 jours',
      'Recommandations de réapprovisionnement automatiques',
      'Détection des tendances et produits émergents',
      'Optimisation des niveaux de stock selon marge et rotation',
      'Alertes automatiques sur risques de rupture ou surstock'
    ],
    outcomes: {
      moneySaved: 'CHF 8\'000-15\'000/mois',
      improvement: '-75% ruptures, -40% surstock',
      quickWin: false
    },
    industries: ['Retail', 'E-commerce', 'Distribution', 'Manufacturing'],
    complexity: 'advanced',
    icon: 'TrendingUp' // Lucide React icon
  },
  
  {
    id: 'ai-meeting-assistant',
    title: 'Assistant de Réunion IA',
    category: 'ia',
    tagline: 'Plus jamais de notes manquées ou d\'actions oubliées',
    scenario: 'Vos équipes passent 10-15h en réunions par semaine. 30% du temps post-réunion est consacré à rédiger les comptes-rendus, identifier les actions, et relancer les responsables. Un assistant IA enregistre, transcrit, analyse et produit des actions claires avec responsables et deadlines.',
    whatsPossible: [
      'Transcription multilingue en temps réel des discussions',
      'Identification automatique des décisions prises et actions à mener',
      'Extraction des responsables et dates limites',
      'Génération de résumés structurés par thème',
      'Intégration avec outils de gestion de projets pour créer les tâches'
    ],
    outcomes: {
      timeGained: '5-8h/semaine',
      improvement: '+60% suivi des actions, -80% temps administratif',
      quickWin: true
    },
    industries: ['Services', 'Consulting', 'Technology', 'Finance'],
    complexity: 'starter',
    icon: 'Mic' // Lucide React icon
  },
  
  {
    id: 'ai-lead-qualification',
    title: 'Qualification de Leads Intelligente',
    category: 'ia',
    tagline: 'Concentrez vos commerciaux sur les prospects qui vont convertir',
    scenario: 'Votre équipe commerciale reçoit 200+ leads par mois. 60% sont non-qualifiés, faisant perdre 40% du temps commercial en rendez-vous inutiles. Une IA analyse les signaux (secteur, taille, budget, timing, comportement web) et score chaque lead avec une probabilité de conversion.',
    whatsPossible: [
      'Scoring automatique des leads basé sur 30+ critères',
      'Enrichissement des données (taille entreprise, CA, décideurs)',
      'Prédiction du timing optimal de contact',
      'Recommandations de messages personnalisés par profil',
      'Priorisation dynamique de la pipeline commerciale'
    ],
    outcomes: {
      moneySaved: 'CHF 5\'000-8\'000/mois',
      improvement: '+45% taux de conversion, -35% cycle de vente',
      quickWin: true
    },
    industries: ['SaaS', 'Services B2B', 'Consulting', 'Technology'],
    complexity: 'intermediate',
    icon: 'Target' // Lucide React icon
  },
  
  // === CATÉGORIE AUTOMATISATION (7 solutions) ===
  // Couleur : Accent #10E4FF (Cyan)
  
  {
    id: 'auto-document-flow',
    title: 'Gestion Documentaire Sans Friction',
    category: 'automatisation',
    tagline: 'Fini le chaos des documents : triés, nommés, archivés automatiquement',
    scenario: 'Un bureau comptable reçoit 500+ documents par mois (factures, contrats, justificatifs). Chaque document doit être téléchargé, renommé selon convention, classé dans le bon dossier, extrait pour données, validé si besoin, et archivé. 2h par jour perdues en tâches manuelles répétitives.',
    whatsPossible: [
      'Détection automatique du type de document avec OCR IA',
      'Extraction des données clés (montants, dates, fournisseurs, références)',
      'Renommage intelligent selon vos conventions d\'entreprise',
      'Classement automatique dans l\'arborescence correcte',
      'Intégration avec logiciels comptables (SwissDec, Banana, SAP)',
      'Workflow de validation si montant dépasse seuil défini',
      'Archivage conforme nLPD avec rétention automatique'
    ],
    outcomes: {
      timeGained: '10h/semaine',
      moneySaved: 'CHF 3\'500-5\'000/mois',
      improvement: '-90% erreurs de classement, +50% rapidité traitement',
      quickWin: true
    },
    industries: ['Comptabilité', 'Juridique', 'Immobilier', 'Administration'],
    complexity: 'intermediate',
    icon: 'FileText' // Lucide React icon
  },
  
  {
    id: 'auto-invoice-payment',
    title: 'Facturation et Encaissement Automatique',
    category: 'automatisation',
    tagline: 'De la prestation au paiement reçu, sans intervention manuelle',
    scenario: 'Une société de services facture 50+ clients par mois. Le processus actuel nécessite de créer les factures manuellement, les envoyer par email, tracker les paiements, et relancer les retardataires. 15h par mois consacrées à l\'administratif au lieu du business.',
    whatsPossible: [
      'Génération automatique des factures depuis vos feuilles de temps ou CRM',
      'Envoi email personnalisé avec lien de paiement intégré',
      'Tracking automatique des paiements et réconciliation bancaire',
      'Relances progressives selon retard (J+7, J+15, J+30)',
      'Dashboard temps réel du cash-flow et prévisions',
      'Conformité SwissDec et TVA automatique'
    ],
    outcomes: {
      timeGained: '15h/mois',
      moneySaved: 'CHF 2\'500-4\'000/mois',
      improvement: '-40% délai d\'encaissement, -95% erreurs TVA',
      quickWin: true
    },
    industries: ['Services', 'Consulting', 'Freelance', 'PME'],
    complexity: 'starter',
    icon: 'Receipt' // Lucide React icon
  },
  
  {
    id: 'auto-crm-enrichment',
    title: 'Enrichissement CRM Continu',
    category: 'automatisation',
    tagline: 'Vos données CRM toujours à jour, sans ressaisie',
    scenario: 'Votre CRM contient 2\'000+ contacts entreprises mais 40% des données sont obsolètes ou incomplètes (changements de postes, nouvelles coordonnées, CA entreprise). Les commerciaux perdent du temps à chercher les infos ou contactent les mauvaises personnes.',
    whatsPossible: [
      'Mise à jour automatique des coordonnées et postes depuis LinkedIn',
      'Enrichissement avec données entreprise (CA, effectif, secteur)',
      'Détection des changements de poste et nouveaux décideurs',
      'Ajout automatique des interactions (emails, calls, meetings)',
      'Nettoyage des doublons et fusion intelligente',
      'Alertes sur événements importants (levée de fonds, expansion)'
    ],
    outcomes: {
      timeGained: '8-12h/semaine',
      improvement: '+70% qualité données, +25% taux de contact',
      quickWin: false
    },
    industries: ['Sales', 'Marketing', 'Services B2B', 'Technology'],
    complexity: 'intermediate',
    icon: 'Database' // Lucide React icon
  },
  
  {
    id: 'auto-hr-onboarding',
    title: 'Onboarding RH Sans Papier',
    category: 'automatisation',
    tagline: 'De l\'offre signée au premier jour productif en 24h',
    scenario: 'Chaque nouvel employé nécessite 15+ étapes manuelles : création comptes (email, Slack, outils), accès systèmes, commande matériel, formation planning, contrat administratif. Le service RH passe 8-10h par recrue en coordination et suivi.',
    whatsPossible: [
      'Workflow automatique déclenché à la signature du contrat',
      'Création de tous les comptes utilisateur (email, outils, accès)',
      'Provisioning automatique du matériel et logiciels',
      'Planning de formation et onboarding personnalisé par rôle',
      'Checklist interactive pour le nouvel employé et son manager',
      'Suivi automatique du progrès et alertes si blocage'
    ],
    outcomes: {
      timeGained: '8h par recrutement',
      improvement: '+60% satisfaction nouveaux employés, -50% time to productivity',
      quickWin: true
    },
    industries: ['Tous secteurs', 'Scale-ups', 'Technology'],
    complexity: 'intermediate',
    icon: 'UserPlus' // Lucide React icon
  },
  
  {
    id: 'auto-social-media',
    title: 'Présence Social Media Continue',
    category: 'automatisation',
    tagline: 'Restez visible sans y passer des heures chaque jour',
    scenario: 'Votre entreprise doit être présente sur LinkedIn, Instagram, Facebook. La création de contenu, planification, publication et engagement prend 10-15h par semaine. Impossible à tenir pour une PME sans équipe marketing dédiée.',
    whatsPossible: [
      'Génération de posts à partir de votre actualité entreprise',
      'Planification optimale selon les meilleurs moments d\'engagement',
      'Publication cross-platform automatique avec adaptation par réseau',
      'Curation de contenu pertinent pour votre audience',
      'Réponses automatiques aux commentaires fréquents',
      'Analytics et recommandations d\'amélioration'
    ],
    outcomes: {
      timeGained: '10-15h/semaine',
      improvement: '+150% portée, +80% engagement',
      quickWin: true
    },
    industries: ['Tous secteurs', 'Retail', 'Services', 'B2C'],
    complexity: 'starter',
    icon: 'Share2' // Lucide React icon
  },
  
  {
    id: 'auto-project-reporting',
    title: 'Reporting Projet en Temps Réel',
    category: 'automatisation',
    tagline: 'Vos clients et managers toujours informés, sans email de statut',
    scenario: 'Vous gérez 10-20 projets simultanés. Chaque client veut un update hebdomadaire. Votre management veut un reporting consolidé. 5h par semaine perdues à compiler les infos depuis différents outils et créer des PowerPoints.',
    whatsPossible: [
      'Collecte automatique des données depuis vos outils (Jira, Asana, Trello)',
      'Génération de rapports client personnalisés et branded',
      'Dashboard temps réel accessible aux parties prenantes',
      'Alertes automatiques sur risques (budget, délai, qualité)',
      'Reporting consolidé pour management avec KPIs',
      'Envoi automatique selon fréquence choisie'
    ],
    outcomes: {
      timeGained: '5h/semaine',
      improvement: '+90% transparence, -60% temps admin projet',
      quickWin: true
    },
    industries: ['Consulting', 'Agences', 'IT Services', 'Construction'],
    complexity: 'intermediate',
    icon: 'BarChart3' // Lucide React icon
  },
  
  {
    id: 'auto-expense-management',
    title: 'Gestion de Notes de Frais Fluide',
    category: 'automatisation',
    tagline: 'De la photo du reçu au remboursement en 48h',
    scenario: 'Vos employés accumulent les reçus papier pendant des semaines, puis passent 2h à remplir des Excel. La comptabilité passe encore 1h par employé à vérifier, valider, et rembourser. Processus long et frustrant pour tous.',
    whatsPossible: [
      'Photo du reçu → extraction automatique des données (OCR)',
      'Classification automatique des dépenses par catégorie',
      'Vérification de conformité avec politique entreprise',
      'Workflow de validation selon montant',
      'Intégration comptabilité pour paiement automatique',
      'Conformité TVA et nLPD'
    ],
    outcomes: {
      timeGained: '3-4h/employé/mois',
      moneySaved: 'CHF 2\'000-3\'500/mois',
      improvement: '-85% temps de traitement, +95% satisfaction',
      quickWin: true
    },
    industries: ['Tous secteurs', 'Services', 'Consulting'],
    complexity: 'starter',
    icon: 'Wallet' // Lucide React icon
  },
  
  // === CATÉGORIE DÉVELOPPEMENT (3 solutions) ===
  // Couleur : CTA #FF5A00 (Orange)
  
  {
    id: 'dev-custom-dashboard',
    title: 'Dashboard Métier Sur Mesure',
    category: 'developpement',
    tagline: 'Toutes vos métriques critiques en un seul écran',
    scenario: 'Vos données sont dispersées dans 5-10 outils différents (CRM, ERP, analytics, compta). Pour prendre une décision, vous devez ouvrir 8 onglets et compiler manuellement. Impossible d\'avoir une vue d\'ensemble temps réel de votre business.',
    whatsPossible: [
      'Interface web intuitive affichant tous vos KPIs critiques',
      'Connexion à tous vos systèmes existants (APIs, bases de données)',
      'Visualisations interactives adaptées à vos besoins métier',
      'Actualisation en temps réel des données',
      'Accès sécurisé avec permissions par rôle',
      'Export rapports pour présentations clients/investisseurs'
    ],
    outcomes: {
      timeGained: '10-15h/semaine',
      improvement: '+80% rapidité décision, -90% temps de reporting',
      quickWin: false
    },
    industries: ['Tous secteurs', 'Scale-ups', 'Management'],
    complexity: 'advanced',
    icon: 'LayoutDashboard' // Lucide React icon
  },
  
  {
    id: 'dev-customer-portal',
    title: 'Portail Client Self-Service',
    category: 'developpement',
    tagline: 'Vos clients gèrent eux-mêmes, vous économisez du support',
    scenario: 'Vos clients vous appellent 50+ fois par semaine pour des demandes simples : voir leurs commandes, télécharger une facture, modifier leurs infos, suivre un projet. Votre équipe passe 20h par semaine sur ces demandes basiques.',
    whatsPossible: [
      'Portail web personnalisé avec authentification sécurisée',
      'Accès aux commandes, factures, et documents en temps réel',
      'Modification self-service des informations compte',
      'Suivi de projet/service en direct avec statuts',
      'Zone de téléchargement de documents et ressources',
      'Support chat intégré pour questions complexes'
    ],
    outcomes: {
      timeGained: '20h/semaine',
      moneySaved: 'CHF 6\'000-9\'000/mois',
      improvement: '-70% appels support, +45% satisfaction client',
      quickWin: false
    },
    industries: ['Services B2B', 'SaaS', 'Wholesale', 'Manufacturing'],
    complexity: 'advanced',
    icon: 'Globe' // Lucide React icon
  },
  
  {
    id: 'dev-marketplace-integration',
    title: 'Intégration Marketplace Multi-Canal',
    category: 'developpement',
    tagline: 'Vendez partout, gérez depuis un seul endroit',
    scenario: 'Vous vendez sur votre site, Amazon, Galaxus, Digitec, et en magasin. Chaque canal nécessite une gestion séparée : stock, prix, descriptions, commandes. Risque constant de survente ou d\'incohérences. 15h par semaine en synchronisation manuelle.',
    whatsPossible: [
      'Synchronisation bidirectionnelle des stocks temps réel',
      'Gestion centralisée des prix et promotions',
      'Publication automatique des produits sur tous les canaux',
      'Consolidation des commandes dans un tableau de bord unique',
      'Routage intelligent des commandes selon stock/localisation',
      'Analytics cross-canal pour optimiser la stratégie'
    ],
    outcomes: {
      timeGained: '15h/semaine',
      improvement: '-95% risque de survente, +30% CA multi-canal',
      quickWin: false
    },
    industries: ['E-commerce', 'Retail', 'Distribution'],
    complexity: 'advanced',
    icon: 'Store' // Lucide React icon
  },
];

// === HELPERS POUR FILTRAGE ===

export const solutionsByCategory = {
  ia: solutions.filter(s => s.category === 'ia'),
  automatisation: solutions.filter(s => s.category === 'automatisation'),
  developpement: solutions.filter(s => s.category === 'developpement'),
};

export const quickWinSolutions = solutions.filter(s => s.outcomes.quickWin === true);

export const solutionsByIndustry = (industry: string) => {
  return solutions.filter(s => 
    s.industries.some(i => i.toLowerCase().includes(industry.toLowerCase()))
  );
};

export const solutionsByComplexity = (complexity: 'starter' | 'intermediate' | 'advanced') => {
  return solutions.filter(s => s.complexity === complexity);
};

// === STATISTIQUES ===

export const solutionsStats = {
  total: solutions.length,
  quickWins: quickWinSolutions.length,
  byCategory: {
    ia: solutionsByCategory.ia.length,
    automatisation: solutionsByCategory.automatisation.length,
    developpement: solutionsByCategory.developpement.length,
  },
  byComplexity: {
    starter: solutions.filter(s => s.complexity === 'starter').length,
    intermediate: solutions.filter(s => s.complexity === 'intermediate').length,
    advanced: solutions.filter(s => s.complexity === 'advanced').length,
  },
};