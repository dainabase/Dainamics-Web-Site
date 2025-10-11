# 📘 INSTRUCTIONS PROJET - DAINAMICS Website v2.0

## Vue d'ensemble

DAINAMICS est une société suisse spécialisée dans l'IA, l'Automatisation et le Développement sur mesure pour PME. Ce projet vise à créer un site web moderne qui présente nos solutions et génère des leads qualifiés.

---

## 🎯 Objectifs du Projet

### Objectifs Business
- Positionner DAINAMICS comme leader des solutions d'automatisation pour PME suisses
- Générer 15-25 leads qualifiés/mois dans les 6 premiers mois
- Démontrer ROI rapide et valeur tangible (économies CHF, gain de temps)
- Établir crédibilité via cas clients et expertise suisse

### Objectifs Techniques
- Site performant (score Lighthouse >90)
- Animations fluides 60fps
- Responsive mobile-first
- SEO optimisé pour marché suisse
- Intégrations Supabase, analytics, emailing

---

## 🎨 DESIGN SYSTEM OBLIGATOIRE ⭐ CRITIQUE

### 📍 Référence Complète

**Document Principal**: `DESIGN-SYSTEM-MANDATORY.md` (15.5 KB)  
**Architecture Détaillée**: `ARCHITECTURE.md` (lignes 100-800)

**⚠️ RÈGLE ABSOLUE**: TOUS les fichiers DOIVENT utiliser EXACTEMENT ce Design System pour garantir une cohérence parfaite du site.

### Palette Couleurs EXACTE

```typescript
export const COLORS = {
  primary: '#6366F1',      // Indigo - Tech/IA
  cta: '#FF5A00',          // Orange - Call-to-Action
  accent: '#10E4FF',       // Cyan - Automatisation
  success: '#10B981',      // Green - Success states
  warning: '#F59E0B',      // Yellow - Warnings
  error: '#EF4444',        // Red - Errors
  background: '#0A0A0F',   // Dark Navy
  light: '#F1F5F9',        // Light text/elements
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

**Source**: Lucide React v0.263.1  
**Vérification OBLIGATOIRE**: https://lucide.dev  
**Format**: PascalCase (exemple: `Brain`, `Zap`, `Code`, `TrendingUp`)

**⚠️ Avant CHAQUE utilisation**: Vérifier que l'icône existe sur https://lucide.dev

---

## 📋 STANDARDS DE PROMPTS (7 Sections Obligatoires)

### Structure Obligatoire

**Source**: `WORKFLOW.md` (section Standards de Prompts)

Chaque prompt à Claude Code DOIT contenir:

1. **CONTEXTE PROJET** - État actuel, fichier cible, technologies
2. **OBJECTIF PRÉCIS** - Ce qui doit être fait, résultat attendu
3. **STRUCTURE TECHNIQUE EXACTE** - CODE COMPLET (200-500 lignes) + Référence Design System
4. **RÈGLES DE CONTENU** - Standards, gains quantifiés, terminologie
5. **VALIDATION** - 3 checklists (Technique, Contenu, Design System)
6. **PROCESSUS GIT** - Commandes exactes, message commit, format confirmation
7. **GESTION D'ERREURS** - Erreurs possibles, solutions, procédure

**⚠️ Règle**: Ne JAMAIS créer de prompt sans ces 7 sections.

---

## 📚 Hiérarchie Documentation

### 1. DESIGN-SYSTEM-MANDATORY.md ⭐ NOUVEAU
**Statut**: 🔒 Document de référence OBLIGATOIRE  
**Commit**: 95e92a3  
**Contenu**: Couleurs exactes, mappings, icônes Lucide, exemples code

### 2. ARCHITECTURE.md
**Taille**: 81 KB (3397 lignes)  
**Contenu**: Architecture technique complète, design system détaillé, plan implémentation

### 3. WORKFLOW.md
**Taille**: 14.7 KB  
**Contenu**: Standards de code, conventions, processus, standards prompts (7 sections)

### 4. PROMPT-CONTEXT.md ⭐ MIS À JOUR
**Version**: 2.0  
**Commit**: 712c70a  
**Contenu**: Contexte complet pour nouvelles conversations Claude

### 5. CHANGELOG.md
**Version**: 2.2  
**Contenu**: Historique versions et changements

### 6. README.md
**Version**: 2.1  
**Contenu**: Vue d'ensemble, quick start, règles critiques

---

## 💻 Principes Directeurs

### Contenu & Messaging
1. **Langage Simple et Business**: Éviter jargon technique, focus valeur PME
2. **Concret et Mesurable**: Toujours quantifier (CHF économisés, heures gagnées, % amélioration)
3. **Approche Suisse**: Conformité nLPD, SwissDec, TVA, support trilingue DE/FR/IT
4. **ROI Démontrable**: Calculateurs interactifs, études de cas avec chiffres réels

### Style Rédactionnel
- Ton professionnel mais accessible
- Phrases courtes et actionnables
- Éviter promesses vagues ("révolutionnaire", "unique")
- Privilégier exemples concrets et témoignages
- **JAMAIS d'emojis** dans le code ou documentation
- Toujours écrire "IA" (pas "AI") en français

### Design & UX
- Design moderne et épuré (inspiration: Stripe, Linear)
- Animations subtiles et fluides (Framer Motion)
- Hiérarchie visuelle claire (Call-to-Actions évidents)
- Navigation intuitive (maximum 3 clics vers information)
- Mobile-first (60%+ trafic mobile attendu)

---

## 🏗️ Structure du Site

### Pages Principales

1. **Homepage** - Hero + 3 Piliers + Solutions Top 3 + Social Proof + CTA
2. **Expertise** - IA, Automatisation, Développement (détail 3 piliers)
3. **Solutions** - 15 automatisations + landing pages prioritaires
4. **Portfolio** - LEXAIA, ENKI-REALTY, +3-5 cas clients
5. **Resources** - Blog, Glossaire, Use Cases, Guides
6. **À Propos** - Mission, Équipe, Approche
7. **Process** - Méthodologie, Timeline, Garanties
8. **Pricing** - 4 tiers (Starter, Professional, Enterprise, Custom)
9. **Contact** - Formulaire + Chatbot IA + Calendrier RDV

### Fonctionnalités Interactives

1. Calculateur ROI (gains temps/argent selon industrie)
2. Diagnostic IA (questionnaire → recommandations personnalisées)
3. AI Maturity Assessment (scoring maturité digitale)
4. Chatbot multilingue 24/7
5. Comparateur solutions (side-by-side features)
6. Simulateur pricing dynamique
7. Démos interactives (vidéos + tooltips)
8. Système réservation RDV intégré

---

## 🛠️ Stack Technique

### Frontend
- React 18.3.1 avec TypeScript 5.5.3
- Vite 5.3.4 (build tool)
- Tailwind CSS 3.4.1 (styling)
- Framer Motion 11.3.21 (animations)
- Lucide React 0.263.1 (icônes)
- React Hook Form + Zod (formulaires)

### Backend & Services
- Supabase (PostgreSQL, Auth, Storage)
- Brevo/SendGrid (emailing)
- Google Analytics 4 + Plausible (analytics)
- Cal.com (réservations RDV)

### Développement
- Claude Code (outil principal)
- GitHub (version control)
- Vercel/Netlify (hosting)

---

## 📏 Standards de Code

### Règles TypeScript

```typescript
// ✅ BON - Typage strict
interface Solution {
  id: string;
  title: string;
  category: 'ia' | 'automatisation' | 'developpement';
  complexity: 'starter' | 'intermediate' | 'advanced';
  icon: string;  // Nom Lucide React
  roi: {
    timeframe: string;
    savings: number;
  };
}

// ❌ MAUVAIS - any types
const solution: any = {...}
```

### Conventions Nommage
- Components: PascalCase (`Hero.tsx`, `SolutionCard.tsx`)
- Fichiers utils: camelCase (`formatCurrency.ts`)
- Fichiers data: camelCase (`solutions.ts`, `testimonials.ts`)
- CSS classes: kebab-case Tailwind

### Structure Fichiers

```
src/
├── components/
│   ├── ui/         # Design System (Button, Card, Badge)
│   ├── layout/     # Layout (Header, Footer)
│   └── features/   # Feature components
├── data/           # Data statiques
│   ├── solutions.ts ✅
│   ├── portfolio.ts ⏳
│   ├── expertise.ts ⏹️
│   └── ...
├── hooks/          # Custom React hooks
├── pages/          # Pages routes
├── styles/         # Global styles
├── types/          # TypeScript types
└── utils/          # Fonctions utilitaires
```

---

## 🚀 Workflow de Développement

### Phase 1: MVP Foundation (Semaines 1-3)

**Semaine 1** ✅ TERMINÉE
- [x] Setup projet Vite + TypeScript + Tailwind
- [x] Créer Design System (Button, Card, Badge, Forms)
- [x] Développer Layout (Header, Footer)
- [x] Homepage sections 1-5

**Semaine 2** ⏳ EN COURS
- [x] Homepage complète (sections 6-9)
- [x] Navigation.tsx avec menu complet ✅
- [x] solutions.ts avec 15 scénarios ✅
- [⏳] portfolio.ts (EN COURS par Claude Code)
- [ ] expertise.ts
- [ ] Calculateur ROI interactif
- [ ] Diagnostic IA questionnaire

**Semaine 3**
- [ ] Page Expertise complète
- [ ] Page Solutions + 3 landing pages prioritaires
- [ ] Page Portfolio (LEXAIA, ENKI-REALTY)

### Phase 2: Content & Features (Semaines 4-5)
- [ ] Case studies détaillés
- [ ] Resources Hub + Blog structure
- [ ] Glossaire + Use Cases
- [ ] AI Maturity Assessment

### Phase 3: Polish & Launch (Semaines 6-7)
- [ ] Pages Business (Process, Pricing, About)
- [ ] Contact + AI Chatbot
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] QA finale + tests

---

## ✅ Checklist Avant Commit

### Code Quality
- [ ] TypeScript sans erreurs
- [ ] ESLint warnings résolues
- [ ] Components typés strictement
- [ ] Pas de console.log oubliés
- [ ] Pas d'emojis dans le code
- [ ] Design System respecté

### Performance
- [ ] Images optimisées (WebP, lazy loading)
- [ ] Animations 60fps
- [ ] Bundle size raisonnable
- [ ] Lighthouse score >90

### Accessibilité
- [ ] Contraste WCAG AA minimum
- [ ] Attributs ARIA appropriés
- [ ] Navigation clavier fonctionnelle
- [ ] Alt text sur images

### Contenu
- [ ] Textes relus (zéro fautes)
- [ ] "IA" utilisé (pas "AI")
- [ ] Noms projets corrects (LEXAIA, ENKI-REALTY)
- [ ] URLs et emails valides
- [ ] CTAs clairs et actionnables
- [ ] Gains quantifiés (CHF, %, heures)

### Design System
- [ ] Couleurs EXACTES utilisées
- [ ] Icônes Lucide vérifiées sur lucide.dev
- [ ] Mappings catégories/complexité respectés
- [ ] Pas de couleurs HEX hardcodées
- [ ] TypeScript strict (pas de `any`)

---

## 📖 Ressources & Documentation

### Documentation Projet (Par ordre d'importance)

1. **DESIGN-SYSTEM-MANDATORY.md** ⭐ CRITIQUE (15.5 KB)
   - Palette couleurs EXACTE
   - Mappings obligatoires
   - Icônes Lucide avec vérification
   - Exemples code complets
   - Checklist validation

2. **ARCHITECTURE.md** (81 KB, 3397 lignes)
   - Document principal specs complètes
   - Design System ultra-détaillé (lignes 100-800)
   - Animations Framer Motion (lignes 800-1500)
   - Structure pages (lignes 1500-2500)
   - Plan implémentation (lignes 3000-3200)

3. **WORKFLOW.md** (14.7 KB)
   - Standards de prompts (7 sections obligatoires)
   - Processus développement
   - Conventions code

4. **PROMPT-CONTEXT.md v2.0** (16.4 KB)
   - Contexte complet pour nouvelles conversations
   - État actuel projet
   - Prochaines étapes

5. **CHANGELOG.md** (v2.2) - Historique changements
6. **README.md** (v2.1) - Vue d'ensemble quick start

### Documents Référence
- TOP 15 Automatisations (scoring commercial + specs techniques)
- Design System (components, couleurs, animations)
- Content Guidelines (tone, messaging, exemples)

### Liens Utiles
- **Repository**: https://github.com/dainabase/Dainamics-Web-Site
- **Commits**: https://github.com/dainabase/Dainamics-Web-Site/commits/main
- **Lucide Icons**: https://lucide.dev (v0.263.1)
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Supabase Docs**: https://supabase.com/docs

---

## 🆘 Support & Questions

### Procédure Standard

1. ✅ Consulter **DESIGN-SYSTEM-MANDATORY.md** en priorité
2. ✅ Vérifier **ARCHITECTURE.md** pour spécifications complètes
3. ✅ Vérifier **WORKFLOW.md** pour standards prompts
4. ✅ Examiner **PROMPT-CONTEXT.md** pour état actuel
5. ✅ Regarder fichiers existants comme exemples (solutions.ts, Navigation.tsx)

### Si Bloqué

1. ⚠️ STOP immédiatement
2. 📝 Noter l'erreur exacte (screenshot ou copie)
3. 📝 Noter la commande qui a causé l'erreur
4. 📝 Vérifier les derniers commits sur GitHub
5. 🙋 Demander assistance avec contexte complet

---

## ⚠️ Règles d'Or (CRITIQUE)

### Développement
1. ✅ **Design System OBLIGATOIRE** - Référencer dans CHAQUE prompt
2. ✅ **Code Complet** - Toujours 200-500 lignes, pas descriptions
3. ✅ **TypeScript Strict** - Jamais `any`, toujours typage
4. ✅ **Icônes Lucide** - Vérifier sur lucide.dev AVANT usage
5. ✅ **Commit + Push** - Après CHAQUE tâche
6. ✅ **Validation** - Attendre avant de continuer

### Contenu
1. ✅ **Gains Quantifiés** - Toujours CHF, %, heures
2. ✅ **"IA" pas "AI"** - En français uniquement
3. ❌ **Pas d'Emojis** - Jamais dans code/documentation
4. ✅ **Noms Corrects** - LEXAIA, ENKI-REALTY, Claude Code
5. ✅ **Conformité Suisse** - nLPD, SwissDec, TVA
6. ✅ **Mobile-First** - Toujours designer mobile d'abord

### Prompts
1. ✅ **7 Sections** - Structure obligatoire (WORKFLOW.md)
2. ✅ **Code Complet** - Dans section 3
3. ✅ **3 Checklists** - Technique + Contenu + Design System
4. ✅ **Design System** - Référencé explicitement
5. ✅ **Git Exact** - Commandes précises
6. ✅ **Erreurs** - Gestion complète

---

## 📊 État Actuel du Projet

### Fichiers Terminés ✅
- DESIGN-SYSTEM-MANDATORY.md (Commit 95e92a3)
- ARCHITECTURE.md (v2.0, 81 KB)
- WORKFLOW.md (v1.1)
- PROMPT-CONTEXT.md (v2.0, Commit 712c70a)
- CHANGELOG.md (v2.2)
- README.md (v2.1)
- src/data/solutions.ts (Commit 6a193bb)
- src/components/Navigation.tsx (Commit 0314f61)

### Fichiers En Cours ⏳
- src/data/portfolio.ts (Claude Code en exécution)

### Fichiers À Créer ⏹️
- src/data/expertise.ts
- src/data/testimonials.ts
- src/data/integrations.ts
- src/data/pricingPackages.ts
- src/data/useCases.ts
- src/data/glossary.ts

### Commits Récents
```
712c70a - docs(prompt-context): update v2.0 with design system
95e92a3 - docs(design-system): add mandatory design system guide
0314f61 - feat(navigation): add complete menu structure
6a193bb - feat(data): add solutions.ts with 15 scenarios
```

---

## 🎯 Prochaines Étapes Immédiates

### 1. Attendre Validation portfolio.ts
- Claude Code termine l'exécution
- Vérifier le commit
- Valider le contenu

### 2. Créer expertise.ts
- 3 piliers: IA, Automatisation, Développement
- Structure similaire à solutions.ts
- Design System obligatoire

### 3. Créer Page /solutions
- Afficher les 15 solutions
- Filtres par catégorie/industrie
- Animations Framer Motion

### 4. Créer Page /portfolio
- Afficher projets (LEXAIA, ENKI-REALTY + 3)
- Featured projects en avant
- Case studies détaillés

---

## 💡 Exemples d'Utilisation

### Créer un Prompt pour Claude Code

```
"Créer src/data/expertise.ts avec les 3 piliers DAINAMICS:

1. IA (Intelligence Artificielle)
   - LLMs, Agents, Computer Vision, NLP, ML

2. Automatisation
   - RPA, Workflow, Integration, Process Mining

3. Développement
   - Web Apps, Mobile Apps, APIs, Cloud

Format similaire à solutions.ts avec:
- Interface TypeScript stricte
- Mappings CATEGORY_COLORS obligatoires
- Icônes Lucide vérifiées sur lucide.dev
- Helpers: getExpertiseByCategory(), etc.

IMPORTANT: Référencer DESIGN-SYSTEM-MANDATORY.md
et créer prompt avec 7 sections obligatoires."
```

### Valider un Fichier

```
"Vérifier que portfolio.ts respecte:

✅ TypeScript strict (pas de `any`)
✅ Couleurs CATEGORY_COLORS utilisées
✅ Icônes Lucide vérifiées sur lucide.dev
✅ Gains quantifiés (CHF, %, heures)
✅ LEXAIA et ENKI-REALTY corrects
✅ Pas d'emojis dans le code
✅ Format helpers exportés

Si OK → Valider
Si NON → Lister corrections nécessaires"
```

---

**VERSION**: 2.0  
**DATE**: 11 Octobre 2025  
**STATUS**: ✅ Mis à jour avec Design System Mandatory + Standards Prompts  
**DERNIÈRE MISE À JOUR**: Après création DESIGN-SYSTEM-MANDATORY.md et PROMPT-CONTEXT.md v2.0

---

**🚨 RAPPEL FINAL**: La cohérence du site dépend de l'application STRICTE du Design System dans CHAQUE fichier créé ou modifié. Toujours référencer **DESIGN-SYSTEM-MANDATORY.md** et utiliser les **7 sections obligatoires** pour les prompts.
