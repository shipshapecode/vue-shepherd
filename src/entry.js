import Shepherd from 'shepherd.js';


// install function executed by Vue.use()
const install = function installVueShepherd(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$shepherd = (...args) => {
    return new Shepherd.Tour(...args);
  };
};

const plugin = {
  install
};

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;
