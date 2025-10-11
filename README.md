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

### Ordre de Lecture (IMPORTANT)

1. **[WORKFLOW.md](./WORKFLOW.md)** 🔴 **LIRE EN PREMIER**
   - Règles de développement strictes
   - Processus Git obligatoire
   - Structure du repository
   - Format des commits
   - Checklists avant commit

2. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Document Principal (81KB)
   - Vision & Objectifs
   - Architecture Technique & Stack
   - Design System Ultra Détaillé
   - Animations Framer Motion Avancées
   - Structure des Pages (12+ pages détaillées)
   - Fonctionnalités Interactives (8 features majeures)
   - Plan d'Implémentation (7 semaines)
   - Guidelines Techniques
   - Checklists Complètes

3. **[PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md)** - Pour nouvelles conversations
   - Contexte complet du projet
   - Instructions de développement
   - Liens vers tous les documents

4. **[CHANGELOG.md](./CHANGELOG.md)** - Historique des changements
   - Version 2.0 documentée
   - Liste des corrections
   - Prochaines étapes

### Quick Start

1. **LIRE WORKFLOW.md** (OBLIGATOIRE - Règles de développement)
2. **LIRE ARCHITECTURE.md** (Specs techniques complètes)
3. **Setup environnement** (voir ci-dessous)
4. **Développer phase par phase** avec Claude Code

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

### Phase 1: MVP Foundation (Semaines 1-3)
**Priority 1 : Données** (EN COURS)
- [ ] Créer 8 fichiers de données dans `/src/data/`
- [ ] Design System components
- [ ] Pages core (Expertise, Solutions, Portfolio)

**Priority 2 : Design System**
- [ ] Button variants améliorés
- [ ] Card variants (4 types)
- [ ] Badge variants (5 types)
- [ ] SolutionCard, PortfolioCard

**Priority 3 : Pages Core**
- [ ] Page Expertise complète
- [ ] Page Solutions complète
- [ ] Page Portfolio complète

### Phase 2: Content & Features (Semaines 4-5)
- ROI Calculator interactif
- Diagnostic IA questionnaire
- Case Studies détaillés (LEXAIA, ENKI-REALTY)
- Resources Hub + Blog
- Glossaire + Use Cases + AI Maturity Assessment

### Phase 3: Polish & Launch (Semaines 6-7)
- Pages Business (Process, Pricing, About)
- Contact + AI Chatbot opérationnel
- SEO + Performance + QA Final

Voir timeline détaillée dans [ARCHITECTURE.md](./ARCHITECTURE.md) et processus dans [WORKFLOW.md](./WORKFLOW.md)

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

Voir Design System complet ultra-détaillé dans [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## Projets Portfolio

### Projets de Référence
1. **LEXAIA** - [Détails dans ARCHITECTURE.md]
2. **ENKI-REALTY** - [Détails dans ARCHITECTURE.md]
3. +3 à 5 projets additionnels

Chaque projet avec:
- Screenshots/vidéos
- Challenge client
- Solution implémentée
- Technologies utilisées
- Résultats & métriques
- Témoignage client

---

## Checklist de Développement

### Avant de Coder
- [ ] Lire [WORKFLOW.md](./WORKFLOW.md) (OBLIGATOIRE)
- [ ] Lire [ARCHITECTURE.md](./ARCHITECTURE.md) complet
- [ ] Comprendre le positionnement DAINAMICS
- [ ] Setup Claude Code + environnement local
- [ ] Configurer Git correctement

### Pendant le Développement
- [ ] Suivre [WORKFLOW.md](./WORKFLOW.md) strictement
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

Voir checklists détaillées dans [ARCHITECTURE.md](./ARCHITECTURE.md) et [WORKFLOW.md](./WORKFLOW.md)

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
- **[WORKFLOW.md](./WORKFLOW.md)** 🔴 - Règles de développement (LIRE EN PREMIER)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Document principal (81KB, ultra-détaillé)
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
   1. WORKFLOW.md (OBLIGATOIRE) - Règles & Processus
   2. README.md (ce fichier) - Vue d'ensemble
   3. ARCHITECTURE.md (document principal) - Specs complètes
   4. PROMPT-CONTEXT.md (pour Claude) - Contexte conversations
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
   # Référencer ARCHITECTURE.md pour specs
   # Suivre WORKFLOW.md pour processus
   ```

4. **Suivre le plan d'implémentation**
   - Phase 1, Priority 1: Créer fichiers de données
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

### KPIs Business
- Taux de conversion: **>5%**
- Temps moyen sur site: **>3 min**
- Leads qualifiés/mois: **20-30**
- Bounce rate: **<40%**
- ROI démontré: **Mesurable et trackable**

---

## Support & Questions

### Utilisation de cette Documentation
- **Pour les règles de développement**: [WORKFLOW.md](./WORKFLOW.md) (CRITICAL)
- **Pour la vue d'ensemble**: README.md (ce fichier)
- **Pour les specs détaillées**: [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Pour structurer**: Voir WORKFLOW.md (Organisation Repository)
- **Pour designer**: Voir ARCHITECTURE.md (Design System)
- **Pour implémenter**: Suivre WORKFLOW.md + ARCHITECTURE.md
- **Pour la timeline**: Voir Plan de Développement

### Développement avec Claude Code
1. Lire [WORKFLOW.md](./WORKFLOW.md) en entier
2. Ouvrir Claude Code dans votre terminal
3. Référencer ARCHITECTURE.md dans vos prompts
4. Utiliser les outils MCP:
   - Supabase (base de données, auth, storage)
   - GitHub (version control, CI/CD)
   - Desktop Commander (opérations fichiers système)
5. Développer tâche par tâche
6. **Commit + Push après CHAQUE tâche**
7. Attendre validation avant de continuer

### Pour Nouvelles Conversations
- Utiliser [PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md)
- Copier-coller le contenu dans une nouvelle conversation
- Claude aura tout le contexte nécessaire

---

## Let's Build!

Vous avez maintenant:
- **Règles strictes** de développement ([WORKFLOW.md](./WORKFLOW.md))
- Documentation complète ultra-détaillée (ARCHITECTURE.md - 81KB)
- Design System avec specs précises pour chaque component
- Animations Framer Motion avancées documentées
- Plan d'implémentation de 7 semaines avec tasks
- Guidelines techniques (Supabase, Analytics, SEO, etc.)
- Checklists exhaustives pour chaque phase
- Stack technique moderne et performant

**Prochaine étape**: 
1. **Lire [WORKFLOW.md](./WORKFLOW.md)** (OBLIGATOIRE)
2. Lire [ARCHITECTURE.md](./ARCHITECTURE.md) en entier
3. Setup environnement local
4. Commencer Phase 1, Priority 1 avec Claude Code
5. Build something amazing!

---

## Corrections Apportées

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
*Développé avec Claude Code - v2.1*
