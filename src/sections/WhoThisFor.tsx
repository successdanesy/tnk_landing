import { Reveal } from "../components/Reveal";

const audiences = [
  "B2B founders",
  "SaaS founders",
  "Tech founders",
  "Funded startups",
  "Founders building authority",
  "Camera-shy founders",
];

export function WhoThisFor() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="tnk-eyebrow font-display text-[11px] text-tnk-blue-soft">Who this is for</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-5">
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Built for founders creating something that matters.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {audiences.map((a, i) => (
            <Reveal key={a} delay={0.06 * i} direction="up">
              <span className="inline-block rounded-full border border-white/15 px-6 py-3 font-display text-sm font-medium text-white/75 transition-colors hover:border-tnk-yellow/60 hover:text-tnk-yellow">
                {a}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
