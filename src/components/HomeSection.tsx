// components/HomeSection.tsx
"use client"; // ensure client; or use dynamic import for LightRays

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";


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
       <div className="relative mt-44 z-10 w-[90%] text-lg md:text-2xl text-center birthstone-regular">
      Portfolio of 
      </div>
      <div className="relative my-10 z-10 w-full md:w-[90%] text-3xl md:text-9xl text-center tracking-[1rem] md:tracking-[2.5rem]">
      D I S H A 
      </div>
       <div className="relative z-10 w-[90%] text-lg md:text-2xl text-center text-gray-400/30">
        <Typewriter
          words={[
            "Software Engineer",
            "Frontend Developer",
            "AI Enthusiast",
            "Exploring Agentic world of AI",
            "UI/UX Designer",
            "Grad Student",
            "Foodieeeee",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </div>
      <div className="relative z-10 mt-16">
         <Image
                src={'/images/cloud.svg'}
                alt="floating cloud"
                width={130}
                height={130}
                className="animate-pulse"
                priority
              />
      </div>
    </section>
  );
}
