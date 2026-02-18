import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="#hero"
          className="font-mono text-lg font-bold text-foreground transition-colors hover:text-syntax-shell"
        >
          ~/harsh
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#experience"
            className="text-sm font-medium text-foreground transition-colors hover:text-syntax-shell"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground transition-colors hover:text-syntax-shell"
          >
            Projects
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
