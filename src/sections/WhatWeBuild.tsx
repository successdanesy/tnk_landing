import { Reveal } from "../components/Reveal";

const items = [
  {
    n: "01",
    title: "Strategy",
    desc: "Positioning, content pillars, brand voice and direction, built around how you actually think and talk.",
  },
  {
    n: "02",
    title: "Content",
    desc: "Cinematic video, social posts, scripts, hooks and captions, produced consistently rather than occasionally.",
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
    <section id="system" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
              What we build
            </span>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <h2 className="text-balance font-display text-3xl leading-[1.18] tracking-tight text-tnk-ink/80 sm:text-4xl lg:text-[2.75rem]">
              An <span className="font-bold text-tnk-ink">ecosystem</span>, not a deliverable.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-tnk-line border-y border-tnk-line lg:mt-16">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={0.05 * i}>
              <div className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[auto_180px_1fr] sm:items-start sm:gap-8">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-tnk-yellow font-display text-xs font-bold text-tnk-black">
                  {item.n}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-tnk-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-sm font-light leading-relaxed text-tnk-mute sm:text-base">
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
