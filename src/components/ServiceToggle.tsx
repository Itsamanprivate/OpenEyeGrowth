import { useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { offerOrder, offers } from "../content.ts";
import type { ServicePlan } from "../content.ts";
import { Container } from "./Container.tsx";
import { SectionHeading } from "./SectionHeading.tsx";

type ServiceToggleProps = {
  plan: ServicePlan;
  onChange: (plan: ServicePlan) => void;
};

export function ServiceToggle({ plan, onChange }: ServiceToggleProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const offer = offers[plan];

  useEffect(() => {
    const group = groupRef.current;
    if (!group?.contains(document.activeElement)) return;
    group.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus();
  }, [plan]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = offerOrder.indexOf(plan);
    let next = current;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (current + 1) % offerOrder.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (current - 1 + offerOrder.length) % offerOrder.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = offerOrder.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextPlan = offerOrder[next];
    if (nextPlan) onChange(nextPlan);
  }

  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 lg:py-24">
      <Container>
        <SectionHeading id="services-heading" title="Services">
          Marketing on its own, or a website plus marketing. What you see here, and the prices
          below, follow this choice.
        </SectionHeading>

        <div
          ref={groupRef}
          role="radiogroup"
          aria-label="Service path"
          className="relative mt-8 grid max-w-xl grid-cols-2 rounded-full border border-hairline bg-white p-1"
          onKeyDown={onKeyDown}
        >
          <span
            aria-hidden="true"
            className="col-start-1 row-start-1 rounded-full bg-teal transition-transform duration-300 ease-out"
            style={{ transform: plan === "website" ? "translateX(100%)" : "translateX(0)" }}
          />
          {offerOrder.map((id, index) => {
            const option = offers[id];
            const selected = plan === id;
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={selected}
                tabIndex={selected ? 0 : -1}
                className={`relative z-10 min-h-12 cursor-pointer rounded-full px-2 text-[13px] font-semibold tracking-tight whitespace-nowrap sm:px-4 sm:text-[15px] ${
                  index === 0 ? "col-start-1" : "col-start-2"
                } row-start-1 ${selected ? "text-white" : "text-muted hover:text-navy"}`}
                onClick={() => onChange(id)}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="mt-6">
          <div
            key={plan}
            className="crossfade rounded-card border border-hairline bg-white p-6 shadow-card sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold tracking-tight text-navy">{offer.label}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-pretty text-muted">
                  {offer.summary}
                </p>
              </div>
              <ul className="grid gap-3">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-6 text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
