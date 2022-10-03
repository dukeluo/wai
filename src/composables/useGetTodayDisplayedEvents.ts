import _todayInHistoryData from '../data/today_in_history.json'
import { getDay, getMonth } from '../helpers/date'
import type { Day, Month, YearInHistory } from '../types'

const todayInHistoryData = _todayInHistoryData as YearInHistory

const MAX_CHAR_PER_LINE = 22
const MAX_LINE = 14
const MIN_LINE = 12

export const useGetTodayDisplayedEvents = (date: Date): string[] => {
  const month = getMonth(date).toString() as Month
  const day = getDay(date).toString() as Day
  const todayHistoryEvents = todayInHistoryData[month][day] ?? []
  const events: string[] = []
  let index = Math.floor(Math.random() * todayHistoryEvents.length)
  let lineCounter = 0

  while (lineCounter < MIN_LINE) {
    const event = todayHistoryEvents[index]
    const rows = Math.ceil(event.length / MAX_CHAR_PER_LINE)

    if (lineCounter + rows < MAX_LINE) {
      events.push(event)
      lineCounter += rows
    }
    index = (index + 1) % todayHistoryEvents.length
  }

  return events
}
