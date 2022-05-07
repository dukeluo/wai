<script setup lang="ts">
import IsoscelesTrapezoidShape from './shapes/IsoscelesTrapezoidShape.vue'
</script>

<template>
  <main><IsoscelesTrapezoidShape :upper-bottom="100" :lower-bottom="200" :height="100" color="#e81d27" /></main>
</template>

<style scoped>
main {
  height: 100%;
  background-color: #f7f4e3;
}
</style>
