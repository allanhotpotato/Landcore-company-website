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
          <a href="#how">The data</a>
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
            <Sparkle /> Live data on the country&apos;s busiest jurisdictions
          </span>
          <h1>
            Feasible.
            <br />
            Entitled.
            <br />
            Permitted.
          </h1>
          <p className="lead">
            Every parcel arrives pre-wired with its zoning, overlays, utilities, and the code that
            govern them. Then Landcore runs the entitlement cycle — variance to permit — and
            drafts what each desk needs.
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="lg" icon="arrow-right" href="#demo">
              See your parcel
            </Button>
            <Button variant="secondary" size="lg" href="#how">
              See the data
            </Button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="n">10</div>
              <div className="l">States with live data</div>
            </div>
            <div className="stat">
              <div className="n">
                48<span className="u">h</span>
              </div>
              <div className="l">From parcel to permit-ready</div>
            </div>
            <div className="stat">
              <div className="n">
                90<span className="u">d</span>
              </div>
              <div className="l">Refresh on the data underneath</div>
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
      t: "The data is fragmented",
      d: "Forty-three county systems. Eighty-eight overlay layers. One asset class. The stitching is the work.",
    },
    {
      icon: "file-stack",
      t: "The code doesn't index itself",
      d: "Setbacks, overlays, use tables, variance grounds — buried in PDFs that don't search and don't talk to each other.",
    },
    {
      icon: "clock-alert",
      t: "The cycle has no truth source",
      d: "Filings live in email. Status lives in a planner's head. The calendar tells you last.",
    },
  ];
  return (
    <section className="section bg-white" id="problem">
      <div className="container">
        <SectionHead
          eyebrow="The state of the world"
          title="Most of the answer is buried in data developers can't pull."
          intro="County GIS, code PDFs, FEMA layers, utility maps, assessor records — every one a different schema, a different login, a different decade. The answer's there. Nobody can stitch it together fast."
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
      k: "01 — Site feasibility",
      t: "Site feasibility",
      bullets: [
        "Parcel data: assessor, geometry, land use",
        "Zoning lookup: districts, setbacks, FAR, overlays",
        "Environmental & utility flags surfaced up front",
        "Go / no-go score across the four layers",
      ],
      advise: "this parcel sits in a flood overlay — the buyer should re-price.",
    },
    {
      k: "02 — Entitlements",
      t: "Entitlements",
      bullets: [
        "Discretionary path mapped per jurisdiction",
        "Variance, CUP, and rezoning packets drafted",
        "Planning commission & council materials prepared",
        "Staff and neighborhood objections preempted",
      ],
      advise: "file the variance before the Q3 amendment — saves a 90-day re-review.",
    },
    {
      k: "03 — Permits",
      t: "Permits",
      bullets: [
        "Building, grading, and ESC permits sequenced",
        "Inspection briefs grounded in code",
        "Owners and deadlines across the cycle",
        "Status the whole team can see",
      ],
      advise: "schedule the footing inspection Thursday — concrete cures before the rain window.",
    },
  ];
  return (
    <section className="section bg-off" id="answer">
      <div className="container">
        <SectionHead
          eyebrow="The Landcore answer"
          title="Feasibility, entitlements, permits — one stack."
          intro="Three phases of pre-construction, on one stack. Every layer indexed, decoded, and ready before you start."
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
            <span className="eyebrow">The drafting layer</span>
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
              Cited drafts, not templates.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--gray-500)", maxWidth: 480 }}>
              Landcore reads the actual code and drafts what the approval needs — variance packets,
              conditional use applications, permit submittals — with exhibits attached. Then routes
              them to the desk that reads them.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
              {[
                "Every claim cited to the section it came from",
                "Right desk, right document, every time",
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
            <span className="eyebrow">The cycle layer</span>
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
