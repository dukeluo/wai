<script setup lang="ts">
import { useGetTodayDisplayedEvents } from '../composables/useGetTodayDisplayedEvents'
import ContentCard from './ContentCard.vue'

interface IToadyEventProps {
  date: Date
  isReversed: boolean
}

const props = defineProps<IToadyEventProps>()
const { events, cardRef } = useGetTodayDisplayedEvents(props.date)
</script>

<template>
  <ContentCard ref="cardRef" title="历史上的今天" :items="events" :is-reversed="props.isReversed"></ContentCard>
</template>
