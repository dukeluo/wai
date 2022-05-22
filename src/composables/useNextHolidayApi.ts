import { ref, onMounted } from 'vue'
import { getDate } from '../helpers/date'
import { NextHolidayService } from '../services/NextHolidayService'

export const useNextHolidayApi = (time: Date) => {
  const service = new NextHolidayService(getDate(time))
  const name = ref<string>('--')
  const rest = ref<string>('-')

  onMounted(async () => {
    const { code, holiday } = await service.fetch()

    if (code === 0) {
      name.value = holiday.name
      rest.value = holiday.rest
    }
  })

  return { name, rest }
}
