// StickyScroll.tsx
"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: { title: string; description: string; content?: React.ReactNode }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  // Keep the entire section inside the viewport and make *it* the scroll container
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track the scroll progress of the *section's own* scroll (not the page)
  // Framer Motion: with `container`, scrollYProgress goes 0..1 as the container scrolls
  const { scrollYProgress } = useScroll({
    container: sectionRef,
  });

  const cardLength = content.length;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (cardLength === 0) return;

    // Evenly-spaced breakpoints across container progress [0..1]
    const steps = cardLength > 1 ? cardLength - 1 : 1;
    const bps = content.map((_, i) => i / steps);

    const idx = bps.reduce(
      (acc, bp, i) => (Math.abs(latest - bp) < Math.abs(latest - bps[acc]) ? i : acc),
      0
    );
    setActiveCard(idx);
  });

  return (
    // Viewport-contained; add vertical padding so prev/next peek 2–3 lines
    <div className="w-full">
      {/* Title OUTSIDE the scrollable section */}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl text-center font-semibold">Projects</h2>
      </div>

      {/* Add clear space between title and the card section */}
      <div aria-hidden className="h-12" />

      {/* Scrollable card section */}
      <section ref={sectionRef} className="relative max-h-96 w-full overflow-y-auto scrollbar-hide">
        <div className="mx-auto flex max-w-6xl justify-center gap-8 px-6">
          {/* LEFT: scrolled content within the section */}
          <div className="w-full max-w-2xl pt-14">
            {content.map((item, index) => (
              <div key={item.title + index} className="mb-14">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                  className="mt-6 max-w-sm text-lg text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>

          {/* RIGHT: sticky preview, sticks within the section's inner scroll */}
          <div
            className={cn(
              "sticky top-8 hidden h-[40vh] w-80 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur lg:block",
              contentClassName
            )}
          >
            {content[activeCard]?.content ?? (
              <div className="flex h-full items-center justify-center text-slate-300">
                No preview
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
