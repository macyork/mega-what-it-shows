import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
const lib = (p) => fileURLToPath(new URL(p, import.meta.url));
export default defineConfig({
  plugins: [
    sveltekit({
      extensions: ['.svelte', '.svx'],
      preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: lib('./src/lib/layouts/runbook.svelte') } })],
      adapter: adapter({ pages: 'rendered', assets: 'rendered', strict: false }),
      alias: { '#lib': 'src/lib', '#lib/*': 'src/lib/*' },
      inlineStyleThreshold: 1000000
    })
  ]
});
