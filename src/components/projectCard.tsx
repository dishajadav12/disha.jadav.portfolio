import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { FlowNode, ProjectItem } from "@/lib/project-data";

function FlowPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-md border border-cyan-300/30 bg-[rgba(0,15,29,0.85)] px-1.5 py-1 text-[10px] xl:px-2 xl:text-[11px] font-medium text-cyan-100/90">
      {children}
    </span>
  );
}

// Blueprint-style architecture sketch for projects without a screenshot
function FlowDiagram({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08),transparent_70%)] px-4">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:20px_20px]"
      />
      <span className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.16em] text-white/35">
        Architecture
      </span>
      <div className="relative flex items-center justify-center gap-1 xl:gap-1.5">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {i > 0 && <ArrowRight aria-hidden className="h-3 w-3 xl:h-3.5 xl:w-3.5 shrink-0 text-cyan-300/60" />}
            {typeof node === "string" ? (
              <FlowPill>{node}</FlowPill>
            ) : (
              <div className="flex flex-col items-center gap-1">
                {node.items.map((item) => (
                  <FlowPill key={item}>{item}</FlowPill>
                ))}
                {node.label && (
                  <span className="text-[10px] uppercase tracking-wider text-white/40">{node.label}</span>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const { title, category, pitch, highlights, stack, link, image, flow } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_32px_rgba(0,255,255,0.08)]">
      {/* Header visual: screenshot, or the architecture flow */}
      <div className="relative h-44 overflow-hidden border-b border-white/10">
        {image ? (
          <>
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[rgba(0,15,29,0.5)] to-transparent" />
          </>
        ) : (
          flow && <FlowDiagram nodes={flow} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-[0.14em] text-cyan-300/80">{category}</p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs transition hover:border-cyan-300/50 hover:bg-white/10 !text-white !no-underline"
            >
              Live <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/70">{pitch}</p>

        <ul className="mt-4 space-y-2 text-sm leading-snug text-white/60">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
