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
          title="Live data for every asset class you underwrite."
          intro="Live data, plus the entitlement path, for every asset class you underwrite. Multifamily to megawatts — the layers behind each approval differ, and so does the data Landcore pulls."
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
    { n: "10", u: "", l: "States with live data" },
    { n: "90", u: "d", l: "Refresh on the data underneath" },
    { n: "48", u: "h", l: "From parcel to permit-ready" },
    { n: "$150K", u: "+", l: "Specialist spend avoided per project" },
  ];
  const rows = [
    ["Time to data pull", "Days, by hand", "Already in"],
    ["Zoning lookups", "PDF, by hand", "Pre-decoded"],
    ["Overlay analysis", "Layer by layer", "All at once"],
    ["Inspections passed first try", "Coin flip", "92%"],
    ["Cycle visibility", "Email threads", "One live timeline"],
    ["Cost per site", "$150K+", "A fraction"],
  ];
  return (
    <section className="section bg-navy blueprint-wrap" id="results">
      <BlueprintBG />
      <div className="container">
        <SectionHead
          eyebrow="Results"
          title="Math you can run because the data's already in."
          intro="Faster, with the underlying layers actually pulled. Measured on real projects."
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
              See what the data already knows about your next site.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 19, lineHeight: 1.55, color: "var(--fg-on-blue-2)", maxWidth: 440 }}>
              Bring a real parcel. We&apos;ll show you what the data layer pulls in 60 seconds — and
              the entitlement path Landcore would run, from variance through permit.
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
        ["The data layer", "#how"],
        ["Zoning decoding", "#answer"],
        ["Entitlement drafting", "#answer"],
        ["Permit cycle", "#answer"],
        ["Inspection briefs", "#answer"],
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
              Live data on the country&apos;s busiest jurisdictions, plus the models and
              intelligence to take a parcel from feasible to entitled to permitted.
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
