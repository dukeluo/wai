import { onMounted, ref } from 'vue'
import _todayInHistoryData from '../data/today_in_history.json'
import { getDay, getMonth } from '../helpers/date'
import type { Day, Month, YearInHistory } from '../types'
import { measureParagraph } from '../helpers/style'
import ContentCard from '../components/ContentCard.vue'

const todayInHistoryData = _todayInHistoryData as YearInHistory

export const useGetTodayDisplayedEvents = (date: Date) => {
  const month = getMonth(date).toString() as Month
  const day = getDay(date).toString() as Day
  const todayHistoryEvents = todayInHistoryData[month][day] ?? []
  const cardRef = ref<InstanceType<typeof ContentCard>>()
  const events = ref<string[]>([])
  let index = Math.floor(Math.random() * todayHistoryEvents.length)

  onMounted(() => {
    const container = cardRef.value?.containerRef
    const content = cardRef.value?.contentRef

    if (!container || !content) return

    const maxHeight = container.clientHeight - 52
    let currentHeight = content.clientHeight

    while (true) {
      const event = todayHistoryEvents[index]
      const { height } = measureParagraph(content, event)

      currentHeight += height
      if (currentHeight > maxHeight) break
      events.value.push(event)
      index = (index + 1) % todayHistoryEvents.length
    }
  })

  return { cardRef, events }
}
