import Image from 'next/image';
import React from 'react';
import { Timeline } from './ui/timeline';

// One fixed-size thumbnail used everywhere
function FixedThumb({
  src,
  alt,
  shadow = 'shadow-[0_0_24px_rgba(0,255,255,0.1)]',
}: {
  src: string;
  alt: string;
  shadow?: string;
}) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden ${shadow}`}
      // 👇 fixed dimensions — same on all screens
      style={{ width: 300, height: 200 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="300px"             // stays 300px wide (no responsive switching)
        className="object-cover"  // crop to fill the box consistently
        priority={false}
      />
    </div>
  );
}

export default function JourneySection() {
  const data = [
    {
      title: 'Aug 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Embarked on a new chapter — pursuing my Master’s in Computer Software Engineering at
            <span className="text-[rgba(0,255,255,1)]"> San José State University</span>, exploring advanced software systems and AI-driven development.
          </p>
          {/* Using flex so fixed-size thumbs don’t stretch */}
          <div className="flex flex-wrap gap-4">
            <FixedThumb src="/images/sjsu-1.png" alt="SJSU campus" />
            <FixedThumb src="/images/sjsu-2.png" alt="SJSU life" />
          </div>
        </div>
      ),
    },
    {
      title: 'May 2024 — Jul 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Worked as a <span className="text-[rgba(0,255,255,1)]">Full Stack Developer</span> at NeuralWeb Technologies,
            contributing to <span className="text-indigo-400">Backpack Healthcare</span> — a US-based mental health startup.
            Built core app and web platform features, gaining hands-on experience with scalable architecture and real-world deployments.
          </p>
          <div className="flex flex-wrap gap-4">
            <FixedThumb src="/images/neuralweb-1.png" alt="work sample" />
            <FixedThumb src="/images/neuralweb-2.png" alt="project preview" />
          </div>
        </div>
      ),
    },
    {
      title: 'Jan 2024 — Apr 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Completed a <span className="text-[rgba(0,255,255,1)]">Software Engineering Internship</span> at Epistic Technologies
            as part of my academic curriculum — gaining foundational experience in full-stack development, APIs, and agile teamwork.
          </p>
          <div className="flex flex-wrap gap-4">
            <FixedThumb
              src="/images/epistic-2.png"
              alt="internship project"
              shadow="shadow-[0_0_24px_rgba(56,189,248,0.15)]"
            />
            <FixedThumb
              src="/images/epistic-1.png"
              alt="internship project"
              shadow="shadow-[0_0_24px_rgba(56,189,248,0.15)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2020 — 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Graduated with a <span className="text-[rgba(0,255,255,1)]">Bachelor’s in Computer Engineering</span> from
            <span className="text-[rgba(0,255,255,0.1)]"> A.D. Patel Institute of Technology</span>.
            Built a strong foundation in programming, software design, and project-based learning that sparked my passion for full-stack development.
          </p>
          <div className="flex flex-wrap gap-4">
            <FixedThumb src="/images/adit-1.png" alt="college life" />
            <FixedThumb src="/images/adit-2.png" alt="project work" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="journey" className="min-h-screen flex flex-col items-center py-6">
      <div className="relative max-w-7xl overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
