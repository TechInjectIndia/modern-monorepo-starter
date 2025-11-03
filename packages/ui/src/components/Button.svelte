<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import clsx from 'clsx';

  type ButtonTone = 'primary' | 'secondary' | 'ghost';
  type ButtonType = 'button' | 'submit' | 'reset';

  const dispatch = createEventDispatcher<{ click: MouseEvent }>();

  export let tone: ButtonTone = 'primary';
  export let type: ButtonType = 'button';
  export let disabled = false;

  const toneClass: Record<ButtonTone, string> = {
    primary: 'bg-brand-500 text-white hover:bg-brand-400 focus-visible:ring-brand-200',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 focus-visible:ring-slate-400',
    ghost: 'bg-transparent text-slate-100 hover:bg-slate-800 focus-visible:ring-slate-500'
  };

  const baseClass =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60';

  const handleClick = (event: MouseEvent): void => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    dispatch('click', event);
  };
</script>

<button
  class={clsx(baseClass, toneClass[tone])}
  type={type}
  disabled={disabled}
  on:click={handleClick}
>
  <slot />
</button>
