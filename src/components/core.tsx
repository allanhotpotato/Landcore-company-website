/* ============================================================
   Landcore UI Kit — core primitives & product mockup cards
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
  Home,
  Hotel,
  LandPlot,
  Landmark,
  Mail,
  Map,
  MapPinned,
  Ruler,
  SearchX,
  Signature,
  Store,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

// Static map of the kebab-case names the kit uses to their lucide-react
// components, so icons render server-side (no client pop-in) and tree-shake.
const ICONS: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
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
  mail: Mail,
  map: Map,
  "map-pinned": MapPinned,
  ruler: Ruler,
  "search-x": SearchX,
  signature: Signature,
  store: Store,
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
        <Icon name="circle-check" size={15} /> Feasible — proceed to entitlement
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
        <Sparkle /> Drafted by Landcore — ready for your approval
      </div>
      <div className="mock-body">
        <div className="email-to">
          <span>To</span> <b>planning@cityofharbor.gov</b>
        </div>
        <div className="email-to">
          <span>Re</span> <b>Variance application — 2240 Harbor Blvd</b>
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
    { done: true, t: "Footing depth verified", s: "42 in. — meets frost line per IRC R403.1.4" },
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
        <Icon name="clipboard-check" size={15} /> Footing inspection — tomorrow, 9:00 AM
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
