/**
 * Google Analytics 4 tracking utilities for questionnaire
 * Tracks user journey and conversion funnel
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

function isGALoaded(): boolean {
  return typeof window.gtag === 'function';
}

export function trackQuestionnaireEvent(
  eventName: string,
  params?: Record<string, any>
) {
  if (!isGALoaded()) {
    console.warn('Google Analytics not loaded');
    return;
  }

  window.gtag?.('event', eventName, {
    event_category: 'Questionnaire',
    ...params
  });
}

export function trackQuestionnaireStart() {
  trackQuestionnaireEvent('questionnaire_started', {
    event_label: 'User clicked Begin Neural Scan'
  });
}

export function trackStepCompleted(
  stepNumber: number,
  stepName: string,
  data?: Record<string, any>
) {
  trackQuestionnaireEvent('questionnaire_step_completed', {
    step_number: stepNumber,
    step_name: stepName,
    ...data
  });
}

export function trackStepAbandoned(
  stepNumber: number,
  stepName: string,
  timeSpent: number
) {
  trackQuestionnaireEvent('questionnaire_abandoned', {
    step_number: stepNumber,
    step_name: stepName,
    time_spent_seconds: Math.round(timeSpent / 1000)
  });
}

export function trackQuestionnaireCompleted(
  challenges: string[],
  timeSpent: number
) {
  trackQuestionnaireEvent('questionnaire_completed', {
    event_label: 'User submitted questionnaire',
    challenges_selected: challenges.join(','),
    challenges_count: challenges.length,
    time_spent_seconds: Math.round(timeSpent / 1000),
    value: 1
  });

  if (isGALoaded()) {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      value: 1.0,
      currency: 'CHF'
    });
  }
}

export function trackEmailValidationError(reason: string) {
  trackQuestionnaireEvent('email_validation_failed', {
    event_label: reason
  });
}

export function trackBrevoError(error: string) {
  trackQuestionnaireEvent('brevo_submission_failed', {
    event_label: error
  });
}
