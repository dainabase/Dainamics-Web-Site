import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Zap, Code, Search, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorEffects from '@/components/CursorEffects';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';

// Investment Level Indicator Component
const InvestmentLevel = ({ level, label }: { level: 1 | 2 | 3 | 4; label: string }) => {
  const dollars = '$'.repeat(level);
  const emptyDollars = '$'.repeat(4 - level);
  const colors = {
    1: 'text-green-400',
    2: 'text-yellow-400',
    3: 'text-orange-400',
    4: 'text-red-400'
  };

  return (
    <span className="inline-flex items-center gap-2 font-mono">
      <span className={colors[level]}>{dollars}</span>
      <span className="text-white/20">{emptyDollars}</span>
      <span className="text-white/70 text-sm">({label})</span>
    </span>
  );
};

// Types
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ia' | 'automatisation' | 'developpement';
}

// Données FAQ extraites de DAINAMICS_FAQ_Complete_30_QR.md
const faqData: FAQItem[] = [
  // PARTIE 1 : INTELLIGENCE ARTIFICIELLE
  {
    id: 'ia-1',
    category: 'ia',
    question: "Combien ça coûte concrètement d'intégrer l'IA dans ma PME, et quel retour sur investissement puis-je espérer ?",
    answer: `Le coût d'intégration de l'IA varie considérablement selon le type de projet :

• Chatbot IA pour support client : $ à $$ (ROI typique 3-6 mois)
• Automatisation intelligente de documents : $$ (ROI typique 2-4 mois)
• Assistant IA sur mesure : $$ à $$$ (ROI typique 4-8 mois)
• Plateforme IA complète : $$$ à $$$$ (ROI typique 6-12 mois)

En termes de retour sur investissement, nos clients PME constatent en moyenne :
• 40-70% de réduction du temps passé sur les tâches répétitives
• Gain de temps considérable chaque semaine
• ROI positif constaté dès les premiers mois

Le secret ? Commencer petit avec un projet "Quick Win" qui prouve la valeur rapidement, puis étendre progressivement. Chez DAINAMICS, notre offre Discovery permet justement d'identifier le projet IA à plus fort impact pour votre entreprise avant tout investissement majeur.`
  },
  {
    id: 'ia-2',
    category: 'ia',
    question: "Par où commencer avec l'IA quand on n'a ni équipe technique dédiée, ni compétences en interne ?",
    answer: `C'est justement la situation de 90% de nos clients PME — et ce n'est absolument pas un obstacle.

Voici notre approche en 4 étapes :

1. Identifier vos "points de douleur" : Quelles tâches répétitives consomment le plus de temps ? Où vos équipes perdent-elles des heures chaque semaine ? (facturation, emails, saisie de données, support client...)

2. Commencer par un projet simple : Un chatbot FAQ, une automatisation de devis, ou l'extraction automatique de documents. Ces projets ont un ROI rapide et visible.

3. Choisir un partenaire qui gère tout : Chez DAINAMICS, nous prenons en charge l'intégralité du projet — de la conception au déploiement, en passant par la formation de vos équipes. Vous n'avez besoin d'aucune compétence technique.

4. Former progressivement : Une fois le premier projet en place, vos équipes montent naturellement en compétence en utilisant les outils au quotidien.

Notre recommandation : réservez un appel découverte gratuit de 30 minutes. Nous analyserons ensemble vos processus et identifierons le meilleur point de départ — sans jargon technique.`
  },
  {
    id: 'ia-3',
    category: 'ia',
    question: "Est-ce que l'IA va remplacer certains postes dans mon entreprise ? Comment rassurer mes équipes ?",
    answer: `Soyons clairs : l'IA ne remplace pas les employés, elle remplace les tâches répétitives que personne n'aime faire.

Ce que l'IA prend en charge :
• La saisie manuelle de données
• Les réponses aux questions récurrentes
• Le tri et classement de documents
• Les relances et suivis standardisés
• La génération de rapports

Ce que l'IA ne peut PAS faire :
• Négocier avec un client difficile
• Prendre des décisions stratégiques
• Gérer les relations humaines
• Faire preuve de créativité et d'empathie
• Résoudre des problèmes complexes et inédits

Comment rassurer vos équipes ?
1. Impliquez-les dès le début : Demandez-leur quelles tâches ils aimeraient voir automatisées
2. Montrez les bénéfices personnels : Plus de temps pour les missions intéressantes, moins de travail rébarbatif
3. Formez-les : L'IA devient un outil qu'ils maîtrisent, pas une menace
4. Communiquez clairement : L'objectif est la croissance, pas la réduction d'effectifs

Nos clients constatent que leurs équipes deviennent les plus grands défenseurs de l'IA une fois qu'elles l'utilisent au quotidien.`
  },
  {
    id: 'ia-4',
    category: 'ia',
    question: "Quels sont les cas d'usage concrets de l'IA qui apportent vraiment des résultats pour une PME comme la mienne ?",
    answer: `Voici les 6 cas d'usage IA les plus rentables pour les PME, validés par nos projets :

1. Chatbot support client intelligent
• Répond à 70-80% des questions récurrentes
• Disponible 24/7 en plusieurs langues
• Résultat : -40% de tickets support, satisfaction client +35%

2. Extraction automatique de documents
• Factures, bons de commande, contrats traités automatiquement
• Données extraites et injectées dans votre ERP/CRM
• Résultat : 15h → 30min par mois, -95% d'erreurs de saisie

3. Assistant commercial IA
• Génère devis et propositions personnalisés
• Analyse les opportunités dans votre CRM
• Résultat : +40% de productivité commerciale

4. Analyse prédictive des stocks
• Prédit la demande basée sur l'historique
• Alerte ruptures et surstocks
• Résultat : -25% stock dormant, -60% ruptures

5. Rédaction assistée par IA
• Emails, rapports, contenus marketing
• Adaptation au ton de votre entreprise
• Résultat : 2h → 20min par document

6. Qualification automatique des leads
• Score les prospects selon leur potentiel
• Priorise les actions commerciales
• Résultat : +30% de conversion`
  },
  {
    id: 'ia-5',
    category: 'ia',
    question: "Mes données clients sont-elles protégées si j'utilise ChatGPT ou d'autres outils d'IA ? Est-ce conforme au RGPD ?",
    answer: `C'est LA question critique — et la réponse dépend de comment vous utilisez l'IA.

Les risques avec les outils grand public (ChatGPT, Copilot gratuit, etc.) :
• Vos données peuvent être utilisées pour entraîner les modèles
• Hébergement sur des serveurs américains (hors RGPD/LPD)
• Aucune garantie de confidentialité
• Non conforme pour les données clients sensibles

Notre approche chez DAINAMICS — 100% conforme :

1. Hébergement en Suisse : Tous nos projets sont déployés sur des datacenters suisses (conformité LPD et RGPD)

2. Environnement fermé : Vos données ne sortent jamais de votre environnement et ne sont JAMAIS utilisées pour entraîner des modèles externes

3. Modèles privés : Nous utilisons des instances privées des LLMs, pas les versions grand public

4. Chiffrement bout-en-bout : Données chiffrées au repos et en transit

5. Audit et traçabilité : Logs complets de toutes les interactions IA

En résumé : Oui, l'IA peut être 100% conforme RGPD/LPD — mais cela nécessite une architecture appropriée. C'est exactement ce que nous mettons en place pour nos clients.`
  },
  {
    id: 'ia-6',
    category: 'ia',
    question: "Combien de temps faut-il pour mettre en place une solution d'IA opérationnelle ?",
    answer: `Les délais varient selon la complexité du projet. Voici nos références :

Projets "Quick Win" (2-4 semaines) :
• Chatbot FAQ basique
• Automatisation d'emails avec IA
• Extraction de documents simple
• Assistant rédactionnel interne

Projets intermédiaires (6-12 semaines) :
• Chatbot multilingue connecté à votre base de données
• Système d'extraction de documents complexes (factures, contrats)
• Assistant commercial personnalisé
• Automatisation workflow avec IA

Projets avancés (3-6 mois) :
• Plateforme IA complète sur mesure
• Système de prédiction (stocks, ventes, maintenance)
• Solution RAG (IA sur vos documents privés)
• Intégration multi-systèmes complexe

Notre processus :
1. Semaine 1 : Analyse et cadrage
2. Semaine 2-3 : Prototype fonctionnel
3. Semaine 4+ : Développement, tests, déploiement

L'avantage de commencer par un Quick Win ? Vous avez des résultats concrets en moins d'un mois, ce qui facilite l'adhésion interne et justifie les investissements suivants.`
  },
  {
    id: 'ia-7',
    category: 'ia',
    question: "L'IA générative comme ChatGPT, ça sert vraiment à quoi dans le quotidien d'une entreprise ?",
    answer: `L'IA générative est devenue un outil de productivité quotidien pour les PME. Voici les 10 usages concrets les plus courants :

Communication & Rédaction :
1. Rédiger des emails professionnels en 30 secondes
2. Créer des propositions commerciales personnalisées
3. Générer des contenus marketing (posts, newsletters)
4. Traduire et adapter des documents en plusieurs langues

Administration & Support :
5. Répondre automatiquement aux questions clients fréquentes
6. Résumer des documents longs (contrats, rapports)
7. Rédiger des comptes-rendus de réunion
8. Créer des procédures et documentation interne

Analyse & Décision :
9. Analyser des feedbacks clients pour identifier les tendances
10. Comparer des offres fournisseurs

Attention cependant :
• Ne jamais copier-coller de données confidentielles dans ChatGPT gratuit
• Toujours vérifier les informations générées
• Adapter le ton aux standards de votre entreprise

Pour un usage professionnel sécurisé, nous recommandons de déployer une instance privée, entraînée sur vos données et processus. C'est ce que nous proposons avec nos solutions IA sur mesure.`
  },
  {
    id: 'ia-8',
    category: 'ia',
    question: "Quels sont les risques et les erreurs à éviter quand on adopte l'IA en PME ?",
    answer: `Après avoir accompagné des dizaines de PME, voici les 7 erreurs les plus coûteuses à éviter :

Erreur #1 : Vouloir tout automatiser d'un coup
→ Commencez par UN processus, prouvez la valeur, puis étendez

Erreur #2 : Ignorer la qualité des données
→ L'IA est aussi bonne que vos données. Nettoyez avant d'automatiser

Erreur #3 : Utiliser des outils grand public pour des données sensibles
→ ChatGPT gratuit n'est PAS conforme RGPD/LPD pour vos données clients

Erreur #4 : Ne pas impliquer les équipes
→ Les utilisateurs finaux doivent participer dès la conception

Erreur #5 : Attendre la perfection
→ Un système à 80% déployé bat un système parfait jamais lancé

Erreur #6 : Sous-estimer la maintenance
→ Prévoyez 15-20% du budget initial par an pour les évolutions

Erreur #7 : Choisir le prestataire le moins cher
→ Un projet mal fait coûte 3x plus cher à corriger qu'à bien faire

Notre conseil : Faites un audit préalable avec un expert. Notre offre Discovery identifie précisément où l'IA apportera le plus de valeur dans VOTRE contexte, et établit une feuille de route réaliste.`
  },
  {
    id: 'ia-9',
    category: 'ia',
    question: "Comment choisir le bon prestataire ou outil d'IA pour mon entreprise ?",
    answer: `Voici les 8 critères essentiels pour évaluer un prestataire IA :

1. Localisation des données
• Où sont hébergées vos données ? Suisse/Europe = conforme LPD/RGPD
• Demandez des preuves (certifications, contrats datacenter)

2. Expérience PME
• A-t-il déjà travaillé avec des entreprises de votre taille ?
• Références vérifiables dans votre secteur ?

3. Transparence sur l'IA utilisée
• Quels modèles ? OpenAI, Anthropic, open source ?
• Vos données servent-elles à entraîner des modèles publics ?

4. Approche projet
• Propose-t-il un prototype rapide avant l'engagement complet ?
• Méthodologie claire avec jalons définis ?

5. Propriété du code
• Le code vous appartient-il à la fin du projet ?
• Pouvez-vous changer de prestataire sans tout perdre ?

6. Support et maintenance
• Que se passe-t-il après le lancement ?
• SLA (temps de réponse garanti) ?

7. Formation incluse
• Vos équipes seront-elles formées ?
• Documentation fournie ?

8. Pricing transparent
• Coûts cachés ? Licences récurrentes ?
• Coût de la maintenance annuelle ?

Chez DAINAMICS, nous cochons toutes ces cases — et nous vous encourageons à poser ces questions à tous les prestataires que vous évaluez.`
  },
  {
    id: 'ia-10',
    category: 'ia',
    question: "Mon entreprise est-elle prête pour l'IA ? Ai-je les bonnes données et la bonne organisation ?",
    answer: `Bonne nouvelle : vous n'avez pas besoin d'être "parfaitement prêt" pour commencer. Voici notre grille d'évaluation :

✅ Vous êtes PRÊT si :
• Vous avez au moins UN processus répétitif clairement identifié
• Vos données existent quelque part (même dans Excel)
• Au moins une personne peut consacrer 2-3h/semaine au projet
• Vous avez un budget dédié pour un premier projet

⚠️ Vous devez d'abord préparer si :
• Vos données sont éparpillées sans aucune structure
• Personne ne peut décrire clairement vos processus actuels
• Il n'y a aucun sponsor interne pour le projet
• Vous attendez que l'IA "fasse tout toute seule"

🔴 Attendez encore si :
• Votre entreprise traverse une restructuration majeure
• Vous n'avez pas de budget dédié
• La direction n'est pas convaincue de l'intérêt

Notre recommandation :
Ne cherchez pas la perfection. Les meilleurs projets IA commencent avec des données imparfaites et s'améliorent en cours de route. L'important est d'avoir :
1. Un problème clair à résoudre
2. Un sponsor interne motivé
3. Un partenaire qui sait gérer l'imperfection

Notre audit Discovery évalue précisément votre niveau de maturité et propose un plan d'action adapté.`
  },

  // PARTIE 2 : AUTOMATISATION
  {
    id: 'auto-1',
    category: 'automatisation',
    question: "Par quels processus commencer pour automatiser mon entreprise ?",
    answer: `Le choix du premier processus à automatiser est crucial. Voici notre méthode pour identifier les "quick wins" :

Critères d'un bon candidat à l'automatisation :
• Répétitif : Exécuté >10x par semaine
• Chronophage : >2h par semaine
• Basé sur des règles : Si X alors Y
• Fort taux d'erreur : Erreurs humaines fréquentes
• Multi-systèmes : Copier-coller entre outils

Top 5 des processus à automatiser en premier :

1. Facturation et relances : Génération automatique des factures, envoi programmé, relances séquencées
   Gain typique : 10-15h/mois

2. Onboarding client : Email de bienvenue, création de comptes, envoi de documents
   Gain typique : 30min → 2min par client

3. Synchronisation CRM : Contacts, opportunités, historique entre outils
   Gain typique : Fin des doubles saisies

4. Reporting : Tableaux de bord automatiques, rapports hebdo/mensuels
   Gain typique : 4h → 15min par rapport

5. Notifications internes : Alertes stock, rappels tâches, escalades
   Gain typique : Zéro oubli

Notre conseil : Commencez par le processus qui génère le plus de frustration dans vos équipes. L'adhésion sera immédiate.`
  },
  {
    id: 'auto-2',
    category: 'automatisation',
    question: "Combien coûte l'automatisation pour une PME et quel est le retour sur investissement ?",
    answer: `L'automatisation est l'investissement tech au ROI le plus rapide pour une PME. Voici les chiffres :

Coûts typiques :
• Automatisation simple (1-2 outils) : $ (ROI 2-3 mois)
• Workflow multi-étapes : $ à $$ (ROI 3-4 mois)
• Automatisation complexe (5+ systèmes) : $$ (ROI 4-6 mois)
• Transformation processus complet : $$ à $$$ (ROI 6-9 mois)

Exemple concret — Client DAINAMICS :
PME de services, 25 employés
• Problème : 20h/semaine passées sur facturation + relances manuelles
• Solution : Automatisation complète avec Bexio + Make
• Investissement : $
• Résultat : 20h → 2h/semaine = gain de temps substantiel
• ROI : Amorti en quelques semaines

En moyenne, nos clients récupèrent leur investissement en 3-4 mois.`
  },
  {
    id: 'auto-3',
    category: 'automatisation',
    question: "Quelle est la différence entre automatisation et intelligence artificielle ?",
    answer: `Cette confusion est très fréquente. Voici une explication simple :

AUTOMATISATION (RPA/BPA)
• Principe : "Si X se passe, alors faire Y"
• Logique : Règles fixes, prédéfinies par un humain
• Exemple : "Quand une facture arrive par email, l'enregistrer dans le dossier client"
• Adapté pour : Tâches répétitives avec des règles claires
• Limite : Ne gère pas les exceptions ou situations nouvelles

INTELLIGENCE ARTIFICIELLE
• Principe : "Analyser, comprendre, décider"
• Logique : Apprentissage, adaptation, jugement
• Exemple : "Lire cette facture, comprendre son contenu, extraire les données même si le format change"
• Adapté pour : Tâches nécessitant compréhension ou décision
• Limite : Plus complexe et coûteux à mettre en place

AUTOMATISATION + IA (le combo gagnant)
• L'IA comprend et extrait l'information
• L'automatisation exécute les actions
• Exemple : L'IA lit un email client, comprend sa demande, et l'automatisation route vers le bon service + envoie un accusé réception personnalisé

Notre recommandation :
• Processus simples et règles claires → Automatisation seule
• Compréhension de texte/documents → IA + Automatisation
• Décisions complexes → IA supervisée par un humain

Chez DAINAMICS, nous combinons les deux selon vos besoins.`
  },
  {
    id: 'auto-4',
    category: 'automatisation',
    question: "Est-ce que l'automatisation va remplacer mes employés ?",
    answer: `Non — et voici pourquoi c'est même l'inverse qui se produit :

Ce que l'automatisation remplace :
• Les tâches répétitives que personne n'aime
• Les copier-coller entre systèmes
• Les vérifications manuelles fastidieuses
• Les envois d'emails standardisés
• La saisie de données

Ce que l'automatisation NE remplace PAS :
• La relation client
• La négociation commerciale
• La résolution de problèmes complexes
• La créativité et l'innovation
• Le management d'équipe

L'effet réel observé chez nos clients :

1. Les employés font un travail plus intéressant : Moins de tâches rébarbatives, plus de valeur ajoutée

2. L'entreprise peut croître sans embaucher proportionnellement : Faire plus avec la même équipe

3. La satisfaction augmente : Nos enquêtes montrent +40% de satisfaction employé post-automatisation

4. De nouveaux rôles apparaissent : Supervision des automatisations, amélioration continue, relation client premium

Témoignage typique :
"Avant, je passais 3h par jour à faire des relances. Maintenant c'est automatique et je peux enfin me concentrer sur le développement commercial." — Responsable admin, PME 30 employés

L'automatisation libère du temps pour ce qui compte vraiment.`
  },
  {
    id: 'auto-5',
    category: 'automatisation',
    question: "Ai-je besoin de compétences techniques ou d'un développeur pour automatiser mes processus ?",
    answer: `Réponse courte : Non, dans 85% des cas.

Les outils modernes d'automatisation sont conçus pour être utilisés sans code :

Outils No-Code (aucune compétence technique) :
• Zapier : Interface glisser-déposer, +8 000 applications
• Make (ex-Integromat) : Workflows visuels, très puissant
• n8n : Open source, auto-hébergeable

Ce que vous POUVEZ faire sans développeur :
• Connecter vos applications entre elles
• Créer des workflows conditionnels (si/alors)
• Automatiser emails, notifications, synchronisations
• Générer des rapports automatiques
• Créer des formulaires connectés

Ce qui NÉCESSITE un développeur :
• Intégrations avec des systèmes legacy sans API
• Logique métier très complexe
• Automatisations critiques nécessitant haute fiabilité
• Connexions à des bases de données custom
• Volumes très importants (>10 000 opérations/jour)

Notre approche chez DAINAMICS :
1. On construit pour vous : Vous décrivez le besoin, on implémente
2. On vous forme : Vous apprenez à modifier et étendre
3. On reste disponible : Support pour les cas complexes

Résultat : Vous gagnez en autonomie progressivement, sans jamais être bloqué.`
  },
  {
    id: 'auto-6',
    category: 'automatisation',
    question: "Comment intégrer l'automatisation avec mes outils existants (CRM, ERP, comptabilité) ?",
    answer: `L'intégration est LA question clé. Voici comment nous procédons :

Étape 1 : Inventaire de vos outils
Listez tous vos logiciels :
• CRM (Salesforce, HubSpot, Pipedrive...)
• Comptabilité (Bexio, Abacus, Klara...)
• ERP (SAP, Odoo, Dolibarr...)
• Communication (Outlook, Gmail, Slack...)
• Stockage (Google Drive, SharePoint, Dropbox...)

Étape 2 : Vérifier les connecteurs disponibles
La plupart des outils modernes ont des connecteurs Zapier/Make :
• Bexio ✅, Salesforce ✅, HubSpot ✅
• SAP ⚠️ (API disponible), Abacus ❌ (API custom nécessaire)

Étape 3 : Choisir la bonne approche
• Connecteur natif existe → Utiliser Zapier/Make (rapide, économique)
• API disponible mais pas de connecteur → Développement custom léger
• Aucune API → Alternatives : export/import automatisé, RPA, ou migration vers outil moderne

Cas fréquent en Suisse :
Bexio + HubSpot + Gmail + Google Drive = 100% intégrable en quelques jours

Notre garantie :
Avant tout projet, nous vérifions la faisabilité technique et vous donnons un plan d'intégration clair.`
  },
  {
    id: 'auto-7',
    category: 'automatisation',
    question: "Combien de temps faut-il pour mettre en place une automatisation ?",
    answer: `Voici nos délais réels, basés sur des dizaines de projets :

Automatisation simple (3-5 jours)
• 2 applications connectées
• Workflow linéaire (A → B)
• Exemple : Nouveau contact HubSpot → Création fiche Bexio

Automatisation intermédiaire (1-2 semaines)
• 3-5 applications
• Logique conditionnelle
• Exemple : Commande reçue → Vérification stock → Notification équipe OU alerte rupture → Création tâche réappro

Automatisation complexe (3-6 semaines)
• 5+ applications
• Logique métier avancée
• Gestion d'erreurs robuste
• Exemple : Workflow complet devis → commande → facturation → relance → reporting

Transformation processus (2-3 mois)
• Refonte complète d'un département
• Multiple workflows interconnectés
• Formation équipes incluse

Notre processus type :
1. Jour 1-2 : Analyse du besoin, mapping du processus
2. Jour 3-5 : Construction du workflow
3. Jour 6-7 : Tests avec données réelles
4. Jour 8-10 : Ajustements, documentation, formation
5. Semaine 2+ : Déploiement progressif, monitoring

Conseil : Prévoyez 20% de temps en plus pour les imprévus (données mal formatées, cas particuliers non anticipés).`
  },
  {
    id: 'auto-8',
    category: 'automatisation',
    question: "Quels sont les risques si mon automatisation échoue ou s'arrête ?",
    answer: `Question légitime. Voici les risques réels et comment les mitiger :

Risques principaux :

1. Panne de l'outil d'automatisation
• Zapier/Make ont >99.9% de disponibilité
• Mitigation : Alertes en cas d'échec, file d'attente automatique

2. Changement d'API d'un outil connecté
• Une mise à jour peut casser l'intégration
• Mitigation : Monitoring actif, maintenance préventive

3. Erreur dans le workflow
• Mauvaise configuration = mauvaises actions
• Mitigation : Tests approfondis, environnement de staging

4. Données corrompues
• Garbage in = Garbage out
• Mitigation : Validation des données en entrée, alertes anomalies

Nos garanties DAINAMICS :
✅ Monitoring 24/7 : Alertes automatiques en cas d'échec
✅ Fallback manuel : Procédure de secours documentée
✅ Logs complets : Traçabilité de toutes les actions
✅ Tests avant production : Aucune mise en prod sans validation
✅ SLA maintenance : Intervention sous 4h ouvrées

Statistique rassurante :
Sur nos projets en production, le taux de disponibilité moyen est supérieur à 99% — soit moins de 1 jour d'interruption par an, généralement résolu en moins d'une heure.`
  },
  {
    id: 'auto-9',
    category: 'automatisation',
    question: "Quelles tâches quotidiennes puis-je automatiser concrètement (facturation, emails, relances) ?",
    answer: `Voici notre catalogue des 20 automatisations les plus demandées par les PME :

📧 Communication
1. Emails de bienvenue personnalisés aux nouveaux clients
2. Relances automatiques impayés (J+7, J+15, J+30)
3. Notifications internes Slack/Teams lors d'événements clés
4. Réponses automatiques hors bureau intelligentes
5. Newsletter automatique depuis vos actualités

💰 Finance & Admin
6. Génération automatique de factures depuis devis validés
7. Rapprochement bancaire automatisé
8. Export comptable mensuel formaté
9. Alertes dépassement budget
10. Archivage automatique des documents

📊 Commercial & CRM
11. Création de leads depuis formulaires web
12. Attribution automatique aux commerciaux
13. Relances prospects inactifs
14. Mise à jour statut opportunités
15. Rapports pipeline hebdomadaires

📦 Opérations
16. Alertes stock minimum
17. Commandes fournisseurs automatiques
18. Suivi livraisons et notifications clients
19. Création de tâches depuis emails
20. Synchronisation agendas multi-équipes

Chaque automatisation = 30min à 5h économisées par semaine

Contactez-nous pour identifier les 3 automatisations prioritaires pour VOTRE entreprise.`
  },
  {
    id: 'auto-10',
    category: 'automatisation',
    question: "Quel outil d'automatisation choisir : Zapier, Make, Power Automate ou autre ?",
    answer: `Voici notre comparatif objectif basé sur des centaines de projets :

ZAPIER
✅ Le plus simple à utiliser
✅ +8 000 applications connectées
✅ Parfait pour débuter
❌ Coûteux à l'échelle (par "tâche")
❌ Moins flexible pour workflows complexes
💰 À partir de 20$/mois
Idéal pour : PME débutantes, workflows simples

MAKE (ex-Integromat)
✅ Très puissant et flexible
✅ Meilleur rapport qualité/prix
✅ Workflows visuels avancés
❌ Courbe d'apprentissage plus raide
❌ Moins d'intégrations que Zapier
💰 À partir de 9$/mois
Idéal pour : PME tech-friendly, workflows complexes

POWER AUTOMATE
✅ Intégration native Microsoft 365
✅ Inclus dans certaines licences M365
✅ Très robuste pour l'écosystème MS
❌ Limité hors Microsoft
❌ Interface moins intuitive
💰 À partir de 15$/mois ou inclus
Idéal pour : Entreprises 100% Microsoft

N8N
✅ Open source, auto-hébergeable
✅ Pas de limite d'exécutions
✅ Données restent chez vous
❌ Nécessite hébergement technique
❌ Moins de connecteurs prêts à l'emploi
💰 Gratuit (self-hosted) ou 20€/mois (cloud)
Idéal pour : PME avec contraintes données Suisse

Notre recommandation DAINAMICS :
• Début / Budget serré → Make
• Simplicité maximale → Zapier
• Écosystème Microsoft → Power Automate
• Données sensibles Suisse → n8n self-hosted

Légende investissement :
$ = Accessible / Quick Win
$$ = Investissement modéré
$$$ = Projet structurant
$$$$ = Projet d'envergure`
  },

  // PARTIE 3 : DÉVELOPPEMENT SOFTWARE
  {
    id: 'dev-1',
    category: 'developpement',
    question: "Est-ce que ça vaut le coup de développer un logiciel sur mesure, ou vaut-il mieux utiliser un SaaS existant ?",
    answer: `C'est LA question stratégique. Voici notre grille de décision :

Choisissez un SaaS existant si :
✅ Votre besoin est standard (CRM basique, comptabilité, emailing)
✅ Le SaaS couvre >80% de vos besoins
✅ Vous avez <20 employés
✅ Budget limité
✅ Besoin immédiat (pas le temps de développer)

Choisissez le sur-mesure si :
✅ Aucun SaaS ne correspond à votre métier
✅ Vous utilisez un SaaS à <30% de ses fonctions
✅ Vous payez pour des fonctions inutiles
✅ Vos processus sont votre avantage concurrentiel
✅ Vous avez besoin d'intégrations spécifiques
✅ Les données sensibles doivent rester en Suisse

Calcul économique sur 5 ans :
SaaS : Pas d'investissement initial + coûts récurrents annuels (location)
Sur-mesure : Investissement initial + maintenance annuelle réduite (propriétaire)

Notre conseil :
Commencez par des SaaS. Quand vous atteignez leurs limites (et vous le sentirez), passez au sur-mesure pour les processus critiques.

Chez DAINAMICS, nous développons souvent des solutions qui CONNECTENT vos SaaS existants plutôt que de tout remplacer.`
  },
  {
    id: 'dev-2',
    category: 'developpement',
    question: "Combien coûte réellement le développement d'une application sur mesure pour mon entreprise ?",
    answer: `Transparence totale — voici nos fourchettes réelles :

Applications simples : $$ (délai 2-3 mois)
• Dashboard de visualisation de données
• Portail client basique (consultation, documents)
• Application interne mono-fonction

Applications intermédiaires : $$$ (délai 4-6 mois)
• CRM métier sur mesure
• Portail client avec self-service
• Application de gestion (devis, commandes, facturation)
• Intégrations avec 3-5 systèmes

Applications complexes : $$$ à $$$$ (délai 6-12 mois)
• Plateforme B2B/B2C complète
• Application avec IA intégrée
• Multi-tenant (plusieurs entreprises clientes)
• App mobile native en plus du web

Plateformes avancées : $$$$ (délai 12-24 mois)
• Marketplace
• Solution SaaS commercialisable
• Système ERP sur mesure

Ce qui fait varier le prix :
• Nombre d'écrans/fonctionnalités
• Complexité des intégrations
• Niveau de design/UX requis
• App mobile en plus du web
• Sécurité et conformité (LPD, certifications)

Notre engagement : Devis détaillé gratuit sous 48h après un appel de cadrage.`
  },
  {
    id: 'dev-3',
    category: 'developpement',
    question: "Combien de temps faut-il compter entre le lancement du projet et la mise en production ?",
    answer: `Voici nos délais réalistes, avec la méthodologie agile DAINAMICS :

MVP (Minimum Viable Product) : 2-4 mois
• Fonctionnalités essentielles uniquement
• Objectif : valider le concept avec de vrais utilisateurs
• Budget typique : $ à $$

V1 Production : 4-6 mois
• Application complète mais périmètre maîtrisé
• Prête pour utilisation quotidienne
• Budget typique : $$ à $$$

Plateforme complète : 6-12 mois
• Toutes fonctionnalités prévues
• Intégrations multiples
• Budget typique : $$$ à $$$$

Notre processus en phases :
Mois 1 : Cadrage, UX, architecture
Mois 2-3 : Développement MVP
Mois 3 : Tests utilisateurs
Mois 4-5 : Itérations, fonctionnalités V1
Mois 6 : Mise en production
Mois 6+ : Évolutions continues

Ce qui rallonge les délais :
• Spécifications floues (on itère au lieu d'avancer)
• Validation lente côté client
• Changements de périmètre en cours de route
• Intégrations avec systèmes legacy mal documentés

Notre conseil : Visez un MVP en 3 mois. Une application utilisée à 70% vaut mieux qu'une application parfaite jamais lancée.`
  },
  {
    id: 'dev-4',
    category: 'developpement',
    question: "Vaut-il mieux travailler avec une agence de développement, des freelances, ou recruter une équipe interne ?",
    answer: `Chaque option a ses avantages. Voici notre analyse objective :

FREELANCES
✅ Coût journalier plus accessible
✅ Flexibilité, pas d'engagement long
❌ Risque de disponibilité (autres clients)
❌ Pas de backup si le freelance disparaît
❌ Vous gérez la coordination
Idéal pour : Petits projets, budget serré, compétences ponctuelles

AGENCE (comme DAINAMICS)
✅ Équipe complète (dev, design, chef de projet)
✅ Continuité garantie (pas de dépendance à une personne)
✅ Méthodologie éprouvée
✅ Responsabilité contractuelle claire
❌ Investissement plus conséquent
Idéal pour : Projets structurants, besoin de fiabilité

ÉQUIPE INTERNE
✅ Connaissance métier profonde
✅ Disponibilité totale
✅ Capitalisation long terme
❌ Coût fixe élevé (salaires, charges, management)
❌ Recrutement difficile en Suisse
❌ Risque de turnover
Idéal pour : Tech au cœur du business, >5 développeurs nécessaires

Notre recommandation par phase :
• Exploration/MVP → Freelance ou petite agence
• V1 Production → Agence
• Croissance → Agence + 1-2 devs internes
• Maturité → Équipe interne + agence en renfort

Chez DAINAMICS, nous accompagnons aussi la transition vers une équipe interne quand c'est le bon moment.`
  },
  {
    id: 'dev-5',
    category: 'developpement',
    question: "Que se passe-t-il après le lancement ? Combien coûte la maintenance d'un logiciel sur mesure ?",
    answer: `La maintenance est souvent sous-estimée. Voici la réalité :

Types de maintenance :

1. Maintenance corrective (bugs)
• Correction des erreurs découvertes en production
• Inclus dans la garantie initiale (3-6 mois généralement)

2. Maintenance évolutive (nouvelles fonctionnalités)
• Ajout de fonctions demandées par les utilisateurs
• Facturé au temps passé ou forfait

3. Maintenance adaptative (environnement)
• Mises à jour sécurité
• Compatibilité nouvelles versions (navigateurs, OS)
• Évolutions des APIs tierces

4. Maintenance préventive
• Monitoring, optimisation performances
• Mise à jour des dépendances

Budget annuel typique :
• Application simple : $ (10-20% du projet initial)
• Application intermédiaire : $$ (15-25% du projet initial)
• Application complexe : $$$ (15-25% du projet initial)

Nos formules DAINAMICS :
• Pack Essentiel : Support de base inclus (monitoring, mises à jour sécurité, support email)
• Pack Business : Support prioritaire + évolutions (8h de développement/mois inclus)
• Pack Premium : Accompagnement dédié (20h de développement/mois, SLA 4h)

Conseil : Budgétez 15-20% du coût initial par an dès le départ. C'est un investissement, pas une dépense — une application maintenue dure 10+ ans.`
  },
  {
    id: 'dev-6',
    category: 'developpement',
    question: "Comment migrer nos fichiers Excel et nos anciens systèmes vers une solution plus professionnelle ?",
    answer: `La migration depuis Excel est notre pain quotidien. Voici notre méthodologie :

Étape 1 : Audit de l'existant (1-2 jours)
• Inventaire de tous les fichiers Excel utilisés
• Identification des données critiques
• Mapping des relations entre fichiers
• Repérage des formules et macros importantes

Étape 2 : Nettoyage des données (variable)
• Élimination des doublons
• Standardisation des formats (dates, noms, etc.)
• Correction des erreurs historiques
• C'est souvent l'étape la plus longue !

Étape 3 : Conception de la nouvelle solution
• Base de données structurée
• Interface utilisateur adaptée
• Règles de gestion automatisées
• Rapports et exports

Étape 4 : Migration
• Import des données nettoyées
• Validation par échantillonnage
• Période de double-run (Excel + nouveau système)
• Bascule définitive

Étape 5 : Formation
• Formation des utilisateurs clés
• Documentation des procédures
• Support renforcé les premières semaines

Signaux qu'il est temps de quitter Excel :
• Plus de 10 000 lignes de données
• Plusieurs personnes modifient le même fichier
• Formules que personne ne comprend plus
• Temps de chargement >30 secondes
• "Mais c'est Jean-Pierre qui gère ça, lui seul sait comment ça marche"

Budget typique migration Excel → Application :
• Petit périmètre : $ à $$
• Périmètre moyen : $$ à $$$
• Périmètre large : $$$ à $$$$`
  },
  {
    id: 'dev-7',
    category: 'developpement',
    question: "Comment s'assurer que notre application sera conforme au RGPD/LPD et que nos données seront sécurisées ?",
    answer: `En Suisse, vous devez respecter la LPD (Loi sur la Protection des Données, révisée en 2023) et potentiellement le RGPD si vous traitez des données de résidents européens.

Nos engagements sécurité DAINAMICS :

1. Hébergement Suisse
• Datacenters certifiés en Suisse (Genève, Zurich)
• Données qui ne quittent jamais le territoire
• Conformité LPD native

2. Chiffrement
• Données chiffrées au repos (AES-256)
• Données chiffrées en transit (TLS 1.3)
• Mots de passe hashés (bcrypt)

3. Authentification sécurisée
• Authentification forte (2FA)
• Gestion des sessions sécurisée
• Protection contre le brute force

4. Architecture sécurisée
• Séparation des environnements (dev/staging/prod)
• Pare-feu applicatif (WAF)
• Tests de pénétration réguliers

5. Conformité LPD/RGPD intégrée
• Consentement explicite
• Droit à l'effacement
• Portabilité des données
• Registre des traitements
• Notification de failles

6. Sauvegardes
• Backups quotidiens automatiques
• Rétention 30 jours minimum
• Test de restauration mensuel

Checklist conformité incluse dans nos projets :
✓ Privacy by Design
✓ Minimisation des données
✓ Durées de conservation définies
✓ Procédures d'exercice des droits
✓ Contrats sous-traitants conformes`
  },
  {
    id: 'dev-8',
    category: 'developpement',
    question: "Quelles technologies faut-il choisir pour que notre application soit pérenne ?",
    answer: `Le choix technologique impacte la maintenabilité sur 10+ ans. Voici notre philosophie :

Nos choix technologiques DAINAMICS :

Frontend (interface utilisateur)
• React ou Next.js : Standard industrie, vaste écosystème, facile à recruter
• TypeScript : Moins de bugs, meilleure maintenabilité
• Tailwind CSS : Design system cohérent, rapide à développer

Backend (logique métier)
• Python (FastAPI/Django) : IA/data science natif, très lisible
• Node.js : Excellent pour temps réel, même langage front/back
• PostgreSQL : Base de données robuste, gratuite, scalable

Infrastructure
• Docker : Déploiements reproductibles
• Kubernetes : Pour les applications à fort trafic
• Hébergeurs Suisses : Infomaniak, Exoscale, ou clouds privés

Critères de choix technologique :
• Maturité (>5 ans d'existence) ⭐⭐⭐⭐⭐
• Communauté active ⭐⭐⭐⭐⭐
• Facilité de recrutement ⭐⭐⭐⭐
• Performance ⭐⭐⭐
• "Hype" / tendance ⭐

Technologies à ÉVITER :
• Frameworks trop récents (<2 ans)
• Technologies propriétaires (vendor lock-in)
• Langages exotiques (recrutement impossible)
• Solutions "no-code" pour les cas complexes

Notre garantie : Code propre, documenté, et transférable. Vous n'êtes jamais prisonnier de DAINAMICS.`
  },
  {
    id: 'dev-9',
    category: 'developpement',
    question: "L'application pourra-t-elle évoluer avec la croissance de notre entreprise ?",
    answer: `La scalabilité se prépare dès la conception. Voici comment nous l'assurons :

Scalabilité technique :

1. Architecture modulaire
• Code découpé en modules indépendants
• Ajout de fonctionnalités sans tout réécrire
• Maintenance facilitée

2. Base de données optimisée
• Indexation appropriée
• Requêtes optimisées
• Possibilité de réplication

3. Infrastructure élastique
• Serveurs auto-scalables
• Load balancing
• CDN pour les contenus statiques

4. API first
• Toutes les fonctions accessibles via API
• Facilite les intégrations futures
• Permet de créer une app mobile plus tard

Scalabilité business :
• x2 utilisateurs → Aucune modification nécessaire
• x5 utilisateurs → Optimisation performance
• x10 utilisateurs → Évolution architecture
• x50+ utilisateurs → Refonte partielle ciblée

Exemples concrets DAINAMICS :
• LEXAIA : Conçu pour 100 utilisateurs, supporte aujourd'hui 850+ contrats/mois
• ENKI REALTY : Architecture B2B2C scalable dès le départ

Questions à poser à tout prestataire :
• L'application peut-elle supporter 10x le volume actuel ?
• Quel est le coût d'une montée en charge ?
• Le code est-il documenté pour une reprise par une autre équipe ?

Notre engagement : Applications conçues pour 5-10 ans de croissance, pas juste pour le besoin d'aujourd'hui.`
  },
  {
    id: 'dev-10',
    category: 'developpement',
    question: "Comment savoir si mon entreprise est prête pour un projet de développement sur mesure ?",
    answer: `Voici notre test de maturité en 10 questions :

Signaux POSITIFS (vous êtes prêt) :
✅ Vous avez un processus métier clair que vous voulez digitaliser
✅ Vous avez essayé des SaaS et ils ne correspondent pas
✅ Vous avez un budget dédié disponible
✅ Un sponsor interne peut consacrer 4-8h/semaine au projet
✅ Vous savez décrire le "succès" du projet (KPIs)
✅ Vos équipes sont prêtes à changer leurs habitudes
✅ Vous avez une vision à 3-5 ans pour l'outil

Signaux D'ALERTE (attendez encore) :
⚠️ "On veut une application, mais on ne sait pas exactement pour quoi"
⚠️ "Le budget est très serré et non négociable"
⚠️ "Personne n'a le temps de suivre le projet"
⚠️ "On veut que ça ressemble à Salesforce mais en moins cher"
⚠️ "L'équipe est réticente au changement"

Notre recommandation :
• 5+ signaux positifs → Contactez-nous pour un cadrage
• 3-4 signaux positifs → Commencez par notre Discovery
• Moins de 3 → Travaillez d'abord sur votre organisation

Le test ultime :
Pouvez-vous décrire en 2 phrases le problème que l'application doit résoudre ET comment vous mesurerez son succès ?

Si oui → Vous êtes prêt.
Si non → Un atelier de cadrage s'impose d'abord.`
  }
];

// Catégories
const categories = [
  { id: 'all', label: 'Toutes les questions', icon: Search, count: 30 },
  { id: 'ia', label: 'Intelligence Artificielle', icon: Brain, count: 10, color: '#6366F1' },
  { id: 'automatisation', label: 'Automatisation', icon: Zap, count: 10, color: '#10E4FF' },
  { id: 'developpement', label: 'Développement Software', icon: Code, count: 10, color: '#FF5A00' }
];

// Composant Accordion Item
function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const categoryColors = {
    ia: '#6366F1',
    automatisation: '#10E4FF',
    developpement: '#FF5A00'
  };

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start justify-between text-left"
      >
        <div className="flex-1 pr-4">
          <div 
            className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
            style={{ 
              backgroundColor: `${categoryColors[item.category]}20`,
              color: categoryColors[item.category]
            }}
          >
            {item.category === 'ia' ? 'Intelligence Artificielle' : 
             item.category === 'automatisation' ? 'Automatisation' : 'Développement'}
          </div>
          <h3 className="text-white font-medium text-lg leading-snug">
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <div className="border-t border-white/10 pt-4">
                <div className="text-white/70 whitespace-pre-line leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Page FAQ
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtrer les FAQ
  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-adaptive">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6366F1]/20 rounded-full blur-[150px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6366F1]/20 text-[#6366F1] text-sm font-medium mb-6">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-white/60 mb-8">
              30 questions-réponses pour comprendre l'IA, l'Automatisation et le Développement sur mesure pour votre PME.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#6366F1]/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Legend */}
      <section className="pb-8 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white/[0.02] border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4 text-center">Niveau d'investissement :</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-green-400 font-mono text-2xl">$</span>
                <span className="text-white/70 text-sm text-center">Accessible</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-yellow-400 font-mono text-2xl">$$</span>
                <span className="text-white/70 text-sm text-center">Modéré</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-orange-400 font-mono text-2xl">$$$</span>
                <span className="text-white/70 text-sm text-center">Structurant</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-red-400 font-mono text-2xl">$$$$</span>
                <span className="text-white/70 text-sm text-center">Majeur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8 pt-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
                    isActive 
                      ? 'bg-white/10 border-white/20 text-white' 
                      : 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.05] hover:text-white/80'
                  }`}
                  style={isActive && cat.color ? { borderColor: `${cat.color}50` } : {}}
                >
                  <Icon className="w-4 h-4" style={cat.color ? { color: cat.color } : {}} />
                  <span className="font-medium">{cat.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-white/50 text-lg">Aucune question trouvée pour votre recherche.</p>
              </div>
            )}
          </motion.div>

          {/* Results count */}
          {searchQuery && (
            <p className="text-center text-white/40 text-sm mt-6">
              {filteredFAQ.length} résultat{filteredFAQ.length > 1 ? 's' : ''} trouvé{filteredFAQ.length > 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Parlons de votre projet. 30 minutes gratuites pour analyser vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white px-8">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Réserver un appel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
