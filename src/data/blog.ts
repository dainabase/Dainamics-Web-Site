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
  },
  // ============================================
  // BATCH 1: Articles 11-16 (Q1-Q2 2025 Topics)
  // ============================================
  {
    id: '11',
    slug: 'deepseek-impact-budget-ia-pme',
    title: 'DeepSeek : Ce que ça Change pour votre Budget IA',
    excerpt: 'Le modèle chinois DeepSeek-R1 a été entraîné pour 6M$ au lieu de 100M$. Implications pour les PME.',
    content: `
## Le choc DeepSeek

En janvier 2025, DeepSeek a créé une onde de choc dans le monde de l'IA. Leur modèle R1 a atteint des performances comparables à GPT-4... pour **seulement 6 millions de dollars** d'entraînement.

Pour comparaison, les modèles frontier coûtaient jusqu'à présent 100M$ à 500M$ à développer.

### Ce que ça signifie concrètement

**1. Les alternatives open-source deviennent viables**

Avant DeepSeek :
- Open-source = qualité inférieure
- Enterprise = obligé de payer OpenAI/Anthropic

Après DeepSeek :
- Open-source = qualité comparable
- Possibilité d'héberger soi-même
- Coûts divisés par 5 à 10

---

## Impact sur votre budget IA

### Scénario 1 : Chatbot support client

| Option | Coût mensuel | Performance |
|--------|--------------|-------------|
| GPT-4 API | 500-1500 CHF | ⭐⭐⭐⭐⭐ |
| Claude API | 400-1200 CHF | ⭐⭐⭐⭐⭐ |
| DeepSeek API | 50-150 CHF | ⭐⭐⭐⭐ |
| Modèle local | 0 CHF (+ infra) | ⭐⭐⭐⭐ |

**Économie potentielle : 80-90%**

---

### Scénario 2 : Extraction documents

| Option | Coût/1000 docs | Qualité |
|--------|----------------|---------|
| Solution SaaS | 200 CHF | ⭐⭐⭐⭐⭐ |
| API OpenAI | 80 CHF | ⭐⭐⭐⭐⭐ |
| Open-source local | 5 CHF | ⭐⭐⭐⭐ |

---

## Attention aux pièges

### Ce qu'il faut vérifier

1. **Conformité données** : Où vont vos données avec DeepSeek ?
2. **Hébergement** : Serveurs en Chine = risque RGPD/LPD
3. **Support** : Pas de support enterprise comme OpenAI
4. **Stabilité** : Modèle récent, moins testé en production

### Notre recommandation

Pour les PME suisses, privilégiez :

- **Cas non-sensibles** : DeepSeek API (économique)
- **Données clients** : Modèle open-source auto-hébergé en Suisse
- **Mission critique** : Restez sur OpenAI/Anthropic

---

## Comment en profiter ?

1. **Évaluez vos cas d'usage** : Lesquels nécessitent vraiment GPT-4 ?
2. **Testez les alternatives** : DeepSeek, Llama, Mistral
3. **Hybridez** : Modèle économique pour 80%, premium pour 20%

DAINAMICS vous aide à optimiser vos coûts IA tout en maintenant la qualité.
    `,
    categoryId: 'tendances',
    authorId: 'jean-marie',
    publishedAt: '2025-01-25',
    readTime: 7,
    featured: true,
    tags: ['deepseek', 'open-source', 'budget', 'llm', 'alternatives'],
    metaDescription: 'DeepSeek change l\'économie de l\'IA : entraînement 6M$ vs 100M$. Impact et opportunités pour les PME suisses.'
  },
  {
    id: '12',
    slug: 'pratiques-ia-illegales-eu-ai-act',
    title: '7 Pratiques IA Maintenant Illégales dans l\'UE',
    excerpt: 'L\'EU AI Act est entré en vigueur. Votre entreprise est-elle conforme ? Check-list complète.',
    content: `
## L'EU AI Act en vigueur

Depuis le 2 février 2025, certaines pratiques IA sont **formellement interdites** dans l'Union Européenne. Les entreprises suisses servant des clients EU sont concernées.

---

## Les 7 pratiques interdites

### 1. Manipulation subliminale

**Interdit :** IA qui influence les décisions de façon inconsciente

**Exemple :** Chatbot qui pousse subtilement vers des achats non désirés

**Votre risque :** Faible si pratiques commerciales standard

---

### 2. Exploitation des vulnérabilités

**Interdit :** Cibler des personnes vulnérables (âge, handicap, situation économique)

**Exemple :** Marketing IA ciblant les personnes endettées

**Votre risque :** Vérifiez vos segments marketing

---

### 3. Scoring social généralisé

**Interdit :** Noter les citoyens sur leur comportement social

**Exemple :** Score de "fiabilité" basé sur comportements personnels

**Votre risque :** Faible sauf scoring clients abusif

---

### 4. Police prédictive individuelle

**Interdit :** Prédire les crimes d'individus spécifiques

**Non concerné :** PME (usage policier uniquement)

---

### 5. Reconnaissance faciale de masse

**Interdit :** Collecte biométrique dans espaces publics

**Votre risque :** Vérifiez vos systèmes de sécurité

---

### 6. Reconnaissance émotionnelle au travail

**Interdit :** Analyser les émotions des employés

**Exemple :** IA mesurant le "bonheur" des équipes

**Votre risque :** Moyen si outils RH avec analyse sentiment

---

### 7. Catégorisation biométrique sensible

**Interdit :** Classifier par race, orientation, croyances via biométrie

**Votre risque :** Vérifiez vos outils de recrutement IA

---

## Check-list conformité PME

### À vérifier immédiatement

- [ ] Marketing IA : pas de ciblage vulnérabilités
- [ ] Chatbots : pas de manipulation subliminale
- [ ] RH : pas d'analyse émotionnelle
- [ ] Recrutement : pas de biais biométriques
- [ ] Sécurité : pas de reconnaissance faciale masse

### Échéances à venir

| Date | Obligation |
|------|------------|
| Fév 2025 | Pratiques interdites (déjà en vigueur) |
| Août 2025 | Obligations GPAI (modèles généraux) |
| Août 2026 | Obligations systèmes haut risque |

---

## Actions recommandées

1. **Audit** : Listez tous vos usages IA
2. **Classification** : Identifiez les risques
3. **Documentation** : Préparez votre conformité
4. **Formation** : Sensibilisez vos équipes

DAINAMICS propose des audits EU AI Act adaptés aux PME.
    `,
    categoryId: 'conformite',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-02-05',
    readTime: 9,
    featured: true,
    tags: ['eu-ai-act', 'conformite', 'rgpd', 'reglementation', 'europe'],
    metaDescription: 'EU AI Act : 7 pratiques IA maintenant interdites. Check-list conformité pour PME suisses servant l\'UE.'
  },
  {
    id: '13',
    slug: 'reglementation-ia-suisse-pme',
    title: 'Réglementation IA Suisse : Ce que les PME Doivent Savoir',
    excerpt: 'La Suisse a choisi une approche sectorielle. Décryptage des implications pour votre entreprise.',
    content: `
## L'approche suisse : différente de l'UE

En février 2025, le Conseil fédéral a confirmé : **pas de loi horizontale sur l'IA** en Suisse. Contrairement à l'EU AI Act, la Suisse opte pour une régulation par secteur.

### Ce que ça signifie

**Pas de loi IA générale** = Pas d'obligations spécifiques "IA"

**MAIS** : Les lois existantes s'appliquent toujours :
- LPD (protection des données)
- Droit du travail
- Protection des consommateurs
- Réglementations sectorielles (finance, santé, etc.)

---

## Implications par secteur

### Finance (FINMA)

La FINMA a publié ses attentes en août 2025 :

- Gouvernance IA documentée obligatoire
- Transparence sur les décisions automatisées
- Tests de robustesse pour modèles critiques

**50% des institutions financières suisses utilisent déjà l'IA** (sondage FINMA 2025)

---

### Santé

- Swissmedic encadre l'IA médicale
- Dispositifs IA = certification obligatoire
- Aide au diagnostic : encadrement strict

---

### Autres secteurs

Pour la majorité des PME :
- Pas d'obligation spécifique IA
- LPD reste la référence
- Bonnes pratiques recommandées

---

## LPD : le cadre principal

La Loi sur la Protection des Données (révisée 2023) s'applique à tout usage IA :

### Obligations clés

1. **Transparence** : Informer si décision automatisée
2. **Droit d'explication** : Expliquer la logique utilisée
3. **Droit d'opposition** : Permettre une révision humaine
4. **Minimisation** : Ne collecter que le nécessaire

### En pratique pour l'IA

| Usage IA | Obligation LPD |
|----------|----------------|
| Chatbot | Informer que c'est un bot |
| Scoring client | Expliquer les critères |
| Recrutement IA | Garantir révision humaine |
| Profiling | Obtenir consentement |

---

## Clients UE : attention !

Si vous servez des clients européens :

- L'EU AI Act s'applique à vos services
- Indépendamment de votre siège en Suisse
- Obligations à respecter dès maintenant

---

## Nos recommandations

### Pour les PME suisses

1. **Conformité LPD** : Priorité absolue
2. **Documentation** : Gardez trace de vos usages IA
3. **Clients UE** : Évaluez votre exposition EU AI Act
4. **Secteur régulé** : Suivez votre régulateur

### Ce qu'on anticipe

La Suisse pourrait renforcer sa régulation si :
- Incidents majeurs avec l'IA
- Pression internationale
- Équivalence EU demandée

DAINAMICS accompagne les PME dans leur mise en conformité IA.
    `,
    categoryId: 'conformite',
    authorId: 'jean-marie',
    publishedAt: '2025-02-15',
    readTime: 8,
    featured: false,
    tags: ['suisse', 'lpd', 'reglementation', 'finma', 'conformite'],
    metaDescription: 'Réglementation IA en Suisse : approche sectorielle, LPD, FINMA. Guide pratique pour PME.'
  },
  {
    id: '14',
    slug: 'llama-4-ia-entreprise-propre-materiel',
    title: 'Llama 4 : L\'IA Enterprise sur Votre Propre Matériel',
    excerpt: 'Meta a sorti Llama 4 avec des performances GPT-4 sur un seul GPU. Révolution pour les PME soucieuses de leurs données.',
    content: `
## Llama 4 : le game-changer

En avril 2025, Meta a lancé Llama 4 (Scout et Maverick). La promesse : **performances GPT-4 sur du matériel accessible**.

### Les chiffres clés

| Modèle | Performance | Hardware requis | Coût mensuel cloud |
|--------|-------------|-----------------|-------------------|
| GPT-4 | Référence | API seule | 500-2000 CHF |
| Llama 4 Scout | 95% GPT-4 | 1 GPU A100 | 200-400 CHF |
| Llama 4 Maverick | 98% GPT-4 | 2 GPU A100 | 400-800 CHF |

---

## Pourquoi c'est important pour les PME

### 1. Souveraineté des données

Avec Llama 4 auto-hébergé :
- **Vos données restent chez vous**
- Aucune fuite vers des tiers
- Conformité LPD/RGPD garantie

### 2. Coûts prévisibles

| Modèle | Coût 10K requêtes/mois |
|--------|------------------------|
| GPT-4 API | 150-300 CHF |
| Claude API | 120-250 CHF |
| Llama 4 local | 50-80 CHF (infra) |

**Économie : 50-70%** sur volumes importants

### 3. Personnalisation illimitée

Open-source = vous pouvez :
- Fine-tuner sur vos données métier
- Modifier le comportement
- Créer des versions spécialisées

---

## Comment déployer Llama 4

### Option 1 : Cloud Suisse (recommandé pour débuter)

Hébergeurs suisses proposant GPU :
- Infomaniak
- Exoscale
- Green.ch

**Coût** : 400-800 CHF/mois pour instance GPU

### Option 2 : On-premise

Pour les entreprises avec infrastructure :
- Serveur avec GPU NVIDIA A100/H100
- Investissement : 15-30K CHF

**Amorti en** : 12-18 mois vs cloud

### Option 3 : Hybride

- Modèle local pour données sensibles
- API cloud pour le reste

---

## Cas d'usage idéaux

### Parfait pour Llama 4 local

✅ Traitement documents confidentiels
✅ Chatbot interne entreprise
✅ Analyse contrats/juridique
✅ Génération rapports internes

### Gardez les APIs cloud pour

⚠️ Volumes très variables
⚠️ Besoin du dernier modèle
⚠️ Pas d'infrastructure interne

---

## Notre accompagnement

DAINAMICS déploie Llama 4 pour les PME suisses :

1. **Évaluation** : Vos cas d'usage
2. **Architecture** : Cloud Suisse ou on-premise
3. **Déploiement** : Installation et configuration
4. **Fine-tuning** : Personnalisation métier
5. **Support** : Maintenance et évolutions

Contactez-nous pour une étude de faisabilité gratuite.
    `,
    categoryId: 'strategie-ia',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-04-10',
    readTime: 8,
    featured: false,
    tags: ['llama', 'open-source', 'meta', 'hebergement', 'souverainete'],
    metaDescription: 'Llama 4 : performances GPT-4 sur votre matériel. Guide déploiement pour PME suisses soucieuses de leurs données.'
  },
  {
    id: '15',
    slug: 'workflows-multi-agents-automatisation',
    title: 'Workflows Multi-Agents : L\'Automatisation du Futur',
    excerpt: 'Google a lancé le protocole A2A. Comment les agents IA collaborent pour automatiser des processus complexes.',
    content: `
## L'ère des agents collaboratifs

En avril 2025, Google a dévoilé **Agent2Agent (A2A)**, un protocole permettant aux IA de communiquer entre elles. 50+ organisations l'ont adopté immédiatement.

### Qu'est-ce qu'un workflow multi-agents ?

Avant : Un seul modèle IA fait tout
Maintenant : Plusieurs agents spécialisés collaborent

**Analogie** : Une équipe de spécialistes vs un généraliste seul

---

## Exemple concret : Traitement de commande

### Workflow mono-agent (avant)

\`\`\`
Email commande → GPT-4 fait tout → Résultat
                    ↓
            (extraction + validation + 
             facturation + réponse)
\`\`\`

**Problème** : Erreurs fréquentes, lent, coûteux

### Workflow multi-agents (maintenant)

\`\`\`
Email commande
      ↓
[Agent Extraction] → Données structurées
      ↓
[Agent Validation] → Vérification stock
      ↓
[Agent Facturation] → Création facture
      ↓
[Agent Communication] → Email client
\`\`\`

**Avantages** :
- Chaque agent est spécialisé = meilleure qualité
- Parallélisation possible = plus rapide
- Agents économiques = moins cher

---

## Résultats observés

| Métrique | Mono-agent | Multi-agents |
|----------|------------|--------------|
| Précision | 85% | 97% |
| Temps traitement | 30s | 8s |
| Coût/requête | 0.05 CHF | 0.02 CHF |
| Scalabilité | Limitée | Excellente |

---

## Comment implémenter

### Outils disponibles

| Plateforme | Complexité | Coût |
|------------|------------|------|
| LangGraph | Technique | Gratuit |
| AutoGen | Moyen | Gratuit |
| CrewAI | Simple | Freemium |
| Make + IA | No-code | 20-100€/mois |

### Architecture type

\`\`\`
┌─────────────────────────────────────┐
│         Orchestrateur               │
│    (décide quel agent appeler)      │
└─────────────────────────────────────┘
         ↓           ↓           ↓
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  Agent      │ │  Agent      │ │  Agent      │
│  Extraction │ │  Analyse    │ │  Action     │
└─────────────┘ └─────────────┘ └─────────────┘
         ↓           ↓           ↓
┌─────────────────────────────────────┐
│         Base de données             │
│      (état partagé)                 │
└─────────────────────────────────────┘
\`\`\`

---

## Cas d'usage PME

### 1. Support client avancé

- Agent Compréhension : Analyse la demande
- Agent Recherche : Trouve dans la documentation
- Agent Rédaction : Formule la réponse
- Agent Escalade : Décide si humain nécessaire

### 2. Traitement factures fournisseurs

- Agent OCR : Extrait les données
- Agent Validation : Vérifie cohérence
- Agent Comptable : Catégorise
- Agent ERP : Injecte dans le système

### 3. Qualification leads

- Agent Enrichissement : Trouve infos complémentaires
- Agent Scoring : Évalue le potentiel
- Agent Assignation : Route vers le bon commercial

---

## Par où commencer ?

1. **Identifiez** un processus complexe à plusieurs étapes
2. **Découpez** en sous-tâches spécialisées
3. **Prototypez** avec 2-3 agents simples
4. **Itérez** en ajoutant de la complexité

DAINAMICS conçoit des workflows multi-agents adaptés à votre métier.
    `,
    categoryId: 'automatisation',
    authorId: 'jean-marie',
    publishedAt: '2025-05-05',
    readTime: 10,
    featured: false,
    tags: ['multi-agents', 'a2a', 'orchestration', 'workflows', 'automatisation'],
    metaDescription: 'Workflows multi-agents : comment les IA collaborent pour automatiser des processus complexes. Guide pratique PME.'
  },
  {
    id: '16',
    slug: 'ia-raisonnement-vs-chatbot-quand-utiliser',
    title: 'IA de Raisonnement vs Chatbots : Quand Utiliser Quoi ?',
    excerpt: 'OpenAI o3, Claude avec réflexion... Les modèles de raisonnement arrivent. Guide pour choisir le bon outil.',
    content: `
## Deux types d'IA, deux usages

En 2025, on distingue clairement deux catégories de modèles IA :

### Chatbots (réponse rapide)
- GPT-4o, Claude 3.5, Gemini 2
- Réponse en 1-3 secondes
- Idéal pour conversation fluide

### Modèles de raisonnement (réflexion profonde)
- OpenAI o3, o4-mini
- Réponse en 10-60 secondes
- Idéal pour problèmes complexes

---

## Comparaison pratique

### Test 1 : Rédiger un email client

| Type | Temps | Qualité |
|------|-------|---------|
| Chatbot (GPT-4o) | 2s | ⭐⭐⭐⭐⭐ |
| Raisonnement (o3) | 15s | ⭐⭐⭐⭐⭐ |

**Vainqueur : Chatbot** (plus rapide, même qualité)

---

### Test 2 : Résoudre un bug complexe

| Type | Temps | Qualité |
|------|-------|---------|
| Chatbot (GPT-4o) | 3s | ⭐⭐⭐ |
| Raisonnement (o3) | 30s | ⭐⭐⭐⭐⭐ |

**Vainqueur : Raisonnement** (trouve la vraie cause)

---

### Test 3 : Analyser un contrat

| Type | Temps | Qualité |
|------|-------|---------|
| Chatbot (Claude 3.5) | 5s | ⭐⭐⭐⭐ |
| Raisonnement (o3) | 45s | ⭐⭐⭐⭐⭐ |

**Vainqueur : Raisonnement** (détails juridiques)

---

## Guide de décision

### Utilisez un CHATBOT pour :

✅ Répondre aux clients
✅ Rédiger emails/contenus
✅ Résumer des documents
✅ Traduction
✅ FAQ/Support niveau 1

**Caractéristiques :** Rapidité, fluidité, volume

---

### Utilisez un modèle de RAISONNEMENT pour :

✅ Débugger du code complexe
✅ Analyser des contrats
✅ Résoudre des problèmes mathématiques
✅ Planification stratégique
✅ Prises de décision critiques

**Caractéristiques :** Précision, fiabilité, profondeur

---

## Coûts comparés

| Modèle | Coût/1M tokens | Vitesse |
|--------|----------------|---------|
| GPT-4o | 5-15$ | Rapide |
| Claude 3.5 | 3-15$ | Rapide |
| o3-mini | 12-48$ | Lent |
| o3 | 60-240$ | Très lent |

**Stratégie optimale :** 
- 90% des requêtes → Chatbot (économique)
- 10% critiques → Raisonnement (précis)

---

## Implémentation pratique

### Architecture recommandée

\`\`\`
Requête utilisateur
        ↓
[Classification automatique]
        ↓
  Simple?    Complexe?
    ↓           ↓
 Chatbot   Raisonnement
 (GPT-4o)     (o3)
\`\`\`

### Critères de routage

| Critère | → Chatbot | → Raisonnement |
|---------|-----------|----------------|
| Longueur input | < 1000 mots | > 1000 mots |
| Type | Conversation | Analyse |
| Criticité | Faible | Haute |
| Besoin précision | Normal | Critique |

---

## Conclusion

En 2025, le choix n'est plus "quel modèle utiliser" mais "**quand utiliser quel modèle**". Les architectures hybrides offrent le meilleur des deux mondes.

DAINAMICS vous aide à implémenter ces architectures intelligentes.
    `,
    categoryId: 'strategie-ia',
    authorId: 'equipe-dainamics',
    publishedAt: '2025-04-20',
    readTime: 8,
    featured: false,
    tags: ['raisonnement', 'chatbot', 'o3', 'gpt-4', 'architecture'],
    metaDescription: 'IA de raisonnement vs chatbots : guide pour choisir le bon modèle selon vos besoins PME.'
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
