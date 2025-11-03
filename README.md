# Modern Monorepo Starter

This repository bootstraps a strictly typed TypeScript Turborepo that hosts a SvelteKit (Svelte 5) dashboard application alongside a shared UI package powered by Tailwind CSS and Storybook v10.

## Structure

- `apps/dashboard` – SvelteKit app configured with Tailwind CSS and consuming the shared UI package.
- `packages/ui` – Svelte component library exposing reusable UI primitives with Tailwind presets and a Storybook workspace.
- `tsconfig.json` – shared compiler configuration enforcing strict typing across the workspace.
- `turbo.json` – pipeline configuration orchestrating builds, linting, type checks, Storybook, and development tasks.

## Getting Started

```bash
pnpm install
pnpm dev           # run all dev targets
pnpm --filter @apps/dashboard dev  # run only the dashboard
pnpm --filter @repo/ui storybook   # run Storybook locally
```

## Available Tasks

| Command | Description |
| --- | --- |
| `pnpm build` | Build all packages and apps. |
| `pnpm check` | Run type checks across the repo. |
| `pnpm lint` | Lint all workspaces with ESLint. |
| `pnpm storybook` | Launch Storybook for UI package. |

The repository is configured with `noImplicitAny` and additional strictness rules to guarantee type safety throughout the monorepo.
