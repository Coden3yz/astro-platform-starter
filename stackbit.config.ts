import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'astro',
  nodeVersion: '18',
  contentSources: [],
  pagesDir: 'src/pages',
  pageLayoutKey: 'layout'
});
