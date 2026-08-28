import { motion } from "framer-motion";

const cards = [
  { label: "Authority", sub: "The recognised voice in your space" },
  { label: "Visibility", sub: "A presence where your buyers look" },
  { label: "Leads", sub: "Content that turns into conversations" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[88svh] min-h-[560px] w-full flex-col overflow-hidden bg-tnk-charcoal sm:h-[86svh] lg:h-[100svh]"
    >
      {/* Background image — full-bleed, no overlay. Phones get a purpose-made portrait
          crop so the hero can be tall without the landscape shot looking zoomed in. */}
      <picture>
        <source media="(max-width: 639px)" srcSet="/photos/hero-mobile.png" />
        <img
          src="/photos/hero.png"
          alt="Two founders in conversation across a meeting table"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Small top-weighted tint — keeps the headline readable and darkens behind the nav.
          Stays clear over the lower half so the photo reads clean. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-transparent" />

      {/* Content — sits a little lower on phones, raised toward the top on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-1 flex-col justify-start px-6 pb-12 pt-[20svh] sm:justify-center sm:pb-16 sm:pt-24 lg:justify-start lg:px-16 lg:pt-40"
      >
        {/* eyebrow hidden on phones (the inspo goes straight to the headline) */}
        <p className="tnk-eyebrow mb-6 hidden font-display text-[11px] font-semibold text-white/80 sm:block">
          The presence behind the founder
        </p>

        <h1 className="max-w-2xl font-display text-[1.75rem] leading-[1.14] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.4)] sm:text-4xl sm:leading-[1.16] sm:[text-shadow:none] lg:text-[2.75rem]">
          <span className="block font-normal text-white/90">You built the company.</span>
          <span className="my-3 block h-0.5 w-12 bg-tnk-yellow sm:my-5 sm:w-16" />
          <span className="block font-semibold">
            Now build the <span className="text-tnk-yellow">presence.</span>
          </span>
        </h1>

        <div>
          <a
            href="https://calendly.com/hellotnklabs/30min"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-tnk-yellow py-2 pl-8 pr-2 font-display text-sm font-semibold text-tnk-black transition-transform duration-300 hover:-translate-y-0.5 sm:mt-9"
          >
            Book a Strategy Call
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
        </div>
      </motion.div>

      {/* Feature cards — inspo-style row resting on the base of the hero */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-5 lg:px-16 lg:pb-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-2.5 sm:max-w-4xl sm:gap-4">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className={`rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 ${
                i === 0
                  ? "bg-tnk-paper shadow-[0_18px_45px_-20px_rgba(0,0,0,0.5)]"
                  : "border border-white/40 bg-tnk-paper/70 backdrop-blur-md"
              }`}
            >
              <p className="font-display text-[13px] font-semibold tracking-tight text-tnk-ink sm:text-sm">
                {c.label}
              </p>
              <p className="mt-0.5 hidden text-[11px] font-light leading-snug text-tnk-mute sm:block">
                {c.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
