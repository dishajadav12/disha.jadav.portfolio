export type ProjectItem = {
  title: string;
  link?: string;
  image: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Inn Sync — Rental Management Platform",
    link: "https://innsync-gamma.vercel.app",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop",
    description:
      "Built full rental workflow: CRUD listings, calendars, filters, and role-based access. Stripe Checkout + Webhooks with Prisma on Supabase Postgres to prevent overlapping bookings and duplicate charges.",
  },
  {
    title: "iNotebook — Note-Taking App",
    link: "https://inotebook-client-eight.vercel.app",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop",
    description:
      "Secure note app with JWT auth, protected routes, and private CRUD. REST API in Node.js/Express + MongoDB; robust validation & error handling.",
  },
  {
    title: "Image Caption Generator (Deep Learning)",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
    description:
      "CNN for image features + RNN with attention for captions. Trained on COCO/Flickr30k for autonomous image captioning.",
  },
  {
    title: "TaskBoard",
    link: "https://652927227aab9b1c45450823--taupe-longma-45a436.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1920&auto=format&fit=crop",
    description:
      "Daily activity tracker and note-taking app with drag-and-drop, add, edit, and delete functionalities built using React and local state.",
  },
  {
    title: "newxXplorer — News Exploration App",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1522202222206-7b2cc5c29c7f?q=80&w=1920&auto=format&fit=crop",
    description:
      "React-based news discovery site with category filters and a sleek interface for exploring top headlines.",
  },
];
