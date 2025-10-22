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
  console.log('🚀 [BREVO] Début de la soumission');
  console.log('📧 [BREVO] Email:', data.email);
  console.log('👤 [BREVO] Nom:', data.name);
  console.log('🏢 [BREVO] Entreprise:', data.company);
  console.log('🎯 [BREVO] Challenges:', data.challenges);

  // Vérification clé API
  if (!BREVO_API_KEY || BREVO_API_KEY === '') {
    console.error('❌ [BREVO] ERREUR CRITIQUE: Clé API manquante !');
    console.error('💡 [BREVO] Vérifiez que le fichier .env contient VITE_BREVO_API_KEY');
    return {
      success: false,
      message: 'Configuration Brevo manquante (clé API)'
    };
  }

  console.log('✅ [BREVO] Clé API détectée:', BREVO_API_KEY.substring(0, 20) + '...');

  try {
    // 1. CRÉATION/MISE À JOUR CONTACT
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

    console.log('📤 [BREVO] Envoi création contact...');
    console.log('📦 [BREVO] Payload contact:', JSON.stringify(contactPayload, null, 2));

    const contactResponse = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(contactPayload)
    });

    console.log('📥 [BREVO] Réponse création contact - Status:', contactResponse.status);

    const contactResponseText = await contactResponse.text();
    console.log('📄 [BREVO] Réponse brute contact:', contactResponseText);

    // Status 201 = créé, 204 = mis à jour, 400 = existe déjà (acceptable)
    if (!contactResponse.ok && contactResponse.status !== 400 && contactResponse.status !== 204) {
      console.error('❌ [BREVO] Échec création contact');
      let errorData;
      try {
        errorData = JSON.parse(contactResponseText);
      } catch {
        errorData = { message: contactResponseText };
      }
      throw new Error(`Erreur création contact (${contactResponse.status}): ${JSON.stringify(errorData)}`);
    }

    console.log('✅ [BREVO] Contact créé/mis à jour avec succès');

    // 2. ENVOI EMAIL TRANSACTIONNEL
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

    console.log('📤 [BREVO] Envoi email transactionnel...');
    console.log('📦 [BREVO] Payload email:', JSON.stringify(emailPayload, null, 2));

    const emailResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(emailPayload)
    });

    console.log('📥 [BREVO] Réponse envoi email - Status:', emailResponse.status);

    const emailResponseText = await emailResponse.text();
    console.log('📄 [BREVO] Réponse brute email:', emailResponseText);

    if (!emailResponse.ok) {
      console.error('❌ [BREVO] Échec envoi email');
      let errorData;
      try {
        errorData = JSON.parse(emailResponseText);
      } catch {
        errorData = { message: emailResponseText };
      }
      throw new Error(`Erreur envoi email (${emailResponse.status}): ${JSON.stringify(errorData)}`);
    }

    const emailData = JSON.parse(emailResponseText);
    console.log('✅ [BREVO] Email envoyé avec succès');
    console.log('📬 [BREVO] Message ID:', emailData.messageId);

    return {
      success: true,
      message: 'Votre diagnostic a été envoyé avec succès !',
      messageId: emailData.messageId
    };

  } catch (error) {
    console.error('❌❌❌ [BREVO] ERREUR FATALE:', error);
    console.error('🔍 [BREVO] Détails erreur:', error instanceof Error ? error.message : String(error));
    console.error('📋 [BREVO] Stack trace:', error instanceof Error ? error.stack : 'N/A');

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
