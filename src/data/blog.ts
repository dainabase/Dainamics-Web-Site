/**
 * DAINAMICS Blog Data (Version Ultra-Légère)
 * Métadonnées uniquement - Contenu dans /content/blog/*.md
 * Optimisé pour réduire la consommation de contexte
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

export interface BlogArticleMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
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

// Pour compatibilité avec le code existant
export interface BlogArticle extends BlogArticleMeta {
  content: string;
}

// Catégories
export const blogCategories: BlogCategory[] = [
  { id: 'strategie-ia', name: 'Stratégie IA', description: 'Frameworks et approches pour maximiser l\'impact de l\'IA', slug: 'strategie-ia', color: '#7B2FFF', icon: 'Brain' },
  { id: 'automatisation', name: 'Automatisation', description: 'Guides pratiques pour automatiser vos processus', slug: 'automatisation', color: '#10E4FF', icon: 'Zap' },
  { id: 'cas-clients', name: 'Cas Clients', description: 'Exemples concrets de déploiements IA réussis', slug: 'cas-clients', color: '#0AFF9D', icon: 'BarChart3' },
  { id: 'guides', name: 'Guides Pratiques', description: 'Tutoriels étape par étape', slug: 'guides', color: '#F59E0B', icon: 'Lightbulb' },
  { id: 'tendances', name: 'Tendances', description: 'Évolutions en IA et technologies business', slug: 'tendances', color: '#FF5A00', icon: 'Compass' },
  { id: 'competitivite', name: 'Compétitivité', description: 'Surpasser vos concurrents grâce à l\'IA', slug: 'competitivite', color: '#EF4444', icon: 'Trophy' },
  { id: 'conformite', name: 'Conformité', description: 'Réglementation IA, RGPD, LPD', slug: 'conformite', color: '#8B5CF6', icon: 'FileText' }
];

// Auteurs
export const blogAuthors: BlogAuthor[] = [
  { id: 'jean-marie', name: 'Jean-Marie', role: 'Fondateur DAINAMICS', bio: 'Expert en transformation digitale et IA pour PME suisses et européennes.' },
  { id: 'equipe-dainamics', name: 'Équipe DAINAMICS', role: 'Experts IA & Automatisation', bio: 'L\'équipe DAINAMICS partage son expertise en IA, automatisation et développement.' }
];

// Métadonnées des articles (contenu chargé dynamiquement depuis /content/blog/)
export const blogArticlesMeta: BlogArticleMeta[] = [
  { id: '1', slug: 'ia-service-client-2025', title: 'Comment l\'IA Transforme le Service Client en 2025', excerpt: 'Découvrez comment les PME suisses obtiennent 70% de réponses plus rapides et 85% de satisfaction client grâce aux agents IA.', categoryId: 'strategie-ia', authorId: 'jean-marie', publishedAt: '2025-11-15', readTime: 8, featured: true, tags: ['service-client', 'chatbot', 'ia-conversationnelle', 'pme'], metaDescription: 'Comment l\'IA transforme le service client en 2025.' },
  { id: '2', slug: 'case-study-fiduciaire', title: 'Cas d\'étude : +37% de Conversion pour une Fiduciaire', excerpt: 'Comment l\'automatisation des processus a transformé le pipeline commercial d\'un cabinet comptable genevois.', categoryId: 'cas-clients', authorId: 'equipe-dainamics', publishedAt: '2025-11-12', readTime: 12, featured: true, tags: ['fiduciaire', 'automatisation', 'crm', 'conversion'], metaDescription: 'Cas client : +37% de conversion grâce à l\'automatisation.' },
  { id: '3', slug: 'automatiser-facturation', title: 'Guide : Automatiser sa Facturation en 2 Semaines', excerpt: 'Étape par étape, comment passer de 12h/mois de facturation manuelle à 0 avec les bons outils.', categoryId: 'guides', authorId: 'jean-marie', publishedAt: '2025-11-08', readTime: 10, featured: false, tags: ['facturation', 'automatisation', 'bexio', 'guide'], metaDescription: 'Guide automatisation facturation en 2 semaines.' },
  { id: '4', slug: 'chatgpt-entreprise', title: 'ChatGPT en Entreprise : Risques et Opportunités', excerpt: 'Ce que les dirigeants de PME doivent savoir sur l\'utilisation de l\'IA générative au travail.', categoryId: 'strategie-ia', authorId: 'jean-marie', publishedAt: '2025-11-05', readTime: 6, featured: false, tags: ['chatgpt', 'ia-generative', 'securite', 'rgpd'], metaDescription: 'ChatGPT en entreprise : risques et opportunités.' },
  { id: '5', slug: 'erreurs-projet-ia', title: 'Les 5 Erreurs à Éviter en Projet IA', excerpt: 'Retour d\'expérience : les pièges classiques et comment les contourner.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-01', readTime: 9, featured: false, tags: ['projet-ia', 'erreurs', 'bonnes-pratiques', 'transformation'], metaDescription: 'Les 5 erreurs fatales en projet IA.' },
  { id: '6', slug: 'roi-automatisation', title: 'ROI de l\'Automatisation : Calculez votre Potentiel', excerpt: 'Méthodologie pratique pour estimer le retour sur investissement.', categoryId: 'competitivite', authorId: 'jean-marie', publishedAt: '2025-10-28', readTime: 7, featured: false, tags: ['roi', 'calcul', 'automatisation', 'business-case'], metaDescription: 'Comment calculer le ROI de l\'automatisation.' },
  { id: '7', slug: 'tendances-ia-2025', title: 'Tendances IA 2025 : Ce qui Change pour les PME', excerpt: 'Les 5 évolutions majeures en intelligence artificielle qui impactent directement les PME.', categoryId: 'tendances', authorId: 'equipe-dainamics', publishedAt: '2025-10-20', readTime: 8, featured: false, tags: ['tendances', '2025', 'ia-generative', 'predictions'], metaDescription: 'Les 5 tendances IA 2025 pour les PME.' },
  { id: '8', slug: 'choisir-outil-automatisation', title: 'Zapier, Make ou n8n : Quel Outil Choisir ?', excerpt: 'Comparatif complet des 3 outils d\'automatisation leaders pour les PME suisses.', categoryId: 'automatisation', authorId: 'jean-marie', publishedAt: '2025-10-15', readTime: 7, featured: false, tags: ['zapier', 'make', 'n8n', 'comparatif', 'outils'], metaDescription: 'Zapier vs Make vs n8n : comparatif complet.' },
  { id: '9', slug: 'extraction-documents-ia', title: 'Extraction de Documents par IA : Guide Complet', excerpt: 'Comment automatiser l\'extraction de données depuis vos factures, bons de commande et contrats.', categoryId: 'automatisation', authorId: 'equipe-dainamics', publishedAt: '2025-10-10', readTime: 9, featured: false, tags: ['ocr', 'extraction', 'documents', 'factures'], metaDescription: 'Guide extraction documents par IA.' },
  { id: '10', slug: 'pme-suisse-ia-avantage', title: 'PME Suisses : L\'IA comme Avantage Compétitif', excerpt: 'Comment les PME suisses peuvent tirer parti de l\'IA pour surpasser leurs concurrents.', categoryId: 'competitivite', authorId: 'jean-marie', publishedAt: '2025-10-05', readTime: 8, featured: false, tags: ['pme', 'suisse', 'competitivite', 'strategie'], metaDescription: 'PME suisses et IA comme avantage compétitif.' },
  { id: '11', slug: 'deepseek-impact-budget-ia-pme', title: 'DeepSeek : Ce que ça Change pour votre Budget IA', excerpt: 'Le modèle chinois DeepSeek-R1 a été entraîné pour 6M$ au lieu de 100M$. Implications pour les PME.', categoryId: 'tendances', authorId: 'jean-marie', publishedAt: '2025-01-25', readTime: 7, featured: true, tags: ['deepseek', 'open-source', 'budget', 'llm'], metaDescription: 'DeepSeek change l\'économie de l\'IA.' },
  { id: '12', slug: 'pratiques-ia-illegales-eu-ai-act', title: '7 Pratiques IA Maintenant Illégales dans l\'UE', excerpt: 'L\'EU AI Act est entré en vigueur. Votre entreprise est-elle conforme ?', categoryId: 'conformite', authorId: 'equipe-dainamics', publishedAt: '2025-02-05', readTime: 9, featured: true, tags: ['eu-ai-act', 'conformite', 'rgpd', 'reglementation'], metaDescription: 'EU AI Act : 7 pratiques IA interdites.' },
  { id: '13', slug: 'reglementation-ia-suisse-pme', title: 'Réglementation IA Suisse : Ce que les PME Doivent Savoir', excerpt: 'La Suisse a choisi une approche sectorielle. Décryptage.', categoryId: 'conformite', authorId: 'jean-marie', publishedAt: '2025-02-15', readTime: 8, featured: false, tags: ['suisse', 'lpd', 'reglementation', 'finma'], metaDescription: 'Réglementation IA en Suisse pour PME.' },
  { id: '14', slug: 'llama-4-ia-entreprise-propre-materiel', title: 'Llama 4 : L\'IA Enterprise sur Votre Propre Matériel', excerpt: 'Meta a sorti Llama 4 avec des performances GPT-4 sur un seul GPU.', categoryId: 'strategie-ia', authorId: 'equipe-dainamics', publishedAt: '2025-04-10', readTime: 8, featured: false, tags: ['llama', 'open-source', 'meta', 'hebergement'], metaDescription: 'Llama 4 : performances GPT-4 sur votre matériel.' },
  { id: '15', slug: 'workflows-multi-agents-automatisation', title: 'Workflows Multi-Agents : L\'Automatisation du Futur', excerpt: 'Google a lancé le protocole A2A. Comment les agents IA collaborent.', categoryId: 'automatisation', authorId: 'jean-marie', publishedAt: '2025-05-05', readTime: 10, featured: false, tags: ['multi-agents', 'a2a', 'orchestration', 'workflows'], metaDescription: 'Workflows multi-agents pour automatisation.' },
  { id: '16', slug: 'ia-raisonnement-vs-chatbot-quand-utiliser', title: 'IA de Raisonnement vs Chatbots : Quand Utiliser Quoi ?', excerpt: 'OpenAI o3, Claude avec réflexion... Guide pour choisir.', categoryId: 'strategie-ia', authorId: 'equipe-dainamics', publishedAt: '2025-04-20', readTime: 8, featured: false, tags: ['raisonnement', 'chatbot', 'o3', 'gpt-4'], metaDescription: 'IA raisonnement vs chatbots : guide de choix.' }
];

// Fonction pour charger le contenu d'un article (à implémenter côté composant)
export const getContentPath = (slug: string): string => `/content/blog/${slug}.md`;

// Helper functions
export const getCategoryById = (id: string): BlogCategory | undefined => 
  blogCategories.find(c => c.id === id);

export const getCategoryBySlug = (slug: string): BlogCategory | undefined => 
  blogCategories.find(c => c.slug === slug);

export const getAuthorById = (id: string): BlogAuthor | undefined => 
  blogAuthors.find(a => a.id === id);

export const getArticleMetaBySlug = (slug: string): BlogArticleMeta | undefined => 
  blogArticlesMeta.find(a => a.slug === slug);

export const getArticlesByCategory = (categoryId: string): BlogArticleMeta[] => 
  blogArticlesMeta.filter(a => a.categoryId === categoryId);

export const getFeaturedArticles = (): BlogArticleMeta[] => 
  blogArticlesMeta.filter(a => a.featured);

export const getRecentArticles = (count: number = 6): BlogArticleMeta[] => 
  [...blogArticlesMeta]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);

// Compatibilité avec ancien code (deprecated - à migrer)
export const blogArticles = blogArticlesMeta;
export const getArticleBySlug = getArticleMetaBySlug;
