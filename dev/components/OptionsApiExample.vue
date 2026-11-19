<script lang="ts">
import { defineComponent } from 'vue';
import type { Tour } from 'vue-shepherd';

export default defineComponent({
  data() {
    return {
      tour: null as Tour | null,
    };
  },

  beforeUnmount() {
    this.tour?.cancel();
  },

  methods: {
    startTour() {
      this.tour?.cancel();
      this.tour = this.$shepherd({ useModalOverlay: true });
      this.tour.addStep({
        attachTo: { element: this.$refs.button as HTMLElement, on: 'bottom' },
        buttons: [{ action: 'complete', text: 'Done' }],
        text: 'Options API test',
      });
      this.tour.start();
    },
  },
});
</script>

<template>
  <button ref="button" class="options-api-start" type="button" @click="startTour">
    Start Options API tour
  </button>
</template>
