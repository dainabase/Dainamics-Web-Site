/**
 * DAINAMICS Blog Data
 * Données des articles du blog
 * Design System: Couleurs catégories alignées
 */

import { Brain, Zap, BarChart3, Lightbulb, Compass, Trophy, MessageSquare, FileText, Rocket, Users } from 'lucide-react';

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

// Articles
export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'ia-service-client-2025',
    title: 'Comment l\'IA Transforme le Service Client en 2025',
    excerpt: 'Découvrez comment les PME suisses obtiennent 70% de réponses plus rapides et 85% de satisfaction client grâce aux agents IA.',
    content: `
## L'ère des agents IA conversationnels

Le service client traditionnel fait face à des défis majeurs : temps d'attente, disponibilité limitée, coûts de personnel. Les agents IA changent la donne.

### Les résultats observés chez nos clients

Après déploiement d'agents IA conversationnels :

- **-70% de temps de réponse** : Les questions fréquentes sont traitées instantanément
- **+85% de satisfaction client** : Disponibilité 24/7, réponses cohérentes
- **-40% de charge support** : L'équipe se concentre sur les cas complexes

### Comment ça fonctionne ?

L'agent IA analyse la demande, consulte votre base de connaissances, et répond de façon naturelle. Pour les cas complexes, il escalade intelligemment vers un humain.

### Exemple : Cabinet juridique genevois

Une fiduciaire traitait 150 demandes/semaine. Après intégration d'un assistant IA multilingue (FR/DE/IT) :

- 80% des demandes traitées automatiquement
- Équipe support passée de 3 à 1 personne sur les FAQ
- Satisfaction client : 92%

### Par où commencer ?

1. Identifiez vos 20 questions les plus fréquentes
2. Préparez une base de connaissances structurée
3. Déployez un MVP en 2-4 semaines
4. Itérez selon les feedbacks

L'IA n'est plus réservée aux grandes entreprises. Avec les bons outils, une PME peut transformer son service client en quelques semaines.
    `,
    categoryId: 'strategie-ia',
    authorId: 'jean-marie',
    publishedAt: '2025-11-15',
    readTime: 8,
    featured: true,
    tags: ['service-client', 'chatbot', 'ia-conversationnelle', 'pme'],
    metaDescription: 'Comment l\'IA transforme le service client en 2025 : 70% de réponses plus rapides, 85% de satisfaction. Guide pour PME.'
  },
  {
    id: '2',
    slug: 'case-study-fiduciaire',
    title: 'Cas d\'étude : +37% de Conversion pour une Fiduciaire',
    excerpt: 'Comment l\'automatisation des processus a transformé le pipeline commercial d\'un cabinet comptable genevois.',
    content: `
## Le défi initial

Cette fiduciaire genevoise de 25 employés perdait des opportunités :

- Délai de réponse aux prospects : 48-72h
- Suivi manuel des relances : oublié 1 fois sur 3
- Devis personnalisés : 2h chacun

### La solution déployée

Nous avons mis en place un système complet :

1. **Chatbot qualification** : Pré-qualification 24/7 des prospects
2. **Automatisation CRM** : Création automatique des leads, relances programmées
3. **Générateur de devis IA** : Devis personnalisés en 15 minutes

### Les résultats après 6 mois

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| Délai réponse | 48h | 2h | -96% |
| Taux conversion | 12% | 16.4% | +37% |
| Temps/devis | 2h | 15min | -87% |

### ROI du projet

- Investissement : 35 000 CHF
- Économies annuelles : 52 000 CHF
- ROI : 8 mois

### Leçons apprises

1. Commencez par le processus le plus douloureux
2. Impliquez l'équipe dès le début
3. Mesurez avant et après
4. Itérez rapidement
    `,
    categoryId: 'cas-clients',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-11-12',
    readTime: 12,
    featured: false,
    tags: ['fiduciaire', 'automatisation', 'crm', 'conversion'],
    metaDescription: 'Cas client : comment une fiduciaire a augmenté ses conversions de 37% grâce à l\'automatisation.'
  },
  {
    id: '3',
    slug: 'automatiser-facturation',
    title: 'Guide : Automatiser sa Facturation en 2 Semaines',
    excerpt: 'Étape par étape, comment passer de 12h/mois de facturation manuelle à 0 avec les bons outils.',
    content: `
## Pourquoi automatiser la facturation ?

La facturation manuelle coûte cher :

- **12h/mois minimum** pour une PME de 20-50 clients
- **Erreurs fréquentes** : mauvais montants, TVA incorrecte
- **Retards de paiement** : relances oubliées

### Étape 1 : Audit de l'existant (Jour 1-2)

Listez vos processus actuels :

- D'où viennent les données (CRM, Excel, ERP) ?
- Quelles validations manuelles ?
- Quels sont les cas particuliers ?

### Étape 2 : Choix des outils (Jour 3-4)

Pour les PME suisses, nous recommandons :

- **Bexio** : Facturation + Compta intégrée
- **Make/Zapier** : Connecteur entre systèmes
- **PDF automatisé** : Génération depuis template

### Étape 3 : Configuration (Jour 5-10)

1. Connectez votre CRM à Bexio
2. Créez les templates de factures
3. Paramétrez les règles de TVA
4. Configurez les relances automatiques

### Étape 4 : Tests et Go Live (Jour 11-14)

- Testez avec 5-10 factures réelles
- Validez les calculs
- Formez l'équipe
- Lancez en production

### Résultats typiques

- **12h → 30min/mois** de travail humain
- **Zéro erreur** de calcul
- **95% de paiements à temps** (vs 70% avant)
    `,
    categoryId: 'guides',
    authorId: 'jean-marie',
    publishedAt: '2025-11-08',
    readTime: 10,
    featured: false,
    tags: ['facturation', 'automatisation', 'bexio', 'guide'],
    metaDescription: 'Guide pratique pour automatiser votre facturation en 2 semaines. De 12h/mois à zéro.'
  },
  {
    id: '4',
    slug: 'chatgpt-entreprise',
    title: 'ChatGPT en Entreprise : Risques et Opportunités',
    excerpt: 'Ce que les dirigeants de PME doivent savoir sur l\'utilisation de l\'IA générative au travail.',
    content: `
## L'adoption massive de ChatGPT

En 2025, 78% des employés utilisent ChatGPT au travail. Mais cette adoption sauvage pose des risques.

### Les risques à connaître

**1. Confidentialité des données**
- Les données entrées dans ChatGPT gratuit peuvent être utilisées pour l'entraînement
- Risque RGPD/LPD si données clients

**2. Qualité des réponses**
- Hallucinations possibles
- Informations potentiellement obsolètes

**3. Dépendance**
- Perte de compétences internes
- Coût si passage aux versions payantes

### Les opportunités

**1. Productivité**
- Rédaction emails : 3min → 30sec
- Résumés documents : 2h → 10min
- Brainstorming : idées illimitées

**2. Uniformisation**
- Ton cohérent
- Qualité constante

### Notre recommandation

1. **Formez vos équipes** aux bonnes pratiques
2. **Définissez une politique** d'utilisation claire
3. **Déployez une instance privée** pour les données sensibles
4. **Mesurez les gains** de productivité

### Solution DAINAMICS

Nous déployons des instances privées d'IA :
- Hébergement Suisse
- Données jamais utilisées pour l'entraînement
- Personnalisé à votre métier
    `,
    categoryId: 'strategie-ia',
    authorId: 'jean-marie',
    publishedAt: '2025-11-05',
    readTime: 6,
    featured: false,
    tags: ['chatgpt', 'ia-generative', 'securite', 'rgpd'],
    metaDescription: 'ChatGPT en entreprise : guide des risques et opportunités pour les dirigeants de PME.'
  },
  {
    id: '5',
    slug: 'erreurs-projet-ia',
    title: 'Les 5 Erreurs à Éviter en Projet IA',
    excerpt: 'Retour d\'expérience : les pièges classiques et comment les contourner pour réussir votre transformation.',
    content: `
## Erreur #1 : Vouloir tout automatiser d'un coup

**Le piège** : "On va automatiser toute l'entreprise en 6 mois"

**La réalité** : Les projets trop ambitieux échouent à 70%

**La solution** : Commencez par UN processus, prouvez la valeur, puis étendez.

---

## Erreur #2 : Ignorer la qualité des données

**Le piège** : "On a plein de données, l'IA va tout résoudre"

**La réalité** : Garbage in = Garbage out. L'IA amplifie les erreurs.

**La solution** : Nettoyez et structurez vos données AVANT d'automatiser.

---

## Erreur #3 : Ne pas impliquer les équipes

**Le piège** : "On va leur imposer l'outil, ils s'adapteront"

**La réalité** : 65% des projets IT échouent par manque d'adoption

**La solution** : Impliquez les utilisateurs dès la conception. Ils sont vos meilleurs alliés.

---

## Erreur #4 : Attendre la perfection

**Le piège** : "On lance quand c'est parfait à 100%"

**La réalité** : Un système à 80% déployé bat un système parfait jamais lancé.

**La solution** : Lancez un MVP, itérez selon les feedbacks.

---

## Erreur #5 : Sous-estimer la maintenance

**Le piège** : "C'est livré, on n'y touche plus"

**La réalité** : Un projet IA nécessite 15-20% du budget initial/an en maintenance.

**La solution** : Budgétez la maintenance dès le départ. Prévoyez les évolutions.

---

## En résumé

| Erreur | Solution |
|--------|----------|
| Trop ambitieux | Un processus à la fois |
| Données sales | Nettoyer d'abord |
| Équipes ignorées | Impliquer dès le début |
| Attente perfection | Lancer MVP vite |
| Pas de maintenance | Budgéter 15-20%/an |
    `,
    categoryId: 'guides',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-11-01',
    readTime: 9,
    featured: false,
    tags: ['projet-ia', 'erreurs', 'bonnes-pratiques', 'transformation'],
    metaDescription: 'Les 5 erreurs fatales en projet IA et comment les éviter. Retour d\'expérience DAINAMICS.'
  },
  {
    id: '6',
    slug: 'roi-automatisation',
    title: 'ROI de l\'Automatisation : Calculez votre Potentiel',
    excerpt: 'Méthodologie pratique pour estimer le retour sur investissement de vos futurs projets d\'automatisation.',
    content: `
## La formule du ROI

Le calcul du ROI d'un projet d'automatisation repose sur une équation simple :

**ROI = (Économies annuelles - Coût projet) / Coût projet × 100**

### Étape 1 : Identifiez les coûts actuels

**Coûts directs à mesurer :**
- Heures passées × coût horaire
- Erreurs et leurs corrections
- Retards et pénalités

**Exemple : Facturation manuelle**
- 12h/mois × 65 CHF/h = 780 CHF/mois
- + Erreurs : ~200 CHF/mois
- Total : 980 CHF/mois = 11 760 CHF/an

### Étape 2 : Estimez les économies

Après automatisation, vous conservez généralement :
- 10-20% du temps initial (supervision, exceptions)
- Budget : ~100 CHF/mois

**Économie = 11 760 - 1 200 = 10 560 CHF/an**

### Étape 3 : Calculez le ROI

Pour un projet à 8 000 CHF :

**ROI = (10 560 - 8 000) / 8 000 × 100 = 32%**

**Délai de rentabilité = 8 000 / (10 560/12) = 9 mois**

### Nos références

| Type de projet | Investissement | ROI moyen | Délai |
|----------------|----------------|-----------|-------|
| Facturation | 8-12K CHF | 25-40% | 8-12 mois |
| Support IA | 10-15K CHF | 35-50% | 6-10 mois |
| CRM auto | 15-25K CHF | 30-45% | 10-14 mois |

### Conclusion

Un projet d'automatisation bien ciblé génère un ROI de 25-50% dès la première année. La clé : cibler les processus les plus chronophages et répétitifs.
    `,
    categoryId: 'competitivite',
    authorId: 'jean-marie',
    publishedAt: '2025-10-28',
    readTime: 7,
    featured: false,
    tags: ['roi', 'calcul', 'automatisation', 'business-case'],
    metaDescription: 'Comment calculer le ROI de l\'automatisation. Méthodologie et exemples pour PME.'
  },
  {
    id: '7',
    slug: 'tendances-ia-2025',
    title: 'Tendances IA 2025 : Ce qui Change pour les PME',
    excerpt: 'Les 5 évolutions majeures en intelligence artificielle qui impactent directement les PME cette année.',
    content: `
## 1. L'IA devient accessible aux PME

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
- **Maintenance prédictive** accessible

---

## Ce que ça change pour vous

| Tendance | Impact PME | Action recommandée |
|----------|------------|-------------------|
| Accessibilité | Concurrents équipés | Ne pas attendre |
| Spécialisation | Solutions métier | Chercher outils secteur |
| Auto intelligente | Moins de règles | Penser "IA-first" |
| IA vocale | Nouvelles interfaces | Tester transcription |
| Prédictif | Décisions data-driven | Mesurer avant tout |
    `,
    categoryId: 'tendances',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-10-20',
    readTime: 8,
    featured: false,
    tags: ['tendances', '2025', 'ia-generative', 'predictions'],
    metaDescription: 'Les 5 tendances IA 2025 qui transforment les PME. Accessibilité, spécialisation, automatisation intelligente.'
  },
  {
    id: '8',
    slug: 'choisir-outil-automatisation',
    title: 'Zapier, Make ou n8n : Quel Outil Choisir ?',
    excerpt: 'Comparatif complet des 3 outils d\'automatisation leaders pour les PME suisses.',
    content: `
## Les 3 leaders de l'automatisation

En 2025, trois outils dominent le marché de l'automatisation no-code :

### Zapier

**Points forts :**
- + de 8 000 intégrations
- Interface ultra-simple
- Support excellent

**Points faibles :**
- Prix élevé (par "tâche")
- Moins flexible sur workflows complexes

**Idéal pour :** Débutants, workflows simples

**Prix :** À partir de 20$/mois

---

### Make (ex-Integromat)

**Points forts :**
- Très puissant et flexible
- Meilleur rapport qualité/prix
- Workflows visuels avancés

**Points faibles :**
- Courbe d'apprentissage plus raide
- Moins d'intégrations que Zapier

**Idéal pour :** PME tech-friendly, workflows complexes

**Prix :** À partir de 9$/mois

---

### n8n

**Points forts :**
- Open source, auto-hébergeable
- Pas de limite d'exécutions
- Données restent chez vous (Suisse)

**Points faibles :**
- Nécessite hébergement technique
- Moins de connecteurs prêts à l'emploi

**Idéal pour :** PME avec contraintes données strictes

**Prix :** Gratuit (self-hosted) ou 20€/mois (cloud)

---

## Notre recommandation

| Profil | Outil recommandé |
|--------|------------------|
| Débutant, budget flexible | Zapier |
| Avancé, bon rapport qualité/prix | Make |
| Données sensibles, tech-friendly | n8n |
| 100% Microsoft | Power Automate |

---

## Conclusion

Pour la plupart des PME suisses, **Make offre le meilleur équilibre**. Pour les données très sensibles (juridique, médical), **n8n hébergé en Suisse** est la référence.
    `,
    categoryId: 'automatisation',
    authorId: 'jean-marie',
    publishedAt: '2025-10-15',
    readTime: 7,
    featured: false,
    tags: ['zapier', 'make', 'n8n', 'comparatif', 'outils'],
    metaDescription: 'Zapier vs Make vs n8n : comparatif complet pour PME. Quel outil d\'automatisation choisir ?'
  },
  {
    id: '9',
    slug: 'extraction-documents-ia',
    title: 'Extraction de Documents par IA : Guide Complet',
    excerpt: 'Comment automatiser l\'extraction de données depuis vos factures, bons de commande et contrats.',
    content: `
## Le problème de la saisie manuelle

Chaque mois, des milliers d'heures sont perdues à :

- Saisir des factures fournisseurs
- Traiter des bons de commande
- Extraire des données de contrats

**Coût typique :** 15-20h/mois pour une PME de 50 employés

---

## Comment fonctionne l'extraction IA

### 1. Capture du document
- Email, scan, ou dépôt dans un dossier
- Formats supportés : PDF, images, Word

### 2. OCR + IA
- Reconnaissance optique des caractères
- Compréhension du contexte par IA
- Extraction des champs pertinents

### 3. Validation
- Vérification automatique de cohérence
- Alertes sur anomalies
- Validation humaine si nécessaire

### 4. Export
- Injection dans votre ERP/Compta
- Archivage structuré
- Traçabilité complète

---

## Résultats typiques

| Métrique | Avant | Après |
|----------|-------|-------|
| Temps traitement | 15h/mois | 30min/mois |
| Taux d'erreur | 5-8% | < 0.5% |
| Délai traitement | 48-72h | Temps réel |

---

## Cas client : Atelier manufacturier

**Contexte :** 200 bons de livraison/mois

**Problème :**
- 15h de saisie manuelle
- Erreurs codes articles fréquentes

**Solution :**
- OCR IA avec validation croisée
- Export automatique vers ERP

**Résultat :**
- 15h → 30min
- Erreurs : -95%
- ROI : 2 mois

---

## Par où commencer ?

1. Identifiez vos documents à plus fort volume
2. Standardisez les formats si possible
3. Déployez un pilote sur un type de document
4. Mesurez et étendez
    `,
    categoryId: 'automatisation',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-10-10',
    readTime: 9,
    featured: false,
    tags: ['ocr', 'extraction', 'documents', 'factures', 'automatisation'],
    metaDescription: 'Guide complet extraction documents par IA : factures, bons de commande, contrats. De 15h à 30min/mois.'
  },
  {
    id: '10',
    slug: 'pme-suisse-ia-avantage',
    title: 'PME Suisses : L\'IA comme Avantage Compétitif',
    excerpt: 'Comment les PME suisses peuvent tirer parti de l\'IA pour surpasser leurs concurrents.',
    content: `
## Le contexte suisse

Les PME représentent 99% des entreprises suisses. Leur avantage : agilité et proximité client. Leur défi : rester compétitives face aux grandes structures.

**L'IA change la donne.**

---

## 3 avantages de l'IA pour les PME suisses

### 1. Productivité x2 sans embaucher

Une PME de 25 employés avec IA bien déployée peut :
- Traiter le volume d'une équipe de 35
- Sans augmenter la masse salariale
- Avec meilleure qualité

**Exemple :** Cabinet comptable genevois
- Équipe de 12 → productivité de 18
- +50% de clients avec même effectif

---

### 2. Service client premium 24/7

Les grandes entreprises ont des équipes support massives. Avec l'IA :
- Réponse instantanée aux clients
- Disponibilité 24/7/365
- Multilingue (FR/DE/IT/EN)

**Coût :** 10-15K CHF vs 80K CHF/an pour un employé

---

### 3. Décisions basées sur les données

Fini les décisions au feeling. L'IA permet :
- Prévisions de ventes précises
- Optimisation des stocks
- Scoring clients automatique

**ROI typique :** 25-40% sur les projets prédictifs

---

## L'avantage conformité suisse

Les PME suisses ont un atout unique : la confiance.

Avec des solutions IA hébergées en Suisse :
- **Conformité LPD** garantie
- **Datacenter local** = argument commercial
- **Souveraineté données** = différenciateur

---

## Par où commencer ?

1. **Audit gratuit** : Identifiez vos opportunités IA
2. **Projet pilote** : 2-4 semaines, ROI rapide
3. **Déploiement** : Étendez à d'autres processus

DAINAMICS accompagne les PME suisses depuis 2020. 100% de nos solutions sont hébergées en Suisse.
    `,
    categoryId: 'competitivite',
    authorId: 'jean-marie',
    publishedAt: '2025-10-05',
    readTime: 8,
    featured: false,
    tags: ['pme', 'suisse', 'competitivite', 'avantage', 'strategie'],
    metaDescription: 'Comment les PME suisses peuvent utiliser l\'IA comme avantage compétitif. Guide stratégique DAINAMICS.'
  }
];

// Helper functions
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (categoryId: string): BlogArticle[] => {
  return blogArticles.filter(article => article.categoryId === categoryId);
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
  return blogArticles.filter(article => article.featured);
};

export const getRecentArticles = (count: number = 6): BlogArticle[] => {
  return [...blogArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};
