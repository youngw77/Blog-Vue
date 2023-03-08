<template>
  <div id="app">
    <blog-container></blog-container>
  </div>
</template>

<script>
import BlogContainer from './components/BlogContainer.vue';

export default {
  name: 'App',
  components: {BlogContainer},
  methods: {},
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
