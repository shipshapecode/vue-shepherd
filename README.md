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
### Yarn

```bash
yarn add vue-shepherd
```

### Setup
- create new file vue-shepherd.js in plugins folder

```js
import Vue from 'vue';
import VueShepherd from 'vue-shepherd';

Vue.use(VueShepherd);
```

- create file css and import style

```css
@import '~shepherd.js/dist/css/shepherd.css';
```

- add plugins to nuxt.config.js

```js
\\ vue-stepherd
...
plugins:[
  ...,
  '~/plugins/vue-stepherd'
]
...
\\ css style
css:[
  ...,
  '~/assests/style.css'
]
```
### Example 

```vue
<template>
  <div>
    <div id="step-1">Step one ...</div>
    <div id="step-2">Step two ...</div>
    <div id="step-3">Step three ...</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    const step = [
      {
        attachTo:{
          element: '#step-1',
          on: 'bottom'
        },
        text: 'one ...',
        buttons: [
          {
            action() {
              return this.cancel()
            },
            classes: 'shepherd-button-secondary',
            text: 'Skip',
          },
          {
            action() {
              return this.next()
            },
            text: 'Next',
          },
        ],
      },
      {
        attachTo:{
          element: '#step-2',
          on: 'bottom'
        },
        text: 'two ...',
        buttons: [
          {
            action() {
              return this.back()
            },
            classes: 'shepherd-button-secondary',
            text: 'Back',
          },
          {
            action() {
              return this.next()
            },
            text: 'Next',
          },
        ],
      },
      {
        attachTo:{
          element: '#step-3',
          on: 'bottom'
        },
        text: 'three ...',
        buttons: [
          {
            action() {
              return this.back()
            },
            classes: 'shepherd-button-secondary',
            text: 'Back',
          },
          {
            action() {
              return this.complete()
            },
            text: 'Finish',
          },
        ],
      },
    ]
    return {
      step
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
  head() {
    return {
      title: 'Index Page',
    }
  },
  mounted() {
    this.$nextTick(() => {
      const tour = this.$shepherd({
        useModalOverlay: true,
      })
      tour.addSteps(step)
      tour.start()
    })
  },
}
</script>
```

### Directives

WIP
