import type { VideoHTMLAttributes } from "react";

/**
 * A <video> that shows only its poster frame until the viewer presses play.
 * `preload="none"` fetches zero video bytes on page load (the clips are heavy and
 * sit below the fold), so nothing competes with the hero for bandwidth and videos
 * never chain-load one after another. The poster + native controls still render.
 */
export function LazyVideo({
  preload = "none",
  className,
  ...props
}: VideoHTMLAttributes<HTMLVideoElement>) {
  return <video preload={preload} className={className} {...props} />;
}
