import { computed, onBeforeMount, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { MODE_CONFIG } from '../constants/mode'
import { storage } from '../helpers/storage'
import type { IModeConfig, IModeConfigValue } from '../types'
import { Mode } from '../types'

const MODE_KEY = 'setting.mode'

const getConfigValue = ({ turn, isReversed, interval }: IModeConfig): IModeConfigValue => ({
  turn: turn(),
  isReversed,
  interval,
})

export const useMode = () => {
  const mode = ref<Mode>(Mode.Full)
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

  watch(mode, (m) => {
    const newValue = update()

    clear()
    storage.setItem(MODE_KEY, m)

    if (newValue.interval > 0) {
      timer = setInterval(update, newValue.interval * 1000)
    }
  })

  onBeforeMount(async () => {
    const settingMode = (await storage.getItem(MODE_KEY)) as Mode | null

    mode.value = settingMode ?? Mode.Full
  })

  onBeforeUnmount(clear)

  return { mode, config: value }
}
