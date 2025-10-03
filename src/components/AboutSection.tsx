import React from "react";
import Image from "next/image";
import TechStackIcons from "./techStackIcons";
import MagicBento, { ParticleCard } from "./ui/magic-bento";

export default function AboutSection() {
  return (
    <section id="about" className="section min-h-screen flex flex-col items-center py-20">


      {/* Pass dynamic cards to MagicBento below the intro */}
      <div className="mt-12 w-full">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="0, 255, 255"
          cards={[
            { title: 'About Me' },
            { title: " Hi, I'm Disha — a Front-end Engineer & UI Enthusiast. I specialize in building fast"},
            { title: " Over the past few years, I’ve worked across teams turning complex problems into elegant performant interfaces. I balance clean code, design detail, and just-enough animation to spark delight." },
            { title: 'Automation', description: 'Streamline workflows', label: 'Efficiency' },
                        { title: 'Automation', description: 'Streamline workflows', label: 'Efficiency' },
                                                { title: 'Automation', description: 'Streamline workflows', label: 'Efficiency' },


          ]}
        />
         <div className="w-full h-96 flex items-center justify-center">
              <TechStackIcons />
            </div>
      </div>
    </section>
  );
}
