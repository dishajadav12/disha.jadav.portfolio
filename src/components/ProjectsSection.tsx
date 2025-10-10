import Image from 'next/image';
import React from 'react';
import { ProjectCards } from './projectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center py-6">
      <h2 className="text-2xl font-semibold">Projects</h2>
    <ProjectCards  />
    </section>
  );
}
