import { Reveal, RevealText } from "../components/Reveal";

export function RevealBrand() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-tnk-black px-6 py-32 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tnk-yellow/10 blur-[140px]" />
        <div className="absolute right-1/4 top-1/3 h-[40vh] w-[40vh] rounded-full bg-tnk-blue/10 blur-[130px]" />
      </div>

      <Reveal duration={1.1}>
        <p className="tnk-eyebrow font-display text-[14px] sm:text-base font-black tracking-[0.5em] text-white">MEET TNK LABS.</p>
      </Reveal>

      <RevealText delay={0.15} className="mt-6">
        <h2 className="font-display text-[16vw] font-bold leading-none tracking-tight text-tnk-yellow sm:text-8xl lg:text-[10rem]">
          Tnklabs
        </h2>
      </RevealText>

      <div className="relative z-10 mt-14 max-w-3xl space-y-3">
        <Reveal delay={0.45}>
          <h3 className="text-balance font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            THE PRESENCE BEHIND THE FOUNDER.
          </h3>
        </Reveal>
      </div>

      <Reveal delay={0.75} className="mt-8 max-w-2xl">
        <p className="text-balance text-base font-light text-white/75 sm:text-lg">
          We build AI-powered content systems that help founders stay visible, build authority and create opportunities without taking time away from the business.
        </p>
      </Reveal>
    </section>
  );
}
