<template>
  <shepherd-example />
</template>


<style>
@import '~shepherd.js/dist/css/shepherd.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
import ShepherdExample from './components/ShepherdExample.vue';

export default {
  components: { ShepherdExample },
};
</script>
