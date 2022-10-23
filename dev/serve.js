import { createApp } from 'vue';
import Dev from './serve.vue';
import plugin from '@/entry';

createApp(Dev).use(plugin).mount('#app');
