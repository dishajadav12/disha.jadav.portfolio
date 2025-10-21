"use client";
import React from "react";

const WavesBackdrop: React.FC<{
  className?: string;
  opacity?: number;
  stroke?: string;          // base color of the glow
  height?: string | number; // e.g. "54vh" | 480
}> = ({ className, opacity = 0.55, stroke = "#00FFFF", height = "54vh" }) => {
  const uid = React.useId();

  // centered sine-ish path in 0..100 viewBox
  const d =
    "M 0 50 C 150 10, 300 90, 450 50 S 750 90, 900 50 S 1200 90, 1350 50 S 1650 90, 1800 50";

  return (
    <div
      aria-hidden
      className={`pointer-events-none -rotate-12 absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 ${className || ""}`}
      style={{ opacity, height }}
    >
      <svg viewBox="0 0 1800 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          {/* glowy outline */}
          <filter id={`glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.3" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* flowing gradients (animated INSIDE the stroke) */}
          <linearGradient id={`g1-${uid}`} x1="0" y1="0" x2="1800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor={stroke} stopOpacity="0.25" />
            <stop offset="35%"  stopColor={stroke} stopOpacity="0.95" />
            <stop offset="65%"  stopColor={stroke} stopOpacity="0.25" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.25" />
            <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="-1800 0" dur="14s" repeatCount="indefinite" />
          </linearGradient>

          <linearGradient id={`g2-${uid}`} x1="0" y1="0" x2="1800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor={stroke} stopOpacity="0.2" />
            <stop offset="35%"  stopColor={stroke} stopOpacity="0.9" />
            <stop offset="65%"  stopColor={stroke} stopOpacity="0.2" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.2" />
            <animateTransform attributeName="gradientTransform" type="translate" from="-900 0" to="900 0" dur="11s" repeatCount="indefinite" />
          </linearGradient>

          <linearGradient id={`g3-${uid}`} x1="0" y1="0" x2="1800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor={stroke} stopOpacity="0.18" />
            <stop offset="35%"  stopColor={stroke} stopOpacity="0.85" />
            <stop offset="65%"  stopColor={stroke} stopOpacity="0.18" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.18" />
            <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="-1800 0" dur="9s" repeatCount="indefinite" />
          </linearGradient>
        </defs>

        {/* three stationary lines; tiny vertical wiggle only (keeps inside 0..100) */}
        <g className="w1" transform="translate(0,-14)">
          <path d={d} fill="none" stroke={`url(#g1-${uid})`} strokeWidth="1.75"
            strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"
            filter={`url(#glow-${uid})`} />
        </g>
        <g className="w2" transform="translate(0,0)">
          <path d={d} fill="none" stroke={`url(#g2-${uid})`} strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"
            filter={`url(#glow-${uid})`} />
        </g>
        <g className="w3" transform="translate(0,14)">
          <path d={d} fill="none" stroke={`url(#g3-${uid})`} strokeWidth="1.25" opacity={0.85}
            strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"
            filter={`url(#glow-${uid})`} />
        </g>
      </svg>

      <style jsx>{`
        .w1, .w2, .w3 { animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .w1 { animation-name: wig1; animation-duration: 6s;  animation-direction: alternate; }
        .w2 { animation-name: wig2; animation-duration: 7.2s; animation-direction: alternate-reverse; }
        .w3 { animation-name: wig3; animation-duration: 8s;  animation-direction: alternate; }

        /* micro vertical drift (kept within the 0..100 viewBox) */
        @keyframes wig1 { from { transform: translateY(-16px); } to { transform: translateY(-12px); } }
        @keyframes wig2 { from { transform: translateY(-2px);  } to { transform: translateY(  2px); } }
        @keyframes wig3 { from { transform: translateY(12px);  } to { transform: translateY( 16px); } }
      `}</style>
    </div>
  );
};

export default WavesBackdrop;
