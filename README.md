# vue-shepherd

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[vue-shepherd is built and maintained by Ship Shape. Contact us for web app consulting, development, and training for your project](https://shipshape.io/)**.

[![npm version](https://badge.fury.io/js/vue-shepherd.svg)](http://badge.fury.io/js/vue-shepherd)
![Download count all time](https://img.shields.io/npm/dt/vue-shepherd.svg)
[![npm](https://img.shields.io/npm/dm/vue-shepherd.svg)]()
[![CI Build](https://github.com/shipshapecode/vue-shepherd/actions/workflows/main.yml/badge.svg)](https://github.com/shipshapecode/vue-shepherd/actions/workflows/main.yml)

This is a Vue wrapper for the [Shepherd](https://github.com/shipshapecode/shepherd), site tour, library.

```bash
npm install vue-shepherd shepherd.js
```

Install `shepherd.js` alongside `vue-shepherd` so you can import its stylesheet (pnpm and Yarn PnP
only let you import packages you depend on directly).

`vue-shepherd` works with Vue 3 and Nuxt, and is written in TypeScript. Every Shepherd type
(`Tour`, `TourOptions`, `StepOptions`, and so on) is re-exported from `vue-shepherd`.

## Usage

Import Shepherd's styles once, in your `main.ts`:

```js
import 'shepherd.js/dist/css/shepherd.css';
```

### Composition API (suggested)

```vue
<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';
import { useShepherd } from 'vue-shepherd';

const el = useTemplateRef('el');

const tour = useShepherd({
  useModalOverlay: true
});

onMounted(() => {
  tour.addStep({
    attachTo: { element: el.value, on: 'top' },
    buttons: [{ action: 'next', text: 'Next' }],
    text: 'Test'
  });

  tour.start();
});

// The steps point at this component's elements, so end the tour with it.
onBeforeUnmount(() => {
  if (tour.isActive()) {
    tour.cancel();
  }
});
</script>

<template>
  <div ref="el">Testing</div>
</template>
```

`useShepherd(options)` returns a new [Shepherd `Tour`](https://docs.shepherdjs.dev). Everything
else, such as steps, buttons, events, and the modal overlay, is Shepherd's own API.

### Options API

Install the plugin to add `this.$shepherd` to every component:

```js
import { createApp } from 'vue';
import VueShepherdPlugin from 'vue-shepherd';
import 'shepherd.js/dist/css/shepherd.css';
import App from './App.vue';

createApp(App).use(VueShepherdPlugin).mount('#app');
```

```vue
<script>
export default {
  data() {
    return { tour: null };
  },

  mounted() {
    this.tour = this.$shepherd({ useModalOverlay: true });
    this.tour.addStep({
      attachTo: { element: this.$refs.el, on: 'top' },
      text: 'Test'
    });
    this.tour.start();
  },

  beforeUnmount() {
    this.tour?.cancel();
  }
};
</script>

<template>
  <div ref="el">Testing</div>
</template>
```

### Nuxt

No module is needed. Add the styles in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ['shepherd.js/dist/css/shepherd.css']
});
```

`useShepherd` works as shown above. It is safe during server rendering: on the server, Shepherd
returns a tour whose methods do nothing, and the real tour is created when the component runs in
the browser. Start tours in `onMounted`, which only runs in the browser.

For `this.$shepherd`, register the plugin in `plugins/shepherd.ts`:

```ts
import VueShepherdPlugin from 'vue-shepherd';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueShepherdPlugin);
});
```

### Script tag

`dist/vue-shepherd.min.js` includes Shepherd and exposes a `VueShepherd` global, for use with
Vue's global build:

```html
<link rel="stylesheet" href="https://unpkg.com/shepherd.js/dist/css/shepherd.css" />
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/vue-shepherd"></script>
<script>
  const { useShepherd } = VueShepherd;
  Vue.createApp(App).use(VueShepherd.default).mount('#app');
</script>
```

## Recipes

### Use component state in step callbacks

Callbacks such as `beforeShowPromise`, `showOn`, and button actions are plain functions, so they
can use anything in the scope where the tour is created. In `<script setup>`, that includes your
refs, stores, and router:

```js
const router = useRouter();
const { refetch } = useQuery(PROJECTS);

tour.addStep({
  attachTo: { element: '#projects', on: 'bottom' },
  beforeShowPromise: async () => {
    await router.push('/projects');
    await refetch();
  },
  text: 'Your projects'
});
```

To keep steps in their own file, export a function that takes what the steps need and returns
them, then call it from your component: `tour.addSteps(createSteps({ router, refetch }))`. In the
Options API, use arrow functions so `this` stays the component.

### Listen to tour events

Tour events, such as `complete` and `cancel`, are on the tour, not on its steps:

```js
tour.on('complete', () => saveTourSeen());
tour.on('cancel', () => saveTourSeen());
```

Step events (`show`, `hide`, and so on) go in each step's `when` option.

### Show progress

Shepherd ships a counter and progress bar:

```js
import 'shepherd.js/dist/css/theme.css';
import { stepProgress } from 'shepherd.js/motion';

const stop = stepProgress(tour);
```

### Render a Vue component in a step

`text` accepts an element, so you can render a component into one and unmount it when the step is
destroyed:

```js
import { h, render } from 'vue';
import StepContent from './StepContent.vue';

const container = document.createElement('div');

tour.addStep({
  text: () => {
    render(h(StepContent, { name: 'Vue' }), container);
    return container;
  },
  when: {
    destroy: () => render(null, container)
  }
});
```

A component rendered this way is outside your app, so it can't use plugins such as the router or
Pinia, or `inject`. Pass what it needs as props.

## License

`vue-shepherd` is licensed under **AGPL-3.0** (for open source and non-commercial use) with a **Commercial License** available for commercial use.

- **Free** for open source and non-commercial projects under AGPL-3.0
- **Commercial license required** for commercial products and revenue-generating companies

📄 [Read License Details](LICENSE.md)  
💳 [Purchase Commercial License](https://shepherdjs.dev/pricing)
