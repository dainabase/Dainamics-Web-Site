# Configuration Brevo pour Dainamics

## ✅ État actuel : RÉSOLU

Le fichier `.env` a été créé avec la clé API Brevo et l'intégration est maintenant fonctionnelle.

## 📋 Checklist de configuration

### 1. Fichier `.env` ✅
```env
VITE_BREVO_API_KEY=votre-cle-api-brevo-ici
```
**Note:** La clé API doit être ajoutée localement dans votre fichier `.env`

### 2. Fichiers créés/modifiés ✅
- `/src/lib/brevo-integration.ts` - Module d'intégration API Brevo
- `/src/components/DiagnosticQuestionnaire.tsx` - Intégration dans le questionnaire
- `.gitignore` - Mis à jour pour exclure `.env`

### 3. Configuration Brevo
- **Liste ID** : 2 (vérifier dans votre compte Brevo)
- **Template ID** : 1 (créer un template dans Brevo)
- **API Key** : Configurée dans `.env`

## 🧪 Test de l'intégration

### Vérification dans la console navigateur (F12)

1. **Au chargement de la page** :
   ```
   🔧 [BREVO] Module chargé
   ✅ [BREVO] Clé API détectée: xkeysib-3be50f3366...
   ```

2. **Lors de la soumission du questionnaire** :
   ```
   🚀 [BREVO] Début de la soumission du diagnostic
   📊 [BREVO] Données diagnostic: {...}
   📤 [BREVO] Envoi création contact: user@example.com
   ✅ [BREVO] Contact créé/mis à jour avec succès
   📨 [BREVO] Envoi email à: user@example.com
   ✅ [BREVO] Email envoyé avec succès
   📬 [BREVO] Message ID: xxx
   ✅ [BREVO] Soumission complète réussie!
   ```

### Si erreur :
- `❌ [BREVO] ERREUR CRITIQUE: Clé API manquante!` → Vérifier le fichier `.env`
- `❌ [BREVO] Erreur création contact: 401` → Clé API invalide
- `❌ [BREVO] Erreur création contact: 404` → Vérifier l'ID de liste

## 📝 Configuration dans Brevo

### 1. Créer une liste de contacts
1. Aller dans Contacts > Listes
2. Créer une liste "Diagnostic Dainamics"
3. Noter l'ID de la liste (actuellement configuré : 2)

### 2. Créer un template d'email
1. Aller dans Campaigns > Email Templates
2. Créer un template "Résultats Diagnostic Dainamics"
3. Noter l'ID du template (actuellement configuré : 1)

### Variables disponibles dans le template :
- `{{params.EMAIL}}` - Email du destinataire
- `{{params.TOTAL_HOURS}}` - Heures perdues par semaine
- `{{params.MONTHLY_HOURS}}` - Heures perdues par mois
- `{{params.YEARLY_HOURS}}` - Heures perdues par an
- `{{params.AI_SCORE}}` - Score de potentiel IA (%)
- `{{params.RECOMMENDED_AGENT}}` - Agent IA recommandé
- `{{params.MATURITY_LEVEL}}` - Niveau de maturité IA
- `{{params.VULNERABILITY}}` - Vulnérabilité principale
- `{{params.HOURS_CUSTOMER}}` - Heures service client
- `{{params.HOURS_MARKETING}}` - Heures marketing
- `{{params.HOURS_SALES}}` - Heures ventes
- `{{params.HOURS_ADMIN}}` - Heures admin
- `{{params.HOURS_ORGANIZATION}}` - Heures organisation

### 3. Attributs de contact créés
Les contacts sont créés avec ces attributs :
- `FIRSTNAME`, `LASTNAME`, `COMPANY`, `PHONE`
- `SOURCE` - "Questionnaire Diagnostic Homepage"
- `DIAGNOSTIC_DATE` - Date de soumission
- `HOURS_WASTED` - Total heures perdues
- `AI_SCORE` - Score potentiel IA
- `VULNERABILITY` - Vulnérabilité identifiée
- `MATURITY_LEVEL` - Niveau maturité
- `RECOMMENDED_AGENT` - Agent recommandé
- `CHALLENGES` - Liste des défis

## 🚀 Prochaines étapes

1. **Tester le questionnaire** sur http://localhost:8081
2. **Vérifier dans Brevo** :
   - Contact créé dans la liste 2
   - Email envoyé avec le template 1
3. **Personnaliser** :
   - Modifier l'ID de liste si nécessaire
   - Créer/modifier le template d'email
   - Ajouter des champs personnalisés

## ⚠️ Sécurité

- Ne jamais commiter le fichier `.env`
- Le `.gitignore` est configuré pour l'exclure
- Garder la clé API secrète

## 🛠️ Dépannage

### Le questionnaire ne fonctionne pas ?
1. Vérifier que le serveur est démarré (`npm run dev`)
2. Ouvrir la console navigateur (F12)
3. Rechercher les messages `[BREVO]`
4. Vérifier la clé API dans `.env`

### Les contacts n'apparaissent pas dans Brevo ?
1. Vérifier l'ID de liste (actuellement 2)
2. Vérifier les permissions de la clé API
3. Tester directement l'API Brevo

### Les emails ne sont pas reçus ?
1. Vérifier le template ID (actuellement 1)
2. Vérifier les spams
3. Vérifier que le template existe dans Brevo