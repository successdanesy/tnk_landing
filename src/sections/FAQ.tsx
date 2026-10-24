import { useState } from "react";
import { Reveal } from "../components/Reveal";

const faqs = [
  {
    q: "What services does TNK Labs offer?",
    a: "We specialize in AI-powered video ad creation and paid advertising for businesses.",
  },
  {
    q: "Can I hire you just to create AI ads?",
    a: "Yes. You can hire us to create AI-powered video ads without purchasing paid advertising management.",
  },
  {
    q: "Can you create the ads and run the campaigns too?",
    a: "Yes. We can handle both the creative production and paid advertising, giving your business a more integrated advertising solution.",
  },
  {
    q: "Which platforms do you run ads on?",
    a: "We can recommend suitable advertising platforms based on your business objectives, target audience, and campaign requirements.",
  },
  {
    q: "Do you work with businesses outside Nigeria?",
    a: "Yes. We welcome inquiries from businesses in Nigeria and international markets.",
  },
  {
    q: "How do we get started?",
    a: "Contact us to discuss your business, advertising goals, budget, and the services you need. We'll help you identify the right approach.",
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
              FAQs
            </span>
          </Reveal>
          <Reveal delay={0.15} className="mt-6">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-tnk-ink sm:text-4xl lg:text-5xl">
              Questions before getting started.
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
