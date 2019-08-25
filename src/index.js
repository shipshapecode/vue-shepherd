import Shepherd from 'shepherd.js';

const version = '__VERSION__';

const install = Vue => {
  Vue.prototype.$shepherd = (...args) => {
    return new Shepherd.Tour(...args);
  };
};

const plugin = {
  install,
  version
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
