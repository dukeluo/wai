import { ApiService } from './ApiService'

export class NextHolidayService extends ApiService {
  constructor(date: string) {
    super(`https://timor.tech/api/holiday/next/${date}?week=Y`)
  }
}
