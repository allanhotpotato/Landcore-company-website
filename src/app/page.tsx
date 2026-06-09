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

// Baseline hex content. Each variant branch overrides these tiers
// and the surrounding section copy.
const TIERS: [HexTier, HexTier, HexTier] = [
  {
    label: "Intelligence",
    sparkle: true,
    bullets: [
      "End-to-end permit decision engine",
      "Agentic municipal drafting",
      "Cycle visibility, owner by owner",
    ],
  },
  {
    label: "Models",
    bullets: [
      "Code-grounded submittal generation",
      "Risk × jurisdiction routing",
      "Inspection readiness models",
    ],
  },
  {
    label: "Data",
    bullets: [
      "Live county parcel & zoning feeds",
      "Overlay graph: environmental, utilities, code",
      "90-day refresh across jurisdictions",
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
          title="The stack under every parcel."
          intro="Three layers that turn a raw address into a permit-ready project — data underneath, models in the middle, intelligence on top."
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
