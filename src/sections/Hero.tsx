import { motion } from "framer-motion";

const cards = [
  { k: "01", label: "Authority", sub: "The recognised voice in your space" },
  { k: "02", label: "Visibility", sub: "A presence where your buyers look" },
  { k: "03", label: "Leads", sub: "Content that turns into conversations" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-tnk-charcoal"
    >
      {/* Background image — clean, no overlay. On phones the crop is biased up-and-right
          so the dark panelling stays behind the copy and the desk clutter is pushed out. */}
      <img
        src="/photos/hero.png"
        alt="Two founders in conversation across a meeting table"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[72%_18%] sm:object-center"
      />

      {/* Content — top-left on phones (over the panelling), centred from sm up */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-1 flex-col justify-start px-6 pb-10 pt-28 sm:justify-center sm:pb-16 lg:px-16"
      >
        <p className="tnk-eyebrow mb-5 font-display text-[10px] font-semibold text-white/80 sm:text-[11px]">
          The presence behind the founder
        </p>

        <h1 className="max-w-2xl font-display text-[1.5rem] leading-[1.18] tracking-tight text-white sm:text-4xl sm:leading-[1.16] lg:text-[2.75rem]">
          <span className="block font-normal text-white/85">You built the company.</span>
          <span className="block font-semibold">
            Now build the <span className="text-tnk-yellow">presence.</span>
          </span>
        </h1>

        <div>
          <a
            href="https://calendly.com/hellotnklabs/30min"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-tnk-yellow py-2 pl-7 pr-2 font-display text-sm font-semibold text-tnk-black transition-transform duration-300 hover:-translate-y-0.5"
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

      {/* Cards — clean light shelf. In normal flow so it can never overlap the copy:
          pinned to the base of the hero on desktop, stacked below it on phones. */}
      <div className="relative z-20 px-6 pb-6 pt-8 lg:px-16 lg:pb-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.k}
              className="flex flex-col gap-1 rounded-xl border border-black/5 bg-tnk-paper px-4 py-3 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] sm:gap-1.5 sm:px-5 sm:py-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-display text-[11px] font-semibold text-tnk-yellow">{c.k}</span>
                <span className="font-display text-sm font-semibold tracking-tight text-tnk-ink">
                  {c.label}
                </span>
              </div>
              <p className="text-xs font-light text-tnk-mute">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
