// ============================================================================
// DAINAMICS - AutomatisationsQuestionnaire Component
// ============================================================================
// Version: 2.4 - Fully harmonized H2 titles (mb-6 leading-tight, no violet gradients)
// Date: 25 Novembre 2025
// ============================================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check,
  FileText,
  TrendingUp,
  Mail,
  MessageCircle,
  Package,
  Users,
  Zap,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { submitToBrevoV2, validateEmail } from '@/lib/brevo-integration-v2';
import { SCENARIOS_BY_CATEGORIE, getScenariosByCategorie, type Scenario } from '@/data/scenarios';
import type { Categorie } from '@/data/automatisations';

// ============================================================================
// TYPES
// ============================================================================

interface ContactForm {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
}

interface CategorieOption {
  id: Categorie;
  titre: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Question {
  id: string;
  question: string;
  options: string[];
}

// ============================================================================
// DATA: CATÉGORIES PROBLÉMATIQUES
// ============================================================================

const CATEGORIES: CategorieOption[] = [
  {
    id: 'finance-admin',
    titre: 'Finance & Administration',
    description: 'Trop de tâches manuelles en comptabilité, facturation, notes de frais',
    icon: FileText
  },
  {
    id: 'ventes-pipeline',
    titre: 'Ventes & Pipeline Commercial',
    description: 'Pipeline désorganisé, leads perdus, suivi commercial inefficace',
    icon: TrendingUp
  },
  {
    id: 'marketing-leads',
    titre: 'Marketing & Génération Leads',
    description: 'Pas assez de leads qualifiés, marketing manuel chronophage',
    icon: Mail
  },
  {
    id: 'support-client',
    titre: 'Support Client',
    description: 'Équipe débordée, temps de réponse trop longs, questions répétitives',
    icon: MessageCircle
  },
  {
    id: 'production-stock',
    titre: 'Production & Gestion Stocks',
    description: 'Ruptures de stock fréquentes, pannes machines imprévues',
    icon: Package
  },
  {
    id: 'rh-equipe',
    titre: 'RH & Équipe',
    description: 'Recrutement lent, onboarding manuel, gestion congés complexe',
    icon: Users
  }
];

// ============================================================================
// DATA: QUESTIONS CONTEXTUELLES PAR CATÉGORIE
// ============================================================================

const QUESTIONS_BY_CATEGORIE: Record<Categorie, Question[]> = {
  'finance-admin': [
    {
      id: 'volume-factures',
      question: 'Combien de factures traitez-vous par mois ?',
      options: ['Moins de 50', '50-200', '200-500', 'Plus de 500']
    },
    {
      id: 'erreurs-comptables',
      question: 'Rencontrez-vous des erreurs de saisie fréquentes ?',
      options: ['Rarement', 'Parfois', 'Souvent', 'Très souvent']
    },
    {
      id: 'temps-admin',
      question: 'Combien d\'heures par semaine consacrez-vous aux tâches admin ?',
      options: ['Moins de 5h', '5-10h', '10-20h', 'Plus de 20h']
    }
  ],
  'ventes-pipeline': [
    {
      id: 'taille-equipe-vente',
      question: 'Taille de votre équipe commerciale ?',
      options: ['1-3 personnes', '4-10 personnes', '11-20 personnes', 'Plus de 20']
    },
    {
      id: 'suivi-leads',
      question: 'Comment suivez-vous vos leads actuellement ?',
      options: ['Excel/Tableaux', 'CRM basique', 'CRM avancé', 'Pas de système']
    },
    {
      id: 'leads-perdus',
      question: 'Estimez-vous perdre des opportunités commerciales ?',
      options: ['Rarement', 'Parfois (10-20%)', 'Souvent (20-40%)', 'Très souvent (+40%)']
    }
  ],
  'marketing-leads': [
    {
      id: 'canaux-marketing',
      question: 'Quels canaux marketing utilisez-vous ?',
      options: ['Email uniquement', 'Email + Réseaux sociaux', 'Multi-canal actif', 'Peu/Pas de marketing']
    },
    {
      id: 'volume-leads',
      question: 'Combien de leads générés par mois ?',
      options: ['Moins de 20', '20-50', '50-100', 'Plus de 100']
    },
    {
      id: 'taux-conversion',
      question: 'Quel est votre taux de conversion leads → clients ?',
      options: ['Moins de 2%', '2-5%', '5-10%', 'Plus de 10%']
    }
  ],
  'support-client': [
    {
      id: 'volume-tickets',
      question: 'Combien de demandes support recevez-vous par jour ?',
      options: ['Moins de 10', '10-30', '30-100', 'Plus de 100']
    },
    {
      id: 'temps-reponse',
      question: 'Quel est votre temps de réponse moyen ?',
      options: ['Moins de 1h', '1-4h', '4-24h', 'Plus de 24h']
    },
    {
      id: 'questions-repetitives',
      question: 'Avez-vous beaucoup de questions répétitives ?',
      options: ['Rarement', 'Parfois (20-40%)', 'Souvent (40-60%)', 'Très souvent (+60%)']
    }
  ],
  'production-stock': [
    {
      id: 'taille-stock',
      question: 'Taille de votre inventaire ?',
      options: ['Moins de 100 SKUs', '100-500 SKUs', '500-2000 SKUs', 'Plus de 2000 SKUs']
    },
    {
      id: 'ruptures-stock',
      question: 'Fréquence des ruptures de stock ?',
      options: ['Rare', 'Mensuelle', 'Hebdomadaire', 'Quotidienne']
    },
    {
      id: 'pannes-machines',
      question: 'Avez-vous des pannes machines imprévues ?',
      options: ['Rarement', 'Parfois', 'Souvent', 'Très souvent']
    }
  ],
  'rh-equipe': [
    {
      id: 'taille-equipe',
      question: 'Taille de votre équipe ?',
      options: ['Moins de 10', '10-25', '25-50', 'Plus de 50']
    },
    {
      id: 'recrutements-annuels',
      question: 'Combien de recrutements par an ?',
      options: ['Moins de 5', '5-10', '10-20', 'Plus de 20']
    },
    {
      id: 'temps-rh',
      question: 'Combien d\'heures par semaine en tâches RH ?',
      options: ['Moins de 5h', '5-10h', '10-20h', 'Plus de 20h']
    }
  ]
};

// ============================================================================
// TOAST NOTIFICATION
// ============================================================================

const toast = ({ 
  title, 
  description, 
  variant 
}: { 
  title: string; 
  description: string; 
  variant?: 'default' | 'destructive' 
}) => {
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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function AutomatisationsQuestionnaire() {
  // État actuel
  const [etape, setEtape] = useState<1 | 2 | 3 | 4>(1);
  const [categorieSelectionnee, setCategorieSelectionnee] = useState<Categorie | null>(null);
  const [reponses, setReponses] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<ContactForm>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: ''
  });
  const [scenariosRecommandes, setScenariosRecommandes] = useState<Scenario[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const handleCategorieSelect = (categorie: Categorie) => {
    setCategorieSelectionnee(categorie);
    setReponses({});
    setEtape(2);
  };

  const handleReponseSelect = (questionId: string, reponse: string) => {
    setReponses(prev => ({
      ...prev,
      [questionId]: reponse
    }));
  };

  const handleContactChange = (field: keyof ContactForm, value: string) => {
    setContact(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEtape2Suivant = () => {
    const questions = categorieSelectionnee ? QUESTIONS_BY_CATEGORIE[categorieSelectionnee] : [];
    const toutesRepondues = questions.every(q => reponses[q.id]);

    if (!toutesRepondues) {
      toast({
        title: 'Questions incomplètes',
        description: 'Veuillez répondre à toutes les questions',
        variant: 'destructive'
      });
      return;
    }

    setEtape(3);
  };

  const handleSoumettreFormulaire = async () => {
    // Validation
    if (!contact.prenom || !contact.nom || !contact.email || !contact.entreprise) {
      toast({
        title: 'Formulaire incomplet',
        description: 'Veuillez remplir tous les champs obligatoires',
        variant: 'destructive'
      });
      return;
    }

    if (!validateEmail(contact.email)) {
      toast({
        title: 'Email invalide',
        description: 'Veuillez entrer un email valide',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Récupérer les 3 scénarios de la catégorie
      const scenarios = categorieSelectionnee ? getScenariosByCategorie(categorieSelectionnee) : [];
      setScenariosRecommandes(scenarios);

      // Préparer les données pour Brevo v2 (nouvelle structure)
      const brevoData = {
        email: contact.email,
        attributes: {
          FIRSTNAME: contact.prenom,
          LASTNAME: contact.nom,
          PHONE: contact.telephone || '',
          COMPANY: contact.entreprise,
          CATEGORIE_PROBLEMATIQUE: categorieSelectionnee || '',
          REPONSES_QUESTIONNAIRE: JSON.stringify(reponses)
        },
        listIds: [2], // Liste "Questionnaire Automatisations"
        updateEnabled: true,
        scenarios: scenarios // NOUVEAU : Passer les scénarios pour l'email
      };

      // Soumettre à Brevo v2 (avec envoi email automatique)
      const result = await submitToBrevoV2(brevoData);

      if (result.success) {
        toast({
          title: 'Email envoyé ! 📧',
          description: 'Vos 3 scénarios personnalisés ont été envoyés par email',
          variant: 'default'
        });
      } else {
        console.warn('[Questionnaire] Email non envoyé:', result.message);
        toast({
          title: 'Analyse complète !',
          description: 'Découvrez vos 3 scénarios personnalisés ci-dessous',
          variant: 'default'
        });
      }

      setEtape(4);
    } catch (error) {
      console.error('Erreur soumission:', error);
      toast({
        title: 'Erreur technique',
        description: 'Impossible d\'envoyer vos réponses. Veuillez réessayer.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetourEtape = () => {
    if (etape === 2) {
      setEtape(1);
      setCategorieSelectionnee(null);
      setReponses({});
    } else if (etape === 3) {
      setEtape(2);
    }
  };

  // ============================================================================
  // RENDER: ÉTAPE 1 - SÉLECTION CATÉGORIE
  // ============================================================================

  if (etape === 1) {
    return (
      <section 
        id="diagnostic" 
        className="py-24 md:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Quel est Votre</span>{' '}
              <span className="text-dainamics-secondary">Plus Grand Défi ?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez en 2 minutes les automatisations qui transformeront votre entreprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CATEGORIES.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCategorieSelect(cat.id)}
                  className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-dainamics-primary/50 hover:bg-slate-900/80 transition-all duration-300 text-left"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-dainamics-primary/10 rounded-xl group-hover:bg-dainamics-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-dainamics-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-dainamics-primary transition-colors">
                    {cat.titre}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-dainamics-primary" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // ============================================================================
  // RENDER: ÉTAPE 2 - QUESTIONS CONTEXTUELLES
  // ============================================================================

  if (etape === 2 && categorieSelectionnee) {
    const questions = QUESTIONS_BY_CATEGORIE[categorieSelectionnee];
    const categorieInfo = CATEGORIES.find(c => c.id === categorieSelectionnee);
    const Icon = categorieInfo?.icon || Building;

    return (
      <section 
        id="diagnostic" 
        className="py-24 md:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-dainamics-primary/10 rounded-full">
              <Icon className="w-5 h-5 text-dainamics-primary" />
              <span className="text-dainamics-primary font-medium">{categorieInfo?.titre}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Précisons</span>{' '}
              <span className="text-dainamics-secondary">Votre Situation</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Ces questions nous aident à recommander les meilleures automatisations pour votre contexte
            </p>
          </motion.div>

          {/* Questions */}
          <div className="space-y-8">
            {questions.map((question, qIndex) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qIndex * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-6">
                  {qIndex + 1}. {question.question}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {question.options.map((option) => {
                    const isSelected = reponses[question.id] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleReponseSelect(question.id, option)}
                        className={cn(
                          "relative p-4 text-left rounded-xl border-2 transition-all duration-200",
                          isSelected
                            ? "border-dainamics-primary bg-dainamics-primary/10"
                            : "border-slate-700 bg-slate-900/30 hover:border-slate-600"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                            isSelected ? "border-dainamics-primary bg-dainamics-primary" : "border-slate-600"
                          )}>
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={cn(
                            "font-medium",
                            isSelected ? "text-dainamics-primary" : "text-slate-300"
                          )}>
                            {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Boutons Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between mt-12"
          >
            <Button
              onClick={handleRetourEtape}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>

            <Button
              onClick={handleEtape2Suivant}
              className="gap-2 bg-dainamics-primary hover:bg-dainamics-primary/90"
            >
              Suivant
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  // ============================================================================
  // RENDER: ÉTAPE 3 - FORMULAIRE CONTACT
  // ============================================================================

  if (etape === 3) {
    return (
      <section 
        id="diagnostic" 
        className="py-24 md:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-dainamics-success/10 rounded-full">
              <Zap className="w-5 h-5 text-dainamics-success" />
              <span className="text-dainamics-success font-medium">Dernière Étape</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Recevez</span>{' '}
              <span className="text-dainamics-secondary">Votre Analyse</span>
            </h2>
            <p className="text-slate-300">
              Nous vous enverrons vos 3 scénarios d'automatisation personnalisés directement par email
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <div className="space-y-6">
              {/* Prénom */}
              <div>
                <Label htmlFor="prenom" className="text-white mb-2 block">
                  Prénom *
                </Label>
                <Input
                  id="prenom"
                  value={contact.prenom}
                  onChange={(e) => handleContactChange('prenom', e.target.value)}
                  placeholder="Jean"
                  className="bg-slate-900/50 border-slate-700"
                  required
                />
              </div>

              {/* Nom */}
              <div>
                <Label htmlFor="nom" className="text-white mb-2 block">
                  Nom *
                </Label>
                <Input
                  id="nom"
                  value={contact.nom}
                  onChange={(e) => handleContactChange('nom', e.target.value)}
                  placeholder="Dupont"
                  className="bg-slate-900/50 border-slate-700"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Professionnel *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={contact.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  placeholder="jean.dupont@entreprise.ch"
                  className="bg-slate-900/50 border-slate-700"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <Label htmlFor="telephone" className="text-white mb-2 block">
                  Téléphone
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={contact.telephone}
                  onChange={(e) => handleContactChange('telephone', e.target.value)}
                  placeholder="+41 XX XXX XX XX"
                  className="bg-slate-900/50 border-slate-700"
                />
              </div>

              {/* Entreprise */}
              <div>
                <Label htmlFor="entreprise" className="text-white mb-2 block">
                  Entreprise *
                </Label>
                <Input
                  id="entreprise"
                  value={contact.entreprise}
                  onChange={(e) => handleContactChange('entreprise', e.target.value)}
                  placeholder="Nom de votre entreprise"
                  className="bg-slate-900/50 border-slate-700"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* Boutons Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mt-8"
          >
            <Button
              onClick={handleRetourEtape}
              variant="outline"
              className="gap-2"
              disabled={isSubmitting}
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>

            <Button
              onClick={handleSoumettreFormulaire}
              disabled={isSubmitting}
              className="gap-2 bg-dainamics-success hover:bg-dainamics-success/90"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Recevoir Mon Analyse par Email'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  // ============================================================================
  // RENDER: ÉTAPE 4 - RÉSULTATS (3 SCÉNARIOS)
  // ============================================================================

  if (etape === 4) {
    return (
      <section 
        id="diagnostic" 
        className="py-24 md:py-32 bg-gradient-to-b from-dainamics-background to-dainamics-background/90"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-dainamics-success/10 rounded-full">
              <Check className="w-5 h-5 text-dainamics-success" />
              <span className="text-dainamics-success font-medium">Email Envoyé !</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Vos 3 Scénarios</span>{' '}
              <span className="text-dainamics-secondary">Personnalisés</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Votre analyse complète a été envoyée par email. Découvrez également vos scénarios ci-dessous.
            </p>
          </motion.div>

          {/* Scénarios */}
          <div className="space-y-8">
            {scenariosRecommandes.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-dainamics-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Numéro */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-dainamics-primary to-dainamics-secondary rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {scenario.titre}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {scenario.description}
                    </p>

                    {/* Métriques */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-dainamics-success/10 rounded-lg border border-dainamics-success/20">
                        <div className="text-dainamics-success font-semibold mb-1">Gains</div>
                        <div className="text-white text-sm">{scenario.gains}</div>
                      </div>
                      
                      <div className="p-4 bg-dainamics-secondary/10 rounded-lg border border-dainamics-secondary/20">
                        <div className="text-dainamics-secondary font-semibold mb-1">Durée Projet</div>
                        <div className="text-white text-sm">{scenario.duree}</div>
                      </div>
                      
                      <div className="p-4 bg-dainamics-primary/10 rounded-lg border border-dainamics-primary/20">
                        <div className="text-dainamics-primary font-semibold mb-1">ROI</div>
                        <div className="text-white text-sm">{scenario.roiMois}</div>
                      </div>
                    </div>

                    {/* Automatisations incluses */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-400 mb-3">Automatisations Incluses :</h4>
                      <div className="flex flex-wrap gap-2">
                        {scenario.automatisations.map((auto, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-dainamics-primary/10 text-dainamics-primary rounded-lg text-sm border border-dainamics-primary/20"
                          >
                            {auto}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="bg-dainamics-primary hover:bg-dainamics-primary/90">
                      Demander un Devis Personnalisé
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center p-8 bg-gradient-to-r from-dainamics-primary/10 to-dainamics-secondary/10 rounded-2xl border border-dainamics-primary/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à Transformer Votre Entreprise ?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins spécifiques et de la faisabilité de ces scénarios pour votre contexte
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-dainamics-primary hover:bg-dainamics-primary/90">
                Réserver un Appel Gratuit (30 min)
              </Button>
              <Button size="lg" variant="outline">
                Consultez Votre Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return null;
}
