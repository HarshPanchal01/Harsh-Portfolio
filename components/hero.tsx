"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[85vh] flex-col justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-lg text-accent mb-4 block">
          &gt; hi_there
        </span>
        <h1 className="mb-6 font-mono text-4xl font-bold leading-tight sm:text-6xl">
          I&apos;m <span className="text-accent">Harsh Panchal</span>.
        </h1>
        <p className="mb-8 max-w-2xl font-mono text-lg text-muted leading-relaxed">
          Currently a final year Computer Science student at Ontario Tech University.
          I focus on <span className="text-foreground font-semibold">software engineering</span>,{" "}
          <span className="text-foreground font-semibold">cloud platforms</span>, and{" "}
          <span className="text-foreground font-semibold">automation</span>.
          <br />
          <br />
          I&apos;m an avid problem solver and builder. Programming is my favorite way to bring ideas to life.
          <br />
          <br />
          Besides programming, I enjoy learning about history, and discovering different cultures. I also love taking hikes and exploring nature.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/assets/Harsh_Panchal_Resume_2025.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-md border border-accent bg-transparent px-4 py-2 font-mono text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
          >
            <FileText size={16} />
            resume.pdf
          </Link>
          <Link
            href="https://github.com/HarshPanchal01"
            target="_blank"
            className="flex items-center gap-2 rounded-md border border-muted bg-transparent px-4 py-2 font-mono text-sm font-medium text-muted hover:border-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} />
            github
          </Link>
          <Link
            href="https://linkedin.com/in/HarshPanchal01"
            target="_blank"
            className="flex items-center gap-2 rounded-md border border-muted bg-transparent px-4 py-2 font-mono text-sm font-medium text-muted hover:border-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={16} />
            linkedin
          </Link>
          <Link
            href="mailto:harshpanchalv@gmail.com"
            className="flex items-center gap-2 rounded-md border border-muted bg-transparent px-4 py-2 font-mono text-sm font-medium text-muted hover:border-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            email
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
