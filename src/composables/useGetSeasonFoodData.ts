import { Ref, onMounted, ref } from 'vue'
import ContentCard from '../components/ContentCard.vue'
import _seasonFoodData from '../data/season_food.json'
import { getMonth } from '../helpers/date'
import { isParagraphMultipleLinesInW3 } from '../helpers/style'
import type { Month, SeasonFood } from '../types'

const seasonFoodData = _seasonFoodData as SeasonFood

const getRandomFoods = (container: HTMLElement, foods: string[]) => {
  const start = Math.floor(Math.random() * foods.length)
  const items: string[] = []
  let index = start

  while (true) {
    const food = foods[index]

    items.push(food)
    if (isParagraphMultipleLinesInW3(container, items.join('、'))) {
      items.pop()
      if (index === start) break
    }
    index = (index + 1) % foods.length
  }

  return items
}

export const useGetSeasonFoodData = (date: Date, cardRef: Ref<InstanceType<typeof ContentCard> | undefined>) => {
  const month = getMonth(date).toString() as Month
  const { vegetables, fruits } = seasonFoodData[month]
  const data = ref<string[]>([])

  onMounted(() => {
    const content = cardRef.value?.contentRef

    if (!content) return

    data.value = [getRandomFoods(content, vegetables).join('、'), getRandomFoods(content, fruits).join('、')]
  })

  return data
}
