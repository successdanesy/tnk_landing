import { Reveal } from "../components/Reveal";

export function BigIdea() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-16 lg:py-20">
      <div className="absolute inset-0">
        <img
          src="/images/content-engine.jpg"
          alt="Abstract glowing network of connected lines representing a content engine"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tnk-black via-tnk-black/80 to-tnk-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-white/50 line-through decoration-white/30 sm:text-4xl lg:text-5xl">
            We don&apos;t just make videos.
          </h2>
        </Reveal>

        <Reveal delay={0.35} className="mt-10">
          <h2 className="text-balance font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            We build <span className="text-tnk-yellow">content engines.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
