import Shepherd from "shepherd.js";
import { isVue2, isVue3 } from "vue-demi";

const shepherdKey = "$shepherd";
export const useShepherd = (...args) => new Shepherd.Tour(...args);

// install function executed by Vue.use()
const install = function installVueShepherd(Vue) {
  if (install.installed) return;
  install.installed = true;

  if (isVue2) {
    Vue.prototype[shepherdKey] = useShepherd;
  }

  if (isVue3) {
    Vue.config.globalProperties[shepherdKey] = useShepherd;
  }
};

const plugin = { install };

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
if (isVue2 && "false" === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;
