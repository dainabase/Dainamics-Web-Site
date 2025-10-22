# DAINAMICS - Design System v2.0 (Analyse Exhaustive)

**Version:** 2.0 - Janvier 2025  
**Source:** Homepage complète - TOUS les composants analysés  
**Objectif:** Documentation EXHAUSTIVE pour cohérence parfaite sur tout le site

---

## 📋 Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Palette de Couleurs Complète](#palette-de-couleurs-complète)
3. [Typographie](#typographie)
4. [Spacing & Layout](#spacing--layout)
5. [Composants UI](#composants-ui)
6. [Animations & Effects](#animations--effects)
7. [Patterns de Design](#patterns-de-design)
8. [Utilities CSS](#utilities-css)
9. [JavaScript/Canvas Effects](#javascriptcanvas-effects)
10. [Responsive Design](#responsive-design)

---

## Vue d'Ensemble

### Architecture Technique Complète
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3.x + CSS custom
- **Animations:** Framer Motion + CSS keyframes + Canvas API
- **UI Library:** shadcn/ui (Radix UI primitives)
- **Font:** Inter (Google Fonts)
- **Build:** Vite
- **Routing:** React Router

### Composants Homepage (Ordre d'affichage)
1. **EnhancedGridBackground** - Fond animé parallax
2. **Navigation** - Header sticky avec glass-morphism
3. **Hero** - Section héro avec animation cerveau 3D
4. **DiagnosticQuestionnaireNew** - Questionnaire interactif multi-étapes
5. **IntelligenceCenter** - Command Center avec particle system
6. **Services** - Grid de services 4 colonnes
7. **SocialProof** - Témoignages et logos clients
8. **Footer** - Footer avec newsletter
9. **CursorEffects** - Effets curseur customisés (desktop only)

### Principes de Design Actuels
- **Dark theme dominant** (#050510 background)
- **Glass-morphism** intense (blur-20px)
- **Animations fluides** (Framer Motion + Canvas)
- **Effets de glow/néon** pour CTAs
- **Particle systems** pour depth
- **Parallax scrolling** pour profondeur
- **Cursor effects** magnétiques (desktop)
- **Neural network aesthetics** (lignes de connexion)

---

## Palette de Couleurs Complète

### Couleurs Primaires (Tailwind Config)

#### Background
```css
--dainamics-background: #050510
```
- **Usage:** Background principal du site
- **Contraste:** Dark navy profond
- **Applications:** Body, sections full-width, overlays

#### Primary (Purple/Indigo)
```css
--dainamics-primary: #7B2FFF
```
- **Usage:** Intelligence Artificielle, boutons primaires, glow effects
- **Signification:** IA, innovation, créativité, technologie
- **Applications:** CTAs, headings IA, hover states, borders
- **Variations opacité:**
  - `bg-dainamics-primary/90` - Boutons
  - `bg-dainamics-primary/30` - Selections actives
  - `bg-dainamics-primary/20` - Backgrounds subtils
  - `bg-dainamics-primary/10` - Hover states très légers
  - `bg-dainamics-primary/5` - Ambiance backgrounds

#### Secondary (Cyan)
```css
--dainamics-secondary: #10E4FF
```
- **Usage:** Automatisation, accents techniques, data visualization
- **Signification:** Automatisation, technologie, efficacité, données
- **Applications:** Icons, borders, text highlights, status indicators
- **Variations opacité:**
  - `text-dainamics-secondary` - Text highlights
  - `bg-dainamics-secondary/20` - Active states
  - `bg-dainamics-secondary/10` - Subtle backgrounds

#### Success (Green)
```css
--dainamics-success: #0AFF9D
```
- **Usage:** Validations, analytics positives, success states
- **Signification:** Succès, croissance, ROI positif, validation
- **Applications:** Success messages, charts, badges, status dots
- **Variations opacité:**
  - `text-dainamics-success` - Success text
  - `bg-dainamics-success/20` - Success backgrounds

#### CTA (Orange)
```css
--dainamics-cta: #FF5A00
```
- **Usage:** Call-to-actions critiques, alertes importantes
- **Signification:** Action, urgence, conversion, énergie
- **Applications:** Primary CTAs, alerts, important badges
- **Gradient extension:** `#FF8A00` (orange plus clair pour gradients)

### Couleurs Structurelles

#### Light (White)
```css
--dainamics-light: #FFFFFF
```
- **Usage:** Texte principal, contraste maximum
- **Applications:** Body text, headings, icons
- **Variations opacité:**
  - `text-dainamics-light` - 100% - Titres principaux
  - `text-dainamics-light/90` - 90% - Sous-titres importants
  - `text-dainamics-light/80` - 80% - Body text standard
  - `text-dainamics-light/70` - 70% - Body text secondaire
  - `text-dainamics-light/60` - 60% - Labels, captions
  - `text-dainamics-light/50` - 50% - Disabled states
  - `text-dainamics-light/30` - 30% - Separateurs
  - `text-dainamics-light/20` - 20% - Borders subtils
  - `text-dainamics-light/10` - 10% - Backgrounds très légers
  - `text-dainamics-light/5` - 5% - Ambiance

#### Card Backgrounds
```css
--dainamics-card: #0A0A1A
--dainamics-card-alt: #0F0F24
```
- **Usage:** Backgrounds de cards, sections élevées, inputs
- **Applications:** Service cards, testimonial cards, feature boxes, form inputs
- **Variations opacité:**
  - `bg-dainamics-card` - Cards standards
  - `bg-dainamics-card-alt` - Cards alternatives
  - `bg-dainamics-card/70` - Glass-morphism cards
  - `bg-dainamics-card-alt/50` - Inputs transparents

#### Border
```css
--dainamics-border: #1A1A30
```
- **Usage:** Séparateurs, contours subtils
- **Applications:** Card borders, dividers, input borders, grid lines
- **Variations opacité:**
  - `border-dainamics-border` - Borders standards
  - `border-dainamics-border/50` - Borders légers
  - `border-dainamics-border/30` - Borders très subtils
  - `border-dainamics-border/20` - Grid backgrounds

### Couleurs Additionnelles (Utilities)

#### Blue Accent (Tailwind)
```css
blue-400: #60A5FA
```
- **Usage:** Cursor effects, accents complémentaires
- **Applications:** Cursor particles, hover effects additionnels

### Gradients Complexes

#### Gradient Primary (CTA Buttons)
```css
background: linear-gradient(135deg, #7B2FFF 0%, #FF5A00 100%);
```
- **Usage:** Boutons CTA primaires, highlights majeurs
- **Variante alternative:**
```css
background: linear-gradient(135deg, #7B2FFF 0%, #FF8A00 100%);
```

#### Gradient Secondary (Accents)
```css
background: linear-gradient(135deg, #10E4FF 0%, #0AFF9D 100%);
```
- **Usage:** Accents secondaires, borders animés

#### Gradient Text Primary
```css
background: linear-gradient(to right, #7B2FFF, #10E4FF);
```
- **Usage:** Titres importants, text highlights

#### Gradient Text Secondary
```css
background: linear-gradient(to right, #10E4FF, #0AFF9D);
```
- **Usage:** Sous-titres, labels spéciaux

#### Gradient CTA Text
```css
background: linear-gradient(135deg, #7B2FFF, #FF5A00);
```
- **Usage:** CTAs inline, mots-clés urgents

#### Radial Gradients (Depth Effects)
```css
/* Spotlight effect */
background: radial-gradient(
  circle at 50% 30%,
  rgba(99, 102, 241, 0.15) 0%,
  rgba(99, 102, 241, 0.05) 25%,
  transparent 50%
);

/* Vignette effect */
background: radial-gradient(
  ellipse at center,
  transparent 0%,
  transparent 40%,
  rgba(10, 10, 15, 0.3) 70%,
  rgba(10, 10, 15, 0.6) 100%
);

/* Glow blobs */
background: radial-gradient(
  ellipse at center,
  rgba(123, 47, 255, 0.1) 0%,
  transparent 60%
);
```

---

## Typographie

### Font Family
```css
font-family: 'Inter', sans-serif;
```
- **Source:** Google Fonts
- **Poids disponibles:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Fallback:** system-ui, sans-serif
- **Variants:** Normal (défaut), font-mono (pour effets techniques)

### Hiérarchie Typographique

#### H1 - Hero Title
```css
font-size: 3rem;                  /* text-5xl - mobile */
font-size: 3.75rem;               /* md:text-6xl - tablet */
font-size: 4.5rem;                /* lg:text-7xl - desktop */
line-height: 1.1;
font-weight: 700;                 /* bold */
letter-spacing: -0.02em;          /* tracking-tight */
```
- **Usage:** Titre principal homepage
- **Example:** "L'IA et l'Automatisation qui Transforment Votre Entreprise"
- **Classes utilities:** `.text-gradient`, `.glow`

#### H2 - Section Title
```css
font-size: 2.25rem;               /* text-4xl - mobile */
font-size: 3rem;                  /* md:text-5xl - tablet */
font-size: 3.75rem;               /* lg:text-6xl - desktop */
line-height: 1.2;
font-weight: 700;                 /* bold / font-black */
letter-spacing: -0.01em;          /* tracking-tight / tracking-wide */
```
- **Usage:** Titres de sections principales
- **Example:** "Intelligence Artificielle sur Mesure"
- **Classes utilities:** `.text-gradient`, `.text-gradient-secondary`, `.glow`, `.drop-shadow-[0_0_10px_rgba(123,47,255,0.3)]`

#### H3 - Subsection Title
```css
font-size: 1.875rem;              /* text-3xl - mobile */
font-size: 2.25rem;               /* md:text-4xl - tablet */
line-height: 1.3;
font-weight: 600;                 /* semibold */
```
- **Usage:** Sous-sections, cards importantes
- **Example:** "Nos Services"

#### H4 - Card Title
```css
font-size: 1.25rem;               /* text-xl */
font-size: 1.5rem;                /* text-2xl */
line-height: 1.4;
font-weight: 600;                 /* semibold / bold */
```
- **Usage:** Titres de cards, features
- **Example:** "Automatisation Intelligente"

#### H5 - Component Label
```css
font-size: 0.875rem;              /* text-sm */
line-height: 1.5;
font-weight: 500;                 /* medium / semibold */
text-transform: uppercase;
letter-spacing: 0.1em;            /* tracking-wider */
```
- **Usage:** Labels de sections, tags
- **Example:** "COMMAND CENTER", "RECOMMENDED"

#### Body Text

**Large Body**
```css
font-size: 1.125rem;              /* text-lg */
font-size: 1.25rem;               /* text-xl */
line-height: 1.75;
font-weight: 400;                 /* regular */
```
- **Usage:** Introductions, sous-titres importants
- **Opacity:** 80-90% (text-dainamics-light/80)

**Body Regular**
```css
font-size: 1rem;                  /* text-base */
line-height: 1.625;               /* leading-relaxed */
font-weight: 400;                 /* regular */
```
- **Usage:** Paragraphes standards, descriptions
- **Opacity:** 70-80% (text-dainamics-light/70)

**Small Body**
```css
font-size: 0.875rem;              /* text-sm */
line-height: 1.5;
font-weight: 400;                 /* regular */
```
- **Usage:** Captions, labels, meta-info, helper text
- **Opacity:** 50-70% (text-dainamics-light/50)

**Extra Small**
```css
font-size: 0.75rem;               /* text-xs */
line-height: 1.4;
font-weight: 400;                 /* regular / medium */
```
- **Usage:** Badges, tags, timestamps
- **Opacity:** 50-60% (text-dainamics-light/50)

#### Special Text Styles

**Button Text**
```css
font-size: 0.9375rem;             /* ~15px */
font-size: 1rem;                  /* text-base */
font-weight: 600;                 /* semibold / bold */
letter-spacing: 0.01em;
```

**Gradient Text**
```css
background: linear-gradient(to right, #7B2FFF, #10E4FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
- **Classes:** `.text-gradient`, `.text-gradient-primary`, `.text-gradient-secondary`, `.text-gradient-cta`

**Mono Text (Technical)**
```css
font-family: 'Monaco', 'Courier New', monospace;
font-size: 0.875rem;              /* text-sm */
```
- **Usage:** Code snippets, technical data
- **Example:** "Analyzing business patterns..."

**Typing Effect Text**
```css
.typing-effect {
  animation: typing 3s steps(40, end);
  overflow: hidden;
  white-space: nowrap;
}
```

---

## Spacing & Layout

### Spacing Scale (Tailwind + Custom)

```typescript
// Base scale (rem)
spacing: {
  '0': '0',
  '0.5': '0.125rem',  // 2px
  '1': '0.25rem',     // 4px
  '2': '0.5rem',      // 8px
  '3': '0.75rem',     // 12px
  '4': '1rem',        // 16px
  '5': '1.25rem',     // 20px
  '6': '1.5rem',      // 24px
  '8': '2rem',        // 32px
  '10': '2.5rem',     // 40px
  '12': '3rem',       // 48px
  '16': '4rem',       // 64px
  '20': '5rem',       // 80px
  '24': '6rem',       // 96px
  '28': '7rem',       // 112px
  '32': '8rem',       // 128px
}
```

### Spacing Patterns Homepage

#### Section Spacing (Vertical)
```css
/* Mobile */
padding-top: 5rem;              /* py-20 */
padding-bottom: 5rem;

/* Tablet */
@media (min-width: 768px) {
  padding-top: 7rem;            /* md:py-28 */
  padding-bottom: 7rem;
}
```

#### Content Spacing
```css
/* Gap entre sections internes */
margin-bottom: 4rem;            /* mb-16 */
margin-bottom: 3rem;            /* mb-12 */

/* Gap entre heading et body */
margin-bottom: 1.5rem;          /* mb-6 */

/* Gap entre paragraphes */
margin-bottom: 1rem;            /* mb-4 */

/* Gap entre cards */
gap: 2rem;                      /* gap-8 */
gap: 1rem;                      /* gap-4 */
```

#### Layout Gaps
```css
/* Flexbox gaps */
gap: 0.75rem;                   /* gap-3 */
gap: 1rem;                      /* gap-4 */
gap: 1.5rem;                    /* gap-6 */
gap: 2rem;                      /* gap-8 */
gap: 2.5rem;                    /* gap-10 */
gap: 4rem;                      /* gap-16 - lg:gap-16 */

/* Space between (vertical) */
space-y-2;                      /* 0.5rem between children */
space-y-3;                      /* 0.75rem */
space-y-4;                      /* 1rem */
space-y-6;                      /* 1.5rem */
space-y-8;                      /* 2rem */
```

### Container System

```css
.container {
  max-width: 1280px;            /* max-w-7xl */
  max-width: 1024px;            /* max-w-5xl - questionnaire */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;           /* px-4 */
  padding-right: 1rem;
}

/* Responsive */
@media (min-width: 768px) {
  .container {
    padding-left: 2rem;         /* md:px-8 */
    padding-right: 2rem;
  }
}
```

### Grid System

#### Services Grid (4 colonnes)
```css
display: grid;
grid-template-columns: repeat(1, 1fr);      /* Mobile */
gap: 1rem;                                  /* gap-4 */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);    /* md:grid-cols-2 */
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);    /* lg:grid-cols-3 */
  grid-template-columns: repeat(4, 1fr);    /* lg:grid-cols-4 */
}
```

#### Footer Grid (12 colonnes)
```css
display: grid;
grid-template-columns: repeat(1, 1fr);      /* Mobile */
gap: 3rem;                                  /* gap-12 */

@media (min-width: 768px) {
  grid-template-columns: repeat(12, 1fr);   /* md:grid-cols-12 */
  
  .col-span-4 { grid-column: span 4 / span 4; }  /* Company info */
  .col-span-2 { grid-column: span 2 / span 2; }  /* Links sections */
}
```

#### Challenge Grid (Questionnaire)
```css
display: grid;
grid-template-columns: repeat(1, 1fr);      /* Mobile */
gap: 1rem;                                  /* gap-4 */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);    /* md:grid-cols-2 */
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);    /* lg:grid-cols-3 */
}
```

---

## Composants UI

### Buttons

#### Variant: Default (Primary CTA)
```tsx
<Button variant="default" className="bg-gradient-to-r from-dainamics-cta to-[#FF8A00]">
```

**Styles:**
```css
background: linear-gradient(135deg, #7B2FFF 0%, #FF5A00 100%);
/* Alternative: from-dainamics-cta to-[#FF8A00] */
color: #FFFFFF;
padding: 0.75rem 2rem;        /* px-8 py-3 */
border-radius: 9999px;        /* rounded-full */
font-weight: 600;             /* font-semibold */
font-size: 1rem;              /* text-base */
transition: all 0.3s ease;
box-shadow: 0 0 20px rgba(123, 47, 255, 0.5);

/* Hover */
&:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(123, 47, 255, 0.8);
  opacity: 0.9;
}

/* Active */
&:active {
  transform: translateY(0);
}

/* With glow animation */
.btn-glow {
  box-shadow: 0 0 20px rgba(123, 47, 255, 0.5);
}

/* Power pulse variant */
.power-pulse {
  animation: power-pulse 2s ease-in-out infinite;
}
```

**Usage:**
- CTAs primaires (Hero, Contact, Form submissions)
- Actions critiques de conversion
- "Deploy Your AI Agents", "Begin Neural Business Scan"

#### Variant: Outline
```tsx
<Button variant="outline">
```

**Styles:**
```css
background: transparent;
color: #7B2FFF;
border: 1px solid #7B2FFF;
/* Alternative: border-dainamics-border */
padding: 0.75rem 2rem;
border-radius: 9999px;

/* Hover */
&:hover {
  background: rgba(123, 47, 255, 0.1);
  border-color: #10E4FF;
  color: #10E4FF;
}
```

**Variations:**
```css
/* Outline light */
border: 1px solid rgba(255, 255, 255, 0.2);
color: rgba(255, 255, 255, 0.7);

&:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #FFFFFF;
}
```

**Usage:**
- Actions secondaires
- "Schedule a Demo", "Request Demo", "Back"

#### Variant: Ghost
```tsx
<Button variant="ghost">
```

**Styles:**
```css
background: transparent;
color: rgba(255, 255, 255, 0.7);
padding: 0.5rem 1rem;

/* Hover */
&:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}
```

**Usage:**
- Navigation mobile
- Actions tertiaires
- "Restart Diagnosis"

#### Button with Icon
```tsx
<Button>
  Text
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```

**Icon Patterns:**
- Leading icon: `mr-2`
- Trailing icon: `ml-2`
- Icon sizes: `h-4 w-4` (small), `h-5 w-5` (medium), `h-6 w-6` (large)

#### Button Size Variants
```css
/* Size: default */
padding: 0.75rem 2rem;        /* px-8 py-3 */

/* Size: lg */
padding: 0.875rem 2.5rem;     /* Larger CTA */

/* Size: icon */
padding: 0.5rem;
width: 2.5rem;
height: 2.5rem;
```

### Form Components

#### Input
```tsx
<Input
  type="email"
  placeholder="your@email.com"
  className="bg-dainamics-card-alt/50 border-dainamics-border/50 text-dainamics-light"
/>
```

**Styles:**
```css
background: rgba(15, 15, 36, 0.5);
border: 1px solid rgba(26, 26, 48, 0.5);
color: #FFFFFF;
padding: 0.5rem 1rem;
border-radius: 0.375rem;      /* rounded-md */
font-size: 1rem;
transition: all 0.3s;

/* Focus */
&:focus {
  border-color: #7B2FFF;
  outline: none;
  ring: 1px solid #7B2FFF;
}

/* With focus glow */
.focus-within\:border-dainamics-primary {
  &:focus-within {
    border-color: #7B2FFF;
  }
}
```

**States:**
- Normal: `border-dainamics-border/50`
- Focus: `border-dainamics-primary`
- Error: `border-dainamics-cta`
- Disabled: `opacity-50 cursor-not-allowed`

#### Label
```tsx
<Label htmlFor="email" className="text-dainamics-light">
  Work Email*
</Label>
```

**Styles:**
```css
font-size: 0.875rem;          /* text-sm */
font-weight: 500;             /* medium */
color: #FFFFFF;
margin-bottom: 0.5rem;
display: block;
```

#### Checkbox
```tsx
<input
  type="checkbox"
  className="rounded border-dainamics-border/50 bg-dainamics-card text-dainamics-primary"
/>
```

**Styles:**
```css
width: 1rem;
height: 1rem;
border: 1px solid rgba(26, 26, 48, 0.5);
border-radius: 0.25rem;
background: #0A0A1A;
color: #7B2FFF;

/* Checked */
&:checked {
  background: #7B2FFF;
  border-color: #7B2FFF;
}

/* Focus */
&:focus {
  ring: 2px;
  ring-color: rgba(123, 47, 255, 0.5);
}
```

#### Newsletter Form
```tsx
<form className="flex">
  <Input 
    type="email"
    placeholder="Your email"
    className="rounded-r-none"
  />
  <Button type="submit" size="icon" className="rounded-l-none">
    <Send className="h-4 w-4" />
  </Button>
</form>
```

**Pattern:** Input + Button fusionnés (border-radius complémentaires)

### Cards

#### Service Card (Standard)
```tsx
<div className="group relative bg-dainamics-card border border-dainamics-border rounded-2xl p-8 hover:border-dainamics-primary transition-all duration-300">
```

**Anatomy:**
```css
/* Base */
background: #0A0A1A;
border: 1px solid #1A1A30;
border-radius: 1rem;          /* rounded-2xl */
padding: 2rem;                /* p-8 */
position: relative;
transition: all 0.3s;

/* Hover State */
&:hover {
  border-color: #7B2FFF;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(123, 47, 255, 0.2);
}

/* Glow Effect (pseudo-element) */
&::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg, #7B2FFF, #10E4FF);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

&:hover::before {
  opacity: 1;
}
```

**Structure interne:**
```html
<div class="service-card">
  <!-- Icon container -->
  <div class="w-16 h-16 rounded-full bg-dainamics-primary/30 flex items-center justify-center mb-6">
    <Icon class="w-8 h-8 text-dainamics-primary" />
  </div>
  
  <!-- Title -->
  <h4 class="text-2xl font-semibold text-dainamics-light mb-4">Titre</h4>
  
  <!-- Description -->
  <p class="text-dainamics-light/80 mb-6">Description...</p>
  
  <!-- Features -->
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <Check class="w-5 h-5 text-dainamics-success" />
      <span class="text-dainamics-light/70">Feature</span>
    </li>
  </ul>
</div>
```

#### Glass-Morphism Card
```tsx
<div className="glass-morphism rounded-xl p-6">
```

**Styles:**
```css
background: rgba(10, 10, 26, 0.6);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 0.75rem;
padding: 1.5rem;

/* Strong variant */
.glass-morphism-strong {
  background: rgba(5, 5, 16, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(26, 26, 48, 0.5);
}
```

**Usage:**
- Navigation bar
- Testimonial cards
- Footer sections
- Modal overlays

#### Testimonial Card
```tsx
<div className="glass-morphism rounded-xl p-6 md:p-8">
  <blockquote className="text-dainamics-light/80 mb-6">
    "Quote..."
  </blockquote>
  
  <div class="flex justify-between items-end">
    <div>
      <div class="text-dainamics-light font-semibold">Name</div>
      <div class="text-dainamics-light/60 text-sm">Role</div>
    </div>
    
    <div class="bg-dainamics-primary/10 text-dainamics-primary px-3 py-1 rounded text-sm">
      Impact
    </div>
  </div>
</div>
```

#### Challenge Card (Questionnaire)
```css
/* Base state */
padding: 1.5rem;
border-radius: 0.75rem;
border: 2px solid rgba(26, 26, 48, 0.3);
background: rgba(10, 10, 26, 0.3);
cursor: pointer;
transition: all 0.3s;

/* Hover */
&:hover {
  background: rgba(123, 47, 255, 0.05);
  transform: translateY(-5px);
}

/* Selected state */
&.selected {
  border-color: #7B2FFF;
  background: rgba(123, 47, 255, 0.1);
  box-shadow: 0 10px 30px rgba(123, 47, 255, 0.2);
}

/* Neural lines animation (when selected) */
/* See JavaScript/Canvas section */
```

#### Dashboard Card (Command Center)
```css
background: rgba(5, 5, 16, 0.4);
border-radius: 0.5rem;
padding: 1rem;
border: 1px solid rgba(123, 47, 255, 0.2);
position: relative;
overflow: hidden;
transition: border-color 0.3s;

/* Hover */
&:hover {
  border-color: rgba(123, 47, 255, 0.5);
}

/* Icon background (decorative) */
&::before {
  content: '';
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  /* Icon positioned here */
  opacity: 0.2;
}
```

### Navigation

#### Desktop Navigation
```tsx
<nav className="hidden lg:flex items-center gap-8">
```

**Link Styles:**
```css
/* Link standard */
color: rgba(255, 255, 255, 0.8);
font-size: 0.9375rem;         /* ~15px */
font-weight: 500;             /* medium */
transition: color 0.3s;
padding: 0.5rem 0;

/* Hover */
&:hover {
  color: #10E4FF;
}

/* Active */
&.active {
  color: #7B2FFF;
  font-weight: 600;
}
```

**Navigation Container:**
```css
/* Sticky header */
position: sticky;
top: 0;
z-index: 50;
background: rgba(5, 5, 16, 0.8);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(26, 26, 48, 0.5);
padding: 1rem 0;
```

#### Mobile Navigation (Hamburger)
```css
/* Menu Button */
background: rgba(10, 10, 26, 0.8);
backdrop-filter: blur(10px);
border: 1px solid #1A1A30;
padding: 0.75rem;
border-radius: 0.5rem;
display: flex;          /* lg:hidden */

/* Menu Overlay */
position: fixed;
top: 80px;
right: 0;
left: 0;
background: rgba(5, 5, 16, 0.95);
backdrop-filter: blur(20px);
padding: 2rem;
border-top: 1px solid #1A1A30;

/* Menu Items */
font-size: 1.125rem;          /* text-lg */
padding: 1rem 0;
border-bottom: 1px solid rgba(26, 26, 48, 0.5);
color: rgba(255, 255, 255, 0.8);

&:hover {
  color: #7B2FFF;
}
```

### Progress Indicators

#### Progress Bar (Questionnaire)
```tsx
<div className="h-1 bg-dainamics-border/50 rounded-full overflow-hidden">
  <motion.div
    animate={{ width: `${percentage}%` }}
    className="h-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary"
  />
</div>
```

#### Progress Steps
```tsx
<div className="flex justify-between">
  <div className="flex flex-col items-center">
    <div className={cn(
      "w-6 h-6 rounded-full flex items-center justify-center mb-2",
      isActive 
        ? "bg-dainamics-primary border-2 border-dainamics-secondary shadow-lg" 
        : "border-2 border-dainamics-border/50"
    )}>
      {isCompleted && <Check className="w-3 h-3" />}
    </div>
    <span className="text-xs">Label</span>
  </div>
</div>
```

### Badges & Tags

#### Status Badge
```css
padding: 0.125rem 0.5rem;     /* px-2 py-0.5 */
border-radius: 9999px;        /* rounded-full */
font-size: 0.75rem;           /* text-xs */
font-weight: 600;             /* semibold */
text-transform: uppercase;

/* Variants */
.badge-primary {
  background: rgba(123, 47, 255, 0.2);
  color: #7B2FFF;
}

.badge-success {
  background: rgba(10, 255, 157, 0.2);
  color: #0AFF9D;
}

.badge-live {
  background: rgba(16, 228, 255, 0.2);
  color: #10E4FF;
}
```

#### Certification Badge
```css
padding: 0.5rem 1rem;
border-radius: 9999px;
border: 1px solid rgba(255, 255, 255, 0.2);
background: rgba(255, 255, 255, 0.05);
color: rgba(255, 255, 255, 0.7);
font-size: 0.875rem;
```

### Lists

#### Feature List
```html
<ul class="space-y-3">
  <li class="flex items-start">
    <div class="bg-dainamics-primary/20 p-1 rounded-full mr-3 mt-0.5">
      <Check class="h-3 w-3 text-dainamics-primary" />
    </div>
    <span class="text-dainamics-light/80">Feature text</span>
  </li>
</ul>
```

#### Status List (Agent Status)
```html
<div class="space-y-3">
  <div class="flex items-center justify-between py-1">
    <div class="flex items-center">
      <div class="w-2 h-2 rounded-full bg-dainamics-success animate-pulse mr-2"></div>
      <span class="text-dainamics-light/80 text-sm">Agent Name</span>
    </div>
    <div class="text-dainamics-light/60 text-xs">Status</div>
  </div>
</div>
```

---

## Animations & Effects

### Framer Motion Variants

#### Fade In
```typescript
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Usage
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeIn}
>
```

**Variations:**
```typescript
// Fade In Up (larger movement)
{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

// Fade In Down
{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }
```

#### Fade In Right
```typescript
const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}
```

#### Fade In Left
```typescript
const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}
```

#### Scale In
```typescript
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}
```

#### Stagger Children
```typescript
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

// Apply to parent, children animate with delay
<motion.div variants={staggerContainer}>
  {items.map(item => (
    <motion.div variants={fadeIn} key={item.id} />
  ))}
</motion.div>
```

#### Hover Animations
```typescript
// Hover scale
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

// Hover translate
<motion.div
  whileHover={{ y: -5 }}
  transition={{ duration: 0.3 }}
>

// Hover with spring
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

#### Parallax Scroll
```typescript
import { useScroll, useTransform } from 'framer-motion';

const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 1000], [0, -50]);

<motion.div style={{ y }}>
  {/* Content moves slower than scroll */}
</motion.div>
```

### CSS Keyframes

#### Pulse Glow (CTA Button)
```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(123, 47, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(123, 47, 255, 0.8);
  }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* With delay */
.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
  animation-delay: 0.5s;
}
```

#### Float (3D Objects)
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

#### Spin Slow (Icons, Loading)
```css
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Reverse direction */
.spin-reverse {
  animation: spin-slow 1.5s linear infinite reverse;
}
```

#### Power Pulse (Enhanced Pulse)
```css
@keyframes power-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.power-pulse {
  animation: power-pulse 2s ease-in-out infinite;
}
```

#### Neural Flash (Grid Elements)
```css
@keyframes neural-flash {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.neural-flash {
  animation: neural-flash 2s ease-in-out infinite;
}
```

#### Data Transmission (Lines)
```css
@keyframes data-transmission {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.data-transmission {
  animation: data-transmission 3s linear infinite;
}
```

#### Cursor Trail
```css
@keyframes cursor-trail {
  0% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

.animate-cursor-trail {
  animation: cursor-trail 0.6s ease-out forwards;
}
```

#### Ping (Spark Effect)
```css
@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
```

#### Typing Effect
```css
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(40, end);
}
```

### Tailwind Animation Utilities

```css
/* Predefined dans index.css */
.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Hover Transitions

```css
/* Standard hover (buttons, cards) */
transition: all 0.3s ease;

/* Card hover (transform + shadow) */
transition-property: transform, box-shadow, border-color;
transition-duration: 0.3s;
transition-timing-function: ease;

/* Button hover (cubic-bezier) */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Color transitions */
transition: color 0.3s, background-color 0.3s;

/* Smooth spring-like (via Framer Motion) */
transition={{ type: "spring", stiffness: 400, damping: 17 }}
```

---

## Patterns de Design

### Glass Morphism Patterns

#### Standard Glass
```css
.glass-morphism {
  background: rgba(10, 10, 26, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Strong Glass (Navigation, Modals)
```css
.glass-morphism-strong {
  background: rgba(5, 5, 16, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(26, 26, 48, 0.5);
}
```

#### Card Glass (Transparent Cards)
```css
.glass-card {
  background: rgba(10, 10, 26, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
}
```

### Gradient Patterns

#### Text Gradients
```css
/* Primary gradient (purple to cyan) */
.text-gradient {
  background: linear-gradient(to right, #7B2FFF, #10E4FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Secondary gradient (cyan to green) */
.text-gradient-secondary {
  background: linear-gradient(to right, #10E4FF, #0AFF9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CTA gradient (purple to orange) */
.text-gradient-cta {
  background: linear-gradient(135deg, #7B2FFF, #FF5A00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Primary variant (same as primary) */
.text-gradient-primary {
  background: linear-gradient(to right, #7B2FFF, #10E4FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### Background Gradients
```css
/* Button gradient */
.bg-gradient-primary {
  background: linear-gradient(135deg, #7B2FFF 0%, #FF5A00 100%);
}

/* Alternative button gradient */
.bg-gradient-cta {
  background: linear-gradient(135deg, #FF5A00 0%, #FF8A00 100%);
}

/* Accent gradient */
.bg-gradient-secondary {
  background: linear-gradient(135deg, #10E4FF 0%, #0AFF9D 100%);
}

/* Subtle card gradient */
.bg-gradient-subtle {
  background: linear-gradient(180deg, #0A0A1A 0%, #0F0F24 100%);
}
```

#### Radial Gradients (Depth & Glow)
```css
/* Spotlight effect (top center) */
.spotlight {
  background: radial-gradient(
    circle at 50% 30%,
    rgba(99, 102, 241, 0.15) 0%,
    rgba(99, 102, 241, 0.05) 25%,
    transparent 50%
  );
}

/* Vignette effect (darken edges) */
.vignette {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 40%,
    rgba(10, 10, 15, 0.3) 70%,
    rgba(10, 10, 15, 0.6) 100%
  );
}

/* Glow blob (ambient light) */
.glow-blob {
  background: radial-gradient(
    ellipse at center,
    rgba(123, 47, 255, 0.1) 0%,
    transparent 60%
  );
  filter: blur(60px);
}

/* Glow blob secondary */
.glow-blob-secondary {
  background: radial-gradient(
    ellipse at center,
    rgba(16, 228, 255, 0.08) 0%,
    transparent 60%
  );
  filter: blur(80px);
}
```

### Border Gradient Pattern

```css
/* Technique: gradient border via pseudo-element */
.border-gradient {
  position: relative;
  background: #0A0A1A;
  border-radius: 1rem;
}

.border-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg, #7B2FFF, #10E4FF);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.border-gradient:hover::before {
  opacity: 1;
}
```

### Glow Effects

```css
/* Primary glow (hover states) */
.glow-primary {
  box-shadow: 0 0 30px rgba(123, 47, 255, 0.5);
}

.glow-primary-strong {
  box-shadow: 0 0 50px rgba(123, 47, 255, 0.8);
}

/* Text glow */
.glow {
  text-shadow: 0 0 10px rgba(123, 47, 255, 0.3);
}

.glow-sm {
  text-shadow: 0 0 5px rgba(123, 47, 255, 0.2);
}

/* Secondary glow */
.glow-secondary {
  box-shadow: 0 0 30px rgba(16, 228, 255, 0.5);
}

/* Success glow */
.glow-success {
  box-shadow: 0 0 30px rgba(10, 255, 157, 0.5);
}

/* Button glow (class utility) */
.btn-glow {
  box-shadow: 0 0 20px rgba(123, 47, 255, 0.5);
}

.btn-glow:hover {
  box-shadow: 0 0 30px rgba(123, 47, 255, 0.8);
}
```

### Background Patterns

#### Grid Background (EnhancedGridBackground)
```css
/* Single grid layer - no dots */
background-image: 
  linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px);
background-size: 50px 50px;
```

#### Decorative Blobs (Ambiance)
```css
/* Positioned absolutely within containers */
.blob-1 {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 15rem;          /* w-60 */
  height: 15rem;
  border-radius: 9999px;
  background: rgba(123, 47, 255, 0.1);
  filter: blur(3rem);    /* blur-3xl */
}

.blob-2 {
  position: absolute;
  bottom: 25%;
  right: 25%;
  width: 20rem;          /* w-80 */
  height: 20rem;
  border-radius: 9999px;
  background: rgba(16, 228, 255, 0.1);
  filter: blur(3rem);
}
```

### Neural Network Visual Effects

#### Neural Connection Lines (SVG/Div)
```tsx
// In DiagnosticQuestionnaireNew - animated lines
<motion.div
  initial={{ opacity: 0, scaleX: 0 }}
  animate={{ opacity: 0.7, scaleX: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  style={{ 
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50px',
    height: '1px',
    background: 'linear-gradient(90deg, #7B2FFF, #10E4FF)',
    transformOrigin: 'left center',
    transform: 'rotate(45deg)'
  }}
/>
```

#### Neural Pulse Dots
```tsx
<motion.div
  animate={{ 
    opacity: [0, 1, 0],
    scale: [0, 1, 2] 
  }}
  transition={{ 
    duration: 2,
    repeat: Infinity,
    repeatDelay: 3
  }}
  style={{ 
    position: 'absolute',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#10E4FF',
  }}
/>
```

### Scanner Interface Pattern

```tsx
// Scanner header
<div className="flex items-center justify-between pb-6 mb-8 border-b border-dainamics-border/40">
  <div className="flex items-center">
    <div className="relative mr-4">
      <div className="w-12 h-12 bg-gradient-to-r from-dainamics-primary to-dainamics-secondary rounded-full flex items-center justify-center">
        <Icon />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-dainamics-primary to-dainamics-secondary rounded-full animate-pulse-glow opacity-60"></div>
    </div>
    <h3>Title</h3>
  </div>
  
  <div className="flex items-center">
    <div className="w-2 h-2 rounded-full bg-dainamics-secondary animate-pulse mr-2"></div>
    <span className="text-dainamics-secondary text-sm">Status: Active</span>
  </div>
</div>
```

### Dashboard Pattern (Command Center)

```tsx
// Dashboard metrics grid
<div className="grid grid-cols-3 gap-4">
  <div className="bg-dainamics-background/40 rounded-lg p-4 border border-dainamics-primary/20 hover:border-dainamics-primary/50 transition-colors relative overflow-hidden">
    {/* Icon background */}
    <div className="absolute right-2 top-2 text-dainamics-primary opacity-20">
      <Icon className="h-10 w-10" />
    </div>
    
    {/* Metric */}
    <div className="text-dainamics-light/60 text-xs mb-1">Label</div>
    <div className="text-dainamics-light text-2xl font-bold">Value</div>
    <div className="text-dainamics-success text-xs mt-1 flex items-center">
      <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
      Change indicator
    </div>
  </div>
</div>
```

---

## Utilities CSS

### Text Utilities

```css
/* Text gradients - already covered in Patterns */

/* Text shadow / glow */
.text-glow {
  text-shadow: 0 0 10px currentColor;
}

/* Drop shadow */
.drop-shadow-\[0_0_10px_rgba\(123\,47\,255\,0\.3\)\] {
  filter: drop-shadow(0 0 10px rgba(123, 47, 255, 0.3));
}

/* Tracking (letter-spacing) */
.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

/* Uppercase utility */
.uppercase {
  text-transform: uppercase;
}
```

### Background Utilities

```css
/* Blur filters */
.blur-3xl {
  filter: blur(3rem);    /* 48px */
}

.blur-\[60px\] {
  filter: blur(60px);
}

.blur-\[80px\] {
  filter: blur(80px);
}

.blur-\[100px\] {
  filter: blur(100px);
}

/* Backdrop blur */
.backdrop-blur-10px {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.backdrop-blur-20px {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

### Position & Z-Index

```css
/* Common z-index layers */
.z-0 {
  z-index: 0;        /* Background elements */
}

.z-10 {
  z-index: 10;       /* Content layer */
}

.z-50 {
  z-index: 50;       /* Navigation, fixed elements */
}

/* Pointer events */
.pointer-events-none {
  pointer-events: none;
}
```

### Overflow & Clip

```css
/* Overflow */
.overflow-hidden {
  overflow: hidden;
}

/* Background clip (for text gradients) */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Text fill (for text gradients) */
.-webkit-text-fill-color-transparent {
  -webkit-text-fill-color: transparent;
}
```

---

## JavaScript/Canvas Effects

### Particle System (IntelligenceCenter.tsx)

```typescript
// Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  age: number;
  maxAge: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    
    // Color variations
    const colorChoice = Math.random();
    if (colorChoice < 0.4) {
      this.color = 'rgba(123, 47, 255, ';  // purple
    } else if (colorChoice < 0.7) {
      this.color = 'rgba(16, 228, 255, ';  // cyan
    } else {
      this.color = 'rgba(255, 255, 255, ';  // white
    }
    
    this.age = 0;
    this.maxAge = Math.random() * 100 + 50;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.age++;
    
    const opacity = 1 - (this.age / this.maxAge);
    
    if (ctx) {
      ctx.fillStyle = this.color + opacity + ')';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Bounce on edges
    if (this.x < 0 || this.x > canvas.width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.speedY *= -1;
    }
    
    return this.age < this.maxAge;
  }
}

// Animation loop
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Add new particles
  if (particles.length < maxParticles && Math.random() > 0.9) {
    particles.push(new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    ));
  }
  
  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].update()) {
      particles.splice(i, 1);
    }
  }
  
  // Draw connections between nearby particles
  ctx.strokeStyle = 'rgba(123, 47, 255, 0.1)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const opacity = (1 - distance / 100) * 0.2;
        ctx.strokeStyle = `rgba(123, 47, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  
  requestAnimationFrame(animate);
};
```

**Usage:**
- Background ambiance (IntelligenceCenter)
- Command Center visualization
- Dynamic depth effects

### Data Transmission Lines (IntelligenceCenter.tsx)

```typescript
class DataTransmission {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  color: string;
  
  constructor() {
    // Random edge-to-edge transmission
    const edge = Math.floor(Math.random() * 4);
    
    // Calculate start and end points based on edge
    // ... (see full implementation in source)
    
    this.progress = 0;
    this.speed = 0.005 + Math.random() * 0.01;
    
    const colorChoice = Math.random();
    if (colorChoice < 0.4) {
      this.color = 'rgba(123, 47, 255, 0.5)';
    } else if (colorChoice < 0.7) {
      this.color = 'rgba(16, 228, 255, 0.5)';
    } else {
      this.color = 'rgba(255, 90, 0, 0.4)';
    }
  }
  
  update() {
    this.progress += this.speed;
    
    const x = this.startX + (this.endX - this.startX) * this.progress;
    const y = this.startY + (this.endY - this.startY) * this.progress;
    
    if (ctx) {
      // Pulse effect
      const pulseSize = Math.abs(Math.sin(this.progress * Math.PI) * 3);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Line trail
      ctx.strokeStyle = this.color.replace('0.5', '0.2');
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(this.startX, this.startY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    
    return this.progress < 1;
  }
}
```

### Cursor Effects (CursorEffects.tsx)

```typescript
// State management
const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
const [trails, setTrails] = useState<CursorPosition[]>([]);
const [isHovering, setIsHovering] = useState(false);

// Update cursor and trails
const updateCursorPosition = (e: MouseEvent) => {
  setCursorPosition({ x: e.clientX, y: e.clientY });
  
  // Add new trail position
  setTrails(prev => {
    const newTrails = [...prev, { x: e.clientX, y: e.clientY }];
    return newTrails.slice(-12);  // Keep last 12 positions
  });
  
  // Check if hovering interactive element
  const target = e.target as HTMLElement;
  const isInteractive = 
    target.tagName === 'BUTTON' || 
    target.tagName === 'A' || 
    target.closest('button') || 
    target.closest('a');
  
  setIsHovering(!!isInteractive);
};
```

**Cursor Rendering:**
```tsx
{/* Main cursor ring */}
<div 
  className={cn(
    "absolute rounded-full border-2 transition-all duration-300",
    isHovering 
      ? "w-16 h-16 border-dainamics-secondary opacity-40"
      : "w-8 h-8 border-dainamics-primary"
  )}
  style={{
    transform: `translate(${cursorPosition.x - (isHovering ? 32 : 16)}px, ${cursorPosition.y - (isHovering ? 32 : 16)}px)`,
  }}
/>

{/* Inner dot */}
<div 
  className={cn(
    "absolute rounded-full transition-all duration-150",
    isHovering 
      ? "w-4 h-4 bg-dainamics-secondary"
      : "w-3 h-3 bg-dainamics-primary"
  )}
  style={{
    transform: `translate(${cursorPosition.x - (isHovering ? 8 : 6)}px, ${cursorPosition.y - (isHovering ? 8 : 6)}px)`,
    boxShadow: isHovering 
      ? '0 0 10px 2px rgba(144, 85, 253, 0.4)' 
      : '0 0 8px 1px rgba(105, 57, 230, 0.3)'
  }}
/>

{/* Trail particles */}
{trails.map((trail, index) => (
  <div 
    key={index}
    className="absolute rounded-full bg-gradient-to-r from-dainamics-primary to-dainamics-secondary animate-cursor-trail"
    style={{
      left: trail.x - 4,
      top: trail.y - 4,
      width: `${8 - index * 0.6}px`,
      height: `${8 - index * 0.6}px`,
      opacity: 0.9 - (index * 0.07),
      filter: 'blur(1px)',
      boxShadow: '0 0 8px 2px rgba(124, 58, 237, 0.3)'
    }}
  />
))}
```

### Magnetic Effect (CursorEffects.tsx)

```typescript
// Apply magnetic effect to interactive elements
const buttons = document.querySelectorAll('button, a, .cursor-magnetic');

buttons.forEach(button => {
  button.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = (button as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic pull effect
    (button as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  
  button.addEventListener('mouseenter', () => {
    (button as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    (button as HTMLElement).style.transform = 'scale(1.05)';
  });
  
  button.addEventListener('mouseleave', () => {
    (button as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    (button as HTMLElement).style.transform = 'scale(1) translate(0, 0)';
  });
});
```

### Counter Animation (SocialProof.tsx)

```typescript
useEffect(() => {
  if (!isCounterInView) return;
  
  const counterElement = document.getElementById('businesses-counter');
  if (!counterElement) return;
  
  const targetNumber = 500;
  let currentNumber = 0;
  const duration = 2000; // ms
  const interval = 20;   // ms
  const increment = Math.ceil(targetNumber / (duration / interval));
  
  const timer = setInterval(() => {
    currentNumber += increment;
    
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(timer);
    }
    
    counterElement.textContent = `+${currentNumber}`;
  }, interval);
  
  return () => clearInterval(timer);
}, [isCounterInView]);
```

---

## Responsive Design

### Breakpoints (Tailwind)

```typescript
screens: {
  'sm': '640px',    // Mobile large
  'md': '768px',    // Tablet
  'lg': '1024px',   // Desktop
  'xl': '1280px',   // Desktop large
  '2xl': '1536px',  // Desktop XL
}
```

### Responsive Patterns

#### Typography Responsive
```css
/* Hero title */
font-size: 2.25rem;           /* text-4xl - mobile (base) */

@media (min-width: 768px) {
  font-size: 3rem;            /* md:text-5xl */
}

@media (min-width: 1024px) {
  font-size: 3.75rem;         /* lg:text-6xl */
}
```

#### Grid Layouts Responsive
```css
/* Services grid */
grid-template-columns: repeat(1, 1fr);        /* mobile */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);      /* md:grid-cols-2 */
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);      /* lg:grid-cols-3 */
  grid-template-columns: repeat(4, 1fr);      /* lg:grid-cols-4 */
}

/* Footer grid (12 columns) */
@media (min-width: 768px) {
  grid-template-columns: repeat(12, 1fr);
  
  .md\\:col-span-4 { grid-column: span 4 / span 4; }
  .md\\:col-span-2 { grid-column: span 2 / span 2; }
}
```

#### Spacing Responsive
```css
/* Section padding */
padding-top: 5rem;            /* py-20 - mobile */
padding-bottom: 5rem;

@media (min-width: 768px) {
  padding-top: 7rem;          /* md:py-28 */
  padding-bottom: 7rem;
}

/* Container padding */
padding-left: 1rem;           /* px-4 - mobile */
padding-right: 1rem;

@media (min-width: 768px) {
  padding-left: 2rem;         /* md:px-8 */
  padding-right: 2rem;
}
```

#### Flexbox Direction Responsive
```css
/* Mobile: column, Desktop: row */
flex-direction: column;       /* flex-col */
gap: 1rem;                    /* gap-4 */

@media (min-width: 768px) {
  flex-direction: row;        /* md:flex-row */
  gap: 1.5rem;                /* md:gap-6 */
}
```

#### Display Responsive
```css
/* Desktop nav: visible */
display: none;                /* hidden */

@media (min-width: 1024px) {
  display: flex;              /* lg:flex */
}

/* Mobile nav: visible */
display: flex;                /* flex */

@media (min-width: 1024px) {
  display: none;              /* lg:hidden */
}
```

#### Layout Responsive (IntelligenceCenter)
```css
/* Two-column layout */
display: flex;
flex-direction: column;       /* flex-col */
gap: 2.5rem;                  /* gap-10 */

@media (min-width: 1024px) {
  flex-direction: row;        /* lg:flex-row */
  gap: 4rem;                  /* lg:gap-16 */
}

/* Child widths */
.child {
  width: 100%;
}

@media (min-width: 1024px) {
  .child {
    width: 50%;               /* lg:w-1/2 */
  }
}
```

### Mobile-First Approach

**Principe:** Styles de base = mobile, puis overrides desktop

```css
/* ✅ Correct: Mobile-first */
.element {
  padding: 1rem;              /* Base mobile */
  font-size: 1rem;
}

@media (min-width: 768px) {
  .element {
    padding: 2rem;            /* Override tablet */
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .element {
    padding: 3rem;            /* Override desktop */
    font-size: 1.5rem;
  }
}

/* ❌ Incorrect: Desktop-first */
.element {
  padding: 3rem;              /* Desktop par défaut */
}

@media (max-width: 1023px) {
  .element {
    padding: 2rem;            /* Override tablet */
  }
}

@media (max-width: 767px) {
  .element {
    padding: 1rem;            /* Override mobile */
  }
}
```

### Hide on Mobile (CursorEffects)

```typescript
// Cursor effects only on desktop
if (typeof window !== 'undefined' && window.innerWidth < 768) {
  return null;
}
```

---

## Notes Techniques

### Performance Optimizations

1. **Lazy Loading Images**
   ```tsx
   <img loading="lazy" alt="..." />
   ```

2. **Framer Motion Optimization**
   ```tsx
   viewport={{ once: true, margin: "-100px" }}
   ```
   - Animations déclenchées 1 seule fois
   - Margin: trigger avant que l'élément soit visible

3. **CSS Containment**
   ```css
   contain: layout style paint;
   ```

4. **GPU Acceleration**
   ```css
   transform: translateZ(0);
   will-change: transform;
   ```

5. **Canvas Cleanup**
   ```typescript
   return () => {
     cancelAnimationFrame(animationId);
     if (container.contains(canvas)) {
       container.removeChild(canvas);
     }
   };
   ```

6. **Debouncing/Throttling Events**
   - Cursor movement: Updates state on every mousemove (acceptable for desktop)
   - Resize events: Use ResizeObserver

### Accessibilité

**Manquements identifiés:**
- ❌ Pas de focus states explicites sur tous les interactifs
- ❌ Contrastes à vérifier (WCAG AA)
- ❌ Pas d'aria-labels systématiques sur icons
- ❌ Skip links manquants

**À implémenter:**
```css
/* Focus states */
&:focus-visible {
  outline: 2px solid #7B2FFF;
  outline-offset: 2px;
  border-radius: 0.25rem;
}

/* Focus rings pour composants custom */
.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
```

**Aria Labels:**
```tsx
<button aria-label="Submit form">
  <Send className="h-4 w-4" />
</button>

<nav aria-label="Main navigation">
  {/* Navigation items */}
</nav>
```

### Cross-Browser Support

**Vendor Prefixes (déjà présents):**
```css
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);

-webkit-background-clip: text;
background-clip: text;

-webkit-text-fill-color: transparent;

-webkit-mask-composite: xor;
mask-composite: exclude;
```

**Fallbacks:**
```css
/* Fallback pour backdrop-filter */
@supports not (backdrop-filter: blur(10px)) {
  background: rgba(10, 10, 26, 0.95);
}
```

### Browser Compatibility

**Features utilisées:**
- ✅ CSS Grid (IE11+)
- ✅ Flexbox (IE11+)
- ✅ CSS Custom Properties (IE11 with fallbacks)
- ✅ backdrop-filter (Edge 79+, Safari 9+, Chrome 76+)
- ✅ Canvas API (IE9+)
- ✅ IntersectionObserver (IE11 with polyfill)

**Polyfills nécessaires:**
- IntersectionObserver (pour IE11)
- ResizeObserver (pour Safari <13)

---

## Évolution vs Stratégie Optimisée

### Gaps Identifiés

#### Navigation
- **Actuel:** 6 items (Services, Projets, Approche, Ressources, Pricing, Contact)
- **Plan optimisé:** 4 items (Exemples, Process, Pourquoi Nous, Contact)
- **Action:** Simplification nécessaire - Réduire menu

#### Couleurs
- **Actuel:** Primary = #7B2FFF (Purple)
- **Plan optimisé:** Primary = #6366F1 (Indigo)
- **Action:** Harmoniser palette ou garder purple (meilleure distinction)

#### Messages
- **Actuel:** Focus technique ("IA et Automatisation")
- **Plan optimisé:** Focus émotionnel ("Transformez votre charge mentale")
- **Action:** Réécriture copywriting Hero section

#### Structure Homepage
- **Actuel:** 
  - Hero
  - DiagnosticQuestionnaire
  - IntelligenceCenter
  - Services
  - SocialProof
  - Footer

- **Plan optimisé:** 
  - Hero unifié (5 blocs: Problème, Solution, Exemples, Preuves, CTA)

- **Action:** 
  - Option A: Refonte complète (risque élevé)
  - Option B: Restructuration progressive (recommandé)

#### Composants Existants vs Plan
- **Existants utilisables:**
  - ✅ DiagnosticQuestionnaire → Garder (forte interactivité)
  - ✅ SocialProof → Garder (témoignages essentiels)
  - ✅ Services → Adapter en "Exemples concrets"
  - ✅ Footer → Garder (complet)

- **À créer:**
  - ❌ Section "Process" (3 étapes)
  - ❌ Section "Pourquoi Nous" (différenciateurs)

---

## Fichiers Sources Complets

### Structure Analysée
```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx              ✅ Analysé
│   │   ├── input.tsx               ✅ Analysé (usage)
│   │   └── label.tsx               ✅ Analysé (usage)
│   ├── Navigation.tsx               ✅ Analysé
│   ├── Hero.tsx                     ✅ Analysé
│   ├── Services.tsx                 ✅ Analysé
│   ├── DiagnosticQuestionnaireNew.tsx  ✅ Analysé
│   ├── IntelligenceCenter.tsx       ✅ Analysé
│   ├── SocialProof.tsx              ✅ Analysé
│   ├── Footer.tsx                   ✅ Analysé
│   ├── CursorEffects.tsx            ✅ Analysé
│   └── EnhancedGridBackground.tsx   ✅ Analysé
├── pages/
│   └── Index.tsx                    ✅ Analysé
├── index.css                        ✅ Analysé
└── tailwind.config.ts               ✅ Analysé
```

**Total composants analysés:** 13/13 ✅

### Configuration Clés

**tailwind.config.ts:**
- Couleurs custom Dainamics (9 couleurs)
- Animations custom (pulse-glow, float, spin-slow, etc.)
- Keyframes personnalisés (power-pulse, neural-flash, data-transmission)
- Extend theme (shadows, spacing, etc.)

**index.css:**
- Utilities CSS (glass-morphism, text-gradient, glow)
- Keyframes animations
- Reset styles
- Custom animations (cursor-trail, typing-effect)

**shadcn/ui:**
- Button component (variants)
- Input component
- Label component
- Toast notifications (use-toast)

---

## Recommandations pour Nouveaux Composants

### Patterns à Suivre

#### 1. Structure Composant Standard
```tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Icon } from 'lucide-react';

export default function ComponentName() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dainamics-background z-0">
        {/* Decorative blobs */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Component content */}
        </motion.div>
      </div>
    </section>
  );
}
```

#### 2. Animations Standards
- Toujours utiliser `initial`, `whileInView`, `viewport={{ once: true }}`
- Delays: 0.2s entre éléments staggered
- Duration: 0.5-0.7s pour animations fluides
- Easing: `ease-out` ou `cubic-bezier(0.4, 0, 0.2, 1)`

#### 3. Responsive Patterns
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Spacing: py-20 (mobile) → md:py-28 (desktop)
- Typography: text-4xl (mobile) → md:text-5xl → lg:text-6xl

#### 4. Couleurs & Gradients
- Backgrounds: `bg-dainamics-background`
- Cards: `bg-dainamics-card` ou `glass-morphism`
- Borders: `border-dainamics-border` avec opacités
- CTAs: Gradients `from-dainamics-primary to-dainamics-cta`
- Hover: `hover:border-dainamics-primary`

---

## Checklist Cohérence Design

### Avant de créer un nouveau composant:

- [ ] **Couleurs:** Utilise exclusivement la palette Dainamics
- [ ] **Typographie:** Respecte la hiérarchie H1-H5
- [ ] **Spacing:** Suit les patterns py-20/md:py-28 pour sections
- [ ] **Animations:** Utilise Framer Motion avec viewport={{ once: true }}
- [ ] **Glass-morphism:** Appliqué aux cards/overlays si approprié
- [ ] **Gradients:** Texte ou backgrounds selon les patterns définis
- [ ] **Responsive:** Mobile-first avec breakpoints md/lg
- [ ] **Icons:** Lucide React avec tailles consistantes
- [ ] **Buttons:** Utilise composant Button avec variants
- [ ] **Hover states:** Transform + shadow pour cards
- [ ] **Accessibility:** Focus states, aria-labels, semantic HTML

---

## Changelog

**Version 2.0 - Janvier 2025**
- ✅ Analyse exhaustive des 13 composants homepage
- ✅ Documentation complète couleurs (+ rgba variations)
- ✅ Documentation composants UI (Input, Label, Checkbox, Newsletter, etc.)
- ✅ Documentation animations Canvas (Particle system, Data transmission)
- ✅ Documentation cursor effects (Trails, Magnetic)
- ✅ Documentation patterns design (Glass-morphism, Gradients complexes)
- ✅ Identification gaps avec stratégie optimisée
- ✅ Recommandations pour nouveaux composants

**Version 1.0 - Janvier 2025**
- Extraction design system partielle (4 composants)

---

## Crédits

**Auteur:** DAINAMICS Team  
**Date:** Janvier 2025  
**Source:** Homepage complète - Analyse exhaustive 13 composants  
**Contact:** contact@dainamics.com

---

## Utilisation du Design System

**Pour développeurs:**
1. Consultez ce document avant toute création de composant
2. Respectez les patterns établis pour cohérence
3. Réutilisez les utilities CSS définies
4. Suivez les animations patterns (Framer Motion)
5. Testez responsive mobile-first

**Pour designers:**
1. Palette couleurs figée (ne pas ajouter de nouvelles couleurs)
2. Typographie fixe (Inter uniquement)
3. Spacing system Tailwind (multiples de 4px)
4. Animations subtiles (0.3-0.7s)
5. Glass-morphism pour profondeur

**Pour product managers:**
1. Toute nouvelle feature doit respecter ce design system
2. Modifications majeures nécessitent mise à jour du document
3. Gaps identifiés avec plan optimisé à prioriser

---

**Note:** Ce design system documente l'**état actuel exhaustif** du code homepage. Il garantit une cohérence parfaite pour la création de nouvelles pages. Pour la vision stratégique future, consulter `DAINAMICS_Plan_Site_Optimise.md`.