module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lib.json',
    extraFileExtensions: ['.svelte']
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser'
        }
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error'
  }
};
