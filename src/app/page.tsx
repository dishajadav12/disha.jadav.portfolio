import React from 'react';
import Navbar from '@/components/navbar';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FloatingCloud from '@/components/FloatingCloud';
import { LinkTree } from '@/components/linkTree';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="font-sans antialiased mx-10">
              <LinkTree />

      <FloatingCloud />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

    </main>
  );
}
