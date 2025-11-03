import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
    postcss: true
  }),
  kit: {
    alias: {
      $lib: 'src'
    }
  }
};

export default config;
