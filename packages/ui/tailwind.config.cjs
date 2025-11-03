const preset = require('./tailwind.preset.cjs');

module.exports = {
  content: ['./src/**/*.{svelte,ts}'],
  presets: [preset]
};
