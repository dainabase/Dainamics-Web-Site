# 🏗️ ARCHITECTURE COMPLÈTE - DAINAMICS WEBSITE (Suite)

## 📊 STRUCTURE DE DONNÉES (Suite)

### Types TypeScript (Suite)

```typescript
export interface Integration {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: 'accounting' | 'crm' | 'hr' | 'ecommerce' | 'marketing' | 'productivity' | 'cloud' | 'database' | 'payment' | 'communication' | 'storage' | 'other';
  
  description: string;
  features: string[];
  
  // Compatible solutions
  compatibleWith: string[]; // Solution IDs
  
  // Links
  website?: string;
  documentation?: string;
  
  // Flags
  popular: boolean;
  swiss: boolean; // Entreprise suisse
  
  // Implementation
  implementationTime: string; // "1-2 semaines"
  customAvailable: boolean;
}

export interface PricingPackage {
  id: string;
  tier: 'starter' | 'growth' | 'scale' | 'custom';
  name: string;
  tagline?: string; // "POPULAIRE"
  
  pricing: {
    min: number;
    max: number;
    currency: 'CHF' | 'EUR' | 'USD';
  };
  
  timeline: {
    min: number; // weeks
    max: number;
  };
  
  features: {
    name: string;
    included: boolean;
  }[];
  
  examples: string[];
  
  ctaText: string;
  ctaLink: string;
  
  recommended: boolean;
}

export interface UseCase {
  id: string;
  title: string;
  slug: string;
  sector: string;
  function: string; // "Finance", "RH", etc.
  
  problem: string;
  solution: {
    description: string;
    components: string[];
  };
  
  results: {
    metric: string;
    value: string;
  }[];
  
  budget: {
    amount: number;
    currency: 'CHF';
  };
  timeline: string; // "8 semaines"
  
  tags: string[];
  relatedSolutions: string[];
  relatedProjects?: string[];
}
```

---

## 🎨 DESIGN SYSTEM

### Palette de Couleurs

```css
/* Brand Colors */
:root {
  /* Primary - Violet DAINAMICS */
  --dainamics-primary: #6366F1; /* Indigo-500 */
  --dainamics-primary-dark: #4F46E5; /* Indigo-600 */
  --dainamics-primary-light: #818CF8; /* Indigo-400 */
  
  /* Secondary - Orange CTA */
  --dainamics-cta: #FF5A00; /* Orange vibrant */
  --dainamics-cta-dark: #E64D00;
  --dainamics-cta-light: #FF7A33;
  
  /* Neutrals */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  /* Success/Error/Warning */
  --success: #10B981; /* Green-500 */
  --error: #EF4444; /* Red-500 */
  --warning: #F59E0B; /* Amber-500 */
  --info: #3B82F6; /* Blue-500 */
  
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;
  --bg-tertiary: #F3F4F6;
  
  /* Text */
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --text-tertiary: #9CA3AF;
  
  /* Borders */
  --border-light: #E5E7EB;
  --border-medium: #D1D5DB;
  --border-dark: #9CA3AF;
}

/* Dark Mode (optionnel) */
[data-theme="dark"] {
  --bg-primary: #111827;
  --bg-secondary: #1F2937;
  --bg-tertiary: #374151;
  
  --text-primary: #F9FAFB;
  --text-secondary: #D1D5DB;
  --text-tertiary: #9CA3AF;
  
  --border-light: #374151;
  --border-medium: #4B5563;
  --border-dark: #6B7280;
}
```

### Typographie

```css
/* Fonts */
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Cal Sans', 'Inter', sans-serif; /* Pour H1-H2 */
  --font-mono: 'Fira Code', 'JetBrains Mono', monospace;
}

/* Font Sizes */
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.text-6xl { font-size: 3.75rem; line-height: 1; }
.text-7xl { font-size: 4.5rem; line-height: 1; }

/* Font Weights */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }

/* Headings */
h1, .h1 {
  font-family: var(--font-display);
  font-size: 3.75rem; /* 60px */
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2, .h2 {
  font-family: var(--font-display);
  font-size: 3rem; /* 48px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3, .h3 {
  font-family: var(--font-sans);
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  line-height: 1.3;
}

h4, .h4 {
  font-family: var(--font-sans);
  font-size: 1.875rem; /* 30px */
  font-weight: 600;
  line-height: 1.4;
}

h5, .h5 {
  font-family: var(--font-sans);
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  line-height: 1.5;
}

/* Body Text */
body {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-primary);
}

.lead {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

/* Responsive Typography */
@media (max-width: 768px) {
  h1, .h1 { font-size: 2.5rem; } /* 40px */
  h2, .h2 { font-size: 2rem; } /* 32px */
  h3, .h3 { font-size: 1.5rem; } /* 24px */
}
```

### Spacing System

```css
/* Spacing Scale (Tailwind-like) */
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}

/* Section Spacing */
.section {
  padding-top: var(--space-20);
  padding-bottom: var(--space-20);
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--space-32);
    padding-bottom: var(--space-32);
  }
}
```

### Components Styling

#### Buttons

```css
/* Primary Button (CTA) */
.btn-primary {
  background: var(--dainamics-cta);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(255, 90, 0, 0.2);
}

.btn-primary:hover {
  background: var(--dainamics-cta-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(255, 90, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button (Outline) */
.btn-secondary {
  background: transparent;
  color: var(--dainamics-primary);
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid var(--dainamics-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--dainamics-primary);
  color: white;
}

/* Tertiary Button (Ghost) */
.btn-tertiary {
  background: transparent;
  color: var(--text-primary);
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-tertiary:hover {
  background: var(--bg-tertiary);
}

/* Button Sizes */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}
```

#### Cards

```css
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--dainamics-primary);
  box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.1);
  transform: translateY(-4px);
}

.card-featured {
  border: 2px solid var(--dainamics-primary);
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.1);
}
```

#### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-primary {
  background: rgba(99, 102, 241, 0.1);
  color: var(--dainamics-primary);
}

.badge-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
}

.badge-quick-win {
  background: linear-gradient(135deg, #FF5A00, #FFA000);
  color: white;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 90, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 90, 0, 0);
  }
}
```

#### Forms

```css
.input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--border-medium);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: var(--font-sans);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--dainamics-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.input-error {
  border-color: var(--error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Chevron down */
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

.textarea {
  min-height: 120px;
  resize: vertical;
}
```

### Animations

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out;
}

/* Stagger Children */
.stagger-children > * {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
```

### Responsive Breakpoints

```css
/* Mobile First Breakpoints */
:root {
  --breakpoint-sm: 640px;   /* Small devices */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Laptops */
  --breakpoint-xl: 1280px;  /* Desktops */
  --breakpoint-2xl: 1536px; /* Large screens */
}

/* Usage */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## 📅 PLAN D'IMPLÉMENTATION

### Phase 1: MVP Foundation (Semaines 1-3)

#### Semaine 1: Setup & Core Pages

**Objectif:** Infrastructure de base + Homepage

**Tasks:**
- [ ] Setup Lovable project
- [ ] Configure TypeScript + ESLint + Prettier
- [ ] Setup Tailwind CSS avec config DAINAMICS
- [ ] Implement Design System (colors, typography, spacing)
- [ ] Create reusable components:
  - [ ] Button
  - [ ] Card
  - [ ] Badge
  - [ ] Input/Form components
  - [ ] Layout components (Header, Footer, Container)
- [ ] Build Navigation (Header + Footer)
- [ ] Build Homepage (Sections 1-5):
  - [ ] Hero
  - [ ] Valeur immédiate
  - [ ] Nos expertises
  - [ ] Portfolio highlights
  - [ ] Preuve sociale

**Livrables:**
- Homepage fonctionnelle (70%)
- Design system implémenté
- Navigation complète

---

#### Semaine 2: Core Functionality

**Objectif:** Homepage complète + Fonctionnalités interactives

**Tasks:**
- [ ] Homepage (Sections 6-9):
  - [ ] Calculateur ROI
  - [ ] Diagnostic IA
  - [ ] Scénarios d'automatisation
  - [ ] CTA final
- [ ] Create data structure:
  - [ ] `src/data/solutions.ts` (12-15 solutions)
  - [ ] `src/data/portfolio.ts` (5 projets)
  - [ ] `src/data/expertise.ts`
  - [ ] `src/data/testimonials.ts`
- [ ] Implement Calculateur ROI interactif
- [ ] Implement Diagnostic IA (3-5 questions)
- [ ] Form handling (Progressive Profiling)

**Livrables:**
- Homepage 100% complète
- 2 fonctionnalités interactives majeures
- Data structures créées

---

#### Semaine 3: Key Pages

**Objectif:** Pages Expertise + Solutions + Portfolio

**Tasks:**
- [ ] Page Expertise (`/expertise`):
  - [ ] Hero
  - [ ] Tech Stack Explorer
  - [ ] 3 piliers (tabs ou sections)
  - [ ] Process Transparency
- [ ] Page Solutions (`/solutions`):
  - [ ] Hero
  - [ ] Filtres & recherche
  - [ ] Grille de solutions (cards)
  - [ ] Use case library link
- [ ] Landing pages solutions (3-5 prioritaires):
  - [ ] `/solutions/facturation`
  - [ ] `/solutions/chatbots`
  - [ ] `/solutions/crm`
- [ ] Page Portfolio (`/portfolio`):
  - [ ] Hero
  - [ ] Filtres
  - [ ] Grille de projets
  - [ ] Featured projects (L'Exia, NK Reality)

**Livrables:**
- 3 pages majeures complètes
- 3-5 landing pages solutions
- Tech Stack Explorer interactif

---

### Phase 2: Content & Features (Semaines 4-5)

#### Semaine 4: Case Studies & Resources

**Objectif:** Portfolio détaillé + Ressources

**Tasks:**
- [ ] Case studies individuels (2 prioritaires):
  - [ ] `/portfolio/lexia` (complet avec screenshots, metrics, etc.)
  - [ ] `/portfolio/nk-reality`
- [ ] Page Ressources Hub (`/ressources`):
  - [ ] Hero
  - [ ] Guides téléchargeables (4-6)
  - [ ] Articles récents (blog preview)
  - [ ] Mini-cours email
  - [ ] AI Maturity Assessment
  - [ ] Glossaire link
  - [ ] FAQ
- [ ] Page Blog (`/ressources/blog`):
  - [ ] Layout grid
  - [ ] Filtres & recherche
  - [ ] Pagination
  - [ ] Sidebar (desktop)
- [ ] Create 5-10 blog posts (minimum viable)

**Livrables:**
- 2 case studies complets
- Page Ressources fonctionnelle
- Blog structure + 5-10 articles

---

#### Semaine 5: Advanced Features

**Objectif:** Fonctionnalités avancées + Pages secondaires

**Tasks:**
- [ ] Glossaire Tech (`/ressources/glossaire`):
  - [ ] 50-100 termes (minimum viable)
  - [ ] Recherche instantanée
  - [ ] Index alphabétique
  - [ ] SEO optimization
- [ ] Use Case Library (`/cas-usage`):
  - [ ] 20-30 cas d'usage
  - [ ] Filtres avancés
  - [ ] Cards avec détails
- [ ] Mini-cours email (setup):
  - [ ] 2-3 cours créés
  - [ ] Email automation (ConvertKit/Brevo)
  - [ ] Landing pages inscription
- [ ] AI Maturity Assessment:
  - [ ] Quiz 10 questions
  - [ ] Logique de scoring
  - [ ] Résultats personnalisés
  - [ ] PDF report generation

**Livrables:**
- Glossaire avec 50+ termes
- Use Case Library fonctionnelle
- 2-3 mini-cours email
- AI Maturity Assessment complet

---

### Phase 3: Polish & Launch (Semaines 6-7)

#### Semaine 6: Pages Business & Intégrations

**Objectif:** Pages commerciales + Features finales

**Tasks:**
- [ ] Page Process (`/notre-process`):
  - [ ] 5 étapes détaillées
  - [ ] Garanties
  - [ ] Outils de collaboration
- [ ] Page Pricing (`/tarifs`):
  - [ ] 4 tiers packages
  - [ ] Garanties
  - [ ] Inclus/Exclus
  - [ ] FAQ pricing
  - [ ] Calculateur de coût
- [ ] Page À propos (`/about`):
  - [ ] Mission
  - [ ] Expertise
  - [ ] 3 piliers
  - [ ] Valeurs
  - [ ] Nos limites (honnêteté)
  - [ ] Équipe (optionnel)
- [ ] Page Intégrations (`/integrations`):
  - [ ] 50-100 intégrations
  - [ ] Filtres par catégorie
  - [ ] Cards intégrations
  - [ ] Intégration custom section
- [ ] Page Partenaires (`/partenaires`):
  - [ ] 4 types de partenariats
  - [ ] Structure commissions
  - [ ] CTAs inscription

**Livrables:**
- 5 pages business complètes
- Page intégrations avec 50+ entries
- Programme partenaires défini

---

#### Semaine 7: Contact, Chatbot & Final Polish

**Objectif:** Finalisation + Chatbot IA

**Tasks:**
- [ ] Page Contact (`/contact`):
  - [ ] Progressive profiling form
  - [ ] Que se passe-t-il ensuite
  - [ ] Autres moyens de contact
  - [ ] One-tap mobile
  - [ ] FAQ contact
- [ ] AI Chatbot implémentation:
  - [ ] Claude API + RAG setup
  - [ ] Vectorisation contenu site
  - [ ] UI chatbot (bottom-right)
  - [ ] Prompting strategy
  - [ ] Lead capture flow
- [ ] SEO Optimization:
  - [ ] Meta tags toutes pages
  - [ ] OpenGraph images
  - [ ] Sitemap.xml
  - [ ] Robots.txt
  - [ ] Schema.org markup (LocalBusiness, FAQ, etc.)
- [ ] Performance optimization:
  - [ ] Image optimization (WebP, lazy loading)
  - [ ] Code splitting
  - [ ] Lighthouse audit >90
- [ ] Analytics setup:
  - [ ] Google Analytics 4
  - [ ] Hotjar (optionnel)
  - [ ] Conversion tracking
- [ ] Final QA:
  - [ ] Cross-browser testing
  - [ ] Mobile responsiveness
  - [ ] Form submissions
  - [ ] All CTAs working
  - [ ] Links validation

**Livrables:**
- Page Contact fonctionnelle
- Chatbot IA opérationnel
- Site optimisé (SEO + Performance)
- QA complet passé

---

### Phase 4: Post-Launch (Semaine 8+)

#### Tâches Continues

**Contenu:**
- [ ] Publier 2-4 articles blog/mois
- [ ] Créer case studies additionnels
- [ ] Enrichir glossaire (200+ termes)
- [ ] Ajouter use cases

**Optimisation:**
- [ ] A/B testing CTAs
- [ ] Heatmaps analysis
- [ ] Conversion rate optimization
- [ ] SEO content strategy

**Features:**
- [ ] Multilangue (FR/EN/DE)
- [ ] Dark mode (optionnel)
- [ ] Features additionnelles basées sur feedback

---

## 🛠️ GUIDELINES TECHNIQUES

### Stack Technologique Recommandé

```yaml
Frontend Framework: React 18+ (via Lovable)
Language: TypeScript
Styling: Tailwind CSS 3+
State Management: Zustand ou React Context
Forms: React Hook Form + Zod validation
Animations: Framer Motion
Icons: Lucide React
Backend/APIs: Supabase (via MCP)
Hosting: Vercel / Netlify
Analytics: Google Analytics 4 + Plausible (privacy-friendly)
Email: Brevo / ConvertKit / Mailchimp
CMS (optionnel): Sanity / Contentful pour blog
```

### Structure de Dossiers

```
dainamics-website/
├─ public/
│  ├─ images/
│  │  ├─ portfolio/
│  │  ├─ solutions/
│  │  ├─ team/
│  │  └─ logos/
│  ├─ favicon.ico
│  └─ robots.txt
│
├─ src/
│  ├─ assets/
│  │  └─ icons/
│  │
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Card.tsx
│  │  │  ├─ Badge.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ Modal.tsx
│  │  │  └─ ...
│  │  │
│  │  ├─ layout/
│  │  │  ├─ Header.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Navigation.tsx
│  │  │  ├─ Container.tsx
│  │  │  └─ Section.tsx
│  │  │
│  │  ├─ features/
│  │  │  ├─ ROICalculator.tsx
│  │  │  ├─ AIDiagnostic.tsx
│  │  │  ├─ TechStackExplorer.tsx
│  │  │  ├─ QuickWinBadge.tsx
│  │  │  ├─ ProgressiveForm.tsx
│  │  │  ├─ AIMaturityAssessment.tsx
│  │  │  ├─ AIChatbot.tsx
│  │  │  └─ ...
│  │  │
│  │  └─ sections/
│  │     ├─ homepage/
│  │     │  ├─ Hero.tsx
│  │     │  ├─ ValueProposition.tsx
│  │     │  ├─ Expertise.tsx
│  │     │  └─ ...
│  │     ├─ solutions/
│  │     └─ portfolio/
│  │
│  ├─ pages/
│  │  ├─ index.tsx              # Homepage
│  │  ├─ expertise.tsx
│  │  ├─ solutions/
│  │  │  ├─ index.tsx
│  │  │  └─ [slug].tsx          # Dynamic landing pages
│  │  ├─ portfolio/
│  │  │  ├─ index.tsx
│  │  │  └─ [slug].tsx          # Case studies
│  │  ├─ ressources/
│  │  │  ├─ index.tsx
│  │  │  ├─ blog/
│  │  │  ├─ glossaire.tsx
│  │  │  └─ guides.tsx
│  │  ├─ about.tsx
│  │  ├─ pricing.tsx
│  │  ├─ contact.tsx
│  │  └─ ...
│  │
│  ├─ data/
│  │  ├─ solutions.ts
│  │  ├─ portfolio.ts
│  │  ├─ expertise.ts
│  │  ├─ testimonials.ts
│  │  ├─ blogPosts.ts
│  │  ├─ emailCourses.ts
│  │  ├─ integrations.ts
│  │  ├─ pricingPackages.ts
│  │  └─ useCases.ts
│  │
│  ├─ types/
│  │  └─ index.ts
│  │
│  ├─ utils/
│  │  ├─ calculateROI.ts
│  │  ├─ formatters.ts
│  │  ├─ validators.ts
│  │  └─ ...
│  │
│  ├─ hooks/
│  │  ├─ useForm.ts
│  │  ├─ useSearch.ts
│  │  ├─ useAnalytics.ts
│  │  └─ ...
│  │
│  ├─ lib/
│  │  ├─ supabase.ts
│  │  ├─ analytics.ts
│  │  └─ api/
│  │     ├─ chatbot.ts
│  │     └─ email.ts
│  │
│  ├─ styles/
│  │  ├─ globals.css
│  │  └─ animations.css
│  │
│  └─ config/
│     ├─ site.ts              # Site metadata
│     ├─ navigation.ts        # Nav structure
│     └─ theme.ts             # Theme config
│
├─ .env.example
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ README.md
```

### Configuration Supabase (via MCP)

```typescript
// src/lib/supabase.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tables à créer dans Supabase:
// - leads (contact form submissions)
// - diagnostic_results (AI diagnostic results)
// - roi_calculations (ROI calculator results)
// - assessment_results (AI Maturity Assessment results)
// - email_subscriptions (newsletter, mini-cours)
// - chatbot_conversations (optional, pour analytics)
```

#### Schema Supabase

```sql
-- Leads (Contact forms)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  project_type VARCHAR(50),
  budget VARCHAR(50),
  message TEXT,
  source VARCHAR(100), -- "contact_form", "diagnostic", "roi_calculator"
  created_at TIMESTAMP DEFAULT NOW()
);

-- Diagnostic Results
CREATE TABLE diagnostic_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  answers JSONB NOT NULL, -- Store all answers
  recommendations JSONB NOT NULL, -- Recommended solutions
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ROI Calculations
CREATE TABLE roi_calculations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255),
  solution_id VARCHAR(100),
  inputs JSONB NOT NULL, -- User inputs
  results JSONB NOT NULL, -- Calculated results
  created_at TIMESTAMP DEFAULT NOW()
);

-- AI Maturity Assessment
CREATE TABLE assessment_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  answers JSONB NOT NULL,
  category_scores JSONB NOT NULL,
  overall_score INTEGER,
  maturity_level INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Email Subscriptions
CREATE TABLE email_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscription_type VARCHAR(50), -- "newsletter", "mini_cours"
  course_id VARCHAR(100), -- If mini-cours
  status VARCHAR(20) DEFAULT 'active', -- "active", "unsubscribed"
  created_at TIMESTAMP DEFAULT NOW()
);

-- Chatbot Conversations (Optional)
CREATE TABLE chatbot_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL,
  messages JSONB NOT NULL, -- Array of messages
  lead_captured BOOLEAN DEFAULT FALSE,
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Configuration GitHub (via MCP)

```yaml
# Repository structure
dainamics-web-site/
├─ .github/
│  └─ workflows/
│     ├─ deploy.yml          # CI/CD
│     └─ lighthouse.yml      # Performance checks
│
├─ docs/
│  ├─ ARCHITECTURE.md        # This document
│  ├─ CONTRIBUTING.md
│  └─ CHANGELOG.md
│
└─ [site code]

# Branches strategy
main          # Production
staging       # Pre-production testing
develop       # Development
feature/*     # Feature branches
```

### Best Practices

#### Performance

```typescript
// Image Optimization
import Image from 'next/image'; // If using Next.js

<Image
  src="/images/portfolio/lexia.webp"
  alt="L'Exia Screenshot"
  width={1200}
  height={800}
  loading="lazy" // Lazy load images below fold
  quality={85} // Balance quality/size
/>

// Code Splitting
const ROICalculator = lazy(() => import('@/components/features/ROICalculator'));

// Preload critical resources
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

#### SEO

```typescript
// src/components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  const siteName = "DAINAMICS";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = "https://dainamics.ch/og-image.jpg";
  const defaultUrl = "https://dainamics.ch";
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional */}
      <link rel="canonical" href={url || defaultUrl} />
    </Head>
  );
}
```

#### Analytics

```typescript
// src/lib/analytics.ts

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Plausible (privacy-friendly alternative)
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props: properties });
  }
};

// Usage
trackEvent('roi_calculator_used', {
  solution: 'facturation',
  estimated_savings: 35000
});

trackEvent('lead_captured', {
  source: 'diagnostic',
  solution_recommended: 'chatbot'
});
```

---

## ✅ CHECKLIST FINALE

### Avant le Launch

#### Technique
- [ ] Tous les liens fonctionnent
- [ ] Tous les formulaires envoient correctement
- [ ] Images optimisées (WebP, <200KB)
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO)
- [ ] Mobile responsiveness parfaite
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] SSL certificate actif
- [ ] Analytics configuré
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré
- [ ] 404 page custom

#### Contenu
- [ ] Toutes les pages remplies
- [ ] 12-15 solutions documentées
- [ ] 5+ projets portfolio avec case studies
- [ ] 10+ articles blog
- [ ] 50+ termes glossaire
- [ ] 20+ use cases
- [ ] Témoignages clients (3-5)
- [ ] FAQs complètes
- [ ] Legal pages (Privacy, Terms)

#### Fonctionnalités
- [ ] Calculateur ROI fonctionnel
- [ ] Diagnostic IA opérationnel
- [ ] Tech Stack Explorer interactif
- [ ] AI Maturity Assessment complet
- [ ] Mini-cours email configurés
- [ ] Chatbot IA déployé
- [ ] Formulaires avec Progressive Profiling
- [ ] Lead capture dans Supabase
- [ ] Email automation configurée

#### SEO
- [ ] Meta tags toutes pages
- [ ] OpenGraph images
- [ ] Schema.org markup (LocalBusiness, FAQPage)
- [ ] H1-H6 structure correcte
- [ ] Alt text toutes images
- [ ] Internal linking strategy
- [ ] External links (nofollow when needed)

#### Business
- [ ] Pricing transparent défini
- [ ] Process client clarifié
- [ ] CTAs cohérents sur tout le site
- [ ] Garanties affichées
- [ ] Moyens de contact multiples
- [ ] Programme partenaires décrit

---

## 🚀 POST-LAUNCH STRATEGY

### Semaine 1 Post-Launch
- [ ] Monitor analytics quotidiennement
- [ ] Hotfix bugs critiques
- [ ] Collecter feedback premiers visiteurs
- [ ] Ajuster CTAs basés sur data

### Mois 1
- [ ] Publier 4 articles blog
- [ ] A/B test homepage hero
- [ ] Optimiser conversion forms
- [ ] Lancer campagne email mini-cours
- [ ] Créer 2 case studies additionnels

### Mois 2-3
- [ ] Multilangue (EN, DE)
- [ ] Enrichir glossaire (200 termes)
- [ ] Ajouter 10+ use cases
- [ ] Implémenter dark mode (optionnel)
- [ ] Advanced analytics (funnels, cohorts)

### Continu
- [ ] SEO content strategy (2-4 articles/mois)
- [ ] Case studies nouveaux projets
- [ ] Optimisation conversion continue
- [ ] Community building (newsletter)
- [ ] Partenariats & co-marketing

---

## 📞 SUPPORT & QUESTIONS

Ce document d'architecture est vivant et sera mis à jour au fil du développement.

**Pour toute question:**
- Référencer ce document dans vos conversations avec Claude
- Utiliser les outils MCP (Supabase, GitHub) pour implémentation
- Suivre le plan d'implémentation phase par phase

**Prochaines étapes:**
1. Valider cette architecture
2. Commencer Phase 1, Semaine 1
3. Setup Lovable project
4. Let's build! 🚀

---

*Document généré pour DAINAMICS - Octobre 2025*
*Version 1.0 - Architecture Complète*