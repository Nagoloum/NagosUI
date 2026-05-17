"use client";

import { Logo } from "@/components/ui/logo";
import { useI18n } from "@/components/providers/language-provider";

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-fg">
          <Logo size={24} className="rounded-md" />
          Nagos<span className="text-accent">UI</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <a className="transition-colors hover:text-fg" href="/composants">
            {t.nav.composants}
          </a>
          <a className="transition-colors hover:text-fg" href="/#features">
            {t.features.eyebrow}
          </a>
          <a
            className="transition-colors hover:text-fg"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t.command.github}
          </a>
        </nav>

        <span className="text-sm text-muted">
          {t.footer.tagline} · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
