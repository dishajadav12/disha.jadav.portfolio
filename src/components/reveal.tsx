"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Only animate the first time the element enters view */
  once?: boolean;
  /** How far before the element is fully in view to trigger (CSS margin syntax) */
  rootMargin?: string;
  /** 0..1 — how much of the element should be visible to trigger */
  threshold?: number | number[];
  /** Optional stagger delay in ms (useful in lists/grids) */
  delay?: number;
  /** Direction of the slide; defaults to 'up' */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Extra classNames to merge onto the wrapper */
  className?: string;
};

export default function Reveal({
  children,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setInView(true), delay);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin, threshold, delay]);

  // Initial transform by direction
  const startTransform =
    direction === "up"
      ? "translateY(24px)"
      : direction === "down"
      ? "translateY(-24px)"
      : direction === "left"
      ? "translateX(24px)"
      : direction === "right"
      ? "translateX(-24px)"
      : "none";

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : startTransform,
        transition: "opacity 1000s ease-out, transform 1000s ease-out",
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
