// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// type Props = {
//   src?: string;
//   width?: number;
//   height?: number;
//   // optional tuning
//   horizontalPaddingPct?: number; // how much margin from edges (in % of vw)
//   verticalCenterPct?: number;    // baseline vertical position (0..1)
//   verticalAmplitudePct?: number; // vertical wiggle amplitude (0..0.5)
//   zigzagSpeed?: number;          // larger = faster zigzag
// };

// export default function FloatingCloud({
//   src = "/images/cloud.svg",
//   width = 400,
//   height = 400,
//   horizontalPaddingPct = 5, // keep a little margin from absolute edges
//   verticalCenterPct = 0.35, // baseline vertical position (35% from top)
//   verticalAmplitudePct = 0.15, // wiggle amplitude (15% of viewport height)
//   zigzagSpeed = 280, // higher = slower sine wave
// }: Props) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const rafRef = useRef<number | null>(null);
//   const latestScrollY = useRef(0);
//   const latestVW = useRef<number>(0);
//   const latestVH = useRef<number>(0);

//   // Clamp helper
//   const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

//   // Compute position from scroll & viewport
//   const compute = () => {
//     const scrollTop = latestScrollY.current;
//     const vw = latestVW.current;
//     const vh = latestVH.current;

//     const docHeight =
//       document.documentElement.scrollHeight - window.innerHeight;
//     const progress = docHeight > 0 ? scrollTop / docHeight : 0; // 0..1 over the whole page

//     // Horizontal travel: from left padding to right padding
//     const leftPadding = (horizontalPaddingPct / 100) * vw;
//     const rightPadding = (horizontalPaddingPct / 100) * vw;
//     const maxX = vw - rightPadding - width; // right-most left value so image remains fully visible
//     const minX = leftPadding;               // left-most left value so image remains fully visible
//     const x = clamp(minX + progress * (maxX - minX), minX, maxX);

//     // Vertical zig-zag *inside* viewport
//     const centerY = clamp(verticalCenterPct, 0.0, 1.0) * vh; // baseline
//     const amplitude = clamp(verticalAmplitudePct, 0.0, 0.5) * vh;
//     const yRaw = centerY + Math.sin(scrollTop / zigzagSpeed) * amplitude - height / 2;

//     // Keep image fully on screen vertically
//     const y = clamp(yRaw, 0, vh - height);

//     setPos({ x, y });
//   };

//   useEffect(() => {
//     // Initialize viewport dims
//     const setDims = () => {
//       latestVW.current = window.innerWidth;
//       latestVH.current = window.innerHeight;
//       compute();
//     };

//     const onScroll = () => {
//       latestScrollY.current = window.scrollY;
//       if (rafRef.current == null) {
//         rafRef.current = window.requestAnimationFrame(() => {
//           rafRef.current = null;
//           compute();
//         });
//       }
//     };

//     const onResize = () => {
//       setDims();
//     };

//     setDims();
//     latestScrollY.current = window.scrollY;
//     compute();

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [width, height, horizontalPaddingPct, verticalCenterPct, verticalAmplitudePct, zigzagSpeed]);

//   return (
//     <div
//       style={{
//         position: "fixed",          // stays in viewport across all sections
//         left: `${pos.x}px`,         // full-width travel
//         top: `${pos.y}px`,          // vertical zig-zag within viewport
//         zIndex: 10,                 // keep it visible above backgrounds
//         pointerEvents: "none",      // don't block clicks
//         willChange: "transform, left, top",
//         transform: "translate3d(0,0,0)", // GPU hint
//       }}
//       aria-hidden
//     >
//       <Image src={src} alt="floating cloud" width={width} height={height} priority />
//     </div>
//   );
// }
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
  spinDegreesPerPage?: number;   // total spin degrees from top -> bottom (used as max spin)
  wobbleDegrees?: number;        // extra tilt synced to the zig-zag sine
  horizontalScrollsToFinish?: number; // viewport heights for one edge-to-edge traverse
};

export default function FloatingCloud({
  src = "/images/cloud.svg",
  width = 200,
  height = 200,
  horizontalPaddingPct = 5,
  verticalCenterPct = 0.35,
  verticalAmplitudePct = 0.15,
  zigzagCycles = 2,
  spinDegreesPerPage = 90,
  wobbleDegrees = 8,
  horizontalScrollsToFinish = 1.5, // 1.5 screens to go right -> left
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

    // --- Vertical zig-zag progress (0..1 across the whole page) ---
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pageProgress = docHeight > 0 ? clamp(scrollTop / docHeight, 0, 1) : 0;

    // --- Horizontal triangle wave: ping-pong between right and left ---
    // One edge-to-edge traverse finishes in N * viewport heights of scroll.
    const horizDenom = Math.max(1, horizontalScrollsToFinish * vh);
    const t = scrollTop / horizDenom;      // grows with scroll
    // triangle in [0..1..0..1..] repeating: 0=start(right), 1=left, back to 0=right
    const tri = 1 - Math.abs((t % 2) - 1); // 0->1->0 as t goes 0..2

    // Map to pixel positions while keeping the image fully visible
    const pad = (horizontalPaddingPct / 100) * vw;
    const minX = pad;                    // left-most
    const maxX = vw - pad - width;       // right-most
    // Start at RIGHT (tri=0 => x=maxX), go to LEFT (tri=1 => x=minX), and back
    const x = clamp(maxX - tri * (maxX - minX), minX, maxX);

    // --- Vertical position: exactly `zigzagCycles` sines over page height ---
    const phase = pageProgress * (Math.PI * 2 * zigzagCycles);
    const centerY = clamp(verticalCenterPct, 0, 1) * vh;
    const amplitude = clamp(verticalAmplitudePct, 0, 0.5) * vh;
    const yRaw = centerY + Math.sin(phase) * amplitude - height / 2;
    const y = clamp(yRaw, 0, vh - height);

    // --- Rotation: gentle cumulative spin + wobble synced to zig-zag ---
    // Make spin progress with t (so it keeps feeling alive as horizontal ping-pongs),
    // but cap it so it doesn't spin too wildly (wrap degrees by modulo if you prefer).
    const spin = (spinDegreesPerPage * t) % 360;
    const wobble = wobbleDegrees * Math.sin(phase + Math.PI / 2);
    const angle = spin + wobble;

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
        transform: `translate3d(0,0,0) rotate(${pos.angle}deg)`,
        transformOrigin: "50% 50%",
      }}
      aria-hidden
    >
      <Image src={src} alt="floating cloud" width={width} height={height} priority />
    </div>
  );
}
