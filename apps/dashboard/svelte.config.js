import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter,
    alias: {
      $ui: '@repo/ui/src'
    }
  },
  preprocess: preprocess({
    postcss: true
  })
};

export default config;
