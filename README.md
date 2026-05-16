# NagosUI

Librairie de composants frontend **premium, animés et fluides** + sites cinématiques.
Monorepo géré par **pnpm workspaces** + **Turborepo**.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config CSS-first)
- **Motion** (ex Framer Motion) — animations UI / micro-interactions
- **GSAP** + **ScrollTrigger** — scroll cinématique / timelines
- **Lenis** — smooth scroll premium

## Structure

```
NagosUI/
├── apps/
│   └── showcase/             # Site vitrine / playground (déployable Vercel)
└── packages/
    └── ui/                   # @nagos/ui — design system + composants
        └── src/
            ├── styles/       #   theme.css   → tokens visuels (@theme)
            ├── tokens/       #   motion.ts    → tokens motion (EASE/SPRING)
            ├── lib/          #   cn()
            ├── hooks/        #   useMagnetic…
            └── components/   #   button/, … (1 dossier par catégorie)
```

## Foundation Layer (design system)

Source **unique** de toute valeur visuelle — aucun composant n'hardcode de
couleur / ombre / rayon / easing :

- **`packages/ui/src/styles/theme.css`** — tokens visuels via `@theme`
  Tailwind v4 (`--color-*`, `--radius-*`, `--shadow-*`, `--blur-*`,
  `--ease-*`). Génère les utilitaires (`bg-surface`, `rounded-pill`,
  `shadow-glow`, `ease-out-expo`…).
- **`packages/ui/src/tokens/motion.ts`** — tokens motion JS (`EASE`,
  `SPRING`, `DURATION`) pour Motion / GSAP.

Une app branche le système en important `theme.css` dans son `globals.css`.
Changer un token = changer toute la DA d'un coup.

Le modèle de distribution est **façon shadcn** : `@nagos/ui` est consommé en
dépendance workspace (code source transpilé par l'app), tu possèdes 100 % du
code et tu peux le copier/personnaliser dans chaque site.

> Chaque futur **site cinématique** (film/anime) sera une nouvelle app dans
> `apps/` qui réutilise `@nagos/ui` et se déploie indépendamment sur Vercel.

## Commandes

```bash
pnpm install        # installer toutes les deps du monorepo
pnpm dev            # lancer le dev (toutes les apps)
pnpm build          # build de production
pnpm typecheck      # vérification des types
pnpm lint           # lint
```

## Déploiement Vercel

Chaque app dans `apps/*` se déploie comme un projet Vercel séparé.
Pour `apps/showcase` : Root Directory = `apps/showcase`, Build Command =
`cd ../.. && pnpm turbo run build --filter=showcase`, Install Command = `pnpm install`.
