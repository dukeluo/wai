<script setup lang="ts">
import type { IContentBaseProps } from '../types'
import { useGetTodayDisplayedEvents } from '../composables/useGetTodayDisplayedEvents'
import ContentCard from './ContentCard.vue'

const props = defineProps<IContentBaseProps>()
const eventsForDisplay = useGetTodayDisplayedEvents(props.date)
</script>

<template>
  <ContentCard title="历史上的今天" :items="eventsForDisplay"></ContentCard>
</template>
