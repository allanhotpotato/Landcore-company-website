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
      <Nav />
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
      <Footer />
      <ScrollReveal />
    </>
  );
}
