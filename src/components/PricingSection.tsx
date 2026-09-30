import { formatPrice, offers } from "../content.ts";
import type { ServicePlan } from "../content.ts";
import { useReveal } from "../hooks/useReveal.ts";
import { Container } from "./Container.tsx";
import { PricingCard } from "./PricingCard.tsx";
import { SectionHeading } from "./SectionHeading.tsx";

type PricingSectionProps = {
  plan: ServicePlan;
};

export function PricingSection({ plan }: PricingSectionProps) {
  const [sectionRef, revealClass] = useReveal<HTMLElement>();
  const offer = offers[plan];
  const priceSummary = offer.tiers
    .map((tier) => `${tier.name} ${formatPrice(tier.price)} per month`)
    .join(", ");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      data-plan={plan}
      ref={sectionRef}
      className={`${revealClass} py-16 lg:py-24`}
    >
      <Container>
        <SectionHeading id="pricing-heading" title="Pricing">
          Monthly plans for the path selected above.
        </SectionHeading>
        <p className="sr-only" aria-live="polite">
          {offer.label}. {priceSummary}.
        </p>
        <div key={plan} className="crossfade">
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            {offer.label}
          </p>
          <div className="mt-6 grid items-stretch gap-6 pt-3 lg:grid-cols-3">
            {offer.tiers.map((tier) => (
              <PricingCard key={`${plan}-${tier.name}`} tier={tier} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
