import { ref, onMounted } from 'vue'
import { getDay, getMonth } from '../helpers/date'
import { TodayService } from '../services/TodayService'

export const useTodayApi = (time: Date) => {
  const service = new TodayService(getMonth(time), getDay(time))
  const events = ref<string[]>([])

  onMounted(async () => {
    const data = await service.fetch()

    events.value = data['节日、风俗习惯']
  })

  return { events }
}
