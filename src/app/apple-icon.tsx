import { ImageResponse } from "next/og";

// Home-screen icon for iOS/iPadOS. The OS rounds the corners, so the whole
// tile is the brand blue with the LC monogram.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2563EB",
          color: "#fff",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        LC
      </div>
    ),
    { ...size }
  );
}
