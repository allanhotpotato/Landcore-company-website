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
      "Permit cycle decisioning",
      "Code-cited submittal drafts",
      "Cycle visibility down to the desk",
    ],
  },
  {
    label: "Models",
    bullets: [
      "Feasibility scoring across four layers",
      "Risk-aware jurisdictional routing",
      "Inspection readiness briefs",
    ],
  },
  {
    label: "Data",
    bullets: [
      "Live county parcel & zoning",
      "Environmental & utility overlay graph",
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
          title="What's running under every parcel."
          intro="Three layers — data underneath, models in the middle, intelligence on top — that together get you to permit-ready."
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
