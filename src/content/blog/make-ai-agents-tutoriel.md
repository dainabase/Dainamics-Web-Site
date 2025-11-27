---
title: "Make.com AI Agents : Tutoriel Step-by-Step"
slug: "make-ai-agents-tutoriel"
excerpt: "Créez votre premier agent IA avec Make.com. Guide pas à pas pour automatiser des workflows intelligents sans code."
category: "guides"
author: "equipe-dainamics"
publishedAt: "2025-11-28"
readTime: 14
featured: false
tags: ["make", "agents", "tutoriel", "no-code", "automatisation"]
metaDescription: "Tutoriel Make.com AI Agents : créez des workflows IA sans code."
---

# Make.com AI Agents : Tutoriel Step-by-Step

Make.com (ex-Integromat) a introduit Make AI en 2024, permettant de créer des agents IA directement dans vos workflows. Ce tutoriel vous guide pas à pas pour créer votre premier agent intelligent — sans écrire une ligne de code.

## Prérequis

### Ce dont vous avez besoin

| Élément | Détail |
|---------|--------|
| Compte Make | Plan Core minimum (9$/mois) |
| Clé API OpenAI | Optionnel (Make AI inclus) |
| Temps | 30-60 minutes |
| Niveau | Débutant Make OK |

### Comprendre Make AI

**Make AI** inclut :
- **AI Assistant** : Génération de texte, analyse, classification
- **AI Image** : Génération et analyse d'images
- **AI Document** : Extraction de données de documents
- **AI Audio** : Transcription et synthèse vocale

Vous pouvez aussi connecter vos propres clés API (OpenAI, Anthropic, etc.).

## Cas d'usage : Agent de qualification de leads

### Objectif

Créer un agent qui :
1. Reçoit un email de prospect
2. Analyse le contenu avec l'IA
3. Extrait les informations clés
4. Attribue un score de qualification
5. Crée une fiche dans le CRM
6. Envoie une réponse personnalisée

### Résultat attendu

- Temps de traitement : 2-3 minutes (vs 15-20 min manuel)
- Disponibilité : 24/7
- Cohérence : Score standardisé

## Étape 1 : Créer le scénario

### 1.1 Nouveau scénario

1. Connectez-vous à Make.com
2. Cliquez **"Create a new scenario"**
3. Nommez-le "Agent Qualification Leads"

### 1.2 Ajouter le trigger email

1. Cliquez sur le **"+"** central
2. Recherchez **"Email"** ou votre provider (Gmail, Outlook)
3. Sélectionnez **"Watch Emails"**
4. Configurez :
   - Connection : Autorisez votre compte
   - Folder : Inbox
   - Criteria : From contains "@" (tous les emails)
   - Maximum results : 10

### 1.3 Tester le trigger

1. Cliquez **"Run once"**
2. Envoyez un email test à votre boîte
3. Vérifiez que l'email est capturé

## Étape 2 : Ajouter l'analyse IA

### 2.1 Module AI Assistant

1. Cliquez **"+"** après le module Email
2. Recherchez **"AI"**
3. Sélectionnez **"AI Assistant"** > **"Generate Text"**

### 2.2 Configurer le prompt

Dans le champ **"Prompt"**, entrez :

```
Analyse cet email de prospect et extrait les informations au format JSON :

EMAIL:
{{1.text}}

INFORMATIONS À EXTRAIRE :
1. nom_entreprise : nom de l'entreprise (ou "Non mentionné")
2. nom_contact : nom de la personne (ou "Non mentionné")
3. besoin : résumé du besoin en 1-2 phrases
4. urgence : "haute", "moyenne" ou "basse" selon le ton
5. budget_mentionne : true/false
6. taille_entreprise : estimation si mentionnée
7. score_qualification : 1-10 basé sur :
   - Besoin clair (+3)
   - Urgence exprimée (+2)
   - Budget mentionné (+2)
   - Taille entreprise >20 (+2)
   - Demande spécifique (+1)

Réponds UNIQUEMENT avec le JSON, sans texte avant ou après.
```

### 2.3 Paramètres recommandés

| Paramètre | Valeur |
|-----------|--------|
| Model | GPT-4 ou Claude (si dispo) |
| Temperature | 0.3 (plus déterministe) |
| Max tokens | 500 |

## Étape 3 : Parser la réponse JSON

### 3.1 Module JSON Parse

1. Ajoutez un module **"JSON"** > **"Parse JSON"**
2. Dans **"JSON string"**, mappez la réponse IA : `{{2.result}}`

### 3.2 Gérer les erreurs

La réponse IA peut parfois ne pas être du JSON valide. Ajoutons une gestion d'erreur :

1. Clic droit sur le module JSON > **"Add error handler"**
2. Ajoutez un module **"Ignore"** pour continuer malgré l'erreur
3. Ou un module **"Rollback"** pour annuler

## Étape 4 : Router selon le score

### 4.1 Ajouter un Router

1. Après le module JSON, ajoutez un **"Router"**
2. Créez 3 routes :

**Route 1 : Score élevé (7-10)**
- Filter : `{{3.score_qualification}} >= 7`
- Label : "Lead chaud"

**Route 2 : Score moyen (4-6)**
- Filter : `{{3.score_qualification}} >= 4 AND {{3.score_qualification}} < 7`
- Label : "Lead tiède"

**Route 3 : Score bas (1-3)**
- Filter : `{{3.score_qualification}} < 4`
- Label : "Lead froid"

## Étape 5 : Actions par route

### 5.1 Route Lead Chaud

**Action 1 : Créer contact CRM (HubSpot exemple)**

1. Module **"HubSpot"** > **"Create a Contact"**
2. Mappez :
   - Email : `{{1.from.address}}`
   - Company : `{{3.nom_entreprise}}`
   - Lead Status : "Hot"
   - Notes : `{{3.besoin}}`

**Action 2 : Notification Slack**

1. Module **"Slack"** > **"Send a Message"**
2. Channel : #sales-alerts
3. Message :
```
🔥 *Lead chaud détecté !*
Entreprise : {{3.nom_entreprise}}
Contact : {{3.nom_contact}}
Score : {{3.score_qualification}}/10
Besoin : {{3.besoin}}
```

**Action 3 : Email de réponse personnalisé**

1. Module **"AI Assistant"** > **"Generate Text"**
2. Prompt :
```
Rédige un email de réponse professionnel et engageant pour ce prospect :

Contexte :
- Entreprise : {{3.nom_entreprise}}
- Besoin exprimé : {{3.besoin}}
- Urgence : {{3.urgence}}

L'email doit :
- Remercier pour le contact
- Montrer que nous avons compris le besoin
- Proposer un appel de 30 min cette semaine
- Être signé "L'équipe DAINAMICS"

Ton : Professionnel mais chaleureux
Longueur : 100-150 mots
```

3. Module **"Email"** > **"Send an Email"**
4. Mappez la réponse IA comme corps de l'email

### 5.2 Route Lead Tiède

**Actions simplifiées** :
1. Créer contact CRM (status : "Warm")
2. Email template standard (pas de génération IA)
3. Ajout à séquence nurturing

### 5.3 Route Lead Froid

**Actions minimales** :
1. Créer contact CRM (status : "Cold")
2. Email automatique standard
3. Pas de notification (éviter le bruit)

## Étape 6 : Logging et analytics

### 6.1 Logger les résultats

Ajoutez un module **"Google Sheets"** > **"Add a Row"** à la fin :

| Colonne | Valeur |
|---------|--------|
| Date | `{{now}}` |
| Email | `{{1.from.address}}` |
| Entreprise | `{{3.nom_entreprise}}` |
| Score | `{{3.score_qualification}}` |
| Route | "Chaud/Tiède/Froid" |
| Temps traitement | `{{formatDate(now; "X")}} - {{formatDate(1.date; "X")}}` |

### 6.2 Dashboard

Connectez Google Sheets à Looker Studio ou créez un dashboard Make pour visualiser :
- Nombre de leads/jour
- Distribution des scores
- Taux de conversion par score

## Étape 7 : Tests et optimisation

### 7.1 Tests à effectuer

| Test | Objectif |
|------|----------|
| Email standard | Vérifier extraction complète |
| Email vague | Tester gestion données manquantes |
| Email spam | Vérifier score bas |
| Email urgent | Vérifier détection urgence |
| Email anglais | Tester multilingue |

### 7.2 Ajustements courants

**Problème : Scores incohérents**
→ Affiner le prompt avec des exemples

**Problème : JSON invalide**
→ Ajouter "Format your response as valid JSON" au prompt

**Problème : Trop de faux positifs (leads chauds)**
→ Augmenter le seuil ou affiner les critères

## Architecture finale

```
[Email Trigger]
      ↓
[AI Assistant - Analyse]
      ↓
[JSON Parse]
      ↓
[Router]
   ↓     ↓     ↓
Score≥7  4-6   <4
   ↓     ↓     ↓
[CRM]  [CRM]  [CRM]
[AI Email] [Template] [Template]
[Slack]   -      -
   ↓     ↓     ↓
[Google Sheets - Log]
```

## Coûts estimés

### Make.com

| Plan | Opérations/mois | Prix |
|------|-----------------|------|
| Core | 10'000 | 9$/mois |
| Pro | 10'000 + features | 16$/mois |

**Pour ce scénario** : ~8-12 opérations par email traité

### Tokens IA

| Modèle | Coût approximatif |
|--------|-------------------|
| Make AI inclus | 0$ (dans le plan) |
| GPT-4 (si API externe) | ~0.05$/email |
| GPT-3.5 (si API externe) | ~0.005$/email |

**Budget mensuel estimé** (100 leads/mois) : 15-25$/mois

## Améliorations possibles

### Niveau 2 : Enrichissement données

Ajoutez des modules pour enrichir automatiquement :
- LinkedIn (Apollo, Hunter)
- Données entreprise (Clearbit)
- Technos utilisées (BuiltWith)

### Niveau 3 : Scoring ML personnalisé

Entraînez un modèle sur vos données historiques :
- Leads convertis vs non-convertis
- Caractéristiques discriminantes
- Score personnalisé à votre business

### Niveau 4 : Agent conversationnel

Créez un agent qui :
- Répond aux questions de suivi
- Propose des créneaux automatiquement
- Qualifie progressivement

## Troubleshooting

### Erreurs fréquentes

| Erreur | Solution |
|--------|----------|
| "Invalid JSON" | Améliorer le prompt, ajouter gestion erreur |
| "Rate limit exceeded" | Ajouter délai entre exécutions |
| "Connection failed" | Reautoriser les connexions |
| "Empty response" | Vérifier le mapping des variables |

### Debug

1. **Run once** : Tester étape par étape
2. **History** : Voir les exécutions passées
3. **Logs** : Détail de chaque module
4. **DevTools** : Inspecter les données brutes

## Conclusion

Vous avez créé un agent IA fonctionnel qui :
- Analyse automatiquement les emails entrants
- Extrait les informations clés
- Qualifie les leads objectivement
- Déclenche les bonnes actions
- Personnalise les réponses

**Temps de mise en place** : 1-2 heures
**ROI** : Visible dès le premier mois

---

*DAINAMICS conçoit des agents IA sur mesure plus sophistiqués pour les PME suisses. Ce tutoriel n'est qu'un aperçu de ce qui est possible. Contactez-nous pour explorer vos cas d'usage spécifiques.*
