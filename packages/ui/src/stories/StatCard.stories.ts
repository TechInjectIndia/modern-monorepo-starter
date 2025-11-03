import type { Meta, StoryObj } from '@storybook/sveltekit';
import StatCard, { type StatTrend } from '../components/StatCard.svelte';

type StatCardProps = typeof StatCard extends new (...parameters: never[]) => infer Component
  ? Component extends { $$prop_def: infer Props }
    ? Props
    : never
  : never;

const defaultTrend: StatTrend = {
  direction: 'up',
  label: '12.5%'
};

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  args: {
    title: 'Total Revenue',
    value: '$128K',
    description: 'Compared to last quarter',
    trend: defaultTrend
  }
} satisfies Meta<StatCardProps>;

type Story = StoryObj<typeof meta>;

export default meta;

export const PositiveTrend: Story = {
  args: {
    trend: {
      direction: 'up',
      label: '8.4%'
    }
  }
};

export const NegativeTrend: Story = {
  args: {
    trend: {
      direction: 'down',
      label: '3.1%'
    }
  }
};

export const WithoutTrend: Story = {
  args: {
    trend: undefined,
    description: 'Awaiting new data',
    value: '$0.00'
  }
};
