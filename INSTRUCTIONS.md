# 📘 DAINAMICS - Instructions Projet v2.2

## 🎯 Vue d'ensemble

DAINAMICS est une société suisse spécialisée dans l'IA, l'Automatisation et le Développement sur mesure pour PME. Ce projet vise à créer un site web moderne qui présente nos solutions et génère des leads qualifiés.

**Repository**: https://github.com/dainabase/Dainamics-Web-Site  
**Phase Actuelle**: Développement Phase 1 - Fondations (Semaine 1-3)  
**Stack**: React 18+ | TypeScript 5+ | Vite 5+ | Tailwind CSS 3+ | Framer Motion 11+

---

## 🚨 NOUVEAU WORKFLOW - CHANGEMENT CRITIQUE

### ⚡ Claude Travaille DIRECTEMENT Maintenant

**CHANGEMENT MAJEUR:**
- ❌ **TERMINÉ**: Workflow avec Claude Code + prompts 7 sections
- ✅ **NOUVEAU**: Claude fait le travail lui-même directement

**Comment ça fonctionne:**
1. Claude se connecte au repository GitHub
2. Claude lit, crée et modifie les fichiers
3. Claude commit et push directement
4. Tout se fait dans la conversation

**Plus besoin de:**
- Créer des prompts structurés en 7 sections
- Copier-coller dans Claude Code
- Attendre validation entre les étapes

**Claude fait directement:**
- Lecture du repository
- Création/modification de fichiers
- Commit avec messages appropriés
- Push sur la branche main

---

## 🎨 APPROCHE PÉDAGOGIQUE OBLIGATOIRE

### 📐 Inspiration: Page d'Accueil (Index.tsx)

**RÈGLE D'OR**: S'inspirer au MAXIMUM de Index.tsx pour TOUTES les nouvelles pages

**Ce qui DOIT être réutilisé de Index.tsx:**

1. **Structure générale**
   - Hero section avec animation principale
   - Sections alternées (texte gauche/animation droite, puis inverse)
   - Grid backgrounds animés
   - Spacing et rythme vertical

2. **Layouts multi-colonnes**
   ```
   ┌─────────────────────────────────────────┐
   │  TEXTE (50%)          ANIMATION (50%)   │
   │  ─────────────        ─────────────     │
   │  • Titre h2           [Animation SVG]   │
   │  • Description p      [Schéma animé]    │
   │  • Bénéfices liste    [Illustration]    │
   │  • CTA bouton         [Graphique]       │
   └─────────────────────────────────────────┘
   ```

3. **Animations Framer Motion**
   - Fade in au scroll (IntersectionObserver)
   - Stagger pour les listes
   - Hover effects sur les cards
   - Parallax subtil

4. **Typography**
   - h1: text-5xl md:text-7xl font-bold
   - h2: text-3xl md:text-5xl font-bold
   - p: text-lg md:text-xl text-slate-300
   - Espacement cohérent

5. **Components réutilisables**
   - EnhancedGridBackground
   - Button (primary/secondary)
   - Card avec hover effects
   - Badge pour catégories

### 🧠 Principe Pédagogique: Montrer ET Expliquer

**OBJECTIF**: Rendre les concepts techniques accessibles visuellement

**Format Standard par Section:**

```typescript
<section className="py-20 md:py-32">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Partie TEXTE (Gauche) */}
    <div>
      <h2>Concept à expliquer</h2>
      <p>Explication claire et accessible</p>
      <ul>Bénéfices quantifiés</ul>
      <Button>CTA</Button>
    </div>
    
    {/* Partie ANIMATION (Droite) */}
    <div>
      <AnimatedDiagram />
      {/* Animation qui MONTRE le concept */}
    </div>
  </div>
</section>
```

### 💡 Exemples d'Animations Pédagogiques

**Référence**: Animation cerveau sur hero de Index.tsx

**Types à créer selon le sujet:**

1. **Intelligence Artificielle**
   ```
   - Cerveau avec connexions neuronales animées
   - Flux de données (input → traitement → output)
   - Analyse de texte en temps réel
   - Classification/détection visuelle
   ```

2. **Automatisation**
   ```
   - Workflow en cascade (étape par étape)
   - Connexions entre systèmes (APIs)
   - Before/After avec timer
   - Process automatisé vs manuel
   ```

3. **Développement**
   ```
   - Architecture en couches (frontend/backend/DB)
   - Stack technique empilé
   - User journey animé
   - Code qui compile/déploie
   ```

4. **ROI/Gains**
   ```
   - Graphiques animés (CountUp)
   - Comparaison avant/après (barres)
   - Timeline d'implémentation
   - Coûts économisés visualisés
   ```

### 🔧 Composants d'Animation à Créer

**Bibliothèque de composants pédagogiques:**

```typescript
// À créer progressivement
1. AnimatedDiagram      // Schémas techniques génériques
2. ProcessFlow          // Workflows étape par étape
3. BeforeAfterCompare   // Comparaisons animées
4. DataVisualization    // Graphiques/stats animés
5. SystemArchitecture   // Archi systèmes/intégrations
6. CodeAnimation        // Code qui s'anime
7. NetworkGraph         // Graphes de connexions
8. TimelineStepper      // Timeline interactive
9. MetricsCounter       // Compteurs animés (CountUp)
10. InteractiveDemo     // Démos interactives
```

### 📋 Checklist Page Pédagogique

Pour CHAQUE nouvelle page créée:

**Structure (inspirée Index.tsx)**
- [ ] Hero section avec animation principale
- [ ] Au moins 3-4 sections multi-colonnes (texte + animation)
- [ ] Grid background animé (EnhancedGridBackground)
- [ ] Typography cohérente (h1, h2, p)
- [ ] Spacing vertical régulier (py-20 md:py-32)

**Contenu Pédagogique**
- [ ] Chaque concept technique expliqué visuellement
- [ ] Animation synchronisée avec le texte explicatif
- [ ] Bénéfices TOUJOURS quantifiés (CHF, %, heures)
- [ ] Exemples concrets et accessibles
- [ ] Pas de jargon sans explication

**Animations**
- [ ] Au moins 1 animation par section majeure
- [ ] Framer Motion pour toutes les animations
- [ ] Animations déclenchées au scroll (viewport)
- [ ] Performance 60fps minimum
- [ ] Animations adaptées mobile (simplifiées si besoin)

**Design System**
- [ ] Couleurs CATEGORY_COLORS/COMPLEXITY_COLORS
- [ ] Icônes Lucide vérifiées sur lucide.dev
- [ ] Pas de HEX hardcodé hors Design System
- [ ] Mappings respectés

**Technique**
- [ ] TypeScript strict (pas any)
- [ ] Responsive (mobile-first)
- [ ] SEO (meta tags, h1 unique)
- [ ] Accessibilité (alt, aria-labels)

---

## 🎨 DESIGN SYSTEM - COULEURS EXACTES

### Référence Complète

**Document**: `DESIGN-SYSTEM-MANDATORY.md` (15.5 KB)  
**Architecture**: `ARCHITECTURE.md` (lignes 100-800)  
**Référence Visuelle**: `Index.tsx` (page d'accueil)

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

1. **Index.tsx** ⭐ **RÉFÉRENCE LAYOUTS** (page d'accueil)
2. **DESIGN-SYSTEM-MANDATORY.md** ⭐ CRITIQUE (15.5 KB)
3. **ARCHITECTURE.md** (81 KB, 3397 lignes)
4. **PROMPT-CONTEXT.md v2.1** (nouveau workflow)
5. **INSTRUCTIONS.md v2.2** (ce document)
6. **CHANGELOG.md v2.2**

### Ordre de Lecture Mis à Jour (NOUVEAU)

**Pour comprendre la transformation:**
1. [STATUS.md](./STATUS.md) - Où en sommes-nous ?
2. [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) - Où allons-nous ?
3. [PRIORITIES.md](./PRIORITIES.md) - Que faire en premier ?

**Pour développer:**
1. [WORKFLOW.md](./WORKFLOW.md) - Process strict
2. [NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md) - Structure site
3. [CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md) - Guidelines rédaction
4. [ARCHITECTURE.md](./ARCHITECTURE.md) - Specs techniques
5. [DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md) - Couleurs/Icônes
6. **Index.tsx** - Référence layouts et animations

**Pour nouvelles conversations Claude:**
[PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md) - Contexte complet

---

## ✅ État Actuel

**Pour l'état détaillé du projet, consultez [STATUS.md](./STATUS.md)**

**Vue d'ensemble rapide:**

**Terminé ✅**
- Data files (solutions.ts, portfolio.ts, expertise.ts, agents.ts)
- Navigation.tsx (menu complet)
- Index.tsx (page d'accueil) ⭐ RÉFÉRENCE
- Pages principales (Solutions, Portfolio, Expertise)
- EnhancedGridBackground.tsx
- Documentation restructurée

**En cours ⏳**
- Phase 1 transformation (Semaine 2/4)
- Pages Resources

**À créer ⏹️**
- glossary.ts, useCases.ts, pricingPackages.ts, testimonials.ts
- Pages /glossary, /use-cases, /about, /pricing, /process
- Features interactives (Calculateur ROI, Assessment, etc.)

**Consulter [STATUS.md](./STATUS.md) pour les détails complets et les métriques de progression**

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
- **Approche pédagogique**: expliquer visuellement

### Style
- Professionnel mais accessible
- Phrases courtes
- Exemples concrets
- **JAMAIS d'emojis** code/doc
- "IA" (pas "AI") français

### Design
- Moderne épuré (Stripe, Linear)
- **S'inspirer d'Index.tsx** pour tous les layouts
- Animations Framer Motion
- **Sections multi-colonnes** (texte + animation)
- Navigation max 3 clics
- Mobile-first obligatoire

---

## 🏗️ Structure Site

### Pages (9)
1. **Homepage** ✅ - Hero + Piliers + Solutions (Index.tsx)
2. **Expertise** ✅ - IA, Automatisation, Dev
3. **Solutions** ✅ - 15 automatisations
4. **Portfolio** ✅ - LEXAIA, ENKI-REALTY + 3
5. Resources ⏹️ - Blog, Glossaire, Use Cases
6. À Propos ⏹️ - Mission, Équipe
7. Process ⏹️ - Méthodologie, Garanties
8. Pricing ⏹️ - 4 tiers
9. Contact ✅ - Form + Chatbot + RDV

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
- **Claude** (travail direct sur GitHub)
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
├── data/           # Data files (solutions.ts, etc.)
├── pages/          # Routes (Index.tsx ⭐)
├── types/          # TypeScript
└── utils/          # Helpers
```

---

## 🚀 Workflow

### Phase 1 (Semaines 1-3)

**Semaine 1** ✅
- [x] Setup + Design System + Layout + Homepage

**Semaine 2** ✅
- [x] Homepage complète (Index.tsx)
- [x] Navigation.tsx
- [x] solutions.ts
- [x] portfolio.ts
- [x] expertise.ts
- [x] Pages Expertise

**Semaine 3** ⏳ EN COURS
- [ ] Pages Quick Wins, Industries
- [ ] Pages Resources (Glossaire, Use Cases)
- [ ] Calculateur ROI
- [ ] Diagnostic IA

**Pour le plan complet, voir [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)**

### Phase 2 (Semaines 4-5)
- About, Process, Pricing
- Blog, intégrations
- Features interactives

### Phase 3 (Semaines 6-7)
- Chatbot, SEO, QA, Performance

---

## ✅ Checklist Avant Commit

### Design System ⭐ CRITIQUE
- [ ] Référence Index.tsx pour layouts
- [ ] Sections multi-colonnes (texte + animation)
- [ ] Animations pédagogiques présentes
- [ ] CATEGORY_COLORS/COMPLEXITY_COLORS utilisés
- [ ] Icônes Lucide vérifiées lucide.dev
- [ ] Pas de HEX hardcodé hors Design System

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
- [ ] Concepts expliqués visuellement
- [ ] "IA" (pas "AI")
- [ ] LEXAIA, ENKI-REALTY corrects
- [ ] CTAs clairs

---

## 📖 Ressources

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
- [PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md) - Contexte conversations

**Repository:**
- https://github.com/dainabase/Dainamics-Web-Site
- **Index.tsx** - Référence layouts et animations ⭐

### Externes
- **Lucide**: https://lucide.dev (v0.263.1)
- **Tailwind**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

---

## 💡 Exemple: Créer une Page Pédagogique

### Page "/solutions/quick-wins"

**Inspiration**: Index.tsx

**Structure:**

```typescript
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Clock } from 'lucide-react';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

export default function QuickWins() {
  return (
    <>
      <EnhancedGridBackground />
      
      {/* Hero - Inspiré de Index.tsx */}
      <section className="relative py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Quick Wins
            </h1>
            <p className="text-xl text-slate-300 mt-6">
              ROI garanti en moins de 6 mois
            </p>
            <Button className="mt-8">Voir les solutions</Button>
          </div>
          
          {/* Animation pédagogique */}
          <div>
            <QuickWinsAnimation />
          </div>
        </div>
      </section>
      
      {/* Section Bénéfices - Multi-colonnes */}
      <section className="py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Pourquoi Quick Wins?
            </h2>
            <ul className="mt-8 space-y-4">
              <li>Implémentation rapide (2-6 semaines)</li>
              <li>ROI mesurable en 6 mois</li>
              <li>Faible investissement initial</li>
            </ul>
          </div>
          
          {/* Schéma animé du processus */}
          <ProcessFlowAnimation />
        </div>
      </section>
      
      {/* Grid Solutions */}
      <section className="py-20">
        {quickWinSolutions.map(solution => (
          <SolutionCard key={solution.id} {...solution} />
        ))}
      </section>
    </>
  );
}
```

---

## 🆘 Support

### Si Perdu
1. Regarder **Index.tsx** en priorité (layouts)
2. Consulter **[STATUS.md](./STATUS.md)** (état actuel)
3. Consulter **[PRIORITIES.md](./PRIORITIES.md)** (quoi faire en premier)
4. Consulter **DESIGN-SYSTEM-MANDATORY.md** (couleurs/icônes)
5. Vérifier **ARCHITECTURE.md** (specs)
6. Examiner solutions.ts/portfolio.ts (structure data)

### Si Bloqué
1. STOP immédiatement
2. Noter erreur + contexte
3. Demander assistance

---

## 🎯 Prochaines Étapes

**Consulter [PRIORITIES.md](./PRIORITIES.md) pour le tableau de priorisation complet**

### Priorité 1: Finaliser Solutions
1. Page /solutions/quick-wins
2. Page /solutions/industries

### Priorité 2: Section Resources
1. Créer glossary.ts
2. Créer useCases.ts
3. Page /glossary (remplacer ComingSoon)
4. Page /use-cases

**Pour chaque page:**
- S'inspirer d'Index.tsx
- Créer animations pédagogiques
- Sections multi-colonnes
- Expliquer visuellement les concepts

---

## 🔒 Règles Absolues NON NÉGOCIABLES

1. ✅ **S'inspirer d'Index.tsx** - Pour TOUS les layouts
2. ✅ **Approche pédagogique** - Animations explicatives
3. ✅ **Multi-colonnes** - Texte + Animation synchronisées
4. ✅ **Design System** - CATEGORY_COLORS/COMPLEXITY_COLORS
5. ✅ **TypeScript strict** - Jamais `any`
6. ✅ **Icônes Lucide** - Vérifier lucide.dev AVANT
7. ✅ **Gains quantifiés** - CHF, %, heures
8. ✅ **"IA" pas "AI"** - En français
9. ❌ **Pas d'emojis** - Jamais code/doc
10. ✅ **Mobile-first** - Toujours

---

**VERSION**: 2.2  
**DATE**: 13 Octobre 2025  
**CRITIQUE**: Références nouveaux documents transformation

**🎯 RÉSUMÉ CHANGEMENTS v2.2:**
- Ajout références STATUS.md, TRANSFORMATION-PLAN.md, PRIORITIES.md
- Section "Ordre de Lecture Mis à Jour" avec organisation claire
- État Actuel renvoyé vers STATUS.md (single source of truth)
- Liens croisés vers nouvelle documentation
