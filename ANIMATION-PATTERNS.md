# 🎨 ANIMATION PATTERNS - DAINAMICS

## 📋 Vue d'ensemble

Ce document définit les patterns d'animation **validés et approuvés** pour toutes les pages du site DAINAMICS. Ces animations créent l'expérience moderne, fluide et engageante que nous recherchons.

**Référence**: Page `/solutions/quick-wins` - Commit `ae25053`

---

## 🎯 Philosophie Animation

### Principes Clés

1. **Fluidité** : Toutes les animations utilisent `spring` physics pour un mouvement naturel
2. **Profondeur** : Effets 3D avec `perspective`, `rotateX`, `rotateY` pour la dimension
3. **Parallax** : Éléments bougent à différentes vitesses selon le scroll
4. **Réactivité** : Hover effects prononcés qui donnent du feedback immédiat
5. **Performance** : 60fps minimum, optimisé avec `useTransform` et `useSpring`

### Style Visé

**Inspirations** : Apple, Stripe, Linear, Vercel  
**Mots-clés** : Moderne, Fluide, 3D, Interactif, Smooth, Premium

---

## 🛠️ Imports Nécessaires

```typescript
import { 
  motion, 
  useInView, 
  useScroll, 
  useTransform, 
  useSpring 
} from 'framer-motion';
```

---

## 📐 PATTERNS D'ANIMATION

### 1. 🌊 Parallax Scrolling

**Quand utiliser** : Hero sections, backgrounds, éléments décoratifs

```typescript
// Setup
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

// Application
<motion.div style={{ y: smoothY }}>
  {/* Élément avec parallax */}
</motion.div>

// Variations vitesses
const fastY = useTransform(scrollYProgress, [0, 1], [0, -200]); // Rapide
const slowY = useTransform(scrollYProgress, [0, 1], [0, -50]);  // Lent
```

**Exemples concrets** :
- Blobs flottants en arrière-plan
- Éléments décoratifs (glows, shapes)
- Titres avec effet de profondeur

---

### 2. 🎲 3D Transforms

**Quand utiliser** : Cards, containers, éléments interactifs

```typescript
// Setup de base
<motion.div
  style={{ perspective: 1000 }}
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    z: 50
  }}
  transition={{ duration: 0.3 }}
>
  {/* Contenu */}
</motion.div>

// Variations
// Rotation X (tilt vertical)
rotateX: -10  // Tilt vers l'avant
rotateX: 10   // Tilt vers l'arrière

// Rotation Y (tilt horizontal)
rotateY: -5   // Rotation gauche
rotateY: 5    // Rotation droite

// Scale (zoom)
scale: 1.05   // Zoom léger (hover standard)
scale: 1.1    // Zoom prononcé (CTA important)
scale: 1.02   // Zoom subtil (texte)
```

**Exemples concrets** :
- Cards de solutions avec tilt au hover
- Comparaison Avant/Après avec rotation
- Timeline items avec perspective

---

### 3. ⚡ Stagger Animations

**Quand utiliser** : Listes, grids, éléments répétitifs

```typescript
// Variants container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,  // Délai entre enfants
      delayChildren: 0.2      // Délai avant premier enfant
    }
  }
};

// Variants items
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
  animate={isInView ? "visible" : "hidden"}
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

**Valeurs stagger recommandées** :
- `0.1` : Grid rapide (6+ items)
- `0.15` : Standard (3-6 items)
- `0.2` : Lent, plus dramatique (1-3 items)

---

### 4. 💫 Floating Elements

**Quand utiliser** : Backgrounds, décorations, accents visuels

```typescript
// Mouvement vertical infini
<motion.div
  animate={{
    y: [-10, 10, -10],
    opacity: [0.3, 0.5, 0.3]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="absolute w-32 h-32 bg-primary/10 rounded-full blur-3xl"
/>

// Variations
// Mouvement rapide
duration: 2-3

// Mouvement lent
duration: 5-7

// Mouvement diagonal
animate={{
  x: [-20, 20, -20],
  y: [-10, 10, -10]
}}

// Pulse (scale)
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.6, 0.3]
}}
```

**Exemples concrets** :
- Glows pulsants en arrière-plan
- Particules décoratives
- Shapes géométriques animées

---

### 5. 🎯 Scroll-Triggered Animations

**Quand utiliser** : Sections qui apparaissent au scroll

```typescript
// Setup
const ref = useRef(null);
const isInView = useInView(ref, { 
  once: true,        // Animation une seule fois
  amount: 0.3        // Trigger à 30% visible
});

// Application
<motion.section ref={ref}>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    {/* Contenu */}
  </motion.div>
</motion.section>

// Alternative avec whileInView (plus simple)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  {/* Contenu */}
</motion.div>
```

**Valeurs amount recommandées** :
- `0.1` : Trigger tôt (grids)
- `0.3` : Standard (sections)
- `0.5` : Trigger tard (hero)

---

### 6. 🌟 Glow & Pulse Effects

**Quand utiliser** : Badges, CTA, éléments importants

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
  {/* Élément avec glow */}
</motion.div>

// Glow sur texte
<motion.span
  animate={{ 
    textShadow: [
      "0 0 10px rgba(99,102,241,0.5)",
      "0 0 20px rgba(99,102,241,0.8)",
      "0 0 10px rgba(99,102,241,0.5)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Texte avec glow
</motion.span>
```

**Couleurs glow par type** :
- Success : `rgba(16,185,129,0.5)` - #10B981
- Primary : `rgba(99,102,241,0.5)` - #6366F1
- CTA : `rgba(255,90,0,0.5)` - #FF5A00
- Accent : `rgba(16,228,255,0.5)` - #10E4FF

---

### 7. 🎪 Hover Effects Avancés

**Quand utiliser** : Cards, buttons, liens, éléments interactifs

```typescript
// Hover complet
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    transition: { duration: 0.3 }
  }}
  whileTap={{ scale: 0.95 }}
>
  {/* Card */}
</motion.div>

// Hover subtil (texte, petits éléments)
<motion.div
  whileHover={{ x: 10 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  {/* Texte avec décalage */}
</motion.div>

// Hover rotation (icônes)
<motion.div
  whileHover={{ 
    scale: 1.2,
    rotate: 360
  }}
  transition={{ duration: 0.4 }}
>
  <Icon />
</motion.div>

// Hover magnétique (buttons)
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Button
</motion.button>
```

**Échelle hover recommandée** :
- Texte/petits éléments : `1.02-1.05`
- Cards/containers : `1.05-1.08`
- Buttons/CTA : `1.05-1.1`
- Icônes : `1.2-1.3`

---

### 8. 🔄 Rotation Infinie

**Quand utiliser** : Icônes de chargement, badges dynamiques

```typescript
// Rotation lente (décoratif)
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ 
    duration: 20, 
    repeat: Infinity, 
    ease: "linear" 
  }}
>
  <Sparkles />
</motion.div>

// Rotation rapide (loading)
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ 
    duration: 1, 
    repeat: Infinity, 
    ease: "linear" 
  }}
>
  <Loader />
</motion.div>
```

---

### 9. 📏 Progressive Line Animation

**Quand utiliser** : Timelines, progress bars, dividers

```typescript
// Ligne qui s'anime au scroll
<motion.div 
  className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-success to-transparent"
  initial={{ height: 0 }}
  animate={isInView ? { height: "100%" } : { height: 0 }}
  transition={{ duration: 1.5, delay: 0.8 }}
/>

// Progress bar
<motion.div
  className="h-1 bg-primary"
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 2, ease: "easeOut" }}
/>
```

---

### 10. 🎨 Particules Dynamiques

**Quand utiliser** : Backgrounds interactifs, effets décoratifs

```typescript
// Particules en arrière-plan
<motion.div className="absolute inset-0 pointer-events-none">
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-success/20 rounded-full"
      style={{
        left: `${20 + i * 20}%`,
        top: `${20 + i * 10}%`
      }}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 3 + i,
        repeat: Infinity,
        delay: i * 0.5
      }}
    />
  ))}
</motion.div>
```

---

## 🎭 Combinaisons Recommandées

### Hero Section
```typescript
✅ Parallax background
✅ Stagger text + CTA
✅ 3D card animation côté droit
✅ Floating decorative elements
✅ Glow effects sur badges
```

### Feature Sections
```typescript
✅ Scroll-triggered entrance
✅ Stagger pour les features
✅ Hover 3D sur cards
✅ Progressive lines/dividers
```

### Grid Solutions/Portfolio
```typescript
✅ whileInView pour chaque card
✅ Stagger entre cards
✅ 3D hover effects
✅ Glow sur badges
```

### CTA Sections
```typescript
✅ Scale up au scroll
✅ Magnetic buttons
✅ Glow effects
✅ Stagger buttons
```

---

## ⚙️ Configuration Spring

```typescript
// Standard (fluide et naturel)
{ type: "spring", stiffness: 100, damping: 15 }

// Rapide (réactif)
{ type: "spring", stiffness: 300, damping: 20 }

// Lent (dramatique)
{ type: "spring", stiffness: 50, damping: 10 }

// Très fluide (parallax)
{ stiffness: 100, damping: 30 }
```

---

## 🎯 Delays Recommandés

```typescript
// Hero entrances
Initial text: 0.2s
Stats: 0.6s + stagger 0.1s
CTA: dernier élément

// Sections au scroll
Titre: 0s (immédiat)
Texte: 0.2s
Éléments interactifs: 0.4s

// Stagger grids
Premier: 0s
Suivants: +0.1s ou +0.15s entre chaque
```

---

## 🚫 À Éviter

❌ **Trop d'animations simultanées** (max 3-4 éléments animés en même temps)  
❌ **Animations trop rapides** (min 0.3s pour être perceptibles)  
❌ **Animations trop lentes** (max 1.5s sauf cas spéciaux)  
❌ **Spring trop rebondissant** (damping < 10)  
❌ **Hover effects sans feedback visuel** (toujours scale OU déplacement)  
❌ **Animations qui empêchent l'interaction** (whileTap obligatoire sur clickables)

---

## 📱 Considérations Mobile

```typescript
// Désactiver certaines animations sur mobile
const isMobile = window.innerWidth < 768;

<motion.div
  whileHover={!isMobile ? { scale: 1.05 } : {}}
  // Parallax réduit sur mobile
  style={{ y: isMobile ? 0 : smoothY }}
>
```

---

## 💡 Exemples de Code Complets

### Hero Section Complète
```typescript
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative min-h-screen">
      {/* Floating background */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        style={{ y: smoothY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Title
        </motion.h1>
        <motion.p variants={itemVariants}>
          Description
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button />
        </motion.div>
      </motion.div>
    </section>
  );
};
```

### Card avec 3D Hover
```typescript
<motion.div
  className="glass-morphism rounded-xl p-6"
  initial={{ opacity: 0, y: 30, rotateX: -10 }}
  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    z: 50,
    transition: { duration: 0.3 }
  }}
  style={{ perspective: 1000 }}
>
  {/* Card content */}
</motion.div>
```

---

## 🎬 Checklist Nouvelle Page

Avant de créer une nouvelle page, vérifier :

- [ ] Parallax sur hero background
- [ ] Stagger animations sur premier contenu
- [ ] 3D hover effects sur cards/containers
- [ ] Scroll-triggered animations (whileInView)
- [ ] Glow effects sur badges/CTA importants
- [ ] Floating decorative elements
- [ ] Spring physics sur interactions
- [ ] Delays progressifs cohérents
- [ ] Mobile optimizations
- [ ] Performance 60fps

---

## 🔗 Références

- **Page de référence** : `/solutions/quick-wins` (Commit `ae25053`)
- **Framer Motion Docs** : https://www.framer.com/motion
- **Design System** : `DAINAMICS_Design_System_v2_Complete.md`

---

**VERSION** : 1.0  
**DATE** : 12 Octobre 2025  
**STATUT** : ✅ Validé et approuvé par le client  
**AUTEUR** : Claude (Anthropic)

**🎨 Ce style d'animation est maintenant le STANDARD pour toutes les pages DAINAMICS**