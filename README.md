# 🚀 DAINAMICS Website - Projet Lovable

> **Site web officiel de DAINAMICS - Agence d'expertise IA, Automatisation & Développement**

---

## 📘 Documentation Complète

**⚠️ IMPORTANT** : Avant de commencer, lisez la documentation d'architecture complète:

### 📚 Guides d'Architecture

1. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Partie 1
   - Vision & Objectifs
   - Architecture de Navigation
   - Structure des Pages (12+ pages détaillées)
   - Fonctionnalités Interactives (8 features majeures)

2. **[ARCHITECTURE-PART2.md](./ARCHITECTURE-PART2.md)** - Partie 2
   - Structure de Données & Types TypeScript
   - Design System Complet
   - Plan d'Implémentation (7 semaines)
   - Guidelines Techniques
   - Checklists & Post-Launch Strategy

### 🎯 Quick Start

1. **Lire la documentation** (essentiel!)
2. **Suivre le plan d'implémentation**
3. **Utiliser le Design System**
4. **Développer phase par phase**

---

## 🛠️ Project Setup (Lovable)

### URL du Projet
**Lovable**: https://lovable.dev/projects/112a185f-61ce-446f-935a-ac6b9b96c652

### Installation Locale

Requirements: Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Clone le repository
git clone <YOUR_GIT_URL>

# Navigate to directory
cd Dainamics-Web-Site

# Install dependencies
npm i

# Start dev server
npm run dev
```

### Méthodes de Développement

**1. Via Lovable (Recommandé pour prototypage rapide)**
- Visitez le [Projet Lovable](https://lovable.dev/projects/112a185f-61ce-446f-935a-ac6b9b96c652)
- Promptez avec Claude
- Changes auto-committed to this repo

**2. Via IDE Local (Recommandé pour dev structuré)**
- Clone repo
- Edit files
- Push changes
- Changes reflected in Lovable

**3. Via GitHub Web**
- Edit files directly in GitHub
- Commit changes

**4. Via GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Full dev environment in browser

---

## 🎨 Stack Technique

```yaml
Framework: React 18+ (Lovable)
Language: TypeScript
Styling: Tailwind CSS 3+
State: Zustand / React Context
Forms: React Hook Form + Zod
Animations: Framer Motion
Icons: Lucide React
Backend: Supabase (MCP)
Hosting: Vercel / Netlify
Analytics: GA4 + Plausible
```

---

## 📦 Structure du Projet

```
src/
├─ components/
│  ├─ common/          # Buttons, Cards, Forms, etc.
│  ├─ layout/          # Header, Footer, Navigation
│  ├─ features/        # ROI Calculator, Diagnostic, etc.
│  └─ sections/        # Homepage, Solutions, Portfolio sections
│
├─ pages/              # All pages (12+ pages)
├─ data/               # Solutions, Portfolio, Expertise data
├─ types/              # TypeScript interfaces
├─ utils/              # Helper functions
├─ hooks/              # Custom React hooks
├─ lib/                # Supabase, Analytics setup
└─ styles/             # Global CSS, animations
```

Voir [ARCHITECTURE-PART2.md](./ARCHITECTURE-PART2.md) pour structure complète.

---

## 🎯 Fonctionnalités Clés

### 8 Fonctionnalités Interactives Majeures

1. **💰 Calculateur ROI** - Estimations personnalisées temps réel
2. **🎓 Diagnostic IA** - Quiz 3-5 questions + recommandations
3. **🛠️ Tech Stack Explorer** - Visual interactif technologies
4. **📊 AI Maturity Assessment** - Quiz 10 min + rapport PDF
5. **🤖 AI Chatbot** - Assistant intelligent avec RAG
6. **🏅 Quick Win Badge System** - Identification solutions rapides
7. **📧 Mini-Cours Email** - Email courses automatisés
8. **📝 Progressive Profiling** - Formulaires intelligents 2 étapes

Voir spécifications détaillées dans [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 📅 Plan de Développement

### Phase 1: MVP Foundation (Semaines 1-3)
- Setup + Homepage + Fonctionnalités interactives
- Pages Expertise, Solutions, Portfolio

### Phase 2: Content & Features (Semaines 4-5)
- Case Studies + Ressources Hub
- Glossaire + Use Cases + Assessment

### Phase 3: Polish & Launch (Semaines 6-7)
- Pages Business + Contact + Chatbot
- SEO + Performance + QA Final

Voir timeline détaillée dans [ARCHITECTURE-PART2.md](./ARCHITECTURE-PART2.md)

---

## 🎨 Design System

### Couleurs Brand
- **Primary**: `#6366F1` (Violet Indigo)
- **CTA**: `#FF5A00` (Orange vibrant)

### Typographie
- **Display**: Cal Sans (H1-H2)
- **Sans**: Inter (Body)
- **Mono**: Fira Code (Code)

### Components
- Buttons (Primary, Secondary, Tertiary)
- Cards avec hover effects
- Badges (Quick Win avec animation)
- Forms avec validation

Voir Design System complet dans [ARCHITECTURE-PART2.md](./ARCHITECTURE-PART2.md)

---

## ✅ Checklist de Développement

### Avant de Coder
- [ ] Lire ARCHITECTURE.md complet
- [ ] Lire ARCHITECTURE-PART2.md complet
- [ ] Comprendre le positionnement DAINAMICS
- [ ] Setup Lovable + Supabase + GitHub

### Pendant le Développement
- [ ] Suivre le Design System
- [ ] Respecter la structure de dossiers
- [ ] Tester mobile-first
- [ ] Créer les données (solutions, portfolio)
- [ ] Implémenter fonctionnalités interactives

### Avant le Launch
- [ ] Lighthouse score >90
- [ ] Mobile responsiveness 100%
- [ ] Tous liens/forms fonctionnels
- [ ] SEO complet
- [ ] Analytics configuré

Voir checklists complètes dans [ARCHITECTURE-PART2.md](./ARCHITECTURE-PART2.md)

---

## 🔗 Liens Utiles

### Documentation
- [Architecture Partie 1](./ARCHITECTURE.md) - Vision, Navigation, Pages, Features
- [Architecture Partie 2](./ARCHITECTURE-PART2.md) - Design, Implementation, Guidelines

### Outils
- [Lovable Project](https://lovable.dev/projects/112a185f-61ce-446f-935a-ac6b9b96c652)
- [Supabase](https://supabase.com) - Backend (MCP)
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev) - Icons

### Resources
- [React 18 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lovable Docs](https://docs.lovable.dev)

---

## 🚀 Démarrage Rapide

### Pour développer efficacement:

1. **Commencer par la documentation**
   ```bash
   # Lire dans l'ordre:
   1. README.md (ce fichier)
   2. ARCHITECTURE.md
   3. ARCHITECTURE-PART2.md
   ```

2. **Setup l'environnement**
   ```bash
   npm install
   npm run dev
   ```

3. **Suivre le plan d'implémentation**
   - Phase 1, Semaine 1: Setup + Homepage
   - Utiliser les checklists
   - Référencer les specs détaillées

4. **Développer avec Claude**
   - Mentionner les documents d'architecture
   - Développer section par section
   - Valider avec les specs

---

## 📊 Objectifs du Site

### KPIs Techniques
- ⚡ Lighthouse Score: **>90**
- 📱 Mobile Responsiveness: **100%**
- ⏱️ Time to Interactive: **<3s**

### KPIs Business
- 🎯 Taux de conversion: **>5%**
- ⏰ Temps moyen sur site: **>3 min**
- 📈 Leads qualifiés/mois: **20-30**

---

## 🤝 Support & Questions

### Utilisation de cette Documentation
- **Pour structurer**: Voir ARCHITECTURE.md
- **Pour designer**: Voir Design System dans ARCHITECTURE-PART2.md
- **Pour implémenter**: Suivre specs détaillées + checklists
- **Pour la timeline**: Suivre Plan d'Implémentation

### Développement avec Claude
- Référencer ces documents dans conversations
- Utiliser outils MCP (Supabase, GitHub)
- Développer itérativement
- Valider régulièrement

---

## 🎉 Let's Build!

Vous avez maintenant:
- ✅ Documentation complète d'architecture
- ✅ Design System détaillé
- ✅ Plan d'implémentation de 7 semaines
- ✅ Guidelines techniques
- ✅ Checklists pour chaque phase

**Prochaine étape**: Commencez Phase 1, Semaine 1 ! 🚀

---

*DAINAMICS Website - Octobre 2025*  
*Transforming businesses through IA, Automatisation & Développement*