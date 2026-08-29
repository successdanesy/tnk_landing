import { useEffect, useState } from "react";

const LINKS = [
  { label: "Who we are", href: "#about" },
  { label: "What we build", href: "#system" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: mark the nav item whose section is currently in view.
  useEffect(() => {
    const targets = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el instanceof Element
    );
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  // Solid = light bar with dark text; otherwise transparent with light text over the hero image.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-tnk-line bg-tnk-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tnk-yellow p-[5px]">
            <img
              src="/photos/logo.png"
              alt="Tnklabs logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span
            className={`font-display text-base font-bold tracking-tight transition-colors ${
              solid ? "text-tnk-ink" : "text-white"
            }`}
          >
            Tnk Labs
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-display text-sm transition-colors ${
                  isActive
                    ? solid
                      ? "font-semibold text-tnk-ink"
                      : "font-semibold text-white"
                    : solid
                    ? "font-medium text-tnk-mute hover:text-tnk-ink"
                    : "font-medium text-white/75 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-tnk-yellow transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right actions — CTA stays visible on mobile (like the inspo), next to the toggle */}
        <div className="flex items-center gap-8 sm:gap-4">
          <a
            href="https://calendly.com/hellotnklabs/30min"
            className="inline-flex rounded-full bg-tnk-yellow px-4 py-2 font-display text-xs font-semibold text-tnk-black transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Book a Call
          </a>

          {/* Mobile toggle — middle bar shorter, like the inspo */}
          <button
            aria-label="Toggle menu"
            className="flex flex-col items-end gap-[6px] lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-[2px] w-7 origin-center transition-all duration-300 ${
                solid ? "bg-tnk-ink" : "bg-white"
              } ${open ? "translate-y-[8px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-4 transition-all duration-300 ${
                solid ? "bg-tnk-ink" : "bg-white"
              } ${open ? "w-7 opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-7 origin-center transition-all duration-300 ${
                solid ? "bg-tnk-ink" : "bg-white"
              } ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-tnk-line bg-tnk-paper px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display text-base ${
                  active === l.href ? "font-semibold text-tnk-ink" : "font-medium text-tnk-mute"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/hellotnklabs/30min"
              className="mt-2 inline-flex w-fit rounded-full bg-tnk-yellow px-5 py-2.5 font-display text-sm font-semibold text-tnk-black"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
