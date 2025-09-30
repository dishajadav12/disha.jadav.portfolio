import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import TechStackIcons from "./techStackIcons";

export default function AboutSection() {
  return (
    <section id="about" className="section ">
      <div className="flex justify-end mr-20">
              <div className="absolute -left-40 -z-10 rotate-[20deg]">
        <Image src={"/images/rocket.svg"} alt="" width={800} height={800} />
      </div>
   <div className="w-[70%] h-[680px] mt-20 overflow-hidden p-4">
      <div
        className="
          grid grid-cols-1 lg:grid-cols-3
          auto-rows-fr                         
          lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]  
          gap-4 w-full h-full
        "
      >
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#001939]"
          className="py-8"
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Hi, I’m Disha Jadav 
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
             — I build clean, fast web apps.
            </p>
            <p className="mt-10 text-left text-base/6 text-neutral-200">
Front-end-leaning full-stack developer who loves turning rough ideas into polished, accessible experiences - now weaving AI/LLM features into intuitive UIs            </p>
          </div>
        </WobbleCard>

      <WobbleCard
  containerClassName="col-span-1 bg-[#0375a2] saturate-0"
  className="relative min-h-64 p-0 overflow-hidden rounded-2xl"
>
  <Image
    src="/images/disha.jpeg"
    alt="disha"
    fill
    className="object-cover "
    priority
  />
</WobbleCard>

        {/* <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 h-full bg-blue-900"
          className="py-8"
        > */}
          <div className="col-span-1 lg:col-span-3  h-full rounded-2xl p-8 ">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
Tech Stack            </h2>
            <div className="mt-6">
                    <TechStackIcons />

            </div>
          </div>
        {/* </WobbleCard> */}
      </div>
  </div>
      </div>

    </section>
  );
}
