"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "JobFinder",
    description: "Automated job search with Python and SerpApi to scrape Google Jobs, scheduled with GitHub Actions.",
    link: "https://jobfinderautomation.xyz",
    tech: ["Python", "SerpApi", "GitHub Actions"],
    gifs: [
      "/assets/AutomatedDiscoveryAnimationDark.gif",
      "/assets/CleanWeeklyReportAnimationDark.gif",
    ],
    gifsLight: [
      "/assets/AutomatedDiscoveryAnimationWhite.gif",
      "/assets/CleanWeeklyReportAnimationWhite.gif",
    ]
  },
  {
    title: "OneFinance",
    description: "Engineered a local-first personal finance desktop application using Electron and Vue 3, prioritizing user privacy by persisting financial data strictly to an embedded SQLite database capable of querying 50,000+ records with sub-50ms latency. Architected a scalable state management system with Pinia to handle multi-account tracking, ensuring consistent ledger organization and instant search across 5+ years of history.",
    link: "#", // No link provided for desktop app, keeping placeholder or remove if needed
    tech: ["Electron", "Vue 3", "SQLite", "Pinia", "PrimeVue", "Tailwind CSS"],
    gifs: [
      "/assets/createAccounts-ezgif.com-video-to-gif-converter.gif",
      "/assets/transactions-ezgif.com-video-to-gif-converter.gif",
      "/assets/viewanalytics-ezgif.com-video-to-gif-converter.gif",
      "/assets/Dashboard-ezgif.com-video-to-gif-converter.gif",
      "/assets/Filterbylable-ezgif.com-video-to-gif-converter.gif",
      "/assets/addCategories-ezgif.com-video-to-gif-converter.gif",
    ],
    // Assuming same GIFs for light mode for OneFinance as none were specified, or just reuse same list
    gifsLight: [
      "/assets/createAccounts-ezgif.com-video-to-gif-converter.gif",
      "/assets/transactions-ezgif.com-video-to-gif-converter.gif",
      "/assets/viewanalytics-ezgif.com-video-to-gif-converter.gif",
      "/assets/Dashboard-ezgif.com-video-to-gif-converter.gif",
      "/assets/Filterbylable-ezgif.com-video-to-gif-converter.gif",
      "/assets/addCategories-ezgif.com-video-to-gif-converter.gif",
    ]
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
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 font-mono text-3xl font-bold text-accent flex items-center gap-2">
          <span className="text-syntax-keyword">&lt;</span>
          Projects
          <span className="text-syntax-keyword"> /&gt;</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
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

function ProjectCard({ project, index, theme }: { project: any, index: number, theme: string | undefined }) {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const isLight = theme === "light";
  const gifList = isLight && project.gifsLight ? project.gifsLight : project.gifs;

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
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card-bg transition-all hover:border-accent hover:shadow-lg hover:-translate-y-1",
          project.link === "#" && "cursor-default"
        )}
      >
        {/* Image Container (GIFs) */}
        <div className="relative h-56 w-full overflow-hidden bg-muted/10">
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
            {project.link !== "#" && (
              <ExternalLink className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
            )}
          </div>

          <p className="mb-6 flex-1 font-mono text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="rounded bg-accent/10 px-2 py-1 font-mono text-xs text-accent"
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
