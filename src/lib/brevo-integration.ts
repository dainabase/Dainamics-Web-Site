/**
 * Brevo (ex-Sendinblue) Integration for DAINAMICS Questionnaire
 * Handles contact creation and transactional email sending
 */

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3';
const CONTACT_LIST_ID = 2;
const EMAIL_TEMPLATE_ID = 1;

export interface QuestionnaireData {
  email: string;
  name: string;
  company: string;
  challenges: string[];
  specificAnswers: Record<string, string[]>;
}

export interface BrevoResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

export async function submitToBrevo(data: QuestionnaireData): Promise<BrevoResponse> {
  try {
    const contactPayload = {
      email: data.email,
      attributes: {
        FIRSTNAME: data.name.split(' ')[0] || '',
        LASTNAME: data.name.split(' ').slice(1).join(' ') || '',
        COMPANY: data.company || '',
        CHALLENGES: data.challenges.join(', '),
        SOURCE: 'Questionnaire Diagnostic Homepage',
        LANGUAGE: 'FR'
      },
      listIds: [CONTACT_LIST_ID],
      updateEnabled: true
    };

    const contactResponse = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(contactPayload)
    });

    if (!contactResponse.ok && contactResponse.status !== 400) {
      const errorData = await contactResponse.json();
      throw new Error(`Erreur création contact: ${JSON.stringify(errorData)}`);
    }

    const emailPayload = {
      to: [{ email: data.email, name: data.name }],
      templateId: EMAIL_TEMPLATE_ID,
      params: {
        FIRSTNAME: data.name.split(' ')[0],
        COMPANY: data.company || 'votre entreprise',
        CHALLENGES: formatChallengesForEmail(data.challenges),
        RECOMMENDATIONS: generateRecommendationsText(data.challenges)
      }
    };

    const emailResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(emailPayload)
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`Erreur envoi email: ${JSON.stringify(errorData)}`);
    }

    const emailData = await emailResponse.json();

    return {
      success: true,
      message: 'Votre diagnostic a été envoyé avec succès !',
      messageId: emailData.messageId
    };

  } catch (error) {
    console.error('Erreur Brevo:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur inconnue lors de l\'envoi'
    };
  }
}

function formatChallengesForEmail(challenges: string[]): string {
  const challengeLabels: Record<string, string> = {
    'customer-service': '📞 Débordement Service Client',
    'content-marketing': '✍️ Création de Contenu',
    'lead-generation': '🎯 Génération de Leads',
    'admin': '📋 Charge Administrative',
    'organization': '⏰ Productivité Personnelle'
  };

  return challenges
    .map(c => challengeLabels[c] || c)
    .join('<br>');
}

function generateRecommendationsText(challenges: string[]): string {
  const recommendations: Record<string, string> = {
    'customer-service': 'Agent IA OmniResponse X - Réponses client 24/7 automatiques',
    'content-marketing': 'Agent IA ContentForge Prime - Production de contenu à grande échelle',
    'lead-generation': 'Agent IA AcquisitionNova - Prospection et qualification automatisées',
    'admin': 'Agent IA OperaCore Quantum - Traitement documents et facturation',
    'organization': 'Agent IA CommandMatrix Elite - Gestion email et calendrier optimisée'
  };

  return challenges
    .map(c => `• ${recommendations[c] || 'Solution personnalisée'}`)
    .join('<br>');
}

export function validateEmail(email: string): { valid: boolean; message?: string } {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Format d\'email invalide' };
  }

  const disposableDomains = [
    'tempmail.com',
    'guerrillamail.com',
    '10minutemail.com',
    'mailinator.com',
    'throwaway.email',
    'temp-mail.org'
  ];

  const domain = email.split('@')[1]?.toLowerCase();
  if (disposableDomains.includes(domain)) {
    return { valid: false, message: 'Veuillez utiliser une adresse email professionnelle' };
  }

  return { valid: true };
}
