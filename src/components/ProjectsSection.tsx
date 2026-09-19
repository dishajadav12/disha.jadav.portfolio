import React from 'react';
import { IconBrandGithub } from '@tabler/icons-react';
import ProjectCard from './projectCard';
import Reveal from './reveal';
import { projects } from '@/lib/project-data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center py-6 px-8">
      <div className="w-full max-w-6xl mx-auto md:mt-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60">
            Systems I&apos;ve designed and built, from event-driven pipelines to AI agents.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/dishajadav12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:border-cyan-300/50 hover:bg-white/10 !text-white !no-underline"
          >
            <IconBrandGithub aria-hidden className="h-4 w-4" />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
