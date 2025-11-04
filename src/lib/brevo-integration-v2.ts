// ============================================================================
// DAINAMICS - Brevo Integration v2.0
// ============================================================================
// Version: 2.0 - Support AutomatisationsQuestionnaire
// Date: 03 Novembre 2025
// Migration: DiagnosticQuestionnaireNew → AutomatisationsQuestionnaire
// ============================================================================

// Brevo API configuration
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3';
const CONTACT_LIST_ID = 2; // ID de la liste "Questionnaire Automatisations"

// Debug logs
console.log('🔧 [BREVO v2] Module chargé');

if (!BREVO_API_KEY) {
  console.error('❌ [BREVO v2] ERREUR CRITIQUE: Clé API manquante! Vérifiez VITE_BREVO_API_KEY dans .env');
} else {
  console.log('✅ [BREVO v2] Clé API détectée:', BREVO_API_KEY.substring(0, 20) + '...');
}

// ============================================================================
// TYPES
// ============================================================================

export interface Scenario {
  id: string;
  titre: string;
  description: string;
  gains: string;
  duree: string;
  roiMois: string;
  automatisations: string[];
  icone: string;
}

export interface QuestionnaireDataV2 {
  email: string;
  attributes: {
    FIRSTNAME: string;
    LASTNAME: string;
    PHONE?: string;
    COMPANY: string;
    CATEGORIE_PROBLEMATIQUE: string;
    REPONSES_QUESTIONNAIRE: string; // JSON stringifié
  };
  listIds: number[];
  updateEnabled: boolean;
  scenarios?: Scenario[]; // 3 scénarios recommandés
}

interface BrevoResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

// ============================================================================
// EMAIL HTML TEMPLATE GENERATOR
// ============================================================================

function generateEmailHTML(
  prenom: string,
  entreprise: string,
  categorie: string,
  scenarios: Scenario[]
): string {
  // Mapping catégories pour affichage
  const categorieLabels: Record<string, string> = {
    'finance-admin': 'Finance & Administration',
    'ventes-pipeline': 'Ventes & Pipeline Commercial',
    'marketing-leads': 'Marketing & Génération Leads',
    'support-client': 'Support Client',
    'production-stock': 'Production & Gestion Stocks',
    'rh-equipe': 'RH & Équipe'
  };

  const categorieLabel = categorieLabels[categorie] || categorie;

  // Générer HTML pour chaque scénario
  const scenariosHTML = scenarios.map((scenario, index) => `
    <!-- Scénario ${index + 1} -->
    <tr>
      <td style="padding: 0 30px 25px 30px;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0d0d1f 0%, #1a0a2e 100%); border: 2px solid ${index === 0 ? '#7B2FFF' : index === 1 ? '#10E4FF' : '#0AFF9D'}; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 30px;">
              <!-- Numéro + Titre -->
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; background: ${index === 0 ? '#7B2FFF' : index === 1 ? '#10E4FF' : '#0AFF9D'}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <span style="color: #ffffff; font-size: 20px; font-weight: 700;">${index + 1}</span>
                </div>
                <h3 style="margin: 0; color: ${index === 0 ? '#7B2FFF' : index === 1 ? '#10E4FF' : '#0AFF9D'}; font-size: 20px; font-weight: 700;">
                  ${scenario.titre}
                </h3>
              </div>
              
              <!-- Description -->
              <p style="margin: 0 0 20px 0; color: #e0e0e8; font-size: 15px; line-height: 1.7;">
                ${scenario.description}
              </p>
              
              <!-- Métriques -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 12px; background-color: rgba(10, 255, 157, 0.1); border-radius: 8px; text-align: center; width: 33%;">
                    <div style="color: #0AFF9D; font-size: 13px; font-weight: 600; margin-bottom: 4px;">GAINS</div>
                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">${scenario.gains}</div>
                  </td>
                  <td style="width: 10px;"></td>
                  <td style="padding: 12px; background-color: rgba(16, 228, 255, 0.1); border-radius: 8px; text-align: center; width: 33%;">
                    <div style="color: #10E4FF; font-size: 13px; font-weight: 600; margin-bottom: 4px;">DURÉE</div>
                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">${scenario.duree}</div>
                  </td>
                  <td style="width: 10px;"></td>
                  <td style="padding: 12px; background-color: rgba(123, 47, 255, 0.1); border-radius: 8px; text-align: center; width: 33%;">
                    <div style="color: #7B2FFF; font-size: 13px; font-weight: 600; margin-bottom: 4px;">ROI</div>
                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">${scenario.roiMois}</div>
                  </td>
                </tr>
              </table>
              
              <!-- Automatisations incluses -->
              <div style="margin-bottom: 15px;">
                <div style="color: #b8b8c8; font-size: 13px; font-weight: 600; margin-bottom: 10px;">Automatisations Incluses :</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${scenario.automatisations.map(auto => `
                    <span style="display: inline-block; padding: 6px 12px; background-color: rgba(123, 47, 255, 0.15); color: #7B2FFF; border: 1px solid rgba(123, 47, 255, 0.3); border-radius: 6px; font-size: 12px; font-weight: 500;">
                      ${auto}
                    </span>
                  `).join('')}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vos 3 Scénarios d'Automatisation - DAINAMICS</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #050510;">
  
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #050510;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Container principal -->
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #0A0A1B; border: 1px solid #1a1a2e; border-radius: 12px; overflow: hidden;">
          
          <!-- Header Gradient -->
          <tr>
            <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #7B2FFF 0%, #10E4FF 100%);">
              <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                DAINAMICS
              </h1>
              <div style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">
                Swiss AI Automation
              </div>
            </td>
          </tr>
          
          <!-- Greeting Section -->
          <tr>
            <td style="padding: 40px 30px 30px 30px;">
              <div style="display: inline-block; padding: 8px 16px; background-color: rgba(10, 255, 157, 0.15); border: 1px solid rgba(10, 255, 157, 0.3); border-radius: 20px; margin-bottom: 20px;">
                <span style="color: #0AFF9D; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">✓ ANALYSE COMPLÈTE</span>
              </div>
              
              <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 26px; font-weight: 700; line-height: 1.3;">
                Bonjour ${prenom} 👋
              </h2>
              
              <p style="margin: 0; color: #b8b8c8; font-size: 16px; line-height: 1.7;">
                Merci d'avoir complété notre questionnaire ! Voici <strong style="color: #ffffff;">vos 3 scénarios d'automatisation personnalisés</strong> pour ${entreprise}, basés sur votre problématique principale : <strong style="color: #10E4FF;">${categorieLabel}</strong>.
              </p>
            </td>
          </tr>
          
          ${scenariosHTML}
          
          <!-- Impact Global -->
          <tr>
            <td style="padding: 10px 30px 35px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #1a0a2e 0%, #0a2e1a 100%); border: 2px solid #0AFF9D; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 30px;">
                    <h3 style="margin: 0 0 20px 0; color: #0AFF9D; font-size: 22px; font-weight: 700; text-align: center;">
                      💰 Impact Estimé sur Votre Entreprise
                    </h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 15px; text-align: center; background-color: rgba(10, 255, 157, 0.1); border-radius: 8px; width: 33%;">
                          <div style="color: #0AFF9D; font-size: 32px; font-weight: 700; margin-bottom: 5px;">60-80%</div>
                          <div style="color: #b8b8c8; font-size: 13px; line-height: 1.4;">Temps Gagné<br>Tâches Répétitives</div>
                        </td>
                        <td style="width: 15px;"></td>
                        <td style="padding: 15px; text-align: center; background-color: rgba(16, 228, 255, 0.1); border-radius: 8px; width: 33%;">
                          <div style="color: #10E4FF; font-size: 32px; font-weight: 700; margin-bottom: 5px;">+35%</div>
                          <div style="color: #b8b8c8; font-size: 13px; line-height: 1.4;">Productivité<br>Équipe</div>
                        </td>
                        <td style="width: 15px;"></td>
                        <td style="padding: 15px; text-align: center; background-color: rgba(123, 47, 255, 0.1); border-radius: 8px; width: 33%;">
                          <div style="color: #7B2FFF; font-size: 32px; font-weight: 700; margin-bottom: 5px;">3-6 mois</div>
                          <div style="color: #b8b8c8; font-size: 13px; line-height: 1.4;">Retour<br>Investissement</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Principal -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                <tr>
                  <td style="border-radius: 50px; background: linear-gradient(135deg, #7B2FFF 0%, #FF5A00 100%); box-shadow: 0 8px 30px rgba(123, 47, 255, 0.4);">
                    <a href="https://dainamics.ch/#contact" style="display: inline-block; padding: 18px 45px; color: #ffffff; text-decoration: none; font-size: 18px; font-weight: 700; letter-spacing: 0.5px;">
                      📞 Réserver un Appel Stratégique Gratuit
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 20px 0 0 0; color: #b8b8c8; font-size: 14px; line-height: 1.6;">
                Discutons de vos besoins spécifiques et de la faisabilité<br>de ces scénarios dans votre contexte (30 min, sans engagement)
              </p>
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td style="padding: 0 30px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, #7B2FFF 50%, transparent 100%);"></div>
            </td>
          </tr>
          
          <!-- Ressources Complémentaires -->
          <tr>
            <td style="padding: 30px;">
              <h3 style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 700; text-align: center;">
                📚 Ressources Complémentaires
              </h3>
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px; background-color: #0d0d1f; border-radius: 8px; width: 48%;">
                    <div style="color: #10E4FF; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Guide PDF</div>
                    <a href="https://dainamics.ch/resources/guide-automatisations-pme" style="color: #b8b8c8; font-size: 13px; text-decoration: none; line-height: 1.5;">
                      20 Automatisations à Fort ROI pour PME →
                    </a>
                  </td>
                  <td style="width: 4%;"></td>
                  <td style="padding: 15px; background-color: #0d0d1f; border-radius: 8px; width: 48%;">
                    <div style="color: #7B2FFF; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Cas Clients</div>
                    <a href="https://dainamics.ch/projets" style="color: #b8b8c8; font-size: 13px; text-decoration: none; line-height: 1.5;">
                      Découvrez nos réalisations concrètes →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Testimonial -->
          <tr>
            <td style="padding: 0 30px 35px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0d0d1f; border-left: 4px solid #10E4FF; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px 0; color: #e0e0e8; font-size: 14px; line-height: 1.7; font-style: italic;">
                      "DAINAMICS a automatisé 70% de notre support client. Notre équipe se concentre maintenant sur des tâches à vraie valeur ajoutée. ROI atteint en 4 mois."
                    </p>
                    <p style="margin: 0; color: #10E4FF; font-size: 13px; font-weight: 600;">
                      — Sarah M., Directrice Opérations, PME Tech Suisse
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 25px 30px; border-top: 1px solid #1a1a2e; text-align: center; background-color: #050510;">
              <p style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                DAINAMICS by HMF Corporation SA
              </p>
              <p style="margin: 0 0 12px 0; color: #6b6b7b; font-size: 12px; line-height: 1.5;">
                Route du Jura 49, 1700 Fribourg, Switzerland
              </p>
              <p style="margin: 0; color: #6b6b7b; font-size: 12px;">
                <a href="https://dainamics.ch" style="color: #10E4FF; text-decoration: none; margin: 0 8px;">🌐 dainamics.ch</a>
                <span style="color: #1a1a2e;">|</span>
                <a href="mailto:contact@dainamics.ch" style="color: #10E4FF; text-decoration: none; margin: 0 8px;">✉️ contact@dainamics.ch</a>
              </p>
              <p style="margin: 15px 0 0 0; color: #6b6b7b; font-size: 11px;">
                Vous recevez cet email suite à votre demande d'analyse diagnostic.<br>
                <a href="{{ unsubscribe }}" style="color: #7B2FFF; text-decoration: none;">Se désabonner</a>
              </p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>`;
}

// ============================================================================
// MAIN FUNCTION: Submit to Brevo v2
// ============================================================================

export async function submitToBrevoV2(data: QuestionnaireDataV2): Promise<BrevoResponse> {
  console.log('🚀 [BREVO v2] Début de la soumission');
  console.log('📧 [BREVO v2] Email:', data.email);
  console.log('👤 [BREVO v2] Prénom:', data.attributes.FIRSTNAME);
  console.log('👤 [BREVO v2] Nom:', data.attributes.LASTNAME);
  console.log('🏢 [BREVO v2] Entreprise:', data.attributes.COMPANY);
  console.log('🎯 [BREVO v2] Catégorie:', data.attributes.CATEGORIE_PROBLEMATIQUE);
  console.log('📊 [BREVO v2] Scénarios:', data.scenarios?.length || 0);
  
  // Vérification clé API
  if (!BREVO_API_KEY || BREVO_API_KEY === '') {
    console.error('❌ [BREVO v2] ERREUR CRITIQUE: Clé API manquante !');
    return {
      success: false,
      message: 'Configuration Brevo manquante (clé API)'
    };
  }
  
  console.log('✅ [BREVO v2] Clé API détectée');
  
  try {
    // ========================================
    // 1. CRÉATION/MISE À JOUR CONTACT
    // ========================================
    const contactPayload = {
      email: data.email,
      attributes: {
        FIRSTNAME: data.attributes.FIRSTNAME,
        LASTNAME: data.attributes.LASTNAME,
        PHONE: data.attributes.PHONE || '',
        COMPANY: data.attributes.COMPANY,
        CATEGORIE_PROBLEMATIQUE: data.attributes.CATEGORIE_PROBLEMATIQUE,
        REPONSES_QUESTIONNAIRE: data.attributes.REPONSES_QUESTIONNAIRE,
        SOURCE: 'Questionnaire Automatisations v2',
        LANGUAGE: 'FR'
      },
      listIds: data.listIds,
      updateEnabled: data.updateEnabled
    };

    console.log('📤 [BREVO v2] Envoi création contact...');

    const contactResponse = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(contactPayload)
    });

    console.log('📥 [BREVO v2] Réponse création contact - Status:', contactResponse.status);
    
    const contactResponseText = await contactResponse.text();
    console.log('📄 [BREVO v2] Réponse brute contact:', contactResponseText);

    // Status 201 = créé, 204 = mis à jour, 400 = existe déjà (acceptable)
    if (!contactResponse.ok && contactResponse.status !== 400 && contactResponse.status !== 204) {
      console.error('❌ [BREVO v2] Échec création contact');
      let errorData;
      try {
        errorData = JSON.parse(contactResponseText);
      } catch {
        errorData = { message: contactResponseText };
      }
      throw new Error(`Erreur création contact (${contactResponse.status}): ${JSON.stringify(errorData)}`);
    }

    console.log('✅ [BREVO v2] Contact créé/mis à jour avec succès');

    // ========================================
    // 2. ENVOI EMAIL TRANSACTIONNEL
    // ========================================
    
    // Vérifier que nous avons des scénarios
    if (!data.scenarios || data.scenarios.length === 0) {
      console.warn('⚠️ [BREVO v2] Aucun scénario fourni, email non envoyé');
      return {
        success: true,
        message: 'Contact créé, mais pas d\'email envoyé (aucun scénario)'
      };
    }

    // Générer l'email HTML avec les scénarios
    const emailHTML = generateEmailHTML(
      data.attributes.FIRSTNAME,
      data.attributes.COMPANY,
      data.attributes.CATEGORIE_PROBLEMATIQUE,
      data.scenarios
    );

    const emailPayload = {
      sender: {
        name: 'DAINAMICS',
        email: 'admin@dainamics.ch'
      },
      to: [{ 
        email: data.email, 
        name: `${data.attributes.FIRSTNAME} ${data.attributes.LASTNAME}`.trim()
      }],
      subject: `${data.attributes.FIRSTNAME}, vos 3 scénarios d'automatisation personnalisés 🚀`,
      htmlContent: emailHTML,
      tags: ['questionnaire-automatisations-v2']
    };

    console.log('📤 [BREVO v2] Envoi email transactionnel...');
    console.log('📦 [BREVO v2] Sujet:', emailPayload.subject);

    const emailResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(emailPayload)
    });

    console.log('📥 [BREVO v2] Réponse envoi email - Status:', emailResponse.status);
    
    const emailResponseText = await emailResponse.text();
    console.log('📄 [BREVO v2] Réponse brute email:', emailResponseText);

    if (!emailResponse.ok) {
      console.error('❌ [BREVO v2] Échec envoi email');
      let errorData;
      try {
        errorData = JSON.parse(emailResponseText);
      } catch {
        errorData = { message: emailResponseText };
      }
      throw new Error(`Erreur envoi email (${emailResponse.status}): ${JSON.stringify(errorData)}`);
    }

    const emailData = JSON.parse(emailResponseText);
    console.log('✅ [BREVO v2] Email envoyé avec succès');
    console.log('📬 [BREVO v2] Message ID:', emailData.messageId);

    return {
      success: true,
      message: 'Votre analyse personnalisée a été envoyée par email !',
      messageId: emailData.messageId
    };

  } catch (error) {
    console.error('❌❌❌ [BREVO v2] ERREUR FATALE:', error);
    console.error('🔍 [BREVO v2] Détails erreur:', error instanceof Error ? error.message : String(error));
    
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur inconnue lors de l\'envoi'
    };
  }
}

// ============================================================================
// UTILITIES
// ============================================================================

export function isBrevoConfigured(): boolean {
  return Boolean(BREVO_API_KEY);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Bloquer emails jetables
  const disposableDomains = [
    'tempmail.com',
    'guerrillamail.com',
    '10minutemail.com',
    'mailinator.com',
    'throwaway.email',
    'temp-mail.org'
  ];

  const domain = email.split('@')[1]?.toLowerCase();
  return !disposableDomains.includes(domain);
}

// Export default pour compatibilité
export default submitToBrevoV2;
