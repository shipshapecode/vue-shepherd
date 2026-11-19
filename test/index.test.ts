import { mount } from '@vue/test-utils';
import Shepherd from 'shepherd.js';
import { createApp, defineComponent, h } from 'vue';
import { afterEach, describe, expect, it } from 'vitest';
import VueShepherdPlugin, { useShepherd } from 'vue-shepherd';

afterEach(() => {
  Shepherd.activeTour?.complete();
  document.body.innerHTML = '';
});

describe('useShepherd', () => {
  it('returns a Shepherd tour', () => {
    const tour = useShepherd();

    expect(tour).toBeInstanceOf(Shepherd.Tour);
  });

  it('passes the options to the tour', () => {
    const tour = useShepherd({ tourName: 'docs', useModalOverlay: true });

    expect(tour.options.useModalOverlay).toBe(true);
    expect(tour.id).toMatch(/^docs--/);
  });

  it('returns a new tour each time', () => {
    expect(useShepherd()).not.toBe(useShepherd());
  });

  it('runs a tour through the shared Shepherd instance', async () => {
    const target = document.createElement('div');
    document.body.append(target);

    const tour = useShepherd();
    tour.addStep({ attachTo: { element: target, on: 'top' }, text: 'Hello' });
    await tour.start();

    expect(Shepherd.activeTour).toBe(tour);
    expect(document.querySelector('.shepherd-text')?.textContent).toBe('Hello');

    tour.complete();

    expect(tour.isActive()).toBe(false);
    expect(document.querySelector('.shepherd-element')).toBeNull();
  });
});

describe('VueShepherdPlugin', () => {
  it('adds $shepherd to components', () => {
    let tour: unknown;
    const Component = defineComponent({
      created() {
        tour = this.$shepherd({ useModalOverlay: true });
      },
      render: () => h('div'),
    });

    mount(Component, { global: { plugins: [VueShepherdPlugin] } });

    expect(tour).toBeInstanceOf(Shepherd.Tour);
  });

  it('installs into every app, not just the first', () => {
    const first = createApp({ render: () => null }).use(VueShepherdPlugin);
    const second = createApp({ render: () => null }).use(VueShepherdPlugin);

    expect(first.config.globalProperties.$shepherd).toBe(useShepherd);
    expect(second.config.globalProperties.$shepherd).toBe(useShepherd);
  });
});
