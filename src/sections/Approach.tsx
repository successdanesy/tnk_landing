import { Reveal } from "../components/Reveal";

export function Approach() {
  return (
    <section id="approach" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
            Our approach
          </span>
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <h2 className="font-display text-3xl leading-[1.18] tracking-tight text-tnk-ink/80 sm:text-4xl lg:text-[2.75rem]">
            <span className="block">Great creative.</span>
            <span className="block">Strategic distribution.</span>
            <span className="block font-bold text-tnk-ink">Better opportunities.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-base font-light leading-relaxed text-tnk-mute sm:text-lg">
            Your ads need the right message and a strategy to reach the right people. We bring
            both, so you start{" "}
            <span className="font-semibold text-tnk-ink">advertising with purpose</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
