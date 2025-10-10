// StickyScroll.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const scrollColRef = useRef<HTMLDivElement | null>(null);

  // LEFT column drives the progress
  const { scrollYProgress } = useScroll({
    container: scrollColRef,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const bps = content.map((_, i) => i / cardLength);
    const idx = bps.reduce(
      (acc, bp, i) =>
        Math.abs(latest - bp) < Math.abs(latest - bps[acc]) ? i : acc,
      0
    );
    setActiveCard(idx);
  });

  return (
    // Whole section sticks to viewport; no bg animation, no overflow here
    <div className="sticky top-0 z-50 h-screen w-full">
      <div className="relative mx-auto flex h-full max-w-6xl justify-center gap-8 px-6 py-8">
        {/* LEFT: scrollable column showing ALL items */}
        <div
          ref={scrollColRef}
          className="relative h-full max-w-2xl overflow-y-auto pr-2 scrollbar-hide"
        >
          <div className="pb-24">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-10 max-w-sm text-lg text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* RIGHT: sticky preview (no bg gradient) */}
        <div
          className={cn(
            "sticky top-8 hidden h-[70vh] w-80 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur lg:block",
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
    </div>
  );
};
