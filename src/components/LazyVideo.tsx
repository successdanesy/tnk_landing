import { useEffect, useRef, type VideoHTMLAttributes } from "react";

type LazyVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  /** Play only while scrolled into view, pause when it leaves. Default: true */
  playOnVisible?: boolean;
};

/**
 * A <video> that never autoplays on load. Instead it starts playing when it
 * scrolls into view and pauses when it leaves, so several videos on one page
 * don't all fire (and download) at once on reload.
 */
export function LazyVideo({
  playOnVisible = true,
  preload = "none",
  className,
  ...props
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !playOnVisible) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prefersReduced) {
          // play() rejects when the browser blocks unmuted autoplay — ignore it,
          // the user can press play via the controls.
          void el.play().catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.2, rootMargin: "100px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [playOnVisible]);

  return <video ref={ref} preload={preload} className={className} {...props} />;
}
