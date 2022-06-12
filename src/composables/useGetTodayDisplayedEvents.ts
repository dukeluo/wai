import _todayInHistoryData from '../data/today_in_history.json'
import { getDay, getMonth } from '../helpers/date'
import type { Day, Month, YearInHistory } from '../types'

const todayInHistoryData = _todayInHistoryData as YearInHistory

const MAX_EVENT_CHAR_COUNT = 250

export const useGetTodayDisplayedEvents = (date: Date): string[] => {
  const month = getMonth(date).toString() as Month
  const day = getDay(date).toString() as Day
  const todayHistoryEvents = todayInHistoryData[month][day] ?? []
  const events: string[] = []
  let index = Math.floor(Math.random() * todayHistoryEvents.length)
  let counter = 0

  while (counter + todayHistoryEvents[index].length <= MAX_EVENT_CHAR_COUNT) {
    const event = todayHistoryEvents[index]

    events.push(event)
    index = (index + 1) % todayHistoryEvents.length
    counter += event.length
  }

  return events
}
