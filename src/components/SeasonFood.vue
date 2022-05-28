<script setup lang="ts">
import seasonFoodData from '../data/season_food.json'
import { getMonth } from '../helpers/date'
import { shuffle } from '../helpers/shuffle'

type Month = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

interface ISeasonFoodProps {
  date: Date
}

const props = defineProps<ISeasonFoodProps>()
const key = `${getMonth(props.date)}` as Month
const { vegetables, fruits } = seasonFoodData[key]
const vegetableDisplayString = shuffle(vegetables).slice(0, 8).join('、')
const fruitDisplayString = shuffle(fruits).slice(0, 8).join('、')
</script>

<template>
  <section class="card">
    <h2 class="title">当季吃什么</h2>
    <section class="items">
      <p class="item"><span class="hightlight">蔬菜：</span>{{ vegetableDisplayString }}</p>
      <p class="item"><span class="hightlight">水果：</span>{{ fruitDisplayString }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/info-card.scss';

.hightlight {
  font-weight: bold;
}
</style>
