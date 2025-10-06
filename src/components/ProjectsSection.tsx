import Image from 'next/image';
import React from 'react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section container  py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid gap-6 mt-6 sm:grid-cols-2">
        <article className="p-4 border rounded">
          <h3 className="font-medium">Project One</h3>
          <p className="text-sm mt-2">A short description of the project.</p>
        </article>
        <article className="p-4 border rounded">
          <h3 className="font-medium">Project Two</h3>
          <p className="text-sm mt-2">A short description of the project.</p>
        </article>
      </div>
    </section>
  );
}
