import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const hiddenTransform: Record<Direction, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
  none: "none",
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Scroll-in reveal. IntersectionObserver + CSS transitions, no animation library.
 * The trigger fires when the element's top passes ~85% of the viewport height,
 * which stays reliable for elements taller than the viewport (a threshold on
 * `amount` would never resolve for those).
 */
function useInView(once: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal when the element enters the viewport, but also when it is
          // already at or above the fold (deep-link jump, reload while scrolled,
          // a fast fling that skips it) so it can never stay stuck invisible.
          const alreadyPassed = entry.boundingClientRect.top < window.innerHeight;
          if (entry.isIntersecting || alreadyPassed) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return { ref, inView };
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className = "",
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  /** kept for call-site compatibility; trigger point is handled via rootMargin */
  amount?: number;
}) {
  const { ref, inView } = useInView(once);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : hiddenTransform[direction],
        transition: `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function RevealText({
  children,
  className = "",
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const { ref, inView } = useInView(once);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        filter: inView ? "blur(0px)" : "blur(6px)",
        transition: `opacity 1s ${EASE} ${delay}s, transform 1s ${EASE} ${delay}s, filter 1s ${EASE} ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
