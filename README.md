# Landing page Axel

Landing page mobile-first destinée à transformer l’audience d’Axel en rendez-vous gratuits et qualifiés.

## Objectif

Le visiteur doit comprendre l’accompagnement, choisir son besoin et réserver directement un rendez-vous gratuit de 20 minutes sur Google Meet grâce à Calendly.

Parcours :

- Recherche d’alternance
- Orientation
- Audit profil / après tes études

## État du projet

La V1 complète de la landing page est implémentée avec Next.js App Router, TypeScript strict et Tailwind CSS 4.

La page comprend le parcours de conversion complet, les trois rendez-vous sélectionnables, une façade YouTube différée, un calendrier placeholder, la future intégration Calendly avec chargement explicite, les événements analytics et les états responsive/accessibles.

Éléments attendus : liens Calendly, calendrier professionnel, vidéo YouTube, photos et identité d’Axel, descriptions définitives, témoignages autorisés, chiffres validés et domaine de production.

## Documentation

- [Règles Codex](AGENTS.md)
- [Contexte produit](docs/PRODUCT_CONTEXT.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Ressources](docs/RESOURCES.md)
- [Décisions d’implémentation](docs/IMPLEMENTATION.md)
- [Override UI UX Pro Max](design-system/landing-page-axel/pages/home.md)

## Développement local

Prérequis : Node.js 20.9 ou plus récent et pnpm.

```bash
pnpm install
pnpm dev
```

Contrôles :

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Copier `.env.example` en `.env.local` puis renseigner les identifiants publics YouTube et Calendly quand ils seront validés.

## Architecture

- `src/data/landing-content.ts` : contenus, rendez-vous, FAQ, témoignages et variables publiques centralisés ;
- `src/components/` : îlots interactifs isolés ;
- `src/lib/analytics.ts` : événements sans donnée personnelle ;
- `src/app/page.tsx` : composition serveur de la landing page ;
- `src/app/globals.css` : tokens et styles responsive mobile-first.

Workflow : branche de travail → développement → preview Vercel → vérifications → pull request → fusion dans `main` → production.

La structure de conversion s’inspire de https://www.agencecut.fr/ sans copier son identité, son contenu ou son code.
