import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps = Common &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

function buttonClass(variant: Variant, className?: string) {
  const base =
    "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-button px-5 text-center text-[15px] font-semibold tracking-tight no-underline transition-colors duration-200";
  const variantClass =
    variant === "primary"
      ? "border border-transparent bg-teal text-white shadow-soft hover:bg-teal-hover"
      : "border border-navy bg-transparent text-navy hover:bg-white";

  return className ? `${base} ${variantClass} ${className}` : `${base} ${variantClass}`;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = buttonClass(variant, className);

  if ("href" in props && typeof props.href === "string") {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button {...buttonProps} type={buttonProps.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
