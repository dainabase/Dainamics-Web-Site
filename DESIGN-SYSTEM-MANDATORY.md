# 🎨 DESIGN SYSTEM OBLIGATOIRE - DAINAMICS

> **RÈGLE CRITIQUE**: Tous les fichiers de code, components, et data DOIVENT utiliser EXACTEMENT ce Design System.  
> **RÉFÉRENCE COMPLÈTE**: Voir ARCHITECTURE.md (lignes 100-800) pour spécifications détaillées.

---

## ⚠️ IMPORTANCE ABSOLUE

**CE DOCUMENT EST LA SOURCE DE VÉRITÉ POUR TOUTE COHÉRENCE VISUELLE DU SITE.**

Chaque développeur, chaque prompt à Claude Code, chaque nouveau fichier DOIT:
1. ✅ Référencer explicitement ce document
2. ✅ Utiliser les couleurs EXACTES définies ici
3. ✅ Utiliser UNIQUEMENT les icônes Lucide React listées
4. ✅ Respecter les mappings catégories → couleurs
5. ✅ Appliquer les standards typographiques

**AUCUNE EXCEPTION N'EST TOLÉRÉE** pour garantir une cohérence parfaite du site.

---

## 🎨 PALETTE COULEURS EXACTE

### Couleurs Principales (Primary Colors)

```typescript
// Couleurs de base - À utiliser dans TOUS les fichiers

export const DESIGN_SYSTEM_COLORS = {
  // PRIMARY - Indigo (Tech/IA)
  primary: '#6366F1',           // Couleur principale
  
  // CTA - Orange (Call-to-Action)
  cta: '#FF5A00',               // Boutons d'action principaux
  
  // ACCENT - Cyan (Automatisation)
  accent: '#10E4FF',            // Accents/Highlights
  
  // SUCCESS - Green (Validation)
  success: '#10B981',           // États de succès
  
  // WARNING - Yellow (Attention)
  warning: '#F59E0B',           // États d'attention
  
  // ERROR - Red (Erreur)
  error: '#EF4444',             // États d'erreur
  
  // BACKGROUND - Dark Navy
  background: '#0A0A0F',        // Fond principal
  
  // LIGHT - Gris clair
  light: '#F1F5F9',             // Texte clair/Éléments clairs
} as const;
```

### Tailwind CSS Classes Correspondantes

```typescript
// Classes Tailwind à utiliser dans les components

const TAILWIND_COLORS = {
  primary: 'dainamics-primary',           // #6366F1
  cta: 'dainamics-cta',                   // #FF5A00
  accent: 'dainamics-accent',             // #10E4FF
  success: 'dainamics-success',           // #10B981
  warning: 'dainamics-warning',           // #F59E0B
  error: 'dainamics-error',               // #EF4444
  background: 'dainamics-background',     // #0A0A0F
  light: 'dainamics-light',               // #F1F5F9
};

// Exemples d'utilisation:
// className="bg-dainamics-primary text-dainamics-light"
// className="border-dainamics-accent text-dainamics-accent"
// className="bg-dainamics-cta hover:bg-dainamics-cta/90"
```

---

## 🎯 MAPPINGS OBLIGATOIRES

### 1. Catégories Solutions → Couleurs

**À utiliser dans TOUS les fichiers data (solutions.ts, portfolio.ts, etc.)**

```typescript
// Mapping EXACT des catégories vers couleurs

export const CATEGORY_COLORS = {
  'ia': '#6366F1',              // Primary Indigo
  'automatisation': '#10E4FF',   // Accent Cyan
  'developpement': '#FF5A00'     // CTA Orange
} as const;

// Type TypeScript strict
export type Category = 'ia' | 'automatisation' | 'developpement';

// Fonction helper pour obtenir la couleur d'une catégorie
export const getCategoryColor = (category: Category): string => {
  return CATEGORY_COLORS[category];
};

// Exemple d'utilisation dans un component:
const categoryColor = getCategoryColor(project.category);
// Retourne: '#6366F1' si category === 'ia'
```

### 2. Complexité → Couleurs Badges

**À utiliser pour tous les indicateurs de complexité/difficulté**

```typescript
// Mapping EXACT des niveaux de complexité vers couleurs

export const COMPLEXITY_COLORS = {
  'starter': '#10B981',          // Success Green
  'intermediate': '#F59E0B',     // Warning Yellow
  'advanced': '#EF4444'          // Error Red
} as const;

// Type TypeScript strict
export type Complexity = 'starter' | 'intermediate' | 'advanced';

// Fonction helper
export const getComplexityColor = (complexity: Complexity): string => {
  return COMPLEXITY_COLORS[complexity];
};

// Exemple d'utilisation:
const badgeColor = getComplexityColor('starter');
// Retourne: '#10B981'
```

### 3. Labels Complexité (Affichage UI)

```typescript
export const COMPLEXITY_LABELS = {
  'starter': 'Quick to implement',
  'intermediate': 'Moderate complexity',
  'advanced': 'Complex implementation'
} as const;
```

---

## 🎭 ICÔNES LUCIDE REACT UNIQUEMENT

### Source Officielle

**Bibliothèque**: Lucide React v0.263.1  
**Vérification**: https://lucide.dev  
**Format**: PascalCase (exemple: `MessageSquare`, `FileText`, `TrendingUp`)

### ⚠️ RÈGLE CRITIQUE: Vérification Obligatoire

**AVANT d'utiliser une icône dans le code:**
1. 🔍 Aller sur https://lucide.dev
2. 🔎 Chercher l'icône par nom
3. ✅ Copier le nom EXACT en PascalCase
4. ❌ NE JAMAIS inventer ou deviner un nom d'icône

### Icônes Recommandées par Contexte

```typescript
// Import Lucide React
import { 
  // IA / Intelligence
  Brain,              // Intelligence artificielle
  Sparkles,           // Magic/IA générative
  Cpu,                // Computing/Processing
  
  // Automatisation / Speed
  Zap,                // Vitesse/Automatisation
  Rocket,             // Lancement/Accélération
  Timer,              // Timing/Efficacité
  
  // Développement / Code
  Code,               // Code/Développement
  Terminal,           // CLI/Terminal
  Package,            // Packages/Modules
  
  // ROI / Métriques
  TrendingUp,         // Croissance/ROI positif
  TrendingDown,       // Décroissance
  BarChart,           // Graphiques/Analytics
  DollarSign,         // CHF/Économies
  
  // Temps / Performance
  Clock,              // Temps/Durée
  Gauge,              // Performance
  FastForward,        // Accélération
  
  // Success / Validation
  CheckCircle,        // Succès/Validation
  Award,              // Récompenses/Achievements
  Star,               // Featured/Important
  Shield,             // Sécurité/Protection
  
  // Business / Entreprise
  Building,           // Entreprise/Client
  Briefcase,          // Business/Professionnel
  Users,              // Équipe/Collaboration
  Target,             // Objectifs/Goals
  
  // Documentation / Info
  FileText,           // Documents
  BookOpen,           // Guides/Learning
  Info,               // Information
  HelpCircle,         // Aide/FAQ
  
  // Actions / UI
  ExternalLink,       // Liens externes
  Download,           // Téléchargement
  Upload,             // Upload
  Search,             // Recherche
  Filter,             // Filtres
  Settings,           // Paramètres
  
  // Communication
  MessageSquare,      // Messages/Chat
  Mail,               // Email
  Phone,              // Téléphone
  Calendar,           // Calendrier
  
} from 'lucide-react';
```

### Format d'Utilisation dans Data Files

**Dans les fichiers .ts (solutions, portfolio, etc.):**

```typescript
// ✅ CORRECT - String avec nom exact
interface Solution {
  icon: string;  // Nom string pour utilisation dynamique
}

const solution = {
  id: 'facturation',
  title: 'Facturation Électronique',
  icon: 'FileText',  // ✅ Nom exact Lucide
  // ...
};

// ❌ INCORRECT - NE PAS importer directement dans data files
import { FileText } from 'lucide-react';  // ❌ Éviter
const solution = {
  icon: FileText,  // ❌ Ne pas faire
};
```

**Dans les components .tsx:**

```tsx
// ✅ CORRECT - Import dynamique
import * as LucideIcons from 'lucide-react';

function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = LucideIcons[solution.icon as keyof typeof LucideIcons];
  
  return (
    <div>
      {Icon && <Icon className="w-6 h-6 text-dainamics-primary" />}
      <h3>{solution.title}</h3>
    </div>
  );
}
```

---

## 📐 STANDARDS TYPOGRAPHIQUES

### Fonts

```typescript
export const FONTS = {
  body: 'Inter',           // Corps de texte
  heading: 'Cal Sans',     // Titres (fallback: Inter Bold)
  mono: 'Fira Code'        // Code/Technique
} as const;
```

### Tailles Texte (Tailwind)

```typescript
// Classes Tailwind pour textes
const TEXT_SIZES = {
  // Display (Hero titles)
  'display-xl': 'text-7xl',      // 72px
  'display-lg': 'text-6xl',      // 60px
  'display-md': 'text-5xl',      // 48px
  
  // Headings
  'h1': 'text-4xl',              // 36px
  'h2': 'text-3xl',              // 30px
  'h3': 'text-2xl',              // 24px
  'h4': 'text-xl',               // 20px
  'h5': 'text-lg',               // 18px
  
  // Body
  'body-xl': 'text-xl',          // 20px
  'body-lg': 'text-lg',          // 18px
  'body': 'text-base',           // 16px
  'body-sm': 'text-sm',          // 14px
  'body-xs': 'text-xs',          // 12px
};
```

---

## 🔄 WORKFLOW DE VÉRIFICATION

### Avant CHAQUE Commit

**Checklist Design System:**

```bash
# 1. Vérifier couleurs
grep -r "#" src/ | grep -v "dainamics-" | grep "color"
# Doit retourner uniquement couleurs du Design System

# 2. Vérifier icônes Lucide
grep -r "from 'lucide-react'" src/
# Vérifier que tous les noms existent sur https://lucide.dev

# 3. Vérifier mappings catégories
grep -r "category.*:" src/data/
# Doit contenir uniquement: 'ia', 'automatisation', 'developpement'

# 4. Vérifier mappings complexité
grep -r "complexity.*:" src/data/
# Doit contenir uniquement: 'starter', 'intermediate', 'advanced'
```

### Validation TypeScript

```typescript
// Type guard pour catégories
function isValidCategory(value: string): value is Category {
  return ['ia', 'automatisation', 'developpement'].includes(value);
}

// Type guard pour complexité
function isValidComplexity(value: string): value is Complexity {
  return ['starter', 'intermediate', 'advanced'].includes(value);
}

// Utilisation:
if (!isValidCategory(data.category)) {
  throw new Error(`Invalid category: ${data.category}`);
}
```

---

## 📚 EXEMPLES D'UTILISATION CORRECTE

### Exemple 1: Fichier Data (solutions.ts)

```typescript
// ✅ CORRECT

import { CATEGORY_COLORS, COMPLEXITY_COLORS } from '@/config/design-system';

interface Solution {
  id: string;
  title: string;
  category: 'ia' | 'automatisation' | 'developpement';  // ✅ Union type strict
  complexity: 'starter' | 'intermediate' | 'advanced';  // ✅ Union type strict
  icon: string;  // ✅ Nom icône Lucide en string
  // ...
}

export const solutions: Solution[] = [
  {
    id: 'facturation',
    title: 'Facturation Électronique',
    category: 'automatisation',  // ✅ Valeur valide
    complexity: 'starter',        // ✅ Valeur valide
    icon: 'FileText',             // ✅ Icône Lucide vérifiée
    // ...
  }
];

// Export helpers avec couleurs
export const getCategoryColor = (category: Solution['category']) => {
  return CATEGORY_COLORS[category];
};
```

### Exemple 2: Component React

```tsx
// ✅ CORRECT

import * as LucideIcons from 'lucide-react';
import { getCategoryColor } from '@/data/solutions';

interface SolutionCardProps {
  solution: Solution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  // Import dynamique icône
  const Icon = LucideIcons[solution.icon as keyof typeof LucideIcons];
  
  // Obtenir couleur catégorie
  const categoryColor = getCategoryColor(solution.category);
  
  return (
    <div 
      className="bg-dainamics-background border rounded-lg p-6"
      style={{ borderColor: categoryColor }}  // ✅ Utilise couleur Design System
    >
      {/* Icône avec couleur catégorie */}
      {Icon && (
        <Icon 
          className="w-8 h-8" 
          style={{ color: categoryColor }}  // ✅ Couleur dynamique
        />
      )}
      
      {/* Titre */}
      <h3 className="text-dainamics-light font-semibold mt-4">
        {solution.title}
      </h3>
      
      {/* Badge catégorie avec couleur correcte */}
      <span 
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2"
        style={{ 
          backgroundColor: `${categoryColor}20`,  // ✅ Opacity 20%
          color: categoryColor 
        }}
      >
        {solution.category}
      </span>
    </div>
  );
}
```

---

## 🚨 ERREURS FRÉQUENTES À ÉVITER

### ❌ Erreur 1: Couleurs Hardcodées

```typescript
// ❌ INCORRECT
const Card = () => (
  <div className="bg-blue-500 text-white">
    {/* ... */}
  </div>
);

// ✅ CORRECT
const Card = () => (
  <div className="bg-dainamics-primary text-dainamics-light">
    {/* ... */}
  </div>
);
```

### ❌ Erreur 2: Icônes Inventées

```typescript
// ❌ INCORRECT - Icône qui n'existe pas
icon: 'RobotAI'  // N'existe pas dans Lucide

// ✅ CORRECT - Vérifiée sur lucide.dev
icon: 'Brain'  // Existe dans Lucide
```

### ❌ Erreur 3: Catégories Incorrectes

```typescript
// ❌ INCORRECT
category: 'AI'  // Doit être 'ia'
category: 'automation'  // Doit être 'automatisation'
category: 'dev'  // Doit être 'developpement'

// ✅ CORRECT
category: 'ia'
category: 'automatisation'
category: 'developpement'
```

### ❌ Erreur 4: Complexité Incorrecte

```typescript
// ❌ INCORRECT
complexity: 'easy'  // Doit être 'starter'
complexity: 'medium'  // Doit être 'intermediate'
complexity: 'hard'  // Doit être 'advanced'

// ✅ CORRECT
complexity: 'starter'
complexity: 'intermediate'
complexity: 'advanced'
```

---

## 📖 RÉFÉRENCES COMPLÈTES

### Documents Officiels

1. **ARCHITECTURE.md** (lignes 100-800)
   - Palette couleurs complète
   - Typographie détaillée
   - Components styling
   - Animations

2. **WORKFLOW.md** (lignes 50-150)
   - Standards de code
   - Conventions nommage
   - Structure fichiers

3. **Lucide Icons Official**
   - URL: https://lucide.dev
   - Version: v0.263.1
   - Format: PascalCase

### Exemples Code Complets

Voir dans le repository:
- `src/data/solutions.ts` - Exemple data file complet
- `src/data/portfolio.ts` - Exemple data file complet (à créer)
- `src/components/common/Card.tsx` - Exemple component
- `src/components/common/Badge.tsx` - Exemple badges

---

## ✅ CHECKLIST FINALE AVANT COMMIT

**Avant CHAQUE commit, vérifier:**

- [ ] Toutes les couleurs utilisent classes `dainamics-*` ou constants Design System
- [ ] Toutes les icônes existent sur https://lucide.dev
- [ ] Toutes les catégories sont: 'ia', 'automatisation', ou 'developpement'
- [ ] Toutes les complexités sont: 'starter', 'intermediate', ou 'advanced'
- [ ] Mappings `CATEGORY_COLORS` et `COMPLEXITY_COLORS` utilisés
- [ ] Aucune couleur HEX hardcodée sauf constants Design System
- [ ] TypeScript strict sans `any`
- [ ] Aucun emoji dans le code
- [ ] Cohérence visuelle avec reste du site

---

## 🎯 RÉSUMÉ RÈGLES D'OR

1. **Couleurs**: UNIQUEMENT Design System (`#6366F1`, `#FF5A00`, `#10E4FF`, etc.)
2. **Icônes**: UNIQUEMENT Lucide React (vérifier sur lucide.dev)
3. **Catégories**: UNIQUEMENT `'ia'`, `'automatisation'`, `'developpement'`
4. **Complexité**: UNIQUEMENT `'starter'`, `'intermediate'`, `'advanced'`
5. **Mappings**: TOUJOURS utiliser `CATEGORY_COLORS` et `COMPLEXITY_COLORS`
6. **TypeScript**: TOUJOURS types stricts, jamais `any`
7. **Vérification**: TOUJOURS vérifier icônes sur lucide.dev avant usage
8. **Cohérence**: TOUJOURS référencer ce document dans prompts

---

**VERSION**: 1.0  
**DATE**: 11 Octobre 2025  
**STATUS**: 🔒 DOCUMENT CRITIQUE - NE PAS MODIFIER SANS VALIDATION  
**RÉFÉRENCE**: ARCHITECTURE.md lignes 100-800 pour détails complets

---

**🚨 RAPPEL FINAL**: La cohérence visuelle du site DÉPEND de l'application STRICTE de ce Design System dans CHAQUE fichier créé ou modifié. AUCUNE exception n'est tolérée.
