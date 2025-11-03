const sharedPreset = require('../../packages/ui/tailwind.preset.cjs');

module.exports = {
  content: ['./src/**/*.{svelte,ts}'],
  theme: {
    extend: {}
  },
  presets: [sharedPreset]
};
