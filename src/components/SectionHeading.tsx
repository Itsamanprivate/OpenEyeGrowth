import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ id, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        tabIndex={-1}
        className="text-[2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-balance text-navy md:text-4xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted md:text-lg">{children}</p>
      ) : null}
    </div>
  );
}
