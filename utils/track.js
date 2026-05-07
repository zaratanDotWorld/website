// GA4 event names sent via gtag. The CRO agent reads this file to attribute
// each event to its product and page; keep the trailing comments accurate.
export const CTA = {
  newsletterSignup: 'newsletter_signup',              // homepage — Mailchimp newsletter signup
  waitlistSage: 'cta_waitlist_sage',                  // Sage House — join waitlist
  emailCactus: 'cta_email_cactus',                    // Cactus Cottage — email inquiry
  bookConsult: 'cta_book_consult',                    // About page — Calendly consultation
  emailAbout: 'cta_email_about',                      // About page — email inquiry
  cwGetStarted: 'cta_cw_get_started',                 // Chore Wheel — "Get Started" CTA on /chorewheel
  cwInterest: 'cta_cw_interest',                      // Chore Wheel — deployment interest form (Google Form)
  slackWorkspace: 'cta_slack_workspace',              // Chore Wheel — link to create a Slack workspace
  installChores: 'cta_install_chores',                // Chore Wheel — install Chores Slack app
  installHearts: 'cta_install_hearts',                // Chore Wheel — install Hearts Slack app
  installThings: 'cta_install_things',                // Chore Wheel — install Things Slack app
  emailCw: 'cta_email_cw',                            // Chore Wheel — email contact (multiple placements)
};

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
