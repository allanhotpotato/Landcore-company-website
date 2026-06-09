/* ============================================================
   Landcore UI Kit — page sections (top + middle)
   Ported from sections.jsx.
   ============================================================ */
import {
  Button,
  EmailCard,
  FeasibilityCard,
  Icon,
  InspectionCard,
  Logo,
  SectionHead,
  Sparkle,
} from "./core";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top">
          <Logo />
        </a>
        <nav className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#answer">Product</a>
          <a href="#how">How it works</a>
          <a href="#who">Who it&apos;s for</a>
          <a href="#results">Results</a>
        </nav>
        <div className="nav-cta">
          <Button variant="ghost" href="#demo">
            Sign in
          </Button>
          <Button variant="primary" href="#demo">
            Score a site
          </Button>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div>
          <span className="tag tag-blue">
            <Sparkle /> AI feasibility, in 48 hours
          </span>
          <h1>
            Know it.
            <br />
            Approve it.
            <br />
            Build it.
          </h1>
          <p className="lead">
            Landcore turns a parcel into a permit-ready project — with the data already pulled,
            the documents already drafted, and the cycle already running.
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="lg" icon="arrow-right" href="#demo">
              Score your first site
            </Button>
            <Button variant="secondary" size="lg" href="#how">
              See the stack
            </Button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="n">
                48<span className="u">h</span>
              </div>
              <div className="l">From parcel to feasibility score</div>
            </div>
            <div className="stat">
              <div className="n">
                $150K<span className="u">+</span>
              </div>
              <div className="l">Saved per project</div>
            </div>
            <div className="stat">
              <div className="n">5–10</div>
              <div className="l">Consultants replaced by one system</div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <FeasibilityCard />
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  // Real construction / RE software stack Landcore works alongside.
  const logos: [string, string][] = [
    ["hard-hat", "Procore"],
    ["file-pen", "Bluebeam"],
    ["ruler", "Autodesk Construction"],
    ["signature", "DocuSign"],
    ["map-pinned", "Esri ArcGIS"],
    ["mail", "Google Workspace"],
    ["hash", "Slack"],
    ["grid-2x2", "Microsoft 365"],
    ["box", "Dropbox"],
    ["land-plot", "Regrid"],
  ];
  const track = [...logos, ...logos];
  return (
    <section className="section-tight bg-off">
      <div className="container">
        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gray-400)",
            fontWeight: 600,
            margin: "0 0 28px",
          }}
        >
          Works alongside your stack
        </p>
        <div className="marquee">
          <div className="marquee-track">
            {track.map((l, i) => (
              <span className="marquee-item" key={i}>
                <Icon name={l[0]} size={20} /> {l[1]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const cards = [
    {
      icon: "search-x",
      t: "Feasibility lives in a six-figure black box",
      d: "Five to ten specialists, months of waiting, just to learn whether a parcel pencils. The answer arrives expensive, late, and impossible to act on.",
    },
    {
      icon: "file-stack",
      t: "Zoning is buried in a thousand PDFs",
      d: "Setbacks, overlays, and use tables scattered across codes nobody reads the same way twice. One misread restarts the clock.",
    },
    {
      icon: "clock-alert",
      t: "Permits stall in the dark",
      d: "No owner, no deadline, no next move. Approvals slip and the calendar tells you only after the fact.",
    },
  ];
  return (
    <section className="section bg-white" id="problem">
      <div className="container">
        <SectionHead
          eyebrow="The problem"
          title="The path to approval is fragmented and slow."
          intro="Developers stitch together specialists, spreadsheets, and hope. It's expensive, manual, and impossible to predict."
        />
        <div className="grid-3" style={{ marginTop: 48 }}>
          {cards.map((c) => (
            <div className="card card-hover reveal" key={c.t}>
              <div className="icon-tile">
                <Icon name={c.icon} size={22} />
              </div>
              <div className="ttl">{c.t}</div>
              <p className="desc">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pillars() {
  const pillars = [
    {
      k: "01 — Know it",
      t: "Know it",
      bullets: [
        "Feasibility scored across zoning, environment, access, and code",
        "Overlays and setbacks decoded automatically",
        "Environmental and utility risk surfaced up front",
        "Entitlement path mapped before you tie up the land",
      ],
      advise: "file the variance before the Q3 zoning amendment — it saves a 90-day re-review.",
    },
    {
      k: "02 — Approve it",
      t: "Approve it",
      bullets: [
        "Submittals drafted in your voice, grounded in the code",
        "Right document, right desk, right format",
        "One-click approve and send",
        "Every revision stitched into one thread",
      ],
      advise: "send the pre-application now; the planner's calendar fills three weeks out.",
    },
    {
      k: "03 — Build it",
      t: "Build it",
      bullets: [
        "Permit cycle with owners, deadlines, and dependencies",
        "Inspection briefs the inspector will actually read",
        "Re-inspection risk flagged before you call",
        "Status the whole team can see in one place",
      ],
      advise: "schedule the footing inspection Thursday — concrete cures before the rain window.",
    },
  ];
  return (
    <section className="section bg-off" id="answer">
      <div className="container">
        <SectionHead
          eyebrow="The Landcore answer"
          title="One system. What to do, why, and by when."
          intro="Not generic. Not manual. Landcore turns every parcel into a decision and every approval into a plan."
        />
        <div className="grid-3" style={{ marginTop: 48, alignItems: "stretch" }}>
          {pillars.map((p) => (
            <div className="pillar reveal" key={p.t}>
              <span className="pk">{p.k}</span>
              <h3>{p.t}</h3>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={17} /> {b}
                  </li>
                ))}
              </ul>
              <div className="advise">
                <b>
                  <Sparkle /> Landcore advises:
                </b>{" "}
                {p.advise}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmailFeature() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2">
          <div>
            <span className="eyebrow">AI submittal drafting</span>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: 40,
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                fontWeight: 600,
                color: "var(--navy)",
              }}
            >
              You approve. We file.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--gray-500)", maxWidth: 480 }}>
              Landcore drafts every submittal in your voice, attaches the right files, and routes
              it to the desk that actually reads it. Grounded in the code, not in templates.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
              {[
                "Drafts grounded in the cited code",
                "Right desk, right format, every time",
                "Approve, edit, or send in one click",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 16, color: "var(--gray-700)" }}>
                  <Icon name="check" size={18} color="var(--blue)" /> {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" icon="arrow-right" href="#demo">
                See it draft a submittal
              </Button>
            </div>
          </div>
          <div>
            <EmailCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export function InspectionFeature() {
  return (
    <section className="section bg-off">
      <div className="container">
        <div className="grid-2">
          <div style={{ order: 2 }}>
            <InspectionCard />
          </div>
          <div style={{ order: 1 }}>
            <span className="eyebrow">Inspection intelligence</span>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: 40,
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                fontWeight: 600,
                color: "var(--navy)",
              }}
            >
              Walk in ready. Pass the first time.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--gray-500)", maxWidth: 480 }}>
              Before every inspection, Landcore generates a brief of exactly what the inspector will
              check — with the code citation and the spec — so nothing gets red-tagged.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
              {[
                "Checklist tailored to the inspection type",
                "Code citations and required tolerances",
                "Re-inspection risk flagged before you call",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 16, color: "var(--gray-700)" }}>
                  <Icon name="check" size={18} color="var(--blue)" /> {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" icon="arrow-right" href="#demo">
                Generate a brief
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
