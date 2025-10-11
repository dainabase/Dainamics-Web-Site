# DAINAMICS Website - Documentation Technique

Site web officiel de DAINAMICS - Agence d'expertise IA, Automatisation & Développement

---

## Documentation Complète

**IMPORTANT** : Avant de commencer, lisez la documentation d'architecture complète

### Guide d'Architecture

**[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture Complète
- Vision & Objectifs
- Architecture Technique & Stack
- Design System Ultra Détaillé
- Animations Framer Motion Avancées
- Structure des Pages (12+ pages détaillées)
- Fonctionnalités Interactives (8 features majeures)
- Plan d'Implémentation (7 semaines)
- Guidelines Techniques
- Checklists Complètes

### Quick Start

1. **Lire la documentation** (essentiel)
2. **Suivre le plan d'implémentation**
3. **Utiliser le Design System**
4. **Développer phase par phase avec Claude Code**

---

## Project Setup (Claude Code)

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
```

### Méthodes de Développement

**1. Via Claude Code (Recommandé)**
- Utilisez Claude Code dans votre terminal
- Développement assisté par IA
- Promptez avec Claude pour générer du code
- Commits automatiques ou manuels

**2. Via IDE Local (VS Code, Cursor, etc.)**
- Clone repo
- Edit files localement
- Push changes to GitHub

**3. Via GitHub Web**
- Edit files directly in GitHub
- Commit changes

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
│  ├─ common/          # Buttons, Cards, Badges, Forms
│  ├─ layout/          # Header, Footer, Navigation
│  ├─ features/        # ROI Calculator, Diagnostic, etc.
│  ├─ sections/        # Homepage, Solutions, Portfolio sections
│  └─ animations/      # Neural Network, Energy Waves, Particles
│
├─ pages/              # All pages (12+ pages)
├─ data/               # Solutions, Portfolio, Expertise data
├─ types/              # TypeScript interfaces
├─ utils/              # Helper functions
├─ hooks/              # Custom React hooks
├─ lib/                # Supabase, Analytics, API setup
└─ styles/             # Global CSS, animations
```

Voir [ARCHITECTURE.md](./ARCHITECTURE.md) pour structure complète et détaillée.

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
- Setup + Design System + Homepage complète
- ROI Calculator + AI Diagnostic fonctionnels
- Pages Expertise, Solutions, Portfolio

### Phase 2: Content & Features (Semaines 4-5)
- Case Studies détaillés (LEXAIA, ENKI-REALTY)
- Ressources Hub + Blog
- Glossaire + Use Cases + AI Maturity Assessment

### Phase 3: Polish & Launch (Semaines 6-7)
- Pages Business (Process, Pricing, About)
- Contact + AI Chatbot opérationnel
- SEO + Performance + QA Final

Voir timeline détaillée avec tasks dans [ARCHITECTURE.md](./ARCHITECTURE.md)

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
- [ ] Lire ARCHITECTURE.md complet (essentiel)
- [ ] Comprendre le positionnement DAINAMICS
- [ ] Setup Claude Code + environnement local
- [ ] Configurer Supabase + GitHub

### Pendant le Développement
- [ ] Suivre le Design System strictement
- [ ] Respecter la structure de dossiers
- [ ] Développer mobile-first
- [ ] Tester animations à 60fps
- [ ] Créer les données (solutions.ts, portfolio.ts, etc.)
- [ ] Implémenter fonctionnalités interactives
- [ ] Commits réguliers avec messages clairs

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

Voir checklists détaillées dans [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## Liens Utiles

### Documentation
- [Architecture Complète](./ARCHITECTURE.md) - Document principal (81KB, ultra-détaillé)
- [Prompt de Contexte](./PROMPT-CONTEXT.md) - Pour nouvelles conversations avec Claude

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
   1. README.md (ce fichier) - Vue d'ensemble
   2. ARCHITECTURE.md (document principal) - Specs complètes
   3. PROMPT-CONTEXT.md (pour Claude) - Contexte conversations
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
   # Demander à Claude de vous aider à développer
   # Référencer ARCHITECTURE.md pour specs
   ```

4. **Suivre le plan d'implémentation**
   - Phase 1, Semaine 1: Setup + Homepage
   - Utiliser les checklists détaillées
   - Valider chaque étape avec les specs

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
- **Pour la vue d'ensemble**: README.md (ce fichier)
- **Pour les specs détaillées**: ARCHITECTURE.md (document principal)
- **Pour structurer**: Voir sections Architecture & Structure des Pages
- **Pour designer**: Voir Design System ultra-détaillé
- **Pour implémenter**: Suivre Plan d'Implémentation + Checklists
- **Pour la timeline**: Voir Plan de Développement 7 semaines

### Développement avec Claude Code
1. Ouvrir Claude Code dans votre terminal
2. Référencer ARCHITECTURE.md dans vos prompts
3. Utiliser les outils MCP:
   - Supabase (base de données, auth, storage)
   - GitHub (version control, CI/CD)
   - Desktop Commander (opérations fichiers système)
4. Développer itérativement section par section
5. Valider régulièrement avec les specs
6. Tester animations et performance

### Pour Nouvelles Conversations
- Utiliser [PROMPT-CONTEXT.md](./PROMPT-CONTEXT.md)
- Copier-coller le contenu dans une nouvelle conversation
- Claude aura tout le contexte nécessaire

---

## Let's Build!

Vous avez maintenant:
- Documentation complète ultra-détaillée (ARCHITECTURE.md - 81KB)
- Design System avec specs précises pour chaque component
- Animations Framer Motion avancées documentées
- Plan d'implémentation de 7 semaines avec tasks
- Guidelines techniques (Supabase, Analytics, SEO, etc.)
- Checklists exhaustives pour chaque phase
- Stack technique moderne et performant

**Prochaine étape**: 
1. Lire ARCHITECTURE.md en entier
2. Setup environnement local
3. Commencer Phase 1, Semaine 1 avec Claude Code
4. Build something amazing!

---

## Corrections Apportées (v2.0)

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
*Développé avec Claude Code - v2.0*
