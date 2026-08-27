import { cn } from "../utils/cn";

export function CTAButton({
  children = "Book a Strategy Call",
  href = "https://calendly.com/hellotnklabs/30min",
  variant = "primary",
  className,
}: {
  children?: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-tnk-yellow",
          className
        )}
      >
        {children}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-tnk-yellow px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-tnk-black shadow-[0_0_0_0_rgba(244,192,42,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_4px_rgba(244,192,42,0.35)]",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-500 group-hover:translate-x-0" />
    </a>
  );
}
