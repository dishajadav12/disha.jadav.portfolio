import React from "react";
import TechStackIcons from "./techStackIcons";
import WavesBackdrop from "./ui/wave-animation";
import Image from "next/image";
import { CometCard } from "./ui/comet-card";

export default function AboutSection() {
  return (
    // CHANGED: cap the section to 700px and make children stretch to fill it
    <section id="about" className="flex flex-col items-center py-6 overflow-hidden">
      {/* remove the top-level WavesBackdrop */}

      {/* <WavesBackdrop opacity={0.5} height="54vh" /> */}

      {/* CHANGED: make the inner container fill the section height */}
      <div className="mt-12 w-full max-w-[80rem] mx-auto px-4 h-full">
        {/* NEW: About + Photo Card */}
        {/* CHANGED: force equal column heights by stretching items and the grid to full height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 h-full items-stretch">
          {/* About copy */}
          <div className="lg:col-span-7 h-full">
            {/* CHANGED: make the card fill the column height */}
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm flex flex-col">
            

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
  <h1  className="text-lg font-semibold mt-2">Disha Jadav</h1>
      <p className="text-xs text-white/60">Software Engineer • UI/UX </p>

              <p className="mt-3 text-sm md:text-base text-white/70 leading-6">
              I&apos;m a software engineer with over 1 year of hands-on experience in designing, building, and maintaining scalable applications. I&apos;m currently pursuing my Master&apos;s in Software Engineering to deepen my understanding of software architecture, design patterns, and enterprise-level technologies. My focus is on writing clean, maintainable code, exploring distributed systems, and improving product reliability.        </p>
  <div className="mt-4">
    
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          { k: "Years", v: "1+" },
          { k: "Projects", v: "10+" },
          { k: "Coffee", v: "∞" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-white/10 p-3">
            <div className="text-xl font-semibold">{s.v}</div>
            <div className="text-[10px] uppercase tracking-wide text-white/60">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
           
              {/* Quick stats / tags */}
           <div className="inline-flex items-center gap-1 px-3 mt-4 py-2 space-x-1.5 rounded-full border border-white/15 bg-white/10 text-xs">
                <span>✨</span>
                <span>I love turning ideas into delightful products</span>
              </div>

              {/* optional spacer to push content evenly if needed */}
              <div className="mt-auto" />
            </div>
          </div>

          {/* Photo card */}
<div className="lg:col-span-5 h-full">
  {/* remove overflow-hidden so content isn't cut; keep equal height */}
  <div className="h-full backdrop-blur p-4 shadow-sm flex flex-col">
    {/* FIX: use a fixed (smaller) image height instead of flex-1 */}
    <div>
      <CometCard>
      <button
        type="button"
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
              alt="Invite background"
              src="/images/disha.jpg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Comet Invitation</div>
          <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
        </div>
      </button>
    </CometCard>
    </div>

  
  </div>
</div>

        </div>

        {/* (kept) your original TechStackIcons block */}
        {/* You can remove this if you prefer only the About section above */}
             <div className="mt-5 flex flex-wrap gap-2">
                <TechStackIcons />
              </div>
      </div>
    </section>
  );
}
