<script setup lang="ts">
import { useTodayApi } from '../composables/useTodayApi'

interface ITodayHolidayProps {
  date: Date
}

const props = defineProps<ITodayHolidayProps>()
const { events } = useTodayApi(props.date)
</script>

<template>
  <section class="card">
    <h2 class="title">今天是什么日子</h2>
    <section class="items">
      <p v-for="(event, index) in events" :key="index" class="item">{{ event }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/info-card.scss';
</style>
