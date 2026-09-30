import { steps } from "../content.ts";
import { useReveal } from "../hooks/useReveal.ts";
import { Container } from "./Container.tsx";
import { SectionHeading } from "./SectionHeading.tsx";

export function HowItWorks() {
  const [sectionRef, revealClass] = useReveal<HTMLElement>();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      ref={sectionRef}
      className={`${revealClass} py-16 lg:py-24`}
    >
      <Container>
        <SectionHeading id="how-heading" title="How it works">
          Three steps from the path you pick to visibility and a steady flow of leads.
        </SectionHeading>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-hairline pt-6">
              <p className="text-sm font-semibold tracking-[0.14em] text-navy" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
