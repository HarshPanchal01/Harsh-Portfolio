"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    company: "Sun Life",
    role: "Site Reliability Analyst Intern",
    date: "Sept 2025 – Present",
    logo: "/assets/sunlife.png",
    link: "https://www.sunlife.com",
    description: "Site Reliability Analyst Intern",
  },
  {
    id: 2,
    company: "Ontario Health",
    role: "Data Engineer Intern",
    date: "May 2024 – Aug 2024",
    logo: "/assets/ontariohealth.jpeg",
    link: "https://www.ontario.ca/page/ministry-health",
    description: "Data Engineer Intern",
  },
  {
    id: 3,
    company: "Manulife",
    role: "Platform Reliability Engineer Intern",
    date: "Sept 2023 – Apr 2024",
    logo: "/assets/manulife.jpeg",
    link: "https://www.manulife.com",
    description: "Platform Reliability Engineer Intern",
  },
  {
    id: 4,
    company: "Eclipse Creations",
    role: "Full Stack Developer Intern",
    date: "May 2023 - Aug 2023",
    logo: "/assets/eclipsecreations.jpg",
    link: "https://www.linkedin.com/company/eclipse-creations01",
    description: "Full Stack Developer Intern",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 font-mono text-3xl font-bold text-accent">
          &lt;Experience /&gt;
        </h2>

        <div className="relative border-l-2 border-muted/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-accent transition-colors group-hover:bg-accent-hover" />

              <Link
                href={exp.link}
                target="_blank"
                className="group block transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    {exp.company}
                    <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <span className="font-mono text-sm text-muted tabular-nums">
                    {exp.date}
                  </span>
                </div>

                <h4 className="font-mono text-lg font-medium text-foreground/80 mb-2">
                  {exp.role}
                </h4>

                {/* Logo or Description if needed */}
                <div className="mt-2 text-muted">
                 {/*  <p>{exp.description}</p> */ }
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
