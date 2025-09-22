import Image from 'next/image';
import React from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section container mx-auto py-20">
        
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-4">
        <h3 className="font-medium">Frontend Developer — Example Co.</h3>
        <p className="text-sm text-muted-foreground">Worked on React applications, component libraries and performance optimizations.</p>
      </div>
    </section>
  );
}
