# 📘 DAINAMICS - Instructions Projet v2.1

## 🎯 Vue d'ensemble

DAINAMICS est une société suisse spécialisée dans l'IA, l'Automatisation et le Développement sur mesure pour PME. Ce projet vise à créer un site web moderne qui présente nos solutions et génère des leads qualifiés.

**Repository**: https://github.com/dainabase/Dainamics-Web-Site  
**Phase Actuelle**: Développement Phase 1 - Fondations (Semaine 1-3)  
**Stack**: React 18+ | TypeScript 5+ | Vite 5+ | Tailwind CSS 3+ | Framer Motion 11+

---

## 🚨 RÈGLES AVANT CHAQUE PROMPT À CLAUDE CODE

### ⚠️ STRUCTURE OBLIGATOIRE - 7 SECTIONS

**CHAQUE prompt à Claude Code DOIT contenir ces 7 sections. AUCUNE EXCEPTION.**

```
1. CONTEXTE PROJET
   - État actuel repository
   - Fichier à créer/modifier
   - Technologies utilisées

2. OBJECTIF PRÉCIS
   - Ce qui doit être fait exactement
   - Résultat attendu

3. STRUCTURE TECHNIQUE EXACTE
   - CODE COMPLET (200-500 lignes minimum)
   - ⚠️ OBLIGATOIRE: "Référencer DESIGN-SYSTEM-MANDATORY.md"
   - ⚠️ OBLIGATOIRE: "Utiliser CATEGORY_COLORS et COMPLEXITY_COLORS"
   - ⚠️ OBLIGATOIRE: "Vérifier icônes sur https://lucide.dev"
   - Interface TypeScript stricte
   - Exemples complets

4. RÈGLES DE CONTENU
   - Standards rédactionnels
   - Gains TOUJOURS quantifiés (CHF, %, heures)
   - Terminologie correcte (IA pas AI)

5. VALIDATION - 3 CHECKLISTS
   ✅ Checklist Technique (10-15 critères)
   ✅ Checklist Contenu (10-15 critères)
   ✅ Checklist Design System (10 critères minimum)

6. PROCESSUS GIT
   - Commandes exactes à exécuter
   - Message commit standardisé
   - Format confirmation attendu

7. GESTION D'ERREURS
   - Erreurs possibles + solutions
   - Procédure si bloqué
```

### ⚠️ DESIGN SYSTEM - MENTIONS OBLIGATOIRES DANS SECTION 3

**Dans CHAQUE prompt, section 3, vous DEVEZ inclure TEXTUELLEMENT :**

```
⚠️ DESIGN SYSTEM OBLIGATOIRE:

1. Référencer le document DESIGN-SYSTEM-MANDATORY.md
2. Utiliser UNIQUEMENT les couleurs suivantes:
   - CATEGORY_COLORS pour catégories (ia/automatisation/developpement)
   - COMPLEXITY_COLORS pour badges (starter/intermediate/advanced)
3. Utiliser UNIQUEMENT des icônes Lucide React v0.263.1
4. Vérifier CHAQUE icône sur https://lucide.dev AVANT utilisation
5. JAMAIS de couleurs HEX hardcodées hors Design System
6. JAMAIS d'icônes inventées ou non-Lucide

Mappings à utiliser EXACTEMENT:
const CATEGORY_COLORS = {
  'ia': '#6366F1',
  'automatisation': '#10E4FF',
  'developpement': '#FF5A00'
};

const COMPLEXITY_COLORS = {
  'starter': '#10B981',
  'intermediate': '#F59E0B',
  'advanced': '#EF4444'
};
```

### 📋 EXEMPLE DE PROMPT CORRECT

```
# PROMPT: Créer src/data/expertise.ts

## 1. CONTEXTE PROJET
- Repository: https://github.com/dainabase/Dainamics-Web-Site
- Fichier: src/data/expertise.ts (à créer)
- Technologies: React 18+ TypeScript 5+ Tailwind CSS 3+
- Référence: solutions.ts (même structure)

## 2. OBJECTIF PRÉCIS
Créer fichier expertise.ts contenant les 3 piliers DAINAMICS:
- Intelligence Artificielle
- Automatisation
- Développement

## 3. STRUCTURE TECHNIQUE EXACTE

⚠️ DESIGN SYSTEM OBLIGATOIRE:
1. Référencer DESIGN-SYSTEM-MANDATORY.md
2. Utiliser CATEGORY_COLORS pour couleurs piliers
3. Icônes Lucide uniquement (vérifier https://lucide.dev)
4. Mappings EXACTS:
   'ia' → '#6366F1'
   'automatisation' → '#10E4FF'
   'developpement' → '#FF5A00'

[CODE COMPLET DE 200-500 LIGNES ICI]

## 4. RÈGLES DE CONTENU
- Gains quantifiés obligatoires
- "IA" (pas "AI") en français
- Pas d'emojis
- Exemples concrets

## 5. VALIDATION
✅ Checklist Technique (12 critères)
✅ Checklist Contenu (12 critères)
✅ Checklist Design System (10 critères)

## 6. PROCESSUS GIT
git add src/data/expertise.ts
git commit -m "feat(data): add expertise.ts with 3 pillars"
git push origin main

## 7. GESTION D'ERREURS
[Solutions aux erreurs possibles]
```

### ❌ CE QUI SE PASSE SI VOUS NE SUIVEZ PAS CES RÈGLES

**Si prompt sans 7 sections:**
- Claude Code risque de créer code incomplet
- Pas de validation = erreurs non détectées
- Pas de cohérence avec Design System
- → REFAIRE LE TRAVAIL = PERTE DE TEMPS

**Si Design System non mentionné en section 3:**
- Claude Code peut inventer ses propres couleurs
- Icônes non-Lucide possibles
- Incohérence visuelle totale du site
- → FICHIER À REFAIRE COMPLÈTEMENT

**Résultat: 2-3x plus de temps perdu à corriger qu'à bien faire dès le début**

---

## 🎨 DESIGN SYSTEM - COULEURS EXACTES

### Référence Complète

**Document**: `DESIGN-SYSTEM-MANDATORY.md` (15.5 KB)  
**Architecture**: `ARCHITECTURE.md` (lignes 100-800)

### Palette à Utiliser (AUCUNE AUTRE COULEUR)

```typescript
// Couleurs principales - JAMAIS modifier
const COLORS = {
  primary: '#6366F1',      // Indigo - Tech/IA
  cta: '#FF5A00',          // Orange - CTA
  accent: '#10E4FF',       // Cyan - Automatisation
  success: '#10B981',      // Green
  warning: '#F59E0B',      // Yellow
  error: '#EF4444',        // Red
  background: '#0A0A0F',   // Dark Navy
  light: '#F1F5F9'         // Light text
};

// Mappings OBLIGATOIRES
const CATEGORY_COLORS = {
  'ia': '#6366F1',              // Primary
  'automatisation': '#10E4FF',   // Accent
  'developpement': '#FF5A00'     // CTA
};

const COMPLEXITY_COLORS = {
  'starter': '#10B981',         // Green
  'intermediate': '#F59E0B',    // Yellow
  'advanced': '#EF4444'         // Red
};
```

### Icônes Lucide React UNIQUEMENT

**Source**: Lucide React v0.263.1  
**Vérification OBLIGATOIRE**: https://lucide.dev avant CHAQUE utilisation

**⚠️ Workflow icônes:**
1. Aller sur https://lucide.dev
2. Chercher l'icône voulue
3. Copier nom EXACT en PascalCase
4. Utiliser dans le code
5. ❌ JAMAIS inventer un nom d'icône

---

## 📚 Documentation (Par ordre de priorité)

1. **DESIGN-SYSTEM-MANDATORY.md** ⭐ CRITIQUE (15.5 KB)
2. **ARCHITECTURE.md** (81 KB, 3397 lignes)
3. **WORKFLOW.md** (14.7 KB) - Standards prompts
4. **PROMPT-CONTEXT.md v2.0** (16.4 KB)
5. **INSTRUCTIONS.md v2.1** (ce document)
6. **CHANGELOG.md v2.2**

---

## ✅ État Actuel

### Terminé ✅
- solutions.ts (21.2 KB, Commit 6a193bb)
- Navigation.tsx (11.8 KB, Commit 0314f61)
- DESIGN-SYSTEM-MANDATORY.md (Commit 95e92a3)
- Documentation complète

### En Cours ⏳
- portfolio.ts (Claude Code exécute)

### À Créer ⏹️
- expertise.ts - 3 piliers
- testimonials.ts - Témoignages
- Page /solutions
- Page /portfolio
- Autres data files

### Commits Récents
```
acb7d6cb - docs(instructions): update v2.0
712c70a - docs(prompt-context): update v2.0
95e92a3 - docs(design-system): add mandatory guide
0314f61 - feat(navigation): complete menu
6a193bb - feat(data): add solutions.ts
```

---

## 🎯 Objectifs

### Business
- Leader solutions automatisation PME suisses
- 15-25 leads qualifiés/mois (6 premiers mois)
- ROI démontrable (CHF, heures, %)
- Crédibilité cas clients (LEXAIA, ENKI-REALTY)

### Techniques
- Lighthouse >90
- Animations 60fps
- Mobile-first
- SEO marché suisse
- Conformité nLPD, SwissDec, TVA

---

## 📐 Principes

### Contenu
- Langage business (pas jargon)
- Toujours quantifier (CHF, %, heures)
- Approche suisse (nLPD, SwissDec, TVA)
- ROI démontrable

### Style
- Professionnel mais accessible
- Phrases courtes
- Exemples concrets
- **JAMAIS d'emojis** code/doc
- "IA" (pas "AI") français

### Design
- Moderne épuré (Stripe, Linear)
- Animations Framer Motion
- Navigation max 3 clics
- Mobile-first obligatoire

---

## 🏗️ Structure Site

### Pages (9)
1. Homepage - Hero + Piliers + Solutions
2. Expertise - IA, Automatisation, Dev
3. Solutions - 15 automatisations
4. Portfolio - LEXAIA, ENKI-REALTY + 3
5. Resources - Blog, Glossaire, Use Cases
6. À Propos - Mission, Équipe
7. Process - Méthodologie, Garanties
8. Pricing - 4 tiers
9. Contact - Form + Chatbot + RDV

### Features (8)
1. Calculateur ROI
2. Diagnostic IA
3. AI Maturity Assessment
4. Chatbot multilingue (Claude API)
5. Comparateur solutions
6. Simulateur pricing
7. Tech Stack Explorer
8. Système RDV

---

## 🛠️ Stack

### Frontend
- React 18.3.1 + TypeScript 5.5.3
- Vite 5.3.4
- Tailwind CSS 3.4.1
- Framer Motion 11.3.21
- Lucide React 0.263.1
- React Hook Form + Zod

### Backend
- Supabase (PostgreSQL, Auth, Storage)
- Brevo/SendGrid (emailing)
- GA4 + Plausible (analytics)
- Cal.com (RDV)

### Dev
- Claude Code (principal)
- GitHub (version control)
- Vercel/Netlify (hosting)

---

## 📏 Standards Code

### TypeScript Strict

```typescript
// ✅ BON
interface Solution {
  id: string;
  category: 'ia' | 'automatisation' | 'developpement';
  complexity: 'starter' | 'intermediate' | 'advanced';
  icon: string;  // Lucide React
  roi: { timeframe: string; savings: number };
}

// ❌ MAUVAIS
const solution: any = {...}
```

### Conventions
- Components: PascalCase (`Hero.tsx`)
- Utils: camelCase (`formatCurrency.ts`)
- Data: camelCase (`solutions.ts`)
- CSS: kebab-case Tailwind

### Structure
```
src/
├── components/
│   ├── ui/         # Design System
│   ├── layout/     # Header, Footer
│   └── features/   # Features
├── data/           # solutions.ts ✅, portfolio.ts ⏳
├── pages/          # Routes
├── types/          # TypeScript
└── utils/          # Helpers
```

---

## 🚀 Workflow

### Phase 1 (Semaines 1-3)

**Semaine 1** ✅
- [x] Setup + Design System + Layout + Homepage 1-5

**Semaine 2** ⏳ EN COURS
- [x] Homepage complète
- [x] Navigation.tsx ✅
- [x] solutions.ts ✅
- [⏳] portfolio.ts
- [ ] expertise.ts
- [ ] Calculateur ROI
- [ ] Diagnostic IA

**Semaine 3**
- [ ] Pages Expertise, Solutions, Portfolio

### Phase 2 (Semaines 4-5)
- Case studies, Blog, Glossaire, Use Cases

### Phase 3 (Semaines 6-7)
- Process, Pricing, About, Contact, Chatbot, SEO, QA

---

## ✅ Checklist Avant Commit

### Design System ⭐ CRITIQUE
- [ ] CATEGORY_COLORS/COMPLEXITY_COLORS utilisés
- [ ] Icônes Lucide vérifiées lucide.dev
- [ ] Pas de HEX hardcodé hors Design System
- [ ] Mappings respectés

### Code
- [ ] TypeScript sans erreurs (pas `any`)
- [ ] ESLint OK
- [ ] Pas de console.log
- [ ] Pas d'emojis

### Performance
- [ ] Images optimisées
- [ ] Animations 60fps
- [ ] Lighthouse >90

### Contenu
- [ ] Gains quantifiés (CHF, %, heures)
- [ ] "IA" (pas "AI")
- [ ] LEXAIA, ENKI-REALTY corrects
- [ ] CTAs clairs

---

## 📖 Ressources

### Documentation
- **Repository**: https://github.com/dainabase/Dainamics-Web-Site
- **Design System**: DESIGN-SYSTEM-MANDATORY.md
- **Architecture**: ARCHITECTURE.md (lignes 100-800)
- **Prompts**: WORKFLOW.md (7 sections)
- **Contexte**: PROMPT-CONTEXT.md v2.0

### Externes
- **Lucide**: https://lucide.dev (v0.263.1)
- **Tailwind**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

---

## 💡 Exemple Complet de Bon Prompt

```
# CRÉER expertise.ts

## 1. CONTEXTE PROJET
Repository: Dainamics-Web-Site
Fichier: src/data/expertise.ts (nouveau)
Stack: React 18+ TypeScript 5+
Référence: solutions.ts (même structure)

## 2. OBJECTIF
Créer expertise.ts avec 3 piliers DAINAMICS:
- Intelligence Artificielle (LLMs, Agents, CV, NLP)
- Automatisation (RPA, Workflow, Integration)
- Développement (Web Apps, APIs, Cloud)

## 3. STRUCTURE TECHNIQUE

⚠️ DESIGN SYSTEM OBLIGATOIRE:
- Référencer DESIGN-SYSTEM-MANDATORY.md
- Utiliser CATEGORY_COLORS:
  'ia' → '#6366F1'
  'automatisation' → '#10E4FF'
  'developpement' → '#FF5A00'
- Icônes Lucide UNIQUEMENT (vérifier lucide.dev)
- TypeScript strict (pas any)

[CODE COMPLET 200-500 LIGNES]
// Interface stricte
// 3 piliers avec détails
// Helpers exportés
// Mappings couleurs

## 4. RÈGLES CONTENU
- Gains quantifiés obligatoires
- "IA" pas "AI"
- Pas d'emojis
- Exemples concrets PME

## 5. VALIDATION

✅ Technique (12 critères)
- TypeScript strict
- Interfaces complètes
- Helpers fonctionnels
- Imports Lucide corrects

✅ Contenu (12 critères)
- 3 piliers complets
- Exemples concrets
- Gains quantifiés
- Terminologie correcte

✅ Design System (10 critères)
- CATEGORY_COLORS utilisés
- Icônes Lucide vérifiées
- Pas de HEX hardcodé
- Mappings conformes

## 6. PROCESSUS GIT
git add src/data/expertise.ts
git commit -m "feat(data): add expertise.ts with 3 pillars"
git push origin main

## 7. GESTION ERREURS
- Si TypeScript erreur → vérifier interfaces
- Si icône manquante → lucide.dev
- Si couleur incorrecte → CATEGORY_COLORS
- Si bloqué → STOP et documenter
```

---

## 🆘 Support

### Si Perdu
1. DESIGN-SYSTEM-MANDATORY.md
2. ARCHITECTURE.md
3. WORKFLOW.md
4. Exemples: solutions.ts, Navigation.tsx

### Si Bloqué
1. STOP immédiatement
2. Noter erreur + commande
3. Demander assistance

---

## 🎯 Prochaines Étapes

1. Attendre portfolio.ts ⏳
2. Créer expertise.ts (avec bon prompt 7 sections)
3. Page /solutions
4. Page /portfolio

---

## 🔒 Règles Absolues NON NÉGOCIABLES

1. ✅ **Prompt 7 sections** - TOUJOURS, sans exception
2. ✅ **Design System mention section 3** - OBLIGATOIRE textuellement
3. ✅ **TypeScript strict** - Jamais `any`
4. ✅ **Icônes Lucide** - Vérifier lucide.dev AVANT
5. ✅ **Gains quantifiés** - CHF, %, heures
6. ✅ **"IA" pas "AI"** - En français
7. ❌ **Pas d'emojis** - Jamais code/doc
8. ✅ **Mobile-first** - Toujours
9. ✅ **Commit après chaque tâche** - Immédiat
10. ✅ **CATEGORY_COLORS/COMPLEXITY_COLORS** - Obligatoires

---

**VERSION**: 2.1  
**DATE**: 11 Octobre 2025  
**CRITIQUE**: Structure 7 sections + Design System mention = NON NÉGOCIABLE  

**🚨 NE PAS CRÉER DE PROMPT SANS:**
1. Les 7 sections complètes
2. La mention Design System en section 3 avec mappings EXACTS

**Si vous ne suivez pas ces règles = fichiers à refaire = 2-3x plus de temps perdu**
