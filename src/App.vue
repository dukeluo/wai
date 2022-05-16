<script setup lang="ts">
import ContentLayer from './components/ContentLayer.vue'
</script>

<template>
  <ContentLayer :angle="0.6" />
</template>

<style>
body {
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
