export function Footer() {
  return (
    <footer className="w-full border-t border-tnk-line bg-tnk-paper px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-sm font-bold tracking-[0.15em] text-tnk-ink">
          Tnklabs
        </p>
        <p className="text-center text-xs font-light text-tnk-mute">
          © {new Date().getFullYear()} Tnklabs. Founded by Networking King. All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-tnk-mute">
            Connect with us
          </p>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/tnklabs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-tnk-mute transition-colors hover:text-tnk-ink"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* X Twitter */}
            <a
              href="https://x.com/tnklabss?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="text-tnk-mute transition-colors hover:text-tnk-ink"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:tnklabss@gmail.com"
              aria-label="Email"
              className="text-tnk-mute transition-colors hover:text-tnk-ink"
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
