"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  src?: string;
  width?: number;
  height?: number;
  horizontalPaddingPct?: number; // margin from edges (% of vw)
  verticalCenterPct?: number;    // baseline vertical position (0..1)
  verticalAmplitudePct?: number; // vertical wiggle amplitude (0..0.5)
  zigzagCycles?: number;         // vertical zig-zag cycles over full page
  spinDegreesPerPage?: number;   // total spin degrees from top -> bottom
  wobbleDegrees?: number;        // extra tilt synced to the zig-zag sine
  horizontalScrollsToFinish?: number; // viewport heights for one full sine cycle
};

export default function FloatingCloud({
  src = "/images/cloud.svg",
  width = 150,
  height = 150,
  horizontalPaddingPct = 5,
  verticalCenterPct = 0.75, // slightly down by default
  verticalAmplitudePct = 0.15,
  zigzagCycles = 2,
  spinDegreesPerPage = 90,
  wobbleDegrees = 8,
  horizontalScrollsToFinish = 1.5,
}: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0, angle: 0 });
  const rafRef = useRef<number | null>(null);
  const latestScrollY = useRef(0);
  const vwRef = useRef(0);
  const vhRef = useRef(0);

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const compute = () => {
    const scrollTop = latestScrollY.current;
    const vw = vwRef.current;
    const vh = vhRef.current;

    // --- Vertical progress across page ---
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pageProgress = docHeight > 0 ? clamp(scrollTop / docHeight, 0, 1) : 0;

    // --- Horizontal path: start from CENTER and go LEFT first ---
    const horizDenom = Math.max(1, horizontalScrollsToFinish * vh);
    const t = scrollTop / horizDenom;

    // sine wave oscillation: 0=center, +1=left, -1=right
    const sine = Math.sin(t * Math.PI * 2);

    const pad = (horizontalPaddingPct / 100) * vw;
    const minX = pad;
    const maxX = vw - pad - width;
    const centerX = vw / 2 - width / 2;

    // map sine to x position (center → left → center → right → center …)
    const x = clamp(centerX - sine * (centerX - minX), minX, maxX);

    // --- Vertical zigzag movement ---
    const phase = pageProgress * (Math.PI * 2 * zigzagCycles);
    const centerY = clamp(verticalCenterPct, 0, 1) * vh;
    const amplitude = clamp(verticalAmplitudePct, 0, 0.5) * vh;

    // initial vertical position respects verticalCenterPct
    const initialY = centerY - height / 2;
    const y =
      scrollTop === 0
        ? initialY
        : clamp(centerY + Math.sin(phase) * amplitude - height / 2, 0, vh - height);

    // --- Rotation (spin + wobble) ---
    const spin = (spinDegreesPerPage * t) % 360;
    const wobble = wobbleDegrees * Math.sin(phase + Math.PI / 2);
    const angle = scrollTop === 0 ? 0 : spin + wobble;

    setPos({ x, y, angle });
  };

  useEffect(() => {
    const setDims = () => {
      vwRef.current = window.innerWidth;
      vhRef.current = window.innerHeight;
      compute();
    };

    const onScroll = () => {
      latestScrollY.current = window.scrollY;
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          compute();
        });
      }
    };

    const onResize = () => setDims();

    setDims();
    latestScrollY.current = window.scrollY;
    compute();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    width,
    height,
    horizontalPaddingPct,
    verticalCenterPct,
    verticalAmplitudePct,
    zigzagCycles,
    spinDegreesPerPage,
    wobbleDegrees,
    horizontalScrollsToFinish,
  ]);

  return (
    <div
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: -10,
        pointerEvents: "none",
        willChange: "transform,left,top",
        transform: `rotate(${pos.angle}deg)`,
        transformOrigin: "50% 50%",
      }}
      aria-hidden
    >
      <Image
        src={src}
        alt="floating cloud"
        width={width}
        height={height}
        priority
      />
    </div>
  );
}
