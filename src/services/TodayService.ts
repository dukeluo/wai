import { ApiService } from './ApiService'

export class TodayService extends ApiService {
  constructor(month: number, day: number) {
    super(`https://api.xhboke.com/today/v1?month=${month}&day=${day}`)
  }
}
