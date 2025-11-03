import React from "react";
import TechStackIcons from "./techStackIcons";
import Image from "next/image";
import { CometCard } from "./ui/comet-card";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col items-center py-6 overflow-hidden">
   
      <div className=" -mt-10 md:mt-12 w-full max-w-[80rem] mx-auto text-center px-4 md:pl-24 h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-10 h-full items-stretch">
          <div className="lg:col-span-7 h-full">
            <div className="h-full  backdrop-blur p-6 shadow-sm flex flex-col">
            

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
           
           <div className="inline-flex items-center gap-1 px-3 mt-4 py-2 space-x-1.5 rounded-full border border-white/15 bg-white/10 text-xs">
                <span>✨</span>
                <span>I love turning ideas into delightful products using these Tech Stack:</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <TechStackIcons />
              </div>
            </div>
          </div>

          {/* Photo card */}

<div>
  <CometCard className="md:my-20 z-50">
    <button
      type="button"
      aria-label="View invite F7RA"
      className={cn(
        "flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border border-[rgba(255,255,255,0.06)]",
        "bg-[rgb(0,15,29)] p-2 md:p-4", 
        "shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      )}
      style={{
        transformStyle: "preserve-3d",
        transform: "none",
        opacity: 1,
      }}
    >
      <div className="mx-2 flex-1">
        <div className="relative mt-2 aspect-[3/4] w-full">
          <Image
            loading="lazy"
            alt="Invite background"
            src="/images/Disha-portrait.png"
            fill
            className="absolute inset-0 rounded-[16px] object-cover"
            style={{
              boxShadow: "0 6px 10px rgba(0, 15, 29, 0.4)",
            }}
          />
        </div>
      </div>

      <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-[rgba(236,246,255,0.95)]">
        <div className="text-xs">Software Engineer</div>
        <div className="text-xs text-[rgba(236,246,255,0.6)]">
          MSSE @ SJSU
        </div>
      </div>
    </button>
  </CometCard>
</div>


        </div>

      </div>
    </section>
  );
}
