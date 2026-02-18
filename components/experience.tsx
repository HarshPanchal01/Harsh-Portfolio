"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    company: "Sun Life",
    role: "Site Reliability Analyst Intern",
    date: "Sept 2025 – Dec 2025",
    link: "https://www.sunlife.com",
    description: "Site Reliability Analyst Intern",
    logo: "/assets/sunlife.png",
  },
  {
    id: 2,
    company: "Ontario Health",
    role: "Data Engineer Intern",
    date: "May 2024 – Aug 2024",
    link: "https://www.ontario.ca/page/ministry-health",
    description: "Data Engineer Intern",
    logo: "/assets/ontariohealth.jpeg",
  },
  {
    id: 3,
    company: "Manulife",
    role: "Platform Reliability Engineer Intern",
    date: "Sept 2023 – Apr 2024",
    link: "https://www.manulife.com",
    description: "Platform Reliability Engineer Intern",
    logo: "/assets/manulife.jpeg",
  },
  {
    id: 4,
    company: "Eclipse Creations",
    role: "Full Stack Developer Intern",
    date: "May 2023 - Aug 2023",
    link: "https://www.linkedin.com/company/eclipse-creations01",
    description: "Full Stack Developer Intern",
    logo: "/assets/eclipsecreations.jpg",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-10 font-mono text-3xl font-bold text-syntax-shell">
          &gt; Experience
          <span aria-hidden="true" className="shell-cursor" />
        </h2>

        <div className="relative ml-3 space-y-10 border-l-2 border-border md:ml-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-accent" />

              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-mono text-xl font-bold text-foreground">
                  <Link
                    href={exp.link}
                    target="_blank"
                    className="group inline-flex items-center gap-3 transition-colors hover:text-syntax-keyword hover:underline hover:decoration-syntax-keyword hover:underline-offset-4"
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-md object-cover"
                    />
                    {exp.company}
                    <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </h3>
                <span className="font-mono text-sm text-muted tabular-nums">
                  {exp.date}
                </span>
              </div>

              <h4 className="mb-2 font-mono text-lg font-medium text-foreground/80">
                {exp.role}
              </h4>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
