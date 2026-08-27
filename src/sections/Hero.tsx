import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-tnk-charcoal"
    >
      {/* Background image — clean on desktop; on phones the crop keeps the two
          founders framed while the copy gets a soft scrim for legibility. */}
      <img
        src="/photos/hero.png"
        alt="Two founders in conversation across a meeting table"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[73%_50%] sm:object-center"
      />

      {/* Mobile-only legibility scrim behind the headline (top ~60%) */}
      <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-tnk-charcoal/85 via-tnk-charcoal/40 to-transparent sm:hidden" />

      {/* Content — top-left on phones (over the panelling), centred from sm up */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-1 flex-col justify-start px-6 pb-16 pt-28 sm:justify-center lg:px-16"
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
    </section>
  );
}
