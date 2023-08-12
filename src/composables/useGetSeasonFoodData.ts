import { Ref, onMounted, ref } from 'vue'
import ContentCard from '../components/ContentCard.vue'
import _seasonFoodData from '../data/season_food.json'
import { getMonth } from '../helpers/date'
import { isParagraphMultipleLinesInW3 } from '../helpers/style'
import type { Month, SeasonFood } from '../types'

const seasonFoodData = _seasonFoodData as SeasonFood

const getRandomFoodString = (container: HTMLElement, foods: string[]): string => {
  let str = ''
  let index = Math.floor(Math.random() * foods.length)

  while (true) {
    const food = foods[index]

    if (isParagraphMultipleLinesInW3(container, `${str}、${food}`)) {
      break
    }

    str += str ? `、${food}` : food
    index = (index + 1) % foods.length
  }

  return str
}

export const useGetSeasonFoodData = (date: Date, cardRef: Ref<InstanceType<typeof ContentCard> | undefined>) => {
  const month = getMonth(date).toString() as Month
  const { vegetables, fruits } = seasonFoodData[month]
  const data = ref<string[]>([])

  onMounted(() => {
    const content = cardRef.value?.contentRef

    if (!content) return

    data.value.push(getRandomFoodString(content, vegetables))
    data.value.push(getRandomFoodString(content, fruits))
  })

  return data
}
