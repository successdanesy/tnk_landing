import { Reveal } from "../components/Reveal";

const lines = [
  "You know you should be visible.",
  "You know your expertise matters.",
  "You know your audience should hear from you.",
];

export function InvisibleFounder() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="tnk-eyebrow font-display text-[11px] text-tnk-yellow/80">Meanwhile, quietly</p>
          </Reveal>

          <div className="mt-6 space-y-4">
            {lines.map((line, i) => (
              <Reveal key={line} delay={i * 0.12}>
                <p className="text-balance font-display text-2xl font-medium text-white/75 sm:text-3xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} className="mt-6">
            <p className="max-w-md text-balance text-lg font-light text-white/50">
              But building the company keeps winning.
            </p>
          </Reveal>

          <Reveal delay={0.65} className="mt-10">
            <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              And your personal brand
              <span className="block text-tnk-yellow">keeps waiting.</span>
            </h2>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal direction="right" className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://res.cloudinary.com/j7bavbyz/image/upload/v1787848567/new_inn.png"
                alt="Founder working at a laptop in the office"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tnk-black/70 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
