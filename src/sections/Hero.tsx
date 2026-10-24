export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[88svh] min-h-[560px] w-full flex-col overflow-hidden bg-tnk-charcoal sm:h-[86svh] lg:h-[100svh]"
    >
      {/* Background image — full-bleed, no overlay. Phones get a purpose-made portrait
          crop so the hero can be tall without the landscape shot looking zoomed in.
          WebP only (universal support); the mobile crop wins below 640px. */}
      <picture>
        <source media="(max-width: 639px)" type="image/webp" srcSet="/photos/hero-mobile.webp" />
        <img
          src="/photos/hero.webp"
          alt="Two business owners in conversation across a meeting table"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Small top-weighted tint — keeps the headline readable and darkens behind the nav.
          Stays clear over the lower half so the photo reads clean. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />

      {/* Content — top-weighted on phones, vertically centred from sm up */}
      <div
        className="tnk-rise relative z-10 flex flex-1 flex-col justify-start px-6 pb-12 pt-28 sm:justify-center sm:pb-16 sm:pt-24 lg:px-16"
      >
        <h1 className="font-display text-[1.9rem] leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.4)] sm:text-[2.6rem] sm:[text-shadow:none] lg:text-[3.25rem]">
          <span className="block font-normal text-white/85">Create better ads.</span>
          <span className="block font-normal text-white/85">Reach more customers.</span>
          <span className="block font-semibold">
            Grow your <span className="text-tnk-yellow">business.</span>
          </span>
        </h1>

        <span className="my-5 block h-0.5 w-12 bg-tnk-yellow sm:my-7 sm:w-16" />

        <p className="max-w-md text-sm font-light leading-relaxed text-white/80 [text-shadow:0_1px_18px_rgba(0,0,0,0.45)] sm:text-base">
          AI-powered video ads and strategic paid advertising that help businesses reach the
          right audience, generate leads, and drive sales.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-9">
          <a
            href="https://calendly.com/hellotnklabs/30min"
            className="group inline-flex items-center gap-3 rounded-full bg-tnk-yellow py-2 pl-7 pr-2 font-display text-sm font-semibold text-tnk-black shadow-[0_12px_34px_-10px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Work With Us
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tnk-black text-tnk-yellow transition-transform duration-300 group-hover:rotate-45">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-white transition-colors hover:text-tnk-yellow"
          >
            Explore Our Work
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
