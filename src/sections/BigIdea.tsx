import { Reveal } from "../components/Reveal";

export function BigIdea() {
  return (
    <section className="w-full bg-tnk-paper py-20 lg:py-28">
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
    </section>
  );
}
