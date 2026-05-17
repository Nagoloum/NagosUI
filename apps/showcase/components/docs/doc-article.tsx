"use client";

import { useState } from "react";
import { Check, Code2, Copy } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { articleToText, docsUi, type DocArticle } from "@/lib/docs-content";

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

export function DocArticleView({
  article,
  lang,
}: {
  article: DocArticle;
  lang: Lang;
}) {
  const [copied, setCopied] = useState(false);
  const ui = docsUi[lang];

  async function copy() {
    try {
      await navigator.clipboard.writeText(articleToText(article));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* presse-papiers indisponible */
    }
  }

  const actionCls =
    "inline-flex h-9 items-center gap-2 rounded-pill border border-line bg-surface px-4 text-sm text-fg outline-none transition-colors hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-accent/50";

  return (
    <article className="min-w-0">
      <h1 className="text-4xl font-semibold tracking-tight text-fg">
        {article.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{article.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer noopener"
          className={actionCls}
        >
          <Code2 className="size-4" />
          {ui.edit}
        </a>
        <button type="button" onClick={copy} className={actionCls}>
          {copied ? (
            <Check className="size-4 text-accent" />
          ) : (
            <Copy className="size-4" />
          )}
          {copied ? ui.copied : ui.copy}
        </button>
      </div>

      <div className="mt-10 space-y-10">
        {article.sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            {s.heading && (
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-fg">
                {s.heading}
              </h2>
            )}
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              {s.blocks.map((b, i) =>
                b.type === "p" ? (
                  <p key={i}>{b.text}</p>
                ) : (
                  <ul key={i} className="space-y-2.5">
                    {b.items.map((it, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>
                          {it.term && (
                            <strong className="font-semibold text-fg">
                              {it.term}
                            </strong>
                          )}
                          {it.term ? " — " : null}
                          {it.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-line pt-6 text-sm text-muted">
        {ui.updated} : {article.updated}
      </p>
    </article>
  );
}
