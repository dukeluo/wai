<script setup lang="ts">
import _todayInHistoryData from '../data/today_in_history.json'
import { getDay, getMonth } from '../helpers/date'
import { shuffle } from '../helpers/shuffle'
import type { Day, IContentBaseProps, Month, YearInHistory } from '../types'

const props = defineProps<IContentBaseProps>()
const todayInHistoryData = _todayInHistoryData as YearInHistory
const month = getMonth(props.date).toString() as Month
const day = getDay(props.date).toString() as Day
const todayHistoryEvents = todayInHistoryData[month][day] ?? []
const eventsForDisplay = shuffle(todayHistoryEvents).slice(0, 5)
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
