"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "JobFinder",
    description: "Automated job search with Python and SerpApi to scrape Google Jobs, scheduled with GitHub Actions.",
    image: "/assets/jobfinder.png",
    link: "https://jobfinderautomation.xyz",
    tech: ["Python", "SerpApi", "GitHub Actions"],
    color: "#e6c764",
  },
  {
    title: "HelloChef",
    description: "Interactive cooking-safety lessons and challenges built with Flutter, backed by Supabase and SQLite.",
    image: "/assets/hellochef.png",
    link: "https://github.com/harishkiru/HelloChef",
    tech: ["Flutter", "Supabase", "SQLite"],
    color: "rgb(37,173,87)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 font-mono text-3xl font-bold text-accent">
          &lt;Projects /&gt;
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                href={project.link}
                target="_blank"
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card-bg transition-all hover:border-accent hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image Container */}
                <div
                  className="relative flex h-48 items-center justify-center overflow-hidden"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  <div className="relative h-3/4 w-3/4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
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

                  <p className="mb-6 flex-1 font-mono text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
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
          ))}
        </div>
      </motion.div>
    </section>
  );
}
