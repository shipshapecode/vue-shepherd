import Shepherd from 'shepherd.js';
import { ObjectPlugin } from 'vue';

declare module 'vue-shepherd' {
    export function useShepherd(...args: Array<Shepherd.Tour.TourOptions>): Shepherd.Tour;
    export default ObjectPlugin;
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $shepherd: (...args: Array<Shepherd.Tour.TourOptions>) => Shepherd.Tour;
    }
}
