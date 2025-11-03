"use client";
import * as Tabler from "@tabler/icons-react";
import type { ElementType } from "react";
import { motion } from "framer-motion";

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
  ...Tabler,
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
  { name: "Python", icon: "IconBrandPython" },
  { name: "Java", icon: "DiJava" },
  { name: "Go", icon: "IconBrandGolang" },
  { name: "C++", icon: "SiCplusplus" },
  { name: "TypeScript", icon: "IconBrandTypescript" },
  { name: "JavaScript", icon: "IconBrandJavascript" },
  { name: "React", icon: "IconBrandReact" },
  { name: "Next.js", icon: "IconBrandNextjs" },
  { name: "Redux", icon: "IconBrandRedux" },
  { name: "Node.js", icon: "IconBrandNodejs" },
  { name: "Express", icon: "SiExpress" },
  { name: "HTML", icon: "IconBrandHtml5" },
  { name: "CSS", icon: "IconBrandCss3" },
  { name: "REST APIs", icon: "IconApi" },
  { name: "Microservices", icon: "IconTopologyStar3" },
  { name: "PostgreSQL", icon: "DiPostgresql" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "Supabase", icon: "SiSupabase" },
  { name: "Git", icon: "IconBrandGit" },
  { name: "GitHub", icon: "IconBrandGithub" },
  { name: "Bitbucket", icon: "SiBitbucket" },
  { name: "Jira", icon: "SiJira" },
  { name: "Postman", icon: "SiPostman" },
  { name: "Figma", icon: "SiFigma" },
  { name: "AWS", icon: "BiLogoAws" },
  { name: "Kubernetes", icon: "SiKubernetes" },
  { name: "Docker", icon: "SiDocker" },
  { name: "CI/CD", icon: "IconGitMerge" },
  { name: "Agile/Scrum", icon: "DiScrum" },
];

export default function TechStackIcons() {
  return (
    // tightened spacing since chips are smaller
    <div className="flex flex-wrap gap-2 relative z-10">
      {ITEMS.map((t, i) => {
        const IconCmp: ElementType =
          ((ICONS as unknown) as Record<string, ElementType>)[t.icon] ||
          Tabler.IconCode;

        // smaller wobble for smaller chips
        const dx = 2 + (i % 2); // 2..3px
        const dy = 1 + (i % 3); // 1..3px

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
              delay: i * 0.08,
            }}
          >
            {/* CHANGED: bubble is fixed at w-10 h-10 */}
            <div
              className="h-10 w-10 ml-1 rounded-full border border-white/15
                         bg-white/10 backdrop-blur-sm shadow-sm
                         flex items-center justify-center
                         transition hover:bg-white/15"
              aria-label={t.name}
              aria-describedby={id}
              role="img"
            >
              {/* CHANGED: icon size reduced to 16 for better padding inside 40x40 bubble */}
              <IconCmp size={16} className="text-white/90" />
            </div>

            {/* tooltip */}
            <div
              id={id}
              className="pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2
                         whitespace-nowrap rounded-md bg-black/80 px-2 py-1
                         text-[11px] text-white opacity-0 shadow
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

