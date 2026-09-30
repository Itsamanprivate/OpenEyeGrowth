import { useState } from "react";
import { ClosingCta } from "./components/ClosingCta.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { HowItWorks } from "./components/HowItWorks.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { PricingSection } from "./components/PricingSection.tsx";
import { ServiceToggle } from "./components/ServiceToggle.tsx";
import type { ServicePlan } from "./content.ts";

export default function App() {
  const [plan, setPlan] = useState<ServicePlan>("marketing");

  return (
    <div id="top" className="bg-paper text-ink">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ServiceToggle plan={plan} onChange={setPlan} />
        <HowItWorks />
        <PricingSection plan={plan} />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
