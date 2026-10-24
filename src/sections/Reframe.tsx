import { Reveal } from "../components/Reveal";

export function Reframe() {
  return (
    <section className="w-full border-y border-tnk-line bg-tnk-paper py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-balance font-display text-base font-light text-tnk-mute sm:text-lg">
            At TNK Labs, we combine AI-powered{" "}
            <span className="font-bold text-tnk-ink">video</span> with strategic paid{" "}
            <span className="font-bold text-tnk-ink">advertising</span>.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <p className="text-balance font-display text-3xl font-medium leading-[1.22] tracking-tight text-tnk-ink sm:text-4xl lg:text-5xl">
            So your business can market its products and services more{" "}
            <span className="box-decoration-clone rounded-md bg-tnk-yellow px-2 py-0.5 font-bold text-tnk-black">
              effectively
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
