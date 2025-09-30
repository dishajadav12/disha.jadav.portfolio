import Image from "next/image";
import React from "react";
import {
  TextRevealCard,
} from "./ui/text-reveal-card";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="section py-20 flex flex-col items-center justify-center"
    >
      {/* Saturn */}
      <div className="absolute bottom-0 right-20 -z-10">
        <div className="">
          <Image
            src="/images/saturn.svg"
            alt="Saturn"
            width={300}
            height={300}
          />
        </div>
      </div>
 <div className=" flex items-center justify-center">
    </div>
      {/* Card wrapper (full screen width) */}
      <div className="flex items-center justify-center">
        
        <TextRevealCard
          text="DISHA JADAV"
          revealText="dishaa.jadav"
        >
          {/* <TextRevealCardDescription>
            Welcome aboard my cosmic portfolio!
          </TextRevealCardDescription> */}
        </TextRevealCard>
        {/* I navigate the universe of full-stack development, building stellar experiences and launching scalable web applications. Buckle up and explore my galaxy of projects. */}
      </div>

      {/* UFO */}
      <div className="absolute top-18 left-10 -z-10">
        <div className="motion-safe:animate-pulse hover:[animation-play-state:paused]">
          <Image src={"/images/ufo.svg"} alt="" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
