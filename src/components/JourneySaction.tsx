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
      // 👇 fixed dimensions: same on all screens
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
      title: 'Jul 2026 - Aug 2026',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Joined <a
              href="https://myheritagetable.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-indigo-400 underline underline-offset-4 hover:!text-indigo-300"
            >Heritage Table</a>, an early-stage AI startup in San Francisco, as the
            <span className="text-[rgba(0,255,255,1)]"> Founding Engineering Intern</span> and sole engineer, owning every architecture decision.
            Built the platform end to end with Next.js, TypeScript and tRPC on PostgreSQL/Supabase, plus agentic LLM pipelines on the
            Claude and Gemini APIs: voice transcription across 10+ languages, vision-based document extraction, and RAG-based semantic search, shipped to 50+ beta users.
          </p>
          <div className="flex flex-wrap gap-4">
            <FixedThumb src="/images/heritage-table-1.png" alt="Heritage Table dashboard" />
            <FixedThumb src="/images/heritage-table-2.jpg" alt="Build What You Love event in San Francisco" />
          </div>
        </div>
      ),
    },
    {
      title: 'Aug 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Embarked on a new chapter, pursuing my Master’s in Software Engineering at
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
      title: 'Apr 2024 - Jul 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Worked as a <span className="text-[rgba(0,255,255,1)]">Full Stack Developer</span> at Neural Web Technologies,
            contributing to <span className="text-indigo-400">Backpack Healthcare</span>, a US-based mental health startup.
            Built a Node.js/GraphQL scheduling platform with conflict detection and real-time chat, and architected a Redis caching layer on AWS ECS:
            scaled 2,000 to 7,000+ active users, cut API response time 30%, and lifted weekly retention 15%.
          </p>
          <div className="flex flex-wrap gap-4">
            <FixedThumb src="/images/neuralweb-1.png" alt="work sample" />
            <FixedThumb src="/images/neuralweb-2.png" alt="project preview" />
          </div>
        </div>
      ),
    },
    {
      title: 'Jan 2024 - Apr 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Completed a <span className="text-[rgba(0,255,255,1)]">Software Engineering Internship</span> at Epistic Technologies
            as part of my academic curriculum, gaining foundational experience in full-stack development, APIs, and agile teamwork.
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
      title: '2020 - 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            Graduated with a <span className="text-[rgba(0,255,255,1)]">Bachelor’s in Computer Engineering</span> from
            <span className="text-[rgba(0,255,255,1)]"> A.D. Patel Institute of Technology</span>.
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
