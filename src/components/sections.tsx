/* ============================================================
   Landcore UI Kit — page sections (top + middle)
   Ported from sections.jsx.
   ============================================================ */
import {
  BlueprintBG,
  Button,
  DashboardCard,
  EmailCard,
  FeasibilityCard,
  Icon,
  Logo,
  ScoreboardCard,
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
            Landcore scores any site, decodes the zoning, and drives the entitlements — with a
            licensed expert reviewing the AI, and your whole team on one dashboard.
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="lg" icon="arrow-right" href="#demo">
              Score your first site
            </Button>
            <Button variant="secondary" size="lg" href="#how">
              See how it works
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
  // Investors backing Landcore. Logos are background-removed, recolored for the
  // light section, and sharpened (see /public/assets/logo-*.png). Cory Levy is an
  // individual angel (no firm logo), so he renders as a typographic wordmark.
  const backers: { name: string; logo?: string; h?: number; boxed?: boolean }[] = [
    { name: "Susa Ventures", logo: "/assets/logo-susa.png", h: 48 },
    { name: "Browder Capital", logo: "/assets/logo-browder.png", h: 44, boxed: true },
    { name: "Z Fellows", logo: "/assets/logo-zfellows.png", h: 26 },
    { name: "Cory Levy" },
  ];
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
            margin: "0 0 30px",
          }}
        >
          Backed by
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(30px, 6vw, 76px)",
          }}
        >
          {backers.map((b) =>
            b.logo ? (
              <img
                key={b.name}
                src={b.logo}
                alt={b.name}
                style={{
                  height: b.h,
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: b.boxed ? 8 : 0,
                }}
              />
            ) : (
              <span
                key={b.name}
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--navy)",
                  whiteSpace: "nowrap",
                }}
              >
                {b.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const cards = [
    {
      icon: "search-x",
      t: "Feasibility is a guessing game",
      d: "Five to ten consultants, six-figure spend, and months of waiting — just to learn whether a parcel pencils out.",
    },
    {
      icon: "file-stack",
      t: "Zoning lives in a thousand PDFs",
      d: "Setbacks, overlays, and use tables buried across codes nobody reads the same way twice. Mistakes cost quarters.",
    },
    {
      icon: "clock-alert",
      t: "Entitlements stall in the dark",
      d: "Rezonings, variances, and approvals scatter across emails and consultants — no owner, no timeline, no next step.",
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
        "Feasibility score across 4 layers",
        "Zoning & overlay decoding",
        "Environmental & utility flags",
        "Entitlement & access risk",
      ],
      advise: "file the variance before the Q3 zoning amendment — it saves a 90-day re-review.",
    },
    {
      k: "02 — Approve it",
      t: "Approve it",
      bullets: [
        "AI-drafted entitlement submittals",
        "Planning-dept contacts mapped",
        "Licensed expert reviews every draft",
        "One-click approve and send",
      ],
      advise: "send the pre-application request now; the planner's calendar fills 3 weeks out.",
    },
    {
      k: "03 — Build it",
      t: "Build it",
      bullets: [
        "One live dashboard for the project",
        "Developers, consultants & counsel in sync",
        "Every approval, owner & deadline visible",
        "Next step — what, why, and by when",
      ],
      advise: "loop the civil engineer in on the traffic study — it gates the rezoning hearing.",
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

export function HowItWorks() {
  // Landcore's real architecture, drawn as a three-layer blueprint stack.
  // Grounded in the Codex parcel engine + the Permit-Workflow engine
  // (Federal baseline → State overlay → Local module).
  const R = 150; // vertical half-height (center → top/bottom vertex)
  const CX = 520; // shared horizontal center of the stack (== viewBox midpoint)
  const HW = 235; // horizontal half-width — stretched wider than a regular hex
  const hexPoints = (cx: number, cy: number) =>
    [
      [cx, cy - R],
      [cx + HW, cy - R / 2],
      [cx + HW, cy + R / 2],
      [cx, cy + R],
      [cx - HW, cy + R / 2],
      [cx - HW, cy - R / 2],
    ]
      .map((p) => p.join(","))
      .join(" ");

  type Node = { x: number; y: number; lines: string[]; lead?: boolean };
  const layers: { label: string; cy: number; nodes: Node[] }[] = [
    {
      label: "Intelligence",
      cy: 185,
      nodes: [
        { x: -140, y: -32, lead: true, lines: ["48-hour", "feasibility verdict"] },
        { x: 142, y: -32, lines: ["Entitlement &", "approval checklist"] },
        { x: 2, y: 44, lines: ["Licensed-expert review,", "citation per row"] },
      ],
    },
    {
      label: "Engines",
      cy: 425,
      nodes: [
        { x: -140, y: -32, lead: true, lines: ["Deterministic", "rule decision tree"] },
        { x: 142, y: -32, lines: ["Weighted parcel", "scoring engine"] },
        { x: 2, y: 44, lines: ["LLM grounding", "+ abstention gate"] },
      ],
    },
    {
      label: "Data",
      cy: 665,
      nodes: [
        { x: -140, y: -32, lead: true, lines: ["US parcel master", "+ GIS layers"] },
        { x: 142, y: -32, lines: ["Power · water · geo", "· zoning signals"] },
        { x: 2, y: 44, lines: ["Regulatory corpus", "federal / state / local"] },
      ],
    },
  ];

  return (
    <section className="section bg-navy blueprint-wrap" id="how">
      <BlueprintBG />
      <div className="container">
        <SectionHead
          eyebrow="How it works"
          title="One stack, from raw parcel to entitlement approval."
          intro="Three layers working as one system: the parcel data we own, the engines that reason over it, and the grounded intelligence a licensed expert signs off before you act."
        />
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
          <svg
            viewBox="0 0 1040 850"
            role="img"
            aria-label="Landcore architecture: a three-layer stack — Data at the base, Engines in the middle, and Intelligence on top."
            style={{ width: "100%", maxWidth: 980, height: "auto" }}
          >
            <defs>
              <filter id="hex-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#6E94FF" floodOpacity="0.8" />
              </filter>
            </defs>
            {layers.map((layer) => (
              <g key={layer.label}>
                {/* hexagon outline — glowing blue edge so the boundary pops */}
                <polygon
                  points={hexPoints(CX, layer.cy)}
                  fill="rgba(77,119,245,0.05)"
                  stroke="#B6CBFF"
                  strokeWidth={2.6}
                  strokeLinejoin="round"
                  filter="url(#hex-glow)"
                />
                {/* left layer label + connector */}
                <text
                  x={CX - HW - 36}
                  y={layer.cy + 6}
                  textAnchor="end"
                  fill="#FFFFFF"
                  fontSize={21}
                  fontWeight={600}
                  letterSpacing="-0.01em"
                >
                  {layer.label}
                </text>
                <line
                  x1={CX - HW - 28}
                  y1={layer.cy}
                  x2={CX - HW - 2}
                  y2={layer.cy}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth={1}
                />
                <circle cx={CX - HW} cy={layer.cy} r={3.2} fill="#5B86F5" />
                {/* nodes */}
                {layer.nodes.map((n, i) => {
                  const ncx = CX + n.x;
                  const ncy = layer.cy + n.y;
                  const lh = 15;
                  const startY = ncy - ((n.lines.length - 1) * lh) / 2 + 4;
                  return (
                    <g key={i}>
                      <circle
                        cx={ncx}
                        cy={ncy}
                        r={64}
                        fill="rgba(91,134,245,0.18)"
                        stroke="rgba(160,185,255,0.9)"
                        strokeWidth={1}
                        strokeDasharray="3 4"
                      />
                      <text
                        textAnchor="middle"
                        fontSize={13.5}
                        fontWeight={600}
                        fill="#FFFFFF"
                      >
                        {n.lines.map((ln, j) => (
                          <tspan key={j} x={ncx} y={startY + j * lh}>
                            {ln}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  );
                })}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

export function EntitlementAnalysis() {
  return (
    <section className="section bg-off" id="analysis">
      <div className="container">
        <div className="grid-2">
          <div>
            <span className="eyebrow">Entitlement analysis</span>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: 38,
                lineHeight: 1.16,
                letterSpacing: "-0.03em",
                fontWeight: 600,
                color: "var(--navy)",
              }}
            >
              Every land consultant has a gut feeling about which cities are slow. We turned it into
              data.
            </h2>
            <p style={{ margin: "20px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--gray-500)", maxWidth: 480 }}>
              We read the public record so you don&apos;t have to. Every hearing date, every
              environmental filing, every approval and denial in a jurisdiction becomes a number: how
              long this kind of project actually takes here, and how often it actually gets approved.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 19, lineHeight: 1.5, color: "var(--navy)", fontWeight: 600, maxWidth: 480 }}>
              The first real scoreboard for entitlement risk.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
              {[
                "Median time to approval, by project type",
                "Approval and denial rates per jurisdiction",
                "Built from hearing dates, filings, and real outcomes",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 16, color: "var(--gray-700)" }}>
                  <Icon name="map-pinned" size={18} color="var(--blue)" /> {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" icon="arrow-right" href="#demo">
                Check a jurisdiction
              </Button>
            </div>
          </div>
          <div>
            <ScoreboardCard />
          </div>
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
            <span className="eyebrow">Entitlement execution · human-in-the-loop</span>
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
              AI drafts it. A licensed expert reviews it. You approve.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--gray-500)", maxWidth: 480 }}>
              Beyond the analysis, Landcore writes and runs your entitlement process end to end:
              applications, submittals, agency correspondence, and resubmittals for variances,
              rezonings, and use permits. Every document is drafted by AI and signed off by a
              licensed land-use professional before it goes out. You stay in approval; we handle the
              rest.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
              {[
                "Run end to end: applications, submittals, resubmittals",
                "Reviewed and signed off by a licensed expert",
                "Cited to the code, or honestly flagged for manual review",
                "You stay in approval — one click to send",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 16, color: "var(--gray-700)" }}>
                  <Icon name="badge-check" size={18} color="var(--blue)" /> {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" icon="arrow-right" href="#demo">
                Hand off your entitlements
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

export function SyncDashboard() {
  return (
    <section className="section bg-off" id="dashboard">
      <div className="container">
        <div className="grid-2">
          <div style={{ order: 2 }}>
            <DashboardCard />
          </div>
          <div style={{ order: 1 }}>
            <span className="eyebrow">One project dashboard</span>
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
              Your whole project, on one source of truth.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--gray-500)", maxWidth: 480 }}>
              Developers, civil engineers, architects, and land-use counsel work off the same live
              dashboard — every entitlement, owner, deadline, and next step in one place. No relay
              races, no version sprawl, no "who has the latest?"
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
              {[
                "Every stakeholder on one shared view",
                "Live status on each approval and study",
                "Clear owner and due date on every item",
                "What's next — and what's blocking it",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 16, color: "var(--gray-700)" }}>
                  <Icon name="layout-dashboard" size={18} color="var(--blue)" /> {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" icon="arrow-right" href="#demo">
                See the dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
