"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

// const projects = [
//   {
//     title: "Inn Sync — Rental Management Platform",
//     link: "https://innsync-gamma.vercel.app",
//     image:
//       "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "Built full rental workflow: CRUD listings, calendars, filters, and role-based access. Integrated Stripe Checkout and Webhooks with Prisma on Supabase PostgreSQL to prevent overlapping bookings and duplicate charges.",
//   },
//   {
//     title: "iNotebook — Note-Taking App",
//     link: "https://inotebook-client-eight.vercel.app",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "Secure note app with JWT authentication, protected routes, and private CRUD. REST API in Node.js/Express + MongoDB, adopted by 30+ users with robust validation and error handling.",
//   },
//    {
//     title: "Image Caption Generator (Deep Learning)",
//     link: "#",
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "Deep learning project combining CNN for image feature extraction and RNN for text generation with attention mechanism. Trained on COCO/Flickr30k datasets for autonomous image captioning.",
//   },
//   {
//     title: "TaskBoard",
//     link: "https://652927227aab9b1c45450823--taupe-longma-45a436.netlify.app/",
//     image:
//       "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "Daily activity tracker and note-taking app with drag-and-drop, add, edit, and delete functionalities built using React and local state management.",
//   },
//   {
//     title: "newxXplorer — News Exploration App",
//     link: "#",
//     image:
//       "https://images.unsplash.com/photo-1522202222206-7b2cc5c29c7f?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "ReactJS-based news discovery website featuring real-time updates, category filters, and a sleek, modern interface for exploring top headlines.",
//   },

//   {
//     title: "Stack Overflow Clone",
//     link: "#",
//     image:
//       "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "A full-stack MERN project replicating Stack Overflow. Supports user authentication, question posting, answers, and voting, ensuring real-time updates and smooth interactions.",
//   },
//     {
//     title: "Text Utils",
//     link: "#",
//     image:
//       "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "My first ReactJS project providing basic text utilities such as word and letter counts, text case conversion, and filtration features.",
//   },
 
//   {
//     title: "Automatic Vehicle Accident Alarm System (IoT)",
//     link: "#",
//     image:
//       "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2560&auto=format&fit=crop",
//     description:
//       "NodeMCU and MPU6050-based IoT system for road accident detection. Integrated GPS, sensors, and multiple communication protocols (cellular, Wi-Fi, Bluetooth, SMS) for emergency alerts.",
//   },


// ];
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function ProjectCards() {
  return (
    <div className="w-full mt-20 py-4">
      <StickyScroll content={content} />
    </div>
  );
}
