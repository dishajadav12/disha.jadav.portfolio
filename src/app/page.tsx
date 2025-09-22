import React from 'react';
import { HomeSection, AboutSection, EducationSection, ExperienceSection, ProjectsSection, ContactSection } from '../components';

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
