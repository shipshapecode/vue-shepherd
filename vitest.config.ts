import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'vue-shepherd': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
  },
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'happy-dom',
    typecheck: {
      enabled: true,
      include: ['test/**/*.test-d.ts'],
    },
  },
});
