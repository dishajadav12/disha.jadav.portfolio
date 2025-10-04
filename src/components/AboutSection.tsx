import React from "react";
import Image from "next/image";
import MagicBento from "./ui/magic-bento";
import TechStackIcons from "./techStackIcons";
import WavesBackdrop from "./ui/wave-animation";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center py-6">
      {/* remove the top-level WavesBackdrop */}

    <WavesBackdrop opacity={0.5} height="54vh" />


      <div className="mt-12 w-full max-w-[74rem] mx-auto px-4">
        
        <MagicBento
          textAutoHide
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          spotlightRadius={300}
          particleCount={12}
          glowColor="0, 255, 255"
          cards={[
            {
              content: (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/disha.jpeg"
                    alt="Disha portrait"
                    fill
                    priority
                    style={{ objectFit: "cover", borderRadius: 12 }}
                  />
                </div>
              ),
            },
            {
              label: "Automation",
              title: "Workflow wins",
              description:
                "Tiny CLIs, codegen, and CI gates that keep teams moving without friction.",
            },
            {
              content: (
                <div className="w-full h-full z-50">
                  <TechStackIcons />
                </div>
              ),
            },
            {
              label: "About Me",
              title: "Hi, I'm Disha — a Front-end Engineer & UI Enthusiast.",
              description:
                "I specialize in building fast, accessible, and delightful UIs. I turn complex problems into elegant, performant interfaces with a design-systems mindset.",
            },
            {
              label: "Focus",
              title: "Performance & DX",
              description:
                "Ship lean UI, measure, iterate. Vite/Next, React 18, RSC, TanStack, Tailwind, shadcn/ui.",
            },
            {
              content: (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/disha.jpeg"
                    alt="Disha portrait 2"
                    fill
                    style={{ objectFit: "cover", borderRadius: 12 }}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
      
    </section>
  );
}
