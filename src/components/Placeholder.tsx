import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/**
 * Editable media placeholder.
 * Replace by swapping this component for a real <img> / <video> tag,
 * or by dropping a real asset into /public/images and pointing `src` here.
 */
export function Placeholder({
  label,
  ratio = "aspect-[4/5]",
  className,
  icon = "image",
  tone = "neutral",
}: {
  label: string;
  ratio?: string;
  className?: string;
  icon?: "image" | "video" | "screenshot" | "logo" | "chart";
  tone?: "neutral" | "blue" | "yellow";
}) {
  const icons: Record<string, ReactNode> = {
    image: (
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm2 11 3.5-4 2.5 3 3-4L18 17H6Z" />
    ),
    video: <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h9A1.5 1.5 0 0 1 16 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 17.5v-11ZM17 10l4-2.5v9L17 14v-4Z" />,
    screenshot: (
      <path d="M4 5h16v11H4V5Zm0 13h16v1H4v-1Zm4-9 3 3-3 3-1-1 2-2-2-2 1-1Zm5 4h3v1h-3v-1Z" />
    ),
    logo: <path d="M12 3 4 7v5c0 4.4 3.4 8.4 8 9 4.6-.6 8-4.6 8-9V7l-8-4Z" />,
    chart: <path d="M4 20V10h3v10H4Zm6.5 0V4h3v16h-3ZM17 20v-7h3v7h-3Z" />,
  };

  const toneRing =
    tone === "blue"
      ? "from-tnk-blue/25 via-transparent to-transparent"
      : tone === "yellow"
      ? "from-tnk-yellow/20 via-transparent to-transparent"
      : "from-white/10 via-transparent to-transparent";

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br",
        toneRing,
        "bg-tnk-charcoal",
        ratio,
        className
      )}
    >
      <div className="tnk-noise absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/50 backdrop-blur-sm transition-colors group-hover:border-tnk-yellow/50 group-hover:text-tnk-yellow">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            {icons[icon]}
          </svg>
        </span>
        <p className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
          {label}
        </p>
      </div>
      <div className="absolute inset-0 border border-white/0 transition-colors group-hover:border-white/15" />
    </div>
  );
}
