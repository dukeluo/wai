<script setup lang="ts">
import _seasonFoodData from '../data/season_food.json'
import { getMonth } from '../helpers/date'
import { shuffle } from '../helpers/shuffle'
import type { IContentBaseProps, Month, SeasonFood } from '../types'

const props = defineProps<IContentBaseProps>()
const seasonFoodData = _seasonFoodData as SeasonFood
const month = getMonth(props.date).toString() as Month
const { vegetables, fruits } = seasonFoodData[month]
const vegetablesForDisplay = shuffle(vegetables).slice(0, 8)
const fruitsForDisplay = shuffle(fruits).slice(0, 8)
</script>

<template>
  <section class="card">
    <h2 class="title">当季吃什么</h2>
    <section class="items">
      <p class="item"><span class="hightlight">蔬菜：</span>{{ vegetablesForDisplay.join('、') }}</p>
      <p class="item"><span class="hightlight">水果：</span>{{ fruitsForDisplay.join('、') }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/info-card.scss';

.hightlight {
  font-weight: bold;
}
</style>
