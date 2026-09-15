// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ali-belkadhi.github.io',
  base: process.env.NODE_ENV === 'production' ? '/wedding/' : '/',
  integrations: [tailwind({
    applyBaseStyles: false
  })]
});

