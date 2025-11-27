---
title: "Power Automate Desktop : Automatiser Sans API"
slug: "power-automate-desktop-sans-api"
excerpt: "Automatisez n'importe quelle application Windows avec Power Automate Desktop — même sans API. Guide RPA pour PME."
category: "automatisation"
author: "equipe-dainamics"
publishedAt: "2025-11-28"
readTime: 12
featured: false
tags: ["power-automate", "rpa", "desktop", "windows", "microsoft"]
metaDescription: "Power Automate Desktop : automatisation RPA sans API pour PME."
---

# Power Automate Desktop : Automatiser Sans API

Certaines applications métier n'ont pas d'API. Les vieux logiciels, les ERP legacy, les applications Windows spécialisées... Power Automate Desktop permet de les automatiser quand même, en simulant les actions d'un utilisateur. Voici comment.

## Qu'est-ce que Power Automate Desktop ?

### RPA : Robotic Process Automation

**Principe** : Un "robot logiciel" reproduit les actions humaines — clics, saisie clavier, navigation — sur n'importe quelle application.

**Différence avec l'automatisation API** :

| Aspect | Automatisation API | RPA (Desktop) |
|--------|-------------------|---------------|
| Prérequis | Application avec API | Interface utilisateur |
| Vitesse | Très rapide | Plus lent (simule humain) |
| Fiabilité | Très élevée | Sensible aux changements UI |
| Coût setup | Variable | Généralement plus bas |
| Maintenance | Faible | Plus élevée |

### Power Automate Desktop

**Inclus gratuitement** avec Windows 10/11 (version basique).

**Capacités** :
- Automatisation applications Windows
- Automatisation navigateur web
- Manipulation fichiers Excel, PDF
- Extraction de données (scraping)
- Intégration avec Power Automate Cloud

## Cas d'usage typiques

### 1. Saisie dans un ERP sans API

**Scénario** : Transférer des commandes d'un Excel vers un ERP legacy.

**Flux automatisé** :
```
Excel (commandes) → Lecture ligne par ligne
                         ↓
                    Ouvrir ERP
                         ↓
              Naviguer vers "Nouvelle commande"
                         ↓
              Remplir les champs (saisie simulée)
                         ↓
                    Valider
                         ↓
                Ligne suivante...
```

### 2. Extraction de données d'une application

**Scénario** : Extraire les soldes clients d'un logiciel comptable vers Excel.

### 3. Synchronisation entre applications

**Scénario** : Copier des contacts d'un CRM legacy vers un nouveau CRM.

### 4. Génération de rapports

**Scénario** : Automatiser les exports et la consolidation de rapports mensuels.

## Installation et configuration

### Prérequis

| Élément | Requis |
|---------|--------|
| OS | Windows 10/11 |
| Compte | Microsoft (gratuit) ou M365 |
| RAM | 4 GB minimum |
| Droits | Admin pour installation |

### Installation

1. **Télécharger** depuis [powerautomate.microsoft.com](https://powerautomate.microsoft.com)
2. **Installer** Power Automate Desktop
3. **Se connecter** avec compte Microsoft
4. **Optionnel** : Installer l'extension navigateur

### Interface

```
┌─────────────────────────────────────────────────────┐
│ [Actions]        │ [Canvas de flux]                 │
│                  │                                  │
│ - UI Automation  │  ┌──────────────────────┐       │
│ - Excel          │  │ Action 1             │       │
│ - Browser        │  └──────────────────────┘       │
│ - Files          │           ↓                     │
│ - Variables      │  ┌──────────────────────┐       │
│ - Loops          │  │ Action 2             │       │
│ - Conditions     │  └──────────────────────┘       │
│ - ...            │           ↓                     │
│                  │         ...                     │
│                  │                                 │
│ [Variables]      │ [Sortie/Debug]                  │
└─────────────────────────────────────────────────────┘
```

## Tutoriel : Saisie ERP automatisée

### Objectif

Automatiser la saisie de 50 commandes/jour depuis Excel vers un logiciel ERP Windows.

### Étape 1 : Préparer le fichier Excel

**Structure recommandée** :

| Colonne | Contenu |
|---------|---------|
| A | Numéro commande |
| B | Client |
| C | Produit |
| D | Quantité |
| E | Prix unitaire |
| F | Date livraison |
| G | Statut (vide = à traiter) |

### Étape 2 : Créer le flux

1. **Nouveau flux** : "Saisie Commandes ERP"
2. **Ajouter** : Excel > "Launch Excel"
3. **Configurer** : Chemin du fichier

```
Action : Launch Excel
- Launch mode : Open file
- Path : C:\Commandes\commandes_jour.xlsx
```

### Étape 3 : Lire les données Excel

1. **Ajouter** : Excel > "Read from Excel worksheet"
2. **Configurer** :

```
Action : Read from Excel worksheet
- Start column : A
- Start row : 2 (après en-têtes)
- End column : G
- Store in : %ExcelData%
```

### Étape 4 : Boucle sur les lignes

1. **Ajouter** : Loops > "For each"
2. **Configurer** :

```
Action : For each
- Value to iterate : %ExcelData%
- Store current item in : %CurrentRow%
```

### Étape 5 : Filtrer les lignes non traitées

Dans la boucle, ajouter une condition :

```
Action : If
- Condition : %CurrentRow[6]% = ""  (colonne G vide)
```

### Étape 6 : Ouvrir et naviguer dans l'ERP

**Enregistrer les actions** (méthode la plus simple) :

1. Cliquez **"Recorder"** dans la barre d'outils
2. Effectuez manuellement les actions dans l'ERP :
   - Clic sur "Nouvelle commande"
   - Navigation dans les menus
3. Arrêtez l'enregistrement
4. Les actions sont automatiquement ajoutées au flux

**Ou manuellement** :

```
Action : Click UI element in window
- UI element : [Enregistré lors du recording]
```

### Étape 7 : Remplir les champs

Pour chaque champ de l'ERP :

```
Action : Populate text field in window
- UI element : [Champ Client]
- Text to fill : %CurrentRow[1]%

Action : Populate text field in window
- UI element : [Champ Produit]
- Text to fill : %CurrentRow[2]%

Action : Populate text field in window
- UI element : [Champ Quantité]
- Text to fill : %CurrentRow[3]%

...
```

### Étape 8 : Valider et marquer comme traité

```
Action : Click UI element in window
- UI element : [Bouton Valider]

Action : Wait
- Duration : 2 seconds  (attendre la validation)

Action : Write to Excel worksheet
- Value : "Traité"
- Column : G
- Row : %LoopIndex% + 1
```

### Étape 9 : Gestion des erreurs

Ajoutez des blocs **"On block error"** :

```
On block error
- Action : Log message + Screenshot
- Continue or Stop selon gravité
```

### Flux complet

```
[Launch Excel]
       ↓
[Read worksheet → %ExcelData%]
       ↓
[For each %CurrentRow% in %ExcelData%]
       ↓
[If colonne G vide]
       ↓
[Focus ERP window]
       ↓
[Click "Nouvelle commande"]
       ↓
[Remplir Client] ← %CurrentRow[1]%
       ↓
[Remplir Produit] ← %CurrentRow[2]%
       ↓
[Remplir Quantité] ← %CurrentRow[3]%
       ↓
[Click Valider]
       ↓
[Wait 2s]
       ↓
[Write "Traité" in Excel colonne G]
       ↓
[End If]
       ↓
[Next row]
       ↓
[Save Excel]
[Close Excel]
```

## Bonnes pratiques

### Fiabilité

| Pratique | Pourquoi |
|----------|----------|
| Ajouter des **Wait** | L'UI a besoin de temps pour répondre |
| Utiliser des **sélecteurs robustes** | Moins sensibles aux changements |
| **Screenshot** sur erreur | Pour diagnostiquer |
| **Logging** détaillé | Traçabilité |

### Performance

| Pratique | Impact |
|----------|--------|
| Minimiser les Wait fixes | Utiliser "Wait for element" quand possible |
| Traiter par lots | Éviter d'ouvrir/fermer l'app à chaque ligne |
| Exécuter en arrière-plan | Si l'app le permet |

### Maintenance

| Pratique | Bénéfice |
|----------|----------|
| **Commenter** les actions | Compréhension future |
| **Modulariser** (sous-flux) | Réutilisation |
| **Versionner** les flux | Rollback possible |
| **Documenter** les dépendances | App version, résolution écran |

## Intégration avec Power Automate Cloud

### Déclenchement à distance

1. **Créer un flux cloud** dans Power Automate
2. **Ajouter** : "Run a flow built with Power Automate Desktop"
3. **Configurer** la machine cible

**Exemple** : Déclencher la saisie ERP quand un email arrive avec une pièce jointe Excel.

### Prérequis pour l'intégration

| Élément | Requis |
|---------|--------|
| Licence | Power Automate Premium ou Process |
| Gateway | On-premises data gateway |
| Machine | Enregistrée dans Power Automate |

## Limites et alternatives

### Limites de RPA

| Limite | Impact |
|--------|--------|
| Changements UI | Casse les flux |
| Vitesse | Plus lent qu'API |
| Ressources | Monopolise la session |
| Scalabilité | Difficile à paralléliser |

### Quand NE PAS utiliser RPA

- API disponible → Préférer l'API
- Volume très élevé (>1000 opérations/jour)
- Application change fréquemment
- Besoin de parallélisation

### Alternatives

| Solution | Cas d'usage |
|----------|-------------|
| API native | Si disponible |
| Zapier/Make | Apps cloud |
| Scripts Python | Contrôle total |
| UiPath | RPA enterprise |

## Coûts

### Power Automate Desktop

| Version | Prix | Limites |
|---------|------|---------|
| Gratuit (Windows) | 0 CHF | Exécution manuelle uniquement |
| Per user | ~15$/user/mois | Exécution cloud |
| Per flow | ~100$/flow/mois | Illimité users |
| Process | ~150$/bot/mois | Exécution non-attendue |

### ROI typique

**Exemple : Saisie ERP**

| Métrique | Avant | Après |
|----------|-------|-------|
| Temps/commande | 5 min | 30 sec |
| Commandes/jour | 50 | 50 |
| Temps total/jour | 4h10 | 25 min |
| Coût mensuel | ~3'500 CHF (temps) | ~150 CHF (licence) |
| **Économie** | | **~3'350 CHF/mois** |

**ROI** : Quelques semaines

## Conclusion

Power Automate Desktop est un outil puissant pour automatiser les applications sans API. Il est particulièrement adapté aux PME avec des logiciels legacy ou des processus de saisie répétitifs.

**Points clés** :
- Version basique gratuite avec Windows
- Courbe d'apprentissage raisonnable
- ROI rapide sur les tâches répétitives
- Attention à la maintenance (sensibilité UI)

---

*DAINAMICS implémente des solutions RPA pour les PME suisses. Nous évaluons si RPA est la bonne approche pour votre cas et développons des flux robustes et maintenables. Contactez-nous pour un audit gratuit de vos processus.*
