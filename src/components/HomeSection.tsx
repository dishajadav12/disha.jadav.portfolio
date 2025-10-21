// components/HomeSection.tsx
"use client"; // ensure client; or use dynamic import for LightRays

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Avoid SSR if LightRays uses window/WebGL
const LightRays = dynamic(() => import("./ui/light-rays"), { ssr: false });

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden pb-20 flex flex-col items-center justify-center"
    >
      {/* Light rays overlay ONLY for the first viewport */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Content above the rays */}
      <div className="relative mt-40 z-10 w-[90%]">
      D I S H A 
      </div>
      <div className="relative z-10 mt-16">
         <Image
                src={'/images/cloud.svg'}
                alt="floating cloud"
                width={150}
                height={150}
                className="animate-pulse"
                priority
              />
      </div>
    </section>
  );
}
