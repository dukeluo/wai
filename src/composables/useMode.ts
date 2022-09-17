import { ref, onBeforeUnmount, watch, reactive, computed } from 'vue'
import { MODE_CONFIG } from '../constants/mode'
import type { IModeConfig, IModeConfigValue } from '../types'
import { Mode } from '../types'

const getConfigValue = ({ turn, isReversed, interval }: IModeConfig): IModeConfigValue => ({
  turn: turn(),
  isReversed,
  interval,
})

export const useMode = () => {
  const mode = ref(Mode.Full)
  const config = computed(() => MODE_CONFIG[mode.value])
  const value = reactive(getConfigValue(config.value))
  let timer: NodeJS.Timeout

  const update = () => {
    const newValue = getConfigValue(config.value)

    value.turn = newValue.turn
    value.isReversed = newValue.isReversed
    value.interval = newValue.interval

    return newValue
  }

  const clear = () => timer && clearTimeout(timer)

  watch(mode, () => {
    const newValue = update()

    clear()
    if (newValue.interval > 0) {
      timer = setInterval(update, newValue.interval * 1000)
    }
  })

  onBeforeUnmount(clear)

  return { mode, config: value }
}
