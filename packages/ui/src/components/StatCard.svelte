<script lang="ts">
  type TrendDirection = 'up' | 'down';

  export interface StatTrend {
    direction: TrendDirection;
    label: string;
  }

  export let title: string;
  export let value: string | number;
  export let description: string | undefined = undefined;
  export let trend: StatTrend | undefined = undefined;

  const trendIcon: Record<TrendDirection, string> = {
    up: '▲',
    down: '▼'
  };

  const trendTone: Record<TrendDirection, string> = {
    up: 'text-emerald-400',
    down: 'text-rose-400'
  };
</script>

<section class="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl shadow-black/20">
  <header class="mb-6 flex items-center justify-between text-sm font-semibold uppercase tracking-widest text-slate-400">
    <span>{title}</span>
    {#if trend}
      <span class={trendTone[trend.direction]}>
        {trendIcon[trend.direction]} {trend.label}
      </span>
    {/if}
  </header>
  <div class="space-y-3">
    <p class="text-4xl font-bold text-white">{value}</p>
    {#if description}
      <p class="text-sm text-slate-400">{description}</p>
    {/if}
  </div>
</section>
