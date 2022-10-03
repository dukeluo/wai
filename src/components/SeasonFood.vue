<script setup lang="ts">
import _seasonFoodData from '../data/season_food.json'
import { getMonth } from '../helpers/date'
import { shuffle } from '../helpers/random'
import type { Month, SeasonFood } from '../types'
import ContentCard from './ContentCard.vue'

interface ISeasonFoodProps {
  date: Date
  isReversed: boolean
}

const props = defineProps<ISeasonFoodProps>()
const seasonFoodData = _seasonFoodData as SeasonFood
const month = getMonth(props.date).toString() as Month
const { vegetables, fruits } = seasonFoodData[month]
const vegetablesForDisplay = shuffle(vegetables).slice(0, 9)
const fruitsForDisplay = shuffle(fruits).slice(0, 9)
</script>

<template>
  <ContentCard
    title="这个季节吃什么"
    :items="[vegetablesForDisplay.join('、'), fruitsForDisplay.join('、')]"
    :is-reversed="props.isReversed"
  ></ContentCard>
</template>
