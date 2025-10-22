// Brevo (ex SendinBlue) API integration for Dainamics diagnostic questionnaire

// Brevo API configuration
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3';
const CONTACT_LIST_ID = 2; // ID de votre liste dans Brevo
const EMAIL_TEMPLATE_ID = 1; // ID de votre template d'email dans Brevo

// Debug logs
console.log('🔧 [BREVO] Module chargé');

interface ContactData {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  source?: string;
  diagnosticData?: Record<string, any>;
}

interface DiagnosticAnswers {
  hoursWasted?: Record<string, number>;
  vulnerability?: string;
  maturityLevel?: string;
  totalHoursWasted?: number;
  aiScore?: number;
  recommendedAgent?: string;
}

// Check API key on module load
if (!BREVO_API_KEY) {
  console.error('❌ [BREVO] ERREUR CRITIQUE: Clé API manquante! Vérifiez votre fichier .env');
  console.error('❌ [BREVO] Assurez-vous d\'avoir: VITE_BREVO_API_KEY=votre-clé-api dans le fichier .env');
} else {
  console.log('✅ [BREVO] Clé API détectée:', BREVO_API_KEY.substring(0, 20) + '...');
}

/**
 * Create or update a contact in Brevo
 */
async function createOrUpdateContact(data: ContactData): Promise<boolean> {
  console.log('📤 [BREVO] Envoi création contact:', data.email);
  
  try {
    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.firstName || '',
          LASTNAME: data.lastName || '',
          COMPANY: data.company || '',
          PHONE: data.phone || '',
          SOURCE: data.source || 'Questionnaire Diagnostic Homepage',
          DIAGNOSTIC_DATE: new Date().toISOString(),
          // Flatten diagnostic data for Brevo attributes
          ...(data.diagnosticData ? {
            HOURS_WASTED: data.diagnosticData.totalHoursWasted || 0,
            AI_SCORE: data.diagnosticData.aiScore || 0,
            VULNERABILITY: data.diagnosticData.vulnerability || '',
            MATURITY_LEVEL: data.diagnosticData.maturityLevel || '',
            RECOMMENDED_AGENT: data.diagnosticData.recommendedAgent || '',
            CHALLENGES: Object.keys(data.diagnosticData.hoursWasted || {}).join(', ')
          } : {})
        },
        listIds: [CONTACT_LIST_ID],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ [BREVO] Erreur création contact:', response.status, errorData);
      throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
    }

    console.log('✅ [BREVO] Contact créé/mis à jour avec succès');
    return true;
  } catch (error) {
    console.error('❌ [BREVO] Erreur lors de la création du contact:', error);
    throw error;
  }
}

/**
 * Send a transactional email via Brevo
 */
async function sendEmail(email: string, diagnosticData: DiagnosticAnswers): Promise<boolean> {
  console.log('📨 [BREVO] Envoi email à:', email);
  
  try {
    // Prepare template parameters
    const params = {
      EMAIL: email,
      TOTAL_HOURS: diagnosticData.totalHoursWasted || 0,
      MONTHLY_HOURS: (diagnosticData.totalHoursWasted || 0) * 4,
      YEARLY_HOURS: (diagnosticData.totalHoursWasted || 0) * 52,
      AI_SCORE: diagnosticData.aiScore || 0,
      RECOMMENDED_AGENT: diagnosticData.recommendedAgent || 'Agent IA',
      MATURITY_LEVEL: diagnosticData.maturityLevel || 'En transition',
      VULNERABILITY: diagnosticData.vulnerability || '',
      // Détail des heures par tâche
      HOURS_CUSTOMER: diagnosticData.hoursWasted?.a || 0,
      HOURS_MARKETING: diagnosticData.hoursWasted?.b || 0,
      HOURS_SALES: diagnosticData.hoursWasted?.c || 0,
      HOURS_ADMIN: diagnosticData.hoursWasted?.d || 0,
      HOURS_ORGANIZATION: diagnosticData.hoursWasted?.e || 0,
    };

    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        to: [{
          email: email
        }],
        templateId: EMAIL_TEMPLATE_ID,
        params: params,
        headers: {
          'X-Mailin-custom': 'diagnostic-dainamics',
          'charset': 'UTF-8'
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ [BREVO] Erreur envoi email:', response.status, errorData);
      throw new Error(`Brevo email error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();
    console.log('✅ [BREVO] Email envoyé avec succès');
    console.log('📬 [BREVO] Message ID:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ [BREVO] Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}

/**
 * Main function to handle the complete diagnostic submission
 */
export async function submitDiagnosticToBrevo(
  email: string, 
  answers: DiagnosticAnswers,
  contactInfo?: Partial<ContactData>
): Promise<{ success: boolean; error?: string }> {
  console.log('🚀 [BREVO] Début de la soumission du diagnostic');
  console.log('📊 [BREVO] Données diagnostic:', {
    email,
    totalHours: answers.totalHoursWasted,
    aiScore: answers.aiScore,
    agent: answers.recommendedAgent
  });

  // Check API key
  if (!BREVO_API_KEY) {
    const error = 'Clé API Brevo manquante. Vérifiez votre configuration.';
    console.error('❌ [BREVO]', error);
    return { success: false, error };
  }

  try {
    // 1. Create/Update contact with diagnostic data
    const contactData: ContactData = {
      email,
      ...contactInfo,
      source: 'Questionnaire Diagnostic Homepage',
      diagnosticData: answers
    };

    await createOrUpdateContact(contactData);

    // 2. Send diagnostic results email
    await sendEmail(email, answers);

    console.log('✅ [BREVO] Soumission complète réussie!');
    return { success: true };

  } catch (error) {
    console.error('❌ [BREVO] Échec de la soumission:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erreur lors de la soumission' 
    };
  }
}

// Export utility to check if Brevo is properly configured
export function isBrevoConfigured(): boolean {
  return Boolean(BREVO_API_KEY);
}