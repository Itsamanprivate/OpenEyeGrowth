import { useReveal } from "../hooks/useReveal.ts";
import { Button } from "./Button.tsx";
import { Container } from "./Container.tsx";

export function ClosingCta() {
  const [sectionRef, revealClass] = useReveal<HTMLElement>();

  return (
    <section
      aria-labelledby="closing-heading"
      ref={sectionRef}
      className={`${revealClass} border-t border-hairline bg-white`}
    >
      <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center lg:py-16">
        <div className="max-w-xl">
          <h2
            id="closing-heading"
            tabIndex={-1}
            className="text-2xl font-semibold tracking-[-0.03em] text-balance text-navy md:text-3xl"
          >
            Pick the plan that matches the work.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty text-muted md:text-lg">
            Marketing only, or a website plus marketing. Get started when the numbers look right.
          </p>
        </div>
        <Button href="#pricing" className="w-full sm:w-auto">
          Get Started
        </Button>
      </Container>
    </section>
  );
}
