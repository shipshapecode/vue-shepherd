import type { Plugin } from 'vue';
import { defineComponent } from 'vue';
import { describe, expectTypeOf, it } from 'vitest';
import VueShepherdPlugin, {
  useShepherd,
  type StepOptions,
  type Tour,
  type TourOptions,
} from 'vue-shepherd';

describe('types', () => {
  it('types useShepherd', () => {
    expectTypeOf(useShepherd).parameter(0).toEqualTypeOf<TourOptions | undefined>();
    expectTypeOf(useShepherd({ useModalOverlay: true })).toEqualTypeOf<Tour>();
    expectTypeOf(useShepherd().addStep).toBeFunction();
    expectTypeOf(useShepherd().start).returns.toEqualTypeOf<Promise<void>>();

    // @ts-expect-error useModalOverlay is a boolean
    useShepherd({ useModalOverlay: 'yes' });
    // @ts-expect-error not a tour option
    useShepherd({ notAnOption: true });
  });

  it('types the step options', () => {
    expectTypeOf<StepOptions>().toHaveProperty('attachTo');
    useShepherd().addStep({ text: 'Hi', buttons: [{ action: 'next', text: 'Next' }] });
  });

  it('types the plugin and $shepherd', () => {
    expectTypeOf(VueShepherdPlugin).toEqualTypeOf<Plugin>();

    defineComponent({
      mounted() {
        expectTypeOf(this.$shepherd).toEqualTypeOf<typeof useShepherd>();
        expectTypeOf(this.$shepherd()).toEqualTypeOf<Tour>();
      },
    });
  });
});
