/**
 * Internationalization for Diagnostic Questionnaire
 * Languages: FR (primary), EN, DE
 */

export type Language = 'fr' | 'en' | 'de';

export const translations = {
  fr: {
    intro: {
      title: 'Votre entreprise est-elle encore prisonnière des méthodes obsolètes ?',
      subtitle: 'Découvrez quelles tâches obsolètes vous pourriez éliminer avec nos agents IA surhumains',
      startButton: 'Lancer le Scan Neural Business',
      whyRespond: {
        speed: { title: '2 minutes chrono', subtitle: 'Diagnostic ultra-rapide' },
        free: { title: '100% gratuit', subtitle: 'Sans engagement' },
        personalized: { title: 'Plan personnalisé', subtitle: 'Adapté à votre business' }
      }
    },

    scanner: {
      title: 'Analyse Neural Business',
      status: 'Statut : Actif',
      initializing: 'Initialisation du Scan Neural',
      calibrating: 'Calibration des algorithmes d\'analyse métier...',
      analyzing: 'Analyse des schémas métier... Détection des inefficacités... Préparation de l\'interface neurale...'
    },

    progress: {
      step1: 'ADN Business',
      step2: 'Analyse Profonde',
      step3: 'Correspondance Neurale'
    },

    challenges: {
      title: 'Quelles inefficacités métier drainent vos ressources ?',
      subtitle: 'Sélectionnez toutes les situations qui s\'appliquent pour l\'analyse neurale',
      areasSelected: 'domaines sélectionnés',
      analyzeButton: 'Analyser les Domaines Sélectionnés',
      options: {
        'customer-service': {
          title: 'Débordement Service Client',
          description: 'Submergé par trop de demandes clients'
        },
        'content-marketing': {
          title: 'Goulot de Création de Contenu',
          description: 'Trop de temps passé à créer du contenu marketing'
        },
        'lead-generation': {
          title: 'Difficulté Génération de Leads',
          description: 'Pas assez de prospects et clients qualifiés'
        },
        'admin': {
          title: 'Charge Administrative',
          description: 'Débordé par la paperasse et les processus manuels'
        },
        'organization': {
          title: 'Perte de Productivité Personnelle',
          description: 'Temps perdu sur emails, planification et tâches répétitives'
        }
      }
    },

    specificQuestions: {
      title: 'Parlez-nous plus de vos défis spécifiques',
      subtitle: 'Vos réponses nous aideront à recommander les solutions IA parfaites',
      about: 'À propos de vos défis',
      selectAtLeast: 'Veuillez sélectionner au moins une option',
      questions: {
        'customer-service': {
          channels: 'Sur quels canaux gérez-vous les demandes clients ?',
          options: {
            email: 'Email',
            whatsapp: 'WhatsApp',
            social: 'Réseaux Sociaux',
            phone: 'Téléphone',
            chat: 'Chat Site Web'
          }
        },
        'content-marketing': {
          contentTypes: 'Quels types de contenu devez-vous créer régulièrement ?',
          options: {
            blogs: 'Articles de Blog',
            social: 'Posts Réseaux Sociaux',
            email: 'Campagnes Email',
            video: 'Scripts Vidéo',
            product: 'Descriptions Produits'
          }
        },
        'lead-generation': {
          leadAspects: 'Quels aspects de la génération de leads sont les plus difficiles ?',
          options: {
            finding: 'Trouver des Prospects',
            qualifying: 'Qualifier les Leads',
            nurturing: 'Nurturing des Leads',
            following: 'Suivi',
            closing: 'Conclure les Ventes'
          }
        },
        'admin': {
          adminTasks: 'Quelles tâches administratives prennent le plus de temps ?',
          options: {
            invoices: 'Gestion Factures',
            documents: 'Traitement Documents',
            expenses: 'Suivi des Dépenses',
            reporting: 'Reporting',
            data: 'Saisie de Données'
          }
        },
        'organization': {
          productivityTasks: 'Quelles tâches personnelles consomment le plus votre journée ?',
          options: {
            email: 'Gestion Emails',
            calendar: 'Calendrier & Planning',
            meetings: 'Préparation Réunions',
            tasks: 'Gestion des Tâches',
            information: 'Surcharge Informationnelle'
          }
        }
      }
    },

    contact: {
      title: 'Votre Recommandation IA Personnalisée est Prête !',
      subtitle: 'Entrez vos coordonnées pour recevoir votre plan de transformation IA sur mesure',
      emailLabel: 'Email Professionnel*',
      emailPlaceholder: 'votre@email.com',
      nameLabel: 'Nom Complet*',
      namePlaceholder: 'Jean Dupont',
      companyLabel: 'Nom de l\'Entreprise',
      companyPlaceholder: 'Votre Entreprise',
      consentLabel: 'J\'accepte de recevoir ma recommandation IA et les futures mises à jour de DAINAMICS',
      dataSecure: 'Vos données sont cryptées et sécurisées',
      getRecommendation: 'Obtenir Ma Recommandation IA',
      processing: 'Traitement...'
    },

    results: {
      title: 'Votre Plan de Transformation IA',
      subtitle: 'Basé sur vos défis, voici les Agents IA Surhumains qui révolutionneront votre business :',
      recommended: 'RECOMMANDÉ',
      keyFeatures: 'Fonctionnalités Clés',
      impactMetrics: 'Métriques d\'Impact',
      emailSent: 'Nous avons envoyé votre diagnostic complet à',
      deployButton: 'Déployer Vos Agents IA',
      scheduleDemo: 'Planifier une Démo',
      restartDiagnosis: 'Relancer le Diagnostic',
      agents: {
        'customer-service': {
          name: 'OmniResponse X',
          tagline: 'Réponses instantanées. Résolution autonome. Satisfaction maximale.',
          features: [
            'Gère les demandes clients 24/7 sur tous les canaux de communication',
            'Résout jusqu\'à 80% des demandes courantes sans intervention humaine',
            'Apprend de chaque interaction pour améliorer continuellement les réponses'
          ],
          metrics: [
            { label: 'Temps de Réponse', value: '-70%' },
            { label: 'Satisfaction Client', value: '+35%' },
            { label: 'Capacité Support', value: '5x' }
          ]
        },
        'content-marketing': {
          name: 'ContentForge Prime',
          tagline: 'Production massive. Conversion optimale. Domination digitale.',
          features: [
            'Crée du contenu de haute qualité sur plusieurs formats et plateformes',
            'Maintient votre voix de marque et optimise pour l\'engagement',
            'Planifie et publie automatiquement selon le timing optimal'
          ],
          metrics: [
            { label: 'Temps Création', value: '-72%' },
            { label: 'Fréquence Publication', value: '3.5x' },
            { label: 'Engagement', value: '+45%' }
          ]
        },
        'lead-generation': {
          name: 'AcquisitionNova',
          tagline: 'Détection précise. Engagement stratégique. Closing automatique.',
          features: [
            'Identifie et qualifie les prospects à haute valeur grâce aux données comportementales',
            'Crée des séquences d\'approche personnalisées pour maximiser la conversion',
            'Suit et analyse le pipeline de vente complet avec insights prédictifs'
          ],
          metrics: [
            { label: 'Volume de Leads', value: '+225%' },
            { label: 'Taux de Conversion', value: '+40%' },
            { label: 'Cycle de Vente', value: '-35%' }
          ]
        },
        'admin': {
          name: 'OperaCore Quantum',
          tagline: 'Automatisation totale. Zéro paperasse. Précision complète.',
          features: [
            'Traite documents, factures et formulaires avec une précision surhumaine',
            'S\'intègre à vos systèmes existants pour éliminer la saisie manuelle',
            'Produit automatiquement rapports et analyses selon vos besoins'
          ],
          metrics: [
            { label: 'Temps de Traitement', value: '-85%' },
            { label: 'Taux d\'Erreur', value: '-95%' },
            { label: 'Coûts Admin', value: '-60%' }
          ]
        },
        'organization': {
          name: 'CommandMatrix Elite',
          tagline: 'Maîtrise email. Optimisation calendrier. Libération du temps.',
          features: [
            'Gère votre boîte mail, priorisant et catégorisant automatiquement les messages',
            'Optimise votre agenda pour maximiser productivité et équilibre vie-travail',
            'Élimine les tâches répétitives via workflows d\'automatisation intelligents'
          ],
          metrics: [
            { label: 'Temps Email', value: '-60%' },
            { label: 'Efficacité Réunions', value: '+45%' },
            { label: 'Temps Focus', value: '+3h/jour' }
          ]
        }
      }
    },

    navigation: {
      back: 'Retour',
      continue: 'Continuer'
    }
  },

  en: {
    intro: {
      title: 'Is your business still trapped in outdated methods?',
      subtitle: 'Discover which obsolete tasks you could eliminate with our superhuman AI agents',
      startButton: 'Begin Neural Business Scan',
      whyRespond: {
        speed: { title: '2 minutes flat', subtitle: 'Ultra-fast diagnosis' },
        free: { title: '100% free', subtitle: 'No commitment' },
        personalized: { title: 'Personalized plan', subtitle: 'Adapted to your business' }
      }
    },

    scanner: {
      title: 'Neural Business Analysis',
      status: 'Status: Active',
      initializing: 'Initializing Neural Scan',
      calibrating: 'Calibrating business analysis algorithms...',
      analyzing: 'Analyzing business patterns... Detecting inefficiencies... Preparing neural interface...'
    },

    progress: {
      step1: 'Business DNA',
      step2: 'Deep Analysis',
      step3: 'Neural Match'
    },

    challenges: {
      title: 'Which business inefficiencies are draining your resources?',
      subtitle: 'Select all that apply for neural analysis',
      areasSelected: 'areas selected',
      analyzeButton: 'Analyze Selected Areas',
      options: {
        'customer-service': {
          title: 'Customer Service Overload',
          description: 'Struggling with too many customer requests'
        },
        'content-marketing': {
          title: 'Content Creation Bottleneck',
          description: 'Spending too much time creating marketing content'
        },
        'lead-generation': {
          title: 'Lead Generation Struggle',
          description: 'Not enough qualified prospects and clients'
        },
        'admin': {
          title: 'Administrative Burden',
          description: 'Overwhelmed by paperwork and manual processes'
        },
        'organization': {
          title: 'Personal Productivity Drain',
          description: 'Wasting time on emails, scheduling and repetitive tasks'
        }
      }
    },

    specificQuestions: {
      title: 'Tell us more about your specific challenges',
      subtitle: 'Your answers will help us recommend the perfect AI solutions',
      about: 'About your',
      selectAtLeast: 'Please select at least one option',
      questions: {} as any
    },

    contact: {
      title: 'Your Personalized AI Recommendation is Ready!',
      subtitle: 'Enter your details to receive your custom AI transformation plan',
      emailLabel: 'Work Email*',
      emailPlaceholder: 'your@email.com',
      nameLabel: 'Full Name*',
      namePlaceholder: 'John Smith',
      companyLabel: 'Company Name',
      companyPlaceholder: 'Your Company',
      consentLabel: 'I agree to receive my AI recommendation and future updates from DAINAMICS',
      dataSecure: 'Your data is encrypted and secure',
      getRecommendation: 'Get My AI Recommendation',
      processing: 'Processing...'
    },

    results: {
      title: 'Your AI Transformation Plan',
      subtitle: 'Based on your challenges, here are the Superhuman AI Agents that will revolutionize your business:',
      recommended: 'RECOMMENDED',
      keyFeatures: 'Key Features',
      impactMetrics: 'Impact Metrics',
      emailSent: 'We\'ve sent your complete AI diagnosis to',
      deployButton: 'Deploy Your AI Agents',
      scheduleDemo: 'Schedule a Demo',
      restartDiagnosis: 'Restart Diagnosis',
      agents: {} as any
    },

    navigation: {
      back: 'Back',
      continue: 'Continue'
    }
  },

  de: {
    intro: {
      title: 'Ist Ihr Unternehmen noch in veralteten Methoden gefangen?',
      subtitle: 'Entdecken Sie, welche veralteten Aufgaben Sie mit unseren übermenschlichen KI-Agenten eliminieren könnten',
      startButton: 'Neurale Geschäftsanalyse starten',
      whyRespond: {
        speed: { title: '2 Minuten', subtitle: 'Ultraschnelle Diagnose' },
        free: { title: '100% kostenlos', subtitle: 'Ohne Verpflichtung' },
        personalized: { title: 'Personalisierter Plan', subtitle: 'An Ihr Geschäft angepasst' }
      }
    },

    scanner: {
      title: 'Neurale Geschäftsanalyse',
      status: 'Status: Aktiv',
      initializing: 'Neuraler Scan wird initialisiert',
      calibrating: 'Kalibrierung der Geschäftsanalysealgorithmen...',
      analyzing: 'Analyse von Geschäftsmustern... Erkennung von Ineffizienzen... Vorbereitung der neuralen Schnittstelle...'
    },

    progress: {
      step1: 'Geschäfts-DNA',
      step2: 'Tiefenanalyse',
      step3: 'Neurale Übereinstimmung'
    },

    challenges: {
      title: 'Welche Geschäftsineffizienzen entziehen Ihre Ressourcen?',
      subtitle: 'Wählen Sie alle zutreffenden für die neurale Analyse',
      areasSelected: 'Bereiche ausgewählt',
      analyzeButton: 'Ausgewählte Bereiche analysieren',
      options: {} as any
    },

    specificQuestions: {
      title: 'Erzählen Sie uns mehr über Ihre spezifischen Herausforderungen',
      subtitle: 'Ihre Antworten helfen uns, die perfekten KI-Lösungen zu empfehlen',
      about: 'Über Ihre',
      selectAtLeast: 'Bitte wählen Sie mindestens eine Option',
      questions: {} as any
    },

    contact: {
      title: 'Ihre personalisierte KI-Empfehlung ist bereit!',
      subtitle: 'Geben Sie Ihre Daten ein, um Ihren maßgeschneiderten KI-Transformationsplan zu erhalten',
      emailLabel: 'Geschäftliche E-Mail*',
      emailPlaceholder: 'ihre@email.com',
      nameLabel: 'Vollständiger Name*',
      namePlaceholder: 'Max Mustermann',
      companyLabel: 'Firmenname',
      companyPlaceholder: 'Ihre Firma',
      consentLabel: 'Ich stimme zu, meine KI-Empfehlung und zukünftige Updates von DAINAMICS zu erhalten',
      dataSecure: 'Ihre Daten sind verschlüsselt und sicher',
      getRecommendation: 'Meine KI-Empfehlung erhalten',
      processing: 'Verarbeitung...'
    },

    results: {
      title: 'Ihr KI-Transformationsplan',
      subtitle: 'Basierend auf Ihren Herausforderungen, hier sind die übermenschlichen KI-Agenten, die Ihr Geschäft revolutionieren werden:',
      recommended: 'EMPFOHLEN',
      keyFeatures: 'Hauptfunktionen',
      impactMetrics: 'Auswirkungsmetriken',
      emailSent: 'Wir haben Ihre vollständige KI-Diagnose an gesendet',
      deployButton: 'Ihre KI-Agenten einsetzen',
      scheduleDemo: 'Demo planen',
      restartDiagnosis: 'Diagnose neu starten',
      agents: {} as any
    },

    navigation: {
      back: 'Zurück',
      continue: 'Weiter'
    }
  }
};

export function getTranslations(lang: Language = 'fr') {
  const result = translations[lang] || translations.fr;
  console.log('🔧 getTranslations called with:', lang, 'Has intro.title:', result.intro?.title?.substring(0, 30));
  return result;
}

export function detectLanguage(): Language {
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  console.log('🌐 Browser language detected:', browserLang);

  if (browserLang === 'fr' || browserLang === 'de') {
    console.log('✅ Using language:', browserLang);
    return browserLang as Language;
  }

  // Force French by default instead of English
  console.log('⚠️ Language not FR/DE, forcing FR instead of EN');
  return 'fr';
}
