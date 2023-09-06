<script setup lang="ts">
import ContentView from './views/ContentView.vue'
</script>

<template>
  <ContentView />
</template>

<style>
h1,
h2,
h3 {
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
}

h4 {
  margin: 0.1rem 0 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
}

a {
  color: rgba(12, 12, 10, 0.8);
  text-decoration: none;
}

a:hover {
  color: #e81c27;
}

ul {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

ul > li {
  padding: 0;
}

ol {
  margin: 0;
  padding: 0;
}

/* --------------------------------------------------------*/
body {
  margin: 0;

  font-family: 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
  font-weight: 400;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #f7f4e3;
}
</style>
