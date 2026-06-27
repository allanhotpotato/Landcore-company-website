import { ImageResponse } from "next/og";

// Open Graph image for link previews (Slack, iMessage, LinkedIn, X, etc.).
// Generated at build time as a static PNG.
export const alt =
  "Landcore: AI-powered site feasibility, zoning intelligence, and permit management for real estate developers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A1130",
          padding: "84px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#2563EB",
              color: "#fff",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            LC
          </div>
          <div style={{ fontSize: 44, fontWeight: 600, color: "#fff", letterSpacing: "-1px" }}>
            Landcore
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            marginTop: 56,
            fontSize: 82,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.04,
            letterSpacing: "-3px",
          }}
        >
          Know It. Approve It. Build It.
        </div>

        {/* subline */}
        <div
          style={{
            marginTop: 30,
            fontSize: 32,
            color: "#A7AFC7",
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          AI-powered site feasibility, zoning intelligence, and permit management for real estate developers.
        </div>
      </div>
    ),
    { ...size }
  );
}
