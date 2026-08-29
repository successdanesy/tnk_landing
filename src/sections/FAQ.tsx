import { useState } from "react";
import { Reveal } from "../components/Reveal";

const faqs = [
  {
    q: "Do I need to be on camera?",
    a: "No. Many of the founders we work with rarely film. Between digital twin production and cinematic editing, a consistent presence doesn't require constant filming, though we can incorporate real footage whenever you want to.",
  },
  {
    q: "How does the digital twin work?",
    a: "We build a hyper-realistic AI representation of you that can deliver content in your voice and style. It's one tool inside the wider content system, not a replacement for your judgment or expertise.",
  },
  {
    q: "What if I don't know what to post?",
    a: "That's the strategy phase. We work with you to define content pillars, positioning and a voice before a single piece of content is produced.",
  },
  {
    q: "Can you manage the content after it's created?",
    a: "Yes. Distribution, scheduling and publishing can be handled as part of the system, so the content doesn't just sit finished. It goes live.",
  },
  {
    q: "Which platforms can you create content for?",
    a: "Primarily LinkedIn and X, along with founder websites and supporting digital presence. Platform focus is confirmed during the strategy call based on where your audience actually is.",
  },
  {
    q: "Do you work with founders outside Africa?",
    a: "Yes. Tnklabs works with founders globally. Distribution and production are built to support international audiences where relevant.",
  },
  {
    q: "How does the process begin?",
    a: "It starts with a strategy call. From there, we outline the right approach for your goals, audience and timeline.",
  },
  {
    q: "What happens during the strategy call?",
    a: "We look at your current presence, your goals, and whether Tnklabs is the right fit. No pressure, no generic pitch.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-tnk-paper py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-tnk-yellow px-4 py-1.5 font-display text-xs font-semibold tracking-tight text-tnk-black">
              Questions
            </span>
          </Reveal>
          <Reveal delay={0.15} className="mt-6">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-tnk-ink sm:text-4xl lg:text-5xl">
              Before you book the call.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-tnk-line border-y border-tnk-line">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.03 * i}>
              <div className="py-6">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-tnk-ink sm:text-xl">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-tnk-line font-display text-lg text-tnk-mute transition-transform duration-300 ${
                      open === i ? "rotate-45 border-tnk-yellow text-tnk-ink" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open === i ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-balance text-sm font-light leading-relaxed text-tnk-mute sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
