import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from '../components/Button.svelte';

type ButtonProps = typeof Button extends new (...parameters: never[]) => infer Component
  ? Component extends { $$prop_def: infer Props }
    ? Props
    : never
  : never;

type ButtonStoryProps = ButtonProps & { label: string };

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    tone: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost']
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset']
    }
  },
  args: {
    tone: 'primary',
    disabled: false,
    type: 'button',
    label: 'Click me'
  },
  render: (args) => {
    const { label, ...buttonProps } = args;
    return {
      Component: Button,
      props: buttonProps,
      slots: {
        default: label
      }
    };
  }
} satisfies Meta<ButtonStoryProps>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    tone: 'primary',
    label: 'Primary action'
  }
};

export const Secondary: Story = {
  args: {
    tone: 'secondary',
    label: 'Secondary action'
  }
};

export const Ghost: Story = {
  args: {
    tone: 'ghost',
    label: 'Ghost action'
  }
};
