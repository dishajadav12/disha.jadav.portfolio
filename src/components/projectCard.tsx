"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "Inn Sync — Rental Management Platform",
    link: "https://innsync-gamma.vercel.app",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2560&auto=format&fit=crop",
    description:
      "Built full rental workflow: CRUD listings, calendars, filters, and role-based access. Integrated Stripe Checkout and Webhooks with Prisma on Supabase PostgreSQL to prevent overlapping bookings and duplicate charges.",
  },
  {
    title: "iNotebook — Note-Taking App",
    link: "https://inotebook-client-eight.vercel.app",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2560&auto=format&fit=crop",
    description:
      "Secure note app with JWT authentication, protected routes, and private CRUD. REST API in Node.js/Express + MongoDB, adopted by 30+ users with robust validation and error handling.",
  },
  {
    title: "TaskBoard",
    link: "https://652927227aab9b1c45450823--taupe-longma-45a436.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=2560&auto=format&fit=crop",
    description:
      "Daily activity tracker and note-taking app with drag-and-drop, add, edit, and delete functionalities built using React and local state management.",
  },
  {
    title: "newxXplorer — News Exploration App",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1522202222206-7b2cc5c29c7f?q=80&w=2560&auto=format&fit=crop",
    description:
      "ReactJS-based news discovery website featuring real-time updates, category filters, and a sleek, modern interface for exploring top headlines.",
  },
  {
    title: "Binge Show",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2560&auto=format&fit=crop",
    description:
      "Developed a ReactJS project using the TVMaze API to display a list of TV shows and their details with a two-screen flow — one for show listings and another for detailed summaries.",
  },
  {
    title: "Text Utils",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2560&auto=format&fit=crop",
    description:
      "My first ReactJS project providing basic text utilities such as word and letter counts, text case conversion, and filtration features.",
  },
  {
    title: "Stack Overflow Clone",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2560&auto=format&fit=crop",
    description:
      "A full-stack MERN project replicating Stack Overflow. Supports user authentication, question posting, answers, and voting, ensuring real-time updates and smooth interactions.",
  },
  {
    title: "Image Caption Generator (Deep Learning)",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop",
    description:
      "Deep learning project combining CNN for image feature extraction and RNN for text generation with attention mechanism. Trained on COCO/Flickr30k datasets for autonomous image captioning.",
  },
  {
    title: "Automatic Vehicle Accident Alarm System (IoT)",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2560&auto=format&fit=crop",
    description:
      "NodeMCU and MPU6050-based IoT system for road accident detection. Integrated GPS, sensors, and multiple communication protocols (cellular, Wi-Fi, Bluetooth, SMS) for emergency alerts.",
  },
  {
    title: "Bookstore — Tatvasoft Internship Project",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2560&auto=format&fit=crop",
    description:
      "Developed during internship at Tatvasoft using the company’s API. Built a full-featured bookstore with role-based authentication, product management, and responsive UI using React and Material UI.",
  },
];

export function ProjectShowcase() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {projects.map((project, index) => (
        <CardContainer key={index} className="inter-var z-50 cursor-pointer">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-700 dark:text-white"
            >
              {project.title}
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={project.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title}
              />
            </CardItem>

            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="a"
                href={project.link}
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-medium text-blue-600 dark:text-emerald-400"
              >
                Visit →
              </CardItem>

              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                View Details
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
