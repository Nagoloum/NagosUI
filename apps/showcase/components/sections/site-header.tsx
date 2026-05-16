"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Code2, Search } from "lucide-react";
import { cn } from "@nagos/ui";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CommandMenu } from "@/components/ui/command-menu";

const NAV = [
  { label: "Composants", id: "composants" },
  { label: "Pourquoi", id: "features" },
];

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

export function SiteHeader() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-50 w-full transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-bg/70 backdrop-blur-glass"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-fg"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-linear-to-br from-accent-from via-accent-via to-accent-to text-xs font-bold text-white">
              N
            </span>
            Nagos<span className="text-accent">UI</span>
          </a>

          {/* Nav */}
          <nav className="ml-4 hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-pill px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search */}
          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            className="ml-auto flex h-9 items-center gap-2 rounded-pill border border-line bg-surface px-3 text-sm text-muted transition-colors hover:bg-surface-hover sm:w-64"
          >
            <Search className="size-4" />
            <span className="hidden sm:inline">Rechercher…</span>
            <kbd className="ml-auto hidden items-center gap-0.5 rounded-md border border-line px-1.5 py-0.5 text-[10px] sm:flex">
              ⌘K
            </kbd>
          </button>

          <ThemeToggle />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-pill border border-line bg-surface text-fg transition-colors hover:bg-surface-hover"
          >
            <Code2 className="size-4.5" />
          </a>
        </div>
      </motion.header>

      <CommandMenu open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
