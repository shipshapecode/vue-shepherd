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

## Installation

### NPM

```bash
npm install vue-shepherd --save
```

When using with a module system, you must explicitly install vue-shepherd via Vue.use():

```js
import Vue from 'vue';
import VueShepherd from 'vue-shepherd';

Vue.use(VueShepherd);
```

## Usage

You will need to import the styles first:

```css
@import '~shepherd.js/dist/css/shepherd.css';
```

The plugin extends Vue with a set of directives and $shepherd() constructor function.

### Constructor Function

```vue
<template>
  <div>
    Testing
  </div>
</template>

<script>
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

### Directives

WIP
