import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stevebrownlee.github.io',
  base: '/omp-showcase/',
  integrations: [tailwind()],
});
