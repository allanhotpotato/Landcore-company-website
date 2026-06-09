import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// Design system: tokens first, then the kit's layout/component classes.
import "../styles/colors_and_type.css";
import "../styles/kit.css";
import "../styles/forms.css";

const SITE_URL = "https://www.landcoreai.com";
const TITLE = "Landcore — Permit operations, one system.";
const DESCRIPTION =
  "Decode the code, draft the documents, drive the cycle. Landcore is the operating system real estate developers use to take a parcel from raw to permit-ready.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Landcore",
  keywords: [
    "site feasibility",
    "zoning analysis",
    "entitlement",
    "permit management",
    "real estate development",
    "land development software",
    "feasibility study",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Landcore",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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
        {/*
          The design kit's colors_and_type.css (which must not be altered)
          references the literal "Geist" / "Geist Mono" families, so the font
          is loaded via <link> rather than next/font. preconnect + display=swap
          keep it non-blocking.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
