<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGetTodayEventData } from '../composables/useGetTodayEventData'
import ContentCard from './ContentCard.vue'

interface IToadyEventProps {
  date: Date
  isReversed: boolean
}

const props = defineProps<IToadyEventProps>()
const cardRef = ref<InstanceType<typeof ContentCard>>()
const { events } = useGetTodayEventData(props.date, cardRef)

onMounted(() => {
  const container = cardRef.value?.containerRef

  if (!container) return

  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  container.style.justifyContent = 'center'
})
</script>

<template>
  <ContentCard ref="cardRef" title="历史上的今天" :items="events" :is-reversed="props.isReversed"></ContentCard>
</template>
