import { Tour, TourOptions } from 'shepherd.js/tour';
import { ObjectPlugin } from 'vue';

declare module 'vue-shepherd' {
    export function useShepherd(...args: Array<TourOptions>): Tour;
    export default ObjectPlugin;
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $shepherd: (...args: Array<TourOptions>) => Tour;
    }
}
