<script setup lang="ts">
import { ref } from 'vue'
import { useGetSeasonFoodData } from '../composables/useGetSeasonFoodData'
import ContentCard from './ContentCard.vue'

interface ISeasonFoodProps {
  date: Date
  isReversed: boolean
}

const props = defineProps<ISeasonFoodProps>()
const cardRef = ref<InstanceType<typeof ContentCard>>()
const data = useGetSeasonFoodData(props.date, cardRef)
</script>

<template>
  <ContentCard
    ref="cardRef"
    title="这个季节吃什么"
    :items="data"
    :is-reversed="props.isReversed"
    :in-w3="true"
  ></ContentCard>
</template>
