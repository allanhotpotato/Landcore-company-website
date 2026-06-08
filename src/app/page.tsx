import { ScrollReveal } from "@/components/ScrollReveal";
import {
  EmailFeature,
  Hero,
  HowItWorks,
  InspectionFeature,
  Nav,
  Pillars,
  Problem,
  SocialProof,
} from "@/components/sections";
import { CTA, Footer, Results, WhoItsFor } from "@/components/bottom";

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
        <HowItWorks />
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
