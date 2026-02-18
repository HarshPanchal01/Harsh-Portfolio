import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-lg font-bold text-foreground hover:text-accent transition-colors">
          ~/harsh
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#experience"
            className="text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            _experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            _projects
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
