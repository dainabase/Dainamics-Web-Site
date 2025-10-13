# DAINAMICS Website - Documentation Technique

Site web officiel de DAINAMICS - Agence d'expertise IA, Automatisation & Développement

---

## 🚨 RÈGLES CRITIQUES DE DÉVELOPPEMENT

**POUR CLAUDE CODE ET TOUS LES ASSISTANTS IA** :

### OBLIGATION ABSOLUE
Après CHAQUE tâche terminée, vous **DEVEZ** :
1. ✅ Commit avec message clair : `type(scope): description`
2. ✅ Push sur GitHub immédiatement : `git push origin main`
3. ✅ Attendre validation avant de continuer

**Consultez [WORKFLOW.md](./WORKFLOW.md) pour les règles complètes** avant de commencer à développer.

---

## Documentation Complète

### Documentation Transformation (NOUVEAU - 11 Oct 2025)

**Plan de Transformation 24 Semaines** - Restructuration complète du site

1. **[STATUS.md](./STATUS.md)** - Dashboard État Projet
   - Progression globale (Phase 1: 40%, Phase 2: 0%, Phase 3: 0%)
   - Ce qui est terminé, en cours, à faire
   - Problèmes identifiés (redondance navigation, homepage non-optimale)
   - Métriques de succès (baseline → objectifs)
   - Prochaines actions prioritaires

2. **[TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** - Plan Complet 24 Semaines
   - Diagnostic initial (9 items menu → 6 items)
   - Vision cible (architecture optimale)
   - Phase 1: Quick Wins (Semaines 1-4)
   - Phase 2: Contenu & Différenciation (Semaines 5-12)
   - Phase 3: Optimisation & Scale (Semaines 13-24)
   - Checklist finale de validation

3. **[NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md)** - Structure Menu Optimale
   - Analyse comparative 10 sites référence (Zapier, Boldare, Netguru, etc.)
   - Patterns récurrents qui marchent vraiment
   - Recommandations DAINAMICS (6 items, 2 niveaux max)
   - Parcours navigation idéal visiteur PME
   - Meilleures pratiques UX/UI actionnables

4. **[CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md)** - Guidelines Contenu & Rédaction
   - Principes fondamentaux (langage business, toujours quantifier)
   - Tone of Voice DAINAMICS (pragmatique, transparent, accessible)
   - Structure homepage optimale (8 sections)
   - Guidelines rédaction (longueurs idéales, structure paragraphes)
   - Templates pages types (services, cas clients, blog)
   - Format cas clients optimal

5. **[PRIORITIES.md](./PRIORITIES.md)** - Tableau Priorisation P0/P1/P2/P3
   - Vue d'ensemble (25 tâches principales)
   - P0 Critique (8 tâches, Semaines 1-4)
   - P1 Important (7 tâches, Semaines 5-12)
   - P2 Utile (6 tâches, Semaines 13-20)
   - P3 Nice-to-have (4 tâches, Semaines 21-24)
   - Matrice Impact vs Effort

**Objectif Transformation:** Conversion 2-3% → 5-8% (x2-3 leads qualifiés)

---

### Ordre de Lecture (IMPORTANT)

**Pour Développement Immédiat:**
1. **[WORKFLOW.md](./WORKFLOW.md)** 🔴 **LIRE EN PREMIER**
   - Règles de développement strictes
   - Processus Git obligatoire
   - Structure du repository
   - Format des commits
   - Checklists avant commit

2. **[STATUS.md](./STATUS.md)** 🆕 **État Actuel Projet**
   - Où en sommes-nous maintenant
   - Ce qui est terminé/en cours/à faire
   - Prochaines actions prioritaires

3. **[PRIORITIES.md](./PRIORITIES.md)** 🆕 **Tableau Priorisation**
   - Quoi faire en premier (P0)
   - Impact vs Effort chaque tâche

**Pour Comprendre la Vision:**
4. **[TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** 🆕 **Plan 24 Semaines**
   - Vue complète transformation
   - 3 phases détaillées
   - Checklist finale

5. **[NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md)** 🆕 **Structure Menu**
   - Pourquoi 6 items (pas 9)
   - Analyse comparative sites leaders
   - Parcours utilisateur optimal

6. **[CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md)** 🆕 **Guidelines Contenu**
   - Comment écrire (tone of voice)
   - Templates pages
   - Formats optimaux

**Pour Spécifications Techniques:**
7. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Document Principal (81KB)
   - Vision & Objectifs
   - Architecture Technique & Stack
   - Design System Ultra Détaillé
   - Animations Framer Motion Avancées
   - Structure des Pages (12+ pages détaillées)
   - Fonctionnalités Interactives (8 features majeures)
   - Plan d'Implémentation (7 semaines)
   - Guidelines Techniques
   - Checklists Complètes

8. **[DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md)** - Couleurs & Icônes
   - Palette exacte à utiliser
   - CATEGORY_COLORS et COMPLEXITY_COLORS
   - Icônes Lucide React uniquement

**Pour Nouvelles Conversations:**
9. **[PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md)** - Contexte Complet
   - Contexte complet du projet
   - Instructions de développement
   - Liens vers tous les documents

**Historique:**
10. **[CHANGELOG.md](./CHANGELOG.md)** - Historique des changements
    - Version 2.2 documentée
    - Liste des corrections
    - Prochaines étapes

### Quick Start

1. **LIRE STATUS.md** (État actuel - 2 min)
2. **LIRE PRIORITIES.md** (Ce qu'il faut faire - 5 min)
3. **LIRE WORKFLOW.md** (OBLIGATOIRE - Règles développement - 10 min)
4. **LIRE TRANSFORMATION-PLAN.md** (Vision complète - 20 min)
5. **Setup environnement** (voir ci-dessous)
6. **Développer phase par phase** avec Claude Code

---

## Project Setup

### Installation Locale

Requirements: Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Clone le repository
git clone https://github.com/dainabase/Dainamics-Web-Site.git

# Navigate to directory
cd Dainamics-Web-Site

# Install dependencies
npm install

# Start dev server
npm run dev
# App runs on http://localhost:5173
```

### Méthodes de Développement

**1. Via Claude Code (Recommandé)**
- Utilisez Claude Code dans votre terminal
- Développement assisté par IA
- **OBLIGATION** : Commits et push après chaque tâche
- Voir [WORKFLOW.md](./WORKFLOW.md) pour processus détaillé

**2. Via IDE Local (VS Code, Cursor, etc.)**
- Clone repo
- Edit files localement
- Push changes to GitHub après chaque feature

**3. Via GitHub Web**
- Edit files directly in GitHub
- Commit changes avec messages clairs

**4. Via GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Full dev environment in browser

---

## Stack Technique

```yaml
Framework: React 18+
Language: TypeScript 5+
Build Tool: Vite 5+
Styling: Tailwind CSS 3+
State: Zustand / React Context
Forms: React Hook Form + Zod
Animations: Framer Motion 11+ (Advanced)
Icons: Lucide React
UI Components: shadcn/ui + custom
Backend: Supabase (PostgreSQL)
Email: Brevo / SendGrid
Analytics: GA4 + Plausible
Hosting: Vercel (recommended) / Netlify
```

---

## Structure du Projet

```
src/
├─ components/
│  ├─ common/          # Buttons, Cards, Badges, Forms (Design System)
│  ├─ layout/          # Header, Footer, Navigation
│  ├─ features/        # ROI Calculator, Diagnostic, etc.
│  ├─ sections/        # Homepage, Solutions, Portfolio sections
│  └─ ui/              # shadcn/ui components
│
├─ data/               # 🎯 DONNÉES STATIQUES (Priority 1)
│  ├─ solutions.ts     # 15 automatisations TOP 15
│  ├─ portfolio.ts     # Projets (LEXAIA, ENKI-REALTY, etc.)
│  ├─ expertise.ts     # 3 piliers (IA, Automatisation, Dev)
│  ├─ testimonials.ts  # Témoignages clients
│  ├─ integrations.ts  # Intégrations techniques
│  ├─ pricingPackages.ts # 4 tiers de pricing
│  ├─ useCases.ts      # Cas d'usage détaillés
│  └─ glossary.ts      # Glossaire termes techniques
│
├─ pages/              # Pages routes
├─ types/              # TypeScript interfaces
├─ utils/              # Helper functions
├─ hooks/              # Custom React hooks
├─ lib/                # Supabase, Analytics, API setup
└─ styles/             # Global CSS, animations
```

Voir [WORKFLOW.md](./WORKFLOW.md) pour détails d'organisation et [ARCHITECTURE.md](./ARCHITECTURE.md) pour structure complète.

---

## Fonctionnalités Clés

### 8 Fonctionnalités Interactives Majeures

1. **Calculateur ROI** - Estimations personnalisées temps réel avec animations
2. **Diagnostic IA** - Quiz 3-5 questions + recommandations personnalisées
3. **Tech Stack Explorer** - Visual interactif des technologies avec filtres
4. **AI Maturity Assessment** - Quiz 10-15 questions + rapport PDF + scoring
5. **AI Chatbot** - Assistant intelligent avec RAG (Claude API + pgvector)
6. **Quick Win Badge System** - Identification solutions ROI rapide (<6 mois)
7. **Mini-Cours Email** - Email courses automatisés (Brevo/SendGrid)
8. **Progressive Profiling** - Formulaires intelligents 2 étapes + lead scoring

Voir spécifications détaillées dans [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## Plan de Développement

### NOUVEAU : Plan Transformation 24 Semaines

**Consulter [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) pour détails complets**

#### Phase 1: Quick Wins (Semaines 1-4) - EN COURS
**Objectif:** Éliminer redondance, simplifier navigation, homepage optimale

- [ ] Semaine 1 : Restructuration Navigation (9→6 items)
- [ ] Semaine 2 : Refonte Homepage (8 sections)
- [ ] Semaine 3 : Page Pricing Transparente
- [ ] Semaine 4 : Portfolio → Projets + Filtres

**État actuel:** Semaine 2 en cours

#### Phase 2: Contenu & Différenciation (Semaines 5-12)
**Objectif:** Créer contenu manquant, outils conversion

- Pages Services détaillées (4 pages)
- Notre Approche (4 pages)
- Calculateur ROI interactif
- Assessment Maturité IA
- Ressources (Glossaire, Cas d'Usage, Blog)

#### Phase 3: Optimisation & Scale (Semaines 13-24)
**Objectif:** Multilingue, analytics, A/B testing

- Multilingue DE/FR/EN
- Analytics complet (GA4 + Plausible)
- A/B Testing (2-3 tests)
- Portfolio avancé + Video testimonials

---

## Design System

### Couleurs Brand
- **Primary**: `#6366F1` (Violet Indigo)
- **CTA**: `#FF5A00` (Orange vibrant)
- **Background**: `#050510` (Dark Navy)
- **Accent**: `#10E4FF` (Cyan électrique)

### Typographie
- **Display**: Cal Sans (H1-H2) - Headlines puissants
- **Sans**: Inter (Body) - Lisibilité optimale
- **Mono**: Fira Code (Code) - Snippets techniques

### Animations Framer Motion
- Hero parallax scroll avec synchronisation vidéo
- Energy waves réactives au contenu vidéo
- Staggered reveals pour cards et sections
- Magnetic buttons avec effet d'attraction
- Particle field background animé
- Neural network avec orbital rings
- Smooth page transitions

### Components
- Buttons avec variants (primary, secondary, tertiary, ghost) + glow effects
- Cards avec hover effects 3D et transformations
- Badges animés avec pulse pour Quick Wins
- Forms avec validation temps réel et feedback
- Modals, Tooltips, Toasts avec animations entrée/sortie
- Progress bars, Spinners, Accordions

Voir Design System complet ultra-détaillé dans [DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md)

---

## Projets Portfolio

### Projets de Référence
1. **LEXAIA** - Chatbot IA Support Client 24/7
2. **ENKI-REALTY** - Automatisation Gestion Immobilière
3. +3 à 5 projets additionnels

Chaque projet avec:
- Screenshots/vidéos
- Challenge client
- Solution implémentée
- Technologies utilisées
- Résultats & métriques (quantifiés : CHF, %, heures)
- Témoignage client

Voir [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) pour détails complets cas clients

---

## Checklist de Développement

### Avant de Coder
- [ ] Lire [STATUS.md](./STATUS.md) (état actuel)
- [ ] Lire [PRIORITIES.md](./PRIORITIES.md) (priorisation)
- [ ] Lire [WORKFLOW.md](./WORKFLOW.md) (OBLIGATOIRE)
- [ ] Lire [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) (vision)
- [ ] Comprendre le positionnement DAINAMICS
- [ ] Setup Claude Code + environnement local
- [ ] Configurer Git correctement

### Pendant le Développement
- [ ] Suivre [WORKFLOW.md](./WORKFLOW.md) strictement
- [ ] Consulter [PRIORITIES.md](./PRIORITIES.md) pour ordre tâches
- [ ] Référencer [CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md) pour rédaction
- [ ] Respecter [DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md)
- [ ] Respecter la structure de dossiers
- [ ] Développer mobile-first
- [ ] Tester animations à 60fps
- [ ] **Commit + Push après CHAQUE tâche**
- [ ] Messages commit clairs : `type(scope): description`
- [ ] Attendre validation avant de continuer

### Avant Chaque Commit
- [ ] TypeScript sans erreurs
- [ ] ESLint warnings résolues
- [ ] Pas de `console.log` oubliés
- [ ] Pas d'emojis dans le code
- [ ] Noms corrects : LEXAIA, ENKI-REALTY, Claude Code
- [ ] "IA" utilisé (pas "AI") dans textes français
- [ ] Gains quantifiés (CHF, %, heures) - voir [CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md)

### Avant le Launch
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO, Best Practices)
- [ ] Mobile responsiveness 100% (tous breakpoints)
- [ ] Tous liens/forms fonctionnels
- [ ] Animations smooth sans jank
- [ ] Images optimisées (WebP, lazy loading)
- [ ] SEO complet (meta tags, OpenGraph, Schema.org)
- [ ] Analytics configuré (GA4 + Plausible)
- [ ] Legal pages (Privacy, Terms, Cookies)
- [ ] Cross-browser testing
- [ ] Security audit

Voir checklist finale complète dans [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)

---

## Commandes Git Essentielles

```bash
# Vérifier statut
git status

# Ajouter fichiers
git add .

# Commit avec message clair
git commit -m "feat(data): add solutions.ts with TOP 15 automations"

# Push obligatoire après chaque tâche
git push origin main

# Vérifier historique
git log --oneline -5
```

Voir [WORKFLOW.md](./WORKFLOW.md) pour processus Git complet.

---

## Liens Utiles

### Documentation Projet

**Transformation (Nouveau):**
- **[STATUS.md](./STATUS.md)** 🆕 - Dashboard état projet
- **[TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** 🆕 - Plan 24 semaines
- **[NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md)** 🆕 - Structure menu optimale
- **[CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md)** 🆕 - Guidelines contenu
- **[PRIORITIES.md](./PRIORITIES.md)** 🆕 - Priorisation P0/P1/P2/P3

**Développement:**
- **[WORKFLOW.md](./WORKFLOW.md)** 🔴 - Règles de développement (LIRE EN PREMIER)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Document principal (81KB, ultra-détaillé)
- **[DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md)** - Couleurs & Icônes
- **[PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md)** - Contexte conversations IA
- **[CHANGELOG.md](./CHANGELOG.md)** - Historique changements

### Repository
- [GitHub Repository](https://github.com/dainabase/Dainamics-Web-Site)
- Clone: `git clone https://github.com/dainabase/Dainamics-Web-Site.git`

### Technologies
- [React 18 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Supabase](https://supabase.com)
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code)

---

## Démarrage Rapide

### Pour développer efficacement:

1. **Lire la documentation dans l'ordre**
   ```bash
   1. STATUS.md (état actuel) - 5 min
   2. PRIORITIES.md (priorisation) - 5 min
   3. WORKFLOW.md (OBLIGATOIRE - règles) - 10 min
   4. TRANSFORMATION-PLAN.md (vision) - 20 min
   5. README.md (ce fichier) - Vue d'ensemble
   6. ARCHITECTURE.md (specs techniques) - 30 min
   7. DESIGN-SYSTEM-MANDATORY.md (couleurs/icônes) - 5 min
   8. NAVIGATION-ARCHITECTURE.md (structure menu) - 15 min
   9. CONTENT-STRATEGY.md (rédaction) - 10 min
   ```

2. **Setup l'environnement**
   ```bash
   npm install
   npm run dev
   # App runs on http://localhost:5173
   ```

3. **Développer avec Claude Code**
   ```bash
   # Dans votre terminal
   claude-code
   
   # Demander à Claude de vous aider
   # Référencer STATUS.md pour état actuel
   # Suivre PRIORITIES.md pour ordre tâches
   # Utiliser WORKFLOW.md pour processus
   ```

4. **Suivre le plan d'implémentation**
   - Consulter STATUS.md → Section "Prochaines Actions"
   - Voir PRIORITIES.md → Tableau P0 (Critique)
   - Commit + Push après CHAQUE tâche
   - Attendre validation avant de continuer
   - Utiliser les checklists détaillées

---

## Objectifs du Site

### KPIs Techniques
- Lighthouse Score: **>90** (tous critères)
- Mobile Responsiveness: **100%**
- Time to Interactive: **<3s**
- Animation Performance: **60fps constant**
- Accessibility: **WCAG 2.1 AA**

### KPIs Business (Transformation)

**Baseline Actuel:**
- Taux de conversion: ~2-3%
- Bounce rate: ~55-65%
- Temps moyen sur site: ~1-2 min
- Pages vues/session: ~2-3
- Leads qualifiés/mois: ~5-10

**Objectifs Fin Transformation (6 mois):**
- Taux de conversion: **5-8%** (x2-3)
- Bounce rate: **<40%**
- Temps moyen sur site: **>3 min**
- Pages vues/session: **>4**
- Leads qualifiés/mois: **20-30** (x3-4)

Voir [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) pour métriques détaillées

---

## Support & Questions

### Utilisation de cette Documentation

**Pour État Actuel:**
- **[STATUS.md](./STATUS.md)** - Où en sommes-nous maintenant

**Pour Planification:**
- **[PRIORITIES.md](./PRIORITIES.md)** - Quoi faire en priorité
- **[TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** - Plan complet 24 semaines

**Pour Développement:**
- **[WORKFLOW.md](./WORKFLOW.md)** - Règles strictes (CRITICAL)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Specs techniques complètes

**Pour Navigation/Contenu:**
- **[NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md)** - Structure menu optimale
- **[CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md)** - Comment écrire

**Pour Design:**
- **[DESIGN-SYSTEM-MANDATORY.md](./DESIGN-SYSTEM-MANDATORY.md)** - Couleurs & Icônes obligatoires

### Développement avec Claude Code
1. Lire [STATUS.md](./STATUS.md) (état actuel)
2. Lire [PRIORITIES.md](./PRIORITIES.md) (priorisation)
3. Lire [WORKFLOW.md](./WORKFLOW.md) en entier
4. Ouvrir Claude Code dans votre terminal
5. Référencer documentation appropriée dans vos prompts
6. Utiliser les outils MCP:
   - Supabase (base de données, auth, storage)
   - GitHub (version control, CI/CD)
   - Desktop Commander (opérations fichiers système)
7. Développer tâche par tâche
8. **Commit + Push après CHAQUE tâche**
9. Attendre validation avant de continuer

### Pour Nouvelles Conversations
- Utiliser [PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md)
- Copier-coller le contenu dans une nouvelle conversation
- Claude aura tout le contexte nécessaire

---

## Let's Build!

Vous avez maintenant:
- **Dashboard état projet** ([STATUS.md](./STATUS.md))
- **Plan transformation complet** ([TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md) - 29KB)
- **Priorisation claire** ([PRIORITIES.md](./PRIORITIES.md) - 25 tâches)
- **Architecture navigation optimale** ([NAVIGATION-ARCHITECTURE.md](./NAVIGATION-ARCHITECTURE.md) - 24KB)
- **Guidelines contenu** ([CONTENT-STRATEGY.md](./CONTENT-STRATEGY.md) - 17KB)
- **Règles strictes développement** ([WORKFLOW.md](./WORKFLOW.md))
- **Documentation technique complète** (ARCHITECTURE.md - 81KB)
- **Design System précis** (DESIGN-SYSTEM-MANDATORY.md)
- **Stack technique moderne et performant**

**Prochaine étape**: 
1. **Lire [STATUS.md](./STATUS.md)** (état actuel)
2. **Lire [PRIORITIES.md](./PRIORITIES.md)** (priorisation)
3. **Lire [WORKFLOW.md](./WORKFLOW.md)** (OBLIGATOIRE)
4. **Consulter [TRANSFORMATION-PLAN.md](./TRANSFORMATION-PLAN.md)** (vision)
5. Setup environnement local
6. Commencer Phase 1 avec Claude Code
7. Build something amazing!

---

## Corrections Apportées

### Version 2.2 - 11 Octobre 2025
- **Restructuration documentation complète** - Nouveaux documents transformation
- **Ajout STATUS.md** - Dashboard état projet en temps réel
- **Ajout TRANSFORMATION-PLAN.md** - Plan complet 24 semaines (3 phases)
- **Ajout NAVIGATION-ARCHITECTURE.md** - Structure menu optimale (analyse 25+ sites)
- **Ajout CONTENT-STRATEGY.md** - Guidelines contenu et rédaction
- **Ajout PRIORITIES.md** - Tableau priorisation P0/P1/P2/P3
- **Mise à jour README.md** - Hub central vers toute documentation
- **Ordre lecture réorganisé** - Priorisation selon besoin immédiat

### Version 2.1 - 11 Octobre 2025
- **Ajout WORKFLOW.md** - Règles strictes de développement
- **Mise à jour README** - Références WORKFLOW obligatoire
- **Processus Git** - Commit + Push après chaque tâche
- **Validation** - Attendre approbation avant de continuer

### Version 2.0 - 11 Octobre 2025
- **Suppression de tous les emojis** (conformité instructions)
- **Mise à jour Lovable → Claude Code** (outil de développement)
- **Correction noms projets**: L'Exia → **LEXAIA**, NK Reality → **ENKI-REALTY**
- **Design System ultra-détaillé** avec toutes les animations Framer Motion
- **Documentation consolidée** en un seul fichier ARCHITECTURE.md
- **Specs animations avancées** (energy waves, neural network, parallax, etc.)
- **Structure complète** avec tous les components et leurs variants

---

*DAINAMICS Website - Octobre 2025*  
*Transforming businesses through IA, Automatisation & Développement*  
*Développé avec Claude Code - v2.2*