import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Serves the demo app in dev/, which the Cypress tests drive.
export default defineConfig({
  root: 'dev',
  plugins: [vue()],
  resolve: {
    alias: {
      'vue-shepherd': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
  },
});
