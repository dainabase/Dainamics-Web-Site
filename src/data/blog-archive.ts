/**
 * DAINAMICS Blog Archive
 * Articles archivés (plus anciens)
 * Importé uniquement quand nécessaire pour réduire le contexte
 */

import type { BlogArticle } from './blog';

// Articles archivés (7-16)
export const archivedArticles: BlogArticle[] = [
  {
    id: '7',
    slug: 'tendances-ia-2025',
    title: 'Tendances IA 2025 : Ce qui Change pour les PME',
    excerpt: 'Les 5 évolutions majeures en intelligence artificielle qui impactent directement les PME cette année.',
    content: `## 1. L'IA devient accessible aux PME

Fini l'époque où l'IA était réservée aux grands groupes. En 2025 :

- **Coûts divisés par 10** en 3 ans
- **Outils no-code** pour automatiser sans développeur
- **APIs simples** pour intégrer l'IA dans vos outils

### 2. L'IA générative se spécialise

ChatGPT a ouvert la voie. Maintenant :

- **Modèles métier** : IA juridique, comptable, RH
- **Fine-tuning accessible** : Personnalisez sur vos données
- **Hébergement local** : Conformité RGPD garantie

### 3. L'automatisation intelligente

L'IA ne se contente plus de suivre des règles :

- **Décisions autonomes** sur cas simples
- **Apprentissage continu** des exceptions
- **Orchestration multi-outils** automatique

### 4. L'IA vocale mature

Les assistants vocaux deviennent utilisables en entreprise :

- **Transcription temps réel** des réunions
- **Assistants téléphoniques** crédibles
- **Commande vocale** des logiciels

### 5. La démocratisation du prédictif

L'analyse prédictive n'est plus réservée aux data scientists :

- **Prédiction de stocks** clé en main
- **Scoring leads** automatique
- **Maintenance prédictive** accessible`,
    categoryId: 'tendances',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-10-20',
    readTime: 8,
    featured: false,
    tags: ['tendances', '2025', 'ia-generative', 'predictions'],
    metaDescription: 'Les 5 tendances IA 2025 qui transforment les PME.'
  },
  {
    id: '8',
    slug: 'choisir-outil-automatisation',
    title: 'Zapier, Make ou n8n : Quel Outil Choisir ?',
    excerpt: 'Comparatif complet des 3 outils d\'automatisation leaders pour les PME suisses.',
    content: `## Les 3 leaders de l'automatisation

### Zapier
- + de 8 000 intégrations
- Interface ultra-simple
- Prix élevé (par "tâche")
- **Idéal pour :** Débutants, workflows simples

### Make (ex-Integromat)
- Très puissant et flexible
- Meilleur rapport qualité/prix
- **Idéal pour :** PME tech-friendly, workflows complexes

### n8n
- Open source, auto-hébergeable
- Pas de limite d'exécutions
- **Idéal pour :** PME avec contraintes données strictes

## Notre recommandation

| Profil | Outil recommandé |
|--------|------------------|
| Débutant | Zapier |
| Avancé | Make |
| Données sensibles | n8n |`,
    categoryId: 'automatisation',
    authorId: 'jean-marie',
    publishedAt: '2025-10-15',
    readTime: 7,
    featured: false,
    tags: ['zapier', 'make', 'n8n', 'comparatif', 'outils'],
    metaDescription: 'Zapier vs Make vs n8n : comparatif complet pour PME.'
  },
  {
    id: '9',
    slug: 'extraction-documents-ia',
    title: 'Extraction de Documents par IA : Guide Complet',
    excerpt: 'Comment automatiser l\'extraction de données depuis vos factures, bons de commande et contrats.',
    content: `## Le problème de la saisie manuelle

Chaque mois, des milliers d'heures sont perdues à saisir des factures, traiter des bons de commande, extraire des données de contrats.

**Coût typique :** 15-20h/mois pour une PME de 50 employés

## Comment fonctionne l'extraction IA

1. **Capture** : Email, scan, ou dépôt
2. **OCR + IA** : Reconnaissance et compréhension
3. **Validation** : Vérification automatique
4. **Export** : Injection dans ERP/Compta

## Résultats typiques

| Métrique | Avant | Après |
|----------|-------|-------|
| Temps | 15h/mois | 30min/mois |
| Erreurs | 5-8% | < 0.5% |`,
    categoryId: 'automatisation',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-10-10',
    readTime: 9,
    featured: false,
    tags: ['ocr', 'extraction', 'documents', 'factures'],
    metaDescription: 'Guide extraction documents par IA.'
  },
  {
    id: '10',
    slug: 'pme-suisse-ia-avantage',
    title: 'PME Suisses : L\'IA comme Avantage Compétitif',
    excerpt: 'Comment les PME suisses peuvent tirer parti de l\'IA pour surpasser leurs concurrents.',
    content: `## Le contexte suisse

Les PME représentent 99% des entreprises suisses. L'IA change la donne.

## 3 avantages de l'IA pour les PME suisses

### 1. Productivité x2 sans embaucher
Une PME de 25 employés avec IA peut traiter le volume d'une équipe de 35.

### 2. Service client premium 24/7
Réponse instantanée, disponibilité 24/7/365, multilingue.
**Coût :** 10-15K CHF vs 80K CHF/an pour un employé

### 3. Décisions basées sur les données
Prévisions de ventes, optimisation stocks, scoring clients.

## L'avantage conformité suisse

- **Conformité LPD** garantie
- **Datacenter local** = argument commercial
- **Souveraineté données** = différenciateur`,
    categoryId: 'competitivite',
    authorId: 'jean-marie',
    publishedAt: '2025-10-05',
    readTime: 8,
    featured: false,
    tags: ['pme', 'suisse', 'competitivite', 'strategie'],
    metaDescription: 'PME suisses et IA comme avantage compétitif.'
  },
  {
    id: '11',
    slug: 'deepseek-impact-budget-ia-pme',
    title: 'DeepSeek : Ce que ça Change pour votre Budget IA',
    excerpt: 'Le modèle chinois DeepSeek-R1 a été entraîné pour 6M$ au lieu de 100M$. Implications pour les PME.',
    content: `## Le choc DeepSeek

En janvier 2025, DeepSeek a atteint des performances GPT-4 pour **seulement 6 millions de dollars** d'entraînement (vs 100M$+).

## Impact sur votre budget IA

| Option | Coût mensuel |
|--------|--------------|
| GPT-4 API | 500-1500 CHF |
| DeepSeek API | 50-150 CHF |
| Modèle local | 0 CHF (+ infra) |

**Économie potentielle : 80-90%**

## Attention aux pièges

1. **Conformité données** : Où vont vos données ?
2. **Hébergement** : Serveurs en Chine = risque RGPD/LPD
3. **Support** : Pas de support enterprise

## Notre recommandation

- **Cas non-sensibles** : DeepSeek API
- **Données clients** : Modèle open-source auto-hébergé en Suisse
- **Mission critique** : OpenAI/Anthropic`,
    categoryId: 'tendances',
    authorId: 'jean-marie',
    publishedAt: '2025-01-25',
    readTime: 7,
    featured: false,
    tags: ['deepseek', 'open-source', 'budget', 'llm'],
    metaDescription: 'DeepSeek change l\'économie de l\'IA.'
  },
  {
    id: '12',
    slug: 'pratiques-ia-illegales-eu-ai-act',
    title: '7 Pratiques IA Maintenant Illégales dans l\'UE',
    excerpt: 'L\'EU AI Act est entré en vigueur. Votre entreprise est-elle conforme ?',
    content: `## L'EU AI Act en vigueur

Depuis le 2 février 2025, certaines pratiques IA sont **formellement interdites** dans l'UE.

## Les 7 pratiques interdites

1. **Manipulation subliminale**
2. **Exploitation des vulnérabilités**
3. **Scoring social généralisé**
4. **Police prédictive individuelle**
5. **Reconnaissance faciale de masse**
6. **Reconnaissance émotionnelle au travail**
7. **Catégorisation biométrique sensible**

## Check-list conformité PME

- [ ] Marketing IA : pas de ciblage vulnérabilités
- [ ] Chatbots : pas de manipulation subliminale
- [ ] RH : pas d'analyse émotionnelle
- [ ] Recrutement : pas de biais biométriques

## Échéances

| Date | Obligation |
|------|------------|
| Fév 2025 | Pratiques interdites |
| Août 2025 | Obligations GPAI |
| Août 2026 | Systèmes haut risque |`,
    categoryId: 'conformite',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-02-05',
    readTime: 9,
    featured: false,
    tags: ['eu-ai-act', 'conformite', 'rgpd', 'reglementation'],
    metaDescription: 'EU AI Act : 7 pratiques IA interdites.'
  },
  {
    id: '13',
    slug: 'reglementation-ia-suisse-pme',
    title: 'Réglementation IA Suisse : Ce que les PME Doivent Savoir',
    excerpt: 'La Suisse a choisi une approche sectorielle. Décryptage.',
    content: `## L'approche suisse : différente de l'UE

**Pas de loi IA générale** en Suisse. Régulation par secteur.

## LPD : le cadre principal

La Loi sur la Protection des Données s'applique à tout usage IA :

1. **Transparence** : Informer si décision automatisée
2. **Droit d'explication** : Expliquer la logique
3. **Droit d'opposition** : Révision humaine possible
4. **Minimisation** : Ne collecter que le nécessaire

## Par secteur

- **Finance (FINMA)** : Gouvernance IA documentée
- **Santé** : Certification Swissmedic
- **Autres** : LPD reste la référence

## Clients UE : attention !

L'EU AI Act s'applique si vous servez des clients européens.`,
    categoryId: 'conformite',
    authorId: 'jean-marie',
    publishedAt: '2025-02-15',
    readTime: 8,
    featured: false,
    tags: ['suisse', 'lpd', 'reglementation', 'finma'],
    metaDescription: 'Réglementation IA en Suisse pour PME.'
  },
  {
    id: '14',
    slug: 'llama-4-ia-entreprise-propre-materiel',
    title: 'Llama 4 : L\'IA Enterprise sur Votre Propre Matériel',
    excerpt: 'Meta a sorti Llama 4 avec des performances GPT-4 sur un seul GPU.',
    content: `## Llama 4 : le game-changer

En avril 2025, Meta a lancé Llama 4. **Performances GPT-4 sur du matériel accessible**.

## Pourquoi c'est important

### 1. Souveraineté des données
Vos données restent chez vous, conformité LPD/RGPD garantie.

### 2. Coûts prévisibles

| Modèle | Coût 10K requêtes/mois |
|--------|------------------------|
| GPT-4 API | 150-300 CHF |
| Llama 4 local | 50-80 CHF |

### 3. Personnalisation illimitée
Fine-tuning sur vos données métier.

## Comment déployer

- **Cloud Suisse** : Infomaniak, Exoscale (400-800 CHF/mois)
- **On-premise** : Serveur GPU (15-30K CHF, amorti 12-18 mois)
- **Hybride** : Local pour sensible, cloud pour le reste`,
    categoryId: 'strategie-ia',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-04-10',
    readTime: 8,
    featured: false,
    tags: ['llama', 'open-source', 'meta', 'hebergement'],
    metaDescription: 'Llama 4 : performances GPT-4 sur votre matériel.'
  },
  {
    id: '15',
    slug: 'workflows-multi-agents-automatisation',
    title: 'Workflows Multi-Agents : L\'Automatisation du Futur',
    excerpt: 'Google a lancé le protocole A2A. Comment les agents IA collaborent.',
    content: `## L'ère des agents collaboratifs

Google a dévoilé **Agent2Agent (A2A)** : protocole permettant aux IA de communiquer entre elles.

## Exemple : Traitement de commande

### Avant (mono-agent)
Email → GPT-4 fait tout → Résultat
**Problème** : Erreurs fréquentes, lent

### Maintenant (multi-agents)
Email → Agent Extraction → Agent Validation → Agent Facturation → Agent Communication

## Résultats observés

| Métrique | Mono-agent | Multi-agents |
|----------|------------|--------------|
| Précision | 85% | 97% |
| Temps | 30s | 8s |
| Coût | 0.05 CHF | 0.02 CHF |

## Outils disponibles

- LangGraph, AutoGen, CrewAI
- Make + IA (no-code)`,
    categoryId: 'automatisation',
    authorId: 'jean-marie',
    publishedAt: '2025-05-05',
    readTime: 10,
    featured: false,
    tags: ['multi-agents', 'a2a', 'orchestration', 'workflows'],
    metaDescription: 'Workflows multi-agents pour automatisation.'
  },
  {
    id: '16',
    slug: 'ia-raisonnement-vs-chatbot-quand-utiliser',
    title: 'IA de Raisonnement vs Chatbots : Quand Utiliser Quoi ?',
    excerpt: 'OpenAI o3, Claude avec réflexion... Guide pour choisir.',
    content: `## Deux types d'IA

### Chatbots (réponse rapide)
GPT-4o, Claude 3.5 - Réponse en 1-3 secondes

### Modèles de raisonnement
OpenAI o3 - Réponse en 10-60 secondes

## Guide de décision

### Utilisez un CHATBOT pour :
- Répondre aux clients
- Rédiger emails/contenus
- Résumer des documents

### Utilisez RAISONNEMENT pour :
- Débugger du code complexe
- Analyser des contrats
- Prises de décision critiques

## Coûts comparés

| Modèle | Coût/1M tokens |
|--------|----------------|
| GPT-4o | 5-15$ |
| o3 | 60-240$ |

**Stratégie optimale :** 90% chatbot, 10% raisonnement`,
    categoryId: 'strategie-ia',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-04-20',
    readTime: 8,
    featured: false,
    tags: ['raisonnement', 'chatbot', 'o3', 'gpt-4'],
    metaDescription: 'IA raisonnement vs chatbots : guide de choix.'
  }
];

// Helper pour récupérer un article archivé
export const getArchivedArticleBySlug = (slug: string): BlogArticle | undefined => {
  return archivedArticles.find(article => article.slug === slug);
};
