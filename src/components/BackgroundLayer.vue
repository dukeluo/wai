<script setup lang="ts">
import IsoscelesTrapezoidShape from './shapes/IsoscelesTrapezoidShape.vue'
</script>

<template>
  <main><IsoscelesTrapezoidShape :upper-bottom="240" :lower-bottom="376" :height="224" color="#e81d27" /></main>
</template>

<style scoped>
main {
  height: 100%;
  background-color: #f7f4e3;
}
</style>
