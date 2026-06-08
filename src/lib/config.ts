/* ============================================================
   Landcore — shared site config.
   Centralizes the few values that get wired in Phase 2 so they
   are trivial to change in one place.
   ============================================================ */

// Calendly scheduling link for the Landcore demo event.
export const CALENDLY_URL = "https://calendly.com/brandon-landcoreai/30min";

// Where demo-request leads are emailed.
export const LEAD_EMAIL = "brandon@landcoreai.com";
export const LEAD_MAILTO = `mailto:${LEAD_EMAIL}?subject=Landcore%20demo%20request`;

// In-page anchor for the demo section (Calendly embed + request form).
export const DEMO_ANCHOR = "#demo";
