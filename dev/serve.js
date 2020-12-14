import Vue from 'vue';
import Dev from './serve.vue';
import plugin from '@/entry';

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
