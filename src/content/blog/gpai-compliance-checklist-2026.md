---
title: "GPAI Compliance : Checklist pour Août 2026"
slug: "gpai-compliance-checklist-2026"
excerpt: "Les obligations EU AI Act pour les modèles d'IA à usage général entrent en vigueur en août 2026. Préparez-vous maintenant."
category: "conformite"
author: "jean-marie"
publishedAt: "2025-11-27"
readTime: 10
featured: true
tags: ["gpai", "eu-ai-act", "conformite", "2026", "reglementation"]
metaDescription: "Checklist conformité GPAI EU AI Act août 2026 pour PME."
---

# GPAI Compliance : Checklist pour Août 2026

Le 2 août 2026, les obligations de l'EU AI Act concernant les General-Purpose AI (GPAI) entreront en vigueur. Si votre PME utilise ou développe des solutions basées sur des modèles comme GPT-4, Claude ou Llama, vous êtes concerné. Voici votre checklist de préparation.

## Qu'est-ce qu'un modèle GPAI ?

### Définition officielle

Un **General-Purpose AI Model** (GPAI) est un modèle IA capable d'exécuter une large variété de tâches distinctes, indépendamment de la manière dont il a été mis sur le marché.

### Exemples concrets

| Modèle | Fournisseur | Type GPAI |
|--------|-------------|-----------|
| GPT-4, GPT-4o | OpenAI | GPAI standard |
| GPT-4 Turbo | OpenAI | GPAI potentiellement systémique |
| Claude 3/4 | Anthropic | GPAI standard |
| Gemini Pro | Google | GPAI standard |
| Gemini Ultra | Google | GPAI potentiellement systémique |
| Llama 4 | Meta | GPAI open source |
| Mistral Large | Mistral AI | GPAI standard |

### Qui est concerné ?

**Fournisseurs de GPAI** : OpenAI, Anthropic, Google, Meta, Mistral...
- Obligations les plus lourdes
- Documentation technique exhaustive
- Évaluations de conformité

**Deployers (utilisateurs professionnels)** : Vous, potentiellement
- Obligations de transparence
- Due diligence sur les modèles utilisés
- Documentation des usages

**PME suisses** : Concernées si vous servez des clients EU ou utilisez des GPAI dans des systèmes IA déployés dans l'UE.

## Les deux catégories de GPAI

### GPAI Standard

**Critère** : Tout modèle GPAI ne dépassant pas les seuils systémiques.

**Obligations fournisseurs** :
1. Documentation technique
2. Information aux deployers en aval
3. Politique de respect du droit d'auteur
4. Résumé des données d'entraînement

### GPAI à Risque Systémique

**Critère** : Puissance de calcul d'entraînement > 10²⁵ FLOPs ou désignation par la Commission.

**Modèles concernés (estimation 2025)** :
- GPT-4 Turbo et successeurs
- Gemini Ultra
- Claude Opus (potentiellement)
- Futurs modèles frontier

**Obligations supplémentaires** :
1. Évaluations de modèle
2. Tests adversariaux (red teaming)
3. Suivi des incidents
4. Cybersécurité renforcée
5. Reporting efficacité énergétique

## Checklist PME — 9 mois avant l'échéance

### Étape 1 : Inventaire (Maintenant - Décembre 2025)

**Action** : Listez tous les systèmes IA utilisant des GPAI dans votre organisation.

| Système | GPAI utilisé | Fournisseur | Usage | Déploiement EU ? |
|---------|--------------|-------------|-------|------------------|
| Chatbot support | GPT-4 | OpenAI | Service client | Oui |
| Extraction docs | Claude 3 | Anthropic | Interne | Non |
| Génération contenu | GPT-4 | OpenAI | Marketing | Oui |
| Analyse données | Gemini | Google | Interne | Non |

**Questions clés** :
- [ ] Quels modèles GPAI utilisez-vous ?
- [ ] Via API directe ou via un intermédiaire ?
- [ ] Pour quels cas d'usage ?
- [ ] Déployés dans l'UE ou servant des clients EU ?

---

### Étape 2 : Classification (Janvier 2026)

**Action** : Déterminez votre rôle dans la chaîne de valeur IA.

**Vous êtes "Deployer" si** :
- Vous utilisez un GPAI via API pour créer votre propre système IA
- Vous intégrez un GPAI dans votre produit/service
- Vous mettez à disposition des utilisateurs finaux un système basé sur GPAI

**Vous êtes "Provider" si** :
- Vous développez votre propre modèle GPAI
- Vous fine-tunez significativement un modèle existant
- Vous distribuez un modèle GPAI (même open source)

**La plupart des PME sont "Deployers"** — obligations plus légères.

---

### Étape 3 : Due diligence fournisseurs (Février 2026)

**Action** : Vérifiez la conformité de vos fournisseurs GPAI.

**Checklist par fournisseur** :

| Critère | OpenAI | Anthropic | Google | Mistral |
|---------|--------|-----------|--------|---------|
| Documentation technique disponible | ✓ | ✓ | ✓ | ✓ |
| Politique copyright publiée | ✓ | ✓ | ✓ | ✓ |
| Résumé données entraînement | Partiel | Partiel | Partiel | ✓ |
| Engagement conformité EU AI Act | ✓ | ✓ | ✓ | ✓ |
| Point de contact EU | ✓ | ✓ | ✓ | ✓ (siège EU) |

**Documents à demander** :
- [ ] Technical documentation sheet
- [ ] Terms of service (vérifier clauses AI Act)
- [ ] Data processing agreement (GDPR)
- [ ] Déclaration de conformité (si disponible)

---

### Étape 4 : Transparence utilisateurs (Mars 2026)

**Action** : Assurez-vous que vos utilisateurs savent qu'ils interagissent avec une IA.

**Obligations article 50** :
- Informer que le contenu est généré par IA
- Informer de l'interaction avec un système IA (chatbot)
- Marquer les deepfakes et contenus synthétiques

**Implémentation pratique** :

```
Chatbot :
"Bonjour ! Je suis l'assistant virtuel de [Entreprise], 
alimenté par intelligence artificielle. Comment puis-je vous aider ?"
```

```
Contenu généré :
"Cet article a été rédigé avec l'assistance de l'IA 
et vérifié par notre équipe."
```

```
Email marketing :
[Mention footer] "Certains éléments de ce message ont été 
générés avec l'aide de l'intelligence artificielle."
```

---

### Étape 5 : Documentation interne (Avril 2026)

**Action** : Créez votre registre des systèmes IA basés sur GPAI.

**Template de fiche système** :

```
FICHE SYSTÈME IA #001
=====================
Nom : Chatbot Support Client
Date création : 15/03/2024
Dernière MAJ : 01/04/2026

MODÈLE GPAI
-----------
- Nom : GPT-4-turbo
- Fournisseur : OpenAI
- Version : gpt-4-turbo-2024-04-09
- Via : API directe

USAGE
-----
- Fonction : Répondre aux questions clients
- Périmètre : FAQ, statut commandes, informations produits
- Utilisateurs : Clients site web (EU + CH)
- Volume : ~2'000 conversations/mois

TRANSPARENCE
------------
- [ ] Mention "assistant IA" présente
- [ ] Possibilité escalade humaine claire
- [ ] Non-collecte données sensibles

SUPERVISION
-----------
- Responsable : [Nom]
- Revue mensuelle : Oui
- Logs conservés : 90 jours

RISQUES IDENTIFIÉS
------------------
- Hallucinations sur infos produits → Mitigation : base de connaissance stricte
- Données personnelles → Mitigation : pas de stockage conversation
```

---

### Étape 6 : Processus de supervision (Mai 2026)

**Action** : Mettez en place une gouvernance des systèmes GPAI.

**Gouvernance minimale PME** :

| Rôle | Responsabilité | Fréquence |
|------|----------------|-----------|
| Responsable IA | Supervision globale, conformité | Hebdo |
| Équipe technique | Monitoring, incidents | Quotidien |
| Direction | Validation stratégique | Mensuel |

**Processus recommandés** :
1. **Revue mensuelle** des performances et incidents
2. **Escalade** en cas d'incident grave
3. **Mise à jour** documentation si changement de modèle
4. **Veille** sur évolutions réglementaires

---

### Étape 7 : Gestion des incidents (Juin 2026)

**Action** : Préparez votre procédure de gestion d'incidents IA.

**Incidents à tracker** :
- Réponses incorrectes/nuisibles
- Fuites de données
- Comportements inattendus
- Plaintes utilisateurs
- Biais détectés

**Template procédure** :

```
PROCÉDURE INCIDENT IA
=====================
1. DÉTECTION
   - Signalement utilisateur
   - Monitoring automatique
   - Revue manuelle

2. ÉVALUATION (< 4h)
   - Criticité : Basse / Moyenne / Haute / Critique
   - Impact : Nombre utilisateurs, données concernées
   - Cause probable

3. ACTION IMMÉDIATE
   - Critique : Désactivation système
   - Haute : Limitation périmètre
   - Moyenne : Surveillance renforcée
   - Basse : Documentation

4. CORRECTION (selon criticité)
   - Analyse root cause
   - Correction
   - Test
   - Redéploiement

5. DOCUMENTATION
   - Fiche incident
   - Leçons apprises
   - MAJ documentation système

6. REPORTING (si requis)
   - Interne : Direction
   - Externe : Autorité si incident grave
```

---

### Étape 8 : Formation équipes (Juillet 2026)

**Action** : Formez vos équipes aux obligations EU AI Act.

**Programme formation recommandé** :

| Public | Durée | Contenu |
|--------|-------|---------|
| Direction | 2h | Aperçu obligations, responsabilités, risques |
| Technique | 4h | Obligations détaillées, documentation, monitoring |
| Support/Vente | 2h | Transparence, réponses utilisateurs |
| Tous | 1h | Sensibilisation générale IA responsable |

**Points clés à couvrir** :
- Qu'est-ce qu'un GPAI ?
- Nos systèmes concernés
- Obligations de transparence
- Comment signaler un incident
- Ressources et contacts

---

### Étape 9 : Validation finale (Août 2026)

**Checklist pré-échéance** :

**Documentation**
- [ ] Inventaire systèmes IA complet
- [ ] Fiches système pour chaque GPAI
- [ ] Procédure incidents documentée
- [ ] Registre de gouvernance

**Conformité fournisseurs**
- [ ] Due diligence tous fournisseurs GPAI
- [ ] Contrats à jour (mentions AI Act)
- [ ] Documentation technique obtenue

**Transparence**
- [ ] Mentions IA sur tous les points de contact
- [ ] Marquage contenus générés par IA
- [ ] Information utilisateurs claire

**Organisation**
- [ ] Responsable IA désigné
- [ ] Processus supervision en place
- [ ] Équipes formées
- [ ] Procédure incidents testée

## Sanctions et risques

### Amendes prévues

| Infraction | Amende maximale |
|------------|-----------------|
| Non-conformité GPAI | 15M€ ou 3% CA mondial |
| Fausses informations | 7.5M€ ou 1% CA mondial |

### Risques business

- Interdiction de mise sur le marché EU
- Retrait de produits
- Atteinte réputationnelle
- Perte de clients EU

## Ressources utiles

### Documents officiels

- **EU AI Act** : [eur-lex.europa.eu](https://eur-lex.europa.eu)
- **AI Office** : Bureau européen IA
- **Codes de pratique GPAI** : En cours de finalisation

### Suisse

- **PFPDT** : Préposé protection données
- **SECO** : Pour aspects commerciaux
- **Associations sectorielles** : Guidelines spécifiques

## Calendrier récapitulatif

| Date | Échéance |
|------|----------|
| Fév 2025 | Interdictions AI Act en vigueur |
| Août 2025 | Codes de pratique GPAI finalisés |
| **Août 2026** | **Obligations GPAI en vigueur** |
| Août 2027 | Obligations systèmes haut risque |

---

*DAINAMICS accompagne les PME suisses dans leur mise en conformité EU AI Act. Contactez-nous pour un audit de vos systèmes IA et un plan de conformité personnalisé.*
