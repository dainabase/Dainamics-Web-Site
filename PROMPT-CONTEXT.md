# 📋 PROMPT CONTEXT COMPLET - DAINAMICS Website v2.1

> **MISE À JOUR CRITIQUE**: Claude travaille maintenant en direct (plus de Claude Code)

---

## 🚨 NOUVEAU WORKFLOW D'EXÉCUTION - CRITIQUE

### ⚡ Claude Travaille DIRECTEMENT Maintenant

**CHANGEMENT MAJEUR:**
- ❌ **TERMINÉ**: Workflow avec Claude Code
- ✅ **NOUVEAU**: Claude fait le travail lui-même directement sur GitHub

**Comment ça fonctionne:**
1. Claude se connecte directement au repository GitHub
2. Claude lit, crée et modifie les fichiers
3. Claude commit et push directement
4. Tout se fait dans la conversation

**Avantages:**
- Plus rapide (pas d'intermédiaire)
- Plus fluide (conversation unique)
- Meilleur contrôle qualité
- Pas de copier-coller de prompts

---

## 🎨 APPROCHE PÉDAGOGIQUE OBLIGATOIRE

### 📐 Design des Pages - Inspiration Index.tsx

**RÈGLE D'OR**: S'inspirer au MAXIMUM de la page d'accueil (Index.tsx) pour toutes les nouvelles pages

**Éléments à réutiliser:**
1. **Layouts multi-colonnes** (texte + visuel)
2. **Animations Framer Motion** synchronisées avec le contenu
3. **Sections structurées** (Hero, Features, Benefits, etc.)
4. **Grid Background** avec effets parallax
5. **Typography** (h1, h2, p) consistante
6. **Spacing** et rythme vertical

### 🧠 Approche Pédagogique = Montrer + Expliquer

**PRINCIPE CLEF**: Chaque solution/concept DOIT être expliqué visuellement avec des animations

**Format Standard:**
```
┌─────────────────────────────────────────┐
│  TEXTE (Gauche)        ANIMATION (Droite) │
│  ─────────────         ────────────────  │
│  • Titre               [Animation SVG]   │
│  • Description         [Schéma animé]    │
│  • Bénéfices           [Illustration]    │
│  • ROI quantifié       [Graphique]       │
└─────────────────────────────────────────┘
```

### 💡 Exemples d'Animations Pédagogiques

**Référence**: Animation cerveau sur hero de la page d'accueil

**Types d'animations à créer:**

1. **Pour l'IA:**
   - Cerveau connecté avec nœuds
   - Flux de données animés
   - Analyse de texte en temps réel
   - Transformation input → output

2. **Pour l'Automatisation:**
   - Workflow en cascade
   - Connexion entre systèmes (APIs)
   - Processus before → after
   - Temps gagné visualisé

3. **Pour le Développement:**
   - Architecture système
   - Stack technique en couches
   - Flux utilisateur (user journey)
   - Code qui s'écrit/compile

### 🎯 Structure Type d'une Page

**Inspiré de Index.tsx:**

```typescript
// Page Structure
1. Hero Section
   - Titre accrocheur
   - Description courte
   - Animation principale (ex: cerveau)
   - CTA primaire

2. Problème Section (2 colonnes)
   - Gauche: Explication du problème
   - Droite: Animation illustrant le problème

3. Solution Section (2 colonnes)
   - Gauche: Comment on résout
   - Droite: Schéma animé de la solution

4. Bénéfices Section (Grid 3 cols)
   - Cards avec icônes animées
   - Gains quantifiés
   - Hover effects

5. Fonctionnement Section (Stepper)
   - Étapes numérotées
   - Animations progressives
   - Timeline visuelle

6. Résultats Section (Stats)
   - Métriques animées (CountUp)
   - Graphiques
   - Témoignages

7. CTA Section
   - Appel à l'action clair
   - Formulaire ou lien contact
```

### 🔧 Composants Réutilisables à Créer

**Pour animations pédagogiques:**

1. **AnimatedDiagram** - Schémas techniques animés
2. **ProcessFlow** - Workflows en cascade
3. **BeforeAfter** - Comparaison avant/après
4. **DataVisualization** - Graphiques animés
5. **SystemArchitecture** - Architecture systèmes
6. **CodeAnimation** - Code qui s'anime
7. **NetworkGraph** - Graphes de connexions
8. **TimelineStepper** - Timeline interactive

### 📋 Checklist Design Pédagogique

Pour CHAQUE nouvelle page, vérifier:

- [ ] S'inspire du layout Index.tsx
- [ ] Sections multi-colonnes (texte + animation)
- [ ] Au moins 1 animation pédagogique par section
- [ ] Schémas animés pour expliquer concepts techniques
- [ ] Gains TOUJOURS visualisés (graphiques, compteurs)
- [ ] Processus expliqués étape par étape avec visuels
- [ ] Animations synchronisées avec scroll (IntersectionObserver)
- [ ] Mobile-first (animations adaptées)
- [ ] Performance (animations 60fps)
- [ ] Framer Motion pour toutes les animations

---

## 🎯 CONTEXTE GÉNÉRAL

### État du Projet

- **Nom**: DAINAMICS Website
- **Phase**: Développement Phase 1 - Fondations (Semaine 1-3)
- **Repository**: https://github.com/dainabase/Dainamics-Web-Site
- **Branch**: main
- **Date**: 13 Octobre 2025
- **Stack**: React 18+ | TypeScript 5+ | Vite 5+ | Tailwind CSS 3+ | Framer Motion 11+

### Mode de Travail

**NOUVEAU**: Claude travaille directement
- Se connecte à GitHub
- Lit/crée/modifie les fichiers
- Commit et push directement
- Pas de Claude Code intermédiaire

---

## 🚀 Transformation en Cours

### Documents Stratégiques Reçus
Le projet a reçu 2 documents majeurs qui redéfinissent l'architecture :

1. **Architecture Web Optimale** (30+ KB)
   - Analyse de 25+ sites leaders (Zapier, Boldare, Netguru, etc.)
   - Patterns récurrents qui fonctionnent vraiment
   - Recommandations architecture navigation (6 items, 2 niveaux max)
   - Best practices UX/UI actionnables

2. **Plan de Transformation** (29.4 KB)
   - Roadmap complète 24 semaines
   - 3 phases détaillées (Quick Wins, Contenu & Différenciation, Optimisation & Scale)
   - Tâches spécifiques par semaine
   - Checklist finale de validation

### Nouvelle Structure Documentation (Octobre 2025)
Documentation restructurée en 5 catégories :

**🗺️ Planification (Vision Long-Terme):**
- [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) - Plan complet 24 semaines
- [NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md) - Structure menu optimale
- [CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md) - Guidelines contenu & rédaction

**📈 Suivi (État Actuel):**
- [STATUS.md](./STATUS.md) - Dashboard état projet
- [PRIORITIES.md](./PRIORITIES.md) - Priorisation P0/P1/P2/P3
- [CHANGELOG.md](./CHANGELOG.md) - Historique changements

**⚙️ Opérationnel (Usage Quotidien):**
- [INSTRUCTIONS.md](./INSTRUCTIONS.md) - Instructions projet jour-à-jour
- [WORKFLOW.md](./WORKFLOW.md) - Process développement
- [PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md) (ce document) - Contexte pour conversations Claude

**📘 Référence (Standards Techniques):**
- [DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md) - Couleurs & Icônes
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Specs techniques complètes

**🏠 Hub Central:**
- [README.md](./README.md) - Point d'entrée documentation

### Changements Majeurs à Venir

**Phase 1 (Semaines 1-4) - EN COURS:**
- ❌ Réduire menu 9→6 items (CRITIQUE)
- ❌ Éliminer redondance Services/Solutions/Expertise
- ❌ Refonte homepage 8 sections optimales
- ❌ Page Pricing transparente avec ranges prix

**Objectif Global:**
- Conversion 2-3% → 5-8% (x2-3 leads qualifiés)
- Bounce rate <40%
- Temps sur site >3 min
- 20-30 leads qualifiés/mois (vs 5-10 actuellement)

**Consulter [STATUS.md](./STATUS.md) pour état détaillé et progression en temps réel**

---

## 📚 DOCUMENTATION PRINCIPALE (Hiérarchie)

### 1. DESIGN-SYSTEM-MANDATORY.md ⭐ **CRITIQUE**
**Statut**: 🔒 Document de référence OBLIGATOIRE  
**Taille**: 15.5 KB  
**Commit**: 95e92a3

**Contenu critique:**
- ✅ Palette couleurs EXACTE (#6366F1, #FF5A00, #10E4FF, etc.)
- ✅ Mapping catégories → couleurs (ia/automatisation/developpement)
- ✅ Mapping complexité → couleurs (starter/intermediate/advanced)
- ✅ Icônes Lucide React UNIQUEMENT (avec URL vérification: https://lucide.dev)
- ✅ Exemples code TypeScript
- ✅ Checklist validation
- ✅ Erreurs fréquentes à éviter

**⚠️ RÈGLE ABSOLUE**: TOUS les fichiers de code DOIVENT référencer ce document et utiliser EXACTEMENT ces couleurs/icônes/mappings.

### 2. ARCHITECTURE.md
**Taille**: 81 KB (3397 lignes)  
**Sections clés:**
- Vision & Objectifs (lignes 1-50)
- Architecture Technique (lignes 50-100)
- Design System Ultra Détaillé (lignes 100-800)
- Animations Framer Motion Avancées (lignes 800-1500)
- Structure des 12+ Pages (lignes 1500-2500)
- Fonctionnalités Interactives (lignes 2500-3000)
- Plan d'Implémentation 7 semaines (lignes 3000-3200)
- Guidelines Techniques (lignes 3200-3397)

### 3. STATUS.md 🆕 **DASHBOARD ÉTAT**
**Taille**: 10.8 KB  
**Commit**: e71137e

**Contenu:**
- Progression globale (Phase 1: 40%, Phase 2: 0%, Phase 3: 0%)
- Ce qui est terminé/en cours/à faire
- Problèmes identifiés
- Métriques de succès (baseline → objectifs)
- Prochaines actions prioritaires

### 4. TRANSFORMATION-PLAN.md 🆕
**Taille**: 29.4 KB  
**Commit**: f9fd588

**Contenu:**
- Diagnostic initial détaillé
- Vision cible architecture optimale
- Phase 1: Quick Wins (Semaines 1-4)
- Phase 2: Contenu & Différenciation (Semaines 5-12)
- Phase 3: Optimisation & Scale (Semaines 13-24)
- Checklist finale validation

### 5. NAVIGATION-ARCHITECTURE.md 🆕
**Taille**: 24.2 KB  
**Commit**: 1984bbf

**Contenu:**
- Analyse comparative 10 sites référence
- Patterns récurrents
- Structure menu optimale (6 items, 2 niveaux)
- Parcours navigation idéal visiteur PME
- Best practices UX/UI

### 6. CONTENT-STRATEGY.md 🆕
**Taille**: 17.2 KB  
**Commit**: 8ccd991

**Contenu:**
- Principes fondamentaux
- Tone of Voice DAINAMICS
- Structure homepage optimale
- Guidelines rédaction
- Templates pages types

### 7. PRIORITIES.md 🆕
**Taille**: 17.0 KB  
**Commit**: 5187566

**Contenu:**
- Tableau priorisation P0/P1/P2/P3
- 25 tâches principales
- Matrice Impact vs Effort

### 8. WORKFLOW.md
**Taille**: 17.2 KB  
**Version**: v1.2 (mis à jour)

### 9. Index.tsx ⭐ **RÉFÉRENCE DESIGN**
**Localisation**: src/pages/Index.tsx  
**Taille**: ~800 lignes  
**Statut**: Page d'accueil complète et validée

**À utiliser comme référence pour:**
- Structure de page (Hero, Features, sections)
- Layouts multi-colonnes
- Animations Framer Motion
- Intégration Design System
- Typography et spacing
- Grid Background effects
- Responsive design

### 10. CHANGELOG.md
**Version**: 2.3 (mis à jour)  
**Historique**: Toutes les versions et changements

### 11. README.md
**Version**: 2.3 (mis à jour)  
**Vue d'ensemble**: Quick start + Stack + Structure documentation

---

## ✅ CE QUI A ÉTÉ FAIT (État Actuel)

### Fichiers Documentation ✅
- ✅ DESIGN-SYSTEM-MANDATORY.md (v1.0)
- ✅ ARCHITECTURE.md (v2.0 - 81 KB)
- ✅ WORKFLOW.md (v1.2 - mis à jour)
- ✅ STATUS.md (v1.0 - nouveau) 🆕
- ✅ TRANSFORMATION-PLAN.md (v1.0 - nouveau) 🆕
- ✅ NAVIGATION-ARCHITECTURE.md (v1.0 - nouveau) 🆕
- ✅ CONTENT-STRATEGY.md (v1.0 - nouveau) 🆕
- ✅ PRIORITIES.md (v1.0 - nouveau) 🆕
- ✅ CHANGELOG.md (v2.3 - mis à jour)
- ✅ README.md (v2.3 - mis à jour)
- ✅ INSTRUCTIONS.md (v2.2 - mis à jour)
- ✅ PROMPT-CONTEXT.md (v2.1 - CE FICHIER mis à jour)

### Fichiers Data Créés ✅
- ✅ **src/data/solutions.ts** (21.2 KB, 15 automatisations)
- ✅ **src/data/portfolio.ts** (14.1 KB, 5 projets)
- ✅ **src/data/expertise.ts** (30.1 KB, 3 piliers)
- ✅ **src/data/agents.ts** (existe)

### Components & Pages ✅
- ✅ **src/components/Navigation.tsx** (11.8 KB, menu complet)
- ✅ **src/pages/Index.tsx** (page d'accueil complète)
- ✅ **src/pages/Solutions.tsx** (page solutions)
- ✅ **src/pages/Portfolio.tsx** (page portfolio)
- ✅ **src/pages/Expertise.tsx** (hub expertise)
- ✅ **src/pages/ExpertiseIA.tsx** (IA pilier)
- ✅ **src/pages/ExpertiseAutomatisation.tsx** (Auto pilier)
- ✅ **src/pages/ExpertiseDeveloppement.tsx** (Dev pilier)
- ✅ **EnhancedGridBackground.tsx** (2.5 KB, background animé)

### Fichiers à Créer ⏹️
- ⏹️ src/data/glossary.ts (30-50 termes)
- ⏹️ src/data/useCases.ts (10-15 cas d'usage)
- ⏹️ src/data/pricingPackages.ts (4 tiers)
- ⏹️ src/data/testimonials.ts (8-10 témoignages)
- ⏹️ src/data/integrations.ts (intégrations tech)

### Pages à Créer/Améliorer ⏹️
- ⏹️ /solutions/quick-wins
- ⏹️ /solutions/industries
- ⏹️ /use-cases
- ⏹️ /glossary (remplacer ComingSoon)
- ⏹️ /about
- ⏹️ /pricing
- ⏹️ /process (remplacer ComingSoon)

---

## 🎨 DESIGN SYSTEM OBLIGATOIRE

### 📍 Référence Complète
**Document**: `DESIGN-SYSTEM-MANDATORY.md` (15.5 KB)  
**Architecture détaillée**: `ARCHITECTURE.md` (lignes 100-800)

### Palette Couleurs EXACTE

```typescript
// À utiliser dans TOUS les fichiers
export const COLORS = {
  primary: '#6366F1',      // Indigo - Tech/IA
  cta: '#FF5A00',          // Orange - Call-to-Action
  accent: '#10E4FF',       // Cyan - Automatisation
  success: '#10B981',      // Green - Success
  warning: '#F59E0B',      // Yellow - Warnings
  error: '#EF4444',        // Red - Errors
  background: '#0A0A0F',   // Dark Navy
  light: '#F1F5F9',        // Light text
} as const;
```

### Mappings OBLIGATOIRES

**Catégories → Couleurs:**
```typescript
export const CATEGORY_COLORS = {
  'ia': '#6366F1',              // Primary Indigo
  'automatisation': '#10E4FF',   // Accent Cyan
  'developpement': '#FF5A00'     // CTA Orange
} as const;
```

**Complexité → Couleurs:**
```typescript
export const COMPLEXITY_COLORS = {
  'starter': '#10B981',         // Success Green
  'intermediate': '#F59E0B',    // Warning Yellow
  'advanced': '#EF4444'         // Error Red
} as const;
```

### Icônes Lucide React UNIQUEMENT

**Source**: https://lucide.dev  
**Version**: v0.263.1  
**Format**: PascalCase

**⚠️ VÉRIFICATION OBLIGATOIRE**: Avant d'utiliser une icône, TOUJOURS vérifier sur https://lucide.dev

---

## 🎯 POSITIONNEMENT DAINAMICS

### Identité

**PAS seulement**: Une agence d'automatisation suisse  
**MAIS**: Une agence d'expertise tech complète (IA + Automatisation + Développement)

**Triple Expertise:**
1. **IA** - LLMs, Agents, Computer Vision, NLP, ML
2. **Automatisation** - RPA, Workflow, Integration, Process Mining
3. **Développement** - Web Apps, Mobile Apps, APIs, Cloud

**Différenciation**: Réalisations concrètes (LEXAIA, ENKI-REALTY)  
**Portée**: Suisse ET International  
**Cible**: PME 10-150 employés

### Tone of Voice

- ✅ Professionnel mais accessible
- ✅ Orienté business et ROI concret
- ✅ Pas de jargon inutile
- ✅ Focus sur valeur et résultats mesurables
- ❌ JAMAIS d'emojis dans le code
- ✅ Toujours "IA" (pas "AI") en français

---

## 📝 PROJETS PORTFOLIO

### Projets Confirmés

1. **LEXAIA** - Agent IA Juridique (Featured)
   - Analyse contrats
   - Veille juridique
   - Conformité suisse (CO, nLPD, SwissDec)
   - ROI: -87% temps analyse, CHF 180k/an économisés

2. **ENKI-REALTY** - Plateforme Immobilier IA (Featured)
   - Estimation prix ML
   - Matching intelligent
   - Chatbot multilingue 24/7
   - ROI: +156% conversion, <2min temps réponse

3. **+3 autres projets** variés (industries/catégories différentes)

---

## ⚠️ RÈGLES CRITIQUES À RESPECTER

### Développement

1. ✅ **Design System OBLIGATOIRE** - Référencer DESIGN-SYSTEM-MANDATORY.md
2. ✅ **Inspiration Index.tsx** - S'inspirer de la page d'accueil pour layouts
3. ✅ **Approche Pédagogique** - Schémas animés pour expliquer concepts
4. ✅ **Multi-colonnes** - Sections texte + animation synchronisées
5. ✅ **TypeScript Strict** - Jamais de `any`, toujours typage strict
6. ✅ **Icônes Lucide** - Vérifier sur https://lucide.dev avant usage
7. ✅ **Commit Direct** - Claude commit directement sur GitHub

### Contenu

1. ✅ **Gains Quantifiés** - Toujours avec CHF, %, ou heures
2. ✅ **"IA" pas "AI"** - En français uniquement
3. ❌ **Pas d'Emojis** - Jamais dans le code ou documentation
4. ✅ **Noms Corrects** - LEXAIA, ENKI-REALTY (majuscules)
5. ✅ **Conformité Suisse** - nLPD, SwissDec, TVA
6. ✅ **Mobile-First** - Toujours designer mobile d'abord

### Design Pédagogique

1. ✅ **Animations Explicatives** - Au moins 1 par section majeure
2. ✅ **Schémas Visuels** - Pour chaque concept technique
3. ✅ **Framer Motion** - Pour toutes les animations
4. ✅ **Performance** - Animations à 60fps minimum
5. ✅ **Responsive** - Animations adaptées mobile/desktop

---

## 🔗 LIENS UTILES

### Documentation Projet

**Transformation (Nouveau):**
- [STATUS.md](./STATUS.md) - Dashboard état projet
- [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) - Plan 24 semaines
- [NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md) - Structure menu optimale
- [CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md) - Guidelines contenu
- [PRIORITIES.md](./PRIORITIES.md) - Priorisation P0/P1/P2/P3

**Développement:**
- [WORKFLOW.md](./WORKFLOW.md) - Process strict
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Specs techniques (81KB)
- [DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md) - Couleurs/Icônes
- [INSTRUCTIONS.md](./INSTRUCTIONS.md) - Instructions projet
- [PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md) (ce document) - Contexte conversations

**Repository:**
- https://github.com/dainabase/Dainamics-Web-Site
- **Index.tsx** - Référence layouts et animations
- **README.md** - Hub central documentation

### Ressources Externes

- **Lucide Icons**: https://lucide.dev (v0.263.1)
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org

---

## 💡 PROCHAINES ACTIONS

**Consulter [PRIORITIES.md](./PRIORITIES.md) pour le tableau complet de priorisation**

### Priorités Immédiates (P0)

1. **Restructuration Navigation** (9→6 items)
2. **Refonte Homepage** (8 sections optimales)
3. **Page Pricing** (transparente avec ranges)
4. **Portfolio → Projets** (avec filtres)

### Priorités Semaines 5-12 (P1)

1. **Pages Services** détaillées (4 pages)
2. **Notre Approche** (4 pages)
3. **Calculateur ROI** interactif
4. **Assessment Maturité IA**
5. **Ressources** (Glossaire, Cas d'Usage, Blog)

**Pour chaque page:**
- S'inspirer de Index.tsx pour la structure
- Créer des animations pédagogiques
- Sections multi-colonnes (texte + animation)
- Expliquer visuellement chaque concept

---

## 🆘 BESOIN D'AIDE ?

### Si Vous Êtes Perdu

1. ✅ Regarder **[STATUS.md](./STATUS.md)** en priorité (état actuel)
2. ✅ Consulter **[PRIORITIES.md](./PRIORITIES.md)** (quoi faire en premier)
3. ✅ Regarder **Index.tsx** (référence layouts)
4. ✅ Consulter **DESIGN-SYSTEM-MANDATORY.md** (couleurs/icônes)
5. ✅ Vérifier **ARCHITECTURE.md** pour specs complètes

### Si Bloqué

1. ⚠️ STOP immédiatement
2. 📝 Noter l'erreur exacte
3. 📝 Noter ce qui a été tenté
4. 🙋 Demander assistance avec contexte

---

## 🎯 RÉSUMÉ CHANGEMENTS CRITIQUES

### ⚡ Workflow
- **AVANT**: Claude Code exécutait les prompts
- **MAINTENANT**: Claude travaille directement sur GitHub

### 📚 Documentation
- **AVANT**: ARCHITECTURE.md + WORKFLOW.md
- **MAINTENANT**: 5 catégories (Planification, Suivi, Opérationnel, Référence, Hub)

### 🎨 Design
- **AVANT**: Suivre ARCHITECTURE.md
- **MAINTENANT**: S'inspirer d'Index.tsx + approche pédagogique

### 📐 Approche
- **AVANT**: Pages standards
- **MAINTENANT**: Pages pédagogiques avec animations explicatives

### 🧠 Philosophie
**Montrer ET Expliquer visuellement chaque concept**

### 🎯 Objectif Transformation
**Conversion 2-3% → 5-8% en 24 semaines**

---

**VERSION**: 2.1  
**DATE**: 13 Octobre 2025  
**STATUS**: ✅ Mis à jour avec transformation + nouvelle structure documentation  
**CHANGEMENT CRITIQUE**: Documentation restructurée en 5 catégories  
**RÉFÉRENCE**: [STATUS.md](./STATUS.md) pour état détaillé

---

Voilà ! Tu as maintenant le contexte complet incluant la transformation en cours. 🚀
