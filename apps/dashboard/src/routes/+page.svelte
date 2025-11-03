<script lang="ts">
  import { Button, StatCard, type StatTrend } from '@repo/ui';

  interface DashboardStat {
    title: string;
    value: string;
    description?: string;
    trend?: StatTrend;
  }

  const stats: DashboardStat[] = [
    {
      title: 'Active Subscribers',
      value: '8,241',
      description: 'Across all workspaces',
      trend: { direction: 'up', label: '5.6%' }
    },
    {
      title: 'Support Tickets',
      value: '32',
      description: 'Respond within 2 hours',
      trend: { direction: 'down', label: '12.1%' }
    },
    {
      title: 'MRR',
      value: '$128K',
      description: 'Month-over-month growth',
      trend: { direction: 'up', label: '9.3%' }
    }
  ];
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-100">
  <section class="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20">
    <header class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-widest text-sky-400">Welcome</p>
      <h1 class="text-4xl font-bold leading-tight">Turborepo powered SvelteKit dashboard</h1>
      <p class="text-lg text-slate-300">
        This dashboard demonstrates a modern TypeScript-first monorepo with a shared UI kit
        powered by Tailwind CSS and Storybook.
      </p>
    </header>

    <div class="flex flex-wrap gap-3">
      <Button tone="primary">Primary action</Button>
      <Button tone="secondary">Secondary action</Button>
    </div>

    <section aria-label="Key metrics" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {#each stats as stat}
        <StatCard {...stat} />
      {/each}
    </section>
  </section>
</main>
