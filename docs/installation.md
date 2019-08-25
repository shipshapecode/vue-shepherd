# Installation

## Direct Download / CDN

https://unpkg.com/vue-shepherd/dist/vue-shepherd 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-shepherd@{{ $version }}/dist/vue-shepherd.js
 
Include vue-shepherd after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-shepherd/dist/vue-shepherd.js"></script>
```

## NPM

```sh
$ npm install vue-shepherd
```

## Yarn

```sh
$ yarn add vue-shepherd
```

When used with a module system, you must explicitly install the `vue-shepherd` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-shepherd from 'vue-shepherd'

Vue.use(vue-shepherd)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-shepherd` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-shepherd.git node_modules/vue-shepherd
$ cd node_modules/vue-shepherd
$ npm install
$ npm run build
```

