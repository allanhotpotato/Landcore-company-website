# Landcore Website — Build Instructions for Claude Code

You are building a production company website for **Landcore** from an existing design-system
kit. This document is your complete brief. Work through the phases in order. Stop at each
**CHECKPOINT** and confirm the result with the user before continuing.

## What you're building
A single long-form marketing site, deployed to the live domain `landcoreai.com`, with a working
"Book a Demo" flow (Calendly) and a demo-request form that emails leads (Resend). Keep the
architecture lean and flexible — this is a marketing site, not an app. Do not build a custom
server, database, or auth layer; the structure below lets those be added later if ever needed.

## Locked decisions — do not deviate
- **Framework:** Next.js (App Router) + TypeScript, `src/` directory, **no Tailwind** (a custom
  CSS design system is supplied), default ESLint. One repo holds frontend + the form API route.
- **Scheduling:** Calendly embed (no backend code).
- **Demo form:** required; posts to a Next.js API route that emails leads via **Resend**.
- **Email hosting:** the domain's email runs on **Microsoft 365**. At the DNS step you must
  change website records ONLY and never touch MX/SPF/DKIM records.
- **Host:** Vercel, deployed from GitHub. **Domain:** `landcoreai.com`, registered at GoDaddy.

---

## The source kit
The user will point you at an unzipped `Landcore_Design_System/` folder containing:
- `colors_and_type.css` — design tokens (navy `#0A1130`, blue `#2563EB` as the ONLY accent,
  Geist + Geist Mono, spacing, radii, shadows). **These values are fixed. Do not alter any of
  them.**
- `ui_kits/website/` — the full landing page written in React but loaded via CDN + inline Babel:
  - `core.jsx` exports: `Icon, Sparkle, Logo, Button, SectionHead, BlueprintBG,
    FeasibilityCard, EmailCard, InspectionCard`
  - `sections.jsx` exports: `Nav, Hero, SocialProof, Problem, Pillars, HowItWorks,
    EmailFeature, InspectionFeature`
  - `bottom.jsx` exports: `WhoItsFor, Results, BookingWidget, CTA, Footer, App`
  - `kit.css` — all layout/component classes (pairs with the token file)
  - `index.html` — assembles `<App />` for preview
  - Each `.jsx` file exports components via `Object.assign(window, {...})` at its end — the
    CDN/Babel pattern. Porting means converting these to normal ES module `import`/`export`.
- `assets/` and `uploads/` — real photography (construction, skyline, residential, blueprint).

## Brand rules you must preserve
- One accent only: blue `#2563EB`. Navy `#0A1130` is text and dark sections.
- Backgrounds are white / warm off-white, broken by full-bleed navy and rare solid-blue panels.
  No gradients-as-decoration, no glassmorphism.
- Geist everywhere; Geist Mono for data/meta. Headlines large, tightly-tracked, sentence-case.
- Lucide icons (thin stroke). The ✦ sparkle marks AI-generated content. No emoji.
- Photography only (no illustration/3D), always in rounded containers. Thin hairline dividers,
  soft low shadows on product cards.
- Status colors (green/amber) appear only inside the product mockup cards.

---

## PHASE 1 — Scaffold and port the kit
Goal: a real Next.js build that renders **identically** to the kit preview. Nothing wired yet.

1. Scaffold the Next.js app as specified under locked decisions. Boot the dev server to confirm
   it runs, then stop it.
2. Install the design system: import `colors_and_type.css` and `ui_kits/website/kit.css` in the
   root layout so tokens load app-wide. Copy the kit's `assets/` and `uploads/` photos into
   `public/assets/`. Load Geist + Geist Mono (Google Fonts) and Lucide globally.
3. Port every component from `core.jsx`, `sections.jsx`, and `bottom.jsx` into TypeScript modules
   under `src/components/`, converting the `window` exports into normal `import`/`export`.
   Preserve exact markup, class names, and all cosmetic interactions (sticky nav, auto-scrolling
   logo marquee that pauses on hover and respects reduced-motion, IntersectionObserver
   scroll-reveal, button hover/press states). Render Lucide icons however is cleanest in Next
   (`lucide-react` or `<i data-lucide>` + `lucide.createIcons()`).
4. Assemble `src/app/page.tsx` in this exact order: Nav → Hero → SocialProof → Problem → Pillars
   → HowItWorks → EmailFeature → InspectionFeature → WhoItsFor → Results → BookingWidget/CTA →
   Footer.

**CHECKPOINT 1:** Run the dev server. Confirm with the user that the page looks identical to the
kit's `index.html` preview before proceeding.

---

## PHASE 2 — Make the buttons real
Goal: booking creates a real meeting; the form delivers a real email; all links resolve.

1. **Calendly:** the user will provide a Calendly scheduling link for a 20-minute "Landcore Demo"
   event. Replace the cosmetic `BookingWidget` with a Calendly inline embed, styled to sit inside
   the existing booking card and surrounding brand layout. Wire every "Book a Demo" button (Nav,
   Hero, CTA) to either scroll to the embed or open the Calendly popup. Use one shared link
   constant so it's trivial to change.
2. **Demo form + email:** add a form (name, company, email, optional message) in the demo
   section, styled with the kit's existing input styles, with client-side validation. Create
   `src/app/api/demo-request/route.ts` that validates server-side and sends the lead to
   brandon@landcoreai.com via Resend, reading the key from env var `RESEND_API_KEY` (never
   hard-code it). On submit, disable the button and show success/error state without a page
   reload. Keep a visible `mailto:brandon@landcoreai.com` fallback link.
3. **Fix the kit's placeholders:**
   - Replace footer `href="#cta"` links with real anchors — `#answer`, `#how`, `#who`,
     `#results`, `#demo` — and add matching `id`s to those sections.
   - Replace the integration marquee's placeholder partner names with the software stack under a
     "Works alongside your stack" heading: Procore, Bluebeam, Autodesk Construction, DocuSign,
     Esri ArcGIS, Google Workspace, Slack, Microsoft 365, Dropbox, Regrid.
   - The kit reuses only four photos; add a few more commercial-free images so the Who-It's-For
     columns aren't repetitive. Use Next `<Image>` for all photography.

**CHECKPOINT 2:** Confirm with the user that booking, the form email, and every nav/footer link
work before proceeding.

---

## PHASE 3 — Deploy to the live domain
Goal: live on `landcoreai.com` with email still intact.

1. Initialize git, commit, and push to a GitHub repo named `landcore-site`.
2. Have the user import the repo into Vercel and add the `RESEND_API_KEY` env var in Vercel's
   project settings. Confirm it builds and is live at the `*.vercel.app` URL.
3. **Point the domain — Microsoft-365-safe:** in Vercel add the custom domain `landcoreai.com`.
   Instruct the user to edit GoDaddy DNS using the **A-record method**: change only the `@` A
   record and the `www` CNAME to Vercel's values. They must NOT touch MX records
   (`*.mail.protection.outlook.com`), the SPF TXT record, the `autodiscover` CNAME, or any DKIM
   CNAMEs. If Vercel offers nameserver delegation instead, decline it and use the A-record path
   so mail records stay untouched. After propagation, verify the site loads on the domain and
   that a test email to brandon@ still arrives.

**CHECKPOINT 3:** Confirm the site is live on `landcoreai.com` and email works.

---

## PHASE 4 — Launch polish
- SEO: page title "Landcore — Know It. Approve It. Build It.", the meta description from the
  content spec, an Open Graph image, and a favicon built from the LC monogram.
- Analytics: add Vercel Analytics or Plausible.
- Accessibility: verify alt text, color contrast, and keyboard navigation (reduced-motion is
  already honored by the kit).
- Performance: ensure all photos use Next `<Image>`; confirm a healthy Lighthouse score.

---

## Things the user is responsible for providing
Ask for each when its phase begins; don't block earlier phases waiting on them.
- Calendly scheduling link for the 20-minute demo event (Phase 2).
- Resend account + `RESEND_API_KEY` (Phase 2).
- GitHub repo `landcore-site` and Vercel account (Phase 3).
- GoDaddy DNS access (Phase 3) — remind them: website records only, never MX/mail records.

## Designed-in flexibility (do not build these now; keep the door open)
Additional pages go under `src/app/` and inherit shared components + tokens. A blog can be added
later via MDX or a headless CMS. Lead storage can be added by having `/api/demo-request` also
write to a database (Vercel Postgres / Supabase). Auth can be added with Auth.js without touching
marketing pages. All design changes stay centralized in `colors_and_type.css`.
