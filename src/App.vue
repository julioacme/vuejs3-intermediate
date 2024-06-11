<template>
  <PageNavigation />
  <RouterView />
  <PageFooter />
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageNavigation,
    PageFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
