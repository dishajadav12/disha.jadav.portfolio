"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export type ProjectItem = {
  title: string;
  link?: string;
  image: string;
  description: string;
};

export default function ProjectCarousel({ items }: { items: ProjectItem[] }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const count = items?.length ?? 0;
  const clamp = useCallback((n: number) => (count === 0 ? 0 : (n + count) % count), [count]);

  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const go   = useCallback((i: number) => setIndex(clamp(i)), [clamp]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch swipe
  function onTouchStart(e: React.TouchEvent) { startX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
    startX.current = null;
  }

  // Auto-rotate (6s)
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => clamp(i + 1)), 6000);
    return () => clearInterval(id);
  }, [count, clamp]);

  const hasItems = (items?.length ?? 0) > 0;
  const active = hasItems ? items[index] : null;

  return (
    <section className="w-full flex justify-center" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Wrapper: 80% width */}
      <div className="w-4/5 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Projects</h2>

        <div aria-hidden className="h-8" />

        {!hasItems ? (
          <div className="w-full">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-white/70">No projects to display.</p>
            </div>
          </div>
        ) : (
          <div className="grid w-full gap-6 md:gap-8 mt-4 md:mt-10 grid-cols-1 lg:grid-cols-[auto_1fr_1fr_auto] items-stretch">
            {/* Prev (desktop) */}
            <div className="hidden lg:flex items-center justify-center">
              <button
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            {/* TEXT */}
            <div key={`text-${index}`} className="order-2 lg:order-none flex flex-col justify-center items-center text-center h-full fade-in">
              <h3 className="text-xl md:text-2xl font-bold text-white/90">{active!.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed max-w-prose">{active!.description}</p>
              {active!.link && (
                <a
                  href={active!.link}
                  target={active!.link.startsWith("http") ? "_blank" : undefined}
                  rel={active!.link.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="mt-5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  Visit
                </a>
              )}
            </div>

            {/* IMAGE (mobile chevrons overlay here) */}
            <div className="order-1 lg:order-none w-full flex justify-center">
              <div
                key={`image-${index}`}
                className="relative w-full max-w-2xl aspect-[16/10] rounded-xl overflow-hidden border border-white/10 fade-in"
              >
                <Image
                  src={active!.image}
                  alt={active!.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                  priority
                />

                {/* Mobile prev (left on image) */}
                <button
                  onClick={prev}
                  className="lg:hidden absolute top-1/2 -translate-y-1/2 left-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition z-10"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Mobile next (right on image) */}
                <button
                  onClick={next}
                  className="lg:hidden absolute top-1/2 -translate-y-1/2 right-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition z-10"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Preload neighbors */}
              <div className="sr-only" aria-hidden>
                <img src={items[clamp(index - 1)].image} alt="" />
                <img src={items[clamp(index + 1)].image} alt="" />
              </div>
            </div>

            {/* Next (desktop) */}
            <div className="hidden lg:flex items-center justify-center">
              <button
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* NAV below */}
            <div className="order-3 lg:col-span-4 flex flex-col items-center justify-center gap-3 mt-4 md:mt-10">
              <div className="flex items-center gap-2">
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
            </div>
          </div>
        )}
      </div>

      {/* fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 400ms ease-in; }
      `}</style>
    </section>
  );
}
