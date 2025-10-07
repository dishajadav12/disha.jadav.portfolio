import Image from 'next/image';
import React from 'react';
import { ProjectShowcase } from './projectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className=" flex flex-col items-center  py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>
    <ProjectShowcase  />
    </section>
  );
}
