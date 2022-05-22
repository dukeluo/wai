export const getTime = (date: Date) =>
  new Intl.DateTimeFormat('zh-CN', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(date)

export const getYear = (date: Date) => date.getFullYear()

export const getMonth = (date: Date) => date.getMonth() + 1

export const getDay = (date: Date) => date.getDate()

export const getWeekday = (date: Date) =>
  new Intl.DateTimeFormat('zh-CN', {
    weekday: 'long',
  }).format(date)

export const getDate = (date: Date) => `${getYear(date)}-${getMonth(date)}-${getDay(date)}`
