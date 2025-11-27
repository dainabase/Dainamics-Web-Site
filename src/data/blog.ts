/**
 * DAINAMICS Blog Data (Version Légère)
 * 6 articles récents/featured uniquement
 * Articles archivés disponibles dans blog-archive.ts
 * Design System: Couleurs catégories alignées
 */

// Types
export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  color: string;
  icon: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categoryId: string;
  authorId: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  featured: boolean;
  tags: string[];
  image?: string;
  metaDescription?: string;
}

// Catégories
export const blogCategories: BlogCategory[] = [
  {
    id: 'strategie-ia',
    name: 'Stratégie IA',
    description: 'Frameworks et approches pour maximiser l\'impact de l\'IA en entreprise',
    slug: 'strategie-ia',
    color: '#7B2FFF',
    icon: 'Brain'
  },
  {
    id: 'automatisation',
    name: 'Automatisation',
    description: 'Guides pratiques pour automatiser vos processus métier',
    slug: 'automatisation',
    color: '#10E4FF',
    icon: 'Zap'
  },
  {
    id: 'cas-clients',
    name: 'Cas Clients',
    description: 'Exemples concrets de déploiements IA réussis en PME',
    slug: 'cas-clients',
    color: '#0AFF9D',
    icon: 'BarChart3'
  },
  {
    id: 'guides',
    name: 'Guides Pratiques',
    description: 'Tutoriels étape par étape pour implémenter l\'IA',
    slug: 'guides',
    color: '#F59E0B',
    icon: 'Lightbulb'
  },
  {
    id: 'tendances',
    name: 'Tendances',
    description: 'Les évolutions à venir en IA et technologies business',
    slug: 'tendances',
    color: '#FF5A00',
    icon: 'Compass'
  },
  {
    id: 'competitivite',
    name: 'Compétitivité',
    description: 'Comment surpasser vos concurrents grâce à l\'IA',
    slug: 'competitivite',
    color: '#EF4444',
    icon: 'Trophy'
  },
  {
    id: 'conformite',
    name: 'Conformité',
    description: 'Réglementation IA, RGPD, LPD et bonnes pratiques légales',
    slug: 'conformite',
    color: '#8B5CF6',
    icon: 'FileText'
  }
];

// Auteurs
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'jean-marie',
    name: 'Jean-Marie',
    role: 'Fondateur DAINAMICS',
    bio: 'Expert en transformation digitale et IA pour PME suisses et européennes.'
  },
  {
    id: 'equipe-dainamics',
    name: 'Équipe DAINAMICS',
    role: 'Experts IA & Automatisation',
    bio: 'L\'équipe DAINAMICS partage son expertise en IA, automatisation et développement.'
  }
];

// Articles récents (6 articles - les plus récents et featured)
export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'ia-service-client-2025',
    title: 'Comment l\'IA Transforme le Service Client en 2025',
    excerpt: 'Découvrez comment les PME suisses obtiennent 70% de réponses plus rapides et 85% de satisfaction client grâce aux agents IA.',
    content: `## L'ère des agents IA conversationnels

Le service client traditionnel fait face à des défis majeurs : temps d'attente, disponibilité limitée, coûts de personnel. Les agents IA changent la donne.

### Les résultats observés chez nos clients

- **-70% de temps de réponse** : Questions fréquentes traitées instantanément
- **+85% de satisfaction client** : Disponibilité 24/7, réponses cohérentes
- **-40% de charge support** : L'équipe se concentre sur les cas complexes

### Exemple : Cabinet juridique genevois

150 demandes/semaine traitées. Après intégration IA multilingue (FR/DE/IT) :
- 80% des demandes automatisées
- Satisfaction client : 92%

### Par où commencer ?

1. Identifiez vos 20 questions les plus fréquentes
2. Préparez une base de connaissances structurée
3. Déployez un MVP en 2-4 semaines
4. Itérez selon les feedbacks`,
    categoryId: 'strategie-ia',
    authorId: 'jean-marie',
    publishedAt: '2025-11-15',
    readTime: 8,
    featured: true,
    tags: ['service-client', 'chatbot', 'ia-conversationnelle', 'pme'],
    metaDescription: 'Comment l\'IA transforme le service client en 2025.'
  },
  {
    id: '2',
    slug: 'case-study-fiduciaire',
    title: 'Cas d\'étude : +37% de Conversion pour une Fiduciaire',
    excerpt: 'Comment l\'automatisation des processus a transformé le pipeline commercial d\'un cabinet comptable genevois.',
    content: `## Le défi initial

Fiduciaire genevoise de 25 employés perdait des opportunités :
- Délai de réponse aux prospects : 48-72h
- Suivi manuel des relances : oublié 1 fois sur 3
- Devis personnalisés : 2h chacun

### La solution déployée

1. **Chatbot qualification** : Pré-qualification 24/7
2. **Automatisation CRM** : Création leads, relances programmées
3. **Générateur de devis IA** : 15 minutes au lieu de 2h

### Résultats après 6 mois

| Métrique | Avant | Après |
|----------|-------|-------|
| Délai réponse | 48h | 2h |
| Taux conversion | 12% | 16.4% |
| Temps/devis | 2h | 15min |

### ROI du projet
- Investissement : 35 000 CHF
- Économies annuelles : 52 000 CHF
- ROI : 8 mois`,
    categoryId: 'cas-clients',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-11-12',
    readTime: 12,
    featured: true,
    tags: ['fiduciaire', 'automatisation', 'crm', 'conversion'],
    metaDescription: 'Cas client : +37% de conversion grâce à l\'automatisation.'
  },
  {
    id: '3',
    slug: 'automatiser-facturation',
    title: 'Guide : Automatiser sa Facturation en 2 Semaines',
    excerpt: 'Étape par étape, comment passer de 12h/mois de facturation manuelle à 0 avec les bons outils.',
    content: `## Pourquoi automatiser la facturation ?

La facturation manuelle coûte cher :
- **12h/mois minimum** pour une PME de 20-50 clients
- **Erreurs fréquentes** : mauvais montants, TVA incorrecte
- **Retards de paiement** : relances oubliées

### Étape 1 : Audit de l'existant (Jour 1-2)
Listez vos processus actuels : sources de données, validations manuelles, cas particuliers.

### Étape 2 : Choix des outils (Jour 3-4)
- **Bexio** : Facturation + Compta intégrée
- **Make/Zapier** : Connecteur entre systèmes

### Étape 3 : Configuration (Jour 5-10)
1. Connectez CRM à Bexio
2. Créez les templates
3. Paramétrez TVA et relances

### Étape 4 : Tests et Go Live (Jour 11-14)

### Résultats typiques
- **12h → 30min/mois** de travail humain
- **Zéro erreur** de calcul
- **95% de paiements à temps**`,
    categoryId: 'guides',
    authorId: 'jean-marie',
    publishedAt: '2025-11-08',
    readTime: 10,
    featured: false,
    tags: ['facturation', 'automatisation', 'bexio', 'guide'],
    metaDescription: 'Guide automatisation facturation en 2 semaines.'
  },
  {
    id: '4',
    slug: 'chatgpt-entreprise',
    title: 'ChatGPT en Entreprise : Risques et Opportunités',
    excerpt: 'Ce que les dirigeants de PME doivent savoir sur l\'utilisation de l\'IA générative au travail.',
    content: `## L'adoption massive de ChatGPT

En 2025, 78% des employés utilisent ChatGPT au travail. Mais cette adoption sauvage pose des risques.

### Les risques à connaître

**1. Confidentialité des données**
Les données dans ChatGPT gratuit peuvent être utilisées pour l'entraînement. Risque RGPD/LPD.

**2. Qualité des réponses**
Hallucinations possibles, informations potentiellement obsolètes.

### Les opportunités

**Productivité**
- Rédaction emails : 3min → 30sec
- Résumés documents : 2h → 10min

### Notre recommandation

1. Formez vos équipes aux bonnes pratiques
2. Définissez une politique d'utilisation claire
3. Déployez une instance privée pour données sensibles

**Solution DAINAMICS** : Instances privées IA hébergées en Suisse.`,
    categoryId: 'strategie-ia',
    authorId: 'jean-marie',
    publishedAt: '2025-11-05',
    readTime: 6,
    featured: false,
    tags: ['chatgpt', 'ia-generative', 'securite', 'rgpd'],
    metaDescription: 'ChatGPT en entreprise : risques et opportunités.'
  },
  {
    id: '5',
    slug: 'erreurs-projet-ia',
    title: 'Les 5 Erreurs à Éviter en Projet IA',
    excerpt: 'Retour d\'expérience : les pièges classiques et comment les contourner.',
    content: `## Erreur #1 : Vouloir tout automatiser d'un coup
Les projets trop ambitieux échouent à 70%. Commencez par UN processus.

## Erreur #2 : Ignorer la qualité des données
Garbage in = Garbage out. Nettoyez et structurez AVANT d'automatiser.

## Erreur #3 : Ne pas impliquer les équipes
65% des projets IT échouent par manque d'adoption. Impliquez dès la conception.

## Erreur #4 : Attendre la perfection
Un système à 80% déployé bat un système parfait jamais lancé.

## Erreur #5 : Sous-estimer la maintenance
Prévoyez 15-20% du budget initial/an.

| Erreur | Solution |
|--------|----------|
| Trop ambitieux | Un processus à la fois |
| Données sales | Nettoyer d'abord |
| Équipes ignorées | Impliquer dès le début |
| Attente perfection | Lancer MVP vite |
| Pas de maintenance | Budgéter 15-20%/an |`,
    categoryId: 'guides',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-11-01',
    readTime: 9,
    featured: false,
    tags: ['projet-ia', 'erreurs', 'bonnes-pratiques', 'transformation'],
    metaDescription: 'Les 5 erreurs fatales en projet IA.'
  },
  {
    id: '6',
    slug: 'roi-automatisation',
    title: 'ROI de l\'Automatisation : Calculez votre Potentiel',
    excerpt: 'Méthodologie pratique pour estimer le retour sur investissement.',
    content: `## La formule du ROI

**ROI = (Économies annuelles - Coût projet) / Coût projet × 100**

### Étape 1 : Identifiez les coûts actuels

**Exemple : Facturation manuelle**
- 12h/mois × 65 CHF/h = 780 CHF/mois
- + Erreurs : ~200 CHF/mois
- Total : 11 760 CHF/an

### Étape 2 : Estimez les économies
Après automatisation : ~100 CHF/mois
**Économie = 10 560 CHF/an**

### Étape 3 : Calculez le ROI
Projet à 8 000 CHF :
**ROI = 32%** - **Délai = 9 mois**

### Nos références

| Type | Investissement | ROI | Délai |
|------|----------------|-----|-------|
| Facturation | 8-12K CHF | 25-40% | 8-12 mois |
| Support IA | 10-15K CHF | 35-50% | 6-10 mois |
| CRM auto | 15-25K CHF | 30-45% | 10-14 mois |`,
    categoryId: 'competitivite',
    authorId: 'jean-marie',
    publishedAt: '2025-10-28',
    readTime: 7,
    featured: false,
    tags: ['roi', 'calcul', 'automatisation', 'business-case'],
    metaDescription: 'Comment calculer le ROI de l\'automatisation.'
  }
];

// Import articles archivés pour les fonctions qui en ont besoin
import { archivedArticles, getArchivedArticleBySlug } from './blog-archive';

// Tous les articles (récents + archivés)
export const getAllArticles = (): BlogArticle[] => {
  return [...blogArticles, ...archivedArticles];
};

// Helper functions
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  // Cherche d'abord dans les récents
  const recent = blogArticles.find(article => article.slug === slug);
  if (recent) return recent;
  // Sinon dans les archives
  return getArchivedArticleBySlug(slug);
};

export const getArticlesByCategory = (categoryId: string): BlogArticle[] => {
  return getAllArticles().filter(article => article.categoryId === categoryId);
};

export const getCategoryById = (id: string): BlogCategory | undefined => {
  return blogCategories.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(category => category.slug === slug);
};

export const getAuthorById = (id: string): BlogAuthor | undefined => {
  return blogAuthors.find(author => author.id === id);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return getAllArticles().filter(article => article.featured);
};

export const getRecentArticles = (count: number = 6): BlogArticle[] => {
  return [...getAllArticles()]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};
