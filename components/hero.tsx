"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ParticleJava } from "@/components/particle-java";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[68vh] flex-col justify-center py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="min-w-0 flex-1">
          <span className="mb-4 block font-mono text-2xl font-bold text-syntax-shell sm:text-3xl">
            &gt; whoami
            <span aria-hidden="true" className="shell-cursor" />
          </span>
          <h1 className="mb-6 font-mono text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            I&apos;m <span className="text-accent">Harsh Panchal</span>.
          </h1>
          <p className="mb-8 max-w-2xl font-mono text-base leading-relaxed text-muted sm:text-lg">
            Currently a final year Computer Science student at Ontario Tech
            University. I focus on{" "}
            <span className="font-semibold text-syntax-keyword">
              software engineering
            </span>
            ,{" "}
            <span className="font-semibold text-syntax-keyword">
              cloud platforms
            </span>
            , and{" "}
            <span className="font-semibold text-syntax-keyword">
              automation
            </span>
            .
            <br />
            <br />
            I&apos;m an avid problem solver and builder. Programming is my
            favorite way to bring ideas to life.
            <br />
            <br />
            When I'm not at the keyboard, I enjoy playing chess and reading a good book.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/assets/Harsh_Panchal_Resume_2025.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-accent bg-transparent px-3 py-1.5 font-mono text-xs font-medium text-accent transition-colors hover:border-accent-hover hover:bg-accent/10 hover:text-accent-hover sm:px-4 sm:py-2 sm:text-sm"
            >
              <FileText size={16} />
              resume
            </Link>
            <Link
              href="https://github.com/HarshPanchal01"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-syntax-keyword/40 bg-transparent px-3 py-1.5 font-mono text-xs font-medium text-syntax-keyword transition-colors hover:border-syntax-keyword hover:bg-syntax-keyword/10 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Github size={16} />
              github
            </Link>
            <Link
              href="https://linkedin.com/in/HarshPanchal01"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-syntax-keyword/40 bg-transparent px-3 py-1.5 font-mono text-xs font-medium text-syntax-keyword transition-colors hover:border-syntax-keyword hover:bg-syntax-keyword/10 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Linkedin size={16} />
              linkedin
            </Link>
            <Link
              href="mailto:harshpanchalv@gmail.com"
              className="flex items-center gap-2 rounded-md border border-syntax-keyword/40 bg-transparent px-3 py-1.5 font-mono text-xs font-medium text-syntax-keyword transition-colors hover:border-syntax-keyword hover:bg-syntax-keyword/10 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Mail size={16} />
              email
            </Link>
          </div>
        </div>

        <div className="aspect-square w-full max-w-[280px] shrink-0 sm:max-w-[330px] lg:max-w-[380px]">
          <ParticleJava />
        </div>
      </motion.div>
    </section>
  );
}
