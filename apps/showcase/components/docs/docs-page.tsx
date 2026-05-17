"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/components/providers/language-provider";
import { getDoc, docsUi } from "@/lib/docs-content";
import { DOCS_NAV, docHref, docTitle, findDoc } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsToc } from "@/components/docs/docs-toc";
import { DocArticleView } from "@/components/docs/doc-article";

/**
 * Page de documentation : 3 colonnes — sidebar (pages) / contenu /
 * sommaire de la page active. Totalement responsive : sidebar et
 * sommaire masqués sur petit écran, remplacés par un menu déroulant.
 */
export function DocsPage({ slug }: { slug: string }) {
  const { lang } = useI18n();
  const article = getDoc(slug, lang);
  const toc = article.sections.flatMap((s) =>
    s.heading ? [{ id: s.id, label: s.heading }] : [],
  );
  const current = findDoc(slug);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[14rem_minmax(0,1fr)_14rem]">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <DocsSidebar activeSlug={slug} lang={lang} />
          </div>
        </aside>

        <main className="min-w-0 pb-16">
          {/* Sélecteur de page (mobile / tablette) */}
          <details className="group mb-8 rounded-card border border-line bg-surface lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-fg [&::-webkit-details-marker]:hidden">
              <span className="text-muted">
                {docsUi[lang].menu} ·{" "}
                <span className="text-fg">
                  {current ? docTitle(current, lang) : article.title}
                </span>
              </span>
              <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
            </summary>
            <ul className="border-t border-line p-2">
              {DOCS_NAV.map((item) => {
                const active = item.slug === slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={docHref(item.slug)}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "block rounded-xl bg-surface-hover px-3 py-2 text-sm font-medium text-fg"
                          : "block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-fg"
                      }
                    >
                      {docTitle(item, lang)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>

          <DocArticleView article={article} lang={lang} />
        </main>

        {/* Sommaire (desktop large) */}
        <aside className="hidden xl:block">
          <div className="sticky top-20">
            <DocsToc items={toc} lang={lang} />
          </div>
        </aside>
      </div>
    </div>
  );
}
