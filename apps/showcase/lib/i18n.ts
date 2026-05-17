/**
 * i18n léger NagosUI (contexte + dictionnaire, sans routing par locale).
 * Suffisant pour la landing ; upgradable vers next-intl/SEO plus tard.
 */

export type Lang = "fr" | "en";

export const LANGS: Lang[] = ["fr", "en"];

export interface Dict {
  nav: {
    docs: string;
    composants: string;
    icons: string;
    blocks: string;
    templates: string;
  };
  header: { search: string };
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    /** Ordre = icônes dans features.tsx */
    items: { title: string; desc: string }[];
  };
  footer: { tagline: string };
  command: {
    placeholder: string;
    empty: string;
    groupNav: string;
    groupTheme: string;
    groupLinks: string;
    composants: string;
    why: string;
    toLight: string;
    toDark: string;
    github: string;
  };
  comingSoon: { badge: string; title: string; subtitle: string; back: string };
}

const fr: Dict = {
  nav: {
    docs: "Docs",
    composants: "Composants",
    icons: "Icônes",
    blocks: "Blocks",
    templates: "Templates",
  },
  header: { search: "Rechercher…" },
  hero: {
    badge: "Design system + composants animés",
    titleLead: "Des interfaces qui",
    titleAccent: "donnent envie",
    subtitle:
      "NagosUI — une librairie de composants React premium, fluides et cinématiques. Animations signature, clair/sombre natif, 100 % ton code.",
    ctaPrimary: "Explorer les composants",
    ctaSecondary: "Commencer",
    stats: [
      { value: "100%", label: "Ton code" },
      { value: "Clair", label: "& Sombre" },
      { value: "Motion", label: "+ GSAP" },
    ],
  },
  features: {
    eyebrow: "Pourquoi NagosUI",
    title: "Conçu pour des UI mémorables",
    items: [
      {
        title: "Animations signature",
        desc: "Micro-interactions, magnétisme, reveals au scroll — un feeling reconnaissable.",
      },
      {
        title: "Clair / sombre natif",
        desc: "Un seul jeu de tokens bascule toute la DA. Aucun composant à retoucher.",
      },
      {
        title: "100 % ton code",
        desc: "Modèle registry : tu possèdes chaque composant, customisable à fond.",
      },
      {
        title: "Design system par tokens",
        desc: "Couleurs, ombres, rayons, easing : une source unique, zéro valeur brute.",
      },
      {
        title: "Motion · GSAP · Lenis",
        desc: "La stack des sites premium, déjà câblée et prête à l'emploi.",
      },
      {
        title: "Prêt pour Vercel",
        desc: "Monorepo Turborepo, Next.js 16, build vérifié. Déploiement immédiat.",
      },
    ],
  },
  footer: { tagline: "Par Nagos" },
  command: {
    placeholder: "Rechercher un composant, une section…",
    empty: "Aucun résultat.",
    groupNav: "Navigation",
    groupTheme: "Thème",
    groupLinks: "Liens",
    composants: "Composants",
    why: "Pourquoi NagosUI",
    toLight: "Passer en clair",
    toDark: "Passer en sombre",
    github: "GitHub",
  },
  comingSoon: {
    badge: "Bientôt",
    title: "Cette section arrive",
    subtitle:
      "Elle est en cours de construction. Reviens vite — ou explore les composants en attendant.",
    back: "Retour à l'accueil",
  },
};

const en: Dict = {
  nav: {
    docs: "Docs",
    composants: "Components",
    icons: "Icons",
    blocks: "Blocks",
    templates: "Templates",
  },
  header: { search: "Search…" },
  hero: {
    badge: "Design system + animated components",
    titleLead: "Interfaces that",
    titleAccent: "make you want more",
    subtitle:
      "NagosUI — a premium, fluid and cinematic React component library. Signature animations, native light/dark, 100% your code.",
    ctaPrimary: "Explore components",
    ctaSecondary: "Get started",
    stats: [
      { value: "100%", label: "Your code" },
      { value: "Light", label: "& Dark" },
      { value: "Motion", label: "+ GSAP" },
    ],
  },
  features: {
    eyebrow: "Why NagosUI",
    title: "Built for memorable UIs",
    items: [
      {
        title: "Signature animations",
        desc: "Micro-interactions, magnetism, scroll reveals — a recognizable feel.",
      },
      {
        title: "Native light / dark",
        desc: "A single token set flips the whole look. No component to touch.",
      },
      {
        title: "100% your code",
        desc: "Registry model: you own every component, fully customizable.",
      },
      {
        title: "Token design system",
        desc: "Colors, shadows, radii, easing: one source of truth, zero raw values.",
      },
      {
        title: "Motion · GSAP · Lenis",
        desc: "The premium-site stack, already wired and ready to use.",
      },
      {
        title: "Vercel-ready",
        desc: "Turborepo monorepo, Next.js 16, verified build. Deploy instantly.",
      },
    ],
  },
  footer: { tagline: "By Nagos" },
  command: {
    placeholder: "Search a component, a section…",
    empty: "No results.",
    groupNav: "Navigation",
    groupTheme: "Theme",
    groupLinks: "Links",
    composants: "Components",
    why: "Why NagosUI",
    toLight: "Switch to light",
    toDark: "Switch to dark",
    github: "GitHub",
  },
  comingSoon: {
    badge: "Soon",
    title: "This section is coming",
    subtitle:
      "It's under construction. Check back soon — or explore the components meanwhile.",
    back: "Back to home",
  },
};

export const dictionaries: Record<Lang, Dict> = { fr, en };
