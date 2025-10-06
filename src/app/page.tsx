import React from "react";
import Navbar from "@/components/navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { LinkTree } from "@/components/linkTree";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import JourneySection from "@/components/JourneySaction";

export default function Home() {
  return (
    <main className="font-sans antialiased">
    
      <LinkTree />
      {/* <FloatingCloud /> */}
      <Navbar />

      {/* Hero usually visible immediately; you may skip reveal here */}
      <HomeSection />

      <Reveal delay={100}>
        <AboutSection />
      </Reveal>

      <Reveal delay={100}>
        <JourneySection />
      </Reveal>

      {/* Example of different direction */}
      <Reveal direction="up" delay={100}>
        <ProjectsSection />
      </Reveal>

      <Reveal>
        <ContactSection />
      </Reveal>

      <Footer />
    </main>
  );
}
