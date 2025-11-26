export interface Metric {
  value: string;
  label: string;
}

export interface Realisation {
  id: string;
  title: string;
  industry: string;
  country: string;
  employees: string;
  problem: string;
  solution: string;
  metrics: Metric[];
  quote: string;
  quoteName: string;
  quoteRole: string;
  tags: string[];
  image?: string;
}

export const realisations: Realisation[] = [
  {
    id: 'immo-suisse',
    title: 'PME Immobilière',
    industry: 'Immobilier',
    country: 'Suisse',
    employees: '45 employés',
    problem: 'Facturation manuelle de 80 locataires chaque mois. 12 heures de travail administratif. Retards de paiement fréquents.',
    solution: 'Plateforme automatisée avec génération de factures, envoi automatique et portail locataires.',
    metrics: [
      { value: '12h → 0', label: 'par mois' },
      { value: '95%', label: 'paiements à temps' },
      { value: '3 mois', label: 'ROI atteint' }
    ],
    quote: "On facturait à 60% à temps avant. Maintenant c'est 95%. Et on a récupéré 20h/semaine pour développer le business.",
    quoteName: 'Marc R.',
    quoteRole: 'Directeur',
    tags: ['facturation', 'immobilier']
  },
  {
    id: 'juridique-suisse',
    title: 'Services Juridiques',
    industry: 'Services',
    country: 'Suisse',
    employees: '25 employés',
    problem: '150 demandes clients par semaine saturant le support. Chaque demande = 15-30 min à traiter.',
    solution: 'Assistant IA multilingue (FR/DE/IT) connecté à une base de connaissance de 500+ documents.',
    metrics: [
      { value: '-70%', label: 'charge support' },
      { value: '+40%', label: 'satisfaction client' },
      { value: '35K€/an', label: 'économisés' }
    ],
    quote: "L'assistant traite 80% de nos demandes. Notre équipe se concentre enfin sur les cas complexes.",
    quoteName: 'Sophie M.',
    quoteRole: 'Directrice Opérations',
    tags: ['support', 'services']
  },
  {
    id: 'manufacturing-allemagne',
    title: 'Atelier Manufacturier',
    industry: 'Manufacturing',
    country: 'Allemagne',
    employees: '60 employés',
    problem: '200 bons de livraison à traiter par mois. 15 heures de saisie manuelle. Erreurs fréquentes.',
    solution: "Système d'extraction automatique avec OCR et validation intelligente. Export vers ERP.",
    metrics: [
      { value: '15h → 30min', label: 'par mois' },
      { value: '-95%', label: 'erreurs saisie' },
      { value: '2 mois', label: 'ROI atteint' }
    ],
    quote: "Le système traite nos bons en quelques secondes. On ne fait plus d'erreurs de saisie.",
    quoteName: 'Klaus W.',
    quoteRole: 'Responsable Logistique',
    tags: ['documents', 'manufacturing']
  },
  {
    id: 'production-suisse',
    title: 'PME Production',
    industry: 'Production',
    country: 'Suisse',
    employees: '80 employés',
    problem: '40K€/an perdus en stock dormant et ruptures. Commandes basées sur l\'expérience, pas les données.',
    solution: 'Système de prédiction de demande basé sur l\'historique, la saisonnalité et les tendances.',
    metrics: [
      { value: '-25%', label: 'stock dormant' },
      { value: '-60%', label: 'ruptures' },
      { value: '30K€/an', label: 'économisés' }
    ],
    quote: "On commandait au feeling. Maintenant le système nous dit exactement quoi commander et quand.",
    quoteName: 'Jean-Pierre L.',
    quoteRole: 'Directeur Supply Chain',
    tags: ['stocks', 'production']
  },
  {
    id: 'construction-france',
    title: 'Entreprise Construction',
    industry: 'Construction',
    country: 'France',
    employees: '120 employés',
    problem: 'Planning chantiers sur Excel. Communication bureau-terrain difficile. Retards fréquents.',
    solution: 'Plateforme sur-mesure : planning, ressources, suivi temps réel, app mobile terrain.',
    metrics: [
      { value: '-30%', label: 'retards chantiers' },
      { value: '+40%', label: 'productivité admin' },
      { value: 'Temps réel', label: 'visibilité' }
    ],
    quote: "On a enfin une vision claire de tous nos chantiers. Les équipes terrain ont l'app, tout est synchronisé.",
    quoteName: 'Philippe D.',
    quoteRole: 'Directeur Travaux',
    tags: ['processus', 'construction']
  },
  {
    id: 'ecommerce-france',
    title: 'E-commerce Mode',
    industry: 'E-commerce',
    country: 'France',
    employees: '35 employés',
    problem: 'Support client multilingue saturé. Clients internationaux mal servis. Délais de réponse longs.',
    solution: 'Chatbot IA multilingue (FR/EN/DE) intégré au site. Escalade intelligente vers humains.',
    metrics: [
      { value: '24/7', label: 'disponibilité' },
      { value: '-60%', label: 'charge support' },
      { value: '4 mois', label: 'ROI atteint' }
    ],
    quote: "Nos clients internationaux sont servis instantanément. La satisfaction a bondi.",
    quoteName: 'Marie C.',
    quoteRole: 'Directrice E-commerce',
    tags: ['support', 'ecommerce']
  }
];

export const problemFilters = [
  { value: 'all', label: 'Tous' },
  { value: 'facturation', label: 'Facturation' },
  { value: 'support', label: 'Support' },
  { value: 'documents', label: 'Documents' },
  { value: 'stocks', label: 'Stocks' },
  { value: 'processus', label: 'Processus' }
];

export const industryFilters = [
  { value: 'all', label: 'Toutes' },
  { value: 'Services', label: 'Services' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Immobilier', label: 'Immobilier' },
  { value: 'Construction', label: 'Construction' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Production', label: 'Production' }
];
