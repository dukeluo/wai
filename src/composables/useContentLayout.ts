import { onUpdated, ref } from 'vue'

const RIGHT_DEFAULT_WIDTH = 300
const RIGHT_HEIGHT = 220

export const useContentLayout = () => {
  const leftRef = ref<HTMLDivElement>()
  const rightRef = ref<HTMLDivElement>()
  const rightWidth = ref(RIGHT_DEFAULT_WIDTH)
  const offset1 = ref(0)
  const offset2 = ref(0)

  onUpdated(() => {
    const leftHeight = Math.floor(leftRef.value?.clientHeight ?? 0)

    if (leftHeight !== rightWidth.value) {
      rightWidth.value = leftHeight
      offset1.value = RIGHT_HEIGHT - leftHeight
      offset2.value = Math.floor((leftHeight - RIGHT_HEIGHT) / 2)
    }
  })

  return {
    leftRef,
    rightRef,
    rightWidth,
    offset1,
    offset2,
  }
}
