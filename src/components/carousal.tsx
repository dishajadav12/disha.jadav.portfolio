"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectItem } from "@/lib/project-data";

export default function ProjectCarousel({ items }: { items: ProjectItem[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const clamp = (n: number) => (n + count) % count;
  const prev = () => setIndex((i) => clamp(i - 1));
  const next = () => setIndex((i) => clamp(i + 1));
  const go = (i: number) => setIndex(clamp(i));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const startX = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
    startX.current = null;
  }

  const active = items[index];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
      </div>

      <div aria-hidden className="h-8" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
        {/* LEFT: text */}
        <div className="order-2 lg:order-1">
          <h3 className="text-xl md:text-2xl font-bold text-white/90">{active.title}</h3>
          <p className="mt-3 text-white/70 leading-relaxed">{active.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="ml-1 flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {active.link && (
              <a
                href={active.link}
                target={active.link.startsWith("http") ? "_blank" : undefined}
                rel={active.link.startsWith("http") ? "noreferrer noopener" : undefined}
                className="ml-auto rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90 hover:bg-white/10 transition"
              >
                Visit
              </a>
            )}
          </div>
        </div>

        {/* RIGHT: iPhone image */}
       
      </div>
    </section>
  );
}
