import { Reveal } from "../components/Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative z-10">
      {/* white top area — flow-root so its height shrinks with the card's negative
          margin, letting the card's lower half spill onto the dark footer below */}
      <div className="[display:flow-root] bg-white pt-24 lg:pt-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative z-20 -mb-32 overflow-hidden rounded-3xl bg-tnk-yellow px-6 py-10 sm:-mb-44 sm:px-12 sm:py-12 lg:-mb-56 lg:px-16 lg:py-16">
            {/* faint blueprint-style decoration — small corner accent on phones,
                a taller cluster from sm up */}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 240"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute bottom-0 right-0 h-40 w-auto translate-x-5 translate-y-5 text-tnk-black/[0.07] sm:bottom-auto sm:right-[-1.5rem] sm:top-1/2 sm:h-[135%] sm:translate-x-0 sm:-translate-y-1/2 sm:text-tnk-black/[0.12]"
            >
              <rect x="118" y="42" width="92" height="150" rx="18" transform="rotate(18 164 117)" />
              <rect x="168" y="18" width="82" height="140" rx="16" transform="rotate(-14 209 88)" />
              <circle cx="86" cy="150" r="56" />
              <path d="M248 168 l42 -14 -14 42 -12 -20 -16 -8z" />
            </svg>

            <Reveal
              direction="none"
              className="relative mx-auto max-w-xl text-center sm:mx-0 sm:text-left"
            >
              <h2 className="text-balance font-display text-2xl font-bold leading-[1.15] tracking-tight text-tnk-black sm:text-4xl sm:leading-[1.1] lg:text-5xl">
                Ready to grow your business?
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-balance text-base font-light leading-relaxed text-tnk-black/70 sm:mx-0 sm:mt-4 sm:max-w-md sm:text-lg">
                Whether you need high-quality AI video ads, paid advertising management, or both,
                TNK Labs is ready to help.
              </p>

              <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="https://calendly.com/hellotnklabs/30min"
                  className="inline-flex items-center justify-center rounded-full bg-tnk-black px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
                >
                  Work With Us
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center justify-center gap-2 font-display text-sm font-medium uppercase tracking-[0.18em] text-tnk-black transition-colors hover:text-tnk-black/60 sm:justify-start"
                >
                  See how it works
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
