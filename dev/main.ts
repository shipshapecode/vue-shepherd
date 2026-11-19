import { createApp } from 'vue';
import VueShepherdPlugin from 'vue-shepherd';
import 'shepherd.js/dist/css/shepherd.css';
import App from './App.vue';

createApp(App).use(VueShepherdPlugin).mount('#app');
