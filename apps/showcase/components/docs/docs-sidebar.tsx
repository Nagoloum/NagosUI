"use client";

import Link from "next/link";
import { cn } from "@nagos/ui";
import { DOCS_NAV, docHref, docTitle } from "@/lib/docs";
import type { Lang } from "@/lib/i18n";
import { docsUi } from "@/lib/docs-content";

export function DocsSidebar({
  activeSlug,
  lang,
}: {
  activeSlug: string;
  lang: Lang;
}) {
  return (
    <nav aria-label="Documentation" className="text-sm">
      <p className="mb-3 pl-4 text-xs font-medium uppercase tracking-wide text-muted">
        {docsUi[lang].section}
      </p>
      <ul className="border-l border-line">
        {DOCS_NAV.map((item) => {
          const active = item.slug === activeSlug;
          return (
            <li key={item.slug}>
              <Link
                href={docHref(item.slug)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "-ml-px block border-l py-1.5 pl-4 transition-colors",
                  active
                    ? "border-accent font-medium text-fg"
                    : "border-transparent text-muted hover:border-line-strong hover:text-fg",
                )}
              >
                {docTitle(item, lang)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
