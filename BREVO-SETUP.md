# 🔐 CONFIGURATION ENVIRONNEMENT BREVO

## ⚠️ PROBLÈME IDENTIFIÉ

**Le questionnaire diagnostic ne remonte pas dans Brevo car le fichier `.env` n'existe pas localement.**

## ✅ SOLUTION IMMÉDIATE

### 1. Créer le fichier `.env` à la racine du projet

Créez un nouveau fichier nommé `.env` (et non `.env.local`) à la racine du projet, au même niveau que `package.json`.

### 2. Ajouter la clé API Brevo

Copiez ce contenu dans le fichier `.env` et remplacez par votre clé API :

```env
# Brevo API Configuration
VITE_BREVO_API_KEY=votre-cle-api-brevo-ici
```

**Note :** La clé API a été fournie dans votre message initial. Elle commence par `xkeysib-`.

### 3. Redémarrer le serveur de développement

Après avoir créé le fichier `.env`, il faut redémarrer Vite :

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer
npm run dev
```

## 📊 DIAGNOSTIC COMPLET

### État actuel :
- ❌ Fichier `.env` n'existe pas
- ❌ Fichier `.env.local` n'existe pas  
- ✅ Fichier `.env.example` créé (template)
- ✅ Import correct dans `brevo-integration.ts` (ligne 6)
- ✅ `.gitignore` configuré pour exclure `.env`

### Configuration dans le code :

**Fichier:** `src/lib/brevo-integration.ts`  
**Ligne 6:** `const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';`

Le code vérifie bien la présence de la clé (ligne 33-40) et affiche des erreurs console si elle est manquante.

## 🔍 VÉRIFICATION

Après configuration, vérifiez dans la console du navigateur (F12) :

1. **Si succès :**
   - `✅ [BREVO] Clé API détectée: xkeysib-3be50f3366140...`
   - `✅ [BREVO] Contact créé/mis à jour`
   - `✅ [BREVO] Email de confirmation envoyé`

2. **Si échec :**
   - `❌ [BREVO] ERREUR CRITIQUE: Clé API manquante !`

## 🚨 IMPORTANT - SÉCURITÉ

- **Ne jamais** committer le fichier `.env` sur GitHub
- Le fichier `.gitignore` est déjà configuré pour l'exclure
- La clé API doit rester **confidentielle**
- Pour la production, utiliser les variables d'environnement du serveur

## 📝 NOTES TECHNIQUES

- **Préfixe obligatoire :** `VITE_` pour les variables d'environnement Vite
- **Format :** Pas de guillemets autour de la valeur
- **Rechargement :** Nécessite redémarrage après modification

## ⚡ RÉSOLUTION RAPIDE

```bash
# Copier-coller ces commandes dans le terminal à la racine du projet :

# 1. Créer le fichier .env avec la clé API
echo "VITE_BREVO_API_KEY=votre-cle-api-ici" > .env

# 2. Vérifier que le fichier est créé
cat .env

# 3. Redémarrer le serveur
npm run dev
```

## 🔧 DÉPANNAGE

### Le questionnaire ne fonctionne toujours pas ?

1. **Vérifier la console navigateur** (F12) pour les erreurs
2. **Vérifier que le fichier `.env` est bien à la racine** (pas dans `/src`)
3. **Vérifier l'orthographe** : `VITE_BREVO_API_KEY` exactement
4. **Vider le cache** : Ctrl+Shift+R dans le navigateur
5. **Vérifier la liste Brevo** : ID de liste = 2 (ligne 9 de `brevo-integration.ts`)

### Structure attendue du projet :

```
dainamics-web-site/
├── .env                    ← LE FICHIER À CRÉER ICI
├── .env.example            ← Template (déjà créé)
├── .gitignore              ← Exclut .env (OK)
├── package.json
├── src/
│   └── lib/
│       └── brevo-integration.ts  ← Code intégration (OK)
└── ...
```

---

**Date diagnostic :** 22 octobre 2025  
**Fichier créé pour :** Résoudre le problème d'intégration Brevo
