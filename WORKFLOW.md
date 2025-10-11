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
2. **WORKFLOW.md** - Ce document (processus)
3. **ARCHITECTURE.md** - Specs techniques complètes (81KB)
4. **PROMPT-CONTEXT.md** - Contexte pour conversations IA

### Pour Chaque Type de Tâche
- **Créer données** → Voir ARCHITECTURE.md section "Data Structures"
- **Créer components** → Voir ARCHITECTURE.md section "Design System"
- **Créer pages** → Voir ARCHITECTURE.md section "Pages Structure"
- **Animations** → Voir ARCHITECTURE.md section "Framer Motion"

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

---

*DAINAMICS - Workflow v1.0 - 11 Octobre 2025*  
*Développement Structuré et Professionnel*
