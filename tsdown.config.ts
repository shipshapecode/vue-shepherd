import { defineConfig } from 'tsdown';

export default defineConfig([
  // For bundlers and Node. Vue and Shepherd stay external, so the app shares
  // one copy of Shepherd (and its `activeTour`) with vue-shepherd.
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    platform: 'neutral',
    target: 'es2022',
    dts: true,
    outputOptions: { exports: 'named' },
  },
  // For a <script> tag. Shepherd is bundled in, since it has no script-tag
  // build of its own; Vue comes from the global `Vue`.
  {
    entry: { 'vue-shepherd': 'src/index.ts' },
    format: 'iife',
    platform: 'browser',
    target: 'es2022',
    globalName: 'VueShepherd',
    minify: true,
    clean: false,
    deps: { neverBundle: ['vue'], alwaysBundle: ['shepherd.js'], onlyBundle: ['shepherd.js'] },
    outputOptions: {
      entryFileNames: '[name].min.js',
      exports: 'named',
      globals: { vue: 'Vue' },
    },
  },
]);
