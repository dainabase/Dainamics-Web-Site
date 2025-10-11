# 📋 PROMPT CONTEXT COMPLET - DAINAMICS Website v2.0

> **Copiez-collez ce prompt dans une nouvelle conversation avec Claude pour avoir tout le contexte nécessaire**

---

## 🎯 CONTEXTE GÉNÉRAL

### État du Projet

- **Nom**: DAINAMICS Website
- **Phase**: Développement Phase 1 - Fondations (Semaine 1-3)
- **Repository**: https://github.com/dainabase/Dainamics-Web-Site
- **Branch**: main
- **Date**: 11 Octobre 2025
- **Stack**: React 18+ | TypeScript 5+ | Vite 5+ | Tailwind CSS 3+ | Framer Motion 11+

### Rôle des Assistants

**Claude Assistant (Chat) = ARCHITECTE**
- Crée des prompts ULTRA détaillés (7 sections obligatoires)
- Donne le code complet (200-500 lignes, pas juste des descriptions)
- Valide le travail de Claude Code
- Référence OBLIGATOIREMENT le Design System dans chaque prompt

**Claude Code (Terminal) = EXÉCUTANT**
- Suit les instructions à la lettre
- Commit + Push après CHAQUE tâche
- Attend validation avant de continuer

---

## 📚 DOCUMENTATION PRINCIPALE (Hiérarchie)

### 1. DESIGN-SYSTEM-MANDATORY.md ⭐ **NOUVEAU & CRITIQUE**
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

### 3. WORKFLOW.md ⭐ **NOUVEAUX STANDARDS**
**Taille**: 14.7 KB  
**Standards de Prompts (7 sections obligatoires):**
1. Contexte Projet
2. Objectif Précis
3. Structure Technique Exacte (avec CODE COMPLET 200-500 lignes)
4. Règles de Contenu
5. Validation (3 checklists: Technique, Contenu, Design System)
6. Processus Git (commandes exactes)
7. Gestion d'Erreurs

**⚠️ Règle**: Chaque prompt à Claude Code DOIT suivre ces 7 sections.

### 4. CHANGELOG.md
**Version**: 2.2  
**Historique**: Toutes les versions et changements

### 5. README.md
**Version**: 2.1  
**Vue d'ensemble**: Quick start + Stack + Règles critiques

---

## ✅ CE QUI A ÉTÉ FAIT (État Actuel)

### Fichiers Documentation ✅
- ✅ DESIGN-SYSTEM-MANDATORY.md (v1.0 - Commit 95e92a3)
- ✅ ARCHITECTURE.md (v2.0 - 81 KB)
- ✅ WORKFLOW.md (v1.1 - Standards prompts)
- ✅ CHANGELOG.md (v2.2)
- ✅ README.md (v2.1)
- ✅ PROMPT-CONTEXT.md (v2.0 - CE FICHIER)

### Fichiers Data Créés ✅
- ✅ **src/data/solutions.ts** (Commit 6a193bb)
  - 15 scénarios d'automatisation
  - Interface TypeScript stricte
  - 7 Quick Wins identifiés
  - Helpers: getProjectsByCategory, quickWinSolutions, etc.
  - Design System respecté (couleurs, icônes Lucide)
  - Taille: 21.2 KB (478 lignes)

### Components Mis à Jour ✅
- ✅ **src/components/Navigation.tsx** (Commit 0314f61)
  - Menu complet 8 items principaux + 13 sous-items
  - Dropdowns desktop (hover) + Accordéons mobile (click)
  - Badge "Coming Soon" sur 6 pages
  - Active state avec useLocation
  - Langue par défaut: FR
  - CTAs: "Diagnostic Gratuit" + "Contact"
  - Taille: 11.8 KB (381 lignes)

### Fichiers à Créer ⏹️
- ⏳ **src/data/portfolio.ts** (EN COURS par Claude Code)
- ⏹️ src/data/expertise.ts
- ⏹️ src/data/testimonials.ts
- ⏹️ src/data/integrations.ts
- ⏹️ src/data/pricingPackages.ts
- ⏹️ src/data/useCases.ts
- ⏹️ src/data/glossary.ts

### Commits Récents (3 derniers)
```
95e92a3 - docs(design-system): add mandatory design system reference guide
0314f61 - feat(navigation): add complete menu structure with dropdowns
6a193bb - feat(data): add solutions.ts with 15 automation scenarios
```

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

**Icônes Recommandées:**
```typescript
import { 
  Brain,           // IA
  Zap,             // Automatisation
  Code,            // Développement
  TrendingUp,      // ROI
  Clock,           // Temps
  CheckCircle,     // Success
  Star,            // Featured
  FileText,        // Documents
  Building,        // Entreprise
  Users,           // Équipe
  Target,          // Objectifs
  // ... voir DESIGN-SYSTEM-MANDATORY.md pour liste complète
} from 'lucide-react';
```

---

## 📋 STANDARDS DE PROMPTS (7 Sections Obligatoires)

### Structure Template

Chaque prompt à Claude Code DOIT contenir:

```
1. CONTEXTE PROJET
   - État actuel
   - Fichier à créer/modifier
   - Technologies

2. OBJECTIF PRÉCIS
   - Ce qui doit être fait
   - Résultat attendu

3. STRUCTURE TECHNIQUE EXACTE
   - CODE COMPLET (200-500 lignes)
   - Interface TypeScript
   - Exemples complets
   - ⚠️ Référence Design System

4. RÈGLES DE CONTENU
   - Standards rédactionnels
   - Gains quantifiés
   - Terminologie correcte

5. VALIDATION (3 Checklists)
   ✅ Checklist Technique (10-15 critères)
   ✅ Checklist Contenu (10-15 critères)
   ✅ Checklist Design System (10 critères)

6. PROCESSUS GIT
   - Commandes exactes
   - Message commit standardisé
   - Format confirmation

7. GESTION D'ERREURS
   - Erreurs possibles
   - Solutions
   - Procédure si bloqué
```

**Exemple Prompt Référence**: Voir le prompt pour portfolio.ts créé aujourd'hui (1500+ lignes).

---

## 🚀 PROCHAINES ÉTAPES IMMÉDIATES

### Tâche #3: portfolio.ts (EN COURS)
**Status**: ⏳ Claude Code exécute le prompt  
**Fichier**: `src/data/portfolio.ts`  
**Contenu**:
- Interface PortfolioProject strictement typée
- 5 projets minimum (LEXAIA, ENKI-REALTY + 3 autres)
- Métriques quantifiées (CHF, %, heures)
- Technologies utilisées
- Témoignages clients
- Mapping categoryColors et complexityColors
- Helpers: getProjectsByCategory, getFeaturedProjects, etc.

### Après portfolio.ts
1. **expertise.ts** - 3 piliers (IA, Automatisation, Développement)
2. **testimonials.ts** - Témoignages clients
3. **Page /solutions** - Afficher les 15 solutions
4. **Page /portfolio** - Afficher les projets

---

## 📊 PLAN DE DÉVELOPPEMENT (Phase 1)

### Phase 1: MVP Foundation (Semaines 1-3)

**Semaine 1** ✅ TERMINÉE
- [x] Setup projet Vite + TypeScript + Tailwind
- [x] Créer Design System (Button, Card, Badge, Forms)
- [x] Développer Layout (Header, Footer)
- [x] Homepage sections 1-5

**Semaine 2** ⏳ EN COURS
- [x] Homepage complète
- [x] Navigation complète avec menu
- [x] Créer solutions.ts ✅
- [⏳] Créer portfolio.ts (EN COURS)
- [ ] Créer expertise.ts
- [ ] Calculateur ROI interactif
- [ ] Diagnostic IA questionnaire

**Semaine 3**
- [ ] Page Expertise complète
- [ ] Page Solutions + 3 landing pages prioritaires
- [ ] Page Portfolio (LEXAIA, ENKI-REALTY)

Voir timeline complète dans ARCHITECTURE.md (lignes 3000-3200).

---

## 🔧 STACK TECHNIQUE

```yaml
# Frontend
Framework: React 18.3.1
Language: TypeScript 5.5.3
Build Tool: Vite 5.3.4
Styling: Tailwind CSS 3.4.1
Animations: Framer Motion 11.3.21
Icons: Lucide React 0.263.1
UI Components: shadcn/ui
Router: React Router DOM 6.x

# State Management
Global State: Zustand
Form State: React Hook Form
Validation: Zod

# Backend & Services
Database: Supabase (PostgreSQL)
Authentication: Supabase Auth
Storage: Supabase Storage
Email: Brevo / SendGrid
Analytics: GA4 + Plausible

# Development Tools
Version Control: Git + GitHub
IDE: Claude Code (primary)
Package Manager: npm
Linting: ESLint + Prettier
Testing: Vitest + Testing Library
```

---

## 📁 STRUCTURE DU PROJET

```
src/
├── components/
│   ├── common/         # Design System (Button, Card, Badge)
│   ├── layout/         # Header, Footer, Navigation
│   ├── features/       # ROI Calculator, Diagnostic, etc.
│   ├── sections/       # Page sections
│   └── ui/             # shadcn/ui components
├── data/
│   ├── solutions.ts ✅    # 15 automatisations
│   ├── portfolio.ts ⏳    # Projets (EN COURS)
│   ├── expertise.ts ⏹️    # 3 piliers
│   ├── testimonials.ts ⏹️
│   ├── integrations.ts ⏹️
│   ├── pricingPackages.ts ⏹️
│   ├── useCases.ts ⏹️
│   └── glossary.ts ⏹️
├── pages/              # Route pages
├── types/              # TypeScript interfaces
├── hooks/              # Custom React hooks
├── lib/                # Utils, configs
└── styles/             # Global CSS
```

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

### Format Case Study

Chaque projet doit inclure:
- ID, title, client, industry
- Category (ia/automatisation/developpement)
- Complexity (starter/intermediate/advanced)
- Description, challenge, solution
- Results avec 2-3 métriques quantifiées
- Technologies utilisées (8-12)
- Testimonial client
- Featured boolean
- Year, duration, team

---

## ⚠️ RÈGLES CRITIQUES À RESPECTER

### Développement

1. ✅ **Design System OBLIGATOIRE** - Référencer DESIGN-SYSTEM-MANDATORY.md dans CHAQUE prompt
2. ✅ **Code Complet** - Toujours donner le code complet (200-500 lignes), pas juste des descriptions
3. ✅ **TypeScript Strict** - Jamais de `any`, toujours typage strict
4. ✅ **Icônes Lucide** - Vérifier sur https://lucide.dev avant usage
5. ✅ **Commit + Push** - Après CHAQUE tâche terminée
6. ✅ **Validation** - Attendre validation avant de continuer

### Contenu

1. ✅ **Gains Quantifiés** - Toujours avec CHF, %, ou heures
2. ✅ **"IA" pas "AI"** - En français uniquement
3. ❌ **Pas d'Emojis** - Jamais dans le code ou documentation
4. ✅ **Noms Corrects** - LEXAIA, ENKI-REALTY (majuscules)
5. ✅ **Conformité Suisse** - nLPD, SwissDec, TVA
6. ✅ **Mobile-First** - Toujours designer mobile d'abord

### Standards Prompts

1. ✅ **7 Sections Obligatoires** - Voir WORKFLOW.md
2. ✅ **Code Complet Fourni** - 200-500 lignes minimum
3. ✅ **3 Checklists** - Technique + Contenu + Design System
4. ✅ **Design System Référencé** - Dans section 4
5. ✅ **Commandes Git Exactes** - Dans section 6

---

## 🔗 LIENS UTILES

### Documentation

- **Repository**: https://github.com/dainabase/Dainamics-Web-Site
- **DESIGN-SYSTEM-MANDATORY.md**: https://github.com/dainabase/Dainamics-Web-Site/blob/main/DESIGN-SYSTEM-MANDATORY.md
- **ARCHITECTURE.md**: https://github.com/dainabase/Dainamics-Web-Site/blob/main/ARCHITECTURE.md
- **WORKFLOW.md**: https://github.com/dainabase/Dainamics-Web-Site/blob/main/WORKFLOW.md
- **Commits**: https://github.com/dainabase/Dainamics-Web-Site/commits/main

### Ressources Externes

- **Lucide Icons**: https://lucide.dev (v0.263.1)
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org

---

## 💡 EXEMPLES DE DEMANDES

### Pour Créer des Fichiers Data

```
"Créer src/data/expertise.ts avec les 3 piliers:
- IA (LLMs, Agents, Computer Vision, NLP, ML)
- Automatisation (RPA, Workflow, Integration)
- Développement (Web Apps, Mobile Apps, APIs)
Suivre le même format que solutions.ts avec TypeScript strict
et Design System obligatoire."
```

### Pour Créer des Pages

```
"Créer la page /solutions qui affiche les 15 solutions
de solutions.ts avec:
- Grid responsive
- Filtres par catégorie
- Filtres par industrie
- Badge Quick Win
- Modal détail solution
Design System obligatoire + Framer Motion animations."
```

### Pour Créer des Components

```
"Créer le component SolutionCard.tsx pour afficher
une solution avec:
- Icône Lucide (dynamique depuis solution.icon)
- Couleur catégorie (depuis CATEGORY_COLORS)
- Badge complexité (depuis COMPLEXITY_COLORS)
- Hover effects Framer Motion
TypeScript strict + Design System obligatoire."
```

---

## 🆘 BESOIN D'AIDE ?

### Si Vous Êtes Perdu

1. ✅ Consulter **DESIGN-SYSTEM-MANDATORY.md** en priorité
2. ✅ Vérifier **ARCHITECTURE.md** pour specs complètes
3. ✅ Regarder **WORKFLOW.md** pour standards prompts
4. ✅ Examiner **solutions.ts** et **Navigation.tsx** comme exemples
5. ✅ Vérifier les derniers commits sur GitHub

### Si Claude Code Est Bloqué

1. ⚠️ STOP immédiatement
2. 📝 Noter l'erreur exacte (screenshot ou copie)
3. 📝 Noter la commande qui a causé l'erreur
4. 🙋 Demander assistance avec contexte complet
5. ❌ NE PAS continuer sans validation

---

## 🎯 PRÊT À COMMENCER ?

**Dis-moi ce que tu veux développer et je crée le prompt ultra-détaillé !**

Exemples:
- "Créer expertise.ts"
- "Créer la page /solutions"
- "Créer le component SolutionCard"
- "Implémenter le Calculateur ROI"
- "Créer testimonials.ts"

**Rappel**: Je vais créer un prompt de 1500+ lignes avec:
- ✅ 7 sections obligatoires
- ✅ Code complet fourni (200-500 lignes)
- ✅ Design System référencé explicitement
- ✅ 3 checklists de validation
- ✅ Commandes Git exactes
- ✅ Gestion d'erreurs complète

---

**VERSION**: 2.0  
**DATE**: 11 Octobre 2025  
**STATUS**: ✅ Mis à jour avec Design System Mandatory + Standards Prompts  
**PROCHAINE ÉTAPE**: portfolio.ts validation → expertise.ts

---

Voilà ! Tu as maintenant TOUT le contexte nécessaire pour développer avec Claude Code. 🚀
