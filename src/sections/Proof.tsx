import { Reveal } from "../components/Reveal";

export function Proof() {
  return (
    <section id="results" className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-28 px-6 lg:px-10">
        
        {/* CASE STUDY 01: BRAND VIDEO FOR MOVIES (Interactive Video with sound enabled) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-2xl border border-tnk-yellow/30 bg-tnk-charcoal aspect-video relative shadow-lg">
              <video
                src="https://res.cloudinary.com/j7bavbyz/video/upload/v1787844699/inuu.mp4"
                controls
                autoPlay
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-tnk-blue-soft">Brand Video</p>
            <h3 className="mt-4 text-balance font-display text-2xl font-semibold text-white sm:text-3xl">
              Brand Video for Movies
            </h3>
          </Reveal>
        </div>

        {/* CASE STUDY 02: WEB3 LAUNCH (Interactive Video with sound enabled) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:[&>*:first-child]:order-2">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-2xl border border-tnk-yellow/30 bg-tnk-charcoal aspect-video relative shadow-lg">
              <video
                src="https://res.cloudinary.com/j7bavbyz/video/upload/v1787842997/aii.mp4"
                controls
                autoPlay
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-tnk-blue-soft">Web3 Launch</p>
            <h3 className="mt-4 text-balance font-display text-2xl font-semibold text-white sm:text-3xl">
              A Web3 project needed launch content quickly, with no room for delay.
            </h3>
            <p className="mt-4 max-w-md text-balance text-base font-light text-white/55">
              Cinematic AI launch production, built and delivered on a compressed timeline.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
