// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yrguativa.github.io',
  base: '/ministy_home',

  vite: {
    plugins: [tailwindcss()],
  },
});