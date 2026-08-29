const explore = [
  { label: "Who we are", href: "#about" },
  { label: "What we build", href: "#system" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="w-full bg-tnk-ink px-6 pb-10 pt-44 sm:pt-56 lg:px-10 lg:pt-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tnk-yellow p-1.5">
                <img
                  src="/photos/logo.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Tnklabs
              </span>
            </a>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/50">
              We build the presence behind the founder. AI-powered content systems for founders
              who are building something that matters.
            </p>
          </div>

          {/* Explore */}
          <nav className="flex flex-col gap-3">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>
            {explore.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </p>
            <a
              href="mailto:tnklabss@gmail.com"
              className="font-display text-sm text-white/70 transition-colors hover:text-white"
            >
              tnklabss@gmail.com
            </a>
            <a
              href="https://calendly.com/hellotnklabs/30min"
              className="font-display text-sm text-white/70 transition-colors hover:text-white"
            >
              Book a strategy call
            </a>
            <p className="font-display text-sm text-white/50">Working with founders globally</p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs font-light text-white/40 sm:text-left">
            © {new Date().getFullYear()} Tnklabs. Founded by Networking King. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/tnklabs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/55 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://x.com/tnklabss?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="text-white/55 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="mailto:tnklabss@gmail.com"
              aria-label="Email"
              className="text-white/55 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
