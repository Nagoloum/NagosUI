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
    badge: "Librairie de composants React · open source",
    titleLead: "Des interfaces premium,",
    titleAccent: "livrées plus vite",
    subtitle:
      "NagosUI est une librairie de composants React animés, bâtie sur un design system tokenisé. Vous gardez 100 % du code et gagnez des semaines d'intégration sur chaque produit.",
    ctaPrimary: "Explorer les composants",
    ctaSecondary: "Commencer",
    stats: [
      { value: "100 %", label: "Votre code" },
      { value: "Clair / Sombre", label: "Natif" },
      { value: "Motion", label: "Intégré" },
    ],
  },
  features: {
    eyebrow: "Pourquoi NagosUI",
    title: "La base technique d'un produit qui se démarque",
    items: [
      {
        title: "Animations de production",
        desc: "Micro-interactions et transitions calibrées, fluides et performantes — la signature visuelle, sans la dette technique.",
      },
      {
        title: "Thème clair / sombre natif",
        desc: "Un seul jeu de tokens pilote toute l'identité. Aucun composant à dupliquer ni à retoucher.",
      },
      {
        title: "Vous possédez le code",
        desc: "Modèle registry : les composants vivent dans votre dépôt. Aucun lock-in, customisation totale.",
      },
      {
        title: "Design system tokenisé",
        desc: "Couleurs, ombres, rayons, easing : une source unique de vérité, cohérente sur tout le produit.",
      },
      {
        title: "Stack premium intégrée",
        desc: "Motion, GSAP et Lenis déjà câblés et typés. Vous construisez, l'infrastructure est prête.",
      },
      {
        title: "Prêt pour la production",
        desc: "TypeScript strict, Next.js 16, monorepo Turborepo, build vérifié. Déployable sur Vercel immédiatement.",
      },
    ],
  },
  footer: { tagline: "Conçu par Nagos" },
  command: {
    placeholder: "Rechercher un composant, une page…",
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
    title: "Bientôt disponible",
    subtitle:
      "Cette section est en cours de finalisation. En attendant, explorez les composants disponibles.",
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
    badge: "React component library · open source",
    titleLead: "Premium interfaces,",
    titleAccent: "shipped faster",
    subtitle:
      "NagosUI is an animated React component library built on a tokenized design system. You keep 100% of the code and save weeks of integration on every product.",
    ctaPrimary: "Explore components",
    ctaSecondary: "Get started",
    stats: [
      { value: "100%", label: "Your code" },
      { value: "Light / Dark", label: "Native" },
      { value: "Motion", label: "Built-in" },
    ],
  },
  features: {
    eyebrow: "Why NagosUI",
    title: "The technical foundation of a product that stands out",
    items: [
      {
        title: "Production-grade motion",
        desc: "Calibrated micro-interactions and transitions, smooth and performant — the visual signature, without the tech debt.",
      },
      {
        title: "Native light / dark",
        desc: "A single token set drives the whole identity. No component to duplicate or rework.",
      },
      {
        title: "You own the code",
        desc: "Registry model: components live in your repo. Zero lock-in, full customization.",
      },
      {
        title: "Tokenized design system",
        desc: "Colors, shadows, radii, easing: one source of truth, consistent across the product.",
      },
      {
        title: "Premium stack, wired in",
        desc: "Motion, GSAP and Lenis already wired and typed. You build; the infrastructure is ready.",
      },
      {
        title: "Production-ready",
        desc: "Strict TypeScript, Next.js 16, Turborepo monorepo, verified build. Deployable on Vercel right away.",
      },
    ],
  },
  footer: { tagline: "Built by Nagos" },
  command: {
    placeholder: "Search a component, a page…",
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
    title: "Coming soon",
    subtitle:
      "This section is being finalized. In the meantime, explore the available components.",
    back: "Back to home",
  },
};

export const dictionaries: Record<Lang, Dict> = { fr, en };
