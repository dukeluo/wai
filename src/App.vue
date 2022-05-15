<script setup lang="ts">
import BackgroundLayer from './components/BackgroundLayer.vue'
import ContentLayer from './components/ContentLayer.vue'
</script>

<template>
  <BackgroundLayer />
  <ContentLayer :angle="0.85" top="14%" left="22%" />
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
