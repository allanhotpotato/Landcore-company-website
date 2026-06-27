/* ============================================================
   Landcore UI Kit - core primitives & product mockup cards
   Ported from core.jsx (CDN/Babel) to TypeScript ES modules.
   ============================================================ */
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Box,
  Building2,
  CalendarCheck,
  Check,
  CircleCheck,
  ClipboardCheck,
  ClockAlert,
  Factory,
  FilePen,
  FileStack,
  Grid2x2,
  HardHat,
  Hash,
  BadgeCheck,
  Home,
  Hotel,
  LandPlot,
  Landmark,
  LayoutDashboard,
  Mail,
  Map,
  MapPinned,
  Ruler,
  SearchX,
  Signature,
  Store,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

// Static map of the kebab-case names the kit uses to their lucide-react
// components, so icons render server-side (no client pop-in) and tree-shake.
const ICONS: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "badge-check": BadgeCheck,
  box: Box,
  "building-2": Building2,
  "calendar-check": CalendarCheck,
  check: Check,
  "circle-check": CircleCheck,
  "clipboard-check": ClipboardCheck,
  "clock-alert": ClockAlert,
  factory: Factory,
  "file-pen": FilePen,
  "file-stack": FileStack,
  "grid-2x2": Grid2x2,
  "hard-hat": HardHat,
  hash: Hash,
  home: Home,
  hotel: Hotel,
  "land-plot": LandPlot,
  landmark: Landmark,
  "layout-dashboard": LayoutDashboard,
  mail: Mail,
  map: Map,
  "map-pinned": MapPinned,
  ruler: Ruler,
  "search-x": SearchX,
  signature: Signature,
  store: Store,
  users: Users,
  warehouse: Warehouse,
};

export function Icon({
  name,
  size = 18,
  color,
  style,
  className,
}: {
  name: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} color={color} className={className} style={style} />;
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <span className={"spark " + (className || "")} aria-hidden="true">
      ✦
    </span>
  );
}

export function Logo({ dark = false, sm = false }: { dark?: boolean; sm?: boolean }) {
  void dark; // dark styling is handled by ancestor .bg-navy / .footer rules
  return (
    <span className="logo">
      <span className={"logo-badge" + (sm ? " sm" : "")}>LC</span>
      <span className={"logo-word" + (sm ? " sm" : "")}>
        Land<span className="c">core</span>
      </span>
    </span>
  );
}

export function Button({
  variant = "primary",
  size,
  icon,
  children,
  href,
}: {
  variant?: string;
  size?: string;
  icon?: string;
  children?: ReactNode;
  href?: string;
}) {
  const cls = `btn btn-${variant}` + (size === "lg" ? " btn-lg" : "");
  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={16} />}
    </>
  );
  if (href)
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  return <button className={cls}>{inner}</button>;
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={"sec-head" + (center ? " center" : "")}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

// Thin-line blueprint overlay for navy sections
export function BlueprintBG() {
  return (
    <div className="blueprint-bg" aria-hidden="true">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <pattern id="bp-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" stroke="#2C3A6B" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="1200" height="600" fill="url(#bp-grid)" />
        <line x1="0" y1="300" x2="1200" y2="300" stroke="#3A4E86" strokeWidth="0.7" strokeDasharray="7 7" />
        <line x1="600" y1="0" x2="600" y2="600" stroke="#3A4E86" strokeWidth="0.7" strokeDasharray="7 7" />
        <circle cx="600" cy="300" r="7" stroke="#5B74C4" strokeWidth="1" />
        <path d="M582 300h36M600 282v36" stroke="#5B74C4" strokeWidth="1" />
        <rect x="150" y="160" width="150" height="120" stroke="#42558C" strokeWidth="1" />
        <rect x="930" y="360" width="180" height="140" stroke="#42558C" strokeWidth="1" />
        <circle cx="1010" cy="160" r="30" stroke="#42558C" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* ---------- PRODUCT MOCKUP 1: Site Feasibility Score ---------- */
export function FeasibilityCard() {
  const rows = [
    { l: "Zoning & entitlement", v: 96 },
    { l: "Environmental", v: 88 },
    { l: "Utilities & access", v: 97 },
    { l: "Market & financial", v: 91 },
  ];
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="t">landcore.ai/score</span>
      </div>
      <div className="mock-banner banner-ok">
        <Icon name="circle-check" size={15} /> Feasible · proceed to entitlement
      </div>
      <div className="mock-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div className="addr">2240 Harbor Blvd</div>
            <div className="apn">APN 04-118-027 · Zoned R-4</div>
          </div>
          <div className="score">
            94<span>/100</span>
          </div>
        </div>
        <div className="mchips" style={{ margin: "14px 0 18px" }}>
          <span className="mchip">Multifamily</span>
          <span className="mchip">1.2 ac</span>
          <span className="mchip">Opportunity Zone</span>
        </div>
        <div style={{ display: "grid", gap: 13 }}>
          {rows.map((r) => (
            <div className="mrow" key={r.l}>
              <div className="ml">
                <span>{r.l}</span>
                <b>{r.v}</b>
              </div>
              <div className="track">
                <i style={{ width: r.v + "%" }}></i>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 16,
            paddingTop: 15,
            borderTop: "1px solid var(--gray-200)",
            display: "flex",
            gap: 9,
            alignItems: "flex-start",
          }}
        >
          <span className="ai-tag">
            <Sparkle /> AI
          </span>
          <span style={{ fontSize: 13, lineHeight: 1.45, color: "var(--gray-700)" }}>
            File the variance before the Q3 zoning amendment to skip a 90-day re-review.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- PRODUCT MOCKUP 2: AI Email Drafting ---------- */
export function EmailCard() {
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="t">landcore.ai/outreach</span>
      </div>
      <div className="mock-banner banner-info">
        <Sparkle /> Drafted by Landcore · ready for your approval
      </div>
      <div className="mock-body">
        <div className="email-to">
          <span>To</span> <b>planning@cityofharbor.gov</b>
        </div>
        <div className="email-to">
          <span>Re</span> <b>Variance application: 2240 Harbor Blvd</b>
        </div>
        <div style={{ margin: "16px 0" }}>
          <div className="email-line" style={{ width: "97%" }}></div>
          <div className="email-line" style={{ width: "100%" }}></div>
          <div className="email-line" style={{ width: "82%" }}></div>
          <div className="email-line" style={{ width: "91%" }}></div>
          <div className="email-line" style={{ width: "60%" }}></div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
          <span className="mchip">Attachment: Survey.pdf</span>
          <span className="mchip">Site plan.dwg</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="primary">Approve &amp; send</Button>
          <Button variant="secondary">Edit draft</Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- PRODUCT MOCKUP 3: Inspection Brief ---------- */
export function InspectionCard() {
  const items = [
    { done: true, t: "Erosion control in place", s: "BMP-3 silt fence along north property line" },
    { done: true, t: "Footing depth verified", s: "42 in., meets frost line per IRC R403.1.4" },
    { done: false, t: "Rebar spacing & cover", s: "Confirm #4 @ 16 in. O.C., 3 in. clear cover" },
    { done: false, t: "Approved plans on site", s: "Stamped set + permit card posted at entry" },
  ];
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="t">landcore.ai/inspection</span>
      </div>
      <div className="mock-banner banner-warn">
        <Icon name="clipboard-check" size={15} /> Footing inspection · tomorrow, 9:00 AM
      </div>
      <div className="mock-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div className="addr">Pre-inspection brief</div>
          <span className="ai-tag">
            <Sparkle /> Auto-generated
          </span>
        </div>
        <div style={{ display: "grid" }}>
          {items.map((it) => (
            <div className="check-row" key={it.t}>
              <span className={"check-box " + (it.done ? "cb-done" : "cb-todo")}>
                {it.done && <Icon name="check" size={13} color="#fff" />}
              </span>
              <span>
                <div className="ct">{it.t}</div>
                <div className="cs">{it.s}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- PRODUCT MOCKUP 4: Project Sync Dashboard ---------- */
export function DashboardCard() {
  // Stakeholders on the project, all looking at the same live status.
  const people = [
    { i: "DV", c: "#2563EB" },
    { i: "CE", c: "#0E9F8E" },
    { i: "LC", c: "#7C3AED" },
    { i: "AR", c: "#D97706" },
  ];
  const tone: Record<string, { bg: string; fg: string }> = {
    ok: { bg: "var(--ok-bg)", fg: "var(--ok)" },
    warn: { bg: "var(--warn-bg)", fg: "var(--warn)" },
    info: { bg: "var(--info-bg)", fg: "var(--info)" },
    muted: { bg: "var(--gray-100)", fg: "var(--gray-500)" },
  };
  const rows: { t: string; owner: string; status: string; tone: string }[] = [
    { t: "Rezoning application", owner: "Land-use counsel", status: "In review", tone: "warn" },
    { t: "Traffic impact study", owner: "Civil engineer", status: "Approved", tone: "ok" },
    { t: "Variance request", owner: "Landcore AI · expert-reviewed", status: "Drafting", tone: "info" },
    { t: "Site-plan submittal", owner: "Architect", status: "Queued", tone: "muted" },
  ];
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="t">landcore.ai/project</span>
      </div>
      <div className="mock-banner banner-info">
        <Icon name="users" size={15} /> Whole team in sync · updated just now
      </div>
      <div className="mock-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div className="addr">2240 Harbor Blvd</div>
            <div className="apn">Entitlement track · 4 of 9 approvals cleared</div>
          </div>
          <div style={{ display: "flex" }}>
            {people.map((p, idx) => (
              <span
                key={p.i}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: p.c,
                  color: "#fff",
                  fontSize: 10.5,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #fff",
                  marginLeft: idx ? -8 : 0,
                }}
              >
                {p.i}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gap: 9 }}>
          {rows.map((r) => (
            <div
              key={r.t}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                border: "1px solid var(--gray-200)",
                borderRadius: 10,
              }}
            >
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--navy)" }}>{r.t}</div>
                <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 2 }}>{r.owner}</div>
              </div>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: tone[r.tone].bg,
                  color: tone[r.tone].fg,
                  whiteSpace: "nowrap",
                }}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- PRODUCT MOCKUP 5: Entitlement Risk Scoreboard ---------- */
export function ScoreboardCard() {
  // Public-record outcomes turned into a jurisdiction risk read.
  const stats = [
    { n: "14.5", u: " mo", l: "Median time to approval" },
    { n: "62", u: "%", l: "Approved as filed" },
  ];
  const decisions: { t: string; o: string; meta: string; tone: "ok" | "warn" }[] = [
    { t: "Mixed-use · 120 units", o: "Approved", meta: "11 mo", tone: "ok" },
    { t: "Multifamily · 84 units", o: "Approved", meta: "16 mo", tone: "ok" },
    { t: "Multifamily · 200 units", o: "Denied", meta: "CEQA appeal", tone: "warn" },
  ];
  const chipTone = (tone: "ok" | "warn") =>
    tone === "ok"
      ? { bg: "var(--ok-bg)", fg: "var(--ok)" }
      : { bg: "var(--warn-bg)", fg: "var(--warn)" };
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="t">landcore.ai/scoreboard</span>
      </div>
      <div className="mock-banner banner-info">
        <Icon name="map-pinned" size={15} /> Entitlement risk · City of Carlsbad, CA
      </div>
      <div className="mock-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div className="addr">Multifamily · 50–200 units</div>
            <div className="apn">Built from 240 public filings · updated monthly</div>
          </div>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 999,
              background: "var(--warn-bg)",
              color: "var(--warn)",
              whiteSpace: "nowrap",
            }}
          >
            Moderate risk
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "16px 0" }}>
          {stats.map((s) => (
            <div key={s.l} style={{ border: "1px solid var(--gray-200)", borderRadius: 12, padding: "13px 14px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                {s.n}
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--gray-400)" }}>{s.u}</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 7 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "var(--gray-400)",
            marginBottom: 2,
          }}
        >
          Recent decisions
        </div>
        <div>
          {decisions.map((d) => {
            const c = chipTone(d.tone);
            return (
              <div
                key={d.t}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "9px 0",
                  borderTop: "1px solid var(--gray-100)",
                }}
              >
                <span style={{ fontSize: 13, color: "var(--gray-700)" }}>{d.t}</span>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      padding: "3px 9px",
                      borderRadius: 999,
                      background: c.bg,
                      color: c.fg,
                    }}
                  >
                    {d.o}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--gray-400)", minWidth: 64, textAlign: "right" }}>{d.meta}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
