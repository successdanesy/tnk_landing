import { Reveal } from "../components/Reveal";

const points = [
  {
    title: "You should be visible",
    icon: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Your expertise matters",
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </>
    ),
  },
  {
    title: "Your audience should hear from you",
    icon: (
      <>
        <path d="M3 11v2a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1z" />
        <path d="M15 8a4 4 0 0 1 0 8" />
      </>
    ),
  },
];

export function Dilemma() {
  return (
    <section id="story" className="w-full bg-tnk-paper py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
            The problem
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-7">
          <h2 className="text-balance font-display text-3xl leading-[1.18] tracking-tight text-tnk-ink/80 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.16]">
            Building a company is already a{" "}
            <span className="font-bold text-tnk-ink">full-time job.</span> And somewhere along
            the way, your personal brand became{" "}
            <span className="font-bold text-tnk-ink">another job.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 px-6 sm:grid-cols-3 sm:gap-8 lg:mt-20 lg:px-10">
        {points.map((p, i) => (
          <Reveal
            key={p.title}
            delay={0.1 * i}
            direction="up"
            className="flex flex-col items-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tnk-yellow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-tnk-black"
              >
                {p.icon}
              </svg>
            </span>
            <h3 className="mt-5 max-w-[14rem] text-balance font-display text-lg font-semibold tracking-tight text-tnk-ink">
              {p.title}
            </h3>
            <p className="mt-2 text-sm font-light text-tnk-mute">And you know it.</p>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
