import type { Lang } from "@/lib/i18n";
import { DOCS_HOME_SLUG, findDoc, docTitle } from "@/lib/docs";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: { term?: string; text: string }[] };

export interface DocSection {
  id: string;
  heading?: string;
  blocks: DocBlock[];
}

export interface DocArticle {
  title: string;
  description: string;
  updated: string;
  sections: DocSection[];
}

const UPDATED = "18/05/2026";

/** Strings d'UI de la doc (bilingues). */
export const docsUi = {
  fr: {
    section: "Guide",
    onThisPage: "Sur cette page",
    edit: "Modifier sur GitHub",
    copy: "Copier",
    copied: "Copié",
    updated: "Dernière mise à jour",
  },
  en: {
    section: "Guide",
    onThisPage: "On this page",
    edit: "Edit on GitHub",
    copy: "Copy",
    copied: "Copied",
    updated: "Last updated",
  },
} as const;

const introduction: Record<Lang, DocArticle> = {
  fr: {
    title: "Introduction",
    description: "Construisez des interfaces premium animées avec NagosUI.",
    updated: UPDATED,
    sections: [
      {
        id: "overview",
        blocks: [
          {
            type: "p",
            text: "NagosUI est une distribution de composants React animés, bâtie avec Tailwind CSS v4 et Motion, sur un design system entièrement tokenisé. L'objectif : permettre de livrer des interfaces premium, accessibles et prêtes pour la production — rapidement — tout en gardant un code rapide et maintenable.",
          },
        ],
      },
      {
        id: "distribution",
        heading: "Pas une librairie classique — une distribution ouverte",
        blocks: [
          {
            type: "p",
            text: "À la manière de shadcn/ui, NagosUI n'est pas une dépendance npm fermée. C'est une collection ouverte que vous copiez, modifiez et personnalisez directement dans votre base de code. Cette approche « open code » offre une flexibilité maximale, sans surcouche d'abstraction ni contournements de style.",
          },
          {
            type: "p",
            text: "Vous possédez 100 % du code des composants : ils vivent dans votre dépôt et évoluent avec votre produit, sans lock-in.",
          },
        ],
      },
      {
        id: "included",
        heading: "Ce qui est inclus",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Composants animés",
                text: "des briques d'UI avec l'animation intégrée (Motion), stylées via les tokens du design system.",
              },
              {
                term: "Hooks",
                text: "une logique d'interaction réutilisable et typée (ex. useMagnetic).",
              },
              {
                term: "Foundation Layer",
                text: "un système de tokens clair/sombre — couleurs, ombres, rayons, easing — source unique de vérité.",
              },
              {
                term: "À venir",
                text: "blocks, templates et icônes animées.",
              },
            ],
          },
        ],
      },
      {
        id: "why",
        heading: "Pourquoi NagosUI ?",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Open source & copy-first",
                text: "accès direct au code source pour adapter les composants au cœur de votre design system.",
              },
              {
                term: "Animation-first, propulsé par Motion",
                text: "des motifs d'animation cohérents et composables ; Motion, GSAP et Lenis déjà câblés.",
              },
              {
                term: "Performance & accessibilité",
                text: "des défauts raisonnables qui gardent votre site rapide et inclusif par défaut.",
              },
              {
                term: "Design system tokenisé",
                text: "clair/sombre natif, entièrement rethématisable en changeant un seul jeu de tokens.",
              },
              {
                term: "Prêt pour la production",
                text: "TypeScript strict, Next.js 16, monorepo Turborepo, build vérifié.",
              },
              {
                term: "Identité signature",
                text: "des micro-interactions reconnaissables qui démarquent votre produit.",
              },
            ],
          },
          {
            type: "p",
            text: "Conçu par Nagos. Le code source est disponible sur GitHub.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Introduction",
    description: "Build premium animated interfaces with NagosUI.",
    updated: UPDATED,
    sections: [
      {
        id: "overview",
        blocks: [
          {
            type: "p",
            text: "NagosUI is a distribution of animated React components, built with Tailwind CSS v4 and Motion on a fully tokenized design system. The goal: ship premium, accessible, production-grade interfaces — fast — while keeping the codebase fast and maintainable.",
          },
        ],
      },
      {
        id: "distribution",
        heading: "Not a typical library — an open distribution",
        blocks: [
          {
            type: "p",
            text: "Like shadcn/ui, NagosUI is not a closed install-from-npm dependency. It's an open collection you copy, modify and customize directly in your codebase. This “open code” approach gives you maximum flexibility, without wrapper overhead or styling workarounds.",
          },
          {
            type: "p",
            text: "You own 100% of the component code: it lives in your repo and evolves with your product, with no lock-in.",
          },
        ],
      },
      {
        id: "included",
        heading: "What's included",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Animated components",
                text: "UI building blocks with animation baked in (Motion), styled via design-system tokens.",
              },
              {
                term: "Hooks",
                text: "reusable, typed interaction logic (e.g. useMagnetic).",
              },
              {
                term: "Foundation Layer",
                text: "a light/dark token system — colors, shadows, radii, easing — single source of truth.",
              },
              { term: "Coming soon", text: "blocks, templates and animated icons." },
            ],
          },
        ],
      },
      {
        id: "why",
        heading: "Why NagosUI?",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Open source & copy-first",
                text: "direct access to source so you can adapt components at the core of your design system.",
              },
              {
                term: "Animation-first, powered by Motion",
                text: "consistent, composable motion patterns; Motion, GSAP and Lenis already wired.",
              },
              {
                term: "Performance & accessibility",
                text: "sensible defaults that keep your site fast and inclusive by default.",
              },
              {
                term: "Tokenized design system",
                text: "native light/dark, fully re-themeable by changing a single token set.",
              },
              {
                term: "Production-ready",
                text: "strict TypeScript, Next.js 16, Turborepo monorepo, verified build.",
              },
              {
                term: "Signature identity",
                text: "recognizable micro-interactions that set your product apart.",
              },
            ],
          },
          {
            type: "p",
            text: "Built by Nagos. The source code is available on GitHub.",
          },
        ],
      },
    ],
  },
};

/** Article placeholder (page docs configurée mais pas encore rédigée). */
function placeholder(slug: string, lang: Lang): DocArticle {
  const item = findDoc(slug);
  const title = item ? docTitle(item, lang) : slug;
  return {
    title,
    description:
      lang === "fr"
        ? "Cette page de documentation arrive bientôt."
        : "This documentation page is coming soon.",
    updated: UPDATED,
    sections: [
      {
        id: "soon",
        blocks: [
          {
            type: "p",
            text:
              lang === "fr"
                ? "Cette section est en cours de rédaction. En attendant, l'Introduction couvre l'essentiel pour démarrer avec NagosUI."
                : "This section is being written. Meanwhile, the Introduction covers the essentials to get started with NagosUI.",
          },
        ],
      },
    ],
  };
}

export function getDoc(slug: string, lang: Lang): DocArticle {
  if (slug === DOCS_HOME_SLUG) return introduction[lang];
  return placeholder(slug, lang);
}

/** Aplatit un article en texte brut (bouton « Copier »). */
export function articleToText(a: DocArticle): string {
  const lines: string[] = [`# ${a.title}`, "", a.description, ""];
  for (const s of a.sections) {
    if (s.heading) lines.push(`## ${s.heading}`, "");
    for (const b of s.blocks) {
      if (b.type === "p") lines.push(b.text, "");
      else
        for (const it of b.items)
          lines.push(`- ${it.term ? `${it.term}: ` : ""}${it.text}`);
    }
    lines.push("");
  }
  return lines.join("\n").trim();
}
