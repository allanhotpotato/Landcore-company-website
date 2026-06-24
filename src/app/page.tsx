import { ScrollReveal } from "@/components/ScrollReveal";
import {
  EmailFeature,
  Hero,
  HowItWorks,
  Nav,
  Pillars,
  Problem,
  SocialProof,
  SyncDashboard,
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
        <SyncDashboard />
        <WhoItsFor />
        <Results />
        <CTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
