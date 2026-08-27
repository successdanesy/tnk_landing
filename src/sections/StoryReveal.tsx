import { Reveal } from "../components/Reveal";

export function StoryReveal() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/j7bavbyz/video/upload/v1787834819/new_in.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tnk-black/30 via-tnk-black/10 to-tnk-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="max-w-3xl">
          <Reveal direction="up" delay={0.15}>
            <span className="font-display text-2xl font-medium text-white/85 sm:text-3xl lg:text-4xl italic">
              "Because building a company is already a full-time job."
            </span>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.7} className="mt-16">
          <p className="tnk-eyebrow font-display text-[11px] text-tnk-yellow font-semibold">And somewhere along the way</p>
        </Reveal>

        <Reveal direction="up" delay={0.85} className="mt-6 max-w-3xl">
          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            your personal brand became
            <span className="block text-tnk-yellow">another job.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
