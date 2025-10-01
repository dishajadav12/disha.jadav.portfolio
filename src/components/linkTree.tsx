'use client';
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileAnalytics,

  IconMail,

} from "@tabler/icons-react";

export function LinkTree() {
  const links = [
   

    {
      title: "Resume",
      icon: (
        <IconFileAnalytics className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "/Disha_Jadav_Resume.pdf",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/disha-jadav-606484209/",
    },
   
    {
      title: "Email",
      icon: (
        <IconMail  className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "mailto:dishajadav12402@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://x.com/diishaa12_",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://github.com/dishajadav12",
    },
  ];
  return (
    <div className="fixed top-10 right-4 h-[35rem] w-full z-50">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
