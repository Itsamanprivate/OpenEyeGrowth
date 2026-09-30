import { formatPrice } from "../content.ts";
import type { PricingTier } from "../content.ts";
import { Button } from "./Button.tsx";

type PricingCardProps = {
  tier: PricingTier;
};

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <article
      className={`pricing-card relative flex h-full flex-col rounded-card border bg-white p-6 shadow-card sm:p-7 ${
        tier.popular ? "border-teal" : "border-hairline"
      }`}
    >
      {tier.popular ? (
        <p className="absolute top-0 left-6 -translate-y-1/2 rounded-full bg-emerald px-2.5 py-1 text-[12px] font-semibold leading-none text-white">
          Most Popular
        </p>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-navy">{tier.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted lg:min-h-12">{tier.description}</p>
      <p className="mt-6 flex items-baseline gap-1 text-navy">
        <span className="text-[2.5rem] leading-none font-semibold tracking-tight tabular-nums">
          {formatPrice(tier.price)}
        </span>
        <span className="text-sm font-medium text-muted">
          <span aria-hidden="true">/mo</span>
          <span className="sr-only"> per month</span>
        </span>
      </p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-hairline pt-6">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[15px] leading-6 text-ink">
            <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-emerald" aria-hidden="true">
              <path
                d="M3.5 8.4 6.4 11.3 12.5 4.7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href="#pricing" className="w-full">
          Get Started
        </Button>
      </div>
    </article>
  );
}
