import { useEffect, useRef, useState } from "react";

/**
 * Wrap any element to reveal it on scroll.
 * Props:
 *   delay     — ms before the reveal transition starts (default 0)
 *   direction — 'up' | 'left' (default 'up')
 *   as        — element tag to render (default 'div')
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  // Respect reduced-motion by starting visible — no animation needed.
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      data-direction={direction}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
