import { Mode } from '../types'

export const MODE_CONFIG = {
  [Mode.Full]: {
    turn: () => Math.round(Math.random() * 100) / 100,
    isReversed: true,
    interval: -1,
  },
  [Mode.Continuous]: {
    turn: () => Math.round(Math.random() * 100) / 100,
    isReversed: false,
    interval: 8,
  },
  [Mode.Soft]: {
    turn: () => Math.round(Math.random() * 100) / 100,
    isReversed: false,
    interval: -1,
  },
}
