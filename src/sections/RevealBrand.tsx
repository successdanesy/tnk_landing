import { Reveal, RevealText } from "../components/Reveal";

// Both breakpoints orbit the centred content. Mobile shows 4 (one per corner);
// lg adds two more on the sides for a fuller ring, like the inspo.
const avatars = [
  { src: "/photos/avatars/men-32.jpg", cls: "left-[2%] top-[3%] -rotate-6 lg:left-[9%] lg:top-[10%]" },
  { src: "/photos/avatars/women-28.jpg", cls: "right-[2%] top-[6%] rotate-3 lg:right-[11%] lg:top-[6%]" },
  { src: "/photos/avatars/men-83.jpg", cls: "left-[3%] bottom-[5%] rotate-6 lg:left-[4%] lg:bottom-auto lg:top-[46%]" },
  { src: "/photos/avatars/women-44.jpg", cls: "right-[3%] bottom-[3%] -rotate-6 lg:right-[21%] lg:bottom-[12%]" },
  { src: "/photos/avatars/women-65.jpg", cls: "hidden lg:block lg:right-[4%] lg:top-[46%] lg:-rotate-3" },
  { src: "/photos/avatars/men-51.jpg", cls: "hidden lg:block lg:left-[19%] lg:bottom-[8%] lg:rotate-6" },
];

export function RevealBrand() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-white pb-36 pt-36 lg:py-32">
      {/* Floating founder avatars — placeholders, swap for real client photos */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {avatars.map((a) => (
          <img
            key={a.src}
            src={a.src}
            alt=""
            loading="lazy"
            decoding="async"
            width="64"
            height="64"
            className={`absolute h-12 w-12 rounded-full object-cover shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] ring-4 ring-white sm:h-14 sm:w-14 lg:h-16 lg:w-16 ${a.cls}`}
          />
        ))}
        <span className="absolute left-[15%] top-[24%] hidden rounded-full bg-tnk-yellow/25 px-3 py-1 font-display text-xs font-medium text-tnk-ink shadow-sm lg:block">
          3 inbound leads this week
        </span>
        <span className="absolute right-[13%] bottom-[26%] hidden rounded-full bg-tnk-yellow/25 px-3 py-1 font-display text-xs font-medium text-tnk-ink shadow-sm lg:block">
          Booked the keynote
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
            Who we are
          </span>
        </Reveal>

        {/* Logo lockup stands in for a "Meet TNK Labs" line */}
        <RevealText delay={0.1} className="mt-7">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-tnk-yellow p-2 sm:h-16 sm:w-16 sm:p-2.5 lg:h-[4.5rem] lg:w-[4.5rem]">
              <img
                src="/photos/logo.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-5xl font-bold tracking-tight text-tnk-ink sm:text-6xl lg:text-7xl">
              Tnklabs
            </span>
          </div>
        </RevealText>

        <RevealText delay={0.2} className="mt-8">
          <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-tnk-ink sm:text-4xl lg:text-5xl">
            The presence behind the founder
          </h2>
        </RevealText>

        <Reveal delay={0.3} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-base font-light leading-relaxed text-tnk-mute sm:text-lg">
            We build AI-powered content systems that help founders stay visible, build
            authority and create opportunities without taking time away from the business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
