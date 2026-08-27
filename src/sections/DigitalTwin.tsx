import { Reveal } from "../components/Reveal";
import { LazyVideo } from "../components/LazyVideo";

export function DigitalTwin() {
  return (
    <section className="relative w-full overflow-hidden bg-tnk-black py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal delay={0.15}>
            <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Show up without always stepping
              <span className="block text-tnk-yellow">in front of the camera.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3} className="mt-6">
            <p className="text-balance text-base font-light text-white/55 sm:text-lg">
              For founders who are camera-shy or simply too busy to record constantly, Tnklabs can
              build a hyper-realistic digital twin that supports the wider content system. It doesn&apos;t
              replace your judgment, personality or expertise — it helps carry your presence further.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {/* The Founder */}
          <Reveal direction="right" className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://res.cloudinary.com/j7bavbyz/image/upload/v1787753989/photo_2026-08-26_07-16-16.jpg"
                alt="The founder, in their own environment"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-white/50">
              The Founder
            </p>
          </Reveal>

          <div className="hidden justify-center sm:flex">
            <span className="font-display text-2xl text-white/30">→</span>
          </div>

          {/* The Digital Twin */}
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-2xl border border-tnk-blue/30">
              <img
                src="https://res.cloudinary.com/j7bavbyz/image/upload/v1787754023/photo_2026-08-26_07-16-27.jpg"
                alt="An abstract digital twin representation"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-tnk-blue-soft">
              The Digital Twin
            </p>
          </Reveal>

          <div className="hidden justify-center sm:flex">
            <span className="font-display text-2xl text-white/30">→</span>
          </div>

          {/* The Output */}
          <Reveal delay={0.3} direction="left">
            <div className="overflow-hidden rounded-2xl border border-tnk-yellow/30 bg-tnk-charcoal aspect-[4/5] relative">
              <LazyVideo
                src="https://res.cloudinary.com/j7bavbyz/video/upload/v1787766681/Happy_New_Month_Wishes_202608261044.mp4"
                controls
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-tnk-yellow">
              The Output
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
