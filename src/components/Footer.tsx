import { navLinks } from "../content.ts";
import { Button } from "./Button.tsx";
import { Container } from "./Container.tsx";
import { Mark } from "./Mark.tsx";

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <Container className="flex flex-col gap-10 py-14 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div className="max-w-sm">
          <a href="#top" className="inline-flex items-center gap-2.5 text-paper">
            <Mark light className="h-7 w-7 shrink-0" />
            <span className="text-[15px] font-semibold tracking-tight">Open Eye Growth</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-paper">
            Websites and marketing that make a business easier to find and easier to choose.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-paper underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="#pricing">Get Started</Button>
        </div>
      </Container>
    </footer>
  );
}
