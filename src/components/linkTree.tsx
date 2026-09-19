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
    // Pinned to the viewport's bottom-right corner (clear of the iOS home indicator)
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:right-6 w-fit z-50">
      <FloatingDock items={links} />
    </div>
  );
}
