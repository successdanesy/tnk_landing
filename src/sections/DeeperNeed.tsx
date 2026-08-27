import { Reveal } from "../components/Reveal";

export function DeeperNeed() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-white/60 sm:text-4xl lg:text-5xl">
            This isn&apos;t a content problem.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            It&apos;s a <span className="text-tnk-blue-soft">visibility</span> problem.
          </h2>
        </Reveal>

        <Reveal delay={0.4} className="mt-10 max-w-3xl">
          <p className="text-balance font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
            Your expertise can&apos;t create authority
            <span className="block text-tnk-yellow font-bold">if the market rarely sees it.</span>
          </p>
        </Reveal>

        <Reveal delay={0.6} className="mt-8 max-w-3xl">
          <p className="text-balance font-display text-lg font-semibold uppercase tracking-wider text-tnk-blue-soft sm:text-xl">
            SO WHAT IF YOU COULD STAY VISIBLE WITHOUT BEING THE ONE CREATING EVERYTHING?
          </p>
        </Reveal>
      </div>
    </section>
  );
}
