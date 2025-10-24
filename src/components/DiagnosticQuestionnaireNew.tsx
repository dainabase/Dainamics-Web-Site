import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Scan, Brain, MessageCircle, FileText, TrendingUp, ClipboardList, Calendar, Clock, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { submitToBrevo, validateEmail } from '@/lib/brevo-integration';
import { getTranslations, detectLanguage, type Language } from '@/i18n/questionnaire';
import { useQuestionnaireProgress } from '@/hooks/useLocalStorage';
import {
  trackQuestionnaireStart,
  trackStepCompleted,
  trackStepAbandoned,
  trackQuestionnaireCompleted,
  trackEmailValidationError,
  trackBrevoError
} from '@/lib/analytics';

// Toast component inline (simple implementation)
const toast = ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
  const toastElement = document.createElement('div');
  toastElement.className = `fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
    variant === 'destructive' ? 'bg-red-600' : 'bg-green-600'
  } text-white max-w-md animate-slide-in-up`;
  toastElement.innerHTML = `
    <div class="font-semibold">${title}</div>
    <div class="text-sm opacity-90">${description}</div>
  `;
  document.body.appendChild(toastElement);
  setTimeout(() => {
    toastElement.classList.add('animate-fade-out');
    setTimeout(() => document.body.removeChild(toastElement), 300);
  }, 5000);
};

// Define data types
type BusinessChallenge = 'customer-service' | 'content-marketing' | 'lead-generation' | 'admin' | 'organization';

interface ChallengeOption {
  id: BusinessChallenge;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface AgentRecommendation {
  name: string;
  tagline: string;
  features: string[];
  metrics: { label: string; value: string }[];
}

function getBusinessChallenges(t: any): ChallengeOption[] {
  return [
    {
      id: 'customer-service',
      title: t.challenges?.options?.['customer-service']?.title || 'Service Client Surchargé',
      description: t.challenges?.options?.['customer-service']?.description || 'Débordé par les demandes clients',
      icon: <MessageCircle className="h-8 w-8 text-primary" />
    },
    {
      id: 'content-marketing',
      title: t.challenges?.options?.['content-marketing']?.title || 'Création de Contenu',
      description: t.challenges?.options?.['content-marketing']?.description || 'Trop de temps sur le marketing',
      icon: <FileText className="h-8 w-8 text-primary" />
    },
    {
      id: 'lead-generation',
      title: t.challenges?.options?.['lead-generation']?.title || 'Génération de Leads',
      description: t.challenges?.options?.['lead-generation']?.description || 'Pas assez de prospects qualifiés',
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      id: 'admin',
      title: t.challenges?.options?.['admin']?.title || 'Charge Administrative',
      description: t.challenges?.options?.['admin']?.description || 'Submergé par la paperasse',
      icon: <ClipboardList className="h-8 w-8 text-primary" />
    },
    {
      id: 'organization',
      title: t.challenges?.options?.['organization']?.title || 'Productivité Personnelle',
      description: t.challenges?.options?.['organization']?.description || 'Perte de temps sur les tâches répétitives',
      icon: <Calendar className="h-8 w-8 text-primary" />
    }
  ];
}

function getSpecificQuestions(t: any): Record<BusinessChallenge, Question[]> {
  const csq = t.specificQuestions?.questions?.['customer-service'];
  const cmq = t.specificQuestions?.questions?.['content-marketing'];
  const lgq = t.specificQuestions?.questions?.['lead-generation'];
  const adq = t.specificQuestions?.questions?.['admin'];
  const orq = t.specificQuestions?.questions?.['organization'];

  return {
    'customer-service': [
      {
        id: 'channels',
        text: csq?.channels || 'Sur quels canaux gérez-vous les demandes clients ?',
        options: [
          { value: 'email', label: csq?.options?.email || 'Email' },
          { value: 'whatsapp', label: csq?.options?.whatsapp || 'WhatsApp' },
          { value: 'social', label: csq?.options?.social || 'Réseaux Sociaux' },
          { value: 'phone', label: csq?.options?.phone || 'Téléphone' },
          { value: 'chat', label: csq?.options?.chat || 'Chat Site Web' }
        ]
      }
    ],
    'content-marketing': [
      {
        id: 'content-types',
        text: cmq?.contentTypes || 'Quels types de contenu créez-vous régulièrement ?',
        options: [
          { value: 'blogs', label: cmq?.options?.blogs || 'Articles de Blog' },
          { value: 'social', label: cmq?.options?.social || 'Posts Réseaux Sociaux' },
          { value: 'email', label: cmq?.options?.email || 'Campagnes Email' },
          { value: 'video', label: cmq?.options?.video || 'Scripts Vidéo' },
          { value: 'product', label: cmq?.options?.product || 'Descriptions Produit' }
        ]
      }
    ],
    'lead-generation': [
      {
        id: 'lead-aspects',
        text: lgq?.leadAspects || 'Quels aspects de la génération de leads sont difficiles ?',
        options: [
          { value: 'finding', label: lgq?.options?.finding || 'Trouver des Prospects' },
          { value: 'qualifying', label: lgq?.options?.qualifying || 'Qualifier les Leads' },
          { value: 'nurturing', label: lgq?.options?.nurturing || 'Nurturing' },
          { value: 'following', label: lgq?.options?.following || 'Suivi' },
          { value: 'closing', label: lgq?.options?.closing || 'Closing' }
        ]
      }
    ],
    'admin': [
      {
        id: 'admin-tasks',
        text: adq?.adminTasks || 'Quelles tâches administratives prennent le plus de temps ?',
        options: [
          { value: 'invoices', label: adq?.options?.invoices || 'Gestion des Factures' },
          { value: 'documents', label: adq?.options?.documents || 'Traitement Documents' },
          { value: 'expenses', label: adq?.options?.expenses || 'Suivi Dépenses' },
          { value: 'reporting', label: adq?.options?.reporting || 'Reporting' },
          { value: 'data', label: adq?.options?.data || 'Saisie de Données' }
        ]
      }
    ],
    'organization': [
      {
        id: 'productivity-tasks',
        text: orq?.productivityTasks || 'Quelles tâches personnelles consomment votre journée ?',
        options: [
          { value: 'email', label: orq?.options?.email || 'Gestion Emails' },
          { value: 'calendar', label: orq?.options?.calendar || 'Calendrier & Planning' },
          { value: 'meetings', label: orq?.options?.meetings || 'Préparation Réunions' },
          { value: 'tasks', label: orq?.options?.tasks || 'Gestion des Tâches' },
          { value: 'information', label: orq?.options?.information || 'Surcharge Information' }
        ]
      }
    ]
  };
}

function getAgentRecommendations(t: any): Record<BusinessChallenge, AgentRecommendation> {
  return {
    'customer-service': {
      name: t.results?.agents?.['customer-service']?.name || 'OmniResponse X',
      tagline: t.results?.agents?.['customer-service']?.tagline || 'Réponses instantanées. Résolution autonome.',
      features: t.results?.agents?.['customer-service']?.features || [
        'Gère les demandes clients 24/7 sur tous les canaux',
        'Résout jusqu\'à 80% des requêtes sans intervention humaine',
        'Apprend de chaque interaction pour s\'améliorer'
      ],
      metrics: t.results?.agents?.['customer-service']?.metrics || [
        { label: 'Temps Réponse', value: '-70%' },
        { label: 'Satisfaction Client', value: '+35%' },
        { label: 'Capacité Support', value: '5x' }
      ]
    },
    'content-marketing': {
      name: t.results?.agents?.['content-marketing']?.name || 'ContentForge Prime',
      tagline: t.results?.agents?.['content-marketing']?.tagline || 'Production massive. Conversion optimale.',
      features: t.results?.agents?.['content-marketing']?.features || [
        'Crée du contenu de qualité sur tous les formats',
        'Maintient votre voix de marque et optimise l\'engagement',
        'Planifie et publie automatiquement au meilleur moment'
      ],
      metrics: t.results?.agents?.['content-marketing']?.metrics || [
        { label: 'Temps Création', value: '-72%' },
        { label: 'Fréquence Publication', value: '3.5x' },
        { label: 'Engagement', value: '+45%' }
      ]
    },
    'lead-generation': {
      name: t.results?.agents?.['lead-generation']?.name || 'AcquisitionNova',
      tagline: t.results?.agents?.['lead-generation']?.tagline || 'Détection précise. Engagement stratégique.',
      features: t.results?.agents?.['lead-generation']?.features || [
        'Identifie et qualifie les prospects à haute valeur',
        'Crée des séquences personnalisées pour maximiser la conversion',
        'Analyse tout le pipeline avec des insights prédictifs'
      ],
      metrics: t.results?.agents?.['lead-generation']?.metrics || [
        { label: 'Volume Leads', value: '+225%' },
        { label: 'Taux Conversion', value: '+40%' },
        { label: 'Cycle Vente', value: '-35%' }
      ]
    },
    'admin': {
      name: t.results?.agents?.['admin']?.name || 'OperaCore Quantum',
      tagline: t.results?.agents?.['admin']?.tagline || 'Automatisation totale. Zéro paperasse.',
      features: t.results?.agents?.['admin']?.features || [
        'Traite documents et factures avec une précision parfaite',
        'S\'intègre à vos systèmes existants',
        'Produit des rapports automatiquement'
      ],
      metrics: t.results?.agents?.['admin']?.metrics || [
        { label: 'Temps Traitement', value: '-85%' },
        { label: 'Taux Erreur', value: '-95%' },
        { label: 'Coûts Admin', value: '-60%' }
      ]
    },
    'organization': {
      name: t.results?.agents?.['organization']?.name || 'CommandMatrix Elite',
      tagline: t.results?.agents?.['organization']?.tagline || 'Maîtrise email. Optimisation calendrier.',
      features: t.results?.agents?.['organization']?.features || [
        'Gère votre boîte mail et priorise automatiquement',
        'Optimise votre planning pour une productivité maximale',
        'Élimine les tâches répétitives par automatisation'
      ],
      metrics: t.results?.agents?.['organization']?.metrics || [
        { label: 'Temps Email', value: '-60%' },
        { label: 'Efficacité Réunions', value: '+45%' },
        { label: 'Temps Focus', value: '+3h/jour' }
      ]
    }
  };
}

// Main component
export default function DiagnosticQuestionnaireNew() {
  // Force French by default
  const [language] = useState<Language>('fr');
  const t = getTranslations(language);

  const businessChallenges = getBusinessChallenges(t);
  const specificQuestions = getSpecificQuestions(t);
  const agentRecommendations = getAgentRecommendations(t);

  const { progress, setProgress, clearProgress } = useQuestionnaireProgress();

  const [currentStep, setCurrentStep] = useState(progress.currentStep);
  const [selectedChallenges, setSelectedChallenges] = useState<BusinessChallenge[]>(progress.selectedChallenges as BusinessChallenge[]);
  const [specificAnswers, setSpecificAnswers] = useState<Record<string, string[]>>(progress.specificAnswers);
  const [formData, setFormData] = useState(progress.formData);
  const [startTime] = useState(progress.startTime);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string>('');
  const [showScanAnimation, setShowScanAnimation] = useState(false);
  const [neuralLines, setNeuralLines] = useState<{[key: string]: {angle: number; length: number; delay: number}[]}>({});

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (currentStep > 0 && currentStep < 4) {
        const timeSpent = Date.now() - startTime;
        trackStepAbandoned(currentStep, getStepName(currentStep), timeSpent);
      }
    };
  }, [currentStep, startTime]);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll throttle for performance
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Generate OPTIMIZED neural lines for animation (8 lines instead of 40)
  useEffect(() => {
    const lineCount = isMobile ? 4 : 8; // Reduced from 8/40 to 4/8
    const newNeuralLines: {[key: string]: {angle: number, length: number, delay: number}[]} = {};

    businessChallenges.forEach(challenge => {
      const lines = [];
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          angle: (360 / lineCount) * i + Math.random() * 20, // More evenly distributed
          length: 40 + Math.random() * 30,
          delay: i * 0.1 // Sequential delay for smoother animation
        });
      }
      newNeuralLines[challenge.id] = lines;
    });

    setNeuralLines(newNeuralLines);
  }, [isMobile]);

  // Toggle challenge selection
  const toggleChallenge = (challenge: BusinessChallenge) => {
    setSelectedChallenges(prev => {
      if (prev.includes(challenge)) {
        return prev.filter(c => c !== challenge);
      } else {
        return [...prev, challenge];
      }
    });
  };

  // Toggle specific answer option
  const toggleSpecificAnswer = (challengeId: BusinessChallenge, questionId: string, optionValue: string) => {
    setSpecificAnswers(prev => {
      const key = `${challengeId}-${questionId}`;
      const currentSelections = prev[key] || [];
      
      if (currentSelections.includes(optionValue)) {
        return {
          ...prev,
          [key]: currentSelections.filter(v => v !== optionValue)
        };
      } else {
        return {
          ...prev,
          [key]: [...currentSelections, optionValue]
        };
      }
    });
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const startQuestionnaire = () => {
    trackQuestionnaireStart();
    setShowScanAnimation(true);
    setTimeout(() => {
      setShowScanAnimation(false);
      setCurrentStep(1);
      trackStepCompleted(0, 'Introduction', { action: 'scan_started' });
    }, 3000);
  };

  function getStepName(step: number): string {
    const stepNames = ['Introduction', 'Business DNA', 'Deep Analysis', 'Neural Match', 'Results'];
    return stepNames[step] || 'Unknown';
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      setEmailError(emailValidation.message || 'Email invalide');
      trackEmailValidationError(emailValidation.message || 'Invalid format');
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    try {
      const result = await submitToBrevo({
        email: formData.email,
        name: formData.name,
        company: formData.company,
        challenges: selectedChallenges,
        specificAnswers
      });

      if (result.success) {
        const timeSpent = Date.now() - startTime;
        trackQuestionnaireCompleted(selectedChallenges, timeSpent);

        setCurrentStep(4);

        toast({
          title: t.results.title,
          description: t.results.subtitle,
          variant: "default",
        });

        clearProgress();

        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        trackBrevoError(result.message);
        toast({
          title: "Erreur",
          description: result.message || "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      trackBrevoError(errorMessage);
      toast({
        title: "Erreur de connexion",
        description: "Impossible d'envoyer votre diagnostic. Vérifiez votre connexion internet.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      trackStepCompleted(currentStep, getStepName(currentStep), {
        challenges_count: selectedChallenges.length
      });
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedChallenges([]);
    setSpecificAnswers({});
    setFormData({
      email: '',
      name: '',
      company: '',
      consent: false
    });
    clearProgress();
  };

  // Check if option is selected
  const isOptionSelected = (challengeId: BusinessChallenge, questionId: string, optionValue: string): boolean => {
    const key = `${challengeId}-${questionId}`;
    return (specificAnswers[key] || []).includes(optionValue);
  };

  // Form validation
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedChallenges.length > 0;
      case 2:
        // Check if at least one answer is provided for each selected challenge
        return selectedChallenges.every(challenge => {
          return specificQuestions[challenge].some(question => {
            const key = `${challenge}-${question.id}`;
            return specificAnswers[key] && specificAnswers[key].length > 0;
          });
        });
      case 3:
        return formData.email !== '' && formData.name !== '' && formData.consent;
      default:
        return true;
    }
  };

  // Calculate progress percentage
  const progressPercentage = () => {
    if (currentStep === 0) return 0;
    return ((currentStep) / 3) * 100;
  };

  return (
    <section id="diagnostic" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Particle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Questionnaire Header */}
        <div className="questionnaire-header text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-wide text-gradient-primary drop-shadow-[0_0_10px_rgba(123,47,255,0.3)]">
            {t.intro.title || "Diagnostic IA Instantané"}
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10">
            {t.intro.subtitle || "Analysez votre entreprise en 3 minutes et découvrez votre agent IA idéal"}
          </p>
          
          {currentStep === 0 && !showScanAnimation && (
            <motion.button
              onClick={startQuestionnaire}
              className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-primary hover:to-secondary text-white rounded-full pl-2 pr-6 py-2 flex items-center gap-3 mx-auto shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ willChange: 'transform' }}
            >
              <span className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
                <Brain className="w-6 h-6 text-white group-hover:text-secondary transition-colors duration-300" />
              </span>
              <span className="font-bold">{t.intro.startButton || "Lancer le scan"}</span>
            </motion.button>
          )}
        </div>

        {/* Neural Scanner Container with AnimatePresence */}
        <AnimatePresence mode="wait">
          {(currentStep > 0 || showScanAnimation) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="neural-scanner-container bg-gray-950/90 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Neural Network Background with GPU acceleration */}
              <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/10 blur-xl"></div>
                <div className="grid grid-cols-6 gap-8 opacity-5">
                  {Array(24).fill(0).map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-white"></div>
                  ))}
                </div>
              </div>

              {/* Scanner Interface */}
              <div className="relative z-10 p-6 md:p-10">
                {/* Scanner Header */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between pb-6 mb-8 border-b border-gray-800/50">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-60"></div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t.scanner?.title || "Neural Scanner AI"}</h3>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2"></div>
                    <span className="text-secondary text-sm">{t.scanner?.status || "Analyse en cours"}</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* Loading Animation */}
                  {showScanAnimation ? (
                    <motion.div
                      key="scanning"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-20 flex flex-col items-center justify-center"
                    >
                      <div className="relative w-32 h-32 mb-8">
                        <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin" style={{ willChange: 'transform' }}></div>
                        <div className="absolute inset-4 rounded-full border-4 border-secondary/30 border-b-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s', willChange: 'transform' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Scan className="h-10 w-10 text-primary animate-pulse" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gradient-primary">{t.scanner?.initializing || "Initialisation..."}</h3>
                      <p className="text-gray-400 mb-6">{t.scanner?.calibrating || "Calibrage des paramètres IA"}</p>
                      <div className="w-full max-w-md h-2 bg-gray-900 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2.8 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                      <div className="mt-6 text-sm text-gray-500 font-mono">
                        <span className="typing-effect">{t.scanner?.analyzing || "Analyse de votre profil business..."}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      {/* Progress Tracker */}
                      <div className="mb-8">
                        <div className="h-1 bg-gray-800 rounded-full mb-6 overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${progressPercentage()}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div className={cn(
                            "flex flex-col items-center",
                            currentStep >= 1 ? "text-white" : "text-gray-600"
                          )}>
                            <div className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                              currentStep >= 1 
                                ? "bg-primary border-2 border-secondary shadow-lg shadow-primary/30" 
                                : "border-2 border-gray-800"
                            )}>
                              {currentStep > 1 && <Check className="w-3 h-3" />}
                            </div>
                            <span className="text-xs">{t.progress?.step1 || "Défis"}</span>
                          </div>
                          
                          <div className={cn(
                            "flex flex-col items-center",
                            currentStep >= 2 ? "text-white" : "text-gray-600"
                          )}>
                            <div className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                              currentStep >= 2 
                                ? "bg-primary border-2 border-secondary shadow-lg shadow-primary/30" 
                                : "border-2 border-gray-800"
                            )}>
                              {currentStep > 2 && <Check className="w-3 h-3" />}
                            </div>
                            <span className="text-xs">{t.progress?.step2 || "Analyse"}</span>
                          </div>
                          
                          <div className={cn(
                            "flex flex-col items-center",
                            currentStep >= 3 ? "text-white" : "text-gray-600"
                          )}>
                            <div className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                              currentStep >= 3 
                                ? "bg-primary border-2 border-secondary shadow-lg shadow-primary/30" 
                                : "border-2 border-gray-800"
                            )}>
                              {currentStep > 3 && <Check className="w-3 h-3" />}
                            </div>
                            <span className="text-xs">{t.progress?.step3 || "Contact"}</span>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        {/* Step 1: Challenge Selection */}
                        {currentStep === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                          >
                            <div className="text-center mb-6">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {t.challenges?.title || "Vos principaux défis"}
                              </h3>
                              <p className="text-gray-400">{t.challenges?.subtitle || "Sélectionnez tous ceux qui s'appliquent"}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                              {businessChallenges.map((challenge) => (
                                <motion.div
                                  key={challenge.id}
                                  className={cn(
                                    "p-6 rounded-xl cursor-pointer border-2 transition-all duration-300 relative overflow-hidden",
                                    selectedChallenges.includes(challenge.id)
                                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                                      : "border-gray-800 bg-gray-900/50 hover:bg-primary/5"
                                  )}
                                  onClick={() => toggleChallenge(challenge.id)}
                                  whileHover={{ y: -5 }}
                                  style={{ willChange: 'transform' }}
                                >
                                  {/* OPTIMIZED Neural connection lines animation */}
                                  {!isScrolling && selectedChallenges.includes(challenge.id) && (
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                      {neuralLines[challenge.id]?.map((line, i) => (
                                        <motion.div
                                          key={i}
                                          initial={{ opacity: 0, scaleX: 0 }}
                                          animate={{ opacity: 0.4, scaleX: 1 }}
                                          transition={{ delay: line.delay, duration: 0.5 }}
                                          style={{ 
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: line.length,
                                            height: 1,
                                            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                                            transformOrigin: 'left center',
                                            transform: `rotate(${line.angle}deg) translateZ(0)`,
                                            willChange: 'transform, opacity'
                                          }}
                                        />
                                      ))}
                                    </div>
                                  )}

                                  <div className="flex flex-col items-center text-center relative z-10">
                                    <div className={cn(
                                      "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                                      selectedChallenges.includes(challenge.id)
                                        ? "bg-primary/30 shadow-lg shadow-primary/20"
                                        : "bg-gray-800"
                                    )}>
                                      {challenge.icon}
                                    </div>
                                    <h4 className="font-bold text-white mb-2">{challenge.title}</h4>
                                    <p className="text-sm text-gray-400">{challenge.description}</p>

                                    <div className="absolute top-3 right-3">
                                      <div className={cn(
                                        "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                        selectedChallenges.includes(challenge.id)
                                          ? "border-secondary bg-primary"
                                          : "border-gray-600"
                                      )}>
                                        {selectedChallenges.includes(challenge.id) && (
                                          <Check className="h-3 w-3 text-white" />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            <div className="flex justify-between items-center mt-8">
                              <div className="text-gray-400 text-sm">
                                {selectedChallenges.length} {t.challenges?.areasSelected || "défis sélectionnés"}
                              </div>
                              <Button
                                onClick={handleNextStep}
                                disabled={!isStepValid()}
                                className={cn(
                                  "relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white border-0",
                                  !isStepValid() && "opacity-50 cursor-not-allowed"
                                )}
                              >
                                {t.challenges?.analyzeButton || "Analyser"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                              </Button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2: Specific Questions */}
                        {currentStep === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                          >
                            <div className="text-center mb-6">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {t.specificQuestions?.title || "Analyse approfondie"}
                              </h3>
                              <p className="text-gray-400">{t.specificQuestions?.subtitle || "Quelques détails pour personnaliser votre solution"}</p>
                            </div>

                            <div className="space-y-8">
                              {selectedChallenges.map((challenge, index) => (
                                <motion.div 
                                  key={challenge} 
                                  className="space-y-4 border-b border-gray-800/50 pb-6 mb-6 last:border-0"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                                      {businessChallenges.find(c => c.id === challenge)?.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gradient-secondary">
                                      {businessChallenges.find(c => c.id === challenge)?.title}
                                    </h4>
                                  </div>
                                  
                                  {specificQuestions[challenge].map((question) => (
                                    <div key={question.id} className="space-y-3 ml-4 pl-6 border-l-2 border-gray-800/30">
                                      <p className="text-white">{question.text}</p>
                                      <div className="flex flex-wrap gap-3">
                                        {question.options.map((option) => (
                                          <motion.button
                                            key={option.value}
                                            className={cn(
                                              "px-4 py-2 rounded-full text-sm transition-all relative overflow-hidden",
                                              isOptionSelected(challenge, question.id, option.value)
                                                ? "bg-primary/30 border border-primary text-white"
                                                : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-primary/10"
                                            )}
                                            onClick={() => toggleSpecificAnswer(challenge, question.id, option.value)}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                          >
                                            {option.label}
                                            {isOptionSelected(challenge, question.id, option.value) && (
                                              <motion.span 
                                                className="absolute inset-0 bg-primary/10"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                              />
                                            )}
                                          </motion.button>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </motion.div>
                              ))}
                            </div>

                            <div className="flex justify-between pt-4">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={handlePrevStep}
                                className="border-gray-700 text-gray-300 hover:bg-primary/10 hover:text-white hover:border-primary/50"
                              >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                {t.navigation?.back || "Retour"}
                              </Button>

                              <Button
                                onClick={handleNextStep}
                                disabled={!isStepValid()}
                                className={cn(
                                  "relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white border-0",
                                  !isStepValid() && "opacity-50 cursor-not-allowed"
                                )}
                              >
                                {t.navigation?.continue || "Continuer"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                              </Button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3: Contact Information */}
                        {currentStep === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                          >
                            <div className="text-center mb-6">
                              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <Check className="h-8 w-8 text-primary" />
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {t.contact?.title || "Recevez votre recommandation"}
                              </h3>
                              <p className="text-gray-400">{t.contact?.subtitle || "Résultats personnalisés dans votre boîte mail"}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-gray-900/50 backdrop-blur rounded-xl p-6">
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="email" className="text-white">{t.contact?.emailLabel || "Email professionnel"}</Label>
                                  <div className="relative">
                                    <Input
                                      id="email"
                                      name="email"
                                      type="email"
                                      placeholder={t.contact?.emailPlaceholder || "nom@entreprise.com"}
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      className="bg-gray-800/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary"
                                      required
                                      aria-label="Email"
                                    />
                                    {emailError && (
                                      <p className="text-red-500 text-xs mt-1">{emailError}</p>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="name" className="text-white">{t.contact?.nameLabel || "Votre nom"}</Label>
                                  <div className="relative">
                                    <Input
                                      id="name"
                                      name="name"
                                      type="text"
                                      placeholder={t.contact?.namePlaceholder || "Jean Dupont"}
                                      value={formData.name}
                                      onChange={handleInputChange}
                                      className="bg-gray-800/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary"
                                      required
                                      aria-label="Nom"
                                    />
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="company" className="text-white">{t.contact?.companyLabel || "Entreprise (optionnel)"}</Label>
                                  <div className="relative">
                                    <Input
                                      id="company"
                                      name="company"
                                      type="text"
                                      placeholder={t.contact?.companyPlaceholder || "Nom de votre société"}
                                      value={formData.company}
                                      onChange={handleInputChange}
                                      className="bg-gray-800/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary"
                                      aria-label="Entreprise"
                                    />
                                  </div>
                                </div>
                                
                                <div className="flex items-start space-x-3 pt-2">
                                  <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    checked={formData.consent}
                                    onChange={handleInputChange}
                                    className="mt-1 rounded border-gray-700 bg-gray-800 text-primary focus:ring-primary"
                                    required
                                    aria-label="Consentement"
                                  />
                                  <Label htmlFor="consent" className="text-sm text-gray-400">
                                    {t.contact?.consentLabel || "J'accepte de recevoir des recommandations personnalisées par email"}
                                  </Label>
                                </div>
                              </div>

                              <div className="flex justify-between pt-4">
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={handlePrevStep}
                                  className="border-gray-700 text-gray-300 hover:bg-primary/10 hover:text-white hover:border-primary/50"
                                >
                                  <ArrowLeft className="mr-2 h-4 w-4" />
                                  {t.navigation?.back || "Retour"}
                                </Button>
                                
                                <Button
                                  type="submit"
                                  disabled={!isStepValid() || isSubmitting}
                                  className={cn(
                                    "relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-primary text-white border-0",
                                    (!isStepValid() || isSubmitting) && "opacity-50 cursor-not-allowed"
                                  )}
                                >
                                  {isSubmitting ? (
                                    <>
                                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                                      {t.contact?.processing || "Traitement..."}
                                    </>
                                  ) : (
                                    <>
                                      {t.contact?.getRecommendation || "Obtenir ma recommandation"}
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                  )}
                                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                                </Button>
                              </div>
                            </form>
                            
                            <div className="text-center text-sm text-gray-500 pt-4">
                              <p className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                                  <Shield className="w-2 h-2 text-gray-600" />
                                </span>
                                {t.contact?.dataSecure || "Vos données sont sécurisées et confidentielles"}
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 4: Results Display */}
                        {currentStep === 4 && (
                          <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-8"
                          >
                            <div className="text-center mb-8">
                              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-4">
                                <Brain className="h-10 w-10 text-white" />
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 animate-pulse"></div>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                                {t.results?.title || "Votre agent IA recommandé"}
                              </h3>
                              <p className="text-gray-400 mb-6">
                                {t.results?.subtitle || "Solution personnalisée basée sur vos défis"}
                              </p>
                            </div>

                            <div className="space-y-6">
                              {selectedChallenges.map((challenge, index) => {
                                const agent = agentRecommendations[challenge];
                                return (
                                  <motion.div 
                                    key={challenge}
                                    className="bg-gray-900/70 p-6 rounded-xl border-l-4 border-primary relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    style={{ willChange: 'transform, opacity' }}
                                  >
                                    {/* Neural background effect */}
                                    <div className="absolute inset-0 -z-10" style={{ transform: 'translateZ(0)' }}>
                                      <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
                                        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                      <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4 flex items-center justify-center bg-primary/20 rounded-lg">
                                          {businessChallenges.find(c => c.id === challenge)?.icon}
                                        </div>
                                        <div>
                                          <motion.h4 
                                            className="text-xl font-bold text-white"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 + 0.2 }}
                                          >
                                            {agent.name}
                                          </motion.h4>
                                          <motion.p 
                                            className="text-secondary text-sm"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.2 + 0.3 }}
                                          >
                                            {agent.tagline}
                                          </motion.p>
                                        </div>
                                      </div>
                                      <div className="bg-primary/20 px-3 py-1 rounded text-sm font-semibold text-primary">
                                        {t.results?.recommended || "Recommandé"}
                                      </div>
                                    </div>

                                    <div className="space-y-6">
                                      <div>
                                        <h5 className="text-sm uppercase text-gray-500 tracking-wider mb-3">{t.results?.keyFeatures || "Fonctionnalités clés"}</h5>
                                        <ul className="space-y-3">
                                          {agent.features.map((feature, i) => (
                                            <motion.li 
                                              key={i} 
                                              className="flex items-start"
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: index * 0.2 + 0.4 + (i * 0.1) }}
                                            >
                                              <div className="bg-primary/20 p-1 rounded-full mr-3 mt-0.5">
                                                <Check className="h-3 w-3 text-primary" />
                                              </div>
                                              <span className="text-gray-300">{feature}</span>
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h5 className="text-sm uppercase text-gray-500 tracking-wider mb-3">{t.results?.impactMetrics || "Métriques d'impact"}</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          {agent.metrics.map((metric, i) => (
                                            <motion.div 
                                              key={i} 
                                              className="bg-secondary/10 rounded-lg p-4 text-center"
                                              initial={{ opacity: 0, scale: 0.9 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ delay: index * 0.2 + 0.7 + (i * 0.1) }}
                                            >
                                              <div className="text-2xl font-bold text-secondary mb-1">{metric.value}</div>
                                              <div className="text-xs text-gray-400">{metric.label}</div>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>

                            <motion.div 
                              className="bg-gray-900 border border-green-600/30 rounded-lg p-4 text-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <p className="text-white">
                                {t.results?.emailSent || "Résultats envoyés à"} <span className="font-bold text-green-500">{formData.email}</span>
                              </p>
                            </motion.div>

                            <motion.div 
                              className="flex flex-col md:flex-row justify-center gap-4 pt-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 }}
                            >
                              <Button 
                                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                              >
                                {t.results?.deployButton || "Déployer votre agent IA"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                              
                              <Button 
                                variant="outline"
                                className="border-primary text-white hover:bg-primary/10"
                              >
                                {t.results?.scheduleDemo || "Planifier une démo"}
                              </Button>
                              
                              <Button 
                                variant="ghost"
                                onClick={handleReset}
                                className="text-gray-400 hover:text-white hover:bg-gray-800"
                              >
                                {t.results?.restartDiagnosis || "Refaire le diagnostic"}
                              </Button>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
