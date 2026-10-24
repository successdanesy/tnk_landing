import { Reveal } from "../components/Reveal";
import { LazyVideo } from "../components/LazyVideo";

const projects = [
  {
    tag: "Web3 Launch",
    title: "A Web3 project needed launch content quickly, with no room for delay.",
    desc: "Cinematic AI launch production, built and delivered on a compressed timeline.",
    src: "https://res.cloudinary.com/j7bavbyz/video/upload/q_auto/v1787842997/aii.mp4",
    poster:
      "https://res.cloudinary.com/j7bavbyz/video/upload/so_0,f_auto,q_auto,w_960/v1787842997/aii.jpg",
    portrait: false,
  },
  {
    tag: "Product Launch",
    title: "A beverage brand needed a launch ad that made its new drink hard to scroll past.",
    desc: "An AI-produced product commercial built to introduce the drink, show it at its best, and turn attention into first purchases.",
    src: "/videos/beverage-launch.mp4",
    portrait: false,
  },
  {
    tag: "Book Promotion",
    title: "An author needed to put their book on the digital economy in front of the right readers.",
    desc: "A vertical video ad that brings the book's insights to life and shows readers what they will learn, made for social feeds and paid campaigns.",
    src: "/videos/digital-economy-book.mp4",
    portrait: true,
  },
];

export function Proof() {
  return (
    <section id="work" className="w-full bg-tnk-paper py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
              Our work
            </span>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <h2 className="text-balance font-display text-3xl font-semibold leading-[1.18] tracking-tight text-tnk-ink sm:text-4xl">
              Ads built to capture attention.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-5">
            <p className="text-balance text-base font-light leading-relaxed text-tnk-mute sm:text-lg">
              Every project starts with one objective:{" "}
              communicate value and capture{" "}
              <span className="box-decoration-clone rounded-md bg-tnk-yellow px-1.5 py-0.5 font-bold text-tnk-black">
                attention
              </span>
              .
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={p.src}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal direction={flip ? "left" : "right"} className={flip ? "lg:order-2" : ""}>
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-tnk-line bg-tnk-ink shadow-sm ${
                      p.portrait ? "mx-auto aspect-[9/16] max-w-[18rem] sm:max-w-xs" : "aspect-video"
                    }`}
                  >
                    {/* Local clips have no poster image, so they preload metadata and seek
                        a hair in (#t) to paint their first frame instead of a black box */}
                    <LazyVideo
                      src={p.poster ? p.src : `${p.src}#t=0.1`}
                      poster={p.poster}
                      preload={p.poster ? "none" : "metadata"}
                      controls
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal
                  direction={flip ? "right" : "left"}
                  delay={0.1}
                  className={flip ? "lg:order-1" : ""}
                >
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-tnk-blue">
                    {p.tag}
                  </p>
                  <h3 className="mt-4 text-balance font-display text-2xl font-semibold text-tnk-ink sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md text-balance text-base font-light leading-relaxed text-tnk-mute">
                    {p.desc}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
