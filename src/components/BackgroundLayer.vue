<script setup lang="ts">
import IsoscelesTrapezoidShape from './shapes/IsoscelesTrapezoidShape.vue'
</script>

<template>
  <main>
    <IsoscelesTrapezoidShape
      :upper-bottom="480"
      :lower-bottom="752"
      :height="404"
      color="#e81d27"
      :angle="0.75"
      top="24%"
      left="40%"
    />
  </main>
</template>

<style scoped>
main {
  height: 100%;
  background-color: #f7f4e3;
}
</style>
