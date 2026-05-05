export const CTA = {
  newsletterSignup: 'newsletter_signup',
  waitlistSage: 'cta_waitlist_sage',
  emailCactus: 'cta_email_cactus',
  bookConsultation: 'cta_book_consultation',
  emailAbout: 'cta_email_about',
  chorewheelGetStarted: 'cta_chorewheel_get_started',
  interestForm: 'cta_interest_form',
  slackWorkspace: 'cta_slack_workspace',
  installChores: 'cta_install_chores',
  installHearts: 'cta_install_hearts',
  installThings: 'cta_install_things',
  emailChorewheel: 'cta_email_chorewheel',
};

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
