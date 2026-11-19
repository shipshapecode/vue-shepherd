import Shepherd, { type Tour, type TourOptions } from 'shepherd.js';
import type { App, Plugin } from 'vue';

export type * from 'shepherd.js';

/**
 * Creates a new Shepherd tour.
 *
 * It is safe to call during server rendering: Shepherd hands back a tour whose
 * methods do nothing until it runs in a browser.
 *
 * @param options The options for the tour.
 * @returns A new `Tour` instance.
 */
export function useShepherd(options?: TourOptions): Tour {
  return new Shepherd.Tour(options);
}

declare module 'vue' {
  interface ComponentCustomProperties {
    /**
     * Creates a new Shepherd tour. Same as `useShepherd`.
     */
    $shepherd: typeof useShepherd;
  }
}

/**
 * Adds `$shepherd` to every component of the app, for the Options API.
 */
const VueShepherdPlugin: Plugin = {
  install(app: App) {
    app.config.globalProperties.$shepherd = useShepherd;
  },
};

export default VueShepherdPlugin;
