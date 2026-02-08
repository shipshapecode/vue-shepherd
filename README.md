# vue-shepherd

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[vue-shepherd is built and maintained by Ship Shape. Contact us for web app consulting, development, and training for your project](https://shipshape.io/)**.

[![npm version](https://badge.fury.io/js/vue-shepherd.svg)](http://badge.fury.io/js/vue-shepherd)
![Download count all time](https://img.shields.io/npm/dt/vue-shepherd.svg)
[![npm](https://img.shields.io/npm/dm/vue-shepherd.svg)]()
[![CI Build](https://github.com/shipshapecode/vue-shepherd/actions/workflows/main.yml/badge.svg)](https://github.com/shipshapecode/vue-shepherd/actions/workflows/main.yml)

This is a Vue wrapper for the [Shepherd](https://github.com/shipshapecode/shepherd), site tour, library.

```bash
npm install vue-shepherd --save
```

## Usage

### Composition API (suggested)

First, in your `main.js`, import the styles

```js
import 'shepherd.js/dist/css/shepherd.css'
```
Then, use shepherd in your components:

```vue
<template>
  <div ref="el">
    Testing
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useShepherd } from 'vue-shepherd'

  const el = ref(null);

  const tour = useShepherd({
    useModalOverlay: true
  });
  
  onMounted(() =>  {
    tour.addStep({
      attachTo: { element: el.value, on: 'top' },
      text: 'Test'
    });

    tour.start();
  });
</script>
```

### Option API

To use vue-shepherd with Option API you have to install the plugin which will add the '$shepherd' function to your vue app.

```js
import { createApp } from 'vue';
import VueShepherdPlugin from 'vue-shepherd';
import '~shepherd.js/dist/css/shepherd.css';

createApp().use(VueShepherdPlugin).mount('#app');
```

```vue
<template>
  <div ref="el">
    Testing
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    data(){
      return {
        tour: null
      }
    },

    methods: {
      createTour(){
        this.tour = this.$shepherd({
          useModalOverlay: true
        });

        this.tour.addStep({
          attachTo: { element: this.$refs.el, on: 'top' },
          text: 'Test'
        });
      }
    },

    mounted(){
      this.createTour();
      this.tour.start();
    }
  });
</script>
```

## SSR
For server side rendering project, you should import the `vue-shepherd.ssr.js` file.

```js
import VueShepherd from 'vue-shepherd/dist/vue-shepherd.ssr.js';
```

## Directives

WIP

## License

`vue-shepherd` is licensed under **AGPL-3.0** (for open source and non-commercial use) with a **Commercial License** available for commercial use.

- **Free** for open source and non-commercial projects under AGPL-3.0
- **Commercial license required** for commercial products and revenue-generating companies

📄 [Read License Details](LICENSE.md)  
💳 [Purchase Commercial License](https://shepherdjs.dev/pricing)
