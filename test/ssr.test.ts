// @vitest-environment node
import { createSSRApp, defineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { describe, expect, it } from 'vitest';
import VueShepherdPlugin, { useShepherd } from 'vue-shepherd';

describe('server rendering', () => {
  it('renders components that create tours', async () => {
    const Composition = defineComponent({
      setup() {
        const tour = useShepherd({ useModalOverlay: true });
        tour.addStep({ attachTo: { element: '#a', on: 'top' }, text: 'A' });
        return () => h('p', { id: 'a' }, String(tour.isActive()));
      },
    });
    const Options = defineComponent({
      created() {
        this.$shepherd().addStep({ text: 'B' });
      },
      render: () => h('p', 'options'),
    });

    const app = createSSRApp({
      render: () => h('main', [h(Composition), h(Options)]),
    }).use(VueShepherdPlugin);

    await expect(renderToString(app)).resolves.toBe(
      '<main><p id="a">false</p><p>options</p></main>',
    );
  });
});
