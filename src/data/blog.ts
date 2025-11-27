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
  { id: 'bob', name: 'Bob', role: 'Fondateur DAINAMICS', bio: 'Expert en transformation digitale et IA pour PME suisses et européennes.' },
  { id: 'equipe-dainamics', name: 'Équipe DAINAMICS', role: 'Experts IA & Automatisation', bio: 'L\'équipe DAINAMICS partage son expertise en IA, automatisation et développement.' }
];

// Métadonnées des articles (contenu chargé dynamiquement depuis /content/blog/)
export const blogArticlesMeta: BlogArticleMeta[] = [
  // Articles originaux (id 1-16)
  { id: '1', slug: 'ia-service-client-2025', title: 'Comment l\'IA Transforme le Service Client en 2025', excerpt: 'Découvrez comment les PME suisses obtiennent 70% de réponses plus rapides et 85% de satisfaction client grâce aux agents IA.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-15', readTime: 8, featured: true, tags: ['service-client', 'chatbot', 'ia-conversationnelle', 'pme'], metaDescription: 'Comment l\'IA transforme le service client en 2025.' },
  { id: '2', slug: 'case-study-fiduciaire', title: 'Cas d\'étude : +37% de Conversion pour une Fiduciaire', excerpt: 'Comment l\'automatisation des processus a transformé le pipeline commercial d\'un cabinet comptable genevois.', categoryId: 'cas-clients', authorId: 'equipe-dainamics', publishedAt: '2025-11-12', readTime: 12, featured: true, tags: ['fiduciaire', 'automatisation', 'crm', 'conversion'], metaDescription: 'Cas client : +37% de conversion grâce à l\'automatisation.' },
  { id: '3', slug: 'automatiser-facturation', title: 'Guide : Automatiser sa Facturation en 2 Semaines', excerpt: 'Étape par étape, comment passer de 12h/mois de facturation manuelle à 0 avec les bons outils.', categoryId: 'guides', authorId: 'bob', publishedAt: '2025-11-08', readTime: 10, featured: false, tags: ['facturation', 'automatisation', 'bexio', 'guide'], metaDescription: 'Guide automatisation facturation en 2 semaines.' },
  { id: '4', slug: 'chatgpt-entreprise', title: 'ChatGPT en Entreprise : Risques et Opportunités', excerpt: 'Ce que les dirigeants de PME doivent savoir sur l\'utilisation de l\'IA générative au travail.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-05', readTime: 6, featured: false, tags: ['chatgpt', 'ia-generative', 'securite', 'rgpd'], metaDescription: 'ChatGPT en entreprise : risques et opportunités.' },
  { id: '5', slug: 'erreurs-projet-ia', title: 'Les 5 Erreurs à Éviter en Projet IA', excerpt: 'Retour d\'expérience : les pièges classiques et comment les contourner.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-01', readTime: 9, featured: false, tags: ['projet-ia', 'erreurs', 'bonnes-pratiques', 'transformation'], metaDescription: 'Les 5 erreurs fatales en projet IA.' },
  { id: '6', slug: 'roi-automatisation', title: 'ROI de l\'Automatisation : Calculez votre Potentiel', excerpt: 'Méthodologie pratique pour estimer le retour sur investissement.', categoryId: 'competitivite', authorId: 'bob', publishedAt: '2025-10-28', readTime: 7, featured: false, tags: ['roi', 'calcul', 'automatisation', 'business-case'], metaDescription: 'Comment calculer le ROI de l\'automatisation.' },
  { id: '7', slug: 'tendances-ia-2025', title: 'Tendances IA 2025 : Ce qui Change pour les PME', excerpt: 'Les 5 évolutions majeures en intelligence artificielle qui impactent directement les PME.', categoryId: 'tendances', authorId: 'equipe-dainamics', publishedAt: '2025-10-20', readTime: 8, featured: false, tags: ['tendances', '2025', 'ia-generative', 'predictions'], metaDescription: 'Les 5 tendances IA 2025 pour les PME.' },
  { id: '8', slug: 'choisir-outil-automatisation', title: 'Zapier, Make ou n8n : Quel Outil Choisir ?', excerpt: 'Comparatif complet des 3 outils d\'automatisation leaders pour les PME suisses.', categoryId: 'automatisation', authorId: 'bob', publishedAt: '2025-10-15', readTime: 7, featured: false, tags: ['zapier', 'make', 'n8n', 'comparatif', 'outils'], metaDescription: 'Zapier vs Make vs n8n : comparatif complet.' },
  { id: '9', slug: 'extraction-documents-ia', title: 'Extraction de Documents par IA : Guide Complet', excerpt: 'Comment automatiser l\'extraction de données depuis vos factures, bons de commande et contrats.', categoryId: 'automatisation', authorId: 'equipe-dainamics', publishedAt: '2025-10-10', readTime: 9, featured: false, tags: ['ocr', 'extraction', 'documents', 'factures'], metaDescription: 'Guide extraction documents par IA.' },
  { id: '10', slug: 'pme-suisse-ia-avantage', title: 'PME Suisses : L\'IA comme Avantage Compétitif', excerpt: 'Comment les PME suisses peuvent tirer parti de l\'IA pour surpasser leurs concurrents.', categoryId: 'competitivite', authorId: 'bob', publishedAt: '2025-10-05', readTime: 8, featured: false, tags: ['pme', 'suisse', 'competitivite', 'strategie'], metaDescription: 'PME suisses et IA comme avantage compétitif.' },
  { id: '11', slug: 'deepseek-impact-budget-ia-pme', title: 'DeepSeek : Ce que ça Change pour votre Budget IA', excerpt: 'Le modèle chinois DeepSeek-R1 a été entraîné pour 6M$ au lieu de 100M$. Implications pour les PME.', categoryId: 'tendances', authorId: 'bob', publishedAt: '2025-01-25', readTime: 7, featured: true, tags: ['deepseek', 'open-source', 'budget', 'llm'], metaDescription: 'DeepSeek change l\'économie de l\'IA.' },
  { id: '12', slug: 'pratiques-ia-illegales-eu-ai-act', title: '7 Pratiques IA Maintenant Illégales dans l\'UE', excerpt: 'L\'EU AI Act est entré en vigueur. Votre entreprise est-elle conforme ?', categoryId: 'conformite', authorId: 'equipe-dainamics', publishedAt: '2025-02-05', readTime: 9, featured: true, tags: ['eu-ai-act', 'conformite', 'rgpd', 'reglementation'], metaDescription: 'EU AI Act : 7 pratiques IA interdites.' },
  { id: '13', slug: 'reglementation-ia-suisse-pme', title: 'Réglementation IA Suisse : Ce que les PME Doivent Savoir', excerpt: 'La Suisse a choisi une approche sectorielle. Décryptage.', categoryId: 'conformite', authorId: 'bob', publishedAt: '2025-02-15', readTime: 8, featured: false, tags: ['suisse', 'lpd', 'reglementation', 'finma'], metaDescription: 'Réglementation IA en Suisse pour PME.' },
  { id: '14', slug: 'llama-4-ia-entreprise-propre-materiel', title: 'Llama 4 : L\'IA Enterprise sur Votre Propre Matériel', excerpt: 'Meta a sorti Llama 4 avec des performances GPT-4 sur un seul GPU.', categoryId: 'strategie-ia', authorId: 'equipe-dainamics', publishedAt: '2025-04-10', readTime: 8, featured: false, tags: ['llama', 'open-source', 'meta', 'hebergement'], metaDescription: 'Llama 4 : performances GPT-4 sur votre matériel.' },
  { id: '15', slug: 'workflows-multi-agents-automatisation', title: 'Workflows Multi-Agents : L\'Automatisation du Futur', excerpt: 'Google a lancé le protocole A2A. Comment les agents IA collaborent.', categoryId: 'automatisation', authorId: 'bob', publishedAt: '2025-05-05', readTime: 10, featured: false, tags: ['multi-agents', 'a2a', 'orchestration', 'workflows'], metaDescription: 'Workflows multi-agents pour automatisation.' },
  { id: '16', slug: 'ia-raisonnement-vs-chatbot-quand-utiliser', title: 'IA de Raisonnement vs Chatbots : Quand Utiliser Quoi ?', excerpt: 'OpenAI o3, Claude avec réflexion... Guide pour choisir.', categoryId: 'strategie-ia', authorId: 'equipe-dainamics', publishedAt: '2025-04-20', readTime: 8, featured: false, tags: ['raisonnement', 'chatbot', 'o3', 'gpt-4'], metaDescription: 'IA raisonnement vs chatbots : guide de choix.' },
  // Batch 2 - Novembre 2025 (id 17-29)
  { id: '17', slug: 'ai-research-assistants-vs-humains', title: 'Assistants de Recherche IA vs Humains : Quand Utiliser Quoi ?', excerpt: 'ChatGPT Deep Research, Perplexity Pro, Gemini... Guide pour déléguer efficacement la recherche.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-20', readTime: 10, featured: true, tags: ['recherche', 'perplexity', 'deep-research', 'veille'], metaDescription: 'Assistants recherche IA vs humains : guide pratique.' },
  { id: '18', slug: 'github-copilot-vs-claude-code', title: 'GitHub Copilot vs Claude Code vs Cursor : Comparatif 2025', excerpt: 'Comparatif complet des outils d\'assistance au code pour développeurs et équipes tech.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-19', readTime: 11, featured: true, tags: ['copilot', 'claude-code', 'cursor', 'developpement'], metaDescription: 'GitHub Copilot vs Claude Code vs Cursor : comparatif.' },
  { id: '19', slug: 'ia-cloud-vs-on-premise-analyse-couts', title: 'IA Cloud vs Infrastructure Propre : Analyse des Coûts', excerpt: 'Quand l\'hébergement local devient plus rentable que les API cloud ? Calculs détaillés.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-18', readTime: 12, featured: false, tags: ['cloud', 'on-premise', 'couts', 'infrastructure'], metaDescription: 'Cloud vs on-premise pour l\'IA : analyse coûts.' },
  { id: '20', slug: 'agents-ia-autonomes-applications-pme', title: 'Agents IA Autonomes : Applications Pratiques pour PME', excerpt: 'Claude 4 peut travailler 7 heures en autonomie. Comment en tirer parti ?', categoryId: 'automatisation', authorId: 'equipe-dainamics', publishedAt: '2025-11-17', readTime: 11, featured: true, tags: ['agents', 'autonomie', 'claude-4', 'automatisation'], metaDescription: 'Agents IA autonomes : applications PME.' },
  { id: '21', slug: 'privacy-first-ia-confiance-client', title: 'Privacy-First IA : Gagner la Confiance Client', excerpt: 'Comment le traitement local des données devient un avantage commercial pour les PME suisses.', categoryId: 'conformite', authorId: 'bob', publishedAt: '2025-11-16', readTime: 11, featured: false, tags: ['privacy', 'confiance', 'local', 'souverainete'], metaDescription: 'Privacy-first IA : avantage confiance client.' },
  { id: '22', slug: 'fiabilite-ia-quand-faire-confiance', title: 'Fiabilité IA : Quand Faire Confiance aux Outputs ?', excerpt: 'GPT-5 promet 45% moins d\'hallucinations. Guide pour évaluer la fiabilité des réponses IA.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-14', readTime: 10, featured: false, tags: ['fiabilite', 'hallucinations', 'gpt-5', 'validation'], metaDescription: 'Fiabilité IA : guide pour évaluer les outputs.' },
  { id: '23', slug: 'apertus-llm-suisse-guide-pme', title: 'Apertus : Guide du LLM 100% Suisse pour PME', excerpt: 'Premier modèle de langage suisse avec support natif du suisse-allemand et du romanche.', categoryId: 'tendances', authorId: 'bob', publishedAt: '2025-11-13', readTime: 10, featured: true, tags: ['apertus', 'suisse', 'llm', 'souverainete'], metaDescription: 'Apertus LLM suisse : guide pour PME.' },
  { id: '24', slug: 'creer-premier-employe-ia-guide', title: 'Guide : Créer votre Premier Employé IA', excerpt: 'De la définition du périmètre au déploiement : méthodologie complète pour un agent IA autonome.', categoryId: 'guides', authorId: 'bob', publishedAt: '2025-11-22', readTime: 14, featured: true, tags: ['employe-ia', 'agent', 'automatisation', 'workflow'], metaDescription: 'Guide création premier employé IA.' },
  { id: '25', slug: 'agentkit-openai-guide-no-code', title: 'AgentKit OpenAI : Créer des Agents IA sans Code', excerpt: 'Tutoriel pas à pas pour construire des agents IA avec la nouvelle plateforme no-code d\'OpenAI.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-21', readTime: 12, featured: false, tags: ['agentkit', 'no-code', 'openai', 'agents'], metaDescription: 'AgentKit OpenAI : guide création agents no-code.' },
  { id: '26', slug: 'economie-ia-modeles-moins-chers', title: 'Économie IA : Quand les Modèles Moins Chers Suffisent', excerpt: 'Claude Haiku à 1$/M tokens surpasse souvent GPT-4. Guide pour optimiser vos coûts IA.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-23', readTime: 11, featured: false, tags: ['economie', 'haiku', 'couts', 'optimisation'], metaDescription: 'Économie IA : optimiser avec modèles moins chers.' },
  { id: '27', slug: 'microsoft-copilot-ignite-2025-pme', title: 'Microsoft Copilot après Ignite 2025 : Impact pour les PME', excerpt: 'Work IQ, Agent 365, Computer Use... Décryptage des annonces et implications pratiques.', categoryId: 'tendances', authorId: 'equipe-dainamics', publishedAt: '2025-11-24', readTime: 11, featured: false, tags: ['microsoft', 'copilot', 'ignite', 'office'], metaDescription: 'Microsoft Copilot Ignite 2025 : impact PME.' },
  { id: '28', slug: 'digital-omnibus-rgpd-changements', title: 'Digital Omnibus : Ce qui Pourrait Changer pour le RGPD', excerpt: 'La proposition européenne pourrait alléger les obligations. Analyse prudente.', categoryId: 'conformite', authorId: 'bob', publishedAt: '2025-11-25', readTime: 10, featured: false, tags: ['rgpd', 'digital-omnibus', 'conformite', 'europe'], metaDescription: 'Digital Omnibus : changements potentiels RGPD.' },
  { id: '29', slug: 'assistants-code-ia-comparatif-2025', title: 'Assistants de Code IA : État de l\'Art Novembre 2025', excerpt: 'SWE-bench à 80%+, agents autonomes... Le point complet sur les outils de développement IA.', categoryId: 'tendances', authorId: 'equipe-dainamics', publishedAt: '2025-11-26', readTime: 11, featured: true, tags: ['code', 'swe-bench', 'developpement', 'outils'], metaDescription: 'Assistants code IA : comparatif novembre 2025.' },
  // Batch 3-5 - Novembre 2025 (id 30-43)
  { id: '30', slug: 'strategie-ia-2026-planification', title: 'Stratégie IA 2026 : Planifier votre Transformation', excerpt: '2026 sera l\'année de la maturité IA. Échéances réglementaires, évolutions technologiques et budgets.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-18', readTime: 11, featured: false, tags: ['strategie', 'planification', '2026', 'budget'], metaDescription: 'Stratégie IA 2026 : planification et budget.' },
  { id: '31', slug: 'agents-ia-echecs-gartner-realite', title: 'Agents IA : Pourquoi 40% des Projets Échouent selon Gartner', excerpt: 'Gartner prédit 40% d\'échecs. Analyse des causes et framework pour réussir vos projets agents.', categoryId: 'strategie-ia', authorId: 'equipe-dainamics', publishedAt: '2025-11-19', readTime: 12, featured: true, tags: ['agents', 'gartner', 'echecs', 'bonnes-pratiques'], metaDescription: 'Agents IA : pourquoi 40% échouent selon Gartner.' },
  { id: '32', slug: 'guide-complet-automatisation-2025', title: 'Guide Complet des Plateformes d\'Automatisation 2025', excerpt: 'Zapier vs Make vs n8n vs Power Automate : comparatif exhaustif avec tarifs et recommandations.', categoryId: 'automatisation', authorId: 'bob', publishedAt: '2025-11-27', readTime: 14, featured: true, tags: ['zapier', 'make', 'n8n', 'power-automate', 'comparatif'], metaDescription: 'Guide complet plateformes automatisation 2025.' },
  { id: '33', slug: 'calculateur-roi-ia-pme', title: 'Calculateur ROI IA : Méthodologie Complète pour PME', excerpt: 'Formules, exemples chiffrés et template pour calculer le retour sur investissement de vos projets IA.', categoryId: 'competitivite', authorId: 'bob', publishedAt: '2025-11-27', readTime: 12, featured: true, tags: ['roi', 'calcul', 'business-case', 'investissement'], metaDescription: 'Calculateur ROI IA pour PME suisses.' },
  { id: '34', slug: 'ecosysteme-ia-suisse-ressources', title: 'Écosystème IA Suisse : Ressources et Opportunités', excerpt: 'Cartographie complète : institutions, startups, financements et communautés IA en Suisse.', categoryId: 'tendances', authorId: 'equipe-dainamics', publishedAt: '2025-11-27', readTime: 11, featured: false, tags: ['suisse', 'ecosysteme', 'startups', 'financement'], metaDescription: 'Écosystème IA suisse : ressources complètes.' },
  { id: '35', slug: 'gpai-compliance-checklist-2026', title: 'GPAI Compliance : Checklist pour Août 2026', excerpt: 'Préparez-vous aux obligations EU AI Act sur les modèles d\'IA à usage général. 9 étapes en 9 mois.', categoryId: 'conformite', authorId: 'bob', publishedAt: '2025-11-27', readTime: 10, featured: true, tags: ['gpai', 'eu-ai-act', 'conformite', 'checklist'], metaDescription: 'GPAI compliance checklist août 2026.' },
  { id: '36', slug: 'culture-ia-formation-equipes', title: 'Culture IA : Former vos Équipes à l\'AI Literacy', excerpt: 'Programme de formation conforme EU AI Act article 4. 4 niveaux, du débutant à l\'expert.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-27', readTime: 10, featured: false, tags: ['formation', 'ai-literacy', 'culture', 'equipes'], metaDescription: 'Formation équipes AI literacy EU AI Act.' },
  { id: '37', slug: 'ia-secteur-juridique-suisse', title: 'IA dans le Secteur Juridique Suisse : État des Lieux', excerpt: 'Adoption, cas d\'usage, outils et enjeux déontologiques pour cabinets d\'avocats et études.', categoryId: 'cas-clients', authorId: 'bob', publishedAt: '2025-11-28', readTime: 11, featured: false, tags: ['juridique', 'avocats', 'legaltech', 'deontologie'], metaDescription: 'IA secteur juridique suisse : guide complet.' },
  { id: '38', slug: 'ia-manufacturing-qualite-maintenance', title: 'IA Manufacturing : Contrôle Qualité et Maintenance Prédictive', excerpt: 'Vision par ordinateur et IoT pour l\'industrie. ROI, cas d\'usage et guide d\'implémentation.', categoryId: 'cas-clients', authorId: 'equipe-dainamics', publishedAt: '2025-11-28', readTime: 12, featured: false, tags: ['manufacturing', 'qualite', 'maintenance-predictive', 'industrie'], metaDescription: 'IA manufacturing : qualité et maintenance prédictive.' },
  { id: '39', slug: 'ia-services-financiers-finma', title: 'IA Services Financiers : Guidelines FINMA et Implémentation', excerpt: 'Conformité, cas d\'usage et bonnes pratiques pour banques, assurances et fintechs suisses.', categoryId: 'conformite', authorId: 'bob', publishedAt: '2025-11-28', readTime: 11, featured: false, tags: ['finma', 'finance', 'banque', 'assurance'], metaDescription: 'IA services financiers FINMA : guide conformité.' },
  { id: '40', slug: 'ai-readiness-assessment-10-questions', title: 'AI Readiness Assessment : 10 Questions Avant Votre Projet', excerpt: 'Test de maturité IA avec scoring. Évaluez si votre organisation est prête pour l\'IA.', categoryId: 'guides', authorId: 'bob', publishedAt: '2025-11-28', readTime: 10, featured: true, tags: ['assessment', 'maturite', 'preparation', 'checklist'], metaDescription: 'AI Readiness Assessment : 10 questions essentielles.' },
  { id: '41', slug: 'make-ai-agents-tutoriel', title: 'Make.com AI Agents : Tutoriel Step-by-Step', excerpt: 'Créez un agent de qualification de leads avec Make.com. Guide no-code complet.', categoryId: 'guides', authorId: 'equipe-dainamics', publishedAt: '2025-11-28', readTime: 14, featured: false, tags: ['make', 'agents', 'tutoriel', 'no-code'], metaDescription: 'Make.com AI Agents : tutoriel création agents.' },
  { id: '42', slug: 'power-automate-desktop-sans-api', title: 'Power Automate Desktop : Automatiser Sans API', excerpt: 'RPA pour applications legacy. Tutoriel saisie ERP automatisée sans développement.', categoryId: 'automatisation', authorId: 'equipe-dainamics', publishedAt: '2025-11-28', readTime: 12, featured: false, tags: ['power-automate', 'rpa', 'desktop', 'legacy'], metaDescription: 'Power Automate Desktop : automatisation RPA sans API.' },
  { id: '43', slug: 'gemini-25-flash-guide-production', title: 'Gemini 2.5 Flash : Guide de Production', excerpt: 'Meilleur rapport qualité/prix du marché. Patterns, optimisation et cas d\'usage.', categoryId: 'strategie-ia', authorId: 'bob', publishedAt: '2025-11-28', readTime: 10, featured: false, tags: ['gemini', 'google', 'api', 'production'], metaDescription: 'Gemini 2.5 Flash : guide déploiement production.' },
  // Article 44 - Synthèse annuelle
  { id: '44', slug: '10-developpements-ia-pme-suisse-2025', title: '10 Développements IA que Chaque PME Suisse Doit Comprendre en 2025', excerpt: 'De DeepSeek à l\'EU AI Act, en passant par Apertus et les agents autonomes : synthèse des évolutions majeures qui impactent directement les PME.', categoryId: 'tendances', authorId: 'bob', publishedAt: '2025-11-28', readTime: 15, featured: true, tags: ['2025', 'synthese', 'pme', 'suisse', 'tendances'], metaDescription: 'Les 10 développements IA 2025 essentiels pour les PME suisses.' }
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
