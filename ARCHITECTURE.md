# ARCHITECTURE COMPLÈTE - DAINAMICS WEBSITE

Documentation technique ultra-détaillée du site DAINAMICS  
Développé avec Claude Code, React 18+, TypeScript, Tailwind CSS, Framer Motion

---

## TABLE DES MATIÈRES

1. [Vision & Positionnement](#vision--positionnement)
2. [Architecture Technique](#architecture-technique)
3. [Design System Ultra Détaillé](#design-system-ultra-détaillé)
4. [Animations Framer Motion Avancées](#animations-framer-motion-avancées)
5. [Structure des Pages](#structure-des-pages)
6. [Fonctionnalités Interactives](#fonctionnalités-interactives)
7. [Plan d'Implémentation](#plan-dimplémentation)
8. [Guidelines Techniques](#guidelines-techniques)

---

## VISION & POSITIONNEMENT

### Identité DAINAMICS

**PAS seulement** : Une agence d'automatisation suisse  
**MAIS** : Une agence d'expertise tech complète (IA + Automatisation + Développement)

**Différenciation** : Triple expertise + réalisations concrètes (LEXAIA, ENKI-REALTY)  
**Portée** : Suisse ET International  
**Cible** : PME 10-150 employés

### Objectifs du Site

**KPIs Techniques**
- Lighthouse Score: >90
- Mobile Responsiveness: 100%
- Time to Interactive: <3s
- Animation Performance: 60fps constant
- Accessibilité: WCAG 2.1 AA

**KPIs Business**
- Taux de conversion: >5%
- Temps moyen sur site: >3 min
- Leads qualifiés/mois: 20-30
- Bounce rate: <40%

---

## ARCHITECTURE TECHNIQUE

### Stack Technologique

```yaml
# Frontend
Framework: React 18+
Language: TypeScript 5+
Build Tool: Vite 5+
Styling: Tailwind CSS 3+
Animations: Framer Motion 11+
Icons: Lucide React
UI Components: shadcn/ui + custom

# State Management
Global State: Zustand
Form State: React Hook Form
Validation: Zod

# Backend & Services
Database: Supabase (PostgreSQL)
Authentication: Supabase Auth
Storage: Supabase Storage
Email: Brevo / SendGrid
Analytics: GA4 + Plausible

# Hosting & Deployment
Hosting: Vercel (recommended) / Netlify
CDN: Cloudflare
Domain: dainamics.ch

# Development Tools
Version Control: Git + GitHub
IDE: Claude Code (primary), VS Code
Package Manager: npm / pnpm
Linting: ESLint + Prettier
Testing: Vitest + Testing Library
```

### Structure de Dossiers

```
dainamics-website/
├─ public/
│  ├─ assets/
│  │  ├─ videos/         # Brain animation, backgrounds
│  │  ├─ images/
│  │  │  ├─ portfolio/   # LEXAIA, ENKI-REALTY screenshots
│  │  │  ├─ solutions/   # Solution visuals
│  │  │  ├─ team/        # Team photos (optional)
│  │  │  └─ logos/       # Partner/client logos
│  │  └─ icons/          # Favicons, app icons
│  ├─ fonts/
│  │  ├─ CalSans/        # Display font
│  │  ├─ Inter/          # Body font
│  │  └─ FiraCode/       # Mono font
│  ├─ favicon.ico
│  └─ robots.txt
│
├─ src/
│  ├─ assets/
│  │  └─ icons/          # SVG icons
│  │
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Button.tsx                 # Primary, Secondary, Tertiary
│  │  │  ├─ Card.tsx                   # Standard, Featured, Interactive
│  │  │  ├─ Badge.tsx                  # QuickWin, Status, Category
│  │  │  ├─ Input.tsx                  # Text, Email, Phone
│  │  │  ├─ Select.tsx                 # Dropdown with search
│  │  │  ├─ Textarea.tsx
│  │  │  ├─ Checkbox.tsx
│  │  │  ├─ Radio.tsx
│  │  │  ├─ Switch.tsx
│  │  │  ├─ Modal.tsx                  # Full-screen, Center, Drawer
│  │  │  ├─ Tooltip.tsx
│  │  │  ├─ Toast.tsx
│  │  │  ├─ Spinner.tsx
│  │  │  ├─ ProgressBar.tsx
│  │  │  └─ Accordion.tsx
│  │  │
│  │  ├─ layout/
│  │  │  ├─ Header.tsx                 # Main navigation
│  │  │  ├─ Footer.tsx                 # Footer with links
│  │  │  ├─ Navigation.tsx             # Mobile + Desktop nav
│  │  │  ├─ MobileMenu.tsx
│  │  │  ├─ Container.tsx              # Max-width wrapper
│  │  │  ├─ Section.tsx                # Section wrapper
│  │  │  └─ Grid.tsx                   # Responsive grid
│  │  │
│  │  ├─ features/
│  │  │  ├─ ROICalculator/
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ Calculator.tsx
│  │  │  │  ├─ Results.tsx
│  │  │  │  └─ useROICalculation.ts
│  │  │  │
│  │  │  ├─ AIDiagnostic/
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ Question.tsx
│  │  │  │  ├─ ProgressBar.tsx
│  │  │  │  ├─ Results.tsx
│  │  │  │  └─ useDiagnostic.ts
│  │  │  │
│  │  │  ├─ TechStackExplorer/
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ TechCard.tsx
│  │  │  │  ├─ CategoryFilter.tsx
│  │  │  │  └─ TechDetail.tsx
│  │  │  │
│  │  │  ├─ AIMaturityAssessment/
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ Quiz.tsx
│  │  │  │  ├─ CategoryScore.tsx
│  │  │  │  ├─ Results.tsx
│  │  │  │  └─ PDFReport.tsx
│  │  │  │
│  │  │  ├─ AIChatbot/
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ ChatInterface.tsx
│  │  │  │  ├─ Message.tsx
│  │  │  │  └─ useChatbot.ts
│  │  │  │
│  │  │  ├─ QuickWinBadge.tsx
│  │  │  ├─ ProgressiveForm.tsx
│  │  │  └─ EmailCourseSignup.tsx
│  │  │
│  │  ├─ sections/
│  │  │  ├─ homepage/
│  │  │  │  ├─ Hero.tsx
│  │  │  │  ├─ ValueProposition.tsx
│  │  │  │  ├─ Expertise.tsx
│  │  │  │  ├─ PortfolioHighlights.tsx
│  │  │  │  ├─ SocialProof.tsx
│  │  │  │  ├─ Services.tsx
│  │  │  │  └─ CTASection.tsx
│  │  │  │
│  │  │  ├─ solutions/
│  │  │  │  ├─ SolutionHero.tsx
│  │  │  │  ├─ SolutionGrid.tsx
│  │  │  │  ├─ SolutionCard.tsx
│  │  │  │  └─ SolutionFilters.tsx
│  │  │  │
│  │  │  └─ portfolio/
│  │  │     ├─ PortfolioHero.tsx
│  │  │     ├─ ProjectGrid.tsx
│  │  │     ├─ ProjectCard.tsx
│  │  │     └─ ProjectFilters.tsx
│  │  │
│  │  ├─ animations/
│  │  │  ├─ NeuralNetwork.tsx          # Brain animation
│  │  │  ├─ EnergyWaves.tsx            # Energy pulse effects
│  │  │  ├─ ParticleField.tsx
│  │  │  ├─ GlowOrbs.tsx
│  │  │  ├─ CodeRain.tsx               # Matrix effect
│  │  │  └─ CursorEffects.tsx
│  │  │
│  │  └─ ui/                            # shadcn/ui components
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ badge.tsx
│  │     └─ ...
│  │
│  ├─ pages/
│  │  ├─ Index.tsx                      # Homepage
│  │  ├─ Expertise.tsx
│  │  ├─ Solutions.tsx
│  │  ├─ SolutionDetail.tsx             # Dynamic [slug]
│  │  ├─ Portfolio.tsx
│  │  ├─ ProjectDetail.tsx              # Dynamic [slug]
│  │  ├─ Resources.tsx
│  │  ├─ Blog.tsx
│  │  ├─ BlogPost.tsx                   # Dynamic [slug]
│  │  ├─ Glossary.tsx
│  │  ├─ UseCases.tsx
│  │  ├─ Process.tsx
│  │  ├─ Pricing.tsx
│  │  ├─ About.tsx
│  │  ├─ Integrations.tsx
│  │  ├─ Partners.tsx
│  │  ├─ Contact.tsx
│  │  ├─ PrivacyPolicy.tsx
│  │  ├─ TermsOfService.tsx
│  │  ├─ CookiesPolicy.tsx
│  │  └─ NotFound.tsx
│  │
│  ├─ data/
│  │  ├─ solutions.ts                   # 15 solutions from TOP 15 doc
│  │  ├─ portfolio.ts                   # LEXAIA, ENKI-REALTY, +3-5
│  │  ├─ expertise.ts                   # IA, Automatisation, Développement
│  │  ├─ testimonials.ts
│  │  ├─ blogPosts.ts
│  │  ├─ emailCourses.ts
│  │  ├─ integrations.ts                # 50-100 integrations
│  │  ├─ pricingPackages.ts
│  │  ├─ useCases.ts                    # 20-30 use cases
│  │  ├─ glossary.ts                    # 50-200 terms
│  │  └─ navigation.ts
│  │
│  ├─ types/
│  │  └─ index.ts                       # All TypeScript interfaces
│  │
│  ├─ utils/
│  │  ├─ calculateROI.ts
│  │  ├─ formatters.ts                  # Date, currency, number
│  │  ├─ validators.ts
│  │  ├─ seo.ts                         # SEO helpers
│  │  └─ analytics.ts
│  │
│  ├─ hooks/
│  │  ├─ useForm.ts
│  │  ├─ useSearch.ts
│  │  ├─ useAnalytics.ts
│  │  ├─ useIntersectionObserver.ts
│  │  ├─ useMediaQuery.ts
│  │  └─ useLocalStorage.ts
│  │
│  ├─ lib/
│  │  ├─ supabase.ts                    # Supabase client
│  │  ├─ analytics.ts                   # GA4 + Plausible
│  │  ├─ email.ts                       # Email service
│  │  └─ api/
│  │     ├─ chatbot.ts                  # Claude API integration
│  │     ├─ leads.ts
│  │     └─ assessment.ts
│  │
│  ├─ styles/
│  │  ├─ globals.css                    # Global styles
│  │  ├─ animations.css                 # Keyframe animations
│  │  └─ themes.css                     # Color themes
│  │
│  ├─ config/
│  │  ├─ site.ts                        # Site metadata
│  │  ├─ navigation.ts                  # Nav structure
│  │  └─ theme.ts                       # Theme config
│  │
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
│
├─ .env.example
├─ .env.local
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ tailwind.config.ts
├─ vite.config.ts
├─ README.md
└─ ARCHITECTURE.md (ce fichier)
```

---

## DESIGN SYSTEM ULTRA DÉTAILLÉ

### Palette de Couleurs Complète

```typescript
// src/config/theme.ts

export const colors = {
  // Brand Colors
  primary: {
    DEFAULT: '#6366F1',    // Indigo-500
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',        // Primary
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
  
  // CTA Orange
  cta: {
    DEFAULT: '#FF5A00',
    light: '#FF7A33',
    dark: '#E64D00',
    50: '#FFF4ED',
    100: '#FFE8D9',
    200: '#FFCDB2',
    300: '#FFA580',
    400: '#FF7A33',
    500: '#FF5A00',        // CTA
    600: '#E64D00',
    700: '#CC3D00',
    800: '#B33300',
    900: '#992900',
  },
  
  // Accent Cyan (Electric Blue)
  accent: {
    DEFAULT: '#10E4FF',
    50: '#E0F9FF',
    100: '#B8F3FF',
    200: '#90EDFF',
    300: '#68E7FF',
    400: '#40E1FF',
    500: '#10E4FF',        // Accent
    600: '#00C4E0',
    700: '#00A4C2',
    800: '#0084A4',
    900: '#006486',
  },
  
  // Background
  background: {
    DEFAULT: '#050510',     // Very dark navy
    light: '#0A0A1A',
    lighter: '#141424',
    card: '#1A1A2E',
    hover: '#202035',
  },
  
  // Neutrals
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Semantic Colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Glass Morphism
  glass: {
    light: 'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.1)',
    dark: 'rgba(0, 0, 0, 0.3)',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
    cta: 'linear-gradient(135deg, #FF5A00 0%, #FFA000 100%)',
    accent: 'linear-gradient(135deg, #10E4FF 0%, #40E1FF 100%)',
    hero: 'linear-gradient(180deg, #050510 0%, #0A0A1A 100%)',
    card: 'linear-gradient(145deg, #1A1A2E 0%, #141424 100%)',
    glow: 'radial-gradient(circle, rgba(16,228,255,0.15) 0%, transparent 70%)',
  },
}
```

### Typographie Détaillée

```typescript
// tailwind.config.ts

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        // Display sizes (Hero titles)
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],  // 72px
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],  // 60px
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],  // 48px
        
        // Heading sizes
        'h1': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],  // 36px
        'h2': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],  // 30px
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],  // 24px
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],  // 20px
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],  // 18px
        
        // Body sizes
        'body-xl': ['1.25rem', { lineHeight: '1.8' }],  // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],  // 18px
        'body': ['1rem', { lineHeight: '1.7' }],  // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],  // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],  // 12px
        
        // Special
        'lead': ['1.25rem', { lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }],
      },
    },
  },
}
```

### Spacing System

```typescript
// Spacing scale (8px base)
export const spacing = {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem',     // 256px
}

// Section spacing (responsive)
export const sectionSpacing = {
  sm: 'py-12 md:py-16 lg:py-20',         // Small sections
  md: 'py-16 md:py-20 lg:py-24',         // Medium sections
  lg: 'py-20 md:py-24 lg:py-32',         // Large sections (default)
  xl: 'py-24 md:py-32 lg:py-40',         // Extra large sections
}
```

### Components Styling

#### Buttons

```tsx
// src/components/common/Button.tsx

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  pulse?: boolean;
  className?: string;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: `
    bg-gradient-to-r from-cta to-cta-light
    text-white font-semibold
    shadow-lg shadow-cta/30
    hover:shadow-xl hover:shadow-cta/40
    hover:scale-105
    active:scale-100
    transition-all duration-300
  `,
  
  secondary: `
    bg-transparent
    border-2 border-primary
    text-primary font-semibold
    hover:bg-primary
    hover:text-white
    hover:shadow-lg hover:shadow-primary/30
    transition-all duration-300
  `,
  
  tertiary: `
    bg-background-card
    text-gray-200 font-semibold
    hover:bg-background-hover
    hover:text-white
    transition-all duration-200
  `,
  
  ghost: `
    bg-transparent
    text-gray-300
    hover:bg-background-light
    hover:text-white
    transition-all duration-200
  `,
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-lg',
  xl: 'px-10 py-5 text-xl rounded-xl',
}

const glowEffect = `
  relative
  before:absolute before:inset-0
  before:rounded-[inherit]
  before:bg-gradient-to-r before:from-cta/30 before:to-cta-light/30
  before:blur-xl before:opacity-0
  hover:before:opacity-100
  before:transition-opacity before:duration-500
  before:-z-10
`

const pulseAnimation = {
  scale: [1, 1.05, 1],
  boxShadow: [
    '0 0 0 0 rgba(255, 90, 0, 0.4)',
    '0 0 0 10px rgba(255, 90, 0, 0)',
    '0 0 0 0 rgba(255, 90, 0, 0)',
  ],
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  pulse = false,
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        'font-medium tracking-wide',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        buttonSizes[size],
        glow && glowEffect,
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={pulse ? { ...pulseAnimation } : {}}
      transition={{ 
        duration: 0.2,
        ...(pulse && { repeat: Infinity, repeatDelay: 2 })
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

#### Cards

```tsx
// src/components/common/Card.tsx

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'default' | 'featured' | 'interactive' | 'glass';
  hover?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const cardVariants = {
  default: `
    bg-background-card
    border border-gray-800/50
    rounded-2xl p-6
  `,
  
  featured: `
    bg-gradient-to-br from-background-card to-background-hover
    border-2 border-primary/50
    rounded-2xl p-8
    shadow-xl shadow-primary/10
  `,
  
  interactive: `
    bg-background-card
    border border-gray-800/30
    rounded-2xl p-6
    cursor-pointer
  `,
  
  glass: `
    bg-glass-medium
    backdrop-blur-xl
    border border-white/10
    rounded-2xl p-6
  `,
}

const hoverEffect = {
  scale: 1.02,
  y: -4,
  boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.2)',
}

const glowEffect = `
  relative
  before:absolute before:inset-0
  before:rounded-[inherit]
  before:bg-gradient-to-br before:from-primary/20 before:to-accent/20
  before:blur-2xl before:opacity-0
  hover:before:opacity-100
  before:transition-opacity before:duration-700
  before:-z-10
`

export function Card({ 
  variant = 'default',
  hover = true,
  glow = false,
  className,
  children,
  ...props 
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'transition-all duration-300',
        cardVariants[variant],
        glow && glowEffect,
        className
      )}
      whileHover={hover ? hoverEffect : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
```

#### Badges

```tsx
// src/components/common/Badge.tsx

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface BadgeProps {
  variant?: 'default' | 'quickwin' | 'success' | 'warning' | 'info';
  animate?: boolean;
  className?: string;
  children: React.ReactNode;
}

const badgeVariants = {
  default: `
    bg-primary/10 text-primary
    border border-primary/20
  `,
  
  quickwin: `
    bg-gradient-to-r from-cta to-cta-light
    text-white font-semibold
    border border-cta-light/30
    shadow-lg shadow-cta/30
  `,
  
  success: `
    bg-success/10 text-success
    border border-success/20
  `,
  
  warning: `
    bg-warning/10 text-warning
    border border-warning/20
  `,
  
  info: `
    bg-info/10 text-info
    border border-info/20
  `,
}

const pulseAnimation = {
  scale: [1, 1.05, 1],
  boxShadow: [
    '0 0 0 0 rgba(255, 90, 0, 0.4)',
    '0 0 0 8px rgba(255, 90, 0, 0)',
    '0 0 0 0 rgba(255, 90, 0, 0)',
  ],
}

export function Badge({ 
  variant = 'default',
  animate = false,
  className,
  children,
  ...props 
}: BadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center gap-1',
        'px-3 py-1 rounded-full',
        'text-xs font-semibold tracking-wide',
        badgeVariants[variant],
        className
      )}
      animate={animate ? pulseAnimation : {}}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
      }}
      {...props}
    >
      {variant === 'quickwin' && <Sparkles className="w-3 h-3" />}
      {children}
    </motion.span>
  );
}
```

### Shadow System

```css
/* src/styles/shadows.css */

:root {
  /* Elevation shadows */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Colored shadows (for glows) */
  --shadow-primary: 0 10px 30px -5px rgba(99, 102, 241, 0.3);
  --shadow-cta: 0 10px 30px -5px rgba(255, 90, 0, 0.3);
  --shadow-accent: 0 10px 30px -5px rgba(16, 228, 255, 0.3);
  
  /* Inner shadows */
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --shadow-inner-lg: inset 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
```

### Border Radius System

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;     /* 4px */
  --radius-md: 0.5rem;      /* 8px */
  --radius-lg: 1rem;        /* 16px */
  --radius-xl: 1.5rem;      /* 24px */
  --radius-2xl: 2rem;       /* 32px */
  --radius-full: 9999px;
}
```

---

## ANIMATIONS FRAMER MOTION AVANCÉES

### Configuration de Base

```tsx
// src/lib/motion.ts

import { Variants } from 'framer-motion';

// Easing functions
export const easing = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  bouncy: { type: 'spring', stiffness: 400, damping: 10 },
}

// Durations
export const duration = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
}

// Common variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: duration.slow, ease: easing.easeOut }
  }
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: duration.slow, ease: easing.easeOut }
  }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: duration.slow, ease: easing.easeOut }
  }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: duration.slow, ease: easing.easeOut }
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: easing.bouncy
  }
}

// Stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Magnetic hover effect
export const magnetic = {
  rest: { x: 0, y: 0 },
  hover: (custom: { x: number; y: number }) => ({
    x: custom.x,
    y: custom.y,
    transition: { duration: 0.3, ease: easing.easeOut }
  })
}

// Parallax effect
export const parallax = (speed: number = 0.5) => ({
  y: ['0%', `${speed * 100}%`],
  transition: {
    duration: 1,
    ease: 'linear',
    repeat: Infinity,
  }
})
```

### Animation Hero Section

```tsx
// src/components/sections/homepage/Hero.tsx (enhanced)

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export function HeroEnhanced() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yBrain = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // Intersection observer for initial animations
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Content with parallax */}
      <motion.div
        style={{ y: yText, opacity, scale }}
        className="container mx-auto px-4 pt-32"
      >
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-display-lg md:text-display-xl font-display"
        >
          <motion.span 
            variants={staggerItem}
            className="block text-gradient-primary"
          >
            Dainamics,
          </motion.span>
          <motion.span 
            variants={staggerItem}
            className="block text-gradient"
          >
            Superhuman AI Agents
          </motion.span>
        </motion.h1>
        
        {/* CTA Buttons with magnetic effect */}
        <motion.div
          variants={staggerItem}
          className="flex gap-4 mt-8"
        >
          <MagneticButton>
            DEPLOY MY AI POWER
          </MagneticButton>
        </motion.div>
      </motion.div>
      
      {/* Brain animation with parallax */}
      <motion.div
        style={{ y: yBrain }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <NeuralNetworkAdvanced />
      </motion.div>
    </section>
  );
}

// Magnetic button component
function MagneticButton({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    
    setPosition({ x: distanceX, y: distanceY });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="..."
    >
      {children}
    </motion.button>
  );
}
```

### Neural Network Animation Avancée

```tsx
// src/components/animations/NeuralNetworkAdvanced.tsx

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function NeuralNetworkAdvanced() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas to match video
    canvas.width = 64;
    canvas.height = 36;
    
    let lastBrightness = 0;
    let frameCount = 0;
    
    function analyzeFrame() {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Analyze cyan electrical activity
        let cyanActivity = 0;
        let pixelCount = 0;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Detect cyan/blue (high blue & green, low red)
          if (b > 180 && g > 140 && r < 150) {
            cyanActivity += (b + g) / 2;
            pixelCount++;
          }
        }
        
        const normalizedActivity = pixelCount > 0 
          ? (cyanActivity / pixelCount) / 255 
          : 0;
        
        // Detect electrical pulse
        const brightnessDelta = Math.abs(normalizedActivity - lastBrightness);
        
        if (brightnessDelta > 0.08 && normalizedActivity > lastBrightness) {
          // Trigger energy wave animation
          controls.start({
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7],
            transition: { duration: 2, ease: 'easeOut' }
          });
        }
        
        lastBrightness = normalizedActivity;
        frameCount++;
      }
      
      requestAnimationFrame(analyzeFrame);
    }
    
    video.addEventListener('play', analyzeFrame);
    
    return () => {
      video.removeEventListener('play', analyzeFrame);
    };
  }, [controls]);
  
  return (
    <div className="relative w-[600px] h-[600px]">
      {/* Energy waves - synchronized with video */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-accent/30"
          animate={controls}
          style={{
            width: `${100 + i * 10}%`,
            height: `${100 + i * 10}%`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          transition={{
            delay: i * 0.2,
            duration: 3,
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Orbital rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '110%',
          height: '110%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '105%',
          height: '105%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Brain video */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/AdobeStock_1308604697.mp4" type="video/mp4" />
        </video>
        
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
      </div>
      
      {/* Hidden canvas for analysis */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
```

### Scroll-Triggered Animations

```tsx
// src/hooks/useScrollAnimation.ts

import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export function useScrollAnimation(threshold = 0.3, once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);
  
  return { ref, controls, isInView };
}

// Usage example
function AnimatedSection() {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <h2>This animates when scrolled into view</h2>
    </motion.section>
  );
}
```

### Particle Field Background

```tsx
// src/components/animations/ParticleField.tsx

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Setup canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Create particles
    const particleCount = 100;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    
    // Animation loop
    let animationId: number;
    
    function animate() {
      if (!ctx || !canvas) return;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(5, 5, 16, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 228, 255, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 228, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
```

### Page Transition Animation

```tsx
// src/lib/pageTransitions.ts

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    }
  }
}

// Usage in pages
import { motion } from 'framer-motion';
import { pageVariants } from '@/lib/pageTransitions';

export function SomePage() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {/* Page content */}
    </motion.div>
  );
}
```

---

## STRUCTURE DES PAGES

### 1. Homepage (Index)

**URL**: `/`

**Sections**:

1. **Hero Section**
   - Animated headline with gradient text
   - Neural network brain animation
   - Energy waves synchronized with video
   - 2 CTA buttons (Deploy AI Power, Crush Competitors)
   - Scroll indicator

2. **Value Proposition**
   - 3 key benefits cards
   - ROI stats with animated counters
   - Quick Win badges
   - Social proof logos

3. **Expertise Section**
   - 3 pillars (IA, Automatisation, Développement)
   - Animated tabs or cards
   - Tech stack preview
   - CTA: Explore Expertise

4. **Portfolio Highlights**
   - Featured projects (LEXAIA, ENKI-REALTY)
   - Before/After metrics
   - Case study previews
   - CTA: View Full Portfolio

5. **Social Proof**
   - Client testimonials carousel
   - Stats counters (projects, clients, savings)
   - Industry logos
   - Star ratings

6. **Interactive Diagnostic**
   - 3-5 question quiz
   - Progressive disclosure
   - Personalized recommendations
   - Lead capture form

7. **Services Overview**
   - Top 5 solutions cards
   - Quick filters
   - Quick Win badges
   - CTA: View All Solutions

8. **Final CTA Section**
   - Strong headline
   - Urgency messaging
   - Multiple contact options
   - Guarantees

**Key Animations**:
- Hero parallax scroll
- Staggered card reveals
- Counter animations
- Energy wave pulses
- Magnetic button hovers

---

### 2. Expertise Page

**URL**: `/expertise`

**Sections**:

1. **Hero**
   - Headline: "Triple Expertise, Infinite Possibilities"
   - Animated tech stack visualization
   - 3 expertise pillars preview

2. **IA Expertise**
   - LLMs & Agents
   - Computer Vision
   - NLP
   - Predictive Analytics
   - ML Ops
   - Use cases + case studies

3. **Automatisation Expertise**
   - RPA
   - Workflow Automation
   - Integration Platform
   - Process Mining
   - Use cases + ROI examples

4. **Développement Expertise**
   - Web Apps
   - Mobile Apps
   - APIs & Microservices
   - Cloud Infrastructure
   - Tech stack

5. **Tech Stack Explorer** (Interactive)
   - Visual grid of technologies
   - Filters by category
   - Hover for details
   - Links to integration page

6. **Process Transparency**
   - 5-step process
   - Guarantees
   - Collaboration tools

7. **CTA Section**
   - Book consultation
   - Download tech stack PDF

**Key Features**:
- Animated tech stack grid
- Interactive category tabs
- Hover card effects
- Process timeline animation

---

### 3. Solutions Page

**URL**: `/solutions`

**Sections**:

1. **Hero**
   - Headline: "Automatisations Sur Mesure pour PME Suisses"
   - Search bar
   - Filter options

2. **Solutions Grid** (15 solutions)
   - Quick Win badges
   - ROI indicators
   - Difficulty level
   - Industry tags
   - Hover for preview

3. **Filters**
   - By industry
   - By function (Finance, RH, Sales)
   - By ROI timeline
   - By difficulty

4. **Featured Solutions** (Top 3)
   - Larger cards
   - Detailed previews
   - Video demos
   - Client testimonials

5. **Use Case Library Link**
   - Preview of 3 use cases
   - CTA to full library

6. **CTA Section**
   - Book diagnostic
   - Download solutions guide

**Individual Solution Pages**:

**URL**: `/solutions/[slug]`

Example: `/solutions/facturation-electronique`

**Sections**:
1. Hero with problem statement
2. Solution description
3. Features & benefits
4. ROI calculator (embedded)
5. Technical implementation
6. Case studies
7. Integration partners
8. FAQ
9. CTA (Book demo, Get quote)

---

### 4. Portfolio Page

**URL**: `/portfolio`

**Sections**:

1. **Hero**
   - Headline: "Projets qui Transforment"
   - Stats (projects, industries, ROI)

2. **Featured Projects**
   - LEXAIA (detailed card)
   - ENKI-REALTY (detailed card)
   - Visual before/after

3. **Projects Grid**
   - 5-10 projects
   - Filters by industry, solution type
   - Metrics preview
   - Hover effects

4. **Filters**
   - By industry
   - By solution type
   - By company size

5. **Client Testimonials**
   - Video testimonials
   - Written testimonials with photos

6. **CTA Section**
   - Become a case study
   - Schedule consultation

**Individual Project Pages**:

**URL**: `/portfolio/[slug]`

Example: `/portfolio/lexaia`, `/portfolio/enki-realty`

**Sections**:
1. Hero with project screenshot
2. Client profile
3. Challenge description
4. Solution implementation
5. Results & metrics
6. Technologies used
7. Timeline
8. Client testimonial
9. Related projects
10. CTA (Similar project?, Let's talk)

---

### 5. Resources Hub

**URL**: `/ressources`

**Sections**:

1. **Hero**
   - Headline: "Ressources Gratuites pour Accélérer Votre Transformation"
   - Search bar

2. **Guides Téléchargeables**
   - 4-6 PDF guides
   - Lead magnet forms
   - Download counters

3. **Blog Articles**
   - Latest 6 articles
   - Categories
   - CTA: View all articles

4. **Mini-Cours Email**
   - 2-3 courses
   - Course descriptions
   - Signup forms

5. **AI Maturity Assessment**
   - Preview of assessment
   - Benefits
   - CTA: Take assessment

6. **Glossaire Link**
   - Preview of 5 terms
   - CTA: Full glossary

7. **FAQ**
   - 10 most common questions
   - Search functionality

**Blog Page**:

**URL**: `/ressources/blog`

- Grid layout
- Filters by category, date
- Search
- Pagination
- Sidebar with categories, recent posts

**Individual Blog Post**:

**URL**: `/ressources/blog/[slug]`

- Hero image
- Author, date, reading time
- Content with TOC
- Related articles
- CTA (Subscribe, Contact)

**Glossary Page**:

**URL**: `/ressources/glossaire`

- Alphabetical index
- Search
- 50-200 terms
- Term cards with definitions
- Related terms links

---

### 6. Use Cases Library

**URL**: `/cas-usage`

**Sections**:

1. **Hero**
   - Headline: "Inspirez-vous de Scénarios Réels"
   - Filters preview

2. **Use Cases Grid**
   - 20-30 use cases
   - Industry + Function tags
   - Budget range
   - Timeline
   - Results preview

3. **Filters**
   - By industry (10+ industries)
   - By function (Finance, RH, Sales, etc.)
   - By budget range
   - By timeline

4. **Featured Use Cases** (3)
   - Detailed cards
   - Metrics
   - Solution links

**Individual Use Case**:

**URL**: `/cas-usage/[slug]`

- Problem statement
- Solution description
- Implementation details
- Results & metrics
- Budget & timeline
- Related solutions
- Similar use cases
- CTA (Implement this)

---

### 7. Process Page

**URL**: `/notre-process`

**Sections**:

1. **Hero**
   - Headline: "Un Process Transparent, des Résultats Garantis"

2. **5-Step Process**
   - Step 1: Discovery & Audit
   - Step 2: Strategy & Roadmap
   - Step 3: Development & Implementation
   - Step 4: Testing & Optimization
   - Step 5: Launch & Support
   - Each with timeline, deliverables, tools

3. **Guarantees**
   - Money-back guarantee
   - Performance guarantee
   - Support guarantee

4. **Collaboration Tools**
   - Notion workspace
   - Slack communication
   - GitHub access
   - Live demos

5. **Timeline Estimator** (Interactive)
   - Input project scope
   - Get estimated timeline
   - See milestones

6. **FAQ**

7. **CTA Section**

---

### 8. Pricing Page

**URL**: `/tarifs`

**Sections**:

1. **Hero**
   - Headline: "Pricing Transparent, ROI Garanti"

2. **Pricing Packages** (4 tiers)
   - Starter (CHF 10k-20k)
   - Growth (CHF 20k-50k)
   - Scale (CHF 50k-100k)
   - Custom (100k+)
   - Each with features, timeline, examples

3. **Cost Calculator** (Interactive)
   - Select solutions
   - Customize scope
   - Get instant estimate

4. **What's Included / Excluded**
   - Clear breakdown
   - Add-ons available

5. **Financing Options**
   - Payment plans
   - Leasing
   - Subscription model

6. **ROI Guarantee**
   - Performance-based pricing option
   - Money-back guarantee details

7. **FAQ Pricing**

8. **CTA Section**

---

### 9. About Page

**URL**: `/about`

**Sections**:

1. **Hero**
   - Mission statement
   - Video introduction (optional)

2. **Our Mission**
   - Vision
   - Values
   - Impact stats

3. **Expertise**
   - 3 pillars recap
   - Team skills
   - Certifications

4. **What We Do / Don't Do**
   - Clear boundaries
   - Honest positioning

5. **Team** (Optional)
   - Founders
   - Key members
   - Photos & bios

6. **Timeline**
   - Company milestones
   - Major projects

7. **Partnerships**
   - Technology partners
   - Integration partners

8. **CTA Section**

---

### 10. Integrations Page

**URL**: `/integrations`

**Sections**:

1. **Hero**
   - Headline: "S'intègre à Vos Outils Préférés"
   - Search bar

2. **Integrations Grid**
   - 50-100 integrations
   - Logos
   - Categories
   - Popularity badges
   - Swiss badges

3. **Categories**
   - Accounting (Bexio, Abacus, KLARA)
   - CRM (HubSpot, Salesforce, Bexio CRM)
   - HR (Personio, BambooHR)
   - E-commerce (Shopify, WooCommerce)
   - Marketing (Mailchimp, Brevo)
   - Productivity (Microsoft 365, Google Workspace)
   - Cloud (AWS, Azure, GCP)
   - Databases (PostgreSQL, MySQL, MongoDB)
   - Payments (Stripe, PayPal, Twint)
   - Communication (Slack, Teams, Zoom)
   - Storage (Dropbox, Google Drive)

4. **Custom Integrations**
   - Development services
   - API documentation
   - Developer resources

5. **CTA Section**

---

### 11. Partners Program

**URL**: `/partenaires`

**Sections**:

1. **Hero**
   - Headline: "Devenez Partenaire DAINAMICS"

2. **4 Partnership Types**
   - Referral Partner (commission 10-15%)
   - Technology Partner (co-marketing)
   - Implementation Partner (certified)
   - Reseller Partner (volume discounts)

3. **Benefits**
   - Commission structure
   - Co-marketing support
   - Training & certification
   - Dedicated support

4. **How It Works**
   - Application process
   - Onboarding
   - Partner portal
   - Resources

5. **Partner Testimonials**

6. **FAQ**

7. **CTA Section**
   - Apply now
   - Download partner kit

---

### 12. Contact Page

**URL**: `/contact`

**Sections**:

1. **Hero**
   - Headline: "Parlons de Votre Projet"

2. **Progressive Profiling Form**
   - Step 1: Basic info (name, email, company)
   - Step 2: Project details (solution interest, budget, timeline)
   - Lead scoring behind the scenes

3. **What Happens Next**
   - Response timeline (24h)
   - Next steps
   - What to prepare

4. **Other Contact Methods**
   - Email: contact@dainamics.ch
   - Phone: +41 XX XXX XX XX
   - LinkedIn
   - Calendar booking link

5. **One-Tap Mobile Actions**
   - Click to call
   - Click to email
   - Click to WhatsApp

6. **FAQ Contact**
   - Response times
   - Project qualification
   - Pricing

7. **Office Location** (Optional)
   - Map
   - Address
   - Directions

---

## FONCTIONNALITÉS INTERACTIVES

### 1. Calculateur ROI

**Location**: Homepage, Solution pages

**Features**:
- Input fields:
  - Number of employees
  - Current process time
  - Hourly rate
  - Frequency
  - Error rate
- Real-time calculation
- Visual results:
  - Annual savings (CHF)
  - Time saved (hours)
  - ROI timeline (months)
  - Break-even point
- Animated counters
- Download PDF report
- Lead capture (optional email)

**Technical Implementation**:
```tsx
// src/features/ROICalculator/useROICalculation.ts

export function useROICalculation() {
  const [inputs, setInputs] = useState({
    employees: 10,
    processTime: 2,
    hourlyRate: 80,
    frequency: 100, // per month
    errorRate: 5, // percentage
  });
  
  const results = useMemo(() => {
    const { employees, processTime, hourlyRate, frequency, errorRate } = inputs;
    
    // Current monthly cost
    const currentMonthlyCost = 
      processTime * hourlyRate * frequency * (1 + errorRate / 100);
    
    // Automated monthly cost (20% of current)
    const automatedMonthlyCost = currentMonthlyCost * 0.2;
    
    // Monthly savings
    const monthlySavings = currentMonthlyCost - automatedMonthlyCost;
    
    // Annual savings
    const annualSavings = monthlySavings * 12;
    
    // Implementation cost estimate
    const implementationCost = 15000; // Base cost
    
    // ROI months
    const roiMonths = implementationCost / monthlySavings;
    
    // Time saved annually (hours)
    const timeSavedAnnually = processTime * frequency * 12 * 0.8;
    
    return {
      currentMonthlyCost,
      automatedMonthlyCost,
      monthlySavings,
      annualSavings,
      implementationCost,
      roiMonths,
      timeSavedAnnually,
    };
  }, [inputs]);
  
  return { inputs, setInputs, results };
}
```

---

### 2. Diagnostic IA

**Location**: Homepage

**Features**:
- 3-5 questions
- Question types:
  - Multiple choice
  - Scale (1-5)
  - Yes/No
- Progress bar
- Personalized results:
  - Recommended solutions (1-3)
  - Quick wins identified
  - Budget estimate
  - Next steps
- Lead capture
- Save to Supabase

**Questions**:
1. Quel est votre plus grand défi actuel ? (Temps admin, Coûts, Croissance, Conformité)
2. Combien de processus manuels répétitifs avez-vous ? (0-5, 5-10, 10-20, 20+)
3. Quel est votre budget pour l'automatisation ? (<10k, 10-25k, 25-50k, 50k+)
4. Dans combien de temps souhaitez-vous voir des résultats ? (1-3 mois, 3-6 mois, 6-12 mois)
5. Avez-vous déjà des outils en place ? (Non, Quelques-uns, Beaucoup)

**Logic**:
```typescript
// src/features/AIDiagnostic/useDiagnostic.ts

export function useDiagnostic() {
  const [answers, setAnswers] = useState({});
  
  const recommendations = useMemo(() => {
    const { challenge, processes, budget, timeline, tools } = answers;
    
    const solutions = [];
    
    // Logic: Challenge = Temps admin + Processes high → Facturation
    if (challenge === 'temps' && processes in ['10-20', '20+']) {
      solutions.push({
        id: 'facturation',
        name: 'Facturation Électronique',
        quickWin: true,
        roi: '4-6 mois',
        budget: 'CHF 8,000-15,000',
      });
    }
    
    // Logic: Challenge = Coûts + Budget mid → CRM
    if (challenge === 'couts' && budget === '10-25k') {
      solutions.push({
        id: 'crm',
        name: 'CRM Automatisé',
        quickWin: false,
        roi: '6-12 mois',
        budget: 'CHF 10,000-20,000',
      });
    }
    
    // Logic: Challenge = Croissance + Timeline fast → Chatbot
    if (challenge === 'croissance' && timeline === '1-3') {
      solutions.push({
        id: 'chatbot',
        name: 'Chatbot IA Multilingue',
        quickWin: true,
        roi: '3-6 mois',
        budget: 'CHF 12,000-25,000',
      });
    }
    
    return solutions.slice(0, 3); // Max 3 recommendations
  }, [answers]);
  
  return { answers, setAnswers, recommendations };
}
```

---

### 3. Tech Stack Explorer

**Location**: Expertise page

**Features**:
- Visual grid of technologies
- Categories:
  - Frontend (React, Vue, Angular, etc.)
  - Backend (Node.js, Python, Java, etc.)
  - Databases (PostgreSQL, MongoDB, etc.)
  - Cloud (AWS, Azure, GCP, etc.)
  - AI/ML (OpenAI, Anthropic, HuggingFace, etc.)
  - Automation (UiPath, n8n, Zapier, etc.)
  - Integration (APIs, Middleware)
- Filters by category
- Search
- Hover for details:
  - Logo
  - Description
  - Use cases
  - Integration complexity
- Click for deep dive:
  - Full capabilities
  - Case studies
  - Integration partners

**Design**:
- Grid layout with logos
- Animated on hover (scale, glow)
- Category color coding
- Popular badges
- Swiss badges (for Swiss tools like Bexio)

---

### 4. AI Maturity Assessment

**Location**: Resources page

**Features**:
- 10-15 questions
- 5 categories:
  - Strategy & Vision
  - Data & Infrastructure
  - Skills & Culture
  - Processes & Automation
  - Technology & Tools
- Score per category (0-100)
- Overall maturity level (1-5):
  1. Beginner
  2. Emerging
  3. Developing
  4. Advanced
  5. Leader
- Detailed results page:
  - Radar chart
  - Category scores
  - Strengths & gaps
  - Personalized recommendations
  - Action plan
- PDF report generation
- Lead capture

**Questions Example**:

**Strategy & Vision**
1. Avez-vous une stratégie IA formalisée ? (Non, En cours, Oui)
2. Vos dirigeants comprennent-ils les opportunités IA ? (Non, Partiellement, Oui)

**Data & Infrastructure**
3. Vos données sont-elles centralisées et accessibles ? (Non, Partiellement, Oui)
4. Avez-vous une gouvernance des données ? (Non, Basique, Avancée)

**Skills & Culture**
5. Avez-vous des compétences IA en interne ? (Non, Quelques-unes, Équipe dédiée)
6. Votre culture encourage-t-elle l'expérimentation ? (Non, Parfois, Oui)

**Processes & Automation**
7. Combien de processus avez-vous automatisés ? (0-5, 5-15, 15+)
8. Mesurez-vous l'impact de l'automatisation ? (Non, Partiellement, Systématiquement)

**Technology & Tools**
9. Utilisez-vous des outils IA ? (Non, Quelques-uns, Beaucoup)
10. Intégrez-vous vos outils entre eux ? (Non, Partiellement, Totalement)

---

### 5. AI Chatbot

**Location**: Bottom-right corner, all pages

**Features**:
- RAG (Retrieval Augmented Generation)
- Knowledge base:
  - All solutions
  - All use cases
  - FAQ
  - Blog posts
  - Portfolio projects
- Capabilities:
  - Answer questions about solutions
  - Recommend solutions based on needs
  - Provide pricing estimates
  - Schedule meetings
  - Collect leads
- Multilingual (FR/EN/DE)
- Conversation history
- Handoff to human
- Integration with Supabase for lead capture

**Technical Stack**:
- Claude API (via MCP)
- Vector database (Supabase pgvector)
- Embedding model (OpenAI text-embedding-3)
- React UI component

**Implementation**:
```typescript
// src/lib/api/chatbot.ts

import { supabase } from '@/lib/supabase';

export async function chatWithBot(message: string, sessionId: string) {
  // 1. Embed user message
  const embedding = await embed(message);
  
  // 2. Search knowledge base
  const { data: relevantDocs } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_threshold: 0.7,
    match_count: 5,
  });
  
  // 3. Build context
  const context = relevantDocs.map(doc => doc.content).join('\n\n');
  
  // 4. Call Claude API
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
    },
    body: JSON.stringify({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: `Context:\n${context}\n\nUser question: ${message}`,
        },
      ],
    }),
  });
  
  const data = await response.json();
  return data.content[0].text;
}

async function embed(text: string) {
  // Call OpenAI embedding API
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
    }),
  });
  
  const data = await response.json();
  return data.data[0].embedding;
}
```

---

### 6. Quick Win Badge System

**Location**: Solution cards, use case cards

**Features**:
- Automatically identify Quick Wins:
  - ROI < 6 months
  - Implementation < 8 weeks
  - Low technical complexity (<= 4/10)
- Visual badge with animation
- Filter by Quick Wins
- Sort by ROI speed

**Logic**:
```typescript
// src/utils/quickWin.ts

export function isQuickWin(solution: Solution): boolean {
  return (
    solution.roi.months <= 6 &&
    solution.implementation.weeks <= 8 &&
    solution.difficulty <= 4
  );
}
```

---

### 7. Mini-Cours Email

**Location**: Resources page

**Features**:
- 2-3 email courses:
  - "5 Jours pour Automatiser Votre PME"
  - "IA pour Débutants en 7 Leçons"
  - "ROI de l'Automatisation en 3 Étapes"
- Signup form with Progressive Profiling
- Email automation (Brevo/SendGrid)
- Drip campaigns
- Analytics (open rate, click rate)

**Course Structure**:

**Course 1: "5 Jours pour Automatiser Votre PME"**
- Jour 1: Pourquoi automatiser maintenant
- Jour 2: Identifier vos Quick Wins
- Jour 3: Calculer votre ROI
- Jour 4: Choisir les bons outils
- Jour 5: Par où commencer

**Course 2: "IA pour Débutants en 7 Leçons"**
- Leçon 1: Qu'est-ce que l'IA concrètement
- Leçon 2: IA vs Automatisation
- Leçon 3: LLMs et Agents
- Leçon 4: Use cases IA pour PME
- Leçon 5: Risques et éthique
- Leçon 6: Par où commencer
- Leçon 7: Ressources et outils

---

### 8. Progressive Profiling

**Location**: Contact form, diagnostic, downloads

**Features**:
- 2-step forms:
  - Step 1: Minimal (name, email)
  - Step 2: Detailed (company, project, budget, timeline)
- Conditional fields based on answers
- Save progress
- Lead scoring behind the scenes
- Integration with Supabase

**Implementation**:
```tsx
// src/components/features/ProgressiveForm.tsx

export function ProgressiveForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    // Step 2
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  
  const handleStep1Submit = async () => {
    // Save step 1 to Supabase (partial lead)
    await supabase.from('leads').insert({
      email: formData.email,
      name: formData.name,
      status: 'partial',
      source: 'contact_form',
    });
    
    setStep(2);
  };
  
  const handleStep2Submit = async () => {
    // Update lead with full details
    await supabase.from('leads').update({
      company: formData.company,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
      status: 'complete',
    }).eq('email', formData.email);
    
    // Calculate lead score
    const score = calculateLeadScore(formData);
    
    // Trigger email notification
    await sendLeadNotification(formData, score);
    
    // Show success
  };
  
  return (
    <form>
      {step === 1 && (
        <Step1Fields formData={formData} setFormData={setFormData} onSubmit={handleStep1Submit} />
      )}
      {step === 2 && (
        <Step2Fields formData={formData} setFormData={setFormData} onSubmit={handleStep2Submit} />
      )}
    </form>
  );
}

function calculateLeadScore(data: FormData): number {
  let score = 0;
  
  // Budget score
  if (data.budget === '50k+') score += 40;
  else if (data.budget === '25-50k') score += 30;
  else if (data.budget === '10-25k') score += 20;
  else score += 10;
  
  // Timeline score (faster = more qualified)
  if (data.timeline === '1-3') score += 30;
  else if (data.timeline === '3-6') score += 20;
  else score += 10;
  
  // Company size score (from email domain or explicit field)
  // ...
  
  // Project type score
  if (data.projectType in ['ia', 'automatisation']) score += 20;
  else score += 10;
  
  return score; // 0-100
}
```

---

## PLAN D'IMPLÉMENTATION

### Phase 1: MVP Foundation (Semaines 1-3)

#### Semaine 1: Setup & Homepage Base

**Objectif**: Infrastructure + Homepage 70%

**Tasks**:
1. Setup projet avec Claude Code
   - Initialize Vite + React + TypeScript
   - Configure Tailwind CSS
   - Setup ESLint + Prettier
   - Initialize Git + GitHub

2. Implement Design System
   - Create theme config (colors, fonts, spacing)
   - Build base components:
     - Button (4 variants)
     - Card (4 variants)
     - Badge (5 variants)
     - Input/Form components

3. Build Layout
   - Header/Navigation (Desktop + Mobile)
   - Footer
   - Container/Section wrappers

4. Build Homepage Sections 1-5
   - Hero (with brain animation placeholder)
   - Value Proposition
   - Expertise preview
   - Portfolio highlights
   - Social Proof

**Deliverables**:
- Homepage 70% complete
- Design system implemented
- Navigation complete
- Repository on GitHub

---

#### Semaine 2: Homepage Complete + Interactive Features

**Objectif**: Homepage 100% + 2 major features

**Tasks**:
1. Complete Homepage
   - Add brain animation (video + effects)
   - Add Diagnostic section
   - Add Services overview
   - Add Final CTA section

2. Implement ROI Calculator
   - Build UI (inputs + results)
   - Implement calculation logic
   - Add animated counters
   - Add lead capture (optional email)

3. Implement AI Diagnostic
   - Build 5 questions
   - Implement logic & scoring
   - Build results page
   - Add lead capture
   - Connect to Supabase

4. Create Data Structures
   - `solutions.ts` (15 solutions from TOP 15)
   - `portfolio.ts` (LEXAIA, ENKI-REALTY, +3)
   - `expertise.ts`
   - `testimonials.ts`

**Deliverables**:
- Homepage 100% complete
- ROI Calculator functional
- AI Diagnostic functional
- Data structures created

---

#### Semaine 3: Core Pages

**Objectif**: Expertise + Solutions + Portfolio pages

**Tasks**:
1. Page Expertise
   - Hero
   - 3 piliers (IA, Automatisation, Développement)
   - Tech Stack Explorer (interactive grid)
   - Process Transparency

2. Page Solutions
   - Hero with search/filters
   - Solutions grid (15 cards)
   - Filters (industry, function, ROI, difficulty)

3. Landing Pages Solutions (3 prioritaires)
   - `/solutions/facturation-electronique`
   - `/solutions/chatbots-multilingues`
   - `/solutions/crm-automatise`
   - Each with:
     - Hero
     - Description
     - Features
     - ROI calculator (embedded)
     - Case studies
     - CTA

4. Page Portfolio
   - Hero
   - Featured projects (LEXAIA, ENKI-REALTY)
   - Projects grid
   - Filters

**Deliverables**:
- 3 major pages complete
- 3 solution landing pages
- Tech Stack Explorer
- Homepage + 3 pages = 40% of site done

---

### Phase 2: Content & Features (Semaines 4-5)

#### Semaine 4: Case Studies + Resources

**Objectif**: Portfolio details + Resources hub

**Tasks**:
1. Case Studies (2 détaillés)
   - `/portfolio/lexaia`
   - `/portfolio/enki-realty`
   - Each with:
     - Hero with screenshots
     - Challenge
     - Solution
     - Results & metrics
     - Technologies
     - Testimonial

2. Page Ressources Hub
   - Hero
   - Guides téléchargeables (4-6)
   - Blog preview (6 articles)
   - Mini-cours email preview
   - Assessment preview
   - Glossaire preview
   - FAQ

3. Page Blog
   - Grid layout
   - Filters & search
   - Pagination

4. Create 5-10 Blog Posts
   - "Top 5 Automatisations pour PME Suisses"
   - "IA vs Automatisation: Quelle Différence?"
   - "Calculer le ROI de l'Automatisation"
   - "Facturation Électronique: Guide Complet"
   - "Comment Choisir un Chatbot IA"
   - Etc.

**Deliverables**:
- 2 case studies complete
- Resources hub functional
- Blog structure + 5-10 articles

---

#### Semaine 5: Advanced Features + Use Cases

**Objectif**: Glossaire + Use Cases + Assessment

**Tasks**:
1. Glossaire Tech
   - 50-100 terms
   - Search functionality
   - Alphabetical index
   - Term cards with definitions
   - Related terms

2. Use Case Library
   - 20-30 use cases
   - Filters (industry, function, budget, timeline)
   - Use case cards with:
     - Problem
     - Solution
     - Results
     - Budget & timeline
     - Related solutions

3. AI Maturity Assessment
   - 10-15 questions
   - 5 categories
   - Scoring logic
   - Results page with:
     - Radar chart
     - Category scores
     - Recommendations
     - PDF report generation
   - Lead capture

4. Mini-Cours Email Setup
   - 2-3 courses created
   - Email automation (Brevo/SendGrid)
   - Landing pages for signup

**Deliverables**:
- Glossaire with 50+ terms
- Use Case Library functional
- AI Maturity Assessment complete
- 2-3 email courses setup

---

### Phase 3: Polish & Launch (Semaines 6-7)

#### Semaine 6: Business Pages + Integrations

**Objectif**: All remaining pages

**Tasks**:
1. Page Process
   - 5-step process
   - Guarantees
   - Collaboration tools
   - Timeline estimator
   - FAQ

2. Page Pricing
   - 4 tiers packages
   - Cost calculator (interactive)
   - What's included/excluded
   - Financing options
   - ROI guarantee
   - FAQ

3. Page About
   - Mission & vision
   - Expertise recap
   - Values
   - What we do/don't do
   - Team (optional)
   - Timeline

4. Page Integrations
   - 50-100 integrations
   - Grid with logos
   - Categories
   - Search & filters
   - Custom integrations section

5. Page Partenaires
   - 4 partnership types
   - Benefits
   - How it works
   - Application form

**Deliverables**:
- 5 business pages complete
- All pages done except Contact & legal

---

#### Semaine 7: Final Features + Polish

**Objectif**: Contact + Chatbot + SEO + Launch

**Tasks**:
1. Page Contact
   - Progressive profiling form
   - What happens next
   - Other contact methods
   - One-tap mobile actions
   - FAQ

2. AI Chatbot
   - Claude API + RAG setup
   - Vectorize site content
   - UI component (bottom-right)
   - Conversation management
   - Lead capture flow

3. SEO Optimization
   - Meta tags all pages
   - OpenGraph images
   - Sitemap.xml
   - Robots.txt
   - Schema.org markup
   - Alt texts all images

4. Performance Optimization
   - Image optimization (WebP, lazy loading)
   - Code splitting
   - Bundle optimization
   - Lighthouse audit >90

5. Analytics Setup
   - Google Analytics 4
   - Plausible (privacy-friendly)
   - Conversion tracking
   - Hotjar (optional)

6. Legal Pages
   - Privacy Policy
   - Terms of Service
   - Cookies Policy

7. Final QA
   - Cross-browser testing
   - Mobile responsiveness
   - Form submissions
   - All CTAs working
   - Links validation
   - Performance test
   - Security audit

**Deliverables**:
- Contact page complete
- Chatbot operational
- SEO optimized
- Performance optimized
- All QA passed
- READY TO LAUNCH

---

### Phase 4: Post-Launch (Semaine 8+)

#### Continuous Tasks

**Content**:
- Publish 2-4 blog posts/month
- Create new case studies
- Enrich glossary (target 200 terms)
- Add more use cases

**Optimization**:
- A/B testing CTAs
- Heatmaps analysis
- Conversion rate optimization
- SEO content strategy

**Features**:
- Multilingual (EN/DE)
- Dark mode (optional)
- Advanced chatbot features
- More integrations

**Marketing**:
- LinkedIn content
- Email campaigns
- Partner outreach
- Client testimonials collection

---

## GUIDELINES TECHNIQUES

### Configuration Supabase

#### Tables Schema

```sql
-- Leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  phone VARCHAR(50),
  project_type VARCHAR(50),
  budget VARCHAR(50),
  timeline VARCHAR(50),
  message TEXT,
  source VARCHAR(100), -- "contact_form", "diagnostic", "roi_calculator"
  status VARCHAR(20) DEFAULT 'new', -- "new", "contacted", "qualified", "converted"
  score INTEGER DEFAULT 0, -- Lead score 0-100
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_score ON leads(score DESC);

-- Diagnostic results
CREATE TABLE diagnostic_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  answers JSONB NOT NULL,
  recommendations JSONB NOT NULL,
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ROI calculations
CREATE TABLE roi_calculations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255),
  solution_id VARCHAR(100),
  inputs JSONB NOT NULL,
  results JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Assessment results
CREATE TABLE assessment_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  answers JSONB NOT NULL,
  category_scores JSONB NOT NULL,
  overall_score INTEGER,
  maturity_level INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Email subscriptions
CREATE TABLE email_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscription_type VARCHAR(50), -- "newsletter", "mini_cours"
  course_id VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active', -- "active", "unsubscribed"
  created_at TIMESTAMP DEFAULT NOW()
);

-- Chatbot conversations
CREATE TABLE chatbot_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL,
  messages JSONB NOT NULL,
  lead_captured BOOLEAN DEFAULT FALSE,
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Knowledge base for chatbot RAG
CREATE TABLE knowledge_base (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_type VARCHAR(50), -- "solution", "use_case", "faq", "blog_post"
  content_id VARCHAR(100),
  title VARCHAR(255),
  content TEXT NOT NULL,
  embedding VECTOR(1536), -- OpenAI embedding
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_knowledge_base_embedding ON knowledge_base 
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Function for semantic search
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE(
  id UUID,
  content_type VARCHAR(50),
  title VARCHAR(255),
  content TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    kb.id,
    kb.content_type,
    kb.title,
    kb.content,
    1 - (kb.embedding <=> query_embedding) AS similarity
  FROM knowledge_base kb
  WHERE 1 - (kb.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;
```

### Configuration Email (Brevo)

```typescript
// src/lib/email.ts

import Brevo from '@brevo/api';

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export async function sendWelcomeEmail(to: string, name: string) {
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  
  sendSmtpEmail.to = [{ email: to, name }];
  sendSmtpEmail.sender = { 
    email: 'contact@dainamics.ch', 
    name: 'DAINAMICS' 
  };
  sendSmtpEmail.subject = 'Bienvenue chez DAINAMICS';
  sendSmtpEmail.htmlContent = `
    <h1>Bienvenue ${name}!</h1>
    <p>Merci pour votre intérêt...</p>
  `;
  
  await apiInstance.sendTransacEmail(sendSmtpEmail);
}

export async function sendLeadNotification(leadData: any) {
  // Send notification to DAINAMICS team
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  
  sendSmtpEmail.to = [{ email: 'contact@dainamics.ch', name: 'DAINAMICS Team' }];
  sendSmtpEmail.sender = { 
    email: 'noreply@dainamics.ch', 
    name: 'DAINAMICS Bot' 
  };
  sendSmtpEmail.subject = `Nouveau lead: ${leadData.name} (Score: ${leadData.score})`;
  sendSmtpEmail.htmlContent = `
    <h2>Nouveau lead qualifié</h2>
    <p><strong>Nom:</strong> ${leadData.name}</p>
    <p><strong>Email:</strong> ${leadData.email}</p>
    <p><strong>Entreprise:</strong> ${leadData.company}</p>
    <p><strong>Budget:</strong> ${leadData.budget}</p>
    <p><strong>Timeline:</strong> ${leadData.timeline}</p>
    <p><strong>Score:</strong> ${leadData.score}/100</p>
    <p><strong>Message:</strong> ${leadData.message}</p>
  `;
  
  await apiInstance.sendTransacEmail(sendSmtpEmail);
}
```

### Configuration Analytics

```typescript
// src/lib/analytics.ts

// Google Analytics 4
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Plausible (privacy-friendly)
export const trackPlausibleEvent = (
  eventName: string,
  props?: Record<string, any>
) => {
  if (typeof window.plausible !== 'undefined') {
    window.plausible(eventName, { props });
  }
};

// Combined tracking
export const track = {
  pageView: (url: string) => {
    trackPageView(url);
    trackPlausibleEvent('pageview', { url });
  },
  
  leadCaptured: (source: string, score: number) => {
    trackEvent('lead_captured', 'engagement', source, score);
    trackPlausibleEvent('Lead Captured', { source, score });
  },
  
  roiCalculatorUsed: (solution: string, savings: number) => {
    trackEvent('roi_calculator_used', 'tool', solution, savings);
    trackPlausibleEvent('ROI Calculator Used', { solution, savings });
  },
  
  diagnosticCompleted: (recommendations: string[]) => {
    trackEvent('diagnostic_completed', 'tool', recommendations.join(','));
    trackPlausibleEvent('Diagnostic Completed', { recommendations });
  },
  
  chatbotMessageSent: () => {
    trackEvent('chatbot_message_sent', 'engagement');
    trackPlausibleEvent('Chatbot Message Sent');
  },
};
```

### Performance Optimization

```typescript
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-dialog'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});
```

### SEO Configuration

```tsx
// src/components/SEO.tsx

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  image = '/og-image.jpg', 
  url = 'https://dainamics.ch',
  type = 'website'
}: SEOProps) {
  const siteName = "DAINAMICS";
  const fullTitle = `${title} | ${siteName}`;
  const fullUrl = `${url}${window.location.pathname}`;
  
  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="DAINAMICS" />
    </Helmet>
  );
}
```

### Schema.org Markup

```tsx
// src/components/SchemaOrg.tsx

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DAINAMICS",
    "description": "Agence d'expertise IA, Automatisation & Développement pour PME",
    "url": "https://dainamics.ch",
    "logo": "https://dainamics.ch/logo.png",
    "image": "https://dainamics.ch/og-image.jpg",
    "telephone": "+41-XX-XXX-XX-XX",
    "email": "contact@dainamics.ch",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CH",
    },
    "sameAs": [
      "https://www.linkedin.com/company/dainamics",
    ],
    "priceRange": "CHF 10,000 - CHF 100,000+",
    "areaServed": ["CH", "FR", "BE"],
  };
  
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export function FAQSchema(faqItems: Array<{question: string; answer: string}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
  
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
```

---

## CHECKLIST FINALE

### Avant le Launch

#### Technique
- [ ] Tous les liens fonctionnent
- [ ] Tous les formulaires envoient correctement
- [ ] Images optimisées (WebP, <200KB)
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO, Best Practices)
- [ ] Mobile responsiveness parfaite (tous breakpoints)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] SSL certificate actif (HTTPS)
- [ ] Analytics configuré et testé
- [ ] Sitemap.xml généré et soumis
- [ ] Robots.txt configuré
- [ ] 404 page custom
- [ ] Error handling (500, 503)
- [ ] Loading states partout
- [ ] Empty states partout
- [ ] Animations smooth 60fps
- [ ] No console errors
- [ ] No accessibility warnings

#### Contenu
- [ ] Toutes les pages remplies
- [ ] 15 solutions documentées (TOP 15)
- [ ] 5+ projets portfolio (LEXAIA, ENKI-REALTY, +3)
- [ ] 10+ articles blog
- [ ] 50+ termes glossaire
- [ ] 20+ use cases
- [ ] Témoignages clients (3-5)
- [ ] FAQs complètes (toutes pages)
- [ ] Legal pages (Privacy, Terms, Cookies)
- [ ] All images have alt texts
- [ ] All links have titles
- [ ] All videos have captions

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
- [ ] Analytics tracking events
- [ ] Error tracking (Sentry)

#### SEO
- [ ] Meta tags toutes pages (unique)
- [ ] OpenGraph images toutes pages
- [ ] Schema.org markup (LocalBusiness, FAQPage, Article)
- [ ] H1-H6 structure correcte (1 H1 par page)
- [ ] Alt text toutes images
- [ ] Internal linking strategy
- [ ] External links (rel="nofollow" when needed)
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Structured data tested (Google Rich Results Test)
- [ ] Page speed optimized
- [ ] Mobile-first indexing ready

#### Business
- [ ] Pricing transparent défini
- [ ] Process client clarifié
- [ ] CTAs cohérents sur tout le site
- [ ] Garanties affichées
- [ ] Moyens de contact multiples
- [ ] Programme partenaires décrit
- [ ] Terms of Service acceptés
- [ ] Privacy Policy conforme nLPD/RGPD
- [ ] Cookie consent banner

#### Security
- [ ] Environment variables secured
- [ ] API keys not exposed
- [ ] CORS configured
- [ ] Rate limiting on forms
- [ ] Input validation client + server
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Security headers configured
- [ ] Dependencies up to date (no vulnerabilities)

---

## SUPPORT & QUESTIONS

Ce document d'architecture est vivant et sera mis à jour au fil du développement.

**Pour toute question**:
- Référencer ce document dans vos conversations avec Claude
- Utiliser les outils MCP (Supabase, GitHub, Desktop Commander)
- Suivre le plan d'implémentation phase par phase

**Prochaines étapes**:
1. Valider cette architecture
2. Commencer Phase 1, Semaine 1 avec Claude Code
3. Setup environnement
4. Let's build!

---

*Document généré pour DAINAMICS - Octobre 2025*  
*Version 2.0 - Architecture Complète avec Design System Ultra Détaillé*  
*Développé avec Claude Code - Pas d'emojis - Projets: LEXAIA & ENKI-REALTY*
