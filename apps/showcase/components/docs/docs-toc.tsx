"use client";

import { useEffect, useState } from "react";
import { cn } from "@nagos/ui";
import type { Lang } from "@/lib/i18n";
import { docsUi } from "@/lib/docs-content";

export function DocsToc({
  items,
  lang,
}: {
  items: { id: string; label: string }[];
  lang: Lang;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label={docsUi[lang].onThisPage} className="text-sm">
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
        {docsUi[lang].onThisPage}
      </p>
      <ul className="border-l border-line">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(it.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "-ml-px block border-l py-1.5 pl-4 transition-colors",
                active === it.id
                  ? "border-accent text-fg"
                  : "border-transparent text-muted hover:text-fg",
              )}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
