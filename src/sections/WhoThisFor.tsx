import { Reveal } from "../components/Reveal";

const audiences = [
  {
    title: "E-commerce & Product Brands",
    desc: "Showcase your products with compelling video ads designed to attract potential buyers.",
  },
  {
    title: "Real Estate Businesses",
    desc: "Present properties through cinematic advertising that captures attention and generates inquiries.",
  },
  {
    title: "Startups & Growing Businesses",
    desc: "Build awareness, promote your offers, and reach potential customers.",
  },
  {
    title: "Service-Based Businesses",
    desc: "Communicate the value of your services and generate leads through targeted advertising.",
  },
  {
    title: "Consumer Brands",
    desc: "Create engaging campaigns that help your products stand out in competitive markets.",
  },
];

export function WhoThisFor() {
  return (
    <section id="who" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
              Who we work with
            </span>
          </Reveal>
          <Reveal delay={0.15} className="mt-6">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-tnk-ink sm:text-4xl lg:text-5xl">
              Advertising solutions for businesses ready to grow.
            </h2>
          </Reveal>
        </div>

        {/* Flex-wrap rather than grid so the odd fifth card centres on the last row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-5 lg:mt-16">
          {audiences.map((a, i) => (
            <Reveal
              key={a.title}
              delay={0.06 * i}
              direction="up"
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <article className="h-full rounded-[1.25rem] border border-tnk-ink/80 bg-tnk-paper/60 p-7">
                <span className="inline-flex rounded-full border border-tnk-ink/80 bg-tnk-yellow px-3 py-1 font-display text-xs font-bold text-tnk-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-tnk-ink sm:text-xl">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-tnk-mute sm:text-base">
                  {a.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
