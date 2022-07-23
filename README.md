# vue-shepherd

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[vue-shepherd is built and maintained by Ship Shape. Contact us for web app consulting, development, and training for your project](https://shipshape.io/)**.

[![npm version](https://badge.fury.io/js/vue-shepherd.svg)](http://badge.fury.io/js/vue-shepherd)
![Download count all time](https://img.shields.io/npm/dt/vue-shepherd.svg)
[![npm](https://img.shields.io/npm/dm/vue-shepherd.svg)]()
[![Build Status](https://travis-ci.org/shipshapecode/vue-shepherd.svg)](https://travis-ci.org/shipshapecode/vue-shepherd)
[![Code Climate](https://codeclimate.com/github/shipshapecode/vue-shepherd/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/vue-shepherd)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/vue-shepherd/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/vue-shepherd/coverage)

This is a Vue wrapper for the [Shepherd](https://github.com/shipshapecode/shepherd), site tour, library.

```bash
npm install vue-shepherd --save
```

## Install

The plugin will add the global function `$shepherd()`.

### Vue 2

```js
import Vue from 'vue';
import VueShepherdPlugin from 'vue-shepherd';
import '~shepherd.js/dist/css/shepherd.css';

Vue.use(VueShepherdPlugin);
```

### Vue 3

```js
import { createApp } from 'vue';
import VueShepherdPlugin from 'vue-shepherd';
import '~shepherd.js/dist/css/shepherd.css';

createApp().use(VueShepherdPlugin).mount('#app');
```

## Usage

### Options API

```vue
<template>
  <div>
    Testing
  </div>
</template>

<script></script>
  export default {
    name: 'ShepherdExample',
    mounted() {
      this.$nextTick(() => {
        const tour = this.$shepherd({
          useModalOverlay: true
        });

        tour.addStep({
          attachTo: { element: this.$el, on: 'top' },
          text: 'Test'
        });

        tour.start();
      });
    }
  };
</script>
```

### Composition API

```vue
  <template>
    <div ref="el">Testing</div>
  </template>

  <script>
    import { defineComponent, onMounted, ref } from '@vue/composition-api'; // if vue <= 2.6
    import { defineComponent, onMounted, ref } from 'vue'; // if vue >=2.7 | >3.0
    import { useShepherd } from 'vue-shepherd';
    
    export default defineComponent({
      setup(){
        const el = ref(null);
        onMounted(() => {
            const tour = useShepherd({
              useModalOverlay: true
            });

            tour.addStep({
              attachTo: { element: el.value, on: 'top' },
              text: 'Test'
            });

            tour.start();
        });
      }
    })
  </script>
```

## Directives

WIP
