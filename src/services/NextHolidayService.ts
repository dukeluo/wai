import { ApiService } from './ApiService'

export class NextHolidayService extends ApiService {
  constructor(day: string) {
    super(`https://timor.tech/api/holiday/next/${day}?week=Y`)
  }
}
