import { Reveal } from "../components/Reveal";

const services = [
  {
    n: "01",
    title: "AI Ad Creation",
    body: [
      "We create high-quality AI-powered video ads that showcase your products, communicate your value, and capture the attention of your target audience.",
      "From product commercials to promotional videos, we help businesses bring their advertising ideas to life without the complexity of traditional production.",
    ],
  },
  {
    n: "02",
    title: "Paid Advertising",
    body: [
      "We help businesses reach potential customers through strategic paid advertising campaigns.",
      "From campaign setup and audience targeting to ad management and optimization, we focus on helping businesses generate leads, increase visibility, and drive sales.",
    ],
  },
  {
    n: "03",
    title: "Ad Creative Strategy",
    body: [
      "We develop compelling ad concepts, hooks, messaging, and creative angles tailored to your offer, target audience, and campaign objectives.",
    ],
  },
  {
    n: "04",
    title: "Campaign Optimization",
    body: [
      "We monitor campaign performance and refine advertising creatives, targeting, and campaign strategy to improve results over time.",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
              What we do
            </span>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <h2 className="text-balance font-display text-3xl leading-[1.18] tracking-tight text-tnk-ink/80 sm:text-4xl lg:text-[2.75rem]">
              Two core services. One goal:{" "}
              <span className="font-bold text-tnk-ink">business growth.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * (i % 2)} className="h-full">
              <article className="h-full rounded-[1.25rem] border border-tnk-ink/80 bg-tnk-paper/60 p-7 sm:p-8">
                <span className="inline-flex rounded-full border border-tnk-ink/80 bg-tnk-yellow px-3 py-1 font-display text-xs font-bold text-tnk-black">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-tnk-ink sm:text-2xl">
                  {s.title}
                </h3>
                <div className="mt-3 space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-sm font-light leading-relaxed text-tnk-mute sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
