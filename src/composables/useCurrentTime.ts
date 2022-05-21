import { ref, onBeforeUnmount } from 'vue'

export const useMoment = () => {
  const moment = ref(new Date())
  const update = () => (moment.value = new Date())
  const timer = setInterval(update, 1000)

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return {
    moment,
  }
}
