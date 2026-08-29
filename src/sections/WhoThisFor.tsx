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
    <section id="who" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
            Who it&apos;s for
          </span>
        </Reveal>
        <Reveal delay={0.15} className="mt-6">
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-tnk-ink sm:text-4xl lg:text-5xl">
            Built for founders creating something that matters.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {audiences.map((a, i) => (
            <Reveal key={a} delay={0.06 * i} direction="up">
              <span className="inline-block rounded-full border border-tnk-line px-6 py-3 font-display text-sm font-medium text-tnk-mute transition-colors hover:border-tnk-yellow hover:text-tnk-ink">
                {a}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
