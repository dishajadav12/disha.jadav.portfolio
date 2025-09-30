"use client";
import * as Tabler from "@tabler/icons-react";
import type { ElementType } from "react";
import { motion } from "framer-motion";

// react-icons packs (pick what you need)
import { DiPostgresql, DiJava, DiScrum } from "react-icons/di";
import { BiLogoAws } from "react-icons/bi";
import {
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiAmazon,
  SiKubernetes,
  SiDocker,
  SiJira,
  SiPostman,
  SiFigma,
  SiBitbucket,
  SiExpress,
  SiCplusplus,
} from "react-icons/si";

const ICONS = {
  // tabler
  ...Tabler,
  // react-icons
  DiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiAmazon,
  SiKubernetes,
  SiDocker,
  SiJira,
  SiPostman,
  SiFigma,
  SiBitbucket,
  SiExpress,
  DiJava,
  SiCplusplus,
  DiScrum,
  BiLogoAws,
} as const;

type Item = { name: string; icon: keyof typeof ICONS | string };

const ITEMS: Item[] = [
  // Languages (Tabler)
  { name: "Python", icon: "IconBrandPython" },
  { name: "Java", icon: "DiJava" },
  { name: "Go", icon: "IconBrandGolang" },
  { name: "C++", icon: "SiCplusplus" },
  { name: "TypeScript", icon: "IconBrandTypescript" },
  { name: "JavaScript", icon: "IconBrandJavascript" },

  // Frameworks & Libraries
  { name: "React", icon: "IconBrandReact" },
  { name: "Next.js", icon: "IconBrandNextjs" },
  { name: "Redux", icon: "IconBrandRedux" },
  { name: "Node.js", icon: "IconBrandNodejs" },
  { name: "Express", icon: "SiExpress" }, // react-icons
  { name: "HTML", icon: "IconBrandHtml5" },
  { name: "CSS", icon: "IconBrandCss3" },
  { name: "REST APIs", icon: "IconApi" },
  { name: "Microservices", icon: "IconTopologyStar3" },

  // Databases & Tools (mix)
  { name: "PostgreSQL", icon: "DiPostgresql" }, // react-icons
  { name: "MySQL", icon: "SiMysql" }, // react-icons
  { name: "MongoDB", icon: "SiMongodb" }, // react-icons
  { name: "Supabase", icon: "SiSupabase" }, // react-icons
  { name: "Git", icon: "IconBrandGit" },
  { name: "GitHub", icon: "IconBrandGithub" },
  { name: "Bitbucket", icon: "SiBitbucket" }, // react-icons
  { name: "Jira", icon: "SiJira" }, // react-icons
  { name: "Postman", icon: "SiPostman" }, // react-icons
  { name: "Figma", icon: "SiFigma" }, // react-icons

  // Cloud & DevOps (react-icons brands)
  { name: "AWS", icon: "BiLogoAws" },
  { name: "Kubernetes", icon: "SiKubernetes" },
  { name: "Docker", icon: "SiDocker" },
  { name: "CI/CD", icon: "IconGitMerge" }, // Tabler generic fits well
  { name: "Agile/Scrum", icon: "DiScrum" }, // react-icons
];

export default function TechStackIcons() {
  return (
    <div className="flex flex-wrap gap-3 relative z-10">
      {ITEMS.map((t, i) => {
        // look up icon in our combined registry; fall back to a generic Tabler icon
        const IconCmp: ElementType =
          ((ICONS as unknown) as Record<string, ElementType>)[t.icon] ||
          Tabler.IconCode;

        // small per-item movement so they wobble within the card without hitting its border
        const dx = 3 + (i % 3); // 3..5px
        const dy = 2 + (i % 4); // 2..5px

        const id = `tip-${t.name.replace(/\W/g, "").toLowerCase()}`;

        return (
          <motion.div
            key={t.name}
            className="group relative"
            whileHover={{ x: 0, y: 0, transition: { duration: 0.2 } }}

            animate={{ x: [0, dx, 0, -dx, 0], y: [0, -dy, 0, dy, 0] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          >
            {/* glass, full-rounded chip */}
            <div
              className="h-14 w-14 rounded-full border border-white/15
                         bg-white/10 backdrop-blur-sm shadow-sm
                         flex items-center justify-center
                         transition hover:bg-white/15"
              aria-label={t.name}
              aria-describedby={id}
              role="img"
            >
              {/* size prop works for both libraries */}
              <IconCmp size={24} className="text-white/90" />
            </div>

            {/* tooltip (high z-index) */}
            <div
              id={id}
              className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2
                         whitespace-nowrap rounded-md bg-black/80 px-2 py-1
                         text-xs text-white opacity-0 shadow
                         transition-opacity duration-150 group-hover:opacity-100 z-[9999]"
              role="tooltip"
            >
              {t.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Example usage (important bit: add overflow-hidden so wobble stays inside the bordered card)
export function TechStackCard() {
  return (
    <div className="col-span-1 lg:col-span-3 h-full border border-white/10 rounded-2xl p-8 overflow-hidden">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Tech Stack
      </h2>
      <div className="mt-6">
        <TechStackIcons />
      </div>
    </div>
  );
}
