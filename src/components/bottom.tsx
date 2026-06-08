/* ============================================================
   Landcore UI Kit — page sections (bottom)
   Ported from bottom.jsx. Photography uses next/image; the demo
   section carries the Calendly embed + the demo-request form.
   ============================================================ */
import Image from "next/image";
import { BlueprintBG, Button, Logo, SectionHead } from "./core";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { CalendlyButton } from "./CalendlyButton";
import { DemoForm } from "./DemoForm";

export function WhoItsFor() {
  const cols = [
    { img: "/assets/img-residential-tower.jpg", t: "Multifamily", d: "Score density, parking, and overlay risk before you tie up the land." },
    { img: "/assets/img-city-skyline.jpg", t: "Mixed-use & office", d: "Decode FAR bonuses and entitlement paths in dense urban cores." },
    { img: "/assets/img-construction-aerial.jpg", t: "Industrial & logistics", d: "Flag utilities, access, and environmental constraints on raw sites." },
    { img: "/assets/img-blueprint-compass.jpg", t: "Land & infill", d: "Turn a parcel map into a go / no-go call in 48 hours, not 48 days." },
  ];
  return (
    <section className="section bg-white" id="who">
      <div className="container">
        <SectionHead
          eyebrow="Who it's for"
          title="Built for every asset class you underwrite."
          intro="One parcel or a hundred — Landcore scores the way each asset class actually gets approved."
        />
        <div className="grid-4" style={{ marginTop: 48 }}>
          {cols.map((c) => (
            <div className="asset-col reveal" key={c.t}>
              <div className="a-img" style={{ position: "relative" }}>
                <Image
                  src={c.img}
                  alt={c.t}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Results() {
  const stats = [
    { n: "48", u: "h", l: "Median time to a feasibility verdict" },
    { n: "$150K", u: "+", l: "Average consultant spend avoided per project" },
    { n: "92", u: "%", l: "First-pass inspection rate with Landcore briefs" },
    { n: "3.5", u: "×", l: "More sites screened by the same team" },
  ];
  const rows = [
    ["Time to feasibility", "6–12 weeks", "48 hours"],
    ["People involved", "5–10 consultants", "One system"],
    ["Cost per site", "$150K+", "A fraction"],
    ["Zoning analysis", "Manual, PDF by PDF", "Decoded automatically"],
    ["Permit visibility", "Email threads", "One live timeline"],
    ["Next step", "Unclear", "What, why, and by when"],
  ];
  return (
    <section className="section bg-navy blueprint-wrap" id="results">
      <BlueprintBG />
      <div className="container">
        <SectionHead
          eyebrow="Results"
          title="The math developers came for."
          intro="Faster decisions, fewer people, lower spend — measured on real projects."
        />
        <div className="grid-4" style={{ marginTop: 48 }}>
          {stats.map((s) => (
            <div className="roi-card reveal" key={s.l}>
              <div className="n">
                {s.n}
                <span className="u">{s.u}</span>
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <table className="compare">
            <thead>
              <tr>
                <th>The work</th>
                <th>The old way</th>
                <th className="hl">With Landcore</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td>{r[0]}</td>
                  <td>
                    <span className="x">{r[1]}</span>
                  </td>
                  <td className="hl">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// The demo section: marketing copy + popup button on the left, the demo
// request form beneath it, and the Calendly inline scheduler on the right.
export function CTA() {
  return (
    <section className="section bg-blue" id="demo">
      <div className="container">
        <div className="cta-grid">
          <div>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
              Get started
            </span>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: 44,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Score your next site this week.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--fg-on-blue-2)", maxWidth: 440 }}>
              Bring a real parcel. We&apos;ll return a feasibility score in 48 hours and walk you
              through exactly what to do, why, and by when.
            </p>
            <div style={{ marginTop: 30, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <CalendlyButton variant="onblue" size="lg" icon="calendar-check">
                Book a 30-min demo
              </CalendlyButton>
              <Button variant="onnavy-sec" size="lg" href="#top">
                See the product
              </Button>
            </div>
            <div style={{ marginTop: 28 }}>
              <DemoForm />
            </div>
          </div>
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols: { h: string; links: [string, string][] }[] = [
    {
      h: "Product",
      links: [
        ["Feasibility scoring", "#answer"],
        ["Zoning intelligence", "#answer"],
        ["AI email drafting", "#answer"],
        ["Inspection briefs", "#how"],
        ["Permit timeline", "#how"],
      ],
    },
    {
      h: "Company",
      links: [
        ["About", "#who"],
        ["Customers", "#results"],
        ["Careers", "#demo"],
        ["Contact", "#demo"],
      ],
    },
    {
      h: "Resources",
      links: [
        ["Docs", "#how"],
        ["Integrations", "#answer"],
        ["Pricing", "#demo"],
        ["Security", "#results"],
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo dark />
            <p className="tagline">
              AI-powered site feasibility, zoning intelligence, and permit management for real
              estate developers. Know it. Approve it. Build it.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              {c.links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Landcore, Inc. All rights reserved.</span>
          <span style={{ display: "flex", gap: 22 }}>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Status</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
