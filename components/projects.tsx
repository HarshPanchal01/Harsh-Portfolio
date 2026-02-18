"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder, Tag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "OneFinance",
    description:
      "Local-first finance desktop app built with Electron, Vue 3, and SQLite.",
    link: "https://github.com/HarshPanchal01/OneFinancehttps://github.com/HarshPanchal01/OneFinance",
    tech: ["Electron", "Vue 3", "SQLite", "Pinia", "PrimeVue", "Tailwind CSS"],
    gifs: [
      "/assets/createAccounts-ezgif.com-video-to-gif-converter.gif",
      "/assets/transactions-ezgif.com-video-to-gif-converter.gif",
      "/assets/viewanalytics-ezgif.com-video-to-gif-converter.gif",
      "/assets/Dashboard-ezgif.com-video-to-gif-converter.gif",
      "/assets/Filterbylable-ezgif.com-video-to-gif-converter.gif",
      "/assets/addCategories-ezgif.com-video-to-gif-converter.gif",
    ],
    gifsLight: [
      "/assets/createAccounts-ezgif.com-video-to-gif-converter.gif",
      "/assets/transactions-ezgif.com-video-to-gif-converter.gif",
      "/assets/viewanalytics-ezgif.com-video-to-gif-converter.gif",
      "/assets/Dashboard-ezgif.com-video-to-gif-converter.gif",
      "/assets/Filterbylable-ezgif.com-video-to-gif-converter.gif",
      "/assets/addCategories-ezgif.com-video-to-gif-converter.gif",
    ],
  },
  {
    title: "JobFinder",
    description:
      "Automated job search with Python and SerpApi to scrape Google Jobs, scheduled with GitHub Actions.",
    link: "https://jobfinderautomation.xyz",
    tech: ["Python", "SerpApi", "GitHub Actions", "Docker"],
    gifs: [
      "/assets/AutomatedDiscoveryAnimationDark.gif",
      "/assets/CleanWeeklyReportAnimationDark.gif",
    ],
    gifsLight: [
      "/assets/AutomatedDiscoveryAnimationWhite.gif",
      "/assets/CleanWeeklyReportAnimationWhite.gif",
    ],
  },
];

export function Projects() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-10 font-mono text-3xl font-bold text-syntax-shell">
          &gt; Projects
          <span aria-hidden="true" className="shell-cursor" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              theme={resolvedTheme || theme}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  theme,
}: {
  project: any;
  index: number;
  theme: string | undefined;
}) {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const isLight = theme === "light";
  const gifList =
    isLight && project.gifsLight ? project.gifsLight : project.gifs;

  useEffect(() => {
    // Reset index when theme changes to ensure we don't go out of bounds if lists differ
    setCurrentGifIndex(0);
  }, [isLight]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prev) => (prev + 1) % gifList.length);
    }, 4000); // Change GIF every 4 seconds

    return () => clearInterval(interval);
  }, [gifList.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Link
        href={project.link}
        target={project.link !== "#" ? "_blank" : "_self"}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card-bg transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
      >
        {/* Image Container (GIFs) */}
        <div className="relative h-64 w-full overflow-hidden bg-muted/10 md:h-72">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gifList[currentGifIndex]}
            alt={`${project.title} preview`}
            className="object-cover w-full h-full transition-opacity duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-accent">
              <Folder className="h-5 w-5" />
              <h3 className="font-mono text-xl font-bold text-foreground">
                {project.title}
              </h3>
            </div>
            <ExternalLink className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
          </div>

          <p className="mb-6 line-clamp-2 font-mono text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-2">
            <Tag className="h-3.5 w-3.5 text-muted" />
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className={cn(
                  "rounded-md bg-muted/20 px-2 py-1 font-mono text-xs",
                  techMeta[tech]?.className || "text-accent",
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const techMeta: Record<string, { className: string }> = {
  Python: {
    className: "text-syntax-string",
  },
  SerpApi: {
    className: "text-syntax-function",
  },
  "GitHub Actions": {
    className: "text-syntax-keyword",
  },
  Docker: {
    className: "text-syntax-shell",
  },
  Electron: {
    className: "text-syntax-number",
  },
  "Vue 3": {
    className: "text-syntax-shell",
  },
  SQLite: {
    className: "text-syntax-function",
  },
  Pinia: {
    className: "text-syntax-string",
  },
  PrimeVue: {
    className: "text-syntax-keyword",
  },
  "Tailwind CSS": {
    className: "text-syntax-shell",
  },
};
