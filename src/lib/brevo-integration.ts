// Brevo (ex SendinBlue) API integration for Dainamics diagnostic questionnaire

// Brevo API configuration
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3';
const CONTACT_LIST_ID = 2; // ID de votre liste dans Brevo

// Debug logs
console.log('🔧 [BREVO] Module chargé');

// Helper functions for email formatting
function formatChallengesForEmail(challenges: string[]): string {
  const challengeLabels: Record<string, string> = {
    'customer-service': 'Service client débordé',
    'marketing': 'Marketing chronophage',
    'sales': 'Processus de vente inefficace',
    'admin': 'Tâches administratives lourdes',
    'data': 'Gestion des données complexe'
  };
  
  return challenges
    .map(c => `• ${challengeLabels[c] || c}`)
    .join('<br>');
}

function generateRecommendationsText(challenges: string[]): string {
  const recommendations: Record<string, string> = {
    'customer-service': 'Agent IA de support client pour traiter 80% des demandes automatiquement',
    'marketing': 'Assistant marketing IA pour création de contenu et campagnes',
    'sales': 'Agent de qualification des leads et automatisation du suivi',
    'admin': 'Automatisation complète de la facturation et des documents',
    'data': 'Pipeline de traitement et analyse automatique des données'
  };
  
  return challenges
    .map(c => recommendations[c] || 'Solution IA personnalisée')
    .map((rec, index) => index === 0 ? `• ${rec}` : `<br>• ${rec}`)
    .join('');
}

// Interface pour les données du questionnaire
export interface QuestionnaireData {
  email: string;
  name: string;
  company: string;
  challenges: string[];
  specificAnswers?: Record<string, any>;
}

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

interface BrevoResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

// Check API key on module load
if (!BREVO_API_KEY) {
  console.error('❌ [BREVO] ERREUR CRITIQUE: Clé API manquante! Vérifiez votre fichier .env');
  console.error('❌ [BREVO] Assurez-vous d\'avoir: VITE_BREVO_API_KEY=votre-clé-api dans le fichier .env');
} else {
  console.log('✅ [BREVO] Clé API détectée:', BREVO_API_KEY.substring(0, 20) + '...');
}

/**
 * Main function to submit questionnaire data to Brevo
 */
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

    // 2. ENVOI EMAIL TRANSACTIONNEL AVEC HTML INLINE
    const firstName = data.name.split(' ')[0];
    const challengesHTML = formatChallengesForEmail(data.challenges);
    const recommendationsHTML = generateRecommendationsText(data.challenges);

    const emailPayload = {
      sender: {
        name: 'DAINAMICS',
        email: 'admin@dainamics.ch'
      },
      to: [{ 
        email: data.email, 
        name: data.name 
      }],
      subject: `${firstName}, vos résultats d'analyse IA sont prêts 🚀`,
      htmlContent: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vos Résultats DAINAMICS</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #050510;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #050510;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #0A0A1B; border: 1px solid #1a1a2e; border-radius: 12px; overflow: hidden;">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #7B2FFF 0%, #10E4FF 100%);">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                🧠 Vos Résultats d'Analyse IA
              </h1>
            </td>
          </tr>
          
          <!-- Greeting Section -->
          <tr>
            <td style="padding: 40px 30px 30px 30px;">
              <p style="margin: 0; color: #ffffff; font-size: 20px; line-height: 1.5; font-weight: 600;">
                Bonjour <span style="color: #10E4FF;">${firstName}</span>,
              </p>
              <p style="margin: 20px 0 0 0; color: #b8b8c8; font-size: 16px; line-height: 1.6;">
                Merci d'avoir complété notre questionnaire diagnostic. Voici votre analyse personnalisée pour <strong style="color: #ffffff;">${data.company || 'votre entreprise'}</strong>.
              </p>
            </td>
          </tr>
          
          <!-- Challenges Section -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0d0d1f 0%, #1a0a2e 100%); border: 2px solid #7B2FFF; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 30px;">
                    <h2 style="margin: 0 0 20px 0; color: #7B2FFF; font-size: 22px; font-weight: 700; display: flex; align-items: center;">
                      🎯 Vos Défis Identifiés
                    </h2>
                    <div style="color: #e0e0e8; font-size: 16px; line-height: 1.9;">
                      ${challengesHTML}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Recommendations Section -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0d0d1f 0%, #0a1f2e 100%); border: 2px solid #10E4FF; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 30px;">
                    <h2 style="margin: 0 0 20px 0; color: #10E4FF; font-size: 22px; font-weight: 700;">
                      🚀 Nos Recommandations Personnalisées
                    </h2>
                    <div style="color: #e0e0e8; font-size: 16px; line-height: 1.9;">
                      ${recommendationsHTML}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Impact Section -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #1a0a2e 0%, #0a2e1a 100%); border: 2px solid #0AFF9D; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 30px;">
                    <h2 style="margin: 0 0 20px 0; color: #0AFF9D; font-size: 22px; font-weight: 700;">
                      💰 Impact Estimé sur Votre Entreprise
                    </h2>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 15px; text-align: center; background-color: rgba(10, 255, 157, 0.1); border-radius: 8px;">
                          <div style="color: #0AFF9D; font-size: 32px; font-weight: 700; margin-bottom: 5px;">-60%</div>
                          <div style="color: #b8b8c8; font-size: 14px;">Temps Tâches Répétitives</div>
                        </td>
                        <td style="width: 20px;"></td>
                        <td style="padding: 15px; text-align: center; background-color: rgba(16, 228, 255, 0.1); border-radius: 8px;">
                          <div style="color: #10E4FF; font-size: 32px; font-weight: 700; margin-bottom: 5px;">+40%</div>
                          <div style="color: #b8b8c8; font-size: 14px;">Productivité Équipe</div>
                        </td>
                        <td style="width: 20px;"></td>
                        <td style="padding: 15px; text-align: center; background-color: rgba(123, 47, 255, 0.1); border-radius: 8px;">
                          <div style="color: #7B2FFF; font-size: 32px; font-weight: 700; margin-bottom: 5px;">ROI 6M</div>
                          <div style="color: #b8b8c8; font-size: 14px;">Retour Investissement</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                <tr>
                  <td style="border-radius: 50px; background: linear-gradient(135deg, #7B2FFF 0%, #FF5A00 100%); box-shadow: 0 8px 30px rgba(123, 47, 255, 0.4);">
                    <a href="https://dainamics.ch/#contact" style="display: inline-block; padding: 18px 45px; color: #ffffff; text-decoration: none; font-size: 18px; font-weight: 700; letter-spacing: 0.5px;">
                      📞 Réserver un Appel Stratégique
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 20px 0 0 0; color: #b8b8c8; font-size: 14px; line-height: 1.5;">
                Échangeons sur vos défis et co-construisons<br>la solution adaptée à votre entreprise
              </p>
            </td>
          </tr>
          
          <!-- Testimonial -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0d0d1f; border-left: 4px solid #10E4FF; border-radius: 8px; padding: 25px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 15px 0; color: #e0e0e8; font-size: 15px; line-height: 1.7; font-style: italic;">
                      "Grâce à DAINAMICS, nous avons automatisé 70% de notre support client. Notre équipe se concentre enfin sur des tâches à valeur ajoutée."
                    </p>
                    <p style="margin: 0; color: #10E4FF; font-size: 14px; font-weight: 600;">
                      — Sarah M., Directrice Opérations, PME Suisse
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; border-top: 1px solid #1a1a2e; text-align: center; background-color: #050510;">
              <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                DAINAMICS by HMF Corporation SA
              </p>
              <p style="margin: 0 0 15px 0; color: #6b6b7b; font-size: 13px; line-height: 1.6;">
                Route du Jura 49, 1700 Fribourg, Switzerland
              </p>
              <p style="margin: 0; color: #6b6b7b; font-size: 13px;">
                <a href="https://dainamics.ch" style="color: #10E4FF; text-decoration: none; margin: 0 10px;">🌐 dainamics.ch</a>
                <span style="color: #1a1a2e;">|</span>
                <a href="mailto:contact@dainamics.ch" style="color: #10E4FF; text-decoration: none; margin: 0 10px;">✉️ contact@dainamics.ch</a>
              </p>
              <p style="margin: 20px 0 0 0; color: #6b6b7b; font-size: 11px;">
                Vous recevez cet email suite à votre demande d'analyse diagnostic.<br>
                <a href="#" style="color: #7B2FFF; text-decoration: none;">Se désabonner</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    };

    console.log('📤 [BREVO] Envoi email transactionnel...');
    console.log('📦 [BREVO] Payload email (sujet):', emailPayload.subject);

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
    
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur inconnue lors de l\'envoi'
    };
  }
}

/**
 * Legacy function for backward compatibility
 * Will be deprecated - use submitToBrevo instead
 */
export async function submitDiagnosticToBrevo(
  email: string, 
  answers: DiagnosticAnswers,
  contactInfo?: Partial<ContactData>
): Promise<{ success: boolean; error?: string }> {
  console.log('⚠️ [BREVO] Utilisation de la fonction legacy submitDiagnosticToBrevo');
  
  // Convert to new format
  const data: QuestionnaireData = {
    email,
    name: `${contactInfo?.firstName || ''} ${contactInfo?.lastName || ''}`.trim() || 'User',
    company: contactInfo?.company || '',
    challenges: Object.keys(answers.hoursWasted || {})
  };
  
  const result = await submitToBrevo(data);
  return {
    success: result.success,
    error: result.success ? undefined : result.message
  };
}

// Export utility to check if Brevo is properly configured
export function isBrevoConfigured(): boolean {
  return Boolean(BREVO_API_KEY);
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
