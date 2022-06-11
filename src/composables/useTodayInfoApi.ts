import { ref, onMounted } from 'vue'
import { getDate } from '../helpers/date'
import { TodayInfoService } from '../services/TodayInfoService'

export const useTodayInfoApi = (time: Date) => {
  const service = new TodayInfoService(getDate(time))
  const isDayOff = ref<boolean>(false)

  onMounted(async () => {
    const { code, type: todayInfo } = await service.fetch()

    if (code === 0) {
      if (todayInfo.type === 1 || todayInfo.type === 2) {
        isDayOff.value = true
      }
    }
  })

  return { isDayOff }
}
