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
    microStat: "End-to-end entitlement cycle",
    bullets: [
      "Discretionary approval pathing",
      "Agentic municipal drafting",
      "Owner, deadline, next move",
    ],
  },
  {
    label: "Models",
    microStat: "Code × jurisdiction",
    bullets: [
      "Code-grounded submittal generation",
      "Risk × jurisdiction routing",
      "Approval readiness scoring",
    ],
  },
  {
    label: "Data",
    microStat: "10 states · live county feeds",
    bullets: [
      "Parcel & zoning, dozens of counties",
      "Environmental & utility overlay graph",
      "90-day refresh on the layers that matter",
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
          title="The data, the models, and the decisions on top."
          intro="Live county data on the bottom. Calibrated models in the middle. End-to-end permit intelligence on top. Most of the answer is already in there."
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
