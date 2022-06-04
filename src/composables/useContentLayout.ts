import { onMounted, ref } from 'vue'

export const useContentLayout = () => {
  const leftRef = ref<HTMLDivElement>()
  const rightRef = ref<HTMLDivElement>()
  const rightWidth = ref(0)

  onMounted(() => {
    rightWidth.value = Math.floor(leftRef.value?.clientHeight ?? 0)
  })

  return {
    leftRef,
    rightRef,
    rightWidth,
  }
}
