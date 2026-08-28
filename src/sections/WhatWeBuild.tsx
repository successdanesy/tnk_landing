import { Reveal } from "../components/Reveal";

const items = [
  {
    n: "01",
    title: "Strategy",
    desc: "Positioning, content pillars, brand voice and direction built around how you actually think and talk.",
  },
  {
    n: "02",
    title: "Content",
    desc: "Cinematic video, social posts, scripts, hooks and captions — produced consistently, not occasionally.",
  },
  {
    n: "03",
    title: "Presence",
    desc: "LinkedIn, X, founder websites and the digital presence that carries your name.",
  },
  {
    n: "04",
    title: "Distribution",
    desc: "Scheduling, publishing and platform strategy so content actually reaches the right rooms.",
  },
  {
    n: "05",
    title: "Lead Systems",
    desc: "Landing pages, lead capture and qualification connected directly to your content.",
  },
  {
    n: "06",
    title: "Optimization",
    desc: "Ongoing performance review so the system keeps getting sharper.",
  },
];

export function WhatWeBuild() {
  return (
    <section id="system" className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="tnk-eyebrow font-display text-[11px] text-tnk-yellow/80">What we actually build</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-5">
            <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              An ecosystem, not a deliverable.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={0.06 * i}>
              <div className="group grid grid-cols-1 items-center gap-4 py-8 transition-colors sm:grid-cols-[80px_220px_1fr] sm:gap-8">
                <span className="font-display text-sm text-white/30 transition-colors group-hover:text-tnk-yellow">
                  {item.n}
                </span>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                <p className="max-w-xl text-balance text-sm font-light text-white/50 sm:text-base">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
