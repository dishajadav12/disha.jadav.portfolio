import React from "react";
import TechStackIcons from "./techStackIcons";
import WavesBackdrop from "./ui/wave-animation";
import Image from "next/image";

export default function AboutSection() {
  return (
    // CHANGED: cap the section to 700px and make children stretch to fill it
    <section id="about" className="flex flex-col items-center py-6 overflow-hidden">
      {/* remove the top-level WavesBackdrop */}

      <WavesBackdrop opacity={0.5} height="54vh" />

      {/* CHANGED: make the inner container fill the section height */}
      <div className="mt-12 w-full max-w-[74rem] mx-auto px-4 h-full">
        {/* NEW: About + Photo Card */}
        {/* CHANGED: force equal column heights by stretching items and the grid to full height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 h-full items-stretch">
          {/* About copy */}
          <div className="lg:col-span-7 h-full">
            {/* CHANGED: make the card fill the column height */}
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/10 text-xs">
                <span>✨</span>
                <span>Hi! I love turning ideas into delightful products</span>
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>

              <p className="mt-3 text-sm md:text-base text-white/70 leading-6">
                I’m a front-end engineer focused on building fast, accessible interfaces with
                clean architecture and crisp micro-interactions. I care a lot about design systems,
                performance, and shipping great DX for teams.
              </p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🎯</span>
                  <span><span className="text-white font-medium">Product-minded:</span> pragmatic scope, measurable outcomes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🚀</span>
                  <span><span className="text-white font-medium">Performance:</span> Core Web Vitals, bundle budgets, a11y first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🧩</span>
                  <span><span className="text-white font-medium">Design Systems:</span> reusable components, theming, documentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🤝</span>
                  <span><span className="text-white font-medium">Collaboration:</span> pairing with designers & shipping fast.</span>
                </li>
              </ul>

              {/* Quick stats / tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                <TechStackIcons />
              </div>

              {/* optional spacer to push content evenly if needed */}
              <div className="mt-auto" />
            </div>
          </div>

          {/* Photo card */}
<div className="lg:col-span-5 h-full">
  {/* remove overflow-hidden so content isn't cut; keep equal height */}
  <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-sm flex flex-col">
    {/* FIX: use a fixed (smaller) image height instead of flex-1 */}
    <div className="h-56 sm:h-64 lg:h-72 w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
      <Image
        src="/me.jpg"
        alt="Your Name"
        className="h-full w-full object-cover object-center"
        width={1200}
        height={1500}
        priority={false}
      />
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-semibold">Your Name</h3>
      <p className="text-xs text-white/60">Frontend Engineer • UI/UX</p>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          { k: "Years", v: "5+" },
          { k: "Projects", v: "40+" },
          { k: "Coffee", v: "∞" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-white/10 p-3">
            <div className="text-xl font-semibold">{s.v}</div>
            <div className="text-[10px] uppercase tracking-wide text-white/60">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>

        {/* (kept) your original TechStackIcons block */}
        {/* You can remove this if you prefer only the About section above */}
      </div>
    </section>
  );
}
