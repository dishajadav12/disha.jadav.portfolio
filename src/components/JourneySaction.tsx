import Image from 'next/image';
import React from 'react';
import { Timeline } from './ui/timeline';
import ReadMore from './ReadMore';

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
          <ReadMore>
            <p className="text-xs font-normal md:text-lg text-neutral-200 mb-4">
              Joined <a
                href="https://myheritagetable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-indigo-400 underline underline-offset-4 hover:!text-indigo-300"
              >Heritage Table</a>, an early-stage AI startup in San Francisco, as the
              <span className="text-[rgba(0,255,255,1)]"> Founding Engineering Intern</span> and sole engineer, owning every architecture decision from the data model to deployment.
              I built the platform end to end with Next.js, TypeScript and tRPC on PostgreSQL and Supabase, with row-level security on user data, a Stripe payments flow with webhook-driven order tracking, and a Capacitor mobile app built from the same codebase.
            </p>
            <p className="text-xs font-normal md:text-lg text-neutral-200 mb-0">
              The core of the product is a set of LLM pipelines on the Claude and Gemini APIs that turn how families actually preserve recipes into structured data. A voice pipeline transcribes and translates spoken recipes across 10+ languages. A vision pipeline reads photos of handwritten recipe cards and extracts structured recipes from them. Vector embeddings power semantic search, so families can search conversationally instead of by keyword. Each pipeline chains several model calls with orchestration, retries and recovery built in. A failed step retries on its own, without rerunning the whole flow or creating duplicate records. I also built real-time collaborative editing with live presence and conflict resolution, and shipped everything to 50+ beta users, working directly with them on requirements and feedback.
            </p>
          </ReadMore>
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
          <ReadMore>
            <p className="text-xs font-normal md:text-lg text-neutral-200 mb-4">
              Worked as a <span className="text-[rgba(0,255,255,1)]">Full Stack Developer</span> at Neural Web Technologies,
              contributing to <span className="text-indigo-400">Backpack Healthcare</span>, a US-based mental health startup connecting children and families with clinicians.
              The platform was a multi-portal system of Node.js APIs and Next.js portals, with a mobile app built on the same stack. I built the scheduling platform in Node.js and GraphQL, with database-level conflict detection across clinician and patient appointments and personal events, plus real-time chat over WebSockets.
            </p>
            <p className="text-xs font-normal md:text-lg text-neutral-200 mb-0">
              On the infrastructure side, I built the event-driven backend: SQS events published after mutations so downstream consumers stay decoupled, Lambda functions for async jobs like notification emails and file processing, and S3 presigned uploads so the server never handles file bytes. I also set up the CI/CD pipeline on AWS ECS with zero-downtime deploys and architected a Redis caching layer. The platform scaled from 2,000 to 7,000+ active users, sustained 10,000+ concurrent users during live events, cut API response time 30%, and lifted weekly retention 15%.
            </p>
          </ReadMore>
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
