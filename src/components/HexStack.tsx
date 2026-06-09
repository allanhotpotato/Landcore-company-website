/* ============================================================
   Landcore — Intelligence / Models / Data stacked-hex visual.
   Replaces the old 4-step HowItWorks section. SVG-based so it
   scales with the container; foreignObject embeds real text
   inside the hex bullets so screen readers can read them.
   ============================================================ */
import type { ReactNode } from "react";

export type HexTier = {
  label: ReactNode;        // e.g. "Intelligence", "Models", "Data"
  bullets: [string, string, string];
  microStat?: string;      // optional small mono caption under the tier label
  sparkle?: boolean;       // marks the AI tier with a ✦
};

// Flat-top hex geometry. Side length S drives everything else.
const S = 220;
const W = 2 * S;
const H = S * Math.sqrt(3);
const PAD_LEFT = 210;
const PAD_RIGHT = 40;
const VB_W = PAD_LEFT + W + PAD_RIGHT;
const VB_H = 3 * H;

// Three circle positions per hex, as (x, y) fractions of the hex body.
const CIRCLE_POS: ReadonlyArray<readonly [number, number]> = [
  [0.34, 0.40],
  [0.66, 0.40],
  [0.50, 0.72],
];
const CIRCLE_R = 78;

function hexPath(top: number): string {
  const x = PAD_LEFT;
  return [
    `M ${x + S / 2} ${top}`,
    `L ${x + (3 * S) / 2} ${top}`,
    `L ${x + 2 * S} ${top + H / 2}`,
    `L ${x + (3 * S) / 2} ${top + H}`,
    `L ${x + S / 2} ${top + H}`,
    `L ${x} ${top + H / 2}`,
    "Z",
  ].join(" ");
}

export function HexStack({
  tiers,
  eyebrow = "The stack",
  title,
  intro,
}: {
  tiers: [HexTier, HexTier, HexTier];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="section bg-navy hex-section" id="how">
      <div className="container">
        <div className="sec-head center">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>

        <div className="hex-wrap reveal">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="hex-svg"
            role="img"
            aria-label="Landcore is built in three layers: intelligence, models, and data."
          >
            {/* Hex outlines */}
            {tiers.map((_, i) => (
              <path key={`hex-${i}`} d={hexPath(i * H)} className="hex-outline" />
            ))}

            {/* Tier labels (left), with connector line + endpoint dot */}
            {tiers.map((t, i) => {
              const cy = i * H + H / 2;
              return (
                <g key={`lbl-${i}`}>
                  <line
                    x1={24}
                    y1={cy}
                    x2={PAD_LEFT - 14}
                    y2={cy}
                    className="hex-connector"
                  />
                  <circle cx={PAD_LEFT - 6} cy={cy} r={5} className="hex-connector-dot" />
                  <foreignObject
                    x={6}
                    y={cy - 78}
                    width={PAD_LEFT - 32}
                    height={156}
                  >
                    <div className="hex-label">
                      <div className="hex-label-text">
                        {t.sparkle && <span className="hex-label-spark" aria-hidden>✦</span>}
                        <span>{t.label}</span>
                      </div>
                      {t.microStat && <div className="hex-label-stat">{t.microStat}</div>}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Bullet circles (dotted) + text inside via foreignObject */}
            {tiers.map((t, i) =>
              t.bullets.map((b, j) => {
                const [fx, fy] = CIRCLE_POS[j];
                const cx = PAD_LEFT + fx * W;
                const cy = i * H + fy * H;
                return (
                  <g key={`bul-${i}-${j}`}>
                    <circle cx={cx} cy={cy} r={CIRCLE_R} className="hex-circle" />
                    <foreignObject
                      x={cx - CIRCLE_R + 8}
                      y={cy - CIRCLE_R + 8}
                      width={CIRCLE_R * 2 - 16}
                      height={CIRCLE_R * 2 - 16}
                    >
                      <div className="hex-bullet">{b}</div>
                    </foreignObject>
                  </g>
                );
              })
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}
