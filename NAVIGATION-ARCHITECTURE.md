# 🗺️ DAINAMICS - Architecture Navigation Optimale

**Type:** Planification  
**Version:** 1.0  
**Dernière MAJ:** 11 Octobre 2025  
**Liens Rapides:** [TRANSFORMATION-PLAN](./TRANSFORMATION-PLAN.md) | [STATUS](./STATUS.md) | [CONTENT-STRATEGY](./CONTENT-STRATEGY.md)

---

## 📋 Table des Matières

1. [Analyse Comparative](#-analyse-comparative-10-sites-référence)
2. [Patterns Récurrents](#-patterns-récurrents--ce-qui-marche-vraiment)
3. [Recommandations DAINAMICS](#-recommandations-architecture-dainamics)
4. [Parcours Utilisateur](#-parcours-navigation-idéal-visiteur-pme)
5. [Meilleures Pratiques UX/UI](#-meilleures-pratiques-uxui-actionnables)

---

## 🎯 Objectif de ce Document

Ce document contient l'**analyse comparative de 25+ sites leaders** et les **recommandations d'architecture de navigation** pour DAINAMICS.

**Constat clé:** Les meilleurs sites convertissent en éliminant la complexité, pas en l'ajoutant.

**Pour DAINAMICS:** Vos concurrents suisses cachent leurs prix et multiplient les niveaux de navigation. Les leaders internationaux font l'inverse – transparence et navigation plate.

---

## 📊 Analyse Comparative : 10 Sites Référence

### Tableau de Benchmarking

| **Site** | **Items menu** | **Niveaux** | **Organisation** | **Points forts** | **Points faibles** |
|----------|----------------|-------------|------------------|------------------|-------------------|
| **Zapier** | 5 | 2 | Produit > Use cases intégrés | 6 cas clients homepage, "No hype", 8000+ intégrations | Peu d'info sur l'implementation |
| **Anthropic (Claude)** | 6 | 3 mega-menu | Par tier (Pro/Team/Enterprise) + industrie | Très didactique, Academy, "We don't train on your data" | Complexité pour petites entreprises |
| **Make.com** | 6 | 2 | Plateforme visuelle, apps | Reviews 4.8/5 affichées, 2500+ apps | Moins d'intégrations que Zapier |
| **Netguru** | 6 | 3 | Par phase processus (Ideation→Support) | Processus clair évite redondance, 99% satisfaction client | Navigation profonde (3 niveaux) |
| **Boldare** | 6 | 2 | Par type engagement + "How We Work" | "How We Work" remplace Expertise brillamment | Pas de filtres portfolio |
| **10Clouds** | 6 | 2 | Par technologie + AI Lab | AI Lab = thought leadership séparé | Focus technique > business |
| **Swisscom SME** | 7 | 3 | Par problème business + calculateur | Calculateur coût, 40+ centres SME Suisse, multilingue DE/FR/IT/EN | Trop corporate, prix semi-cachés |
| **Liip** | 7 | 1-2 | Ultra-plat, valeurs-driven | Transparence salariale, 72 awards, 6 bureaux suisses | Pas de focus SME explicite |
| **Cohere** | 5 | 2 | Par produit (Command/Embed/Rerank) | "Security-first", souveraineté données, très clair | Prix cachés |
| **Scale AI** | 6 | 3 | Par couche tech (Data→Platform→Solutions) | Infrastructure AI, clients OpenAI/Meta | Trop technique, barrière haute |

### Insights du Tableau

**Patterns gagnants:**
- 5-7 items menu (6 = optimal)
- Maximum 2 niveaux (3 si mega-menu bien structuré)
- Organisation par PHASE ou ENGAGEMENT, pas par technologie
- Cas clients intégrés homepage (2-4 featured)
- Transparence progressive (prix ranges minimum)

**Erreurs fréquentes:**
- Multiplication des sections "Services/Solutions/Expertise" redondantes
- Navigation à 3+ niveaux sans mega-menu
- Portfolio non-filtrable ou trop volumineux
- Jargon technique sans contexte business

---

## 🎯 Patterns Récurrents : Ce Qui Marche Vraiment

### Pattern #1 : L'Élimination du Trio "Services/Solutions/Expertise"

**Problème identifié:** Aucune agence top ne garde les 3 sections séparées. C'est votre problème #1 actuel.

#### Solutions Observées

**A) Modèle par étapes de processus (Netguru):**
- Services organisés : Idéation → Design → Développement → IA → Support
- "Solutions" éliminé – remplacé par filtres industrie
- "Expertise" montrée via profondeur de service, pas section séparée
- **Résultat:** Zéro redondance, parcours clair

**B) Modèle par type d'engagement (Boldare, Thoughtbot):**
- Services : Discovery, Development, Advisory
- "How We Work" remplace section Expertise
- Cas clients montrent les solutions en contexte
- **Résultat:** Langage client, pas interne

**C) Modèle technologie-première (10Clouds, Monterail):**
- Services : Web, Mobile, IA
- Industries = sous-pages ou filtres
- Expertise via badges partenaires (Vue.js Partner, etc.)
- **Résultat:** Clarté technique sans dilution

**Recommandation DAINAMICS:** Adoptez modèle B (engagement) car cible PME préfère "Discovery" à "Python Development"

---

### Pattern #2 : Navigation 5-7 Items, 2 Niveaux Max

**Données empiriques** (Nielsen Norman Group 2024):
- **Règle des 3 clics = MYTHE** – Aucune recherche ne la soutient
- Satisfaction utilisateur augmente de **600%** avec 4 clics clairs vs 3 clics confus
- Vraie métrique : **information scent** (labels clairs) + charge cognitive

**Structure gagnante:**
- Desktop : 5-7 items menu principal
- Mobile : Hamburger menu (5-7 items aussi)
- Mega-menu SI complexité (plateforme automation > agence dev)
- Sous-catégories : Maximum 10 options par groupe

**Éviter:**
- Hamburger menu sur desktop (cache navigation)
- Dropdowns multi-niveaux hover-only
- Plus de 3 niveaux hiérarchie

---

### Pattern #3 : Homepage = Preuve Avant Capacités

**Structure dominante observée:**

1. **Hero** (1 phrase valeur + 1 CTA primaire)
2. **Métriques** (projets, années, satisfaction, taille équipe)
3. **1-4 cas clients featured** (avec outcomes quantifiés)
4. **Logos clients** (6-12 marques reconnues)
5. **Services overview** (icônes + 1 phrase chacun)
6. **Témoignage** unique avec photo
7. **CTA final** avec humain (photo membre équipe)

**Ce qui N'EST PAS sur homepages gagnantes:**
- Descriptions services longues
- Portfolio complet (juste featured)
- Feeds blog
- CTAs multiples concurrents

**Longueur optimale:** 3-5 sections (homepages longues = conversion ↓)

---

### Pattern #4 : Cas Clients = 2 Emplacements Seulement

**Règle stricte observée:**
1. Page Portfolio/Work dédiée (version complète)
2. Pages détails service (2-3 cas pertinents intégrés)

**Jamais:**
- Sur homepage (sauf preview cards)
- Sur page À Propos
- Dans navigation
- Comme pages "Solutions" séparées

**Format optimal cas client:**
- 400-1000 mots online
- Métriques bold : "35% réduction coûts = 50K€/mois économisés"
- Citation directe décideur
- Vidéo sous 2 minutes
- Formats multiples (PDF, web, vidéo)

---

### Pattern #5 : Pricing Transparent = Différenciateur

**Tendance observée:**
- Agences suisses : **0% montrent prix** (tous contact-only)
- Agences US/EU : Transparence croissante
- SaaS automation : 45% montrent pricing
- **68% acheteurs B2B** prêts payer plus pour prix clairs (McKinsey)

**Modèle hybride optimal:**
- Tiers standards : Prix complets pour auto-service
- Fourchettes : "Projets de 15K€ à 50K€ selon..."
- Enterprise/Sur-mesure : "Contactez-nous" avec hint prix départ
- Calculateur interactif : Estimation personnalisée

**Opportunité DAINAMICS:** **Différenciation majeure** – soyez les premiers en Suisse à montrer ranges de prix pour SME

---

### Pattern #6 : Auto-Qualification Avant Contact

**Outils observés:**

**Calculateurs ROI** (BetterCloud, Salesforce Agentforce):
- 3-5 champs input (coûts actuels, gains espérés, période)
- Calcul temps réel
- Exportable PDF pour stakeholders
- Lead capture au moment résultats

**Assessments maturité:**
- 5-10 questions état actuel
- Score avec niveaux clarté
- Recommandations personnalisées
- Qualification automatique leads

**Finders/Configurateurs:**
- Questions progressives
- Recommandations visuelles
- Comparaison options
- CTA direct vers démo/achat

**Gap marché suisse:** **Aucune agence suisse analysée n'offre ces outils** = opportunité

---

## 🏗️ Recommandations Architecture DAINAMICS

### Structure Menu Optimale : 6 Items

**Navigation principale recommandée:**

```
1. Services (dropdown 2 niveaux)
   └─ Discovery & Stratégie IA
   └─ Développement IA & Automation
   └─ Quick Wins (projets 2-4 semaines)
   └─ Extension d'équipe

2. Projets (anciennement Portfolio)
   └─ Filtres : Industrie + Type service + Technologie

3. Notre Approche (remplace "À Propos" + "Expertise")
   └─ Notre Processus
   └─ Intégration IA
   └─ Standards de Service
   └─ Équipe

4. Ressources
   └─ Blog
   └─ Cas d'Usage (use cases détaillés)
   └─ Glossaire IA/Automation

5. Pricing (NOUVEAU - différenciateur)

6. Contact
```

**Multilingue** (standard suisse):
- DE/FR/EN minimum
- Switcher top-right toujours visible
- Contenu fully traduit, pas juste nav

**Mobile:**
- Hamburger menu (pas sur desktop)
- Même 6 items, accordion
- Touch targets 48×48px minimum
- Espacement 32px entre éléments

---

### Élimination Redondance Services/Solutions/Expertise

**AVANT (problématique actuelle):**
```
❌ Expertise (IA, Automatisation, Développement)
❌ Solutions (Toutes, Quick Wins, Par industrie)  
❌ Portfolio
```

**Problème:** Même contenu répété 3 fois sous labels différents

**APRÈS (structure recommandée):**

**Services** = Vos offres par type engagement
- Discovery & Stratégie IA (assessment, roadmap, POC)
- Développement IA & Automation (custom solutions)
- Quick Wins (projets packagés 2-4 semaines)
- Extension d'équipe (développeurs IA/ML)

**Notre Approche** = Votre processus + valeurs (remplace Expertise)
- Comment on travaille
- Méthodologie intégration IA
- Standards qualité
- Stack technique (ici, pas dans nav)

**Projets** = Tous cas clients avec filtres
- Filtre Industrie : Manufacturing, Services Pro, Retail, etc.
- Filtre Type : IA, Automation, Développement
- Filtre Outcome : Réduction coûts, Gain temps, Nouveau revenu

**Ressources** = Contenu éducatif pur (zéro pitch)
- Blog (thought leadership)
- Cas d'Usage (scenarios hypothétiques détaillés)
- Glossaire (démystifier IA/automation)

**Résultat:** Zéro duplication. Chaque section a but distinct.

---

### Hiérarchie Information Recommandée

**Règle d'or:** Broad & Shallow > Deep & Narrow

```
Niveau 1 (6 items) : Services | Projets | Notre Approche | Ressources | Pricing | Contact

Niveau 2 (4-10 options max par catégorie) :
  Services/
    ├─ Discovery & Stratégie IA
    ├─ Développement IA & Automation  
    ├─ Quick Wins
    └─ Extension d'équipe
  
  Notre Approche/
    ├─ Notre Processus
    ├─ Intégration IA
    └─ Standards de Service

Niveau 3 (détails pages individuelles - pas dans nav)
```

**Justification:**
- Nielsen Norman : Utilisateurs préfèrent voir options vs cliquer profond
- Mega-menu inapproprié pour agence (réservé plateformes complexes)
- 2 niveaux = sweet spot PME B2B

---

## 🚶 Parcours Navigation Idéal Visiteur PME

**Persona:** Directeur PME (50-200 employés), problème efficacité, découvre DAINAMICS via Google

### Parcours Optimal

```
1. ARRIVÉE Homepage
   └─ Hero : "IA & Automatisation pour PME Suisses" + CTA "Évaluation gratuite 30min"
   └─ Métriques confiance : "45 PME suisses, 8 ans, 99% satisfaction"
   └─ 2 cas clients featured avec ROI (ex: "Garage Morand: -40% temps admin = 60K€/an économisés")
   └─ Logos 8-10 clients PME suisses

2. NAVIGATION vers Services
   └─ Clique "Services" → Dropdown 4 options claires
   └─ Choisit "Quick Wins" (attire PME - rapide, risque faible)
   └─ Page détaille : Qu'est-ce, Quand l'utiliser, Projets types, 2-3 cas clients intégrés, Prix indicatif
   └─ CTA : "Voir exemples Quick Wins" → Page Projets filtrée

3. EXPLORATION Projets (anciennement Portfolio)
   └─ Page affiche tous cas clients avec filtres
   └─ Applique filtre "Quick Wins" + "Services Professionnels" (son industrie)
   └─ Lit 2-3 cas avec métriques précises
   └─ Identifie problème similaire au sien

4. QUALIFICATION Notre Approche
   └─ Veut comprendre "comment vous travaillez"
   └─ Clique "Notre Approche" → "Notre Processus"
   └─ Voit : Discovery → Prototypage → Déploiement → Support
   └─ Rassure sur méthodologie claire

5. DÉCISION Pricing
   └─ Question prix avant contact (normal PME)
   └─ Voit ranges : Quick Wins 8-15K€ | Projets custom 25-75K€ | Équipe extension 7K€/mois
   └─ FAQ adresse objections communes
   └─ CTA : "Calculateur ROI" → Outil interactif

6. CONVERSION Contact
   └─ Complète calculateur ROI → Voit potentiel 45K€/an économies
   └─ Lead capture : "Recevoir rapport + consultation gratuite"
   └─ Formulaire simple : Nom, Email, Téléphone, Entreprise, Défi principal (menu déroulant)
   └─ Pas de 15 champs - friction minimale

7. APRÈS-CONTACT
   └─ Email automatique immédiat avec rapport ROI PDF
   └─ Lien calendrier direct (Calendly) → Réserve évaluation 30min
   └─ Nurture email J+2 : Cas client similaire
   └─ Nurture email J+5 : Article blog pertinent
```

**Durée totale:** 8-12 minutes navigation → Conversion  
**Clics:** 5-7 (règle 3-clics = mythe, clarté > nombre)

---

## 📐 Meilleures Pratiques UX/UI Actionnables

### Navigation Depth & Règle 3-Clics

**Mythe débunked** (Nielsen Norman Group 2024):
- **Règle 3-clics = AUCUNE recherche empirique la soutient**
- Satisfaction utilisateur augmente **600%** avec 4 clics clairs vs 3 clics confus
- Vraie métrique : **Information scent** (labels descriptifs) + charge cognitive

**Règle pratique:**
- ✅ Favorisez **broad & shallow** (large, peu profond)
- ✅ Labels clairs > minimiser clics
- ✅ Breadcrumbs si 3+ niveaux
- ❌ Ne sacrifiez PAS clarté pour atteindre 3 clics arbitrary

**Application DAINAMICS:** 2 niveaux suffisent. Si visiteur clique 5x mais trouve, c'est win.

---

### Nombre Items Menu (Miller's Law)

**Recherche:**
- Théorie originale : 7±2 items (5-9) en mémoire court-terme
- **Application moderne:** Guideline, PAS règle stricte
- Optimal desktop B2B : **5-7 items top-level** (6 = sweet spot)
- Mega-menu sous-catégories : Maximum 10 options/groupe

**Application DAINAMICS:**
- 6 items menu principal (Services, Projets, Notre Approche, Ressources, Pricing, Contact)
- Services dropdown : 4 options (Discovery, Dev, Quick Wins, Équipe)
- Ressources dropdown : 3 options (Blog, Cas d'Usage, Glossaire)

---

### Mega-Menus vs Navigation Simple

**Quand mega-menu approprié:**
- Plateformes SaaS complexes (Zapier, UiPath, Salesforce)
- 20+ pages/features
- 3+ niveaux hiérarchie
- Multiples audiences

**Quand navigation simple meilleure:**
- **Agences dev/consulting** ← DAINAMICS
- Sites <20 pages
- Focus single-produit ou services
- Priorité vitesse

**Recommandation DAINAMICS:** **Navigation simple dropdown**
- Vous avez ~15 pages total (6 services, 5 ressources, 4 autres)
- Mega-menu = overkill, ajoute complexité inutile
- Dropdown hover-activated (desktop) / accordion (mobile)

---

### Mobile Optimization

**Standards 2025:**
- **Hamburger menu mobile:** ✅ Nécessaire et approprié
- **Hamburger menu desktop:** ❌ "Terrible solution" cache navigation critique
- Touch targets : Minimum **48×48 pixels**
- Espacement : **32px entre éléments**
- Header sticky mobile : Max **50px hauteur**

**Application DAINAMICS:**
```
DESKTOP:
┌─────────────────────────────────────┐
│ Logo    Services Projets Approche   │ ← Navigation horizontale visible
│         Ressources Pricing Contact  │
└─────────────────────────────────────┘

MOBILE:
┌─────────────────────────────────────┐
│ ☰  Logo           🔍  DE|FR|EN      │ ← Hamburger + search + langue
└─────────────────────────────────────┘
  │
  └─ Tap hamburger → Full-screen menu accordion
     • Services ▼
       - Discovery & Stratégie
       - Développement IA
       - Quick Wins
       - Extension équipe
     • Projets
     • Notre Approche ▼
     • Ressources ▼
     • Pricing
     • Contact
```

---

### Sticky Navigation

**Best practice 2024:**
- Desktop : Sticky header **disparaît scroll down, réapparaît scroll up**
- Mobile : Sticky plus critique (espace limité)
- Hauteur max : **50px mobile**, 70px desktop
- Contenu : Logo + Menu + 1 CTA primaire + Search

**Application DAINAMICS:**
```
Sticky header:
┌──────────────────────────────────────────┐
│ [Logo DAINAMICS]  [Menu]  [Éval gratuite]│ ← Toujours accessible
└──────────────────────────────────────────┘

Scroll down → header disparaît (plus espace contenu)
Scroll up → header réapparaît (navigation rapide)
```

---

### Search Functionality

**Statistiques B2B:**
- **90% clients B2B utilisent search** pour trouver produits
- Essentiel si : 100+ pages, catalogue produits, knowledge base

**Application DAINAMICS:**
- Site <20 pages → Search **optionnel** (nice-to-have, pas critique)
- Si implémenté : Icône top-right, autocomplete blog posts + cas clients
- Priorité basse vs navigation claire

---

### Breadcrumbs

**Quand essentiels:**
- Hiérarchie 3+ niveaux
- Utilisateurs arrivent via search (pas homepage)
- Sites ecommerce ou knowledge bases

**Application DAINAMICS:**
- **Non nécessaires** avec 2 niveaux max
- Exception : Pages blog individuelles (Blog > Catégorie > Article)

---

### F-Pattern et Z-Pattern

**Z-pattern homepage** (visual-focused):
```
[LOGO]────────────────→ [MENU]
   │                      ↓
   │                   [CTA]
   ↓                     │
[VISUAL]                 │
   ╲                     │
    ╲                    │
     ╲                   ↓
[MÉTRIQUE]─────────→ [CTA FINAL]
```

**Application DAINAMICS homepage:**
1. Logo top-left, menu top-right, CTA hero top-right
2. Diagonale visuelle vers metrics centre-left
3. Diagonale vers CTA final bottom-right

**F-pattern pages contenu** (blog, cas clients):
- Titres alignés gauche (zone scan primaire)
- Premiers mots titres = keywords importants
- Paragraphes courts (4-5 lignes max)
- Bullets points scannables

---

## 📋 Exemples Concrets Détaillés

### Exemple A : Zapier - 8.5/10

**URL:** zapier.com

**Structure menu:**
```
Product | Solutions | Resources | Enterprise | Pricing
```
(5 items, navigation ultra-clean)

**Ce qui fonctionne brillamment:**

1. **Homepage = Proof paradise**
   - 6 cas clients détaillés sur homepage (Disney, Thomson Reuters, Alphabet)
   - Métriques bold : "$134M saved", "$1M revenue impact"
   - "No AI hype here. Just results." (positioning anti-buzzword)

2. **Use cases intégrés, pas séparés**
   - Pas de section "Solutions" distincte
   - Use cases = templates cliquables dans carousel interactif
   - Catégories : "Onboard employees", "Resolve IT tickets", "Qualify leads"

3. **Segmentation audience sophistiquée**
   - "For Fortune 500 and first-time founders" (messaging inclusif)
   - CTAs duaux : "Start for free" (SMB) + "Get a demo" (Enterprise)

4. **Trust signals everywhere**
   - 8,000+ apps intégrables (headline feature)
   - Logos clients above fold
   - G2, Capterra ratings visibles

**Application DAINAMICS:**
- Adoptez approche "No hype, just results" pour PME sceptiques IA
- 2-3 cas clients homepage avec métriques précises (pas vagues)
- CTAs duaux : "Quick Win 2 semaines" (low-risk) + "Projet custom" (complex)

---

### Exemple B : Boldare - 9/10

**URL:** boldare.com

**Structure menu:**
```
Services | How We Work | Clients | About | Careers | Blog
```
(6 items - parfait)

**Ce qui fonctionne brillamment:**

1. **"How We Work" = coup de génie**
   - Remplace section "Expertise" traditionnelle
   - Focus processus, pas capacités
   - Contenu : Méthodologie agile, Event Storming, Service Standards
   - **Élimine redondance totalement**

2. **Services par engagement, pas technologie**
   - Discovery & Strategy
   - Software Development  
   - UX/UI Design
   - AI Solutions
   - CTO as a Service
   - Résultat : Client comprend "quand m'engage-t-on", pas "quelles techs vous faites"

3. **Service Standards = différenciateur**
   - Document public standards qualité
   - Transparency builds trust PME
   - Téléchargeable gratuitement

4. **Metrics homepage prominents**
   - 100+ projets
   - 95% client retention
   - 20+ années expérience
   - 40+ équipe

**Application DAINAMICS:**
- **Implémentez "Notre Approche" exactement comme "How We Work"**
- Services par engagement (Discovery, Development, Support)
- Créez "DAINAMICS Service Standards for SME AI Projects" public doc
- Metrics prominents homepage

---

### Exemple C : Swisscom SME - 6.5/10

**URL:** swisscom.ch/en/business/sme

**Structure menu:**
```
Mobile | Internet | IT & Cloud | Network | Security | All Solutions
```
(6 items + secondary menu)

**Ce qui fonctionne brillamment:**

1. **Multilingue natif DE/FR/IT/EN**
   - Switcher top-right toujours visible
   - Contenu fully traduit
   - Standard suisse appliqué parfaitement

2. **Explicit SME targeting**
   - "SME IT Solution" packagé spécifique
   - "Over 40 SME Centers throughout Switzerland" (proximité)
   - "Designed with SMEs in mind" messaging
   - **Rare en Suisse - opportunité benchmarking**

3. **Calculateur coût**
   - Tool homepage pour estimer coûts IT
   - Self-service qualification
   - Lead generation intelligent

4. **Trust signals suisses**
   - "Swiss data centers" explicit
   - "Switzerland's biggest Microsoft partner"
   - Physical presence = 40 centres listés

**Ce qui ne marche pas:**
- Navigation trop profonde (3 niveaux)
- Pricing semi-transparent (requires clicks, calculateur)
- Trop corporate/telco, pas agile startup feel

**Application DAINAMICS:**
- **Copiez explicit SME targeting** (vous seriez premiers agence dev suisse à le faire)
- Calculateur ROI automation (Swisscom a coût, vous avez économies)
- Multilingue DE/FR/EN minimum
- Emphasis "bureaux Romandie" proximité physique

---

## 🎯 Conclusion : Votre Avantage Compétitif

### Le Gap de Marché Suisse Identifié

Après analyse 25+ sites, voici la **réalité concurrentielle suisse:**

1. **Pricing opaque:** 0% agences suisses montrent prix → Vous montrez ranges = **différenciation massive**
2. **Navigation complexe:** Moyenne 7-9 items, 3 niveaux → Vous faites 6 items, 2 niveaux = **clarté supérieure**
3. **Pas de focus SME explicite:** Swisscom seul à cibler PME ouvertement → Vous "IA pour PME" = **niche claire**
4. **Zéro outils auto-qualification:** Aucun calculateur ROI, assessment → Vous offrez = **innovation locale**
5. **Redondance Services/Solutions:** Pattern récurrent → Vous éliminez = **parcours fluide**

### Votre Positionnement Optimal

"DAINAMICS : L'agence IA & Automatisation pragmatique pour PME suisses. Prix clairs, Quick Wins 2 semaines, proximité Romandie. Pas de buzzwords, que du ROI mesurable."

### 3 Principes Directeurs Navigation

1. **Clarté absolue:** PME n'ont pas temps déchiffrer site complexe. 6 items menu, 2 niveaux, labels évidents.
2. **Transparence radicale:** Prix, processus, résultats. Documents publics. Calculateurs accessibles.
3. **Proof avant pitch:** Cas clients homepage. Metrics prominents. Témoignages avec photos.

---

**Version:** 1.0  
**Dernière mise à jour:** 11 Octobre 2025  
**Contact:** contact@dainamics.ch

---

**📚 Voir aussi:**
- [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) - Plan complet 24 semaines
- [STATUS.md](./STATUS.md) - État actuel projet
- [CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md) - Guidelines contenu
- [PRIORITIES.md](./PRIORITIES.md) - Priorisation tâches