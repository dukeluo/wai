import { ref, onMounted } from 'vue'
import { LatestUpdateService } from '../services/LatestUpdateService'

export interface ILatestUpdate {
  message: string
}

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
