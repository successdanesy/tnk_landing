import { Reveal } from "../components/Reveal";
import { CTAButton } from "../components/CTAButton";

export function FinalCTA() {
  return (
    <section
      id="book-a-call"
      className="w-full border-t border-tnk-line bg-white py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
            Full circle
          </span>
        </Reveal>

        <Reveal delay={0.15} className="mt-7">
          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-tnk-ink sm:text-5xl lg:text-6xl">
            Your company is building.
            <span className="mt-2 block">
              Your personal brand should be{" "}
              <span className="box-decoration-clone rounded-md bg-tnk-yellow px-2 text-tnk-black">
                too.
              </span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.3} className="mt-6 max-w-xl">
          <p className="text-balance text-base font-light leading-relaxed text-tnk-mute sm:text-lg">
            You already have the expertise, the vision and the company. Tnklabs builds the
            content system that helps the market see it.
          </p>
        </Reveal>

        <Reveal
          delay={0.45}
          className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <CTAButton>Book a Strategy Call</CTAButton>
          <CTAButton href="#results" variant="ghost">
            See how it works
          </CTAButton>
        </Reveal>

        <Reveal delay={0.55} className="mt-6">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-tnk-mute">
            Let&apos;s build the presence behind the founder.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
