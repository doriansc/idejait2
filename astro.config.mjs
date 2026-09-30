import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ideja-it.hr',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
