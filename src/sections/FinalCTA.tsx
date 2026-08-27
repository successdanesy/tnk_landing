import { Reveal } from "../components/Reveal";
import { CTAButton } from "../components/CTAButton";

export function FinalCTA() {
  return (
    <section id="book-a-call" className="relative w-full overflow-hidden bg-tnk-black py-16 lg:py-20">
      <div className="absolute inset-0">
        <img
          src="/images/final-cta.jpg"
          alt="City skyline at night viewed through a dark office window"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 tnk-vignette" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal>
          <p className="tnk-eyebrow font-display text-[11px] text-tnk-yellow/80">Full circle</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-6">
          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Your company is building.
            <span className="block text-tnk-yellow">Your personal brand should be too.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.35} className="mt-8 max-w-xl">
          <p className="text-balance text-base font-light text-white/60 sm:text-lg">
            You already have the expertise. You already have the vision. You already have the
            company. Tnklabs builds the content system that helps the market see it.
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-12 flex flex-col items-center gap-5 sm:flex-row justify-center">
          <CTAButton>Book a Strategy Call</CTAButton>
          <CTAButton href="#results" variant="ghost">
            See How It Works
          </CTAButton>
        </Reveal>

        <Reveal delay={0.6} className="mt-6">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-white/40">
            Let&apos;s build the presence behind the founder.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
