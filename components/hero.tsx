"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"
      >
        <div>
          <span className="mb-4 block font-mono text-3xl font-bold text-syntax-shell">
            &gt; whoami
            <span aria-hidden="true" className="shell-cursor" />
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold leading-tight sm:text-6xl">
            I&apos;m <span className="text-accent">Harsh Panchal</span>.
          </h1>
          <p className="mb-8 max-w-2xl font-mono text-lg leading-relaxed text-muted">
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
            Besides programming, I enjoy learning about history, and discovering
            different cultures. I also love taking hikes and exploring nature.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/assets/Harsh_Panchal_Resume_2025.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-accent bg-transparent px-4 py-2 font-mono text-sm font-medium text-accent transition-colors hover:border-accent-hover hover:bg-accent/10 hover:text-accent-hover"
            >
              <FileText size={16} />
              resume
            </Link>
            <Link
              href="https://github.com/HarshPanchal01"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-syntax-keyword/40 bg-transparent px-4 py-2 font-mono text-sm font-medium text-syntax-keyword transition-colors hover:border-syntax-keyword hover:bg-syntax-keyword/10"
            >
              <Github size={16} />
              github
            </Link>
            <Link
              href="https://linkedin.com/in/HarshPanchal01"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-syntax-keyword/40 bg-transparent px-4 py-2 font-mono text-sm font-medium text-syntax-keyword transition-colors hover:border-syntax-keyword hover:bg-syntax-keyword/10"
            >
              <Linkedin size={16} />
              linkedin
            </Link>
            <Link
              href="mailto:harshpanchalv@gmail.com"
              className="flex items-center gap-2 rounded-md border border-syntax-keyword/40 bg-transparent px-4 py-2 font-mono text-sm font-medium text-syntax-keyword transition-colors hover:border-syntax-keyword hover:bg-syntax-keyword/10"
            >
              <Mail size={16} />
              email
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[320px] lg:mx-0">
          <div className="overflow-hidden rounded-2xl border-2 border-accent/60 bg-card">
            <Image
              src="/assets/pfp.png"
              alt="Harsh Panchal Studio Ghibli style portrait"
              width={640}
              height={640}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
