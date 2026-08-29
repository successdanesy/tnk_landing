import { Reveal } from "../components/Reveal";
import { LazyVideo } from "../components/LazyVideo";

export function Proof() {
  return (
    <section id="results" className="w-full bg-tnk-paper py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
              Recent work
            </span>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <h2 className="text-balance font-display text-3xl font-semibold leading-[1.18] tracking-tight text-tnk-ink sm:text-4xl">
              See it in motion.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-tnk-line bg-tnk-ink shadow-sm">
              <LazyVideo
                src="https://res.cloudinary.com/j7bavbyz/video/upload/v1787842997/aii.mp4"
                controls
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-tnk-blue">
              Web3 Launch
            </p>
            <h3 className="mt-4 text-balance font-display text-2xl font-semibold text-tnk-ink sm:text-3xl">
              A Web3 project needed launch content quickly, with no room for delay.
            </h3>
            <p className="mt-4 max-w-md text-balance text-base font-light leading-relaxed text-tnk-mute">
              Cinematic AI launch production, built and delivered on a compressed timeline.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
