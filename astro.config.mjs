// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import svelte from '@astrojs/svelte';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko'],
  // },
  integrations: [vue(), svelte(), icon(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});