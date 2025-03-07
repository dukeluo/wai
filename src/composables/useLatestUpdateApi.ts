import { onMounted, ref } from 'vue'
import { LatestUpdateService } from '../services/LatestUpdateService'
import { ILatestUpdate } from '../types'

export function useLatestUpdate() {
  const service = new LatestUpdateService()
  const latestUpdate = ref<ILatestUpdate | null>(null)
  const isLoading = ref(false)
  const error = ref('')

  const fetchAboutContent = async () => {
    try {
      isLoading.value = true
      error.value = ''

      const data = await service.fetch()
      latestUpdate.value = data
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      error.value = 'Failed to load latest update'
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    fetchAboutContent()
  })

  return {
    latestUpdate,
    isLoading,
    error,
  }
}
