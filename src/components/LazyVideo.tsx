import type { VideoHTMLAttributes } from "react";

/**
 * A <video> that never autoplays and never loads its full stream on page load.
 * `preload="metadata"` shows a first frame and the native play button; the viewer
 * clicks to play. So videos never fire off one after another on their own.
 */
export function LazyVideo({
  preload = "metadata",
  className,
  ...props
}: VideoHTMLAttributes<HTMLVideoElement>) {
  return <video preload={preload} className={className} {...props} />;
}
