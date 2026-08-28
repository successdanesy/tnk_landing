import { Reveal, RevealText } from "../components/Reveal";

export function RevealBrand() {
  return (
    <section className="w-full bg-white py-24 text-center lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Logo lockup — mark + wordmark stand in for a "Meet TNK Labs" line */}
        <RevealText>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-tnk-yellow p-2 sm:h-16 sm:w-16 sm:p-2.5 lg:h-[4.5rem] lg:w-[4.5rem]">
              <img
                src="/photos/logo.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-5xl font-bold tracking-tight text-tnk-ink sm:text-6xl lg:text-7xl">
              Tnklabs
            </span>
          </div>
        </RevealText>

        <Reveal delay={0.2} className="mt-8">
          <h2 className="text-balance font-display text-xl font-semibold uppercase tracking-wide text-tnk-ink sm:text-2xl">
            The presence behind the founder.
          </h2>
        </Reveal>

        <Reveal delay={0.35} className="mx-auto mt-5 max-w-xl">
          <p className="text-balance text-base font-light leading-relaxed text-tnk-mute sm:text-lg">
            AI-powered content systems that keep founders visible and building authority,
            without taking time away from the business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
