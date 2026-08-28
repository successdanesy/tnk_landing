import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-tnk-charcoal"
    >
      {/* Background image — full-bleed, no overlay (matches the inspo). On phones the
          crop keeps the panelling behind the copy while framing both founders. */}
      <img
        src="/photos/hero.png"
        alt="Two founders in conversation across a meeting table"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[65%_50%] sm:object-center"
      />

      {/* Content — top-left on phones, centred from sm up */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-1 flex-col justify-start px-6 pb-16 pt-24 sm:justify-center sm:pt-28 lg:px-16"
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
    </section>
  );
}
