<script setup lang="ts">
import BackgroundLayer from './components/BackgroundLayer.vue'
import ContentLayer from './components/ContentLayer.vue'
</script>

<template>
  <ContentLayer />
  <BackgroundLayer />
</template>

<style>
body {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}
</style>
