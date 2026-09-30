import { Button } from "./Button.tsx";
import { Container } from "./Container.tsx";
import { FocusField } from "./Mark.tsx";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-12 pb-6 sm:pt-16 lg:pt-24 lg:pb-10">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <div className="min-w-0">
          <span className="mb-6 block h-0.5 w-10 bg-teal" aria-hidden="true" />
          <h1
            id="hero-heading"
            tabIndex={-1}
            className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-navy sm:text-[3.25rem] lg:text-[4.25rem]"
          >
            <span className="block">Get Seen.</span>
            <span className="block">Get Growing.</span>
          </h1>
          <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-pretty text-muted sm:text-lg">
            Open Eye Growth helps businesses improve their online presence through websites and
            marketing — easier to find, easier to choose.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
        </div>
        <div className="min-w-0">
          <FocusField className="mx-auto block h-auto w-full max-w-[300px] sm:max-w-[380px] lg:ml-auto lg:max-w-[460px]" />
        </div>
      </Container>
    </section>
  );
}
