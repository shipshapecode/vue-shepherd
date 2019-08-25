<template>
  <div>
    Testing
  </div>
</template>

<script>
  export default {
    name: 'ShepherdExample',
    mounted() {
      this.$nextTick(() => {
        const tour = this.$shepherd({
          useModalOverlay: true
        });

        tour.addStep({
          attachTo: { element: this.$el, on: 'top' },
          text: 'Test'
        });

        tour.start();
      });
    }
  };
</script>
