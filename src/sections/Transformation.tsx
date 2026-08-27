import { Reveal } from "../components/Reveal";

const before = ["Busy", "Inconsistent", "Camera-shy", "Content constantly delayed", "Personal brand neglected"];
const after = ["Visible", "Consistent", "Positioned", "Authority building", "Focused on the business"];

export function Transformation() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="absolute inset-0">
        <img
          src="/images/transformation.jpg"
          alt="Abstract transformation from chaos into clarity"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tnk-black via-tnk-black/60 to-tnk-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="tnk-eyebrow font-display text-[11px] text-white/40">The shift</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-5">
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            What actually changes.
          </h2>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:gap-4 lg:px-10">
        <Reveal direction="right" className="flex flex-col items-center gap-5 border-b border-white/10 pb-10 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-white/35">Before</span>
          <ul className="space-y-4">
            {before.map((item) => (
              <li key={item} className="font-display text-xl font-medium text-white/40 sm:text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="left" delay={0.15} className="flex flex-col items-center gap-5 sm:pl-10">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-tnk-yellow">After</span>
          <ul className="space-y-4">
            {after.map((item) => (
              <li key={item} className="font-display text-xl font-semibold text-white sm:text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
