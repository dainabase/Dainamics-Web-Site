# 🎨 ANIMATION GUIDELINES - Style Approuvé Client

**VERSION:** 1.0  
**DATE:** 12 Octobre 2025  
**STATUT:** ✅ Validé Client - "MEGA FAN" de ce style  
**RÉFÉRENCE:** QuickWins.tsx (869 lignes, 39 KB)

---

## 🎯 Vue d'Ensemble

Le style d'animation de **QuickWins.tsx** est **approuvé client** et **DOIT être reproduit** sur toutes les nouvelles pages.

**Caractéristiques:**
- Animations Framer Motion avancées
- Approche pédagogique (2 colonnes texte + animation)
- Parallax scrolling fluide
- 3D transforms au hover
- Scroll-triggered progressif
- Effets visuels riches (glow, floating, stagger)

---

## 📦 Imports Standard

```typescript
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
```

**Hooks utilisés:**
- `useScroll()` - Position de scroll
- `useTransform()` - Mapping de valeurs
- `useSpring()` - Transitions smooth
- `useInView()` - Détection viewport

---

## 🎬 8 Patterns d'Animation Principaux

### 1. Parallax Scrolling 🌊

**Usage:** Éléments de fond qui se déplacent à vitesse différente du scroll.

```typescript
// Setup
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

// Application
<motion.div style={{ y: smoothY }}>
  {/* Élément avec parallax */}
</motion.div>

// Variations
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
```

**Où l'utiliser:**
- Éléments flottants en arrière-plan
- Sections hero
- Particules décoratives

---

### 2. 3D Transforms ✨

**Usage:** Effets de profondeur au hover.

```typescript
// Card avec rotation 3D
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    z: 50
  }}
  style={{ perspective: 1000 }}
>
  {/* Contenu */}
</motion.div>

// Variation avec rotateX
<motion.div
  initial={{ opacity: 0, y: 50, rotateX: 10 }}
  animate={{ opacity: 1, y: 0, rotateX: 0 }}
  style={{ perspective: 1000 }}
>
```

**⚠️ OBLIGATOIRE:** `perspective: 1000` sur le parent pour effet 3D.

**Où l'utiliser:**
- Cards de solutions
- Cards témoignages
- Éléments interactifs

---

### 3. Spring Physics 🎪

**Usage:** Mouvements naturels et rebondissants.

```typescript
// Configuration standard
transition={{ 
  type: "spring",
  stiffness: 100,
  damping: 15,
  duration: 0.8
}}

// Application sur bouton
<motion.div 
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
```

**Paramètres:**
- `stiffness: 100` - Standard (300-400 pour réactif)
- `damping: 15` - Contrôle le rebond
- `duration: 0.8` - Durée totale

**Où l'utiliser:**
- Tous les boutons
- Cards au hover
- Éléments interactifs

---

### 4. Scroll-Triggered Animations 🎯

**Usage:** Animations qui se déclenchent au scroll dans le viewport.

```typescript
// Configuration standard
<motion.div
  initial={{ opacity: 0, y: 30, rotateX: -10 }}
  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

**Options viewport:**
- `once: true` - Animation une seule fois (PERFORMANCE)
- `amount: 0.2` - Déclenche à 20% visible
- `amount: 0.1` - Pour listes longues

**Où l'utiliser:**
- Sections au scroll
- Lists d'éléments
- Grids de solutions

---

### 5. Floating Elements 💫

**Usage:** Éléments qui flottent en boucle.

```typescript
// Mouvement vertical
<motion.div
  animate={{
    y: [-20, 20, -20],
    opacity: [0.2, 0.5, 0.2]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>

// Variation avec scale
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3]
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

**Où l'utiliser:**
- Éléments de fond décoratifs
- Particules
- Orbes de couleur

---

### 6. Glow Effects ✨

**Usage:** Effets lumineux animés.

```typescript
// Glow pulsant
<motion.div
  animate={{
    boxShadow: [
      "0 0 10px rgba(16,185,129,0.3)",
      "0 0 20px rgba(16,185,129,0.5)",
      "0 0 10px rgba(16,185,129,0.3)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
>

// Glow sur texte
<motion.div
  animate={{ 
    textShadow: [
      "0 0 10px rgba(16,185,129,0.5)",
      "0 0 20px rgba(16,185,129,0.8)",
      "0 0 10px rgba(16,185,129,0.5)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

**Couleurs Design System:**
- Success: `rgba(16,185,129,0.X)` - #10B981
- Primary: `rgba(99,102,241,0.X)` - #6366F1
- CTA: `rgba(255,90,0,0.X)` - #FF5A00

**Où l'utiliser:**
- Badges Quick Win
- Éléments importants
- CTAs principaux

---

### 7. Stagger Children 🎭

**Usage:** Animations échelonnées sur liste d'éléments.

```typescript
// Variants parent
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Variants enfants
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Application
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Contenu */}
    </motion.div>
  ))}
</motion.div>
```

**Paramètres:**
- `staggerChildren: 0.15` - Délai entre éléments (150ms)
- `delayChildren: 0.2` - Délai avant première animation

**Où l'utiliser:**
- Lists de features
- Grids de solutions
- Étapes de processus

---

### 8. Magnetic Hover 🧲

**Usage:** Effet magnétique au hover avec rotation.

```typescript
// Bouton magnétique
<motion.div
  whileHover={{ 
    scale: 1.1,
    rotate: 360
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.6 }}
>

// Variation sans rotation
<motion.div
  whileHover={{ 
    scale: 1.2,
    backgroundColor: "rgba(16,185,129,0.4)"
  }}
  transition={{ duration: 0.4 }}
>
```

**Où l'utiliser:**
- Icons dans les listes
- Badges
- Petits éléments interactifs

---

## 🏗️ Structure Type d'une Page

### Pattern Validé (QuickWins.tsx)

```typescript
export default function MaPage() {
  // 1. REFS pour sections
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  // 2. SCROLL ANIMATIONS
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  // 3. VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-dainamics-background">
      <EnhancedGridBackground />
      <Navigation />

      <main className="relative z-10">
        {/* HERO - 2 colonnes */}
        <section ref={heroRef} className="relative min-h-[80vh] py-32 overflow-hidden">
          {/* Éléments flottants avec parallax */}
          <motion.div style={{ y: smoothY }}>
            {/* Orbes de couleur */}
          </motion.div>

          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* GAUCHE - Texte avec stagger */}
              <motion.div
                className="lg:w-1/2"
                variants={containerVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                <motion.h1 variants={itemVariants}>
                  {/* Titre */}
                </motion.h1>
                <motion.p variants={itemVariants}>
                  {/* Description */}
                </motion.p>
                <motion.div variants={itemVariants}>
                  {/* CTAs */}
                </motion.div>
              </motion.div>

              {/* DROITE - Animation pédagogique */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isHeroInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                style={{ perspective: 1000 }}
              >
                {/* Timeline, Diagramme, ou autre animation */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION CONTENU - 2 colonnes inversées */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Texte droite */}
              {/* Animation gauche */}
            </div>
          </div>
        </section>

        {/* GRID SOLUTIONS */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                  style={{ perspective: 1000 }}
                >
                  {/* Card contenu */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>{/* Titre */}</h2>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Bouton CTA */}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
```

---

## 🎨 Classes CSS Spéciales

### Tailwind + Custom

```typescript
// Glass morphism
className="glass-morphism rounded-xl p-6 border border-dainamics-success/20 backdrop-blur-xl"

// Gradient text
className="text-gradient"           // Multi-color gradient
className="text-gradient-primary"   // Primary color gradient
className="glow"                    // Text glow effect

// Buttons
className="btn-glow"                // Glow effect on button
className="power-pulse"             // Pulse animation

// Animations
className="animate-pulse-glow"      // Pulsing glow
```

### Couleurs Design System (OBLIGATOIRES)

```typescript
// Couleurs principales
const COLORS = {
  primary: '#6366F1',      // Indigo - Tech/IA
  cta: '#FF5A00',          // Orange - CTA
  accent: '#10E4FF',       // Cyan - Automatisation
  success: '#10B981',      // Green - Quick Wins
  warning: '#F59E0B',      // Yellow
  error: '#EF4444',        // Red
  background: '#0A0A0F',   // Dark Navy
  light: '#F1F5F9'         // Light text
};

// Mappings catégories
const CATEGORY_COLORS = {
  'ia': '#6366F1',
  'automatisation': '#10E4FF',
  'developpement': '#FF5A00'
};

// Mappings complexité
const COMPLEXITY_COLORS = {
  'starter': '#10B981',
  'intermediate': '#F59E0B',
  'advanced': '#EF4444'
};
```

---

## 📐 Approche Pédagogique

### Principe des 2 Colonnes

**Toujours:**
- **Gauche/Droite:** Texte explicatif
- **Droite/Gauche:** Animation qui illustre le concept

**Types d'animations pédagogiques:**
1. **Timeline** - Processus séquentiels (déploiement, ROI)
2. **Avant/Après** - Comparaisons visuelles
3. **Diagramme** - Relations entre concepts
4. **Schéma** - Architecture technique
5. **Icons flottants** - Concepts multiples

**Exemple QuickWins:**
- Hero: Timeline ROI avec icônes animées
- Why: Comparaison Avant/Après en cards 3D

---

## ⚡ Performance

### Optimisations OBLIGATOIRES

```typescript
// 1. once: true pour scroll animations
viewport={{ once: true, amount: 0.2 }}

// 2. Spring physics pour smoothness
transition={{ type: "spring", stiffness: 100, damping: 15 }}

// 3. Stagger pour échelonner
staggerChildren: 0.15

// 4. Transform au lieu de position (GPU)
// ✅ BON
whileHover={{ scale: 1.05, rotateY: 5 }}

// ❌ MAUVAIS
whileHover={{ left: 10, top: 10 }}
```

### Métriques Cibles
- **60fps** - Animations fluides
- **Lighthouse > 90** - Performance globale
- **CLS < 0.1** - Stabilité visuelle

---

## 🎯 Variations par Type de Page

### Page Solutions / Industries

```typescript
// Grid avec filtres animés
<motion.button
  whileHover={{ scale: 1.05 }}
  className="magnetic-effect"
>
  {/* Filtre catégorie */}
</motion.button>

// Cards avec hover 3D prononcé
whileHover={{ 
  scale: 1.08,
  rotateY: 8,
  z: 80
}}
```

### Page Portfolio / Témoignages

```typescript
// Cards avec reveal progressif
initial={{ opacity: 0, y: 40, scale: 0.9 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}

// Logos partenaires flottants
animate={{
  y: [-5, 5, -5],
  rotate: [-2, 2, -2]
}}
```

### Page Expertise / Process

```typescript
// Steps avec connexions animées
<motion.div
  className="line-connector"
  initial={{ height: 0 }}
  whileInView={{ height: "100%" }}
  transition={{ duration: 1.5 }}
/>

// Icons avec rotation au hover
whileHover={{ 
  scale: 1.2,
  rotate: 360
}}
```

---

## 🚨 RÈGLES ABSOLUES

### ✅ À FAIRE

1. **Toujours** utiliser `viewport={{ once: true }}` sur `whileInView`
2. **Toujours** utiliser `type: "spring"` pour transitions naturelles
3. **Toujours** utiliser `perspective: 1000` pour 3D transforms
4. **Toujours** utiliser couleurs Design System (CATEGORY_COLORS, etc.)
5. **Toujours** stagger animations sur listes/grids
6. **Toujours** approche 2 colonnes (texte + animation)

### ❌ À ÉVITER

1. **Jamais** d'animations sans `once: true` (performance)
2. **Jamais** de couleurs hardcodées hors Design System
3. **Jamais** de position CSS animée (utiliser transform)
4. **Jamais** d'animations > 4s (trop long)
5. **Jamais** de stagger > 0.2s (trop lent)
6. **Jamais** d'animations sans mobile-first

---

## 📱 Mobile-First

### Adaptations Responsive

```typescript
// Désactiver 3D sur mobile
const isMobile = window.innerWidth < 768;

<motion.div
  whileHover={!isMobile ? { 
    scale: 1.05,
    rotateY: 5
  } : { scale: 1.02 }}
>

// Réduire parallax sur mobile
const y = useTransform(
  scrollYProgress, 
  [0, 1], 
  isMobile ? [0, -30] : [0, -100]
);
```

### Classes Responsive

```typescript
// Grid adaptatif
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"

// Texte responsive
className="text-3xl md:text-4xl lg:text-5xl"

// Padding responsive
className="py-12 md:py-20 lg:py-32"
```

---

## 🔍 Exemples Concrets

### Hero Section Complete

```typescript
<section ref={heroRef} className="relative min-h-[80vh] py-32 overflow-hidden">
  {/* Orbe flottant gauche */}
  <motion.div
    className="absolute top-20 left-10 w-32 h-32 rounded-full bg-dainamics-success/10 blur-3xl"
    style={{ y: smoothY }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* Orbe flottant droit */}
  <motion.div
    className="absolute top-40 right-20 w-40 h-40 rounded-full bg-dainamics-primary/10 blur-3xl"
    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.2, 0.4, 0.2]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }}
  />

  <div className="container mx-auto px-4 md:px-8">
    <motion.div 
      className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      style={{ scale: smoothScale, opacity }}
    >
      {/* Texte gauche */}
      <motion.div
        className="lg:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
      >
        <motion.h1 variants={itemVariants}>
          <span className="text-gradient">Titre Principal</span>
        </motion.h1>
        
        <motion.p variants={itemVariants}>
          Description du contenu...
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="btn-glow power-pulse">
              CTA Principal
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animation droite */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={isHeroInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        style={{ perspective: 1000 }}
      >
        <div className="glass-morphism rounded-xl p-8">
          {/* Contenu animation */}
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
```

### Card Solution avec Hover 3D

```typescript
<motion.div
  initial={{ opacity: 0, y: 30, rotateX: -10 }}
  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ 
    duration: 0.6, 
    delay: idx * 0.1,
    type: "spring",
    stiffness: 100
  }}
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    z: 50
  }}
  style={{ perspective: 1000 }}
>
  <div className="glass-morphism rounded-xl p-6 h-full group hover:border-dainamics-success/30 transition-all">
    {/* Badge avec pulse */}
    <motion.span 
      className="inline-flex items-center px-2 py-1 bg-dainamics-success/20 border border-dainamics-success/30 rounded-full"
      animate={{
        boxShadow: [
          "0 0 10px rgba(16,185,129,0.3)",
          "0 0 20px rgba(16,185,129,0.5)",
          "0 0 10px rgba(16,185,129,0.3)"
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Zap className="h-3 w-3 text-dainamics-success" />
    </motion.span>

    {/* Titre avec hover color */}
    <h4 className="text-xl font-bold text-dainamics-light mb-3 group-hover:text-dainamics-success transition-colors">
      {solution.title}
    </h4>

    {/* CTA avec arrow animée */}
    <motion.div whileHover={{ x: 5 }}>
      <Button variant="link">
        En savoir plus
        <motion.div
          className="inline-block ml-2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </Button>
    </motion.div>
  </div>
</motion.div>
```

---

## 📚 Référence Complète

### Fichiers à Consulter

1. **QuickWins.tsx** (869 lignes) - Référence principale
2. **Hero.tsx** (23 KB) - Animations cerveau
3. **IntelligenceCenter.tsx** (22 KB) - Particules canvas
4. **DESIGN-SYSTEM-MANDATORY.md** - Couleurs/icônes

### Documentation Externe

- [Framer Motion](https://www.framer.com/motion/) - API complète
- [Lucide Icons](https://lucide.dev) - v0.263.1
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility classes

---

## ✅ Checklist Avant Commit

**Animation Quality:**
- [ ] `viewport={{ once: true }}` sur tous `whileInView`
- [ ] `type: "spring"` sur toutes transitions
- [ ] `perspective: 1000` sur tous 3D transforms
- [ ] Stagger utilisé sur listes/grids
- [ ] Floating elements avec `repeat: Infinity`
- [ ] Glow effects sur éléments importants

**Design System:**
- [ ] CATEGORY_COLORS utilisés
- [ ] COMPLEXITY_COLORS utilisés
- [ ] Pas de HEX hardcodé
- [ ] Icônes Lucide vérifiées lucide.dev
- [ ] Classes glass-morphism, text-gradient utilisées

**Performance:**
- [ ] Animations < 4s
- [ ] Stagger < 0.2s
- [ ] Transform utilisé (pas position)
- [ ] Mobile-first testé

**Structure:**
- [ ] Approche 2 colonnes (texte + animation)
- [ ] Hero avec parallax
- [ ] Grid avec scroll-triggered
- [ ] CTA final centré

---

## 🎉 Résultat Attendu

**Quand ces guidelines sont suivies:**
- ✅ Animations fluides 60fps
- ✅ Expérience immersive
- ✅ Cohérence visuelle totale
- ✅ Performance optimale
- ✅ Client satisfait (MEGA FAN)

**Style QuickWins = Standard qualité DAINAMICS** 🚀

---

**VERSION:** 1.0  
**DERNIÈRE MAJ:** 12 Octobre 2025  
**STATUT:** ✅ Validé et Approuvé Client