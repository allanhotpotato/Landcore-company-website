import type { Metadata } from "next";
// Design system: tokens first, then the kit's layout/component classes.
import "../styles/colors_and_type.css";
import "../styles/kit.css";
import "../styles/forms.css";

export const metadata: Metadata = {
  title: "Landcore — Know It. Approve It. Build It.",
  description:
    "AI-powered site feasibility, zoning intelligence, and permit management for real estate developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
