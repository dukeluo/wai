<script setup lang="ts">
import { useGetTodayDisplayedEvents } from '../composables/useGetTodayDisplayedEvents'
import ContentCard from './ContentCard.vue'

interface IToadyEventProps {
  date: Date
  isReversed: boolean
}

const props = defineProps<IToadyEventProps>()
const eventsForDisplay = useGetTodayDisplayedEvents(props.date)
</script>

<template>
  <ContentCard title="历史上的今天" :items="eventsForDisplay" :is-reversed="props.isReversed"></ContentCard>
</template>
