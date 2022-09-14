<script setup lang="ts">
import _seasonFoodData from '../data/season_food.json'
import { getMonth } from '../helpers/date'
import { shuffle } from '../helpers/shuffle'
import type { IContentBaseProps, Month, SeasonFood } from '../types'
import ContentCard from './ContentCard.vue'

const props = defineProps<IContentBaseProps>()
const seasonFoodData = _seasonFoodData as SeasonFood
const month = getMonth(props.date).toString() as Month
const { vegetables, fruits } = seasonFoodData[month]
const vegetablesForDisplay = shuffle(vegetables).slice(0, 8)
const fruitsForDisplay = shuffle(fruits).slice(0, 8)
</script>

<template>
  <ContentCard
    title="这个季节吃什么"
    :items="[vegetablesForDisplay.join('、'), fruitsForDisplay.join('、')]"
  ></ContentCard>
</template>
