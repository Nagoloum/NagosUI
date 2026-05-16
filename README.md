# NagosUI

Librairie de composants frontend **premium, animés et fluides** + sites cinématiques.
Monorepo géré par **pnpm workspaces** + **Turborepo**.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config CSS-first)
- **Motion** (ex Framer Motion) — animations UI / micro-interactions
- **GSAP** + **ScrollTrigger** — scroll cinématique / timelines
- **Lenis** — smooth scroll premium

## Structure

```
NagosUI/
├── apps/
│   └── showcase/      # Site vitrine / playground (déployable sur Vercel)
└── packages/
    └── ui/            # @nagos/ui — composants (modèle registry, code copiable)
```

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
