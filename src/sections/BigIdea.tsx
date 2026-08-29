import { Reveal } from "../components/Reveal";
import { LazyVideo } from "../components/LazyVideo";

export function BigIdea() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-display text-2xl font-medium text-tnk-mute line-through decoration-tnk-ink/25 sm:text-3xl">
            We don&apos;t just make videos.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-6">
          <p className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-tnk-ink sm:text-5xl lg:text-6xl">
            We build{" "}
            <span className="box-decoration-clone rounded-md bg-tnk-yellow px-2 text-tnk-black">
              content engines.
            </span>
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 lg:mt-10 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal delay={0.15} className="mt-2">
            <p className="text-balance text-base font-light leading-relaxed text-tnk-mute sm:text-lg">
              For founders who are camera-shy or too busy to film constantly, we build a
              hyper-realistic digital twin that carries your presence further, without replacing
              your judgment or expertise.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr] lg:mt-16">
          {/* The Founder */}
          <Reveal direction="right">
            <div className="overflow-hidden rounded-2xl border border-tnk-line">
              <img
                src="https://res.cloudinary.com/j7bavbyz/image/upload/f_auto,q_auto,w_640/v1787753989/photo_2026-08-26_07-16-16.jpg"
                alt="The founder, in their own environment"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-tnk-mute">
              The Founder
            </p>
          </Reveal>

          <div className="hidden justify-center sm:flex">
            <span className="font-display text-2xl text-tnk-mute/50">&rarr;</span>
          </div>

          {/* The Digital Twin */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-tnk-blue/30">
              <img
                src="https://res.cloudinary.com/j7bavbyz/image/upload/f_auto,q_auto,w_640/v1787754023/photo_2026-08-26_07-16-27.jpg"
                alt="An abstract digital twin representation"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-tnk-blue">
              The Digital Twin
            </p>
          </Reveal>

          <div className="hidden justify-center sm:flex">
            <span className="font-display text-2xl text-tnk-mute/50">&rarr;</span>
          </div>

          {/* The Output */}
          <Reveal delay={0.3} direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-tnk-yellow/50 bg-tnk-paper">
              <LazyVideo
                src="https://res.cloudinary.com/j7bavbyz/video/upload/q_auto/v1787766681/Happy_New_Month_Wishes_202608261044.mp4"
                poster="https://res.cloudinary.com/j7bavbyz/video/upload/so_0,f_auto,q_auto,w_640/v1787766681/Happy_New_Month_Wishes_202608261044.jpg"
                controls
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-tnk-ink">
              The Output
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
