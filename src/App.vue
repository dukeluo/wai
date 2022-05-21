<script setup lang="ts">
import ContentLayer from './components/ContentLayer.vue'
</script>

<template>
  <ContentLayer />
</template>

<style>
body {
  font-family: 'Hiragino Sans GB', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
p {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  background-color: #f7f4e3;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
