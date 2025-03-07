import { Mode } from '../types'
import type { IModeConfig } from '../types'
import { randomNumber } from '../helpers/random'
import { counter } from '../helpers/counter'

export const MODE_CONFIG: Record<Mode, IModeConfig> = {
  [Mode.Full]: {
    turn: () => randomNumber(0, 1),
    isReversed: true,
    interval: -1,
  },
  [Mode.Continuous]: {
    turn: () => [0.15, 0.85][(counter.next().value ?? 0) % 2],
    isReversed: false,
    interval: 4,
  },
  [Mode.Soft]: {
    turn: () => (Math.random() > 0.5 ? randomNumber(0.05, 0.15) : randomNumber(0.85, 1)),
    isReversed: false,
    interval: -1,
  },
}
