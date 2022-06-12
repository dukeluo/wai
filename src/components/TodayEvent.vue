<script setup lang="ts">
import type { IContentBaseProps } from '../types'
import { useGetTodayDisplayedEvents } from '../composables/useGetTodayDisplayedEvents'

const props = defineProps<IContentBaseProps>()
const eventsForDisplay = useGetTodayDisplayedEvents(props.date)
</script>

<template>
  <section class="card">
    <h2 class="title">历史上的今天</h2>
    <section class="items">
      <p v-for="(event, index) in eventsForDisplay" :key="index" class="item">{{ event }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/info-card.scss';
</style>
