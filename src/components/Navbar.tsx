import { useEffect, useRef, useState } from "react";
import { navLinks } from "../content.ts";
import { Button } from "./Button.tsx";
import { Container } from "./Container.tsx";
import { Mark } from "./Mark.tsx";

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-[18px]" aria-hidden="true">
      <span
        className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition duration-200 ${
          open ? "top-[7px] rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute top-[7px] left-0 h-0.5 w-full rounded-full bg-current transition duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition duration-200 ${
          open ? "top-[7px] -rotate-45" : "top-3.5"
        }`}
      />
    </span>
  );
}

const linkClass =
  "rounded-md text-[15px] font-medium text-navy transition-colors duration-200 hover:text-teal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function onMobileNavigate(href: string) {
    setOpen(false);
    window.requestAnimationFrame(() => {
      const target = document.querySelector(href);
      const heading =
        target instanceof HTMLElement
          ? target.matches("h1, h2, h3")
            ? target
            : target.querySelector("h1, h2, h3")
          : null;
      if (heading instanceof HTMLElement) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    });
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b border-hairline bg-paper ${scrolled ? "shadow-soft" : ""}`}
    >
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-[72px]">
        <a href="#top" className="inline-flex min-w-0 items-center gap-2.5 text-navy">
          <Mark className="h-7 w-7 shrink-0" />
          <span className="truncate text-[15px] font-semibold tracking-tight">Open Eye Growth</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <Button href="#pricing">Get Started</Button>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-button text-navy hover:bg-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuGlyph open={open} />
        </button>
      </Container>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-hairline bg-white shadow-card lg:hidden"
      >
        <Container className="py-3">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center rounded-lg px-2 text-base font-medium text-navy hover:bg-paper"
                  onClick={() => onMobileNavigate(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-2 pt-2 pb-3">
            <Button href="#pricing" className="w-full" onClick={() => onMobileNavigate("#pricing")}>
              Get Started
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
