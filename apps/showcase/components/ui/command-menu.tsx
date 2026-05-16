"use client";

import { useCallback, useEffect } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  Code2,
  Component,
  Moon,
  Search,
  Sparkles,
  SunMedium,
} from "lucide-react";

type CommandMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Palette de recherche ⌘K (cmdk) — overlay glass animé (Motion).
 * Navigation interne, liens, actions de thème.
 */
export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const { setTheme } = useTheme();

  const run = useCallback(
    (action: () => void) => {
      onOpenChange(false);
      // laisse l'overlay se fermer avant l'action
      window.setTimeout(action, 80);
    },
    [onOpenChange],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-start justify-center p-4 pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-bg/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-card border border-line bg-surface shadow-elevated backdrop-blur-glass"
          >
            <Command
              loop
              className="**:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted"
            >
              <div className="flex items-center gap-3 border-b border-line px-4">
                <Search className="size-4 shrink-0 text-muted" />
                <Command.Input
                  autoFocus
                  placeholder="Rechercher un composant, une section…"
                  className="h-13 w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
                />
                <kbd className="hidden rounded-md border border-line px-1.5 py-0.5 text-[10px] text-muted sm:block">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-10 text-center text-sm text-muted">
                  Aucun résultat.
                </Command.Empty>

                <Command.Group heading="Navigation">
                  <Item
                    onSelect={() => run(() => scrollToId("composants"))}
                    icon={<Component className="size-4" />}
                    label="Composants"
                  />
                  <Item
                    onSelect={() => run(() => scrollToId("features"))}
                    icon={<Sparkles className="size-4" />}
                    label="Pourquoi NagosUI"
                  />
                </Command.Group>

                <Command.Group heading="Thème">
                  <Item
                    onSelect={() => run(() => setTheme("light"))}
                    icon={<SunMedium className="size-4" />}
                    label="Passer en clair"
                  />
                  <Item
                    onSelect={() => run(() => setTheme("dark"))}
                    icon={<Moon className="size-4" />}
                    label="Passer en sombre"
                  />
                </Command.Group>

                <Command.Group heading="Liens">
                  <Item
                    onSelect={() =>
                      run(() => window.open(GITHUB_URL, "_blank"))
                    }
                    icon={<Code2 className="size-4" />}
                    label="GitHub"
                  />
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Item({
  onSelect,
  icon,
  label,
}: {
  onSelect: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-fg outline-none transition-colors data-[selected=true]:bg-surface-hover"
    >
      <span className="text-muted">{icon}</span>
      {label}
    </Command.Item>
  );
}
