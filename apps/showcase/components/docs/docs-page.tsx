"use client";

import { useI18n } from "@/components/providers/language-provider";
import { getDoc } from "@/lib/docs-content";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsToc } from "@/components/docs/docs-toc";
import { DocArticleView } from "@/components/docs/doc-article";

/**
 * Page de documentation : 3 colonnes — sidebar (pages) / contenu /
 * sommaire de la page active. Bilingue via useI18n().
 */
export function DocsPage({ slug }: { slug: string }) {
  const { lang } = useI18n();
  const article = getDoc(slug, lang);
  const toc = article.sections.flatMap((s) =>
    s.heading ? [{ id: s.id, label: s.heading }] : [],
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12">
      <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[14rem_minmax(0,1fr)_14rem]">
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <DocsSidebar activeSlug={slug} lang={lang} />
          </div>
        </aside>

        <main className="min-w-0 pb-16">
          <DocArticleView article={article} lang={lang} />
        </main>

        <aside className="hidden xl:block">
          <div className="sticky top-20">
            <DocsToc items={toc} lang={lang} />
          </div>
        </aside>
      </div>
    </div>
  );
}
