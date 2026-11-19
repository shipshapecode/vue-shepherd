import Shepherd from 'shepherd.js';
import { defineComponent, h, onUnmounted, render } from 'vue';
import { afterEach, describe, expect, it } from 'vitest';
import { useShepherd } from 'vue-shepherd';

afterEach(() => {
  Shepherd.activeTour?.complete();
  document.body.innerHTML = '';
});

describe('README recipes', () => {
  it('renders a Vue component as step text and unmounts it with the tour', async () => {
    let unmounted = false;
    const StepContent = defineComponent({
      props: { name: { type: String, required: true } },
      setup(props) {
        onUnmounted(() => (unmounted = true));
        return () => h('strong', `Hi ${props.name}`);
      },
    });

    const tour = useShepherd();
    const container = document.createElement('div');
    tour.addStep({
      text: () => {
        render(h(StepContent, { name: 'Vue' }), container);
        return container;
      },
      when: {
        destroy: () => render(null, container),
      },
    });

    await tour.start();
    expect(document.querySelector('.shepherd-text strong')?.textContent).toBe('Hi Vue');

    tour.complete();
    expect(unmounted).toBe(true);
  });
});
