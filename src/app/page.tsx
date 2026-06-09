import { ScrollReveal } from "@/components/ScrollReveal";
import {
  EmailFeature,
  Hero,
  InspectionFeature,
  Nav,
  Pillars,
  Problem,
  SocialProof,
} from "@/components/sections";
import { CTA, Footer, Results, WhoItsFor } from "@/components/bottom";
import { HexStack, type HexTier } from "@/components/HexStack";

const TIERS: [HexTier, HexTier, HexTier] = [
  {
    label: "Intelligence",
    sparkle: true,
    bullets: [
      "End-to-end cycle decisioning",
      "Agentic municipal drafting",
      "Approval pathing per jurisdiction",
    ],
  },
  {
    label: "Models",
    bullets: [
      "Code-grounded document generation",
      "Risk × jurisdiction routing",
      "Inspection-readiness models",
    ],
  },
  {
    label: "Data",
    bullets: [
      "Hundreds of live data feeds",
      "Thousands of pages of code under index",
      "The country's busiest entitlement jurisdictions",
    ],
  },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <SocialProof />
        <Problem />
        <Pillars />
        <HexStack
          title="One stack, three layers."
          intro="Data underneath, models in the middle, intelligence on top. Everything in the right column of every approval table runs on this."
          tiers={TIERS}
        />
        <EmailFeature />
        <InspectionFeature />
        <WhoItsFor />
        <Results />
        <CTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
