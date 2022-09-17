import { ref, onBeforeUnmount, watch, reactive, computed } from 'vue'
import type { IModeConfig } from '../types'
import { Mode } from '../types'

const FULL_MODE: IModeConfig = {
  turn: () => Math.round(Math.random() * 100) / 100,
  isReversed: true,
  interval: -1,
}

const CONTINUOUS_MODE: IModeConfig = {
  turn: () => Math.round(Math.random() * 100) / 100,
  isReversed: false,
  interval: 8,
}

const SOFT_MODE: IModeConfig = {
  turn: () => Math.round(Math.random() * 100) / 100,
  isReversed: false,
  interval: -1,
}

const getConfig = (mode: Mode) => {
  if (mode === Mode.Full) return FULL_MODE
  else if (mode === Mode.Continuous) return CONTINUOUS_MODE
  else if (mode === Mode.Soft) return SOFT_MODE
  else return FULL_MODE
}

const getConfigValue = ({ turn, isReversed, interval }: IModeConfig) => ({
  turn: turn(),
  isReversed,
  interval,
})

export const useMode = () => {
  const mode = ref(Mode.Full)
  const config = computed(() => getConfig(mode.value))
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
