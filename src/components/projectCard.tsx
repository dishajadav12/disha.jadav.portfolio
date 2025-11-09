"use client";

import React from "react";
import ProjectCarousel from "./carousal";

/** If you already have these in "@/lib/project-data", delete this block. */
export type ProjectItem = {
  title: string;
  link?: string;
  image: string;
  description: string;
};

const projects: ProjectItem[] = [
  {
    title: "Tommy Chat - AI Game Chat Moderator",
    link: "#",
    image:
      "/images/tommy-chat.png",
    description:
      "An AI-powered in-game chat companion designed to moderate multiplayer conversations in real time. Tommy detects tension, greets new players, and engages in natural, story-driven interactions. Built with FastAPI + Socket.IO backend, Claude AI for personality and reasoning, and Fish Audio TTS for expressive speech generation.",
  },
  {
    title: "Inn Sync - Rental Management Platform",
    link: "https://innsync-gamma.vercel.app",
    image:
      "/images/inn-sync.png",
    description:
      "A full-featured rental platform enabling hosts and guests to manage listings, bookings, and payments seamlessly. Built with Next.js, Prisma, and Supabase PostgreSQL for strong data consistency and role-based permissions. Integrated Stripe Checkout and Webhooks with idempotent actions to prevent overlapping reservations and duplicate payments.",
  },
  {
    title: "iNotebook - Note-Taking App",
    link: "https://inotebook-client-eight.vercel.app",
    image:
      "/images/i-notebook.png",
    description:
      "A secure cloud-based note-taking app allowing users to create, edit, and delete private notes. Features JWT-based authentication, protected routes, and persistent sessions for seamless user experience. Built with a Node.js/Express REST API, MongoDB backend, and modular React frontend with accessibility in mind.",
  },
  
  {
    title: "TaskBoard",
    link: "https://652927227aab9b1c45450823--taupe-longma-45a436.netlify.app/",
    image:
      "/images/task-board.png",
    description:
      "A productivity-focused task management web app for organizing daily activities efficiently. Users can add, edit, delete, and drag tasks between workflow stages to track progress visually. Built with React and local state management, providing a smooth drag-and-drop experience inspired by Kanban boards.",
  },
  {
    title: "Stack Overflow Clone",
    link: "#",
    image:
      "/images/stack-overflow.png",
    description:
      "A full-stack MERN clone of Stack Overflow enabling users to post questions, provide answers, and upvote content. Features JWT-based authentication, dynamic voting system, and a responsive interface. Designed for real-time interaction and scalability with an emphasis on user engagement.",
  },
  {
    title: "Text Utils",
    link: "#",
    image:
      "/images/text-utils.png",
    description:
      "A simple yet powerful text utility app that performs word and letter counts, case conversions, and text filtering. Built using React and JavaScript as an early project to explore component design and state management. Offers real-time feedback and clean UX for quick content analysis.",
  },
  {
    title: "Tin Dog - Landing Page",
    link: "#",
    image:
      "/images/tin-dog.png",
    description:
      "A playful and visually engaging landing page inspired by dating apps — but for dogs! Created as a first web design project using HTML5, CSS3, and Bootstrap. Focused on responsive layouts, visual hierarchy, and typography fundamentals to learn modern web styling techniques.",
  },
];


export default function ProjectCards() {
  return (
    <div className="w-full mt-2 md:mt-20 py-4 flex items-center justify-center">
      <ProjectCarousel items={projects} />
    </div>
  );
}
