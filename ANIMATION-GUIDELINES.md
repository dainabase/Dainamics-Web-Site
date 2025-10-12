# 🎨 ANIMATION GUIDELINES - DAINAMICS v1.0

## 🎯 Philosophy

**Style validé sur QuickWins.tsx** - Animations fluides, modernes, et professionnelles inspirées de sites premium (Stripe, Apple, Linear).

### Principes Clés
1. **Subtilité** - Animations présentes mais jamais distrayantes
2. **Performance** - 60fps minimum, optimisé pour mobile
3. **Cohérence** - Patterns réutilisables sur toutes les pages
4. **Interaction** - Réagit au scroll, hover, et viewport
5. **Physics** - Mouvements naturels avec spring animations

---

## 🚀 Stack Animation

```typescript
import { 
  motion, 
  useInView, 
  useScroll, 
  useTransform, 
  useSpring 
} from 'framer-motion';
```

### Hooks Essentiels
- `useScroll()` - Détecte position scroll
- `useTransform()` - Transforme valeurs scroll en animations
- `useSpring()` - Adoucit les animations
- `useInView()` - Détecte éléments visibles
- `whileHover` - Animations hover
- `whileInView` - Animations viewport

---

## 📐 Patterns d'Animation Validés

### 1. Parallax Scrolling ⭐

**Utilisé pour:** Backgrounds, éléments décoratifs, hero sections

```typescript
// Dans le composant
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

// Application
<motion.div
  style={{ y: smoothY }}
  className="absolute top-20 left-10 w-32 h-32 bg-primary/10 blur-3xl"
/>
```

**Variations:**
- Éléments qui montent: `[0, -100]`
- Éléments qui descendent: `[0, 100]`
- Opacité parallax: `useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])`

---

### 2. 3D Transform Cards ⭐⭐⭐

**Utilisé pour:** Cards, modals, sections importantes

```typescript
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    z: 50,
    transition: { duration: 0.3 }
  }}
  style={{ perspective: 1000 }}
  className="glass-morphism rounded-xl p-6"
>
  {/* Contenu */}
</motion.div>
```

**Variations:**
- Cards gauche: `rotateY: 5`
- Cards droite: `rotateY: -5`
- Cards centrées: `rotateX: -5`
- Scale: `1.02` (subtle) à `1.1` (prononcé)

---

### 3. Floating Elements ⭐

**Utilisé pour:** Backgrounds, particules, éléments décoratifs

```typescript
<motion.div
  animate={{
    y: [-10, 10, -10],
    opacity: [0.2, 0.5, 0.2]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="absolute w-32 h-32 bg-success/10 blur-3xl"
/>
```

**Variations:**
- Mouvement vertical: `y: [-10, 10, -10]`
- Mouvement horizontal: `x: [-20, 20, -20]`
- Rotation: `rotate: [0, 360]`
- Scale pulsing: `scale: [1, 1.2, 1]`

---

### 4. Scroll-Triggered Entrance ⭐⭐

**Utilisé pour:** Sections, cards, listes

```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30, rotateX: -10 }}
  animate={isInView ? { 
    opacity: 1, 
    y: 0, 
    rotateX: 0 
  } : {}}
  transition={{ 
    duration: 0.6,
    type: "spring",
    stiffness: 100
  }}
>
  {/* Contenu */}
</motion.div>
```

**Variations:**
- De gauche: `initial={{ opacity: 0, x: -50 }}`
- De droite: `initial={{ opacity: 0, x: 50 }}`
- De bas: `initial={{ opacity: 0, y: 30 }}`
- Avec rotation: `rotateX: -10`

---

### 5. Stagger Animations ⭐⭐⭐

**Utilisé pour:** Listes, grids, features

```typescript
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

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Timing:**
- Rapide: `staggerChildren: 0.05`
- Normal: `staggerChildren: 0.15`
- Lent: `staggerChildren: 0.3`

---

### 6. Hover Interactions ⭐⭐

**Utilisé pour:** Buttons, links, icons, cards

```typescript
// Button magnetic effect
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Button>Click me</Button>
</motion.div>

// Icon rotation
<motion.div
  whileHover={{ 
    scale: 1.2,
    rotate: 360
  }}
  transition={{ duration: 0.4 }}
>
  <Icon />
</motion.div>

// Card subtle lift
<motion.div
  whileHover={{ y: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Card />
</motion.div>
```

**Variations:**
- Scale subtil: `1.02`
- Scale moyen: `1.05`
- Scale prononcé: `1.1`
- Rotation: `360` (full) ou `10` (tilt)

---

### 7. Pulsing/Glowing Effects ⭐

**Utilisé pour:** Badges, notifications, CTAs importantes

```typescript
<motion.div
  animate={{
    boxShadow: [
      "0 0 10px rgba(16,185,129,0.3)",
      "0 0 20px rgba(16,185,129,0.5)",
      "0 0 10px rgba(16,185,129,0.3)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="bg-success/20 border border-success/30 rounded-full"
>
  <Badge>Quick Win</Badge>
</motion.div>
```

**Couleurs par contexte:**
- Success: `rgba(16,185,129,X)`
- Primary: `rgba(99,102,241,X)`
- CTA: `rgba(255,90,0,X)`
- Error: `rgba(239,68,68,X)`

---

### 8. Progressive Timeline ⭐⭐

**Utilisé pour:** Processus, étapes, roadmaps

```typescript
// Ligne verticale qui se dessine
<motion.div
  className="absolute left-8 w-0.5 bg-gradient-to-b from-success"
  initial={{ height: 0 }}
  animate={isInView ? { height: "100%" } : { height: 0 }}
  transition={{ duration: 1.5, delay: 0.8 }}
/>

// Étapes qui apparaissent progressivement
{steps.map((step, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: 0.6 + idx * 0.2 }}
  >
    <Step {...step} />
  </motion.div>
))}
```

---

### 9. Magnetic Buttons ⭐

**Utilisé pour:** CTAs principaux

```typescript
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  <Button className="power-pulse">
    CALL TO ACTION
  </Button>
</motion.div>
```

---

### 10. Rotating Icons ⭐

**Utilisé pour:** Loading states, decorative elements

```typescript
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
>
  <Sparkles className="h-6 w-6" />
</motion.div>
```

---

## 🎨 Variations par Type de Page

### Hero Sections
- **Parallax background** (3 blobs minimum)
- **Stagger text** (titre, description, stats)
- **Scale + opacity** sur scroll
- **3D rotation** sur visual principal
- **Magnetic CTAs**

### Feature Grids
- **Stagger cards** (0.15s delay)
- **Hover lift** (y: -10)
- **3D tilt** au hover (rotateY: 5)
- **Pulsing badges**

### Comparaison Avant/Après
- **Shake effect** sur "Avant" (subtle)
- **Glow effect** sur "Après" (pulsing)
- **Scale au hover** (1.05)
- **3D rotation** (rotateY: ±5)

### Listes de Bénéfices
- **Stagger items** (0.1s)
- **Icon rotation** au hover (360°)
- **Slide right** au hover (x: 10)
- **CheckCircle animation**

### CTAs Finaux
- **Scale 1.1** au hover
- **Glow pulsing**
- **Arrow animation** (x: [0, 5, 0])

---

## ⚡ Performance Tips

### DO ✅
```typescript
// Utiliser transform (GPU-accelerated)
style={{ y: smoothY, scale: smoothScale }}

// Spring pour smoothness
useSpring(value, { stiffness: 100, damping: 30 })

// once: true pour animations uniques
useInView(ref, { once: true })

// Viewport amount pour trigger précis
useInView(ref, { amount: 0.3 })
```

### DON'T ❌
```typescript
// Éviter margin/padding dans animations
animate={{ marginTop: 20 }} // ❌

// Préférer transform
animate={{ y: 20 }} // ✅

// Éviter trop d'éléments animés simultanément
{items.map(item => <AnimatedCard />)} // OK si <50 items

// Éviter animations complexes sur mobile
const isMobile = window.innerWidth < 768;
animate={!isMobile ? complexAnimation : simpleAnimation}
```

---

## 🎭 Exemples Complets par Section

### Hero avec Parallax Full

```typescript
export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-screen">
      {/* Floating backgrounds */}
      <motion.div
        style={{ y: smoothY }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 blur-3xl"
      />
      
      {/* Content avec scale */}
      <motion.div style={{ scale: smoothScale }}>
        <h1>Hero Title</h1>
      </motion.div>
    </section>
  );
}
```

### Grid Cards avec 3D

```typescript
export default function CardGrid({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.1, type: "spring" }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
          style={{ perspective: 1000 }}
        >
          <Card {...item} />
        </motion.div>
      ))}
    </div>
  );
}
```

### Timeline Progressive

```typescript
export default function Timeline({ steps }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative">
      {/* Ligne animée */}
      <motion.div
        className="absolute left-8 w-0.5 bg-gradient-to-b from-success"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1.5 }}
      />

      {/* Steps */}
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6 + idx * 0.2 }}
          whileHover={{ x: 10 }}
        >
          <TimelineStep {...step} />
        </motion.div>
      ))}
    </div>
  );
}
```

---

## 🎨 Color-Specific Glows

```typescript
// Success (Green)
boxShadow: [
  "0 0 10px rgba(16,185,129,0.3)",
  "0 0 20px rgba(16,185,129,0.5)",
  "0 0 10px rgba(16,185,129,0.3)"
]

// Primary (Indigo)
boxShadow: [
  "0 0 10px rgba(99,102,241,0.3)",
  "0 0 20px rgba(99,102,241,0.5)",
  "0 0 10px rgba(99,102,241,0.3)"
]

// CTA (Orange)
boxShadow: [
  "0 0 10px rgba(255,90,0,0.3)",
  "0 0 20px rgba(255,90,0,0.5)",
  "0 0 10px rgba(255,90,0,0.3)"
]

// Accent (Cyan)
boxShadow: [
  "0 0 10px rgba(16,228,255,0.3)",
  "0 0 20px rgba(16,228,255,0.5)",
  "0 0 10px rgba(16,228,255,0.3)"
]
```

---

## 🔥 Quick Reference Cheatsheet

| Animation | Use Case | Code |
|-----------|----------|------|
| Parallax | Backgrounds | `useScroll() + useTransform()` |
| 3D Cards | Features, Cards | `whileHover={{ rotateY: 5 }}` |
| Stagger | Lists, Grids | `staggerChildren: 0.15` |
| Scroll Trigger | Sections | `useInView() + initial/animate` |
| Hover Lift | Interactive | `whileHover={{ y: -10 }}` |
| Pulsing | Badges, CTAs | `animate + boxShadow array` |
| Magnetic | Buttons | `whileHover={{ scale: 1.1 }}` |
| Floating | Decorative | `animate={{ y: [-10, 10] }}` |
| Progressive | Timelines | `initial={{ height: 0 }}` |
| Rotation | Icons | `animate={{ rotate: 360 }}` |

---

## 🎬 Animation Timing Standards

```typescript
// Spring Settings
const springConfig = {
  stiffness: 100,    // Rigidité (plus = plus rapide)
  damping: 30,       // Amortissement (plus = moins de rebond)
};

// Durations
const TIMING = {
  instant: 0.2,      // Micro-interactions
  fast: 0.4,         // Hover effects
  normal: 0.6,       // Entrances
  slow: 0.8,         // Hero animations
  verySlow: 1.5,     // Timeline draws
};

// Delays
const DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
};

// Stagger
const STAGGER = {
  tight: 0.05,       // Rapid succession
  normal: 0.15,      // Standard
  relaxed: 0.3,      // Dramatic
};
```

---

## 📱 Mobile Considerations

```typescript
// Détecter mobile
const isMobile = window.innerWidth < 768;

// Simplifier animations sur mobile
<motion.div
  whileHover={!isMobile ? { scale: 1.05, rotateY: 5 } : { scale: 1.02 }}
  animate={!isMobile ? complexAnimation : simpleAnimation}
>
  <Card />
</motion.div>

// Désactiver parallax sur mobile si performance
const shouldParallax = !isMobile && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
```

---

## ✨ Pro Tips

1. **Toujours utiliser `perspective: 1000`** pour 3D transforms
2. **Spring > ease** pour animations naturelles
3. **`once: true`** pour performances sur longues pages
4. **Stagger < 0.2s** pour garder dynamisme
5. **Scale max 1.1** pour éviter effet cartoon
6. **Toujours smooth avec `useSpring`** pour parallax
7. **Viewport `amount: 0.2-0.3`** pour trigger anticipé
8. **Glow pulsing 2s** pour effet hypnotique
9. **Arrow animation `[0, 5, 0]`** pour diriger attention
10. **Combine scale + rotate** pour effet premium

---

## 🚀 Checklist Nouvelle Page

Avant de publier une page, vérifier:

- [ ] Hero avec parallax backgrounds (3+ blobs)
- [ ] Stagger animations sur listes/grids
- [ ] 3D hover effects sur cards principales
- [ ] Scroll-triggered entrances (useInView)
- [ ] Pulsing badges sur éléments importants
- [ ] Magnetic effect sur CTAs principaux
- [ ] Floating elements en background
- [ ] Progressive timeline si processus
- [ ] Glow effects sur éléments success
- [ ] Icon rotations sur hover
- [ ] Scale animation sur scroll (hero)
- [ ] Mobile optimization (animations simplifiées)
- [ ] Performance: 60fps maintenu
- [ ] Cohérence avec QuickWins.tsx

---

## 🎨 Exemples de Variations

### Hero Variants

**Style A - Parallax Dominant** (comme QuickWins)
- 3+ floating blobs
- Scale + opacity sur scroll
- Timeline 3D à droite

**Style B - 3D Dominant**
- Visual principal en 3D rotation
- Cards flottantes autour
- Particles subtiles

**Style C - Minimal + Élégant**
- 1 gradient blob
- Texte avec subtle scale
- Focus sur typography

### Card Grid Variants

**Grid A - 3D Tilt** (comme QuickWins)
```typescript
whileHover={{ scale: 1.05, rotateY: 5 }}
```

**Grid B - Lift + Shadow**
```typescript
whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
```

**Grid C - Expand**
```typescript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

---

**VERSION**: 1.0  
**DATE**: 12 Octobre 2025  
**VALIDÉ SUR**: QuickWins.tsx  
**STATUS**: ✅ Production Ready  
**NEXT**: Appliquer sur toutes nouvelles pages avec variations

---

🎉 **Style approuvé et documenté - Prêt pour déploiement sur toutes les pages !**
