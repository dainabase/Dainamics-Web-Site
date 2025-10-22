# WORKFLOW - Règles de Développement DAINAMICS

## 🚨 RÈGLES CRITIQUES - À LIRE ABSOLUMENT

### Pour Claude Code et Assistants IA

**RÈGLE ABSOLUE** : Après CHAQUE tâche terminée, vous DEVEZ :
1. ✅ Commit les changements avec un message clair
2. ✅ Push sur GitHub immédiatement
3. ✅ Attendre validation avant de continuer

**Ne JAMAIS** :
- ❌ Accumuler plusieurs tâches sans commit
- ❌ Continuer sans push sur GitHub
- ❌ Passer à l'étape suivante sans validation

---

## 📋 Processus de Développement

### Étape 1 : Recevoir une Tâche
- Lire la tâche complète
- Comprendre l'objectif
- Identifier les fichiers à créer/modifier
- Demander clarification si besoin

### Étape 2 : Planifier
**TOUJOURS communiquer** :
- Quels fichiers seront créés/modifiés
- Où ils seront placés dans l'arborescence
- Quelle structure sera utilisée
- Attendre confirmation avant de commencer

### Étape 3 : Développer
- Créer/modifier les fichiers UN PAR UN ou par groupe logique
- Suivre STRICTEMENT les specs dans ARCHITECTURE.md
- Respecter le Design System
- Utiliser TypeScript strict
- Pas d'emojis dans le code

### Étape 4 : Commit & Push (OBLIGATOIRE)
**Format des commits** :
```bash
type(scope): description courte

# Types :
# - feat: nouvelle fonctionnalité
# - fix: correction bug
# - docs: documentation
# - style: formatage
# - refactor: refactoring
# - test: tests
# - chore: maintenance

# Exemples :
# feat(data): add solutions.ts with TOP 15 automations
# feat(components): add Button variants with glow effects
# docs(readme): update setup instructions
```

**Commandes Git OBLIGATOIRES après chaque tâche** :
```bash
git add .
git commit -m "type(scope): description"
git push origin main
```

### Étape 5 : Valider et Attendre
- ✅ Confirmer que le push est réussi
- ✅ Communiquer ce qui a été fait
- ⏸️ **ATTENDRE validation** avant de continuer
- Ne PAS passer à la tâche suivante

---

## 🎨 STANDARDS DE PROMPTS POUR CLAUDE CODE

### Rôle de l'Architecte vs Exécutant

**L'Architecte (Claude Assistant dans chat)** :
- Crée des prompts ULTRA détaillés et précis
- Donne des instructions complètes sans ambiguïté
- Spécifie EXACTEMENT ce qui doit être fait et comment
- Fournit le code complet quand nécessaire
- Valide le travail de Claude Code
- Ne laisse AUCUNE place à l'interprétation

**L'Exécutant (Claude Code)** :
- Suit les instructions à la lettre
- N'interprète pas, exécute
- Demande clarification si ambigu
- Commit + Push après chaque tâche
- Attend validation avant de continuer

### Anatomie d'un Prompt Parfait

Un prompt pour Claude Code DOIT contenir :

#### 1. CONTEXTE PROJET (Obligatoire)
```markdown
## CONTEXTE PROJET

### Identité
- Nom : DAINAMICS Website
- Type : Site vitrine + génération leads
- Repository : https://github.com/dainabase/Dainamics-Web-Site
- Branch : main
- Stack : React 18+ TypeScript 5+ Vite 5+

### Documentation
- WORKFLOW.md - Processus
- ARCHITECTURE.md - Specs techniques
- README.md - Vue d'ensemble

### Positionnement
- Cible : PME suisses
- USP : ROI mesurable, conformité suisse
```

#### 2. OBJECTIF PRÉCIS (Obligatoire)
```markdown
## OBJECTIF DE LA TÂCHE

Créer le fichier `src/data/solutions.ts` contenant 15 scénarios.

### Ce que tu dois créer
- UN fichier TypeScript
- Interfaces strictes
- 15 objets dans un array
- Helpers pour filtrage

### Ce que tu NE dois PAS faire
- ❌ Descriptions techniques figées
- ❌ Utiliser des emojis
- ❌ Écrire "AI" (toujours "IA")
```

#### 3. STRUCTURE TECHNIQUE EXACTE (Obligatoire)
```markdown
## STRUCTURE TECHNIQUE EXACTE

### Emplacement
`src/data/solutions.ts`

### Code Complet
```typescript
// Donner le code COMPLET ici
// Avec TOUTES les interfaces
// Et TOUS les exemples nécessaires
```
```

#### 4. RÈGLES DE CONTENU (Si applicable)
```markdown
## RÈGLES DE CONTENU

### Approche Requise
- Scénarios inspirants, pas specs techniques
- Quantifier systématiquement (CHF, heures, %)
- Langage business, pas jargon technique

### Principes
1. Principe 1 avec exemple
2. Principe 2 avec exemple
3. Etc.

### Exemples Concrets
Bon exemple ✅
Mauvais exemple ❌
```

#### 5. VALIDATION (Obligatoire)
```markdown
## VALIDATION AVANT COMMIT

### Checklist Technique
- [ ] Item 1
- [ ] Item 2

### Checklist Contenu
- [ ] Item 1
- [ ] Item 2

### Checklist Qualité
- [ ] Item 1
- [ ] Item 2
```

#### 6. PROCESSUS GIT (Obligatoire)
```markdown
## PROCESSUS GIT

### Commandes Exactes
```bash
git add .
git commit -m "feat(data): description détaillée"
git push origin main
```

### Format de Confirmation
```
✅ TÂCHE TERMINÉE : [nom]

FICHIERS :
- Fichier 1

COMMIT :
- SHA : xxx

PUSH :
- Statut : ✅
```
```

#### 7. GESTION D'ERREURS (Recommandé)
```markdown
## EN CAS D'ERREUR

1. STOP immédiatement
2. Documenter l'erreur
3. Demander de l'aide
4. Ne pas deviner

### Erreurs Possibles
- Erreur TypeScript : ...
- Erreur Git : ...
```

### Template de Prompt Complet

```markdown
# TÂCHE : [Titre précis]

## CONTEXTE PROJET
[Identité + Docs + Positionnement]

## OBJECTIF
[Ce qui doit être créé + Ce qui NE doit PAS être fait]

## STRUCTURE TECHNIQUE EXACTE
[Emplacement + Code complet]

## RÈGLES DE CONTENU (si applicable)
[Approche + Principes + Exemples]

## VALIDATION
[3 checklists : Technique + Contenu + Qualité]

## PROCESSUS GIT
[Commandes + Format confirmation]

## EN CAS D'ERREUR
[Instructions claires]

## RAPPELS CRITIQUES
[5-7 points essentiels]

COMMENCE MAINTENANT.
```

### Niveau de Détail Requis

**Pour Fichiers de Données** :
- Donner le code TypeScript COMPLET
- Inclure 2-3 exemples d'objets complets
- Spécifier TOUS les champs obligatoires
- Donner la structure exacte

**Pour Components** :
- Donner le code React COMPLET
- Inclure imports exacts
- Spécifier props et types
- Montrer exemple d'utilisation

**Pour Pages** :
- Donner la structure complète
- Inclure sections et layout
- Spécifier components utilisés
- Montrer routing si nécessaire

### Principes d'Or

1. **Être ULTRA Spécifique**
   - ❌ "Crée un fichier de données"
   - ✅ "Crée src/data/solutions.ts avec interfaces TypeScript strictes, 15 objets Solution dans un array export const, et 4 helpers"

2. **Donner le Code Complet**
   - Ne pas dire "crée une interface Solution"
   - Donner le code exact de l'interface

3. **Anticiper les Questions**
   - Si vous vous demandez "et si...", répondez dans le prompt
   - Couvrir TOUS les cas possibles

4. **Validation Exhaustive**
   - Checklists détaillées
   - Critères objectifs
   - Pas de "vérifie que c'est bon"

5. **Process Git Exact**
   - Commandes complètes
   - Messages de commit préremplis
   - Format de confirmation

### Erreurs à Éviter

❌ **Prompts Vagues**
```
"Crée les fichiers de données pour le projet"
```

✅ **Prompts Précis**
```
"Crée src/data/solutions.ts avec :
- Interface Solution (15 champs spécifiés)
- Array de 15 objets (code complet donné)
- 4 helpers (code exact fourni)
- Répartition : 5 IA + 7 Auto + 3 Dev"
```

❌ **Instructions Ambiguës**
```
"Fais en sorte que ce soit bien"
```

✅ **Critères Objectifs**
```
"Validation :
- TypeScript sans erreurs
- 15 solutions présentes
- Tous champs remplis
- Pas d'emojis dans le code"
```

### Exemples de Prompts par Type

**Fichier de Données** :
- Contexte : 2 paragraphes
- Objectif : 1 paragraphe
- Code complet : 200-500 lignes
- Validation : 3 checklists
- Git process : Complet

**Component React** :
- Contexte : 2 paragraphes
- Objectif : 1 paragraphe
- Code complet : 100-300 lignes
- Props détaillées : Toutes
- Validation : 3 checklists
- Git process : Complet

**Page Complète** :
- Contexte : 3 paragraphes
- Objectif : 2 paragraphes
- Structure : Section par section
- Components : Liste complète
- Validation : 4 checklists
- Git process : Complet

---

## 🗂️ Organisation du Repository

### Structure des Dossiers

```
Dainamics-Web-Site/
├── src/
│   ├── components/          # Components React
│   │   ├── common/         # Buttons, Cards, Badges (Design System)
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── features/       # ROI Calculator, Diagnostic, etc.
│   │   ├── sections/       # Homepage sections, Solutions sections
│   │   └── ui/             # shadcn/ui components
│   │
│   ├── data/               # 🎯 DONNÉES STATIQUES (Priority 1)
│   │   ├── solutions.ts    # 15 automatisations TOP 15
│   │   ├── portfolio.ts    # Projets (LEXAIA, ENKI-REALTY, etc.)
│   │   ├── expertise.ts    # 3 piliers (IA, Automatisation, Dev)
│   │   ├── testimonials.ts # Témoignages clients
│   │   ├── integrations.ts # Intégrations techniques
│   │   ├── pricingPackages.ts # 4 tiers de pricing
│   │   ├── useCases.ts     # Cas d'usage détaillés
│   │   └── glossary.ts     # Glossaire termes techniques
│   │
│   ├── pages/              # Pages routes
│   ├── types/              # TypeScript interfaces/types
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Supabase, Analytics, APIs
│   ├── utils/              # Helper functions
│   └── styles/             # Global CSS
│
├── public/                 # Assets statiques
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   └── fonts/
│
└── docs/                   # Documentation (si nécessaire)
```

### Règles de Nommage

**Fichiers TypeScript** :
- Components : `PascalCase.tsx` (Hero.tsx, SolutionCard.tsx)
- Data : `camelCase.ts` (solutions.ts, portfolio.ts)
- Utils : `camelCase.ts` (formatCurrency.ts)
- Types : `camelCase.types.ts` ou dans `/types/index.ts`

**CSS Classes** :
- Tailwind : kebab-case natif
- Custom classes : kebab-case (`.hero-section`, `.brain-animation`)

---

## 🎯 Plan d'Implémentation par Phases

### Phase 1 : Fondations (Semaine 1-3)
**Priority 1 : Données** ✅ EN COURS
- [ ] `src/data/solutions.ts` - 15 automatisations
- [ ] `src/data/portfolio.ts` - Projets
- [ ] `src/data/expertise.ts` - 3 piliers
- [ ] `src/data/testimonials.ts` - Témoignages
- [ ] `src/data/integrations.ts` - Intégrations
- [ ] `src/data/pricingPackages.ts` - Pricing
- [ ] `src/data/useCases.ts` - Use cases
- [ ] `src/data/glossary.ts` - Glossaire

**Priority 2 : Design System**
- [ ] `src/components/common/Button.tsx` - Variants améliorés
- [ ] `src/components/common/Card.tsx` - 4 variants
- [ ] `src/components/common/Badge.tsx` - 5 variants
- [ ] `src/components/common/SolutionCard.tsx`
- [ ] `src/components/common/PortfolioCard.tsx`

**Priority 3 : Pages Core**
- [ ] `src/pages/Expertise.tsx` - Page complète
- [ ] `src/pages/Solutions.tsx` - Page complète
- [ ] `src/pages/Portfolio.tsx` - Page complète

### Phase 2 : Fonctionnalités Interactives (Semaine 4-5)
- [ ] ROI Calculator
- [ ] Diagnostic IA
- [ ] AI Maturity Assessment
- [ ] Tech Stack Explorer

### Phase 3 : Polish & Launch (Semaine 6-7)
- [ ] Pages Business
- [ ] Contact + Chatbot
- [ ] SEO + Performance
- [ ] QA Final

---

## 📚 Ressources Documentation

### Avant de Créer une Page

**OBLIGATOIRE:** Consulter ces documents dans cet ordre :

1. **[NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md)** - Où cette page s'intègre-t-elle ?
   - Structure menu optimale (6 items, 2 niveaux max)
   - Parcours utilisateur
   - Hiérarchie information

2. **[CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md)** - Comment rédiger le contenu ?
   - Principes fondamentaux (langage business, quantifier)
   - Tone of Voice DAINAMICS
   - Guidelines rédaction (longueurs, structure)
   - Templates pages types

3. **[TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** - Cette tâche est-elle priorisée ?
   - Plan 24 semaines
   - Phase actuelle
   - Tâches prioritaires

### Avant de Coder

**OBLIGATOIRE:** Vérifier :

1. **[STATUS.md](./STATUS.md)** - État actuel du projet
   - Progression globale
   - Ce qui est terminé/en cours/à faire
   - Problèmes identifiés
   - Prochaines actions prioritaires

2. **[PRIORITIES.md](./PRIORITIES.md)** - Priorité de cette tâche (P0/P1/P2/P3)
   - Tableau priorisation complet
   - Impact vs Effort
   - Semaines recommandées

3. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Specs techniques
   - Stack technique
   - Structure complète
   - Design System détaillé
   - Animations Framer Motion

4. **[DAINAMICS_Design_System_v2_Complete.md](./DAINAMICS_Design_System_v2_Complete.md)** ⭐ - Design System exhaustif
   - Palette complète (Primary, Secondary, CTA, Success)
   - Typographie, Spacing, Composants UI (13 composants)
   - Animations & Effets, Patterns de design
   - JavaScript/Canvas Effects, Responsive Design

### Pour Planifier Sprint

**Consulter dans cet ordre:**

1. **[PRIORITIES.md](./PRIORITIES.md)** - Tableau priorisation
   - Tâches P0 (Critique - Semaines 1-4)
   - Tâches P1 (Important - Semaines 5-12)
   - Vue d'ensemble impact/effort

2. **[TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** - Détails tâches
   - Phase 1: Quick Wins (Semaines 1-4)
   - Phase 2: Contenu & Différenciation (Semaines 5-12)
   - Phase 3: Optimisation & Scale (Semaines 13-24)

3. **[STATUS.md](./STATUS.md)** - Ce qui est en cours
   - État actuel Phase 1
   - Blocages éventuels
   - Métriques de succès

---

## 🔍 Checklist Avant Chaque Commit

### Code Quality
- [ ] TypeScript sans erreurs (`npm run type-check`)
- [ ] ESLint warnings résolues
- [ ] Pas de `console.log` oubliés
- [ ] Pas d'emojis dans le code
- [ ] Noms corrects : LEXAIA, ENKI-REALTY, Claude Code
- [ ] "IA" utilisé (pas "AI") dans textes français

### Documentation
- [ ] Commentaires clairs si logique complexe
- [ ] Types TypeScript pour toutes les interfaces
- [ ] README mis à jour si nécessaire

### Tests
- [ ] Code testé localement (`npm run dev`)
- [ ] Responsive vérifié (mobile, tablet, desktop)
- [ ] Animations smooth (60fps)

---

## 📞 Communication avec l'Équipe

### Format de Rapport Après Tâche

**Modèle à suivre** :
```markdown
## ✅ Tâche Terminée : [Nom de la tâche]

### Fichiers Créés/Modifiés :
- `src/data/solutions.ts` (créé)
- `src/types/index.ts` (modifié)

### Changements :
- Ajout de 15 solutions d'automatisation
- Interfaces TypeScript pour Solution
- Données basées sur TOP 15 document

### Commit :
- Message : "feat(data): add solutions.ts with TOP 15 automations"
- SHA : abc1234
- Pushed sur : main

### Prochaine Étape Suggérée :
- Créer portfolio.ts avec projets LEXAIA et ENKI-REALTY

### En Attente de :
- ✅ Validation avant de continuer
```

---

## 🚀 Commandes Utiles

### Développement Local
```bash
# Installer dépendances
npm install

# Démarrer serveur dev
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

### Git Workflow
```bash
# Vérifier statut
git status

# Ajouter fichiers
git add src/data/solutions.ts
# ou tout
git add .

# Commit
git commit -m "feat(data): add solutions.ts"

# Push
git push origin main

# Vérifier historique
git log --oneline -5

# Créer branche (si nécessaire)
git checkout -b feature/nom-feature
```

---

## ⚠️ Règles de Sécurité

### Ne JAMAIS Commit :
- ❌ Variables d'environnement (`.env`)
- ❌ Clés API
- ❌ Tokens d'accès
- ❌ `node_modules/`
- ❌ Build artifacts (dist/)
- ❌ Fichiers système (.DS_Store)

Le `.gitignore` est configuré pour bloquer ces fichiers.

---

## 📚 Documentation de Référence

### Ordre de Lecture
1. **README.md** - Vue d'ensemble et quick start
2. **WORKFLOW.md** - Ce document (processus + standards prompts)
3. **STATUS.md** - État actuel du projet
4. **PRIORITIES.md** - Priorisation P0/P1/P2/P3
5. **TRANSFORMATION-PLAN.md** - Plan 24 semaines complet
6. **NAVIGATION-ARCHITECTURE.md** - Structure menu optimale
7. **CONTENT-STRATEGY.md** - Guidelines contenu et rédaction
8. **ARCHITECTURE.md** - Specs techniques complètes (81KB)
9. **DAINAMICS_Design_System_v2_Complete.md** ⭐ - Design System exhaustif (61.3 KB)
10. **PROMPT-CONTEXT.md** - Contexte pour conversations IA

### Pour Chaque Type de Tâche
- **Créer données** → Voir ARCHITECTURE.md section "Data Structures"
- **Créer components** → Voir ARCHITECTURE.md section "Design System"
- **Créer pages** → Voir ARCHITECTURE.md section "Pages Structure"
- **Animations** → Voir ARCHITECTURE.md section "Framer Motion"
- **Créer prompts** → Voir cette section "Standards de Prompts"
- **Planifier** → Voir STATUS.md + PRIORITIES.md + TRANSFORMATION-PLAN.md

---

## 🎯 Objectifs de Qualité

### Code
- TypeScript strict mode activé
- Pas de `any` types
- Composants réutilisables
- DRY (Don't Repeat Yourself)

### Performance
- Lighthouse score > 90
- Animations 60fps
- Images optimisées (WebP)
- Lazy loading

### Accessibilité
- WCAG 2.1 AA minimum
- Attributs ARIA appropriés
- Navigation clavier
- Contraste suffisant

### Prompts
- Ultra détaillés et précis
- Code complet fourni
- Aucune ambiguïté
- Validation exhaustive

---

*DAINAMICS - Workflow v1.2 - 13 Octobre 2025*  
*Développement Structuré et Professionnel*