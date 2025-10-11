# PROMPT DE CONTEXTE - PROJET DAINAMICS WEBSITE

**Copiez-collez ce prompt dans une nouvelle conversation avec Claude pour avoir tout le contexte nécessaire**

---

## CONTEXTE DU PROJET

Je travaille sur le développement du site web de DAINAMICS, une société suisse spécialisée dans l'IA, l'Automatisation et le Développement sur mesure pour PME. Le site est développé avec Claude Code (React/TypeScript/Vite) et utilise les outils MCP (Supabase, GitHub, Desktop Commander).

---

## CE QUI A ÉTÉ FAIT

### Documentation Complète Créée

**ARCHITECTURE.md** - Document principal ultra-détaillé (81KB) contenant:
- Vision & Objectifs business
- Architecture technique complète (Stack React 18+, TypeScript, Vite, Tailwind CSS)
- **Design System ultra-détaillé**:
  - Palette de couleurs complète avec tous les variants
  - Typographie (Cal Sans, Inter, Fira Code) avec toutes les tailles
  - Spacing system et breakpoints responsive
  - Components styling complet (Buttons 4 variants, Cards 4 variants, Badges 5 variants)
  - Shadow system, border radius, glassmorphism
- **Animations Framer Motion avancées**:
  - Configuration de base (easing, durations, variants)
  - Hero section avec parallax scroll
  - Neural network animation avec synchronisation vidéo
  - Energy waves réactives
  - Magnetic buttons
  - Particle field background
  - Scroll-triggered animations
  - Page transitions
- Structure des 12+ pages détaillées avec toutes les sections
- 8 fonctionnalités interactives spécifiées
- Plan d'implémentation 7 semaines avec tasks précises
- Guidelines techniques (Supabase schema, Email config, Analytics)
- Checklists exhaustives

**README.md** - Vue d'ensemble avec:
- Quick start guide
- Stack technique
- Structure du projet
- Fonctionnalités clés
- Plan de développement
- Liens vers documentation

**PROMPT-CONTEXT.md** - Ce fichier pour nouvelles conversations

### Repository GitHub Configuré

- **URL**: https://github.com/dainabase/Dainamics-Web-Site
- **Branch**: main
- Documentation à jour (ARCHITECTURE.md, README.md)
- Code existant avec composants de base:
  - Hero avec brain animation
  - Navigation
  - Footer
  - Diagnostic questionnaire
  - Services sections
  - Cursor effects

### Structure Définie

**12+ pages principales**:
1. Homepage (Index)
2. Expertise
3. Solutions + Landing pages individuelles
4. Portfolio + Case studies
5. Resources Hub
6. Blog + Articles
7. Glossary
8. Use Cases Library
9. Process
10. Pricing
11. About
12. Integrations
13. Partners
14. Contact

**8 fonctionnalités interactives**:
1. Calculateur ROI
2. Diagnostic IA
3. Tech Stack Explorer
4. AI Maturity Assessment
5. AI Chatbot (Claude API + RAG)
6. Quick Win Badge System
7. Mini-Cours Email
8. Progressive Profiling

**15 scénarios d'automatisation** (basés sur étude marché PME suisses):
- Facturation Électronique (Rang 1)
- Paie Automatisée SwissDec (Rang 2)
- Chatbots IA Multilingues (Rang 3)
- CRM Automatisé (Rang 4)
- Traitement Intelligent Documents (Rang 5)
- Conformité & Audits (Rang 6)
- Recrutement & Onboarding IA (Rang 7)
- Analyse Prédictive Ventes (Rang 8)
- Gestion Planning & Ressources (Rang 9)
- Marketing Automation (Rang 10)
- Gestion Inventaire & Supply Chain (Rang 11)
- RPA Tâches Répétitives (Rang 12)
- Système Gestion Documentaire (Rang 13)
- Maintenance Prédictive & IoT (Rang 14)
- Analyse Sentiments & Réputation (Rang 15)

---

## LIENS VERS LA DOCUMENTATION GITHUB

- **Repository**: https://github.com/dainabase/Dainamics-Web-Site
- **ARCHITECTURE.md**: https://github.com/dainabase/Dainamics-Web-Site/blob/main/ARCHITECTURE.md
- **README.md**: https://github.com/dainabase/Dainamics-Web-Site/blob/main/README.md

---

## OUTILS MCP DISPONIBLES

Tu as accès à ces outils MCP (déjà configurés):

- **Supabase**: Base de données PostgreSQL, auth, storage (pour leads, diagnostic results, chatbot RAG)
- **GitHub**: Pour gérer le code et la documentation
- **Desktop Commander**: Pour gestion fichiers et processus locaux

---

## POSITIONNEMENT DAINAMICS

**PAS seulement**: Une agence d'automatisation suisse  
**MAIS**: Une agence d'expertise tech complète (IA + Automatisation + Développement)

**Différenciation**: Triple expertise + réalisations concrètes (LEXAIA, ENKI-REALTY)  
**Portée**: Suisse ET International  
**Cible**: PME 10-150 employés

**Tone of Voice**:
- Professionnel mais accessible
- Orienté business et ROI concret
- Pas de jargon inutile
- Focus sur la valeur et les résultats mesurables

---

## DESIGN SYSTEM (RÉSUMÉ)

### Couleurs
- **Primary**: `#6366F1` (Indigo-500)
- **CTA**: `#FF5A00` (Orange vibrant)
- **Background**: `#050510` (Dark Navy)
- **Accent**: `#10E4FF` (Cyan électrique)

### Typographie
- **Display**: Cal Sans (H1-H2)
- **Body**: Inter
- **Mono**: Fira Code

### Animations Clés
- Hero: Parallax scroll + brain animation synchronisée
- Energy waves: Réactives au contenu vidéo
- Cards: Hover avec scale + glow
- Buttons: Magnetic effect + pulse pour CTA
- Page transitions: Smooth avec Framer Motion

Voir ARCHITECTURE.md pour specs complètes ultra-détaillées.

---

## STACK TECHNIQUE

```yaml
Framework: React 18+
Language: TypeScript 5+
Build Tool: Vite 5+
Styling: Tailwind CSS 3+
State: Zustand / React Context
Forms: React Hook Form + Zod
Animations: Framer Motion 11+
Icons: Lucide React
UI: shadcn/ui + custom
Backend: Supabase (PostgreSQL)
Email: Brevo / SendGrid
Analytics: GA4 + Plausible
Hosting: Vercel / Netlify
Development: Claude Code (primary)
```

---

## PROCHAINES ÉTAPES

Nous sommes prêts à commencer le développement. Le plan d'implémentation complet est dans ARCHITECTURE.md.

### Phase 1, Semaine 1 (À FAIRE EN PREMIER):
1. Setup Vite project avec TypeScript
2. Configure Tailwind CSS avec theme DAINAMICS
3. Implement Design System:
   - Button component (4 variants)
   - Card component (4 variants)
   - Badge component (5 variants)
   - Form components (Input, Select, Textarea)
4. Build Layout components:
   - Header + Navigation (Desktop + Mobile)
   - Footer
   - Container, Section wrappers
5. Build Homepage Sections 1-5:
   - Hero (avec brain animation)
   - Value Proposition
   - Expertise preview
   - Portfolio highlights
   - Social Proof

### Phase 1, Semaine 2:
- Complete Homepage (sections 6-9)
- Implement ROI Calculator
- Implement AI Diagnostic
- Create data files (solutions.ts, portfolio.ts, etc.)

### Phase 1, Semaine 3:
- Pages Expertise, Solutions, Portfolio
- Tech Stack Explorer
- Solution landing pages (3 prioritaires)

Voir timeline complète dans ARCHITECTURE.md.

---

## FICHIERS CLÉS À CRÉER

### Data Files (dans `src/data/`)
- `solutions.ts`: 15 solutions d'automatisation (specs dans TOP 15 doc)
- `portfolio.ts`: Projets (LEXAIA, ENKI-REALTY, +3-5 autres)
- `expertise.ts`: 3 piliers (IA, Automatisation, Développement)
- `testimonials.ts`: Témoignages clients
- `blogPosts.ts`: Articles de blog
- `emailCourses.ts`: Mini-cours email
- `integrations.ts`: 50-100 intégrations
- `pricingPackages.ts`: 4 tiers de pricing
- `useCases.ts`: 20-30 cas d'usage
- `glossary.ts`: 50-200 termes techniques

### Components (dans `src/components/`)
- `common/`: Button, Card, Badge, Input, Select, Modal, etc.
- `layout/`: Header, Footer, Navigation, Container, Section
- `features/`: ROI Calculator, AI Diagnostic, Tech Stack Explorer, etc.
- `sections/`: Homepage sections, Solutions sections, Portfolio sections
- `animations/`: Neural Network, Energy Waves, Particle Field, etc.

---

## PROJETS PORTFOLIO

### Projets de Référence Confirmés
1. **LEXAIA** (corrected from "L'Exia")
2. **ENKI-REALTY** (corrected from "NK Reality")
3. +3 à 5 projets additionnels à définir

Chaque case study doit inclure:
- Screenshots/vidéos du projet
- Description du challenge client
- Solution technique implémentée
- Technologies utilisées
- Résultats & métriques concrètes
- Témoignage client

---

## INSTRUCTIONS IMPORTANTES

### Développement
1. **TOUJOURS** référencer ARCHITECTURE.md pour les specs détaillées
2. Utiliser les outils MCP quand nécessaire:
   - Supabase pour backend/database
   - GitHub pour code management
   - Desktop Commander pour opérations fichiers
3. Suivre le **Design System strictement** (couleurs, typo, spacing, components)
4. Développer **mobile-first** avec Tailwind CSS
5. Respecter la **structure de dossiers** définie
6. Créer des **solutions concrètes et actionnables** (pas juste théorie)
7. Tester les **animations à 60fps** (performance critique)

### Animations Framer Motion
- Utiliser les variants définis dans ARCHITECTURE.md
- Maintenir 60fps constant
- Tester sur devices mobiles
- Optimiser pour performance

### Design
- **Pas d'emojis** dans le code ou documentation
- Suivre la palette de couleurs exacte
- Utiliser les fonts définies (Cal Sans, Inter, Fira Code)
- Appliquer les animations avec parcimonie mais impact

### Données
- Les 15 solutions proviennent du document "TOP 15 Automatisations"
- Scores commerciaux, ROI, et difficultés techniques déjà définis
- Utiliser ces données pour créer `solutions.ts`

### Noms et Terminologie
- Projets: **LEXAIA** et **ENKI-REALTY** (orthographe correcte)
- Outil de dev: **Claude Code** (pas Lovable)
- Toujours écrire **IA** (pas AI) en français

---

## CE DONT J'AI BESOIN

**Aide-moi à [PRÉCISER ICI CE QUE VOUS VOULEZ FAIRE]**

Exemples de demandes:

### Pour démarrer le développement:
- "Commencer Phase 1, Semaine 1: setup du projet et homepage"
- "Créer le Design System complet avec tous les components"
- "Implémenter les animations Framer Motion du Hero"

### Pour créer des fichiers de données:
- "Créer src/data/solutions.ts avec les 15 solutions du TOP 15"
- "Créer src/data/portfolio.ts avec LEXAIA, ENKI-REALTY et 3 autres projets"
- "Créer src/data/expertise.ts avec les 3 piliers"

### Pour implémenter des features:
- "Développer le Calculateur ROI interactif avec animations"
- "Créer le Diagnostic IA avec 5 questions et logique de recommandations"
- "Implémenter le Tech Stack Explorer avec filtres et search"

### Pour créer des pages:
- "Créer la page Expertise complète avec toutes les sections"
- "Développer la page Solutions avec filtres et grille de cards"
- "Builder la page Portfolio avec featured projects"

### Pour travailler sur l'existant:
- "Améliorer l'animation du brain dans Hero.tsx"
- "Ajouter des effets de glow aux buttons CTA"
- "Optimiser les performances des animations"

---

## RÈGLES CRITIQUES

1. **TOUJOURS** consulter ARCHITECTURE.md avant d'implémenter quoi que ce soit
2. **NE JAMAIS** utiliser d'emojis dans le code ou la documentation
3. **TOUJOURS** développer mobile-first
4. **TOUJOURS** tester les animations à 60fps
5. **TOUJOURS** suivre le Design System défini
6. **NE JAMAIS** créer de composants non spécifiés sans validation
7. **TOUJOURS** écrire en français pour le contenu français (IA, pas AI)
8. **TOUJOURS** utiliser les noms corrects: LEXAIA, ENKI-REALTY, Claude Code

---

## POUR PLUS DE DÉTAILS

**Document principal**: [ARCHITECTURE.md](https://github.com/dainabase/Dainamics-Web-Site/blob/main/ARCHITECTURE.md)

Ce document contient TOUT:
- Specs complètes de chaque page (section par section)
- Design System ultra-détaillé (couleurs, typo, components, animations)
- Code examples pour les components clés
- Implementation guides pour les features interactives
- Supabase schema SQL complet
- Analytics tracking examples
- SEO configuration
- Et bien plus (81KB de documentation)

**Lire ce document en entier avant de commencer à coder.**

---

Voilà le contexte complet. Dis-moi ce que tu veux développer et on commence !
